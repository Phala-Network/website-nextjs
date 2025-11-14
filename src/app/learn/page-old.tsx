import type { Metadata } from 'next'

import { env } from '@/env'
import { retrieveLearnTags } from '@/lib/learn'
import { queryDatabase } from '@/lib/notion-client'
import ArticleGrid from './article-grid'
import CategoryFilter from './category-filter'
import FeaturedSection from './featured-section'
import LearnHero from './learn-hero'

export const revalidate = 7200

async function getLearnData() {
  const tags = await retrieveLearnTags()

  // Get featured article (most recent pinned or weekly/monthly report)
  const queryFeaturedPages = await queryDatabase({
    database_id: env.NOTION_LEARN_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Status',
          status: {
            equals: 'Published',
          },
        },
        {
          or: [
            {
              property: 'Tags',
              multi_select: {
                contains: 'Pinned',
              },
            },
            {
              property: 'Tags',
              multi_select: {
                contains: 'Weekly report',
              },
            },
            {
              property: 'Tags',
              multi_select: {
                contains: 'Monthly report',
              },
            },
          ],
        },
      ],
    },
    sorts: [
      {
        property: 'Published Time',
        direction: 'descending',
      },
    ],
    page_size: 1,
  })

  // Get recent articles
  const { next_cursor, pages } = await queryDatabase({
    database_id: env.NOTION_LEARN_DATABASE_ID,
    filter: {
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
        {
          property: 'Tags',
          multi_select: {
            does_not_contain: 'not-listed',
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Published Time',
        direction: 'descending',
      },
    ],
    page_size: 18,
  })

  return {
    tags,
    initialPages: pages,
    nextCursor: next_cursor || '',
    featuredPage: queryFeaturedPages?.pages?.[0] || null,
  }
}

export const metadata: Metadata = {
  title: 'Learn - Phala Network',
  description:
    'Master confidential computing, TEE technology, and privacy-preserving AI. Explore guides, tutorials, and best practices for building on Phala Cloud.',
}

export default async function LearnPage() {
  const { tags, initialPages, nextCursor, featuredPage } = await getLearnData()

  return (
    <div className="min-h-screen">
      <LearnHero />

      {featuredPage && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
          <FeaturedSection page={featuredPage} />
        </section>
      )}

      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryFilter tags={tags} />
        <ArticleGrid initialPages={initialPages} nextCursor={nextCursor} />
      </section>
    </div>
  )
}
