import { DashedLine } from '@/components/dashed-line'
import FinalCTA from '@/components/final-cta'
import ConfidentialAI from './confidential-ai'
import FAQ from './faq'
import Hero from './hero'
import Logos from './logos'
import PrivateCloudCompute from './private-cloud-compute'
import ProvenAtScale from './proven-at-scale'
import SuccessStories from './success-stories'
import TrustSteps from './trust-steps'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-muted">
      <Hero />
      <TrustSteps />
      <Logos />
      <div className="relative flex items-center justify-center max-w-7xl mx-auto mt-12">
        <DashedLine className="text-muted-foreground" />
        <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide">
          Build AI People Can Trust.
        </span>
      </div>
      <ConfidentialAI />
      <PrivateCloudCompute />
      <ProvenAtScale />
      <SuccessStories />

      <div className="bg-background">
        <FAQ />
        <FinalCTA />
      </div>
    </div>
  )
}
