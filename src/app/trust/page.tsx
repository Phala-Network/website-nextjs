import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Badge } from '@/components/ui/badge'
import TrustTabs from './trust-tabs'

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
    <main className="min-h-screen">
      {/* Hero Section - Server Rendered */}
      <section className="border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <Badge className="mb-4">Trust Center</Badge>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Security & Compliance
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Transparency is at the core of our security commitment. Explore our compliance
              certifications, security controls, and data processing practices.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section - Client Rendered with Suspense */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <Suspense fallback={null}>
          <TrustTabs />
        </Suspense>
      </section>
    </main>
  )
}
