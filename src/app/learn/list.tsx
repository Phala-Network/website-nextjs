'use client'

import { RefreshCcw } from 'lucide-react'
import { useState, useTransition } from 'react'

import PostCard from '@/components/post-card'
import { Button } from '@/components/ui/button'
import { getLearnArticles } from '@/lib/actions/learn'
import type { ParsedListPage } from '@/lib/notion-client'
import { cn } from '@/lib/utils'

interface Props {
  initialPages: ParsedListPage[]
  nextCursor: string
}

export default function List({ initialPages, nextCursor }: Props) {
  const [pages, setPages] = useState(initialPages)
  const [cursor, setCursor] = useState(nextCursor)
  const [isPending, startTransition] = useTransition()

  const loadMore = () => {
    startTransition(async () => {
      try {
        const result = await getLearnArticles({ cursor })
        startTransition(() => {
          setPages([...pages, ...result.pages])
          setCursor(result.next_cursor || '')
        })
      } catch (error) {
        console.error('Failed to load more learn articles:', error)
      }
    })
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 mt-8">
        {pages.map((page) => (
          <PostCard key={page.id} page={page} basePath="/learn" />
        ))}
      </div>
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
