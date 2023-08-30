import type { GetServerSidePropsContext } from 'next'
import * as R from 'ramda'

import { notion, queryDatabase, type ParsedListPage } from '@/lib/notion-client'

//pages/sitemap.xml.js
const WEBSITE_URL = 'https://phala.network';

function generateSiteMap(tags: string[], posts: ParsedListPage[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${WEBSITE_URL}</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL}/phat-contract</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL}/blog</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL}/changelog</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL}/rss.xml</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL}/atom.xml</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL}/changelog/rss.xml</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL}/changelog/atom.xml</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL}</loc>
     </url>
      ${tags.map((tag) => {
        return `
       <url>
         <loc>${`${WEBSITE_URL}/tags/${encodeURI(tag)}`}</loc>
       </url>
        `
      })}
     ${posts
       .map(({ slug }) => {
         return `
       <url>
         <loc>${`${WEBSITE_URL}/posts${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

async function retrieveTags() {
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
  })
  const tags = R.without(['Changelog'], R.map(
    R.prop('name'),
    R.pathOr([], ['properties', 'Tags', 'multi_select', 'options'], database)
  ))
  return tags
}

async function retrievePosts() {
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
    page_size: 100,
  })
  return pages
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const tags = await retrieveTags()
  const posts = await retrievePosts()
  const sitemap = generateSiteMap(tags, posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}
