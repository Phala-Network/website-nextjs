import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import Script from 'next/script'

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
      {env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
      )}
      {env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
      {/* Mava Widget */}
      {/** biome-ignore lint/correctness/useUniqueElementIds: Mava Widget */}
      <Script
        defer
        src="https://widget.mava.app"
        id="MavaWebChat"
        widget-version="v2"
        enable-sdk="true"
        data-token="b8c2c9f39e3203bdedc5b5cb6c3039f24b264eb838294d0c2c8bfac576c49668"
      />
    </html>
  )
}
