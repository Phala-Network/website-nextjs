import { isFullPage } from '@notionhq/client'
import { verifyKey } from 'discord-interactions'
import { revalidatePath } from 'next/cache'
import * as R from 'ramda'

import { env } from '@/env'
import attempt from '@/lib/attempt-promise'
import {
  clearPagesByPropertiesCache,
  clearQueryDatabaseCache,
  notion,
  queryDatabase,
} from '@/lib/notion-client'
import { generateSlug } from '@/lib/post'

export const verify = async (
  body: string,
  publicKey: string,
  headers: Headers,
): Promise<boolean> => {
  const signature = headers.get('x-signature-ed25519')
  const timestamp = headers.get('x-signature-timestamp')

  if (!signature || !timestamp) {
    return false
  }

  return verifyKey(body, signature, timestamp, publicKey)
}

export const adminPublishPost = async (
  pageId: string,
  interactionToken: string,
) => {
  const { DISCORD_APP_ID, DISCORD_TOKEN } = env
  const page = await notion.pages.retrieve({ page_id: pageId })

  if (!isFullPage(page)) {
    throw new Error('Not a full page')
  }

  let slug = R.map(
    R.prop('plain_text'),
    R.pathOr([], ['Custom URL', 'rich_text'], page.properties),
  )
    .join(' ')
    .split('?')[0]
  const title = R.map(
    R.prop('plain_text'),
    R.pathOr([], ['Title', 'title'], page.properties),
  ).join(' ')
  const tags = R.map(
    R.prop('name'),
    R.pathOr([], ['Tags', 'multi_select'], page.properties),
  )
  const status: string = R.pathOr(
    'Drafting',
    ['Status', 'status', 'name'],
    page.properties,
  )

  // biome-ignore lint/suspicious/noExplicitAny: any
  const properties: Record<string, any> = {
    'Post Type': { select: { name: 'Post' } },
  }

  if (status !== 'Published') {
    properties['Status'] = {
      status: { name: 'Published' },
    }
    properties['Published Time'] = {
      date: { start: new Date().toISOString() },
    }
  }

  if (!slug) {
    slug = `/${generateSlug(title)}`
    properties['Custom URL'] = {
      rich_text: [{ text: { content: slug } }],
    }
  }

  const [, result] = await attempt(
    notion.pages.update({
      page_id: page.id,
      properties,
    }),
  )
  if (!result) {
    throw new Error('Failed to update page')
  }
  await Promise.all([
    clearQueryDatabaseCache(),
    clearPagesByPropertiesCache({
      'Custom URL': slug,
    }),
  ])

  const encodedSlug = encodeURIComponent(slug.replace(/^\//, ''))
  revalidatePath('/blog')
  revalidatePath(`/posts${encodedSlug}`)
  for (const tag of tags) {
    revalidatePath(`/tags/${encodeURIComponent(tag)}`)
  }
  await fetch(
    `https://discord.com/api/v10/webhooks/${DISCORD_APP_ID}/${interactionToken}/messages/@original`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bot ${DISCORD_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `Published: ${title}`,
      }),
    },
  )
}

export async function list(interactionToken: string, host: string) {
  const { DISCORD_APP_ID, NOTION_POSTS_DATABASE_ID, DISCORD_TOKEN } = env
  if (!DISCORD_APP_ID || !NOTION_POSTS_DATABASE_ID || !DISCORD_TOKEN) {
    throw new Error('Not configured')
  }

  const { pages } = await queryDatabase({
    database_id: NOTION_POSTS_DATABASE_ID,
    filter: {
      property: 'Post Type',
      select: { equals: 'Post' },
    },
    sorts: [
      {
        property: 'Last Edited Time',
        direction: 'descending',
      },
    ],
    page_size: 10,
  })

  await fetch(
    `https://discord.com/api/v10/webhooks/${DISCORD_APP_ID}/${interactionToken}/messages/@original`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bot ${DISCORD_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: pages
          .map(
            (page) =>
              `[${page.title}](https://${host}/posts/preview/${page.id})`,
          )
          .join('\n'),
        flags: 1 << 2,
      }),
    },
  )
}
