import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { CdnImage } from '@/components/ui/cdn-image'
import { buildCoverUrl } from '@/lib/image-url'
import type { ParsedListPage } from '@/lib/notion-client'
import { format } from 'date-fns'
import Link from 'next/link'

interface AdvancedSectionProps {
  articles: ParsedListPage[]
}

export default function AdvancedSection({ articles }: AdvancedSectionProps) {
  if (!articles.length) return null

  return (
    <section className="bg-accent py-32">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-medium md:text-4xl">
            Advanced Topics
          </h2>
          <p className="text-muted-foreground text-lg">
            Deep dives into cutting-edge confidential computing concepts and implementations.
          </p>
        </div>

        <div className="space-y-12">
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
                    <CdnImage
                      src={buildCoverUrl(article.id, article.lastEditedTime)}
                      alt={article.title}
                      width={1744}
                      height={974}
                      className="aspect-16/9 w-full rounded-lg object-cover object-center sm:w-[260px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="text-muted-foreground flex items-center gap-4 text-sm">
                    <Badge variant="secondary">Advanced</Badge>
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
                    Read more
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
