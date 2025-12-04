import type { Metadata } from 'next'
import { Suspense } from 'react'

import TrustClient from './trust-client'

export const metadata: Metadata = {
  title: 'Trust Center',
  description:
    "Explore Phala's security compliance certifications, controls, and data processing practices. Download HIPAA and SOC 2 Type I reports, review our security controls, and understand our subprocessor relationships.",
  keywords: [
    'security compliance',
    'HIPAA compliance',
    'SOC 2 Type I',
    'data protection',
    'security controls',
    'subprocessors',
    'trust center',
    'confidential computing security',
  ],
  openGraph: {
    title: 'Trust Center | Phala',
    description:
      'Transparency is at the core of our security commitment. Explore our compliance certifications, security controls, and data processing practices.',
    type: 'website',
  },
}

export default function TrustPage() {
  return (
    <Suspense fallback={null}>
      <TrustClient />
    </Suspense>
  )
}
