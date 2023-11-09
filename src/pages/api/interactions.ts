import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import {
  InteractionType,
  InteractionResponseType,
  verifyKey,
} from 'discord-interactions'

import { queryDatabase } from '@/lib/notion-client'
import attempt from '@/lib/attempt-promise'

export const config = {
  runtime: 'edge',
}

export const verify = (body: string, headers: Headers): boolean => {
  const publicKey = process.env.DISCORD_PUBLIC_KEY!

  const signature = headers.get('x-signature-ed25519')
  const timestamp = headers.get('x-signature-timestamp')

  if (!signature || !timestamp) {
    return false
  }

  return verifyKey(body, signature, timestamp, publicKey)
}

export default async function handler(
  request: NextRequest,
  context: NextFetchEvent,
) {
  const json = await request.json()
  if (verify(JSON.stringify(json), request.headers) == false) {
    return NextResponse.json({ error: 'Bad signature' }, { status: 401 })
  }
  const { type, data, token } = json
  if (type === InteractionType.PING) {
    return NextResponse.json({
      type: InteractionResponseType.PONG
    }, { status: 200 })
  }
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name, options } = data
    if (name === 'publish' && options.length > 0) {
      context.waitUntil(
        fetch(
          `${request.nextUrl.protocol}//${request.headers.get('host')}/api/admin_publish_post`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: options[0].value,
              interaction_token: token,
            })
          }
        )
      )
      return NextResponse.json({
        type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          flags: 1 << 6
        }
      })
    } else if (name === 'list') {
      context.waitUntil(
        fetch(
          `${request.nextUrl.protocol}//${request.headers.get('host')}/api/interactions_respond`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: 'list',
              interaction_token: token,
            })
          }
        )
      )
      return NextResponse.json({
        type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          flags: 1 << 6
        }
      })
    }
  } else if (type === InteractionType.APPLICATION_COMMAND_AUTOCOMPLETE) {
    const { name, options } = data
    if (name === 'publish' && options.length > 0 && options[0].value) {
      const { pages } = await queryDatabase({
        database_id: process.env.NOTION_POSTS_DATABASE_ID!,
        filter: {
          property: 'Title',
          rich_text: {
            contains: options[0].value,
          },
        },
        sorts: [
          {
            property: 'Created Time',
            direction: 'descending',
          },
        ],
        page_size: 5,
      })
      return NextResponse.json({
        type: InteractionResponseType.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT,
        data: {
          choices: pages.map(page => ({
            name: page.title,
            value: page.id
          }))
        }
      })
    }
  }
  return NextResponse.json({ type: InteractionResponseType.PONG })
}
