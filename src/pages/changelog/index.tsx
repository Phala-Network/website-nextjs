import React from 'react'
import Head from 'next/head'
import { ImSpinner2 } from 'react-icons/im'
import { BiRss } from 'react-icons/bi'
import { motion } from 'framer-motion'
import dayjs from 'dayjs'

import { cn } from '@/lib/utils'
import SectionSubscription from '@/components/SectionSubscription'
import TagLink from '@/components/TagLink'
import { queryDatabase, ParsedListPage } from '@/lib/notion-client'
import useQueryPosts from '@/hooks/useQueryPosts'

interface Props {
  nextCursor: string
  initialPages: ParsedListPage[]
}

export default function ChangelogPage({ initialPages, nextCursor }: Props) {
  const {
    pages = [],
    isLoading,
    load,
    hasMore,
  } = useQueryPosts({ initialPages, initialCursor: nextCursor })
  return (
    <>
      <Head>
        <title>Changelog - Phala Network</title>
        <link rel="alternate" type="application/rss+xml" title="Phala News" href="https://phala.network/changelog/rss.xml" />
        <link rel="alternate" type="application/atom+xml" title="Phala News" href="https://phala.network/changelog/atom.xml" />
      </Head>
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
            <header className="flex flex-row items-center justify-between gap-4">
              <h1
                className={cn(
                  'text-black-850 text-xl',
                  'text-4xl lg:text-5xl',
                  'font-black',
                  'mx-1'
                )}
              >
                Changelog
              </h1>
              <div>
                <a
                  href="/changelog/atom.xml"
                  target="_blank"
                  rel="noopener"
                  className={cn(
                    "flex items-center gap-2 pl-5 pr-6 py-2 transition-all",
                    "rounded-full border bg-white border-[#526420] text-[#526420] font-bold",
                    "hover:bg-[#EBFDB9]",
                  )}
                >
                  <BiRss className="w-6 h-6" />
                  <span>Subscribe</span>
                </a>
              </div>
            </header>

            <section
              className={cn(
                "mx-0.5 my-8 p-8",
                'bg-[#FAFEED] rounded-3xl',
              )}
            >
              <div className="flow-root">
                <ul role="list" className="-mb-8">
                  {pages.map((page, eventIdx) => (
                    <li key={page.id}>
                      <div className="relative pb-8">
                        {eventIdx !== pages.length - 1 ? (
                          <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span
                              className={cn(
                                'h-8 w-8 flex items-center justify-center'
                              )}
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4">
                            <header className="text text-gray-500 flex flex-row items-center gap-4">
                              <h4>
                                <a href={`/posts${page.slug}`} className="font-medium text-gray-900 hover:text-phalaGreen-400 hover:underline">
                                  {page.title}
                                </a>
                              </h4>
                              <div>
                                {page.tags.filter(i => i !== 'Changelog').map((tag, idx) => (
                                  <TagLink key={`${idx}`} href={`/tags/${encodeURIComponent(tag)}`}>
                                    {tag}
                                  </TagLink>
                                ))}
                              </div>
                            </header>
                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                              <time dateTime={page.publishedTime}>{dayjs(page.publishedTime).format('YYYY-MM-DD')}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
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
                  View More
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <SectionSubscription />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
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
            contains: 'Changelog',
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
      initialPages: pages,
      nextCursor: next_cursor,
    },
  }
}
