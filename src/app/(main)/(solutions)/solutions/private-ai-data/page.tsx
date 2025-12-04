import type { Metadata } from 'next'
import Script from 'next/script'

import SolutionsCTA from '@/components/solutions-cta'
import { Casestudies3 } from '@/components/solutions/casestudies3'
import { Codeexample1 } from '@/components/solutions/codeexample1'
import { Codeexample5 } from '@/components/solutions/codeexample5'
import { Compliance5 } from '@/components/solutions/compliance5'
import { Cta4 } from '@/components/solutions/cta4'
import { Faq14 } from '@/components/solutions/faq14'
import { Feature206 } from '@/components/solutions/feature206'
import { Feature280 } from '@/components/solutions/feature280'
import { Feature282 } from '@/components/solutions/feature282'
import { Feature284 } from '@/components/solutions/feature284'
import { Hero219 } from '@/components/solutions/hero219'
import { privateAIDataContent } from './content'

export const metadata: Metadata = {
  title: privateAIDataContent.seo.title,
  description: privateAIDataContent.seo.description,
  keywords: privateAIDataContent.seo.keywords,
  openGraph: {
    title: privateAIDataContent.seo.title,
    description: privateAIDataContent.seo.description,
    type: 'website',
    url: 'https://phala.com/solutions/private-ai-data',
  },
  twitter: {
    card: 'summary_large_image',
    title: privateAIDataContent.seo.title,
    description: privateAIDataContent.seo.description,
  },
}

function generateFAQSchema() {
  const allFAQs = privateAIDataContent.faqs.flatMap((cat) => cat.items)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export default function PrivateAIDataPage() {
  const content = privateAIDataContent

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />

      {/* Hero - hero219 */}
      <Hero219 {...content.hero} />

      {/* Why It Matters - feature206 */}
      <Feature206 {...content.why} />

      {/* Encryption Showcase - feature282 */}
      <Feature282 />

      {/* How It Works - feature172 */}
      <Codeexample5 />

      {/* Use Cases - feature284 */}
      <Feature284 useCases={content.useCases} />

      {/* Additional Use Cases - feature280 */}
      <Feature280 />

      {/* Success Stories - casestudies3 */}
      <Casestudies3
        featuredCasestudy={content.stories.featured}
        casestudies={content.stories.additional}
      />

      {/* Dev Experience - codeexample1 */}
      <Codeexample1 {...content.devExp} />

      {/* Proof & Compliance - compliance5 */}
      <Compliance5 />

      {/* FAQs - faq14 */}
      <Faq14 faqItems={content.faqs} />

      {/* Explore Other Solutions */}
      <SolutionsCTA />

      {/* Final CTA - cta4 */}
      <Cta4 {...content.cta} />
    </>
  )
}
