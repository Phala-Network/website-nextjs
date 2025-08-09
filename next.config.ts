import type { NextConfig } from 'next'

import redirects from './redirects'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  redirects,
}

export default nextConfig
