import { Badge } from '@/components/ui/badge'
import { CdnImage } from '@/components/ui/cdn-image'
import { buildCoverUrl } from '@/lib/image-url'
import type { ParsedListPage } from '@/lib/notion-client'
import Link from 'next/link'

interface WhatIsBlog1Props {
  articles: ParsedListPage[]
}

export default function WhatIsBlog1({ articles }: WhatIsBlog1Props) {
  if (!articles.length) return null

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-6 text-4xl font-medium md:text-5xl">
            Start Here: What is Confidential Computing?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            New to confidential computing? Start with these foundational concepts and understand the basics.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/learn/${article.slug}`}
              className="border-border bg-accent group flex flex-col justify-between rounded-xl border overflow-hidden"
            >
              <div>
                <div className="aspect-3/2 flex overflow-hidden">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <CdnImage
                        src={buildCoverUrl(article.id, article.lastEditedTime)}
                        alt={article.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 line-clamp-3 break-words px-6 pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4">
                {article.title}
              </div>
              <div className="px-6 pb-6">
                <Badge variant="outline">Basics</Badge>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
