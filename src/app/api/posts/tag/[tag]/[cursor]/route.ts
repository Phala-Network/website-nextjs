import type { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import { NextResponse } from 'next/server'

import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'

// ISR cache - same as blog page
export const revalidate = 7200
export const dynamicParams = true

// Return empty array - pages will be generated on-demand and cached
export function generateStaticParams() {
  return []
}

// Fixed page size - not configurable
const PAGE_SIZE = 18

// Validate cursor format (Notion cursors are UUIDs)
const CURSOR_REGEX = /^[a-f0-9-]{36}$/i

interface RouteParams {
  params: Promise<{ tag: string; cursor: string }>
}

export async function GET(_: Request, { params }: RouteParams) {
  const { tag: encodedTag, cursor } = await params
  const tag = decodeURIComponent(encodedTag)

  // Validate cursor format
  if (!CURSOR_REGEX.test(cursor)) {
    return NextResponse.json(
      { error: 'Invalid cursor format' },
      { status: 400 },
    )
  }

  // Validate tag (allow only alphanumeric, spaces, hyphens, and some special chars)
  if (!/^[\w\s\-&.]+$/i.test(tag)) {
    return NextResponse.json({ error: 'Invalid tag format' }, { status: 400 })
  }

  const filter: QueryDatabaseParameters['filter'] = {
    and: [
      {
        property: 'Status',
        status: {
          equals: 'Published',
        },
      },
      {
        property: 'Post Type',
        select: {
          equals: 'Post',
        },
      },
      {
        property: 'Tags',
        multi_select: {
          does_not_contain: 'Changelog',
        },
      },
      {
        property: 'Tags',
        multi_select: {
          does_not_contain: 'not-listed',
        },
      },
      {
        property: 'Tags',
        multi_select: {
          contains: tag,
        },
      },
    ],
  }

  const { next_cursor, pages } = await queryDatabase(
    {
      database_id: env.NOTION_POSTS_DATABASE_ID,
      filter,
      sorts: [
        {
          property: 'Published Time',
          direction: 'descending',
        },
      ],
      page_size: PAGE_SIZE,
      start_cursor: cursor,
    },
    { tags: ['blog', 'blog-posts', `blog-tag-${tag}`] },
  )

  return NextResponse.json({
    pages,
    nextCursor: next_cursor,
    hasMore: !!next_cursor,
  })
}
