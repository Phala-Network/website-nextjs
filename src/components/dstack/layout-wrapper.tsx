'use client'

import { DstackFooter } from '@/components/dstack/footer'
import { DstackNavbar } from '@/components/dstack/navbar'
import { useIsDstack } from '@/hooks/use-is-dstack'

interface DstackLayoutWrapperProps {
  children: React.ReactNode
}

/**
 * Client-side wrapper for dstack pages that conditionally renders
 * dstack navbar/footer when accessed from dstack.org domain
 */
export function DstackLayoutWrapper({ children }: DstackLayoutWrapperProps) {
  const isDstack = useIsDstack()

  if (isDstack) {
    return (
      <>
        <DstackNavbar />
        <div className="pt-20">
          {children}
          <DstackFooter />
        </div>
      </>
    )
  }

  // For phala.com/dstack, the root layout already provides nav and footer
  return <>{children}</>
}
