import type { GetServerSidePropsContext } from 'next'
import { getBlogFeed } from '@/lib/rss_feed'

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const feed = await getBlogFeed()

  res.setHeader('Content-Type', 'text/xml')
  res.write(feed.rss2())
  res.end()

  return {
    props: {},
  }
}

export default function Rss2Feed() {
  // getServerSideProps will do the heavy lifting
}
