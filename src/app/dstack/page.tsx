import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import CreamContainer from '@/components/cream-container'
import { env } from '@/env'
import { getGitHubStars } from '@/lib/github-stars'
import AuditReport from './audit-report'
import { Compare3 as Compare } from './compare'
import { Cta3 as Cta } from './cta'
import { Hero24 as Hero } from './hero'
import { Feature102 as Launch } from './launch'
// import { Logos9 as Logos } from './logos'
import TrustCenter from './trust-center'

export const metadata: Metadata = {
  title: 'Dstack',
}

const DstackPage = async () => {
  if (env.VERCEL_ENV !== 'preview' && env.NODE_ENV !== 'development') {
    notFound()
  }

  const starCount = await getGitHubStars()

  return (
    <>
      <CreamContainer className="via-muted to-muted/80 pt-32 -mt-16">
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
