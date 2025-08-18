import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Separator } from '@/components/ui/separator'
import { env } from '@/env'
import {
  getNavigationPosts,
  getPostById,
  getPostMetadata,
  getRecentPosts,
  getSimilarPosts,
} from '@/lib/post'
import Post from '../../post'
import PostNavigation from '../../post-navigation'
import PostSuggestions from '../../post-suggestions'
import { PostNavigationSkeleton, PostsSectionSkeleton } from '../../skeleton'

const baseUrl = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const page = await getPostById(id)

  return getPostMetadata(page, true)
}

export default async function PostPreviewPage({ params }: Props) {
  const { id } = await params
  const page = await getPostById(id)

  const recentPages = getRecentPosts(3, page.slug)
  const similarPages = getSimilarPosts(page)
  const navigation = getNavigationPosts(page)

  return (
    <div className="min-h-screen py-12 md:py-24 max-w-7xl mx-auto">
      <div className="container">
        {/* Preview Banner */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-yellow-800 font-medium">
            🔍 Preview Mode - Status: {page.status}
          </p>
          <p className="text-yellow-700 text-sm">
            This is a preview of the post.
          </p>
        </div>

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
