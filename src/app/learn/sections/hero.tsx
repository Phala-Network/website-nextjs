import { Badge } from '@/components/ui/badge'
import type { ParsedListPage } from '@/lib/notion-client'
import { coverRemap } from '@/lib/post-client'
import { format } from 'date-fns'
import Link from 'next/link'

interface LearnHeroProps {
  featuredArticle: ParsedListPage
}

export default function LearnHero({ featuredArticle }: LearnHeroProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Title */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-medium md:text-6xl">
            Learn Confidential Computing
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            From basics to advanced topics. Master TEE technology, build secure AI applications,
            and explore real-world use cases.
          </p>
        </div>

        {/* Featured Article - Blog14 style */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
            <Link href={`/learn/${featuredArticle.slug}`}>
              {/** biome-ignore lint/performance/noImgElement: no cdn */}
              <img
                src={`https://img0.phala.world/cover/1744x974/${coverRemap[featuredArticle.id] || featuredArticle.id}.jpg`}
                alt={featuredArticle.title}
                className="aspect-video rounded-lg object-cover transition-opacity hover:opacity-90"
              />
            </Link>
            <div className="flex flex-col items-start gap-4">
              <Badge variant="secondary" className="shrink">
                Featured
              </Badge>
              <h2 className="text-balance text-2xl font-semibold md:max-w-lg lg:text-3xl">
                <Link
                  href={`/learn/${featuredArticle.slug}`}
                  className="hover:underline"
                >
                  {featuredArticle.title}
                </Link>
              </h2>
              {featuredArticle.description && (
                <p className="text-muted-foreground md:max-w-lg">
                  {featuredArticle.description}
                </p>
              )}
              {featuredArticle.publishedDate && (
                <p className="text-muted-foreground text-sm" suppressHydrationWarning>
                  {format(new Date(featuredArticle.publishedDate), 'MMMM dd, yyyy')}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
