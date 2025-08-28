// Temporarily disabled - requires Notion API
// import { getBlogFeed } from '@/lib/rss_feed'

export const revalidate = 7200

export async function GET() {
  // Temporarily return empty Atom feed
  const emptyFeed = '<?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>Phala Network Blog</title><subtitle>Blog temporarily unavailable</subtitle><link href="https://phala.network"/><id>https://phala.network</id><updated>2025-08-28T00:00:00Z</updated></feed>'
  return new Response(emptyFeed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=60',
      'CDN-Cache-Control': 'public, s-maxage=600',
      'Vercel-CDN-Cache-Control': 'public, s-maxage=7200',
    },
  })
}
