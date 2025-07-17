import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

import ScrollToTop from '@/components/ScrollToTop'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'
import fontVariables from '@/lib/fonts'

import 'swiper/css'
import 'swiper/css/free-mode'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontVariables}>
      {process.env.NEXT_PUBLIC_GTM_ID ? (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      ) : null}
      <body>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
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
        ) : null}
        {children}
        {/* <SiteNav />
        <SiteFooter /> */}
        <ScrollToTop />
      </body>
    </html>
  )
}
