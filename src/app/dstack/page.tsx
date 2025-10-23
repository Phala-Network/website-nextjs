import type { Metadata } from 'next'

import CreamContainer from '@/components/cream-container'
import { getGitHubStars } from '@/lib/github-stars'
import { makeDescription, makeTitle, productSchema } from '@/lib/seo'
import AuditReport from './audit-report'
import { Compare3 as Compare } from './compare'
import { Cta3 as Cta } from './cta'
import DstackFAQ from './faq'
import Features from './features'
import { Hero24 as Hero } from './hero'
import { Feature102 as Launch } from './launch'
// import { Logos9 as Logos } from './logos'
import TrustCenter from './trust-center'

// Keywords from CSV row 8: TEE open source, confidential VM, open source private cloud, TDX sdk, TDX docker
export const metadata: Metadata = {
  title: makeTitle('dstack - Open Source Confidential Computing Platform'),
  description: makeDescription(
    'Deploy secure applications with hardware-guaranteed privacy using open source TEE technology. Confidential VM orchestration with Intel TDX and AMD SEV support.',
  ),
  keywords: [
    'TEE open source',
    'confidential VM',
    'open source private cloud',
    'TDX sdk',
    'TDX docker',
  ],
}

const DstackPage = async () => {
  const starCount = await getGitHubStars()

  // SEO: JSON-LD Product Schema
  const productJsonLd = productSchema(
    'dstack - Open Source Confidential Computing',
    'Open source confidential computing platform for deploying secure applications with hardware-guaranteed privacy. TEE orchestration with Intel TDX and AMD SEV support.',
    'https://phala.com/dstack',
  )

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <CreamContainer className="pt-20 -mt-20">
        <Hero starCount={starCount} />
      </CreamContainer>
      <Features />
      <Launch />
      <TrustCenter />
      <AuditReport />
      {/* <Logos /> */}

      <Compare />
      <DstackFAQ />
      <Cta />
    </>
  )
}

export default DstackPage
