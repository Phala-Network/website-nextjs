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
    description: 'Hardware-isolated compute environments',
  },
  hero: {
    title: 'Phala vs AWS Nitro Enclaves',
    subtitle: 'Comparing decentralized open-source TEE with AWS enterprise confidential computing',
    bannerImage: '/compare-aws.png',
  },
  quickTakeaways: [
    'Open-source transparency vs enterprise-grade support',
    'Decentralized governance vs centralized control',
    'Multi-cloud flexibility vs AWS ecosystem integration',
    'GPU TEE support for next-gen AI workloads',
    'Community-driven innovation vs corporate roadmap',
  ],
  features: [
    {
      feature: 'Hardware Isolation',
      phala: 'good',
      phalaText: 'Intel SGX & AMD SEV',
      competitor: 'good',
      competitorText: 'Nitro Security Chip',
    },
    {
      feature: 'Enterprise Support',
      phala: 'partial',
      phalaText: 'Community & partners',
      competitor: 'good',
      competitorText: '24/7 AWS support',
    },
    {
      feature: 'Open Source',
      phala: 'good',
      phalaText: 'Fully open-source',
      competitor: 'bad',
      competitorText: 'Proprietary',
    },
    {
      feature: 'Key Management',
      phala: 'good',
      phalaText: 'Ethereum-secured KMS',
      competitor: 'partial',
      competitorText: 'AWS KMS integration',
    },
    {
      feature: 'Real-Time Audit',
      phala: 'good',
      phalaText: 'On-chain attestation logs',
      competitor: 'bad',
      competitorText: 'AWS-internal only',
    },
    {
      feature: 'GPU TEE Support',
      phala: 'good',
      phalaText: 'H100, H200 support',
      competitor: 'bad',
      competitorText: 'CPU only',
    },
    {
      feature: 'Vendor Lock-in',
      phala: 'good',
      phalaText: 'Multi-cloud ready',
      competitor: 'bad',
      competitorText: 'AWS only',
    },
    {
      feature: 'Setup Complexity',
      phala: 'good',
      phalaText: 'One-click deployment',
      competitor: 'partial',
      competitorText: 'VPC configuration needed',
    },
  ],
  sections: {
    whatIs: {
      title: 'What is AWS Nitro?',
      content:
        "AWS Nitro Enclaves provide isolated compute environments to protect highly sensitive data processing within EC2 instances. Built on the Nitro System, these enclaves offer CPU and memory isolation with no persistent storage, no interactive access, and no external networking. While powerful for enterprise workloads, Nitro Enclaves are deeply integrated into the AWS ecosystem, requiring expertise in VPC configuration, IAM policies, and AWS KMS for key management. This makes them ideal for organizations already committed to AWS but limits flexibility for multi-cloud strategies.",
    },
    similar: {
      content: [
        'Both Phala and Nitro isolate workloads in hardware-protected enclaves.',
        'Both aim to secure sensitive data and models from cloud operators.',
        'Both use attestation mechanisms to verify enclave integrity.',
      ],
    },
    different: {
      content: [
        'Governance: Nitro relies on AWS-managed attestation and KMS; Phala uses an onchain KMS secured by Ethereum.',
        'Auditability: Nitro attestation proofs stay within AWS; Phala publishes them on-chain for anyone to verify.',
        'Lock-in: Nitro workloads run only on AWS; Phala supports multi-cloud and self-hosted nodes.',
        'GPU TEEs: Nitro does not support GPU-based enclaves; Phala does.',
        'Transparency: AWS Nitro is proprietary; Phala is fully open-source and auditable.',
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
