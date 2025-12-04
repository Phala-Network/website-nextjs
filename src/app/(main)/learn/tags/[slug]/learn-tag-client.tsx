'use client'

import { RefreshCcw } from 'lucide-react'
import { useState, useTransition } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getLearnArticles } from '@/lib/actions/learn'
import type { ParsedListPage } from '@/lib/notion-client'
import { coverRemap } from '@/lib/post-client'
import { cn } from '@/lib/utils'

interface Props {
  tag: string
  initialPages: ParsedListPage[]
  nextCursor: string
}

export default function LearnTagClient({
  tag,
  initialPages,
  nextCursor,
}: Props) {
  const [pages, setPages] = useState(initialPages)
  const [cursor, setCursor] = useState(nextCursor)
  const [isPending, startTransition] = useTransition()

  const loadMore = () => {
    startTransition(async () => {
      try {
        const result = await getLearnArticles({ cursor, tag })
        startTransition(() => {
          setPages([...pages, ...result.pages])
          setCursor(result.next_cursor || '')
        })
      } catch (error) {
        console.error('Failed to load more articles:', error)
      }
    })
  }

  return (
    <>
      {pages.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link
              key={page.id}
              href={`/learn/${page.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div className="aspect-video overflow-hidden">
                {/** biome-ignore lint/performance/noImgElement: no cdn */}
                <img
                  src={`https://img0.phala.world/cover/1744x974/${coverRemap[page.id] || page.id}.jpg`}
                  alt={page.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  {page.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {page.publishedDate && (
                    <span suppressHydrationWarning className="ml-auto">
                      {format(new Date(page.publishedDate), 'MMM dd, yyyy')}
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {page.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <p className="font-bold text-center text-gray-600">
            No articles found for this tag.
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
