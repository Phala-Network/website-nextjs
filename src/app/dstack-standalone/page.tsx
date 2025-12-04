import CreamContainer from '@/components/cream-container'
import { getGitHubStars } from '@/lib/github-stars'
import AuditReport from '../(main)/dstack/audit-report'
import { Compare3 as Compare } from '../(main)/dstack/compare'
import { Cta3 as Cta } from '../(main)/dstack/cta'
import DstackFAQ from '../(main)/dstack/faq'
import Features from '../(main)/dstack/features'
import { Hero24 as Hero } from '../(main)/dstack/hero'
import { Feature102 as Launch } from '../(main)/dstack/launch'
import TrustCenter from '../(main)/dstack/trust-center'

export const revalidate = 3600 // Cache for 1 hour

export default async function DstackStandalonePage() {
  const starCount = await getGitHubStars()

  return (
    <>
      <CreamContainer className="pt-20 -mt-20">
        <Hero starCount={starCount} isStandalone />
      </CreamContainer>
      <Features />
      <Launch />
      <TrustCenter />
      <AuditReport />
      <Compare />
      <DstackFAQ />
      <Cta isStandalone />
    </>
  )
}
