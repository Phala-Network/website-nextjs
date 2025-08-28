import type { Metadata } from 'next'

import {
  type ComparisonData,
  ComparisonTemplate,
} from '@/components/comparison-template'

export const metadata: Metadata = {
  title: 'Phala vs AWS Nitro Enclaves - Confidential Computing Comparison',
  description:
    'Compare Phala Network and AWS Nitro Enclaves for confidential computing. See the differences in governance, auditability, GPU TEE support, and vendor lock-in.',
}

const awsNitroData: ComparisonData = {
  competitor: {
    name: 'AWS Nitro',
    description: 'Enterprise-grade confidential computing',
  },
  hero: {
    title: 'Phala vs AWS Nitro Enclaves',
    subtitle: 'Open-source decentralized TEE meets enterprise confidential computing',
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
      title: 'What is AWS Nitro?',
      content:
        "AWS Nitro Enclaves are Amazon's enterprise solution for confidential computing, providing hardware-isolated compute environments within EC2 instances. Built on custom Nitro hardware, they offer strong security guarantees with CPU and memory isolation. AWS Nitro excels at enterprise integration with comprehensive compliance certifications (HIPAA, PCI-DSS, SOC) and seamless connectivity to AWS services like KMS, S3, and RDS. It's the go-to choice for Fortune 500 companies already invested in the AWS ecosystem who need proven, supported confidential computing.",
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
        'Philosophy: AWS offers enterprise stability with SLAs; Phala provides open-source innovation and transparency',
        'Infrastructure: AWS requires deep AWS expertise and vendor lock-in; Phala runs on any cloud or bare metal',
        'AI Support: Phala pioneered GPU TEE support for confidential AI; AWS Nitro remains CPU-only',
        'Verification: AWS keeps attestation internal; Phala publishes proofs on-chain for public audit',
        'Cost Model: AWS has predictable enterprise pricing; Phala offers competitive community-driven economics',
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
