import { GoogleTagManager } from '@next/third-parties/google'
import { Inter, Montserrat, Open_Sans } from 'next/font/google'
import Script from 'next/script'

import ScrollToTop from '@/components/ScrollToTop'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'
import { cn } from '@/lib/utils'

import 'swiper/css'
import 'swiper/css/free-mode'
import './globals.css'

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
  return (
    <html
      lang="en"
      className={cn(inter.variable, montserrat.variable, openSans.variable)}
    >
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
        <SiteNav />
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  )
}
