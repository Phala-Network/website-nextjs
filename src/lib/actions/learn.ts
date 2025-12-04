'use server'

import type { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'

import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'
import type { GetLearnArticlesParams, GetLearnArticlesResult } from '@/lib/learn'

export async function getLearnArticles(
  params: GetLearnArticlesParams = {},
): Promise<GetLearnArticlesResult> {
  const { cursor, tag, page_size = 18 } = params

  const filter: QueryDatabaseParameters['filter'] = {
    and: [
      {
        property: 'Status',
        status: {
          equals: 'Published',
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

  const tags = tag ? ['learn', 'learn-articles', `learn-tag-${tag}`] : ['learn', 'learn-articles']
  const { next_cursor, pages } = await queryDatabase(
    {
      database_id: env.NOTION_LEARN_DATABASE_ID,
      filter,
      sorts: [
        {
          property: 'Published Time',
          direction: 'descending',
        },
      ],
      page_size,
      start_cursor: cursor || undefined,
    },
    { tags },
  )

  return { pages, next_cursor }
}
