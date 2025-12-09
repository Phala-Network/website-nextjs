import { Badge } from '@/components/ui/badge'
import { buildCoverUrl } from '@/lib/image-url'
import type { ParsedListPage } from '@/lib/notion-client'
import Image from 'next/image'
import Link from 'next/link'

interface HeroBlog14Props {
  featuredArticle: ParsedListPage
  popularArticles: ParsedListPage[]
}

export default function HeroBlog14({ featuredArticle, popularArticles }: HeroBlog14Props) {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-medium md:text-6xl">
            Learn Confidential Computing
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Master TEE technology, build privacy-preserving AI, and explore secure infrastructure from basics to advanced topics.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Featured Article */}
          <div className="my-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
            <Link href={`/learn/${featuredArticle.slug}`}>
              <Image
                src={buildCoverUrl(featuredArticle.id)}
                alt={featuredArticle.title}
                width={1744}
                height={974}
                className="aspect-video rounded-lg object-cover transition-opacity hover:opacity-90"
              />
            </Link>
            <div className="flex flex-col items-start gap-4">
              <Badge variant="secondary" className="shrink">
                {featuredArticle.tags[0] || 'Featured'}
              </Badge>
              <h2 className="text-balance text-2xl font-semibold md:max-w-lg lg:text-3xl">
                <Link href={`/learn/${featuredArticle.slug}`} className="hover:underline">
                  {featuredArticle.title}
                </Link>
              </h2>
            </div>
          </div>

          {/* Popular Posts */}
          <p className="text-2xl font-medium md:text-3xl mb-8">Popular Articles</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {popularArticles.map((article) => (
              <div key={article.id} className="flex flex-col items-start gap-4">
                <Link href={`/learn/${article.slug}`}>
                  <Image
                    src={buildCoverUrl(article.id)}
                    alt={article.title}
                    width={1744}
                    height={974}
                    className="aspect-video rounded-lg object-cover transition-opacity hover:opacity-90"
                  />
                </Link>
                <Badge variant="secondary" className="shrink">
                  {article.tags[0] || 'Article'}
                </Badge>
                <h3 className="text-balance text-xl font-semibold md:max-w-md">
                  <Link href={`/learn/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
