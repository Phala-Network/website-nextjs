// Temporarily disabled - requires Notion API
// import { getBlogFeed } from '@/lib/rss_feed'

export const revalidate = 7200

export async function GET() {
  // Temporarily return empty RSS feed
  const emptyFeed = '<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Phala Network Blog</title><description>Blog temporarily unavailable</description><link>https://phala.network</link></channel></rss>'
  return new Response(emptyFeed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=60',
      'CDN-Cache-Control': 'public, s-maxage=600',
      'Vercel-CDN-Cache-Control': 'public, s-maxage=7200',
    },
  })
}
