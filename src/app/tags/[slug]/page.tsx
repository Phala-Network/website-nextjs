import type { Metadata } from 'next'

import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'
import { cn } from '@/lib/utils'
import TagPageClient from './TagPageClient'

interface Props {
  params: Promise<{ slug: string }>
}

async function getTagData(slug: string) {
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
    database_id: env.NOTION_POSTS_DATABASE_ID,
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
    initialPages: pages,
    nextCursor: next_cursor || '',
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return {
    title: slug,
    robots: 'noindex',
    alternates: {
      canonical: `https://phala.network/tags/${encodeURIComponent(slug)}`,
    },
  }
}

export const revalidate = 3600

export default async function TagPage({ params }: Props) {
  const { slug } = await params
  const { initialPages, nextCursor } = await getTagData(slug)

  return (
    <div
      style={{
        background: `
          radial-gradient(1200px 600px at 70% 35%, rgba(199,255,170,0.7), rgba(255,255,255,0) 60%),
          linear-gradient(180deg, #ffffff, #f9fff0 40%, #ffffff 70%)
        `,
        minHeight: '100vh',
      }}
    >
      <section className="py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-8 md:mb-14 lg:mb-16">
            <div className="flex items-start justify-between gap-8">
              <div>
                <nav className="text-sm text-gray-600 flex gap-2 mb-4">
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
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
                    'flex items-center gap-2 pl-5 pr-6 py-2 transition-all',
                    'rounded-lg border bg-white border-primary-800 text-primary-800 font-bold',
                    'hover:bg-[#EBFDB9]',
                  )}
                >
                  <span>← Back to Blog</span>
                </a>
              </div>
            </div>
          </div>

          <TagPageClient
            slug={slug}
            initialPages={initialPages}
            nextCursor={nextCursor}
          />
        </div>
      </section>
    </div>
  )
}
