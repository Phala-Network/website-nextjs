import type { MetadataRoute } from 'next'

import { validSlugs as comparisonSlugs } from '@/data/comparisons'
import { env } from '@/env'
import { getRecentPosts, retrieveTags } from '@/lib/post'

const BASE_URL = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tags = await retrieveTags()
  const posts = await getRecentPosts(100)

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      images: [`${BASE_URL}/opengraph-image.png`],
      priority: 1,
    },
    {
      url: new URL('/about', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: new URL('/confidential-vm', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: new URL('/gpu-tee', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: new URL('/gpu-tee/h100', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: new URL('/gpu-tee/h200', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: new URL('/gpu-tee/b200', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: new URL('/confidential-ai-models', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: new URL('/dstack', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: new URL('/pricing', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: new URL('/blog', BASE_URL).toString(),
      lastModified:
        posts.length > 0 ? new Date(posts[0].publishedTime) : new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: new URL('/partnerships', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: new URL('/success-stories', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...comparisonSlugs.map((slug): MetadataRoute.Sitemap[number] => ({
      url: new URL(`/compare/${slug}`, BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    {
      url: new URL('/startup-program', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: new URL('/contact', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: new URL('/terms', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: new URL('/privacy', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: new URL('/data-processing-agreement', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
  ]

  const tagPages = tags.map((tag): MetadataRoute.Sitemap[number] => ({
    url: new URL(`/tags/${tag}`, BASE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  const postPages = posts.map(
    ({ slug, publishedTime }): MetadataRoute.Sitemap[number] => ({
      url: new URL(`/posts/${slug}`, BASE_URL).toString(),
      lastModified: publishedTime ? new Date(publishedTime) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  )

  return [...staticPages, ...tagPages, ...postPages]
}
