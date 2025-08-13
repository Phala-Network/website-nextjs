import type { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'

import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const cursor = searchParams.get('cursor')
  const tag = searchParams.get('tag')
  const page_size = searchParams.get('page_size') || 18
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
        contains: tag as string,
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
    page_size: page_size as number,
    start_cursor: cursor as string,
  })

  return new Response(JSON.stringify({ pages, next_cursor }), {
    status: 200,
  })
}
