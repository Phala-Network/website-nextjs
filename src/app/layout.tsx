import type { Metadata } from 'next'

import Footer from '@/components/footer'
import Nav from '@/components/nav'
import { env } from '@/env'
import fontVariables from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Phala',
    default: 'Phala: The New Cloud for Confidential AI',
  },
  description:
    'Phala is the new cloud for confidential AI helping build AI people can trust.',
  keywords: [
    'Phala',
    'TEE',
    'Confidential AI',
    'Trusted AI',
    'Confidential VM',
    'GPU TEE',
    'Confidential Computing',
    'Phala Network',
  ],
  twitter: {
    site: '@PhalaNetwork',
    card: 'summary_large_image',
  },
  alternates: {
    canonical: `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <div className="pt-16">
          {children}
          <Footer />
        </div>
        <Nav />
      </body>
    </html>
  )
}
