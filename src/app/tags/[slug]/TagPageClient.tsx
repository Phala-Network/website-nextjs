'use client'

import { RefreshCcw } from 'lucide-react'

import Card from '@/components/Card'
import { Button } from '@/components/ui/button'
import useQueryPosts from '@/hooks/useQueryPosts'
import type { ParsedListPage } from '@/lib/notion-client'
import { cn } from '@/lib/utils'

interface Props {
  slug: string
  initialPages: ParsedListPage[]
  nextCursor: string
}

export default function TagPageClient({
  slug,
  initialPages,
  nextCursor,
}: Props) {
  const {
    pages = [],
    isLoading,
    load,
    hasMore,
  } = useQueryPosts({
    initialPages,
    initialCursor: nextCursor,
    params: {
      tag: slug,
    },
  })

  return (
    <>
      {pages.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 mt-8">
          {pages.map((page) => (
            <Card key={page.id} page={page} />
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <p className="font-bold text-center text-gray-600">
            No posts found for this tag.
          </p>
        </div>
      )}
      <div
        className={cn('pt-20 pb-10 w-full flex items-center justify-center')}
      >
        {hasMore ? (
          <Button
            variant="outline"
            className={cn(isLoading ? 'opacity-75' : null)}
            onClick={() => {
              load()
              if (typeof window !== 'undefined' && (window as any).umami) {
                ;(window as any).umami.track('tag_load_more', { tag: slug })
              }
            }}
            disabled={isLoading}
          >
            <RefreshCcw
              className={cn('h-5 w-5', isLoading ? 'animate-spin' : '')}
            />
            Load more
          </Button>
        ) : null}
      </div>
    </>
  )
}
