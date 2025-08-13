import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import PageContent from '@/components/PageContent'
import PageCoverImage from '@/components/PageCoverImage'
import { env } from '@/env'
import attempt from '@/lib/attempt-promise'
import {
  getParsedPagesByProperties,
  type ParsedPage,
} from '@/lib/notion-client'
import { cn } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

async function getPageData(slug: string): Promise<ParsedPage | null> {
  const [error, pages] = await attempt(
    getParsedPagesByProperties({
      database_id: env.NOTION_POSTS_DATABASE_ID,
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
    }),
  )

  if (error) {
    console.error(error)
    return null
  }

  if (!pages || pages.length === 0) {
    return null
  }

  return pages[0]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageData(slug)

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: page.title,
    robots: page.status !== 'Published' ? 'noindex' : undefined,
  }
}

export async function generateStaticParams() {
  return [{ slug: 'privacy' }]
}

export const revalidate = 7200

export default async function StaticPage({ params }: Props) {
  const { slug } = await params
  const page = await getPageData(slug)

  if (!page) {
    notFound()
  }

  return (
    <div
      className={cn(
        'min-h-screen',
        'bg-linear-to-b from-green-600 to-green-500',
      )}
    >
      <div
        className={cn(
          'container',
          'grid grid-cols-1 lg:grid-cols-20 2xl:grid-cols-24 gap-4',
          'py-32',
        )}
      >
        <div
          className={cn(
            'col-start-1 lg:col-span-18 lg:col-start-2 2xl:col-start-4 2xl:col-span-18',
          )}
        >
          <article
            className={cn('notion_page_body', 'bg-white rounded-3xl p-2 mt-4')}
          >
            {page.cover ? (
              <div className={cn('rounded-3xl overflow-hidden')}>
                <PageCoverImage
                  className="w-full aspect-856/442"
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
              <PageContent blocks={page.blocks} />
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
