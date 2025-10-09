import { Feed } from 'feed'

import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'

const SITE_URL = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

export async function getBlogFeed() {
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
    page_size: 200,
  })

  const feed = new Feed({
    title: 'Phala News',
    description: 'Latest updates from Phala',
    id: `${SITE_URL}/blog`,
    link: `${SITE_URL}/blog`,
    image: `${SITE_URL}/logo.svg`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Phala`,
    feedLinks: {
      rss2: `${SITE_URL}/rss.xml`,
      atom: `${SITE_URL}/atom.xml`,
    },
  })

  pages.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${SITE_URL}/posts/${post.slug}`,
      link: `${SITE_URL}/posts/${post.slug}`,
      // description: post.title,
      date: new Date(post.publishedTime),
    })
  })

  return feed
}
