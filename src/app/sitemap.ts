import type { MetadataRoute } from 'next'
import * as R from 'ramda'

import { env } from '@/env'
import { notion, queryDatabase } from '@/lib/notion-client'

const WEBSITE_URL = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

async function retrieveTags() {
  const database = await notion.databases.retrieve({
    database_id: env.NOTION_POSTS_DATABASE_ID,
  })
  const tags = R.without(
    ['Changelog'],
    R.map(
      R.prop('name'),
      R.pathOr([], ['properties', 'Tags', 'multi_select', 'options'], database),
    ),
  )
  return tags
}

async function retrievePosts() {
  const { pages } = await queryDatabase({
    database_id: env.NOTION_POSTS_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Status',
          status: {
            equals: 'Published',
          },
        },
        {
          property: 'Post Type',
          select: {
            equals: 'Post',
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Published Time',
        direction: 'descending',
      },
    ],
    page_size: 100,
  })
  return pages
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tags = await retrieveTags()
  const posts = await retrievePosts()

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
      lastModified: new Date(publishedTime),
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  )

  return [...staticPages, ...tagPages, ...postPages]
}
