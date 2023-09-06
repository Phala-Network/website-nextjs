import React, { AnchorHTMLAttributes } from 'react'
import type { GetStaticProps } from 'next'
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
import { render_block } from '@/components/notion-render/Block'
import { blocksAtom } from '@/components/notion-render/atoms'
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
      className="text-center text-xs text-green-700 font-bold leading-none border-r-[1px] border-green-700 w-[136px]"
      {...props}
    >
      {children}
    </a>
  )
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
      <Head>
        <title>{page.title} - Phala Network</title>
      </Head>
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
                <div
                  className={cn('aspect-[856/442] rounded-3xl overflow-hidden')}
                >
                  <PageCoverImage
                    className="w-full object-contain"
                    page={page}
                  />
                </div>
              ) : null}
              <div className="p-8 pt-0">
                <h1 className={cn('notion_page_title', 'text-3xl font-black')}>
                  {page.title}
                </h1>
                <div className="text-base">{page.blocks.map(render_block)}</div>
              </div>
            </article>
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
    paths: [
      {
        params: {
          slug: '/privacy',
        },
      },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params!.slug as string
  const [error, pages] = await attempt(
    getParsedPagesByProperties({
      database_id: process.env.NOTION_POSTS_DATABASE_ID!,
      properties: {
        'Custom URL': slug,
      },
    })
  )
  if (error) {
    console.error(error)
  }
  if (pages.length === 0) {
    return {
      props: {
        page: null,
        recentPages: [],
        similarPages: [],
      },
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
