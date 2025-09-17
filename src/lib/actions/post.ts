'use server'

import type { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'

import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'
import type { GetPostsParams, GetPostsResult } from '@/lib/post'

export async function getPosts(
  params: GetPostsParams = {},
): Promise<GetPostsResult> {
  if (!env.NOTION_POSTS_DATABASE_ID) {
    return { pages: [], next_cursor: null }
  }

  const { cursor, tag, page_size = 18 } = params

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
    ],
  }

  if (tag) {
    filter.and.push({
      property: 'Tags',
      multi_select: {
        contains: tag,
      },
    })
  }

  const { next_cursor, pages } = await queryDatabase({
    database_id: env.NOTION_POSTS_DATABASE_ID,
    filter,
    sorts: [
      {
        property: 'Published Time',
        direction: 'descending',
      },
    ],
    page_size,
    start_cursor: cursor || undefined,
  })

  return { pages, next_cursor }
}
