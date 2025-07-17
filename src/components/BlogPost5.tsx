import React, { AnchorHTMLAttributes } from 'react'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { useHydrateAtoms } from 'jotai/utils'
import { FiArrowLeft, FiArrowRight, FiClock, FiCalendar, FiTag, FiShare2 } from 'react-icons/fi'
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

const BlogPost5 = ({
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
          <Button asChild className="mt-4 bg-phalaGreen-500 hover:bg-phalaGreen-600 text-black font-bold">
            <a href="/blog">← Back to Blog</a>
          </Button>
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

      <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
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
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-4">
              
              {/* Main Content */}
              <article className="lg:col-span-3 space-y-8">
                {/* Cover Image */}
                {page.cover && (
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-linear-to-br from-green-100 to-green-200">
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
                        <TagLink key={i} href={`/tags/${encodeURIComponent(tag)}`}>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200 transition-colors">
                            <FiTag className="w-3 h-3" />
                            {tag}
                          </span>
                        </TagLink>
                      ))
                    }
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight font-sans">
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
                      <span>5 min read</span> {/* You can calculate this based on content length */}
                    </div>
                  </div>
                </header>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none font-blog">
                  <style jsx>{`
                    .prose {
                      --tw-prose-headings: #1f2937;
                      --tw-prose-body: #374151;
                      --tw-prose-links: #16a34a;
                      --tw-prose-bold: #1f2937;
                      --tw-prose-bullets: #16a34a;
                      --tw-prose-quotes: #6b7280;
                      --tw-prose-code: #1f2937;
                      --tw-prose-pre-bg: #f9fafb;
                      --tw-prose-pre-code: #374151;
                    }
                  `}</style>
                  {renderBlocks(page.blocks)}
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                  {beforePages.length > 0 && (
                    <Button
                      asChild
                      variant="outline" 
                      className="flex-1 h-auto p-4 text-left justify-start hover:bg-green-50 border-green-200"
                    >
                      <a href={`/posts${beforePages[0].slug}`} className="block">
                        <div className="flex items-start gap-3">
                          <FiArrowLeft className="w-5 h-5 mt-0.5 text-green-600 shrink-0" />
                          <div>
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Previous</div>
                            <div className="text-sm font-medium text-gray-900 line-clamp-2">{beforePages[0].title}</div>
                          </div>
                        </div>
                      </a>
                    </Button>
                  )}
                  
                  {nextPages.length > 0 && (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 h-auto p-4 text-right justify-end hover:bg-green-50 border-green-200"
                    >
                      <a href={`/posts${nextPages[0].slug}`} className="block">
                        <div className="flex items-start gap-3">
                          <div className="text-right">
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Next</div>
                            <div className="text-sm font-medium text-gray-900 line-clamp-2">{nextPages[0].title}</div>
                          </div>
                          <FiArrowRight className="w-5 h-5 mt-0.5 text-green-600 shrink-0" />
                        </div>
                      </a>
                    </Button>
                  )}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-6">
                {/* About Phala Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">About Phala</h3>
                  <div className="text-sm text-gray-600 space-y-3">
                    <p>
                      Phala Network is a decentralized cloud that offers secure
                      and scalable computing for Web3.
                    </p>
                    <p>
                      With Phat Contracts, developers can create innovative Web3 
                      use cases with trustless off-chain computation.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-6">
                    <AboutLink href="https://twitter.com/PhalaNetwork">Twitter</AboutLink>
                    <AboutLink href="https://discord.gg/phala-network">Discord</AboutLink>
                    <AboutLink href="https://github.com/phala-Network">GitHub</AboutLink>
                    <AboutLink href="https://t.me/phalanetwork">Telegram</AboutLink>
                  </div>

                  <Button 
                    asChild 
                    className="w-full mt-4 bg-phalaGreen-500 hover:bg-phalaGreen-600 text-black font-bold"
                  >
                    <a href="#section-subscription" className="flex items-center gap-2">
                      <BiRss className="w-4 h-4" />
                      Subscribe to Updates
                    </a>
                  </Button>
                </div>

                {/* Recent Posts */}
                {recentPages.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                      {recentPages.map((recentPage) => (
                        <a 
                          href={`/posts${recentPage.slug}`} 
                          key={recentPage.id}
                          className="block p-3 rounded-lg hover:bg-green-50 transition-colors"
                        >
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                            {recentPage.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {dayjs(recentPage.publishedTime).format('MMM DD, YYYY')}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Similar Posts */}
                {similarPages.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      {similarPages.map((similarPage) => (
                        <a 
                          href={`/posts${similarPage.slug}`} 
                          key={similarPage.id}
                          className="block p-3 rounded-lg hover:bg-green-50 transition-colors"
                        >
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                            {similarPage.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {dayjs(similarPage.publishedTime).format('MMM DD, YYYY')}
                          </p>
                        </a>
                      ))}
                    </div>
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

export default BlogPost5