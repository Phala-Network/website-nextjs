'use client'

import Footer from '@/components/footer'
import { PhalaNavbar4 } from '@/components/navbar4-phala'
import { useIsDstack } from '@/hooks/use-is-dstack'

interface LayoutWrapperProps {
  children: React.ReactNode
}

/**
 * Client-side wrapper that conditionally renders navbar and footer
 * based on whether the domain is dstack.org
 * This prevents using headers() in server components which would make all pages dynamic
 */
export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const isDstack = useIsDstack()

  return (
    <>
      {!isDstack && <PhalaNavbar4 />}
      <div className={isDstack ? '' : 'pt-20'}>
        {children}
        {!isDstack && <Footer />}
      </div>
    </>
  )
}
