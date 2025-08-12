import type { MetadataRoute } from 'next'

import { env } from '@/env'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `https://${env.VERCEL_PROJECT_PRODUCTION_URL}/sitemap.xml`,
  }
}
