import { NextApiResponse, NextApiRequest } from 'next'
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'

import { queryDatabase } from '@/lib/notion-client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cursor = '', tag = '', page_size = 18 } = req.query
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
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter,
    page_size: page_size as number,
    start_cursor: cursor as string,
  })
  return res.json({ pages, next_cursor })
}
