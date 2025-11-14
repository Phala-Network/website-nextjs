import { Badge } from '@/components/ui/badge'
import type { ParsedListPage } from '@/lib/notion-client'
import { coverRemap } from '@/lib/post-client'
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
              className="border-border bg-accent group flex flex-col justify-between rounded-xl border p-6"
            >
              <div>
                <div className="aspect-3/2 flex overflow-clip rounded-xl">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      {/** biome-ignore lint/performance/noImgElement: no cdn */}
                      <img
                        src={`https://img0.phala.world/cover/1744x974/${coverRemap[article.id] || article.id}.jpg`}
                        alt={article.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4">
                {article.title}
              </div>
              {article.description && (
                <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                  {article.description}
                </div>
              )}
              <div>
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
