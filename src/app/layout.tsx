import Script from 'next/script'
import Link from 'next/link'

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
        <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-50">
          <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
            <p className="text-sm leading-6 text-white">
              <Link href="/posts/phala-network-at-ethdenver-2024">
                <strong className="font-semibold">ETHdenver 2024</strong>
                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                Join us at ETHdenver from Feb 23rd to Mar 3rd - Learn More about our schedule &nbsp;<span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
