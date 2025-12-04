'use client'

import { RefreshCcw } from 'lucide-react'
import { useState } from 'react'

import PostCard from '@/components/post-card'
import { Button } from '@/components/ui/button'
import type { ParsedListPage } from '@/lib/notion-client'
import { cn } from '@/lib/utils'

interface Props {
  tag: string
  initialPages: ParsedListPage[]
  initialCursor: string | null
}

export default function TagPageClient({
  tag,
  initialPages,
  initialCursor,
}: Props) {
  const [pages, setPages] = useState(initialPages)
  const [cursor, setCursor] = useState(initialCursor)
  const [isPending, setIsPending] = useState(false)

  const loadMore = async () => {
    if (isPending || !cursor) return
    setIsPending(true)
    try {
      const params = new URLSearchParams({ cursor, tag })
      const res = await fetch(`/api/posts?${params}`)
      if (!res.ok) throw new Error('Failed to fetch')
      const result = await res.json()
      setPages([...pages, ...result.pages])
      setCursor(result.nextCursor || null)
    } catch (error) {
      console.error('Failed to load more posts:', error)
    } finally {
      setIsPending(false)
    }
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
