import React from 'react'
import Head from 'next/head'
import * as R from 'ramda'
import { ImSpinner2 } from 'react-icons/im'
import { BiRss } from 'react-icons/bi'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import Banners from '@/components/Banners'
import Card from '@/components/Card'
import SectionSubscription from '@/components/SectionSubscription'
import TagSearch from '@/components/TagSearch'
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
    <>
      <Head>
        <title>Blog - Phala Network</title>
        <link ref="canonical" href={`https://phala.network/blog`} />
        <link rel="alternate" type="application/rss+xml" title="Phala News" href="https://phala.network/rss.xml" />
        <link rel="alternate" type="application/atom+xml" title="Phala News" href="https://phala.network/atom.xml" />
      </Head>
      <div
        style={{
          background: `
            radial-gradient(1200px 600px at 70% 35%, rgba(199,255,170,0.7), rgba(255,255,255,0) 60%),
            linear-gradient(180deg, #ffffff, #f9fff0 40%, #ffffff 70%)
          `,
          minHeight: '100vh'
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
                      "flex items-center gap-2 pl-5 pr-6 py-2 transition-all",
                      "rounded-lg border bg-white border-[#526420] text-[#526420] font-bold",
                      "hover:bg-[#EBFDB9]",
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
            <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 xl:grid-cols-2 2xl:grid-cols-2 mt-8">
              {pages.map((page) => (
                <Card key={page.id} page={page} />
              ))}
            </div>
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
                    'rounded-lg',
                    isLoading ? 'opacity-75' : null
                  )}
                  onClick={() => {
                    load()
                    if (typeof window !== 'undefined' && (window as any).umami) {
                      (window as any).umami.track('blog_load_more')
                    }
                  }}
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
                'bg-[#FAFEED] rounded-xl',
                'flex flex-col items-center',
                'py-12 px-8'
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
        <SectionSubscription />
      </div>
    </>
  )
}

async function retrieveTags() {
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
  })
  const tags = R.without(['Changelog', 'Pinned'], R.map(
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
      ]
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
    props: {
      tags,
      initialPages: pages,
      nextCursor: next_cursor,
      bannerPages: queryBannerPages ? queryBannerPages.pages : [],
    },
  }
}
