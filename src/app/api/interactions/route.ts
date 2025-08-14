import { InteractionResponseType, InteractionType } from 'discord-interactions'
import { headers } from 'next/headers'
import { after, type NextRequest } from 'next/server'

import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'
import { adminPublishPost, list, verify } from './lib'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  const json = await request.json()
  const headersList = await headers()
  const { DISCORD_PUBLIC_KEY, NOTION_POSTS_DATABASE_ID } = env
  if (!DISCORD_PUBLIC_KEY || !NOTION_POSTS_DATABASE_ID) {
    return Response.json({ error: 'Not configured' }, { status: 500 })
  }
  if (!verify(JSON.stringify(json), DISCORD_PUBLIC_KEY, headersList)) {
    return Response.json({ error: 'Bad signature' }, { status: 401 })
  }

  const { type, data, token } = json

  if (type === InteractionType.PING) {
    return Response.json(
      {
        type: InteractionResponseType.PONG,
      },
      { status: 200 },
    )
  }

  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name, options } = data
    if ((name === 'publish' || name === 'update') && options.length > 0) {
      after(() =>
        adminPublishPost(options[0].value, token).catch(console.error),
      )

      return Response.json({
        type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
        data: { flags: 1 << 6 },
      })
    } else if (name === 'list') {
      after(() => list(token, headersList.get('host')).catch(console.error))

      return Response.json({
        type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
        data: { flags: 1 << 6 },
      })
    }
  } else if (type === InteractionType.APPLICATION_COMMAND_AUTOCOMPLETE) {
    const { name, options } = data
    if (name === 'publish' || name === 'update') {
      const { pages } = await queryDatabase({
        database_id: NOTION_POSTS_DATABASE_ID,
        filter:
          options.length > 0 && options[0].value
            ? {
                property: 'Title',
                rich_text: {
                  contains: options[0].value,
                },
              }
            : {
                property: 'Title',
                rich_text: {
                  is_not_empty: true,
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
      return Response.json({
        type: InteractionResponseType.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT,
        data: {
          choices: pages.map((page) => ({
            name:
              page.title.length > 45
                ? `${page.title.substring(0, 42)}...`
                : page.title,
            value: page.id,
          })),
        },
      })
    }
  }

  return Response.json({ type: InteractionResponseType.PONG })
}
