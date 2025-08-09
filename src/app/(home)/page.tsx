import CreamContainer from '@/components/cream-container'
import ConfidentialAIModelsSection from './ConfidentialAIModelsSection'
import FAQ from './faq'
import FinalCTA from './final-cta'
import GPUComparisonSection from './GPUComparisonSection'
import Hero from './hero'
import Logos from './logos'
import PrivateCloudComputeSection from './PrivateCloudComputeSection'
import ProvenAtScaleSection from './ProvenAtScaleSection'
import SuccessStoriesSection from './success-stories'
import TrustSteps from './trust-steps'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Hero />
      <TrustSteps />
      <Logos />
      <ConfidentialAIModelsSection />
      <GPUComparisonSection />
      <PrivateCloudComputeSection />
      <ProvenAtScaleSection />
      <SuccessStoriesSection />
      <CreamContainer variant="bottom" className="w-full">
        <FAQ />
        <FinalCTA />
      </CreamContainer>
    </div>
  )
}
