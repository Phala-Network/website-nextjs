import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Open_Sans } from 'next/font/google'
import Script from 'next/script'

import Footer from '@/components/footer'
import Nav from '@/components/nav'
import ScrollToTop from '@/components/ScrollToTop'
import { cn } from '@/lib/utils'

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

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // if (process.env.NODE_ENV === 'production') {
  //   notFound()
  // }

  return (
    <html
      lang="en"
      className={cn(inter.variable, montserrat.variable, openSans.variable)}
    >
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
