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

// Temporarily disabled for build without Notion credentials
// export async function generateStaticParams() {
//   const pages = await getRecentPosts(100) // Generate for most recent 100 posts
//   return pages.map((page) => ({ slug: page.slug }))
// }

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const page = await getPostBySlug(slug)

  const recentPages = getRecentPosts(3, page.slug)
  const similarPages = getSimilarPosts(page)
  const navigation = getNavigationPosts(page)

  return (
    <div className="min-h-screen py-12 md:py-24 max-w-7xl mx-auto">
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
