import Footer from '@/components/footer'
import { PhalaNavbar4 } from '@/components/navbar4-phala'

interface LayoutWrapperProps {
  children: React.ReactNode
}

/**
 * Layout wrapper for phala.com pages with navbar and footer
 */
export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <PhalaNavbar4 />
      <div className="pt-20">
        {children}
        <Footer />
      </div>
    </>
  )
}
