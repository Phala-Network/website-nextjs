import { Metadata } from 'next'
import HeroSection from "./_components/HeroSection";
import NavigationMenu from "./_components/NavigationMenu";
import TrustedBySection from "./_components/TrustedBySection";
import OnlyAITrustLayerSection from "./_components/OnlyAITrustLayerSection";
import SolutionsSection from "./_components/SolutionsSection";
import IndustryTrustSection from "./_components/IndustryTrustSection";
import TrustCycleSection from "./_components/TrustCycleSection";
import './page.css'

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
      <NavigationMenu />
      <HeroSection />
      <TrustCycleSection />
      <TrustedBySection />
      <OnlyAITrustLayerSection />
      <SolutionsSection />
      <IndustryTrustSection />
    </div>
  );
}
