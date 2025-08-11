import type { Metadata } from 'next'
import * as R from 'ramda'
import { BiRss } from 'react-icons/bi'

import Banners from '@/components/Banners'
import TagSearch from '@/components/TagSearch'
import { env } from '@/env'
import { notion, queryDatabase } from '@/lib/notion-client'
import { cn } from '@/lib/utils'
import BlogClientWrapper from './BlogClientWrapper'

async function retrieveTags() {
  const database = await notion.databases.retrieve({
    database_id: env.NOTION_POSTS_DATABASE_ID,
  })
  const tags = R.without(
    ['Changelog', 'Pinned'],
    R.map(
      R.prop('name'),
      R.pathOr([], ['properties', 'Tags', 'multi_select', 'options'], database),
    ),
  )
  return tags
}

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
    nextCursor: next_cursor || '',
    bannerPages: queryBannerPages ? queryBannerPages.pages : [],
  }
}

export const metadata: Metadata = {
  title: 'Blog',
}

export const revalidate = 3600

export default async function BlogPage() {
  const { tags, initialPages, nextCursor, bannerPages } = await getBlogData()

  return (
    <div
      style={{
        background: `
          radial-gradient(1200px 600px at 70% 35%, rgba(199,255,170,0.7), rgba(255,255,255,0) 60%),
          linear-gradient(180deg, #ffffff, #f9fff0 40%, #ffffff 70%)
        `,
        minHeight: '100vh',
      }}
    >
      <section className="py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-8 md:mb-14 lg:mb-16">
            <div className="flex items-start justify-between gap-8">
              <div>
                <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
                  Blog
                </h1>
              </div>
              <div>
                <a
                  href="/atom.xml"
                  target="_blank"
                  rel="noopener"
                  className={cn(
                    'flex items-center gap-2 pl-5 pr-6 py-2 transition-all',
                    'rounded-lg border bg-white border-primary-800 text-primary-800 font-bold',
                    'hover:bg-[#EBFDB9]',
                  )}
                >
                  <BiRss className="w-6 h-6" />
                  <span>Subscribe</span>
                </a>
              </div>
            </div>
          </div>
          <section className={cn('mt-8')}>
            <Banners pages={bannerPages} />
          </section>
          <BlogClientWrapper
            initialPages={initialPages}
            nextCursor={nextCursor}
          />
          <section
            className={cn(
              'bg-[#FAFEED] rounded-xl',
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
