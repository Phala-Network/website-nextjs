import type { Metadata } from 'next'
import { BiRss } from 'react-icons/bi'

import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'
import { cn } from '@/lib/utils'
import ChangelogClientWrapper from './ChangelogClientWrapper'

async function getChangelogData() {
  const { next_cursor, pages } = await queryDatabase({
    database_id: env.NOTION_POSTS_DATABASE_ID,
    filter: {
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
            contains: 'Changelog',
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

export const metadata: Metadata = {
  title: 'Changelog',
  robots: 'noindex',
}

export const revalidate = 3600

export default async function ChangelogPage() {
  const { initialPages, nextCursor } = await getChangelogData()

  return (
    <div>
      <div
        className={cn(
          'container',
          'grid grid-cols-2 lg:grid-cols-20 2xl:grid-cols-24',
          'py-32',
        )}
      >
        <div
          className={cn(
            'col-start-1 col-span-full lg:col-span-18 lg:col-start-2 2xl:col-start-4 2xl:col-span-18',
          )}
        >
          <header className="flex flex-row items-center justify-between gap-4">
            <h1
              className={cn(
                'text-black-800 text-xl',
                'text-4xl lg:text-5xl',
                'font-black',
                'mx-1',
              )}
            >
              Changelog
            </h1>
            <div>
              <a
                href="/changelog/atom.xml"
                target="_blank"
                rel="noopener"
                className={cn(
                  'flex items-center gap-2 pl-5 pr-6 py-2 transition-all',
                  'rounded-full border bg-white border-primary-800 text-primary-800 font-bold',
                  'hover:bg-[#EBFDB9]',
                )}
              >
                <BiRss className="w-6 h-6" />
                <span>Subscribe</span>
              </a>
            </div>
          </header>

          <ChangelogClientWrapper
            initialPages={initialPages}
            nextCursor={nextCursor}
          />
        </div>
      </div>
    </div>
  )
}
