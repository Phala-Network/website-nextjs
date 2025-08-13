import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

import redirects from './redirects'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  redirects,
  experimental: {
    useCache: true,
  },
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/flags',
        destination: 'https://us.i.posthog.com/flags',
      },
    ]
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/, 
})

export default withMDX(nextConfig)
