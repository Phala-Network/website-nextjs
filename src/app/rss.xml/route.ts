import { getBlogFeed } from '@/lib/rss_feed'

export const revalidate = 7200

export async function GET() {
  const feed = await getBlogFeed()
  return new Response(
    feed.rss2(),
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=60',
        'CDN-Cache-Control': 'public, s-maxage=600',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=7200',
      }
    }
  )
}
