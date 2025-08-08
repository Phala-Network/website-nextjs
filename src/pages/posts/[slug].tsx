import React, { AnchorHTMLAttributes } from 'react'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { useHydrateAtoms } from 'jotai/utils'
import { FiArrowLeft, FiArrowRight, FiClock, FiCalendar, FiTag } from 'react-icons/fi'
import { BiRss } from 'react-icons/bi'
import dayjs from 'dayjs'

import { cn } from '@/lib/utils'
import attempt from '@/lib/attempt-promise'
import {
  queryDatabase,
  getParsedPagesByProperties,
  ParsedPage,
  ParsedListPage,
} from '@/lib/notion-client'
import { renderBlocks } from '@/components/notion-render/Block'
import { blocksAtom } from '@/components/notion-render/atoms'
import TagLink from '@/components/TagLink'
import SectionSubscription from '@/components/SectionSubscription'
import PageCoverImage from '@/components/PageCoverImage'
import { Button } from '@/components/ui/button'
import TableOfContents from '@/components/TableOfContents'
import '@/components/notion-render/styles.css'


const remap: Readonly<Record<string, string>> = {
  '2250317e04a18058a89af73b666d10e0': '2250317e-04a1-8058-a89a-f73b666d10e0',
  '2300317e04a18074a132f0b95e4cc4d5': '2300317e-04a1-8074-a132-f0b95e4cc4d5',
}

interface Props {
  page: ParsedPage | null
  recentPages?: ParsedListPage[]
  similarPages?: ParsedListPage[]
  beforePages?: ParsedListPage[]
  nextPages?: ParsedListPage[]
}

function AboutLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="text-center text-xs text-green-700 font-medium leading-none hover:text-green-800 transition-colors px-3 py-2 rounded-md hover:bg-green-50"
      {...props}
    >
      {children}
    </a>
  )
}

const PostPage = ({
  page,
  recentPages = [],
  similarPages = [],
  beforePages = [],
  nextPages = [],
}: Props) => {
  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h1>
          <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
          <a href="/blog" className="mt-4 bg-phalaGreen-500 hover:bg-phalaGreen-600 text-black font-bold inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
            ← Back to Blog
          </a>
        </div>
      </div>
    )
  }
  
  useHydrateAtoms([[blocksAtom, page.blocks]])
  let id = page.id.replace(/\-/g, '')
  id = remap[id] || id
  const postCover = `https://img0.phala.world/cover/1200x630/${id}.jpg?z=123`

  return (
    <>
      {page.title ? (
        <Head>
          <title>{page.title} | Phala Network</title>
          <meta name="theme-color" content="#CDFA50" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            ref="canonical"
            href={`https://phala.network/posts${page.slug}`}
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Phala News"
            href="https://phala.network/rss.xml"
          />
          <meta property="og:title" content={page.title} />
          <meta property="og:description" content="Discover the latest from Phala Network - the decentralized cloud for Web3." />
          <meta
            property="og:url"
            content={`https://phala.network/posts${page.slug}`}
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:image" content={postCover} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={page.title} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@PhalaNetwork" />
          <meta name="twitter:title" content={page.title} />
          <meta name="twitter:description" content="Discover the latest from Phala Network - the decentralized cloud for Web3." />
          <meta name="twitter:image" content={postCover} />
        </Head>
      ) : null}

      <div className="min-h-screen bg-[#F9F9F7]">
        {/* Header with improved navigation */}
        <div className="bg-white shadow-sm border-b border-green-100">
          <div className="safe-viewport py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <a href="/blog" className="flex items-center gap-1 hover:text-green-700 transition-colors">
                <FiArrowLeft className="w-4 h-4" />
                Blog
              </a>
              {page.publishedTime && (
                <>
                  <span className="text-gray-400">/</span>
                  <span>{dayjs(page.publishedTime).format('YYYY')}</span>
                  <span className="text-gray-400">/</span>
                  <span>{dayjs(page.publishedTime).format('MMMM')}</span>
                </>
              )}
            </nav>
          </div>
        </div>

        <div className="safe-viewport py-8 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Left TOC - Sticky (Desktop only) */}
            <aside className="hidden xl:block fixed left-8 top-1/2 transform -translate-y-1/2 w-60 z-10">
              <TableOfContents blocks={page.blocks} />
            </aside>
            
            <div className="grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-5">
              {/* Main Content - Original comfortable width */}
              <article className="lg:col-span-4 space-y-8">
                {/* Cover Image */}
                {page.cover && (
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-100 to-green-200">
                    <img
                      className="w-full h-full object-cover"
                      width={800}
                      height={450}
                      src={`https://img0.phala.world/cover/1744x974/${id}.jpg?z=123`}
                      alt={page.title}
                    />
                  </div>
                )}

                {/* Article Header */}
                <header className="space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {page.tags
                      .filter((tag) => tag !== 'Changelog')
                      .map((tag, i) => (
                        <a key={i} href={`/tags/${encodeURIComponent(tag)}`}>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#F9F9F7] text-[#C4F144] border border-[#C4F144] hover:bg-[#C4F144] hover:text-gray-900 transition-colors">
                            <FiTag className="w-3 h-3" />
                            {tag}
                          </span>
                        </a>
                      ))
                    }
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight font-montserrat">
                    {page.title}
                  </h1>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{dayjs(page.publishedTime).format('MMMM DD, YYYY')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                </header>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none font-inter">
                  <style jsx>{`
                    .prose {
                      --tw-prose-headings: #1f2937;
                      --tw-prose-body: #374151;
                      --tw-prose-links: #16a34a;
                      --tw-prose-bold: #1f2937;
                      --tw-prose-bullets: #16a34a;
                      --tw-prose-quotes: #6b7280;
                      --tw-prose-code: #1f2937;
                      --tw-prose-pre-bg: #f8fafc;
                      --tw-prose-pre-code: #374151;
                    }
                  `}</style>
                  {renderBlocks(page.blocks)}
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                  {beforePages.length > 0 && (
                    <a
                      href={`/posts${beforePages[0].slug}`}
                      className="flex-1 h-auto p-4 text-left justify-start hover:bg-green-50 border border-green-200 rounded-md transition-colors block"
                    >
                      <div className="flex items-start gap-3">
                        <FiArrowLeft className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                        <div>
                          <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Previous</div>
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">{beforePages[0].title}</div>
                        </div>
                      </div>
                    </a>
                  )}
                  
                  {nextPages.length > 0 && (
                    <a
                      href={`/posts${nextPages[0].slug}`}
                      className="flex-1 h-auto p-4 text-right justify-end hover:bg-green-50 border border-green-200 rounded-md transition-colors block"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-right">
                          <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Next</div>
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">{nextPages[0].title}</div>
                        </div>
                        <FiArrowRight className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                      </div>
                    </a>
                  )}
                </div>

                {/* About Phala Footer */}
                <footer className="pt-12 border-t border-gray-200 space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">About Phala Network</h3>
                    <p className="text-gray-600">
                      Phala Network is a decentralized cloud that offers secure and scalable computing for Web3. 
                      With Phat Contracts, an innovative programming model enabling trustless off-chain computation, 
                      developers can create new Web3 use cases.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 text-sm">
                    <AboutLink href="https://twitter.com/PhalaNetwork">Twitter</AboutLink>
                    <AboutLink href="https://discord.gg/phala-network">Discord</AboutLink>
                    <AboutLink href="https://github.com/phala-Network">GitHub</AboutLink>
                    <AboutLink href="https://t.me/phalanetwork">Telegram</AboutLink>
                    <AboutLink href="https://www.youtube.com/@PhalaNetwork">YouTube</AboutLink>
                    <AboutLink href="https://forum.phala.network/">Forum</AboutLink>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="#section-subscription" 
                      className="bg-phalaGreen-500 hover:bg-phalaGreen-600 text-black font-bold inline-flex items-center justify-center gap-2 rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-2"
                    >
                      <BiRss className="w-4 h-4" />
                      Subscribe to Updates
                    </a>
                  </div>
                </footer>
              </article>

              {/* Right Sidebar - Recent & Related Posts */}
              <aside className="lg:col-span-1 space-y-6 xl:hidden">
                {/* Recent Posts */}
                {recentPages.length > 0 && (
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Recent Posts</h3>
                    <nav className="space-y-2">
                      {recentPages.map((recentPage) => (
                        <a 
                          href={`/posts${recentPage.slug}`} 
                          key={recentPage.id}
                          className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <div className="font-medium mb-1">{recentPage.title}</div>
                          <div className="text-xs text-gray-400">
                            {dayjs(recentPage.publishedTime).format('MMM DD, YYYY')}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Related Posts */}
                {similarPages.length > 0 && (
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Related Posts</h3>
                    <nav className="space-y-2">
                      {similarPages.map((similarPage) => (
                        <a 
                          href={`/posts${similarPage.slug}`} 
                          key={similarPage.id}
                          className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <div className="font-medium mb-1">{similarPage.title}</div>
                          <div className="text-xs text-gray-400">
                            {dayjs(similarPage.publishedTime).format('MMM DD, YYYY')}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
              </aside>
              
              {/* Desktop Fixed Right Sidebar */}
              <aside className="hidden xl:block fixed right-8 top-32 w-60 space-y-6">
                {/* Recent Posts */}
                {recentPages.length > 0 && (
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Recent Posts</h3>
                    <nav className="space-y-2">
                      {recentPages.map((recentPage) => (
                        <a 
                          href={`/posts${recentPage.slug}`} 
                          key={recentPage.id}
                          className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <div className="font-medium mb-1">{recentPage.title}</div>
                          <div className="text-xs text-gray-400">
                            {dayjs(recentPage.publishedTime).format('MMM DD, YYYY')}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Related Posts */}
                {similarPages.length > 0 && (
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Related Posts</h3>
                    <nav className="space-y-2">
                      {similarPages.map((similarPage) => (
                        <a 
                          href={`/posts${similarPage.slug}`} 
                          key={similarPage.id}
                          className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <div className="font-medium mb-1">{similarPage.title}</div>
                          <div className="text-xs text-gray-400">
                            {dayjs(similarPage.publishedTime).format('MMM DD, YYYY')}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>

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
  const [error, pages] = await attempt(
    getParsedPagesByProperties({
      database_id: process.env.NOTION_POSTS_DATABASE_ID!,
      properties: {
        'Custom URL': `/${slug}`,
      },
    })
  )
  if (error) {
    console.error(error)
  }
  if (!pages || pages.length === 0) {
    return {
      notFound: true,
    }
  }
  const page = pages[0]
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
    {
      property: 'Tags',
      multi_select: {
        does_not_contain: 'Changelog',
      },
    },
    {
      property: 'Custom URL',
      rich_text: {
        does_not_equal: page.slug,
      },
    },
  ]
  const { pages: recentPages } = await queryDatabase({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter: {
      and: [...baseFilters],
    },
    sorts: [
      {
        property: 'Published Time',
        direction: 'descending',
      },
    ],
    page_size: 3,
  })
  let similarPages: ParsedListPage[] = []
  if (page.tags.length > 0) {
    const result = await queryDatabase({
      database_id: process.env.NOTION_POSTS_DATABASE_ID!,
      filter: {
        and: [
          ...baseFilters,
          {
            property: 'Tags',
            multi_select: {
              contains: page.tags[0],
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
      page_size: 3,
    })
    similarPages = result.pages
  }
  if (page.publishedTime) {
    const { pages: nextPages } = await queryDatabase({
      database_id: process.env.NOTION_POSTS_DATABASE_ID!,
      filter: {
        and: [
          ...baseFilters,
          {
            property: 'Published Time',
            date: {
              on_or_after: dayjs(page.publishedTime).add(1, 'second').format(),
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
      page_size: 1,
    })
    const { pages: beforePages } = await queryDatabase({
      database_id: process.env.NOTION_POSTS_DATABASE_ID!,
      filter: {
        and: [
          ...baseFilters,
          {
            property: 'Published Time',
            date: {
              on_or_before: dayjs(page.publishedTime)
                .subtract(1, 'second')
                .format(),
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
      page_size: 1,
    })
    return {
      props: {
        page,
        recentPages,
        similarPages,
        beforePages,
        nextPages,
      },
      revalidate: 7200,
    }
  } else {
    return {
      props: {
        page,
        recentPages,
        similarPages,
      },
      revalidate: 7200,
    }
  }
}

export default PostPage
