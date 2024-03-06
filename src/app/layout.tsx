import Script from 'next/script'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ScrollToTop from '@/components/ScrollToTop'

import 'swiper/css'
import 'swiper/css/free-mode'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? (
          <Script async src={`/stats/script.js`} data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}></Script>
        ) : null}
        {children}
        <SiteNav />
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  )
}
