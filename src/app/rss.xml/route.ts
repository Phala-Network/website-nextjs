import { getBlogFeed } from '@/lib/rss_feed'

export async function GET() {
  const feed = await getBlogFeed()
  return new Response(
    feed.rss2(),
    {
      headers: {
        'Content-Type': 'application/xml',
      }
    }
  )
}
