import type { Metadata } from 'next'

import CreamContainer from '@/components/cream-container'
import { getGitHubStars } from '@/lib/github-stars'
import AuditReport from './audit-report'
import { Compare3 as Compare } from './compare'
import { Cta3 as Cta } from './cta'
import Features from './features'
import { Hero24 as Hero } from './hero'
import { Feature102 as Launch } from './launch'
// import { Logos9 as Logos } from './logos'
import TrustCenter from './trust-center'

export const metadata: Metadata = {
  title: 'Dstack',
  description:
    'Deploy secure applications with hardware-guaranteed privacy using TEE technology. Built for confidential AI, private cloud compute, and secure data processing.',
}

const DstackPage = async () => {
  const starCount = await getGitHubStars()

  return (
    <>
      <CreamContainer className="pt-20 -mt-20">
        <Hero starCount={starCount} />
      </CreamContainer>
      <Features />
      <Launch />
      <TrustCenter />
      <AuditReport />
      {/* <Logos /> */}

      <Compare />
      <Cta />
    </>
  )
}

export default DstackPage
