import CreamContainer from '@/components/cream-container'
import { DashedLine } from '@/components/dashed-line'
import ConfidentialAI from './confidential-ai'
import FAQ from './faq'
import FinalCTA from './final-cta'
import Hero from './hero'
import Logos from './logos'
import PrivateCloudCompute from './private-cloud-compute'
import ProvenAtScale from './proven-at-scale'
import SuccessStories from './success-stories'
import TrustSteps from './trust-steps'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <TrustSteps />
      <Logos />
      <div className="relative flex items-center justify-center max-w-5xl mx-auto mt-12">
        <DashedLine className="text-muted-foreground" />
        <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide">
          Build AI People Can Trust.
        </span>
      </div>
      <ConfidentialAI />
      <PrivateCloudCompute />
      <ProvenAtScale />
      <SuccessStories />
      <CreamContainer variant="bottom" className="w-full">
        <FAQ />
        <FinalCTA />
      </CreamContainer>
    </div>
  )
}
