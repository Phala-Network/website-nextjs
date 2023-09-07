import type { GetServerSidePropsContext } from 'next'
import { getChangelogFeed } from '@/lib/rss_feed'

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const feed = await getChangelogFeed()

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 's-maxage=1800')
  res.write(feed.atom1())
  res.end()

  return {
    props: {},
  }
}

export default function AtomFeed() {
  // getServerSideProps will do the heavy lifting
}
