import { getBlogFeed } from '@/lib/rss_feed'

export default async function Page() {
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
