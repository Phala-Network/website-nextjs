import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dayjs from 'dayjs'

import { cn } from '@/lib/utils'
import attempt from '@/lib/attempt-promise'
import {
  queryDatabase,
  getParsedPage,
  ParsedPage,
  ParsedListPage,
} from '@/lib/notion-client'
import { renderBlocks } from '@/components/notion-render/Block'
import TagLink from '@/components/TagLink'
import PageCoverImage from '@/components/PageCoverImage'
import '@/components/notion-render/styles.css'
import NotionBlocksProvider from '@/components/notion-render/NotionBlocksProvider'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

interface Props {
  params: Promise<{ id: string }>
}

interface PostData {
  page: ParsedPage
  recentPages: ParsedListPage[]
  similarPages: ParsedListPage[]
  beforePages: ParsedListPage[]
  nextPages: ParsedListPage[]
}

function AboutLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a
      className="text-center text-xs text-green-700 font-bold leading-none lg:border-r border-green-700 w-1/2 lg:w-[136px] py-2 lg:py-0"
      href={href}
    >
      {children}
    </a>
  )
}

async function getPostPreviewData(id: string): Promise<PostData | null> {
  const [error, page] = await attempt(
    getParsedPage(id)
  )
  
  if (error) {
    console.error(error)
    return null
  }
  
  if (!page) {
    return null
  }
  
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
  
  let beforePages: ParsedListPage[] = []
  let nextPages: ParsedListPage[] = []
  
  if (page.publishedTime) {
    const { pages: nextPagesResult } = await queryDatabase({
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
    nextPages = nextPagesResult
    
    const { pages: beforePagesResult } = await queryDatabase({
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
    beforePages = beforePagesResult
  }
  
  return {
    page,
    recentPages,
    similarPages,
    beforePages,
    nextPages,
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const postData = await getPostPreviewData(id)
  
  if (!postData) {
    return {
      title: 'Preview Not Found',
    }
  }
  
  const { page } = postData
  const postCover = page.cover ? (
    'external' in page.cover ? page.cover.external.url : page.cover.file.url
  ) : "https://phala.network/og-image.jpg"
  
  return {
    title: page.title,
    openGraph: {
      title: page.title,
      url: `https://phala.network/posts${page.slug}`,
      locale: 'en_US',
      images: [
        {
          url: postCover,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@PhalaNetwork',
      title: page.title,
      images: [postCover],
    },
    alternates: {
      canonical: `https://phala.network/posts${page.slug}`,
      types: {
        'application/rss+xml': 'https://phala.network/rss.xml',
        'application/atom+xml': 'https://phala.network/atom.xml',
      },
    },
    other: {
      'theme-color': 'rgba(232, 233, 234, 1)',
    },
  }
}

export default async function PostPreviewPage({ params }: Props) {
  const { id } = await params
  const postData = await getPostPreviewData(id)
  
  if (!postData) {
    return (
      <div className="max-w-3xl m-auto p-8">
        <p>Woops! didn't find that post.</p>
      </div>
    )
  }
  
  const {
    page,
    recentPages = [],
    similarPages = [],
    beforePages = [],
    nextPages = [],
  } = postData
  
  return (
    <div
      className={cn(
        'bg-linear-to-b from-green-600 to-green-500'
      )}
    >
      <div
        className={cn(
          'lg:safe-viewport',
          'grid grid-cols-1 lg:grid-cols-20 3xl:grid-cols-24 gap-4',
          'py-32'
        )}
      >
        <div
          className={cn(
            'col-start-1 lg:col-span-11 lg:col-start-2 3xl:col-start-4 3xl:col-span-11'
          )}
        >
          <nav
            className={cn(
              'bg-white lg:rounded-3xl',
              'py-2 px-6',
              'text-sm font-medium flex gap-2'
            )}
          >
            <a href="/blog">Blog</a>
            {page.publishedTime ? (
              <>
                <span>/</span>
                <span>{dayjs(page.publishedTime).format('YYYY')}</span>
                <span>/</span>
                <span>{dayjs(page.publishedTime).format('MM')}</span>
              </>
            ) : null}
          </nav>
          <article
            className={cn(
              'notion_page_body',
              'bg-white lg:rounded-3xl p-2 mt-4'
            )}
          >
            {page.cover ? (
              <div
                className={cn('lg:rounded-3xl overflow-hidden')}
              >
                <PageCoverImage
                  className="w-full aspect-856/442"
                  page={page}
                  width={856}
                  height={442}
                />
              </div>
            ) : null}
            <div className="p-4 pt-0 lg:p-8">
              <h1 className={cn('notion_page_title', 'text-3xl font-black')}>
                {page.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                {page.tags.filter(i => i !== 'Changelog').map((tag, i) => (
                  <div key={`${i}`}>
                    <TagLink href={`/tags/${encodeURIComponent(tag)}`}>
                      {tag}
                    </TagLink>
                  </div>
                ))}
              </div>
              <div className="my-6">
                <p className="text-sm font-medium">
                  {dayjs(page.publishedTime).format('YYYY-MM-DD')}
                </p>
              </div>
              <div className="text-base">
                <NotionBlocksProvider blocks={page.blocks}>
                  {renderBlocks(page.blocks)}
                </NotionBlocksProvider>
              </div>
              <div className="grid grid-cols-2 text-sm text-green-800 mt-8">
                {beforePages.length > 0 ? (
                  <a
                    className="col-start-1 flex items-center gap-1"
                    href={`/posts${beforePages[0].slug}`}
                  >
                    <FiArrowLeft className="shrink-0" />
                    <span className="line-clamp-1">
                      {beforePages[0].title}
                    </span>
                  </a>
                ) : null}
                {nextPages.length > 0 ? (
                  <a
                    className="col-start-2 flex items-center gap-1 justify-end"
                    href={`/posts${nextPages[0].slug}`}
                  >
                    <span className="line-clamp-1 text-right pr-2">
                      {nextPages[0].title}
                    </span>
                    <FiArrowRight className="shrink-0" />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
          <section className="bg-white lg:rounded-3xl mt-4 py-8">
            <div className="px-10">
              <h1 className="text-2xl font-bold">About Phala</h1>
              <div className="text-sm mt-4 flex flex-col gap-4">
                <p>
                  Phala Network is a decentralized cloud that offers secure
                  and scalable computing for Web3.
                </p>
                <p>
                  With Phat Contracts, an innovative programming model
                  enabling trustless off-chain computation, developers can
                  create new Web3 use cases.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-8 gap-y-4">
              <AboutLink href="#section-subscription">Subscribe</AboutLink>
              <AboutLink href="https://twitter.com/PhalaNetwork">
                Twitter
              </AboutLink>
              <AboutLink href="https://www.youtube.com/@PhalaNetwork">
                Youtube
              </AboutLink>
              <AboutLink href="https://github.com/phala-Network">
                Github
              </AboutLink>
            </div>
            <div className="flex flex-wrap mt-4 gap-y-4">
              <AboutLink href="https://discord.gg/phala-network">
                Discord
              </AboutLink>
              <AboutLink href="https://forum.phala.network/">Forum</AboutLink>
              <AboutLink href="https://t.me/phalanetwork">Telegram</AboutLink>
            </div>
          </section>
        </div>
        <div className={cn('lg:col-span-7')}>
          {recentPages.length > 0 ? (
            <section className="bg-[#F5FEDC] lg:rounded-2xl p-8">
              <h1 className="text-2xl font-bold">Recent Posts</h1>
              <div className="flex flex-col gap-5 mt-5">
                {recentPages.map((recentPage) => (
                  <a href={`/posts${recentPage.slug}`} key={recentPage.id}>
                    <p className="text-base text-green-800 font-medium">
                      {recentPage.title}
                    </p>
                    <p className="text-xs text-green-700">
                      {dayjs(recentPage.publishedTime).format('YYYY-MM-DD')}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
          {similarPages.length > 0 ? (
            <section className="bg-[#F5FEDC] lg:rounded-2xl p-8 mt-4">
              <h1 className="text-2xl font-bold">Similar Posts</h1>
              <div className="flex flex-col gap-5 mt-5">
                {similarPages.map((similarPage) => (
                  <a href={`/posts${similarPage.slug}`} key={similarPage.id}>
                    <p className="text-base text-green-800 font-medium">
                      {similarPage.title}
                    </p>
                    <p className="text-xs text-green-700">
                      {dayjs(similarPage.publishedTime).format('YYYY-MM-DD')}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  )
}