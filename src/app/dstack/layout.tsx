import { DstackLayoutWrapper } from '@/components/dstack/layout-wrapper'

export default function DstackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DstackLayoutWrapper>{children}</DstackLayoutWrapper>
}
