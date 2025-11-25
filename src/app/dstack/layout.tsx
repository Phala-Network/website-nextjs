import { DstackFooter } from '@/components/dstack/footer'
import { DstackNavbar } from '@/components/dstack/navbar'
import { isDstackDomain } from '@/lib/dstack-domain'

export default async function DstackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isStandalone = await isDstackDomain()

  if (isStandalone) {
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
