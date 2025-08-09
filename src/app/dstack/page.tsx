import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import CreamContainer from '@/components/cream-container'
import { getGitHubStars } from '@/lib/github-stars'
import AuditReport from './audit-report'
import { Compare3 as Compare } from './compare'
import { Cta3 as Cta } from './cta'
import { Hero24 as Hero } from './hero'
import { Feature102 as Launch } from './launch'
// import { Logos9 as Logos } from './logos'
import TrustCenter from './trust-center'

export const metadata: Metadata = {
  title: 'Dstack | Phala',
}

const DstackPage = async () => {
  if (process.env.VERCEL_TARGET_ENV !== 'preview') {
    notFound()
  }

  const starCount = await getGitHubStars()

  return (
    <>
      <CreamContainer className="via-muted to-muted/80 pt-32">
        <Hero starCount={starCount} />
        <Launch />
        <TrustCenter />
        <AuditReport />
      </CreamContainer>
      {/* <Logos /> */}
      <CreamContainer variant="bottom">
        <Compare />
        <Cta />
      </CreamContainer>
    </>
  )
}

export default DstackPage
