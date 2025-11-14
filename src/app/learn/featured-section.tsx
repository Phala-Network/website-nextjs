'use client'

import { format } from 'date-fns'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import type { ParsedListPage } from '@/lib/notion-client'
import { coverRemap } from '@/lib/post-client'

interface FeaturedSectionProps {
  page: ParsedListPage
}

export default function FeaturedSection({ page }: FeaturedSectionProps) {
  return (
    <div className="bg-accent border border-border rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <Link href={`/learn/${page.slug}`} className="block overflow-hidden">
          {/** biome-ignore lint/performance/noImgElement: no cdn */}
          <img
            className="w-full h-full object-cover aspect-[16/10] lg:aspect-auto transition-transform duration-300 hover:scale-105"
            src={`https://img0.phala.world/cover/1744x974/${coverRemap[page.id] || page.id}.jpg`}
            alt={page.title}
          />
        </Link>
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            {page.tags.slice(0, 2).map((tag, i) => (
              <Badge key={`tag-${page.id}-${i}`} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            <Link
              href={`/learn/${page.slug}`}
              className="hover:underline decoration-2 underline-offset-4"
            >
              {page.title}
            </Link>
          </h2>
          {page.description && (
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {page.description}
            </p>
          )}
          {page.publishedDate && (
            <div className="text-sm text-muted-foreground">
              <p suppressHydrationWarning>
                {format(new Date(page.publishedDate), 'MMMM dd, yyyy')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
