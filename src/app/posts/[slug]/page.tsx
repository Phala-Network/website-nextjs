import type { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { Separator } from '@/components/ui/separator'
import { env } from '@/env'
import {
  getParsedPagesByProperties,
  type ParsedListPage,
  type ParsedPage,
  queryDatabase,
} from '@/lib/notion-client'
import Post from './post'
import PostNavigation from './post-navigation'
import PostSuggestions from './post-suggestions'
import { PostNavigationSkeleton, PostsSectionSkeleton } from './skeleton'

export const revalidate = 7200

const baseUrl = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

const remap: Readonly<Record<string, string>> = {
  '2250317e04a18058a89af73b666d10e0': '2250317e-04a1-8058-a89a-f73b666d10e0',
  '2300317e04a18074a132f0b95e4cc4d5': '2300317e-04a1-8074-a132-f0b95e4cc4d5',
}

interface Props {
  params: Promise<{ slug: string }>
}

// Base filters for published posts
function getBaseFilter(excludeSlug?: string) {
  const filter: QueryDatabaseParameters['filter'] = {
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
          does_not_contain: 'Changelog',
        },
      },
    ],
  }

  if (excludeSlug) {
    filter.and.push({
      property: 'Custom URL',
      rich_text: {
        does_not_equal: excludeSlug,
      },
    })
  }

  return filter
}

async function getPost(slug: string): Promise<ParsedPage> {
  const pages = await getParsedPagesByProperties({
    database_id: env.NOTION_POSTS_DATABASE_ID,
    properties: {
      'Custom URL': `/${slug}`,
    },
  })

  if (pages.length === 0) {
    notFound()
  }

  return pages[0]
}

async function getRecentPosts(excludeSlug?: string): Promise<ParsedListPage[]> {
  const { pages } = await queryDatabase({
    database_id: env.NOTION_POSTS_DATABASE_ID,
    filter: getBaseFilter(excludeSlug),
    sorts: [
      {
        property: 'Published Time',
        direction: 'descending',
      },
    ],
    page_size: 3,
  })

  return pages
}

async function getSimilarPosts(page: ParsedPage): Promise<ParsedListPage[]> {
  if (page.tags.length === 0) {
    return []
  }
  const filter = getBaseFilter(page.slug)
  filter.and.push({
    property: 'Tags',
    multi_select: {
      contains: page.tags[0],
    },
  })

  const { pages } = await queryDatabase({
    database_id: env.NOTION_POSTS_DATABASE_ID,
    filter,
    sorts: [{ property: 'Published Time', direction: 'descending' }],
    page_size: 3,
  })

  return pages
}

async function getNavigationPosts(
  page: ParsedPage,
): Promise<{ beforePages: ParsedListPage[]; nextPages: ParsedListPage[] }> {
  if (!page.publishedTime) {
    return { beforePages: [], nextPages: [] }
  }

  const query = (isBefore: boolean) => {
    const filter = getBaseFilter(page.slug)
    const dateString = new Date(page.publishedTime).toISOString()
    filter.and.push({
      property: 'Published Time',
      date: {
        ...(isBefore ? { before: dateString } : { after: dateString }),
      },
    })
    return queryDatabase({
      database_id: env.NOTION_POSTS_DATABASE_ID,
      filter,
      sorts: [
        {
          property: 'Published Time',
          direction: isBefore ? 'descending' : 'ascending',
        },
      ],
      page_size: 1,
    })
  }

  const [beforeResult, nextResult] = await Promise.all([
    query(true),
    query(false),
  ])

  return {
    beforePages: beforeResult.pages,
    nextPages: nextResult.pages,
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPost(slug)

  let id = page.id.replace(/-/g, '')
  id = remap[id] || id
  const postCover = `https://img0.phala.world/cover/1200x630/${id}.jpg?z=123`

  return {
    title: page.title,
    openGraph: {
      url: `https://${env.VERCEL_PROJECT_PRODUCTION_URL}/posts${page.slug}`,
      locale: 'en_US',
      images: [
        {
          url: postCover,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      images: [postCover],
    },
    alternates: {
      canonical: `https://${env.VERCEL_PROJECT_PRODUCTION_URL}/posts${page.slug}`,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const page = await getPost(slug)

  const recentPages = getRecentPosts(page.slug)
  const similarPages = getSimilarPosts(page)
  const navigation = getNavigationPosts(page)

  return (
    <div className="min-h-screen py-24 max-w-7xl mx-auto">
      <div className="container">
        <Post url={baseUrl} page={page} />

        <Separator className="my-12" />

        {/* Post Navigation with Suspense */}
        <Suspense fallback={<PostNavigationSkeleton />}>
          <PostNavigation navigation={navigation} />
        </Suspense>

        {/* Recent and Related Posts with Suspense */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Suspense fallback={<PostsSectionSkeleton title="Recent Posts" />}>
            <PostSuggestions pages={recentPages} type="recent" />
          </Suspense>

          <Suspense fallback={<PostsSectionSkeleton title="Related Posts" />}>
            <PostSuggestions pages={similarPages} type="related" />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
