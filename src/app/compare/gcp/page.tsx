import type { Metadata } from 'next'

import {
  type ComparisonData,
  ComparisonTemplate,
} from '@/components/comparison-template'

export const metadata: Metadata = {
  title: 'Phala vs GCP Confidential VMs - Confidential Computing Comparison',
  description:
    'Compare Phala Network and Google Cloud Confidential VMs for confidential computing. See the differences in key management, openness, audit capabilities, and cloud flexibility.',
}

const gcpData: ComparisonData = {
  competitor: {
    name: 'GCP Confidential VMs',
    description: 'Google\'s trusted cloud infrastructure',
  },
  hero: {
    title: 'Phala vs GCP Confidential VMs',
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
        'Migration Path: GCP offers zero-code-change VM migration; Phala requires containerization but offers more flexibility',
        'Trust Model: GCP relies on Google\'s reputation; Phala uses blockchain-based verification',
        'AI Capabilities: Phala specializes in GPU TEE for AI; GCP focuses on traditional enterprise workloads',
        'Pricing: GCP has premium pricing with enterprise SLAs; Phala offers competitive community pricing',
        'Innovation Speed: GCP follows enterprise release cycles; Phala iterates rapidly with community feedback',
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
