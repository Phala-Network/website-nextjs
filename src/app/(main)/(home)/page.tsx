import { Compliance1 } from '@/components/compliance1'
import FinalCTA from '@/components/final-cta'
import { fetchAiModels, type Model } from '@/lib/ai-models'
import { organizationSchema, productSchema } from '@/lib/seo'
import ConfidentialAI from './confidential-ai'
import FAQ from './faq'
import Hero from './hero'
import Logos from './logos'
import PrivateCloudCompute from './private-cloud-compute'
import ProvenAtScale from './proven-at-scale'
import SuccessStories from './success-stories'
import TrustSteps from './trust-steps'

export const revalidate = 7200

export default async function HomePage() {
  // Fetch models for the ConfidentialAI section
  let models: Model[] = []
  try {
    models = await fetchAiModels(100, 0)
  } catch (error) {
    console.error('Failed to fetch models:', error)
  }

  // SEO: JSON-LD Structured Data
  const organizationJsonLd = organizationSchema()
  const productJsonLd = productSchema(
    'Phala Cloud - Confidential Computing Platform',
    'Confidential computing platform for private AI and secure cloud infrastructure with GPU TEE support. Deploy confidential AI models, private agents, and encrypted workloads.',
    'https://phala.com',
    'https://phala.com/opengraph-image.png',
    50.37, // price - starting at $50.37/month for Confidential VM
  )

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="w-full min-h-screen bg-background">
        <Hero />
        <TrustSteps />
        <Logos />
        <ConfidentialAI models={models} />
        <PrivateCloudCompute />
        <ProvenAtScale />
        <SuccessStories />
        <Compliance1 />
        <FAQ />
        <FinalCTA />
      </div>
    </>
  )
}
