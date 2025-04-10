import React, { AnchorHTMLAttributes } from 'react'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { useHydrateAtoms } from 'jotai/utils'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
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
import '@/components/notion-render/styles.css'

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
      className="text-center text-xs text-green-700 font-bold leading-none lg:border-r-[1px] border-green-700 w-1/2 lg:w-[136px] py-2 lg:py-0"
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
      <div className="max-w-3xl m-auto p-8">
        <p>Woops! didn't find that post.</p>
      </div>
    )
  }
  useHydrateAtoms([[blocksAtom, page.blocks]])
  // const postCover = page.cover ? (
  //   'external' in page.cover ? page.cover.external.url : page.cover.file.url
  // ) : "https://phala.network/og-image.jpg"
  const postCover = `https://img0.phala.world/cover/1200x630/${page.id}.jpg`
  return (
    <>
      {page.title ? (
        <Head>
          <title>{page.title}</title>
          <meta name="theme-color" content="rgba(232, 233, 234, 1)" />
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
          <link
            rel="alternate"
            type="application/atom+xml"
            title="Phala News"
            href="https://phala.network/atom.xml"
          />
          <meta property="og:title" content={page.title} />
          {/* <meta property="og:description" content="Phala Network make smart contracts even smarter by providing decentralized compute." /> */}
          <meta
            property="og:url"
            content={`https://phala.network/posts${page.slug}`}
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:image" content={postCover} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={page.title} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@PhalaNetwork" />
          <meta name="twitter:title" content={page.title} />
          {/* <meta name="twitter:description" content="Phala Network make smart contracts even smarter by providing decentralized compute." /> */}
          <meta name="twitter:image" content={postCover} />
          <link
            rel="icon"
            href="/favicon.ico"
            type="image/x-icon"
            sizes="any"
          />
        </Head>
      ) : null}
      <div className={cn('bg-gradient-to-b from-green-600 to-green-500')}>
        <div
          className={cn(
            'max-w-screen-xl mx-auto',
            'grid gap-4 grid-cols-1 lg:grid-cols-12',
            'py-32'
          )}
        >
          <div className={cn('lg:col-span-8')}>
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
                'bg-white lg:rounded-2xl p-2 mt-4'
              )}
            >
              {page.cover ? (
                <div className={cn('lg:rounded-[1.75rem] overflow-hidden')}>
                  <img
                    className="w-full aspect-[872/487]"
                    width={872}
                    height={487}
                    src={`https://img0.phala.world/cover/1744x974/${page.id.replace(
                      /\-/g,
                      ''
                    )}.jpg`}
                    // src={`https://img0.phala.world/notion/resize:fill:1744:974:0/plain/https://img0.phala.world/cover/${page.id}.jpg`}
                    // src={`https://img0.phala.world/cover/${page.id}.jpg`}
                    // src={
                    //   page.id === '879ccad7-3aaf-4c7e-b043-d98a1b77ee7b'
                    //     ? `https://img0.phala.world/cover/${page.id}.jpg`
                    //     : `https://img0.phala.world/notion/resize:fill:1744:974:0/plain/https://img0.phala.world/cover/${page.id}.jpg`
                    // }
                  />
                </div>
              ) : null}
              <div className="p-4 pt-0 lg:p-8">
                <h1 className={cn('notion_page_title', 'text-3xl font-black')}>
                  {page.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  {page.tags
                    .filter((i) => i !== 'Changelog')
                    .map((tag, i) => (
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
                <main className="prose font-blog max-w-full">
                  {renderBlocks(page.blocks)}
                </main>
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
          <div className={cn('lg:col-span-4')}>
            {recentPages.length > 0 ? (
              <section className="bg-[#F5FEDC] lg:rounded-2xl p-8">
                <h1 className="text-xl font-bold">Recent Posts</h1>
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
                <h1 className="text-xl font-bold">Similar Posts</h1>
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
  if (pages.length === 0) {
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
