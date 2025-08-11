import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import attempt from '@/lib/attempt-promise'
import {
  getParsedPagesByProperties,
  type ParsedListPage,
  type ParsedPage,
  queryDatabase,
} from '@/lib/notion-client'
import '@/components/notion-render/styles.css'

import { env } from '@/env'
import PostPageClient from './PostPageClient'

const remap: Readonly<Record<string, string>> = {
  '2250317e04a18058a89af73b666d10e0': '2250317e-04a1-8058-a89a-f73b666d10e0',
  '2300317e04a18074a132f0b95e4cc4d5': '2300317e-04a1-8074-a132-f0b95e4cc4d5',
}

interface Props {
  params: Promise<{ slug: string }>
}

interface PostData {
  page: ParsedPage
  recentPages: ParsedListPage[]
  similarPages: ParsedListPage[]
  beforePages: ParsedListPage[]
  nextPages: ParsedListPage[]
}

async function getPostData(slug: string): Promise<PostData | null> {
  const [error, pages] = await attempt(
    getParsedPagesByProperties({
      database_id: env.NOTION_POSTS_DATABASE_ID,
      properties: {
        'Custom URL': `/${slug}`,
      },
    }),
  )

  if (error) {
    console.error(error)
    return null
  }

  if (!pages || pages.length === 0) {
    return null
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

  // Get recent pages
  const { pages: recentPages } = await queryDatabase({
    database_id: env.NOTION_POSTS_DATABASE_ID,
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

  // Get similar pages
  let similarPages: ParsedListPage[] = []
  if (page.tags.length > 0) {
    const result = await queryDatabase({
      database_id: env.NOTION_POSTS_DATABASE_ID,
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

  // Get navigation pages
  let beforePages: ParsedListPage[] = []
  let nextPages: ParsedListPage[] = []

  if (page.publishedTime) {
    const { pages: nextPagesResult } = await queryDatabase({
      database_id: env.NOTION_POSTS_DATABASE_ID,
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
      database_id: env.NOTION_POSTS_DATABASE_ID,
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
  const { slug } = await params
  const postData = await getPostData(slug)

  if (!postData) {
    return {
      title: 'Post Not Found',
    }
  }

  const { page } = postData
  let id = page.id.replace(/-/g, '')
  id = remap[id] || id
  const postCover = `https://img0.phala.world/cover/1200x630/${id}.jpg?z=123`

  return {
    title: `${page.title} | Phala Network`,
    description:
      'Discover the latest from Phala Network - the decentralized cloud for Web3.',
    openGraph: {
      title: page.title,
      description:
        'Discover the latest from Phala Network - the decentralized cloud for Web3.',
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
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@PhalaNetwork',
      title: page.title,
      description:
        'Discover the latest from Phala Network - the decentralized cloud for Web3.',
      images: [postCover],
    },
    alternates: {
      canonical: `https://phala.network/posts${page.slug}`,
      types: {
        'application/rss+xml': 'https://phala.network/rss.xml',
      },
    },
    other: {
      'theme-color': '#CDFA50',
    },
  }
}

export const revalidate = 7200

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const postData = await getPostData(slug)

  if (!postData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20"></div>

      <PostPageClient {...postData} />
    </div>
  )
}
