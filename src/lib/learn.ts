import type { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import * as R from 'ramda'
import slugify from 'slugify'

import { env } from '@/env'
import {
  createNotionClient,
  getParsedPage,
  getParsedPagesByProperties,
  type ParsedListPage,
  type ParsedPage,
  queryDatabase,
} from '@/lib/notion-client'
import { coverRemap } from './post-client'

// Types for learn action
export type GetLearnArticlesParams = {
  cursor?: string
  tag?: string
  page_size?: number
}

export type GetLearnArticlesResult = {
  pages: ParsedListPage[]
  next_cursor: string | null
}

export function generateSlug(title: string): string {
  const slug = slugify(title, { lower: true, strict: true })
  return slug
}

export function getLearnMetadata(
  page: ParsedPage,
  isPreview: boolean = false,
): Metadata {
  let id = page.id.replace(/-/g, '')
  id = coverRemap[id] || id
  const postCover = `https://img0.phala.world/cover/1200x630/${id}.jpg?z=123`

  return {
    title: page.title,
    openGraph: {
      url: `https://${env.VERCEL_PROJECT_PRODUCTION_URL}/learn/${page.slug}`,
      locale: 'en_US',
      images: [
        {
          url: postCover,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      images: [postCover],
    },
    alternates: {
      canonical: `https://${env.VERCEL_PROJECT_PRODUCTION_URL}/learn/${page.slug}`,
    },
    ...(isPreview && { robots: { index: false, follow: false } }),
  }
}

function getBaseFilter(excludeSlug?: string) {
  const filter: QueryDatabaseParameters['filter'] = {
    and: [
      {
        property: 'Status',
        status: {
          equals: 'Published',
        },
      },
      {
        property: 'Tags',
        multi_select: {
          does_not_contain: 'Changelog',
        },
      },
    ],
  }

  if (excludeSlug) {
    // Notion stores slugs with leading /, so we need to add it back for the query
    const notionSlug = excludeSlug.startsWith('/') ? excludeSlug : `/${excludeSlug}`
    filter.and.push({
      property: 'Custom URL',
      rich_text: {
        does_not_equal: notionSlug,
      },
    })
  }

  return filter
}

export async function getLearnArticleBySlug(slug: string): Promise<ParsedPage> {
  // Notion stores slugs with leading /, so we need to add it back for the query
  const pages = await getParsedPagesByProperties({
    database_id: env.NOTION_LEARN_DATABASE_ID,
    properties: {
      'Custom URL': slug.startsWith('/') ? slug : `/${slug}`,
    },
    tags: ['learn', `learn-${slug}`],
  })

  if (pages.length === 0) {
    notFound()
  }

  return pages[0]
}

export async function getLearnArticleById(id: string): Promise<ParsedPage> {
  try {
    const page = await getParsedPage(id, { tags: ['learn', `learn-${id}`] })
    if (!page) {
      notFound()
    }
    return page
  } catch (error) {
    console.error('Error fetching learn article by ID:', error)
    notFound()
  }
}

export async function getRecentLearnArticles(
  size: number = 3,
  excludeSlug?: string,
): Promise<ParsedListPage[]> {
  const { pages } = await queryDatabase(
    {
      database_id: env.NOTION_LEARN_DATABASE_ID,
      filter: getBaseFilter(excludeSlug),
      sorts: [
        {
          property: 'Published Time',
          direction: 'descending',
        },
      ],
      page_size: size,
    },
    { tags: ['learn', 'learn-recent'] },
  )

  return pages
}

export async function getSimilarLearnArticles(
  page: ParsedPage,
): Promise<ParsedListPage[]> {
  if (page.tags.length === 0) {
    return []
  }

  const filter = getBaseFilter(page.slug)
  filter.and.push({
    property: 'Tags',
    multi_select: {
      contains: page.tags[0],
    },
  })

  const { pages } = await queryDatabase(
    {
      database_id: env.NOTION_LEARN_DATABASE_ID,
      filter,
      sorts: [{ property: 'Published Time', direction: 'descending' }],
      page_size: 3,
    },
    { tags: ['learn', `learn-similar-${page.tags[0]}`] },
  )

  return pages
}

export async function retrieveLearnTags(): Promise<string[]> {
  const client = createNotionClient(['learn', 'learn-tags'])
  const database = await client.databases.retrieve({
    database_id: env.NOTION_LEARN_DATABASE_ID,
  })
  const tags = R.without(
    ['Changelog', 'Pinned', 'not-listed'],
    R.map(
      R.prop('name'),
      R.pathOr([], ['properties', 'Tags', 'multi_select', 'options'], database),
    ),
  )
  return tags
}

export async function getNavigationLearnArticles(
  page: ParsedPage,
): Promise<{ beforePages: ParsedListPage[]; nextPages: ParsedListPage[] }> {
  if (!page.publishedTime) {
    return { beforePages: [], nextPages: [] }
  }

  const query = (isBefore: boolean) => {
    const filter = getBaseFilter(page.slug)
    const dateString = new Date(page.publishedTime).toISOString()
    filter.and.push({
      property: 'Published Time',
      date: {
        ...(isBefore ? { before: dateString } : { after: dateString }),
      },
    })
    return queryDatabase(
      {
        database_id: env.NOTION_LEARN_DATABASE_ID,
        filter,
        sorts: [
          {
            property: 'Published Time',
            direction: isBefore ? 'descending' : 'ascending',
          },
        ],
        page_size: 1,
      },
      { tags: ['learn', 'learn-nav'] },
    )
  }

  const [beforeResult, nextResult] = await Promise.all([
    query(true),
    query(false),
  ])

  return {
    beforePages: beforeResult.pages,
    nextPages: nextResult.pages,
  }
}
