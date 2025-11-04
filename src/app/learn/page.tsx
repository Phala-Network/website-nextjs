import type { Metadata } from 'next'

import TagSearch from '@/components/TagSearch'
import { env } from '@/env'
import { retrieveLearnTags } from '@/lib/learn'
import { queryDatabase } from '@/lib/notion-client'
import { cn } from '@/lib/utils'
import Banners from './banner'
import List from './list'

export const revalidate = 7200

async function getLearnData() {
  const tags = await retrieveLearnTags()
  const queryBannerPages = await queryDatabase({
    database_id: env.NOTION_LEARN_DATABASE_ID,
    filter: {
      or: [
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
        {
          property: 'Tags',
          multi_select: {
            contains: 'Pinned',
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
    page_size: 5,
  })
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
    bannerPages: queryBannerPages ? queryBannerPages.pages : [],
  }
}

export const metadata: Metadata = {
  title: 'Learn',
  description:
    'Learn about Phala Network, TEE technology, and building on Phala Cloud',
}

export default async function LearnPage() {
  const { tags, initialPages, nextCursor, bannerPages } = await getLearnData()

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-32 max-w-7xl mx-auto">
        <div className="container">
          <div className="mb-8 md:mb-14 lg:mb-16">
            <div className="flex items-start justify-between gap-8">
              <div>
                <h1 className="mb-4 w-full text-4xl font-bold md:mb-5 md:text-5xl lg:mb-6">
                  Learn
                </h1>
              </div>
            </div>
          </div>
          <section className={cn('mt-8')}>
            <Banners pages={bannerPages} />
          </section>
          <List initialPages={initialPages} nextCursor={nextCursor} />
          <section
            className={cn(
              'bg-muted rounded-2xl border',
              'flex flex-col items-center',
              'py-12 px-8',
            )}
          >
            <h2 className="text-black font-bold text-2xl">Search by Tag</h2>
            <TagSearch tags={tags} priorityTags={[]} />
          </section>
        </div>
      </section>
    </div>
  )
}
