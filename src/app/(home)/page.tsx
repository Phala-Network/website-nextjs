import CreamContainer from '@/components/cream-container'
import ConfidentialAI from './confidential-ai'
import FAQ from './faq'
import FinalCTA from './final-cta'
import Hero from './hero'
import Logos from './logos'
import PrivateCloudComputeSection from './PrivateCloudComputeSection'
import ProvenAtScale from './proven-at-scale'
import SuccessStories from './success-stories'
import TrustSteps from './trust-steps'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <TrustSteps />
      <Logos />
      <ConfidentialAI />
      <PrivateCloudComputeSection />
      <ProvenAtScale />
      <SuccessStories />
      <CreamContainer variant="bottom" className="w-full">
        <FAQ />
        <FinalCTA />
      </CreamContainer>
    </div>
  )
}
