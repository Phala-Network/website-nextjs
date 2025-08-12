import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import Script from 'next/script'

import Footer from '@/components/footer'
import Nav from '@/components/nav'
import ScrollToTop from '@/components/ScrollToTop'
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
    'Confidential AI',
    'TEE',
    'GPU TEE',
    'Confidential Computing',
    'Verifiable Compute',
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
      {env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
      )}
      <body>
        {env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <div className="pt-16">
          {children}
          <Footer />
        </div>
        <Nav />
        <ScrollToTop />
      </body>
    </html>
  )
}
