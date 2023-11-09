import { NextApiResponse, NextApiRequest } from 'next'
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'

import { queryDatabase } from '@/lib/notion-client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cursor, page_size = 20 } = req.query
  const filter: QueryDatabaseParameters['filter'] = {
    and: [
      {
        property: 'Post Type',
        select: {
          equals: 'Post',
        },
      },
    ],
  }
  const { next_cursor, pages } = await queryDatabase({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter,
    sorts: [
      {
        property: 'Created Time',
        direction: 'descending',
      },
    ],
    page_size: parseInt(page_size as string, 10),
    start_cursor: cursor as string,
  })
  return res.json({
    pages,
    next_cursor,
  })
}
