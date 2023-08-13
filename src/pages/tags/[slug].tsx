import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { ImSpinner2 } from 'react-icons/im'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import Card from '@/pages/components/Card'
import { queryDatabase, ParsedListPage } from '@/lib/notion-client'
import useQueryPosts from '@/hooks/useQueryPosts'

interface Props {
  slug: string
  nextCursor: string
  initialPages: ParsedListPage[]
}

export default function TagPage({ slug, initialPages, nextCursor }: Props) {
  const {
    pages = [],
    isLoading,
    load,
    hasMore,
  } = useQueryPosts({
    initialPages,
    initialCursor: nextCursor,
    params: {
      tag: slug,
    },
  })
  return (
    <>
      <Head>
        <title>{slug}</title>
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
            <section
              className={cn(
                'bg-[#EBFDB9] rounded-3xl',
                'grid grid-cols-1 md:grid-cols-3 gap-y-4',
                'p-12'
              )}
            >
              <div className="col-span-2 flex flex-col gap-4">
                <nav className="text-sm text-black-600 flex gap-2">
                  <a href="/blog">Blog</a>
                  <span>/</span>
                  <span>{slug}</span>
                </nav>
                <h1
                  className={cn(
                    'text-black-850 text-xl',
                    'text-4xl lg:text-5xl',
                    'font-black capitalize'
                  )}
                >
                  {slug}
                </h1>
              </div>
              <div className="flex md:justify-end">
                <a
                  href="/blog"
                  className={cn(
                    'py-4 px-10 h-fit',
                    'bg-green-500 text-green-800 text-xl font-bold',
                    'rounded-[160px]'
                  )}
                >
                  Back to Blog
                </a>
              </div>
            </section>
            {pages.length > 0 ? (
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
            ) : (
              <section className="mt-8">
                <p className="font-bold text-center text-green-800">No posts</p>
              </section>
            )}
            <div className="flex items-center justify-center py-8">
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
                  Load More
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!
  const baseFilters = [
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
  ]
  const { pages, next_cursor } = await queryDatabase({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter: {
      and: [
        ...baseFilters,
        {
          property: 'Tags',
          multi_select: {
            contains: slug,
          },
        },
      ],
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
    page_size: 18,
  })
  return {
    props: {
      slug,
      initialPages: pages,
      nextCursor: next_cursor || '',
    },
  }
}
