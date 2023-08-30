import React from 'react'
import * as R from 'ramda'
import { ImSpinner2 } from 'react-icons/im'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import Banners from '@/pages/components/Banners'
import Card from '@/pages/components/Card'
import SectionSubscription from '@/pages/components/SectionSubscription'
import TagLink from '@/pages/components/TagLink'
import { notion, queryDatabase, ParsedListPage } from '@/lib/notion-client'
import useQueryPosts from '@/hooks/useQueryPosts'

interface Props {
  tags: string[]
  nextCursor: string
  initialPages: ParsedListPage[]
  bannerPages: ParsedListPage[]
}

export default function BlogPage({ tags, initialPages, nextCursor, bannerPages }: Props) {
  const {
    pages = [],
    isLoading,
    load,
    hasMore,
  } = useQueryPosts({ initialPages, initialCursor: nextCursor })
  return (
    <div
      className={cn(
        'min-h-screen',
        'bg-gradient-to-b from-green-600 to-green-500'
      )}
    >
      <div
        className={cn(
          'safe-viewport',
          'grid grid-cols-2 lg:grid-cols-20 3xl:grid-cols-24',
          'py-32'
        )}
      >
        <div
          className={cn(
            'col-start-1 col-span-full lg:col-span-18 lg:col-start-2 3xl:col-start-4 3xl:col-span-18'
          )}
        >
          <h1
            className={cn(
              'text-black-850 text-xl',
              'text-4xl lg:text-5xl',
              'font-black'
            )}
          >
            Blog
          </h1>
          <section className={cn('mt-8')}>
            <Banners pages={bannerPages} />
          </section>
          <section
            className={cn(
              'grid mt-8',
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
              'gap-4'
            )}
          >
            {pages.map((page) => (
              <Card key={page.id} page={page} />
            ))}
          </section>
          <div
            className={cn(
              'pt-20 pb-10 w-full flex items-center justify-center'
            )}
          >
            {hasMore ? (
              <button
                className={cn(
                  'py-4 px-16',
                  'inline-flex flex-row items-center justify-center',
                  'bg-white text-green-800 text-xl font-bold',
                  'rounded-[160px]',
                  isLoading ? 'opacity-75' : null
                )}
                onClick={load}
                disabled={isLoading}
              >
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{
                    opacity: isLoading ? 1 : 0,
                    width: isLoading ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className={cn(isLoading ? 'mr-2' : '')}
                >
                  <ImSpinner2 className="h-5 w-5 text-brand-700 animate-spin" />
                </motion.span>
                View All Blogs
              </button>
            ) : null}
          </div>
          <section
            className={cn(
              'bg-[#FAFEED] rounded-3xl',
              'flex flex-col items-center',
              'py-12 px-8'
            )}
          >
            <h2 className="text-black font-bold text-2xl">Search by Tag</h2>
            <div className="flex flex-wrap gap-3 mt-12 w-full">
              {tags.map((tag, i) => (
                <TagLink key={`${i}`} href={`/tags/${tag}`}>
                  {tag}
                </TagLink>
              ))}
            </div>
          </section>
        </div>
      </div>
      <SectionSubscription />
    </div>
  )
}

async function retrieveTags() {
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
  })
  const tags = R.without(['Changelog'], R.map(
    R.prop('name'),
    R.pathOr([], ['properties', 'Tags', 'multi_select', 'options'], database)
  ))
  return tags
}

export const getStaticProps = async () => {
  const tags = await retrieveTags()
  const queryBannerPages = await queryDatabase({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter: {
      property: 'Tags',
      multi_select: {
        contains: 'Weekly report',
      },
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
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
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
    props: {
      tags,
      initialPages: pages,
      nextCursor: next_cursor,
      bannerPages: queryBannerPages ? queryBannerPages.pages : [],
    },
  }
}
