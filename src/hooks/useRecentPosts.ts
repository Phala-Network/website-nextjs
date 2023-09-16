import { use, useMemo } from 'react'
import { type QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import { queryDatabase } from '@/lib/notion-client'
import * as R from 'ramda'

export function useRecentPosts(filter?: QueryDatabaseParameters['filter'], limit?: number) {
  const finalFilter = useMemo(() => {
    return R.mergeDeepRight({
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
      ]
    }, filter || {})
  }, [filter])
  const page_size = useMemo(() => limit || 6, [limit])

  return use(queryDatabase({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter: finalFilter,
    sorts: [
      {
        property: 'Published Time',
        direction: 'descending',
      },
    ],
    page_size,
  }))
}
