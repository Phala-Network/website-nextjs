import type { MetadataRoute } from 'next'

import { env } from '@/env'
import { getRecentPosts, retrieveTags } from '@/lib/post'

const WEBSITE_URL = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tags = await retrieveTags()
  const posts = await getRecentPosts(200)

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: WEBSITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      images: [`${WEBSITE_URL}/opengraph-image.png`],
      priority: 1,
    },
    {
      url: `${WEBSITE_URL}/confidential-vm`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${WEBSITE_URL}/confidential-ai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${WEBSITE_URL}/dstack`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${WEBSITE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${WEBSITE_URL}/blog`,
      lastModified:
        posts.length > 0 ? new Date(posts[0].publishedTime) : new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}/partnerships`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${WEBSITE_URL}/success-stories`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${WEBSITE_URL}/startup-program`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${WEBSITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${WEBSITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${WEBSITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${WEBSITE_URL}/data-processing-agreement`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
  ]

  const tagPages = tags.map((tag): MetadataRoute.Sitemap[number] => ({
    url: `${WEBSITE_URL}/tags/${encodeURIComponent(tag)}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  const postPages = posts.map(
    ({ slug, publishedTime }): MetadataRoute.Sitemap[number] => ({
      url: `${WEBSITE_URL}/posts${slug}`,
      lastModified: publishedTime ? new Date(publishedTime) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  )

  return [...staticPages, ...tagPages, ...postPages]
}
