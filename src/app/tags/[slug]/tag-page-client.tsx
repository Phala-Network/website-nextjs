'use client'

import { RefreshCcw } from 'lucide-react'
import { useState, useTransition } from 'react'

import PostCard from '@/components/post-card'
import { Button } from '@/components/ui/button'
import { getPosts } from '@/lib/actions/post'
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
  const [pages, setPages] = useState(initialPages)
  const [cursor, setCursor] = useState(nextCursor)
  const [isPending, startTransition] = useTransition()

  const loadMore = () => {
    startTransition(async () => {
      try {
        const result = await getPosts({ cursor, tag: slug })
        startTransition(() => {
          setPages([...pages, ...result.pages])
          setCursor(result.next_cursor || '')
        })
      } catch (error) {
        console.error('Failed to load more posts:', error)
      }
    })
  }

  return (
    <>
      {pages.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 mt-8">
          {pages.map((page) => (
            <PostCard key={page.id} page={page} />
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
        {cursor ? (
          <Button
            variant="outline"
            className={cn(isPending ? 'opacity-75' : null)}
            onClick={loadMore}
            disabled={isPending}
          >
            <RefreshCcw
              className={cn('h-5 w-5', isPending ? 'animate-spin' : '')}
            />
            Load more
          </Button>
        ) : null}
      </div>
    </>
  )
}
