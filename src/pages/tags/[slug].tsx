import Head from 'next/head'
import type { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ImSpinner2 } from 'react-icons/im'
import { BiRss } from 'react-icons/bi'
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
            <div className="mb-8 md:mb-14 lg:mb-16">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <nav className="text-sm text-gray-600 flex gap-2 mb-4">
                    <a href="/blog" className="hover:underline">Blog</a>
                    <span>/</span>
                    <span className="capitalize">{slug}</span>
                  </nav>
                  <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl capitalize">
                    {slug}
                  </h1>
                </div>
                <div>
                  <a
                    href="/blog"
                    className={cn(
                      "flex items-center gap-2 pl-5 pr-6 py-2 transition-all",
                      "rounded-lg border bg-white border-[#526420] text-[#526420] font-bold",
                      "hover:bg-[#EBFDB9]",
                    )}
                  >
                    <span>← Back to Blog</span>
                  </a>
                </div>
              </div>
            </div>
            {pages.length > 0 ? (
              <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 xl:grid-cols-2 2xl:grid-cols-2 mt-8">
                {pages.map((page) => (
                  <Card key={page.id} page={page} />
                ))}
              </div>
            ) : (
              <div className="mt-8">
                <p className="font-bold text-center text-gray-600">No posts found for this tag.</p>
              </div>
            )}
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
                      (window as any).umami.track('tag_load_more', { tag: slug })
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
                  View More Posts
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
