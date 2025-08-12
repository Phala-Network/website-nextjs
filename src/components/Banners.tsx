'use client'

import { useEffect, useState } from 'react'

import TagLink from '@/components/TagLink'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
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
      <Carousel setApi={setApi} className={cn('w-full h-full', 'rounded-sm')}>
        <CarouselContent className="-ml-0">
          {pages.map((page) => (
            <CarouselItem
              key={page.id}
              className={cn(
                'pl-0 w-full h-full bg-[#FAFEED]',
                'rounded-sm p-2',
              )}
            >
              <article
                className={cn('w-full', 'grid grid-cols-1 lg:grid-cols-20')}
              >
                <div
                  className={cn('lg:col-span-12', 'rounded-sm overflow-hidden')}
                >
                  <a href={`/posts${page.slug}`}>
                    <img
                      className="w-full aspect-872/487"
                      width={872}
                      height={487}
                      src={`https://img0.phala.world/cover/1744x974/${page.id}.jpg`}
                      alt={page.title}
                    />
                  </a>
                </div>
                <div
                  className={cn(
                    'lg:col-span-8',
                    'flex flex-col justify-between',
                    'p-4',
                  )}
                >
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      {page.tags.map((tag, i) => (
                        <div key={`tag-${page.id}-${i}`}>
                          <TagLink href={`/tags/${tag}`}>{tag}</TagLink>
                        </div>
                      ))}
                    </div>
                    <h2 className="font-bold text-2xl">
                      <a href={`/posts${page.slug}`}>{page.title}</a>
                    </h2>
                  </div>
                  <div className="text-sm">
                    <p>{page.publishedDate}</p>
                  </div>
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
              key={`pagination-${index}`}
              type="button"
              onClick={() => scrollTo(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-colors',
                index === selectedIndex ? 'bg-[#CDFA50]' : 'bg-white',
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
