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
    whatIs: {
      title: 'What are AWS Nitro Enclaves?',
      content:
        "AWS Nitro Enclaves are Amazon's enterprise solution for confidential computing, providing hardware-isolated compute environments within EC2 instances. Built on custom Nitro hardware, they offer strong security guarantees with CPU and memory isolation. AWS Nitro Enclaves excel at enterprise integration with comprehensive compliance certifications (HIPAA, PCI-DSS, SOC) and seamless connectivity to AWS services like KMS, S3, and RDS. It's the go-to choice for Fortune 500 companies already invested in the AWS ecosystem who need proven, supported confidential computing.",
    },
    similar: {
      content: [
        'Both provide hardware-based trusted execution environments for sensitive workloads',
        'Both protect data in use from cloud provider access and other tenants',
        'Both support remote attestation to verify enclave integrity',
        'Both enable confidential computing without application redesign',
      ],
    },
    different: {
      content: [
        'Philosophy: AWS Nitro Enclaves offer enterprise stability with SLAs; Phala Cloud provides open-source innovation and transparency',
        'Infrastructure: AWS Nitro Enclaves require deep AWS expertise and vendor lock-in; Phala Cloud runs on any cloud or bare metal',
        'AI Support: Phala Cloud pioneered GPU TEE support for confidential AI; AWS Nitro Enclaves remain CPU-only',
        'Verification: AWS Nitro Enclaves keep attestation internal; Phala Cloud publishes proofs on-chain for public audit',
        'Cost Model: AWS Nitro Enclaves have predictable enterprise pricing; Phala Cloud offers competitive community-driven economics',
      ],
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
