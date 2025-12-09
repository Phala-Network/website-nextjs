import { Badge } from '@/components/ui/badge'
import { buildCoverUrl } from '@/lib/image-url'
import type { ParsedListPage } from '@/lib/notion-client'
import Image from 'next/image'
import Link from 'next/link'

interface UseCasesSectionProps {
  articles: ParsedListPage[]
}

export default function UseCasesSection({ articles }: UseCasesSectionProps) {
  if (!articles.length) return null

  return (
    <section className="bg-accent py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-medium md:text-4xl">
            Real-World Applications
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore how confidential computing solves real problems across industries.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/learn/${article.slug}`}
              className="border-border bg-background group flex flex-col justify-between rounded-xl border overflow-hidden"
            >
              <div>
                <div className="aspect-3/2 flex overflow-hidden">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <Image
                        src={buildCoverUrl(article.id)}
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
                <Badge variant="outline">Use Case</Badge>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
