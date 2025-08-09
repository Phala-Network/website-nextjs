import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

import Footer from '@/components/footer'
import Nav from '@/components/nav'
import ScrollToTop from '@/components/ScrollToTop'
import fontVariables from '@/lib/fonts'

import './globals.css'

export const viewport: Viewport = {
  themeColor: 'rgba(232, 233, 234, 1)',
}

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
    'Web3',
    'Verifiable Compute',
    'Phala Network',
  ],
  twitter: {
    site: '@PhalaNetwork',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontVariables}>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      <body>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {children}
        <Nav />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
