import type { Metadata } from 'next'

import { DstackFooter } from '@/components/dstack/footer'
import { DstackNavbar } from '@/components/dstack/navbar'

export const metadata: Metadata = {
  title: {
    template: '%s | dstack',
    default: 'dstack - Open Source Confidential Computing',
  },
  description:
    'Deploy secure applications with hardware-guaranteed privacy using TEE technology. Built for confidential AI, private cloud compute, and secure data processing.',
  keywords: [
    'TEE open source',
    'confidential VM',
    'open source private cloud',
    'TDX sdk',
    'TDX docker',
    'confidential computing',
    'trusted execution environment',
  ],
  icons: {
    icon: '/dstack-icon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'dstack',
    title: 'dstack - Open Source Confidential Computing',
    description:
      'Deploy secure applications with hardware-guaranteed privacy using TEE technology.',
    url: 'https://dstack.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dstack - Open Source Confidential Computing',
    description:
      'Deploy secure applications with hardware-guaranteed privacy using TEE technology.',
  },
  metadataBase: new URL('https://dstack.org'),
}

export default function DstackStandaloneLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
