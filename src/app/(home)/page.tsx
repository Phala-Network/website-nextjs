import { DashedLine } from '@/components/dashed-line'
import FinalCTA from '@/components/final-cta'
import { fetchAiModels, type Model } from '@/lib/ai-models'
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

  return (
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
  )
}
