import CreamContainer from '@/components/cream-container'
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
  return (
    <>
      <CreamContainer className="pt-20 -mt-20">
        <Hero starCount={starCount} />
      </CreamContainer>
      <Features />
      <Launch />
      <TrustCenter />
      <AuditReport />
      <Compare />
      <DstackFAQ />
      <Cta />
    </>
  )
}
