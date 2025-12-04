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

  // Normalize and validate slug
  const normalizedSlug = slug.replace(/^\//, '')
  const validSlug = generateSlug(normalizedSlug)

  // Update slug if needed and set properties
  if (!slug || slug !== `/${validSlug}`) {
    slug = `/${slug ? validSlug : generateSlug(title)}`
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
    // Revalidate blog cache using tags via the revalidate API
    // This is necessary because revalidateTag() doesn't work in API route contexts
    const apiUrl = new URL(
      '/api/revalidate',
      `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`,
    )

    // Set the revalidate token on the base URL for security
    apiUrl.searchParams.set('token', REVALIDATE_TOKEN)

    const revalidateByTag = (tag: string) => {
      const url = new URL(apiUrl)
      url.searchParams.set('tag', tag)
      return fetch(url)
    }

    const slugWithoutSlash = slug.replace(/^\//, '')
    const revalidatePromises = [
      // Revalidate blog posts list cache (affects /blog page and /api/posts pagination)
      revalidateByTag('blog-posts'),
      // Revalidate banners (in case this post is pinned/weekly/monthly report)
      revalidateByTag('blog-banners'),
      // Revalidate the specific post page cache
      revalidateByTag(`blog-${slugWithoutSlash}`),
      // Revalidate RSS feed
      revalidateByTag('blog-rss'),
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

  const { pages } = await queryDatabase(
    {
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
    },
    { tags: ['blog', 'blog-admin'] },
  )

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
