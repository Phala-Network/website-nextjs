import type { MetadataRoute } from 'next'

export const revalidate = 7200

import { validSlugs as comparisonSlugs } from '@/data/comparisons'
import { successStories } from '@/data/success-stories-data'
import { env } from '@/env'
import { getRecentPosts } from '@/lib/post'
import { queryDatabase } from '@/lib/notion-client'
import { retrieveLearnTags } from '@/lib/learn'

const BASE_URL = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getRecentPosts(100)

  // Get Learn articles
  const { pages: learnArticles } = await queryDatabase({
    database_id: env.NOTION_LEARN_DATABASE_ID,
    filter: {
      and: [
        { property: 'Status', status: { equals: 'Published' } },
        { property: 'Tags', multi_select: { does_not_contain: 'Changelog' } },
        { property: 'Tags', multi_select: { does_not_contain: 'not-listed' } },
      ],
    },
    sorts: [{ property: 'Published Time', direction: 'descending' }],
    page_size: 100,
  })

  const learnTags = await retrieveLearnTags()

  // Get only tags that have actual published posts (not all tag options from schema)
  const activeTags = new Set<string>()
  for (const post of posts) {
    if (post.tags && Array.isArray(post.tags)) {
      for (const tag of post.tags) {
        activeTags.add(tag)
      }
    }
  }

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
      url: new URL('/learn', BASE_URL).toString(),
      lastModified:
        learnArticles.length > 0 ? new Date(learnArticles[0].publishedTime) : new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
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
    ...successStories.map((story): MetadataRoute.Sitemap[number] => ({
      url: new URL(`/success-stories/${story.slug}`, BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
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
      url: new URL('/solutions/confidential-training', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: new URL('/solutions/ai-agents', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: new URL('/solutions/fine-tuned-models', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: new URL('/solutions/private-ai-data', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: new URL('/solutions/private-ai-inference', BASE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
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

  // Only include tag pages that have actual posts
  const tagPages = Array.from(activeTags).map((tag): MetadataRoute.Sitemap[number] => ({
    url: new URL(`/tags/${encodeURIComponent(tag)}`, BASE_URL).toString(),
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

  // Learn tag pages
  const learnTagPages = learnTags.map((tag): MetadataRoute.Sitemap[number] => ({
    url: new URL(`/learn/tags/${encodeURIComponent(tag)}`, BASE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Learn article pages
  const learnPages = learnArticles.map(
    ({ slug, publishedTime }): MetadataRoute.Sitemap[number] => ({
      url: new URL(`/learn/${slug}`, BASE_URL).toString(),
      lastModified: publishedTime ? new Date(publishedTime) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }),
  )

  return [...staticPages, ...tagPages, ...postPages, ...learnTagPages, ...learnPages]
}
