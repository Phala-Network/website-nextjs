import React from 'react'

import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ScrollToTop from '@/components/ScrollToTop'

import 'swiper/css'
import '@/app/globals.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
      <ScrollToTop />
    </>
  )
}

