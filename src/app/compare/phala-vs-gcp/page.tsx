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
    whatIsPhala: {
      title: 'What does Phala Cloud do?',
      content: 'Phala Cloud is a decentralized confidential computing platform that enables developers to deploy AI applications with full privacy guarantees. Built on open-source technology, it provides GPU TEE support for confidential AI workloads, blockchain-secured key management, and multi-cloud deployment flexibility without vendor lock-in.',
    },
    whatIsCompetitor: {
      title: 'What are GCP Confidential VMs?',
      content: "Google Cloud Confidential VMs use AMD SEV and Intel TDX to encrypt VM memory during processing. GCP excels at enterprise features with seamless lift-and-shift migration, comprehensive compliance certifications, and deep integration with Google's ecosystem including BigQuery, Cloud Run, and Vertex AI.",
    },
    howToChoose: {
      title: 'Phala vs GCP Confidential VMs: How to choose?',
      content: [
        'Choose GCP Confidential VMs if you need seamless VM migration, existing Google Cloud integration, and enterprise compliance certifications',
        'Choose Phala Cloud if you want GPU TEE support for AI, multi-cloud flexibility, open-source transparency, and decentralized governance',
        'Consider migration effort: GCP offers lift-and-shift, while Phala requires containerization but provides more deployment options',
        'Evaluate vendor dependency: GCP locks you into Google\'s ecosystem, while Phala enables deployment anywhere'
      ],
    },
    pricing: {
      title: 'Pricing Comparison',
      phalaContent: 'Transparent pay-what-you-use pricing starting from $0.10/hour for CPU TEE and $0.50/hour for GPU TEE. No enterprise markup, hidden fees, or long-term commitments required.',
      competitorContent: 'Premium GCP pricing with enterprise SLAs, Confidential VM surcharges on top of standard Compute Engine costs. Often requires committed use discounts for cost optimization.',
    },
    whyChoose: {
      title: 'Choose Phala over GCP Confidential VMs',
      content: [
        'Break free from Google vendor lock-in with multi-cloud deployment flexibility',
        'GPU TEE support for confidential AI workloads with H100/H200 compatibility',
        'Blockchain-secured key management instead of centralized Google control',
        'Full open-source transparency - audit every component and process',
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
