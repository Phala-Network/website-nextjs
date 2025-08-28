import type { Metadata } from 'next'

import {
  type ComparisonData,
  ComparisonTemplate,
} from '@/components/comparison-template'

export const metadata: Metadata = {
  title: 'Phala Cloud vs GCP Confidential VMs - Open Source Alternative',
  description:
    'Phala Cloud is a decentralized alternative to GCP Confidential VMs. Compare features, GPU TEE support, multi-cloud flexibility, and transparent pricing. Choose open-source confidential computing.',
}

const gcpData: ComparisonData = {
  competitor: {
    name: 'GCP Confidential VMs',
    description: 'Google\'s trusted cloud infrastructure',
  },
  hero: {
    alternativeText: 'GCP Confidential VMs alternative with decentralized trust',
    title: 'Phala Cloud vs GCP Confidential VMs',
    subtitle: 'Decentralized confidential computing meets Google\'s enterprise security',
    bannerImage: '/compare-gcp.png',
  },
  quickTakeaways: [
    'Fully open-source with auditable code',
    'Customer-controlled key management',
    'GPU-TEE support for confidential AI',
    'Real-time on-chain attestation',
    'Zero vendor lock-in',
    'Trust Center with 100% visible Chain of Trust',
    'Fully audited by 3rd party security firms',
  ],
  features: [
    {
      feature: 'Memory Encryption',
      phala: 'good',
      phalaText: 'AMD SEV & Intel TDX',
      competitor: 'good',
      competitorText: 'AMD SEV & Intel TDX',
    },
    {
      feature: 'Ease of Migration',
      phala: 'partial',
      phalaText: 'Container-based',
      competitor: 'good',
      competitorText: 'Lift-and-shift VMs',
    },
    {
      feature: 'Global Availability',
      phala: 'partial',
      phalaText: '1000+ nodes',
      competitor: 'good',
      competitorText: '35+ regions worldwide',
    },
    {
      feature: 'Enterprise Support',
      phala: 'bad',
      phalaText: 'Community support',
      competitor: 'good',
      competitorText: 'Google Cloud Support',
    },
    {
      feature: 'Open Source',
      phala: 'good',
      phalaText: 'Fully auditable',
      competitor: 'bad',
      competitorText: 'Proprietary',
    },
    {
      feature: 'Decentralized Trust',
      phala: 'good',
      phalaText: 'Blockchain-secured',
      competitor: 'bad',
      competitorText: 'Centralized control',
    },
    {
      feature: 'GPU TEE Support',
      phala: 'good',
      phalaText: 'H100/H200 ready',
      competitor: 'partial',
      competitorText: 'A3 VMs without TEE',
    },
    {
      feature: 'Public Verifiability',
      phala: 'good',
      phalaText: 'On-chain attestation',
      competitor: 'partial',
      competitorText: 'API-based attestation',
    },
    {
      feature: 'Compliance Suite',
      phala: 'partial',
      phalaText: 'SOC2 planned',
      competitor: 'good',
      competitorText: 'ISO, HIPAA, PCI-DSS',
    },
    {
      feature: 'Performance Overhead',
      phala: 'good',
      phalaText: '3-5% overhead',
      competitor: 'partial',
      competitorText: '5-10% overhead',
    },
  ],
  sections: {
    whatIs: {
      title: 'What is GCP Confidential Computing?',
      content:
        "Google Cloud Confidential VMs represent Google's mature approach to confidential computing, using AMD SEV and Intel TDX to encrypt VM memory during processing. GCP excels at enterprise features: seamless lift-and-shift migration, comprehensive compliance certifications, and deep integration with Google's ecosystem including BigQuery, Cloud Run, and Vertex AI. With 35+ global regions and Google's infrastructure expertise, it offers unmatched reliability and scale. GCP Confidential VMs are ideal for enterprises needing proven, compliant confidential computing with minimal operational overhead.",
    },
    similar: {
      content: [
        'Both use the same hardware technologies (AMD SEV, Intel TDX) for memory encryption',
        'Both protect sensitive workloads from infrastructure operators',
        'Both support remote attestation for workload verification',
        'Both enable confidential computing for regulated industries',
      ],
    },
    different: {
      content: [
        'Migration Path: GCP Confidential VMs offer zero-code-change VM migration; Phala Cloud requires containerization but offers more flexibility',
        'Trust Model: GCP Confidential VMs rely on Google\'s reputation; Phala Cloud uses blockchain-based verification',
        'AI Capabilities: Phala Cloud specializes in GPU TEE for AI; GCP Confidential VMs focus on traditional enterprise workloads',
        'Pricing: GCP Confidential VMs have premium pricing with enterprise SLAs; Phala Cloud offers competitive community pricing',
        'Innovation Speed: GCP Confidential VMs follow enterprise release cycles; Phala Cloud iterates rapidly with community feedback',
      ],
    },
    whyChoose: {
      title: 'Choose Phala Cloud over GCP Confidential VMs',
      content: [
        'Break free from Google vendor lock-in with multi-cloud deployment flexibility',
        'GPU TEE support for confidential AI workloads with H100/H200 compatibility',
        'Transparent, community-driven pricing without enterprise markup',
        'Blockchain-secured key management instead of centralized Google control',
        'Public attestation logs - verify everything on-chain vs private Google APIs',
        'Deploy on any infrastructure - cloud, on-premise, or edge computing',
        'Full open-source transparency - audit every component and process',
        'Community governance - shape the platform instead of following corporate roadmaps',
      ],
    },
  },
  cta: {
    text: 'Try Phala Cloud',
    href: 'https://docs.phala.network',
  },
}

export default function GcpComparison() {
  return <ComparisonTemplate data={gcpData} />
}
