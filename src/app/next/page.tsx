import ConfidentialAIModelsSection from './_components/ConfidentialAIModelsSection'
import FAQ from './_components/faq'
import FinalCTA from './_components/final-cta'
import GPUComparisonSection from './_components/GPUComparisonSection'
import Hero from './_components/hero'
import Logos from './_components/logos'
import PrivateCloudComputeSection from './_components/PrivateCloudComputeSection'
import ProvenAtScaleSection from './_components/ProvenAtScaleSection'
import RealWorldUseCasesSection from './_components/RealWorldSuccessStoriesSection'
import TrustSteps from './_components/trust-steps'

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
