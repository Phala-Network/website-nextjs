import { getBlogFeed } from '@/lib/rss_feed'

export default async function Page() {
  const feed = await getBlogFeed()
  return feed.rss2()
}
