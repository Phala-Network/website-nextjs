import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Separator } from '@/components/ui/separator'
import { env } from '@/env'
import {
  getNavigationLearnArticles,
  getLearnArticleBySlug,
  getLearnMetadata,
  getRecentLearnArticles,
  getSimilarLearnArticles,
} from '@/lib/learn'
import Post from '../../posts/post'
import PostNavigation from '../../posts/post-navigation'
import PostSuggestions from '../../posts/post-suggestions'
import { PostNavigationSkeleton, PostsSectionSkeleton } from '../../posts/skeleton'

export const revalidate = 7200

const baseUrl = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getLearnArticleBySlug(slug)

  return getLearnMetadata(page)
}

export async function generateStaticParams() {
  const pages = await getRecentLearnArticles(100) // Generate for most recent 100 articles
  return pages.map((page) => ({ slug: page.slug }))
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params
  const page = await getLearnArticleBySlug(slug)

  const recentPages = getRecentLearnArticles(3, page.slug)
  const similarPages = getSimilarLearnArticles(page)
  const navigation = getNavigationLearnArticles(page)

  return (
    <div className="min-h-screen py-12 md:py-24 max-w-7xl mx-auto">
      <div className="container">
        <Post url={baseUrl} page={page} basePath="/learn" breadcrumbLabel="Learn" />

        <Separator className="my-12" />

        {/* Article Navigation with Suspense */}
        <Suspense fallback={<PostNavigationSkeleton />}>
          <PostNavigation navigation={navigation} />
        </Suspense>

        {/* Recent and Related Articles with Suspense */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Suspense fallback={<PostsSectionSkeleton title="Recent Articles" />}>
            <PostSuggestions pages={recentPages} type="recent" basePath="/learn" />
          </Suspense>

          <Suspense fallback={<PostsSectionSkeleton title="Related Articles" />}>
            <PostSuggestions pages={similarPages} type="related" basePath="/learn" />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
