'use client'

import CreamContainer from '@/components/cream-container'
import { StandaloneMetadata } from '@/components/dstack/standalone-metadata'
import { useIsDstack } from '@/hooks/use-is-dstack'
import AuditReport from './audit-report'
import { Compare3 as Compare } from './compare'
import { Cta3 as Cta } from './cta'
import DstackFAQ from './faq'
import Features from './features'
import { Hero24 as Hero } from './hero'
import { Feature102 as Launch } from './launch'
import TrustCenter from './trust-center'

interface DstackClientProps {
  starCount: number
}

export function DstackClient({ starCount }: DstackClientProps) {
  const isStandalone = useIsDstack()

  return (
    <>
      <StandaloneMetadata
        title="dstack - Open Source Confidential Computing"
        description="Deploy secure applications with hardware-guaranteed privacy using TEE technology. Built for confidential AI, private cloud compute, and secure data processing."
      />
      <CreamContainer className="pt-20 -mt-20">
        <Hero starCount={starCount} isStandalone={isStandalone} />
      </CreamContainer>
      <Features />
      <Launch />
      <TrustCenter />
      <AuditReport />
      <Compare />
      <DstackFAQ />
      <Cta isStandalone={isStandalone} />
    </>
  )
}
