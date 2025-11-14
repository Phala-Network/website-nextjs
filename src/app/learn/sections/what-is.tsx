import { Badge } from '@/components/ui/badge'
import type { ParsedListPage } from '@/lib/notion-client'
import { coverRemap } from '@/lib/post-client'
import Link from 'next/link'

interface WhatIsSectionProps {
  articles: ParsedListPage[]
}

export default function WhatIsSection({ articles }: WhatIsSectionProps) {
  if (!articles.length) return null

  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <section className="bg-accent py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-medium md:text-4xl">
            Start Here: What is Confidential Computing?
          </h2>
          <p className="text-muted-foreground text-lg">
            New to confidential computing? Start with these foundational concepts.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
          <Link href={`/learn/${featured.slug}`}>
            {/** biome-ignore lint/performance/noImgElement: no cdn */}
            <img
              src={`https://img0.phala.world/cover/1744x974/${coverRemap[featured.id] || featured.id}.jpg`}
              alt={featured.title}
              className="aspect-video rounded-lg object-cover transition-opacity hover:opacity-90"
            />
          </Link>
          <div className="flex flex-col items-start gap-4">
            <Badge variant="secondary">{featured.tags[0]}</Badge>
            <h3 className="text-balance text-2xl font-semibold md:max-w-lg lg:text-3xl">
              <Link href={`/learn/${featured.slug}`} className="hover:underline">
                {featured.title}
              </Link>
            </h3>
            {featured.description && (
              <p className="text-muted-foreground md:max-w-lg">
                {featured.description}
              </p>
            )}
          </div>
        </div>

        {/* Rest of Articles - Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {rest.map((article) => (
              <div key={article.id} className="flex flex-col items-start gap-4">
                <Link href={`/learn/${article.slug}`}>
                  {/** biome-ignore lint/performance/noImgElement: no cdn */}
                  <img
                    src={`https://img0.phala.world/cover/1744x974/${coverRemap[article.id] || article.id}.jpg`}
                    alt={article.title}
                    className="aspect-video rounded-lg object-cover transition-opacity hover:opacity-90"
                  />
                </Link>
                <h4 className="text-balance text-xl font-semibold md:max-w-md">
                  <Link href={`/learn/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h4>
                {article.description && (
                  <p className="text-muted-foreground line-clamp-2 md:max-w-md">
                    {article.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
