import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

import redirects from './redirects'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  redirects,
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
