import type { Metadata } from 'next'

import FinalCTA from '@/components/final-cta'
import SolutionsCTA from '@/components/solutions-cta'
import { fetchAiModels } from '@/lib/ai-models'
import { makeDescription, makeTitle, productSchema } from '@/lib/seo'
import Benefits from './benefits'
import Faq from './faq'
import ForEnterprises from './for-enterprises'
import Hero from './hero'
import Integrate from './integrate'
import ModelsList from './models-list'
import ModelsMarquee from './models-marquee'

export const revalidate = 7200

// Keywords from CSV row 6: confidential AI inferernce, private AI models, security LLM, on prem AI, compliance AI
export const metadata: Metadata = {
  title: makeTitle('Confidential AI Models - Private LLM Inference'),
  description: makeDescription(
    'Access frontier AI models with proven privacy. Hardware-secured LLM inference with TEE protection. Deploy confidential AI models on-prem or cloud with compliance guarantees.',
  ),
  keywords: [
    'confidential AI inferernce',
    'private AI models',
    'security LLM',
    'on prem AI',
    'compliance AI',
  ],
}

export default async function ConfidentialAiModelsPage() {
  const models = await fetchAiModels(100, 0)

  // SEO: JSON-LD Product Schema
  const productJsonLd = productSchema(
    'Confidential AI Models',
    'Access frontier AI models with proven privacy. Hardware-secured LLM inference with TEE protection, remote attestation, and compliance guarantees for enterprise deployments.',
    'https://phala.com/confidential-ai-models',
  )

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="w-full bg-card">
        <div className="mx-auto max-w-(--breakpoint-2xl)">
          <Hero />
          <ModelsMarquee models={models} />
          <Benefits />
          <Integrate />
          <ModelsList models={models.slice(0, 12)} />
          <SolutionsCTA />
          <ForEnterprises />
          <Faq />
          <FinalCTA />
        </div>
      </div>
    </>
  )
}
