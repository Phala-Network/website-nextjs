import * as R from 'ramda'

import { env } from '@/env'
import { notion, type ParsedListPage, queryDatabase } from '@/lib/notion-client'

const WEBSITE_URL = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

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
      ${tags.map((tag) => {
        return `
       <url>
         <loc>${`${WEBSITE_URL}/tags/${encodeURIComponent(tag)}`}</loc>
       </url>
        `
      })}
     ${posts
       .map(({ slug }) => {
         return `
       <url>
         <loc>${`${WEBSITE_URL}/posts${slug}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

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

export async function GET() {
  const tags = await retrieveTags()
  const posts = await retrievePosts()
  const sitemap = generateSiteMap(tags, posts)

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 's-maxage=1800',
    },
  })
}
