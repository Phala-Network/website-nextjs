import { Feed } from 'feed'

import { queryDatabase } from '@/lib/notion-client'


const SITE_URL = 'https://phala.network'


export async function getBlogFeed() {
  const { pages } = await queryDatabase({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
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
    page_size: 18,
  })

  const feed = new Feed({
    title: 'Phala News',
    description: 'Latest updates from Phala Network',
    id: `${SITE_URL}/blog`,
    link: `${SITE_URL}/blog`,
    image: `${SITE_URL}/logo.svg`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Phala Network`,
    feedLinks: {
     rss2: `${SITE_URL}/rss.xml`,
     atom: `${SITE_URL}/atom.xml`,
    },
  })

  pages.forEach((post) => {
    feed.addItem({
     title: post.title,
     id: `${SITE_URL}/posts${post.slug}`,
     link: `${SITE_URL}/posts${post.slug}`,
     // description: post.title,
     date: new Date(post.publishedTime),
    });
  })

  return feed
}

export async function getChangelogFeed() {
  const { pages } = await queryDatabase({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
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
        {
          property: 'Tags',
          multi_select: {
            contains: 'Changelog',
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
    page_size: 18,
  })

  const feed = new Feed({
    title: 'Phala Changelog',
    description: 'The product changelog of Phala Network',
    id: `${SITE_URL}/changelog`,
    link: `${SITE_URL}/changelog`,
    image: `${SITE_URL}/logo.svg`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Phala Network`,
    feedLinks: {
     rss2: `${SITE_URL}/changelog/rss.xml`,
     atom: `${SITE_URL}/changelog/atom.xml`,
    },
  })

  pages.forEach((post) => {
    feed.addItem({
     title: post.title,
     id: `${SITE_URL}/posts${post.slug}`,
     link: `${SITE_URL}/posts${post.slug}`,
     // description: post.title,
     date: new Date(post.publishedTime),
    });
  })

  return feed
}
