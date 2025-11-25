import type { Metadata } from 'next'

import Footer from '@/components/footer'
import { PhalaNavbar4 } from '@/components/navbar4-phala'
import { env } from '@/env'
import { isDstackDomain } from '@/lib/dstack-domain'
import fontVariables from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Phala',
    default: 'Phala: The New Cloud for Confidential AI',
  },
  description:
    'Phala is the new cloud for confidential AI helping build AI people can trust.',
  // Keywords from CSV row 2: confidential compute, confidential AI, private AI cloud, TEE open source, safe AI
  keywords: [
    'confidential compute',
    'confidential AI',
    'private AI cloud',
    'TEE open source',
    'safe AI',
  ],
  twitter: {
    site: '@PhalaNetwork',
    card: 'summary_large_image',
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          url: `https://${env.VERCEL_PROJECT_PRODUCTION_URL}/rss.xml`,
          title: 'Phala News',
        },
      ],
      'application/atom+xml': [
        {
          url: `https://${env.VERCEL_PROJECT_PRODUCTION_URL}/atom.xml`,
          title: 'Phala News',
        },
      ],
    },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isStandaloneDstack = await isDstackDomain()

  return (
    <html lang="en" className={fontVariables}>
      <body>
        {!isStandaloneDstack && <PhalaNavbar4 />}
        <div className={isStandaloneDstack ? '' : 'pt-20'}>
          {children}
          {!isStandaloneDstack && <Footer />}
        </div>
      </body>
    </html>
  )
}
