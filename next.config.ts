/** biome-ignore-all lint/style/noNonNullAssertion: for env variables */
import createMDX from '@next/mdx'
import { withPostHogConfig } from '@posthog/nextjs-config'
import type { NextConfig } from 'next'
import remarkGfm from 'remark-gfm'

import redirects from './redirects'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: false,
  redirects,
  async rewrites() {
    return {
      // beforeFiles rewrites are checked before pages/public files
      // which allows overriding page matching
      beforeFiles: [
        // dstack.org: rewrite root to /dstack page
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: '(.*\\.)?dstack\\.org',
            },
          ],
          destination: '/dstack',
        },
        // dstack.org: any other path should 404 (rewrite to non-existent page)
        // Exclude: _next (assets), favicon, dstack (page + assets), api, home (logos), partnerships (logos)
        {
          source: '/:path((?!_next|favicon|dstack|api|home|partnerships).*)',
          has: [
            {
              type: 'host',
              value: '(.*\\.)?dstack\\.org',
            },
          ],
          destination: '/404',
        },
      ],
      afterFiles: [
        // PostHog proxy rewrites
        {
          source: '/relay-ph/static/:path*',
          destination: 'https://us-assets.i.posthog.com/static/:path*',
        },
        {
          source: '/relay-ph/:path*',
          destination: 'https://us.i.posthog.com/:path*',
        },
        {
          source: '/relay-ph/flags',
          destination: 'https://us.i.posthog.com/flags',
        },
      ],
      fallback: [],
    }
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
})

export default withPostHogConfig(withMDX(nextConfig), {
  personalApiKey: process.env.POSTHOG_API_KEY || '',
  envId: process.env.POSTHOG_ENV_ID || '',
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  sourcemaps: {
    enabled:
      process.env.VERCEL_ENV === 'production' && !!process.env.POSTHOG_API_KEY,
  },
})
