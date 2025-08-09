import ConfidentialAIModelsSection from './ConfidentialAIModelsSection'
import FAQ from './faq'
import FinalCTA from './final-cta'
import GPUComparisonSection from './GPUComparisonSection'
import Hero from './hero'
import Logos from './logos'
import PrivateCloudComputeSection from './PrivateCloudComputeSection'
import ProvenAtScaleSection from './ProvenAtScaleSection'
import RealWorldUseCasesSection from './RealWorldSuccessStoriesSection'
import TrustSteps from './trust-steps'

// export const metadata: Metadata = {
//   alternates: {
//     canonical: 'https://phala.network',
//     types: {
//       'application/rss+xml': [
//         { url: 'https://phala.network/rss.xml', title: 'Phala News' },
//       ],
//       'application/atom+xml': [
//         { url: 'https://phala.network/atom.xml', title: 'Phala News' },
//       ],
//     },
//   },
// }

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
      <RealWorldUseCasesSection />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
