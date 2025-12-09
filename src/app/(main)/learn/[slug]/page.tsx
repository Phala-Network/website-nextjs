import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Separator } from '@/components/ui/separator'
import { env } from '@/env'
import { buildCoverUrl } from '@/lib/image-url'
import {
  getLearnArticleBySlug,
  getLearnMetadata,
  getNavigationLearnArticles,
  getRecentLearnArticles,
  getSimilarLearnArticles,
} from '@/lib/learn'
import Post from '../../posts/post'
import PostNavigation from '../../posts/post-navigation'
import PostSuggestions from '../../posts/post-suggestions'
import {
  PostNavigationSkeleton,
  PostsSectionSkeleton,
} from '../../posts/skeleton'

// ISR configuration
export const revalidate = 7200
export const dynamicParams = true

// Return empty array to skip build-time generation
// Pages will be generated on-demand and cached
export async function generateStaticParams() {
  return []
}

const baseUrl = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getLearnArticleBySlug(slug)

  return getLearnMetadata(page)
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params
  const page = await getLearnArticleBySlug(slug)

  const recentPages = getRecentLearnArticles(3, page.slug)
  const similarPages = getSimilarLearnArticles(page)
  const navigation = getNavigationLearnArticles(page)

  // Generate Article structured data for AI crawlers
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: page.title,
    description: page.title,
    image: buildCoverUrl(page.id, page.lastEditedTime),
    datePublished: page.publishedTime,
    dateModified: page.publishedTime,
    author: {
      '@type': 'Organization',
      name: 'Phala Network',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Phala Network',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/learn/${page.slug}`,
    },
    keywords: page.tags.join(', '),
    articleSection: 'Confidential Computing Education',
    inLanguage: 'en-US',
  }

  return (
    <div className="min-h-screen py-12 md:py-24 max-w-7xl mx-auto">
      {/* Add structured data for AI crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <div className="container">
        <Post
          url={baseUrl}
          page={page}
          basePath="/learn"
          breadcrumbLabel="Learn"
        />

        <Separator className="my-12" />

        {/* Article Navigation with Suspense */}
        <Suspense fallback={<PostNavigationSkeleton />}>
          <PostNavigation navigation={navigation} />
        </Suspense>

        {/* Recent and Related Articles with Suspense */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Suspense fallback={<PostsSectionSkeleton title="Recent Articles" />}>
            <PostSuggestions
              pages={recentPages}
              type="recent"
              basePath="/learn"
            />
          </Suspense>

          <Suspense
            fallback={<PostsSectionSkeleton title="Related Articles" />}
          >
            <PostSuggestions
              pages={similarPages}
              type="related"
              basePath="/learn"
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
