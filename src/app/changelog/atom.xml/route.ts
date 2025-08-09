import { getChangelogFeed } from '@/lib/rss_feed'

export async function GET() {
  const feed = await getChangelogFeed()

  return new Response(feed.atom1(), {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 's-maxage=1800',
    },
  })
}