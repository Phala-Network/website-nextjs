import type { Metadata } from 'next'

import {
  type ComparisonData,
  ComparisonTemplate,
} from '@/components/comparison-template'

export const metadata: Metadata = {
  title: 'Phala Cloud vs AWS Nitro Enclaves - Open Source Alternative',
  description:
    'Phala Cloud is a fully open-source alternative to AWS Nitro Enclaves. Compare features, pricing, GPU TEE support, and multi-cloud flexibility. Choose the decentralized confidential computing solution.',
}

const awsNitroData: ComparisonData = {
  competitor: {
    name: 'AWS Nitro Enclaves',
    description: 'Enterprise-grade confidential computing',
  },
  hero: {
    alternativeText: 'AWS Nitro Enclaves alternative with full open-source solution',
    title: 'Phala Cloud vs AWS Nitro Enclaves',
    bannerImage: '/compare-aws.png',
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
      feature: 'Hardware Isolation',
      phala: 'good',
      phalaText: 'Intel TDX & AMD SEV',
      competitor: 'good',
      competitorText: 'Custom Nitro Security Chip',
    },
    {
      feature: 'Enterprise Support',
      phala: 'good',
      phalaText: '24/7 support available',
      competitor: 'good',
      competitorText: '24/7 AWS Premium Support',
    },
    {
      feature: 'Compliance Certifications',
      phala: 'partial',
      phalaText: 'SOC2 in progress',
      competitor: 'good',
      competitorText: 'HIPAA, PCI-DSS, SOC',
    },
    {
      feature: 'Open Source',
      phala: 'good',
      phalaText: 'Fully auditable code',
      competitor: 'bad',
      competitorText: 'Proprietary',
    },
    {
      feature: 'Decentralized Governance',
      phala: 'good',
      phalaText: 'Ethereum-secured KMS',
      competitor: 'bad',
      competitorText: 'Centralized AWS control',
    },
    {
      feature: 'Public Auditability',
      phala: 'good',
      phalaText: 'On-chain attestation',
      competitor: 'partial',
      competitorText: 'CloudTrail logs',
    },
    {
      feature: 'GPU TEE Support',
      phala: 'good',
      phalaText: 'NVIDIA H100/H200',
      competitor: 'bad',
      competitorText: 'Not available',
    },
    {
      feature: 'Multi-Cloud Support',
      phala: 'good',
      phalaText: 'Deploy anywhere',
      competitor: 'bad',
      competitorText: 'AWS exclusive',
    },
    {
      feature: 'AWS Service Integration',
      phala: 'bad',
      phalaText: 'Limited',
      competitor: 'good',
      competitorText: 'Native S3, RDS, Lambda',
    },
    {
      feature: 'Maturity & Stability',
      phala: 'partial',
      phalaText: 'Production since 2021',
      competitor: 'good',
      competitorText: 'Enterprise-proven',
    },
  ],
  sections: {
    whatIsPhala: {
      title: 'What does Phala Cloud do?',
      content: 'Phala Cloud is a decentralized confidential computing platform that enables developers to deploy AI applications with full privacy guarantees. Built on open-source technology, it provides GPU TEE support for confidential AI workloads, blockchain-secured key management, and multi-cloud deployment flexibility without vendor lock-in.',
    },
    whatIsCompetitor: {
      title: 'What are AWS Nitro Enclaves?',
      content: "AWS Nitro Enclaves are Amazon's enterprise solution for confidential computing, providing hardware-isolated compute environments within EC2 instances. Built on custom Nitro hardware, they offer strong security guarantees with CPU and memory isolation, comprehensive compliance certifications, and seamless connectivity to AWS services.",
    },
    differentiators: {
      title: 'Where AWS Nitro Stops, Phala Keeps Going',
      content: [
        {
          title: 'Beyond CPU-Only Computing',
          description: 'AWS Nitro Enclaves are limited to CPU workloads. Phala extends confidential computing to GPU TEE with H100/H200 support, enabling private AI inference and training at enterprise scale.'
        },
        {
          title: 'Open-Source Transparency',
          description: 'While AWS uses proprietary Nitro hardware and closed-source attestation, Phala provides fully auditable open-source infrastructure. Every component can be verified and deployed independently.'
        },
        {
          title: 'Multi-Cloud Freedom',
          description: 'AWS locks you into their ecosystem with Nitro-specific implementations. Phala runs anywhere - on-premises, AWS, GCP, or Azure - using standard TEE technologies like Intel TDX and AMD SEV.'
        },
        {
          title: 'Decentralized Key Management',
          description: 'AWS controls your keys through centralized KMS. Phala uses blockchain-secured governance where key management decisions are transparent and community-controlled, not controlled by a single company.'
        }
      ]
    },
    howToChoose: {
      title: 'When to Choose Each Solution',
      content: [
        'Choose AWS Nitro Enclaves if you\'re already deep in the AWS ecosystem, need immediate enterprise support, and your confidential workloads are CPU-only with no AI/GPU requirements.',
        'Choose Phala Cloud if you need GPU TEE support for AI workloads, want infrastructure sovereignty without vendor lock-in, or require full transparency through open-source auditability.',
        'AWS Nitro requires significant AWS expertise and ties you to their proprietary platform, while Phala offers standard container deployment across any infrastructure.',
        'Consider long-term flexibility: AWS creates dependency on their ecosystem, while Phala enables true multi-cloud portability and infrastructure control.'
      ],
    },
    pricing: {
      title: 'Pricing Comparison',
      phalaContent: 'Pay-what-you-use pricing starting from $0.10/hour for CPU TEE and $0.50/hour for GPU TEE. No upfront costs, enterprise contracts, or vendor lock-in fees. Transparent community-driven pricing.',
      competitorContent: 'Enterprise pricing with AWS Premium Support fees, EC2 instance costs, plus Nitro Enclave compute charges. Requires AWS expertise and often involves long-term enterprise agreements.',
    },
    whyChoose: {
      title: 'Choose Phala over AWS Nitro Enclaves',
      content: [
        'Complete open-source transparency - audit all code and infrastructure components',
        'GPU TEE support for next-generation AI workloads with H100/H200 compatibility',
        'Multi-cloud deployment flexibility - avoid vendor lock-in with AWS',
        'Decentralized key management secured by Ethereum blockchain governance',
      ],
    },
  },
  cta: {
    text: 'Try Phala Cloud',
    href: 'https://docs.phala.network',
  },
}

export default function AwsNitroComparison() {
  return <ComparisonTemplate data={awsNitroData} />
}
