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
import { retrieveLearnTags } from '@/lib/learn'
import LearnTagClient from './learn-tag-client'

export const revalidate = 7200

interface Props {
  params: Promise<{ slug: string }>
}

async function getLearnTagData(tag: string) {
  const { pages, next_cursor } = await queryDatabase({
    database_id: env.NOTION_LEARN_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Status',
          status: {
            equals: 'Published',
          },
        },
        {
          property: 'Tags',
          multi_select: {
            does_not_contain: 'Changelog',
          },
        },
        {
          property: 'Tags',
          multi_select: {
            does_not_contain: 'not-listed',
          },
        },
        {
          property: 'Tags',
          multi_select: {
            contains: tag,
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
    title: `${slug} - Learn - Phala Network`,
    description: `Learn about ${slug} in confidential computing`,
    alternates: {
      canonical: new URL(
        `/learn/tags/${slug}`,
        `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`,
      ).toString(),
    },
  }
}

export async function generateStaticParams() {
  const tags = await retrieveLearnTags()
  return tags.map((tag) => ({ slug: tag }))
}

export default async function LearnTagPage({ params }: Props) {
  const { slug } = await params
  const tag = decodeURIComponent(slug)
  const { initialPages, nextCursor } = await getLearnTagData(tag)

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-32 max-w-7xl mx-auto">
        <div className="container">
          <div className="mb-8 md:mb-14 lg:mb-16">
            <div>
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/learn">Learn</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">
                      {tag}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="mb-4 w-full text-4xl font-bold md:mb-5 md:text-5xl lg:mb-6 capitalize">
                {tag}
              </h1>
              <p className="text-muted-foreground text-lg">
                {initialPages.length} {initialPages.length === 1 ? 'article' : 'articles'} about {tag}
              </p>
            </div>
          </div>

          <LearnTagClient
            tag={tag}
            initialPages={initialPages}
            nextCursor={nextCursor}
          />
        </div>
      </section>
    </div>
  )
}
