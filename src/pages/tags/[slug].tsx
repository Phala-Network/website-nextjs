import Head from 'next/head'
import type { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ImSpinner2 } from 'react-icons/im'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import Card from '@/components/Card'
import SectionSubscription from '@/components/SectionSubscription'
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
  const title = `${slug} - Phala Network`
  return (
    <>
      <Head>
        <title>{title}</title>
        <link ref="canonical" href={`https://phala.network/tags/${encodeURIComponent(slug)}`} />
        <meta name="robots" content="noindex" />
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
            <section
              className={cn(
                'bg-[#EBFDB9] rounded-xl',
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
                    'rounded-lg'
                  )}
                >
                  Back to Blog
                </a>
              </div>
            </section>
            {pages.length > 0 ? (
              <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 xl:grid-cols-2 2xl:grid-cols-2 mt-8">
                {pages.map((page) => (
                  <Card key={page.id} page={page} />
                ))}
              </div>
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
                    'rounded-lg',
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
        </section>
        <SectionSubscription />
      </div>
    </>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params!.slug as string
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
        property: 'Published Time',
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
