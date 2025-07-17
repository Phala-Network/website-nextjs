import { type Metadata, type Viewport } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const viewport: Viewport = {
  themeColor: 'rgba(232, 233, 234, 1)',
}

export const metadata: Metadata = {
  title: "VRF by Phala Network",
}

export default function VRFPage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16">
    </div>
  )
}
