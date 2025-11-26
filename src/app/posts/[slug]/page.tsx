import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Separator } from '@/components/ui/separator'
import { env } from '@/env'
import {
  getNavigationPosts,
  getPostBySlug,
  getPostMetadata,
  getRecentPosts,
  getSimilarPosts,
} from '@/lib/post'
import Post from '../post'
import PostNavigation from '../post-navigation'
import PostSuggestions from '../post-suggestions'
import { PostNavigationSkeleton, PostsSectionSkeleton } from '../skeleton'

export const revalidate = 7200

const baseUrl = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPostBySlug(slug)

  return getPostMetadata(page)
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const page = await getPostBySlug(slug)

  const recentPages = getRecentPosts(3, page.slug)
  const similarPages = getSimilarPosts(page)
  const navigation = getNavigationPosts(page)

  // Generate Article structured data for AI crawlers
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.title,
    image: `https://img0.phala.world/cover/1200x630/${page.id}.jpg`,
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
      '@id': `${baseUrl}/posts/${page.slug}`,
    },
    keywords: page.tags.join(', '),
    articleSection: 'Technology Blog',
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
        <Post url={baseUrl} page={page} />

        <Separator className="my-12" />

        {/* Post Navigation with Suspense */}
        <Suspense fallback={<PostNavigationSkeleton />}>
          <PostNavigation navigation={navigation} />
        </Suspense>

        {/* Recent and Related Posts with Suspense */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Suspense fallback={<PostsSectionSkeleton title="Recent Posts" />}>
            <PostSuggestions pages={recentPages} type="recent" />
          </Suspense>

          <Suspense fallback={<PostsSectionSkeleton title="Related Posts" />}>
            <PostSuggestions pages={similarPages} type="related" />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
