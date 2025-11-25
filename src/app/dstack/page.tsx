import type { Metadata } from 'next'

import CreamContainer from '@/components/cream-container'
import { DSTACK_DOMAIN, isDstackDomain } from '@/lib/dstack-domain'
import { getGitHubStars } from '@/lib/github-stars'
import { makeDescription, productSchema } from '@/lib/seo'
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
export async function generateMetadata(): Promise<Metadata> {
  const isStandalone = await isDstackDomain()

  const title = 'dstack - Open Source Confidential Computing Platform'
  const description = makeDescription(
    'Deploy secure applications with hardware-guaranteed privacy using open source TEE technology. Confidential VM orchestration with Intel TDX and AMD SEV support.',
  )

  if (isStandalone) {
    return {
      title: {
        template: '%s | dstack',
        default: 'Open Source Confidential Computing Platform',
      },
      description,
      keywords: [
        'TEE open source',
        'confidential VM',
        'open source private cloud',
        'TDX sdk',
        'TDX docker',
        'dstack',
        'confidential computing',
      ],
      metadataBase: new URL(`https://${DSTACK_DOMAIN}`),
      icons: {
        icon: [{ url: '/dstack-icon.svg', type: 'image/svg+xml' }],
        apple: [{ url: '/dstack-icon.svg', type: 'image/svg+xml' }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
      openGraph: {
        title,
        description,
        url: `https://${DSTACK_DOMAIN}`,
        siteName: 'dstack',
        type: 'website',
      },
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: `https://${DSTACK_DOMAIN}`,
      },
    }
  }

  return {
    title: `${title} | Phala`,
    description,
    keywords: [
      'TEE open source',
      'confidential VM',
      'open source private cloud',
      'TDX sdk',
      'TDX docker',
    ],
  }
}

const DstackPage = async () => {
  const starCount = await getGitHubStars()
  const isStandalone = await isDstackDomain()

  // SEO: JSON-LD Product Schema - use dstack.org URL when standalone
  const productUrl = isStandalone
    ? `https://${DSTACK_DOMAIN}`
    : 'https://phala.com/dstack'

  const productJsonLd = isStandalone
    ? {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'dstack',
        description:
          'Open source confidential computing platform for deploying secure applications with hardware-guaranteed privacy. TEE orchestration with Intel TDX and AMD SEV support.',
        url: productUrl,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Linux',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        license: 'https://www.apache.org/licenses/LICENSE-2.0',
      }
    : productSchema(
        'dstack - Open Source Confidential Computing',
        'Open source confidential computing platform for deploying secure applications with hardware-guaranteed privacy. TEE orchestration with Intel TDX and AMD SEV support.',
        productUrl,
      )

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <CreamContainer className="pt-20 -mt-20">
        <Hero starCount={starCount} isStandalone={isStandalone} />
      </CreamContainer>
      <Features />
      <Launch />
      <TrustCenter />
      <AuditReport />
      {/* <Logos /> */}

      <Compare />
      <DstackFAQ />
      <Cta isStandalone={isStandalone} />
    </>
  )
}

export default DstackPage
