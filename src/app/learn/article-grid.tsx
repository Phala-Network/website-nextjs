'use client'

import { RefreshCcw } from 'lucide-react'
import { useState, useTransition } from 'react'
import { format } from 'date-fns'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getLearnArticles } from '@/lib/actions/learn'
import type { ParsedListPage } from '@/lib/notion-client'
import { coverRemap } from '@/lib/post-client'
import { cn } from '@/lib/utils'

interface ArticleGridProps {
  initialPages: ParsedListPage[]
  nextCursor: string
}

export default function ArticleGrid({
  initialPages,
  nextCursor,
}: ArticleGridProps) {
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <article
            key={page.id}
            className="group border border-border bg-accent rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <Link href={`/learn/${page.slug}`}>
              <div className="aspect-[16/10] overflow-hidden">
                {/** biome-ignore lint/performance/noImgElement: no cdn */}
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={`https://img0.phala.world/cover/1744x974/${coverRemap[page.id] || page.id}.jpg`}
                  alt={page.title}
                />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center gap-2 flex-wrap mb-3">
                {page.tags.slice(0, 2).map((tag, i) => (
                  <Badge
                    key={`tag-${page.id}-${i}`}
                    variant="outline"
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                <Link
                  href={`/learn/${page.slug}`}
                  className="hover:underline decoration-2 underline-offset-2"
                >
                  {page.title}
                </Link>
              </h3>
              {page.publishedDate && (
                <div className="text-xs text-muted-foreground">
                  <p suppressHydrationWarning>
                    {format(new Date(page.publishedDate), 'MMM dd, yyyy')}
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {cursor && (
        <div className="pt-12 pb-10 w-full flex items-center justify-center">
          <Button
            variant="outline"
            size="lg"
            className={cn(isPending ? 'opacity-75' : null)}
            onClick={loadMore}
            disabled={isPending}
          >
            <RefreshCcw
              className={cn('h-5 w-5 mr-2', isPending ? 'animate-spin' : '')}
            />
            Load more articles
          </Button>
        </div>
      )}
    </>
  )
}
