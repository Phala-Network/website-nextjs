import type { Metadata } from 'next'
import { BiRss } from 'react-icons/bi'

import TagSearch from '@/components/TagSearch'
import { Button } from '@/components/ui/button'
import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'
import { retrieveTags } from '@/lib/post'
import { cn } from '@/lib/utils'
import Banners from './banner'
import List from './list'

export const revalidate = 7200

async function getBlogData() {
  const tags = await retrieveTags()
  const queryBannerPages = await queryDatabase({
    database_id: env.NOTION_POSTS_DATABASE_ID,
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
    database_id: env.NOTION_POSTS_DATABASE_ID,
    filter: {
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
    initialCursor: next_cursor,
    bannerPages: queryBannerPages ? queryBannerPages.pages : [],
  }
}

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function BlogPage() {
  const { tags, initialPages, initialCursor, bannerPages } = await getBlogData()

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-32 max-w-7xl mx-auto">
        <div className="container">
          <div className="mb-8 md:mb-14 lg:mb-16">
            <div className="flex items-start justify-between gap-8">
              <div>
                <h1 className="mb-4 w-full text-4xl font-bold md:mb-5 md:text-5xl lg:mb-6">
                  Phala Blog
                </h1>
              </div>
              <div>
                <Button asChild size="lg">
                  <a href="/atom.xml" target="_blank" rel="noopener">
                    <BiRss className="w-6 h-6" />
                    <span>Subscribe</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <section className={cn('mt-8')}>
            <Banners pages={bannerPages} />
          </section>
          <List
            initialPages={initialPages}
            initialCursor={initialCursor}
          />
          <section
            className={cn(
              'bg-muted rounded-2xl border',
              'flex flex-col items-center',
              'py-12 px-8',
            )}
          >
            <h2 className="text-black font-bold text-2xl">Search by Tag</h2>
            <TagSearch
              tags={tags}
              priorityTags={['Phala Cloud', 'TEE', 'Usecases']}
            />
          </section>
        </div>
      </section>
    </div>
  )
}
