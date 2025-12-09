'use client'

import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import TagLink from '@/components/tag-link'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { buildCoverUrl } from '@/lib/image-url'
import type { ParsedListPage } from '@/lib/notion-client'
import { cn } from '@/lib/utils'

export default function Banners({ pages }: { pages: ParsedListPage[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    onSelect()
    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  if (!pages) {
    return null
  }

  return (
    <div className="w-full h-full">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {pages.map((page) => (
            <CarouselItem key={page.id}>
              <article
                className={cn(
                  'w-full bg-muted rounded-2xl border',
                  'grid grid-cols-1 lg:grid-cols-2',
                )}
              >
                <div className="p-2">
                  <div className={cn('rounded-sm overflow-hidden')}>
                    <Link href={`/posts/${page.slug}`}>
                      <Image
                        className="w-full aspect-872/487"
                        width={1744}
                        height={974}
                        src={buildCoverUrl(page.id)}
                        alt={page.title}
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className={cn(
                    'flex flex-col justify-between',
                    'p-8 min-h-60',
                  )}
                >
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      {page.tags.map((tag, i) => (
                        <div key={`tag-${page.id}-${i}`}>
                          <TagLink href={`/tags/${tag}`}>{tag}</TagLink>
                        </div>
                      ))}
                    </div>
                    <h2 className="font-bold text-2xl">
                      <a href={`/posts/${page.slug}`}>{page.title}</a>
                    </h2>
                  </div>
                  {page.publishedDate && (
                    <div className="text-sm">
                      <p suppressHydrationWarning>
                        {format(new Date(page.publishedDate), 'MMM dd, yyyy')}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="text-center py-4">
        <div className="flex justify-center gap-2">
          {pages.map((_, index) => (
            <button
              key={`pagination-${
                // biome-ignore lint/suspicious/noArrayIndexKey: static
                index
              }`}
              type="button"
              onClick={() => scrollTo(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-colors border',
                index === selectedIndex ? 'bg-primary-400' : 'bg-muted',
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
