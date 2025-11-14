import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import type { ParsedListPage } from '@/lib/notion-client'
import { coverRemap } from '@/lib/post-client'
import { format } from 'date-fns'
import Link from 'next/link'

interface HowToSectionProps {
  articles: ParsedListPage[]
}

export default function HowToSection({ articles }: HowToSectionProps) {
  if (!articles.length) return null

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-medium md:text-4xl">
            Build with Confidence: Guides & Tutorials
          </h2>
          <p className="text-muted-foreground text-lg">
            Step-by-step guides to help you implement confidential computing in your projects.
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
                    <Badge variant="secondary">
                      {article.tags.find(t => t === 'How to' || t === 'Tips & Guide') || 'Guide'}
                    </Badge>
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
                  {article.description && (
                    <p className="text-muted-foreground text-base line-clamp-2">
                      {article.description}
                    </p>
                  )}
                  <Link
                    href={`/learn/${article.slug}`}
                    className="text-primary inline-flex items-center hover:underline"
                  >
                    Read guide
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
