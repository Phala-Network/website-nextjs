import React, { AnchorHTMLAttributes } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { useHydrateAtoms } from 'jotai/utils'

import { cn } from '@/lib/utils'
import attempt from '@/lib/attempt-promise'
import {
  getParsedPagesByProperties,
  ParsedPage,
  ParsedListPage,
} from '@/lib/notion-client'
import { renderBlocks } from '@/components/notion-render/Block'
import { blocksAtom } from '@/components/notion-render/atoms'
import SectionSubscription from '@/components/SectionSubscription'
import PageCoverImage from '@/components/PageCoverImage'
import '@/components/notion-render/styles.css'
import { notFound } from 'next/navigation'

interface Props {
  page: ParsedPage | null
  recentPages?: ParsedListPage[]
  similarPages?: ParsedListPage[]
  beforePages?: ParsedListPage[]
  nextPages?: ParsedListPage[]
}

const StaticPage = ({ page }: Props) => {
  if (!page) {
    return (
      <div className="max-w-3xl m-auto p-8">
        <p>Woops! didn't find that post.</p>
      </div>
    )
  }
  useHydrateAtoms([[blocksAtom, page.blocks]])
  return (
    <>
      {page.title ? (
        <Head>
          <title>{page.title}</title>
          {page.status !== 'Published' ? (
            <meta name="robots" content="noindex" />
          ) : null}
        </Head>
      ) : null}
      <div
        className={cn(
          'min-h-screen',
          'bg-gradient-to-b from-green-600 to-green-500'
        )}
      >
        <div
          className={cn(
            'safe-viewport',
            'grid grid-cols-1 lg:grid-cols-20 3xl:grid-cols-24 gap-4',
            'py-32'
          )}
        >
          <div
            className={cn(
              'col-start-1 lg:col-span-18 lg:col-start-2 3xl:col-start-4 3xl:col-span-18'
            )}
          >
            <article
              className={cn(
                'notion_page_body',
                'bg-white rounded-3xl p-2 mt-4'
              )}
            >
              {page.cover ? (
                <div className={cn('rounded-3xl overflow-hidden')}>
                  <PageCoverImage
                    className="w-full aspect-[856/442]"
                    page={page}
                    width={856}
                    height={442}
                  />
                </div>
              ) : null}
              <div className="p-8 pt-0">
                <h1 className={cn('notion_page_title', 'text-3xl font-black')}>
                  {page.title}
                </h1>
                <div className="text-base">{renderBlocks(page.blocks)}</div>
              </div>
            </article>
          </div>
        </div>
        <SectionSubscription />
      </div>
    </>
  )
}

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          slug: 'privacy',
        },
      },
    ],
    fallback: false,
  }
}) satisfies GetStaticPaths

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params!.slug as string
  console.log(slug)
  const [error, pages] = await attempt(
    getParsedPagesByProperties({
      database_id: process.env.NOTION_POSTS_DATABASE_ID!,
      properties: {
        'Custom URL': `/${slug}`,
        Status: {
          status: {
            equals: 'Published',
          },
        },
        'Post Type': {
          select: {
            equals: 'Page',
          },
        },
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
  return {
    props: {
      page,
    },
    revalidate: 7200,
  }
}

export default StaticPage
