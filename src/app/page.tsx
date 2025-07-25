import { Metadata } from 'next'
import HeroSection from '../components/home/HeroSection';
import TrustCycleSection from '../components/home/TrustCycleSection';
import TrustedUsersSection from '../components/home/TrustedUsersSection';
import ConfidentialAIModelsSection from '../components/home/ConfidentialAIModelsSection';
import GPUComparisonSection from '../components/home/GPUComparisonSection';
import PrivateCloudComputeSection from '../components/home/PrivateCloudComputeSection';
import EasyBuildSection from '../components/home/EasyBuildSection';
import ProvenAtScaleSection from '../components/home/ProvenAtScaleSection';
import SuccessStoriesSection from '../components/home/SuccessStoriesSection';
import FAQSection from '../components/home/FAQSection';
import FinalCTASection from '../components/home/FinalCTASection';

export const metadata: Metadata = {
  themeColor: 'rgba(232, 233, 234, 1)',
  title: "Phala Network - Verifiable Computation for Web3",
  description: "Phala Network make smart contracts even smarter by providing decentralized compute.",
  keywords: [
    "Phala Network",
    "Phala",
    "Phat Contracts",
    "Web3",
    "Web3 Builders Stack",
    "Off-chain computation",
    "Smart Contract",
    "Verifiable Compute",
    "Connectivity",
    "Oracle",
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://phala.network/',
    title: "Phala Network - Verifiable Computation for Web3",
    description: "Phala Network make smart contracts even smarter by providing decentralized compute.",
    images: [
      {
        url: 'https://phala.network/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Phala Network - Verifiable Computation for Web3",
      },
    ],
  },
  twitter: {
    site: '@PhalaNetwork',
    card: 'summary_large_image',
    title: "Phala Network - Verifiable Computation for Web3",
    description: "Phala Network make smart contracts even smarter by providing decentralized compute.",
    images: ['https://phala.network/og-image.jpg'],
  },
  alternates: {
    canonical: "https://phala.network",
    types: {
      'application/rss+xml': [
        { url: 'https://phala.network/rss.xml', title: 'Phala News' },
      ],
      'application/atom+xml': [
        { url: 'https://phala.network/atom.xml', title: 'Phala News' },
      ],
    },
  }
}

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#f9f9f7] flex flex-col items-center">
      <HeroSection />
      <TrustCycleSection />
      <TrustedUsersSection />
      <ConfidentialAIModelsSection />
      <GPUComparisonSection />
      <PrivateCloudComputeSection />
      <EasyBuildSection />
      <ProvenAtScaleSection />
      <SuccessStoriesSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
