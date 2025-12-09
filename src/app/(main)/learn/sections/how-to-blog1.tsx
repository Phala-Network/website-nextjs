import { Badge } from '@/components/ui/badge'
import { buildCoverUrl } from '@/lib/image-url'
import type { ParsedListPage } from '@/lib/notion-client'
import Image from 'next/image'
import Link from 'next/link'

interface HowToBlog1Props {
  articles: ParsedListPage[]
}

export default function HowToBlog1({ articles }: HowToBlog1Props) {
  if (!articles.length) return null

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-6 text-4xl font-medium md:text-5xl">
            Build with Confidence: Guides & Tutorials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Step-by-step guides to help you implement confidential computing in your projects.
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
                <Badge variant="outline">
                  {article.tags.includes('How to') ? 'How to' : 'Guide'}
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
