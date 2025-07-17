import Script from 'next/script'
import type React from 'react'

import ScrollToTop from '@/components/ScrollToTop'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'
import fontVariables from '@/lib/fonts'

import 'swiper/css'
import '@/app/globals.css'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={fontVariables}>
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
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
