import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import type { ParsedListPage } from '@/lib/notion-client'
import { coverRemap } from '@/lib/post-client'
import { format } from 'date-fns'
import Link from 'next/link'

interface ComparisonsBlog24Props {
  articles: ParsedListPage[]
}

export default function ComparisonsBlog24({ articles }: ComparisonsBlog24Props) {
  if (!articles.length) return null

  return (
    <section className="bg-accent py-32">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-5xl lg:mb-6">
            Compare Technologies
          </h2>
          <p className="text-muted-foreground md:text-base lg:text-lg">
            Understand the differences between confidential computing and other security approaches.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-12">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden border-0 bg-transparent shadow-none"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="shrink-0">
                  <Link
                    href={`/learn/${article.slug}`}
                    className="block transition-opacity duration-200 hover:opacity-90"
                  >
                    {/** biome-ignore lint/performance/noImgElement: no cdn */}
                    <img
                      src={`https://img0.phala.world/cover/1744x974/${coverRemap[article.id] || article.id}.jpg`}
                      alt={article.title}
                      className="aspect-16/9 w-full rounded-lg object-cover object-center sm:w-[260px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="text-muted-foreground flex items-center gap-4 text-sm">
                    <Badge variant="secondary">Comparison</Badge>
                    {article.publishedDate && (
                      <span suppressHydrationWarning>
                        {format(new Date(article.publishedDate), 'MMM dd, yyyy')}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold leading-tight lg:text-2xl">
                    <Link
                      href={`/learn/${article.slug}`}
                      className="hover:underline"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <Link
                    href={`/learn/${article.slug}`}
                    className="text-primary inline-flex items-center hover:underline"
                  >
                    Read comparison
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
