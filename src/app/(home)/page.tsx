import { DashedLine } from '@/components/dashed-line'
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
    models = await fetchAiModels(10, 0)
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
    50.37, // lowPrice - starting at $50.37/month for Confidential VM
    12000, // highPrice - up to ~$12,000/month for GPU TEE H200
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
        <div className="relative flex items-center justify-center max-w-7xl mx-auto mt-12">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm leading-5 font-medium tracking-wide">
            Build AI People Can Trust.
          </span>
        </div>
        <ConfidentialAI models={models} />
        <PrivateCloudCompute />
        <ProvenAtScale />
        <SuccessStories />

        <FAQ />
        <FinalCTA />
      </div>
    </>
  )
}
