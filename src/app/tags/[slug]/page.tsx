import type { Metadata } from 'next'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'
import { retrieveTags } from '@/lib/post'
import TagPageClient from './tag-page-client'

export const revalidate = 7200

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
  const { slug: encodedSlug } = await params
  const slug = decodeURIComponent(encodedSlug)
  return {
    title: slug,
    alternates: {
      canonical: `https://${env.VERCEL_PROJECT_PRODUCTION_URL}/tags/${encodeURIComponent(slug)}`,
    },
  }
}

export async function generateStaticParams() {
  const tags = await retrieveTags()
  return tags.map((tag) => ({ slug: tag }))
}

export default async function TagPage({ params }: Props) {
  const { slug: encodedSlug } = await params
  const slug = decodeURIComponent(encodedSlug)
  const { initialPages, nextCursor } = await getTagData(slug)

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-32 max-w-7xl mx-auto">
        <div className="container">
          <div className="mb-8 md:mb-14 lg:mb-16">
            <div>
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">
                      {slug}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="mb-4 w-full text-4xl font-bold md:mb-5 md:text-5xl lg:mb-6 capitalize">
                {slug}
              </h1>
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
