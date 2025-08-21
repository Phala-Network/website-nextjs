import { isFullPage } from '@notionhq/client'
import { verifyKey } from 'discord-interactions'
import * as R from 'ramda'

import { env } from '@/env'
import attempt from '@/lib/attempt-promise'
import { notion, queryDatabase } from '@/lib/notion-client'
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
  // Check required environment variables first
  const { DISCORD_APP_ID, DISCORD_TOKEN, REVALIDATE_TOKEN } = env
  if (!DISCORD_APP_ID || !DISCORD_TOKEN || !REVALIDATE_TOKEN) {
    throw new Error('Discord configuration not found')
  }
  const response = (message: string) =>
    fetch(
      `https://discord.com/api/v10/webhooks/${DISCORD_APP_ID}/${interactionToken}/messages/@original`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bot ${DISCORD_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      },
    )

  const page = await notion.pages.retrieve({ page_id: pageId })

  if (!isFullPage(page)) {
    return response(`Error: Not a full page`)
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
    return response(`Error: Failed to update page`)
  }

  try {
    const encodedSlug = encodeURIComponent(slug.replace(/^\//, ''))

    // Revalidate blog page and related paths using the revalidate API
    // This is necessary because revalidatePath() doesn't work in API route contexts
    const baseUrl = new URL(
      '/api/revalidate',
      `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`,
    )

    // Set the revalidate token on the base URL for security
    baseUrl.searchParams.set('token', REVALIDATE_TOKEN)

    // Prevent double encoding of the path parameter
    const baseUrlString = baseUrl.toString()

    const revalidatePromises = [
      // Revalidate the main blog listing page
      fetch(`${baseUrlString}&path=/blog`),
      // Revalidate the specific post page
      fetch(`${baseUrlString}&path=/posts/${encodedSlug}`),
      // Revalidate all tag pages for this post
      ...tags.map((tag) => fetch(`${baseUrlString}&path=/tags/${tag}`)),
    ]

    // Wait for all revalidation requests to complete
    await Promise.all(revalidatePromises)
  } catch (error) {
    console.error('Failed to revalidate paths:', error)
    return response(`Error: Failed to revalidate paths`)
  }
  return response(`Published: ${title}`)
}

export async function list(interactionToken: string) {
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
              `[${page.title}](https://${env.VERCEL_PROJECT_PRODUCTION_URL}/posts/preview/${page.id})`,
          )
          .join('\n'),
        flags: 1 << 2,
      }),
    },
  )
}
