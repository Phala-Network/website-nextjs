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
    description: 'Google Cloud confidential computing',
  },
  hero: {
    title: 'Phala vs GCP Confidential VMs',
    subtitle: 'Comparing decentralized TEE infrastructure with Google\'s enterprise confidential computing',
    bannerImage: '/compare-gcp.png',
  },
  quickTakeaways: [
    'Community-driven vs corporate-controlled development',
    'Blockchain-secured vs cloud provider key management',
    'Transparent pricing vs complex enterprise billing',
    'GPU-accelerated TEE vs CPU-only confidential computing',
    'Global node network vs regional data centers',
  ],
  features: [
    {
      feature: 'Memory Encryption',
      phala: 'good',
      phalaText: 'Hardware-level encryption',
      competitor: 'good',
      competitorText: 'AMD SEV encryption',
    },
    {
      feature: 'Performance Impact',
      phala: 'good',
      phalaText: '<5% overhead',
      competitor: 'good',
      competitorText: '<10% overhead',
    },
    {
      feature: 'Open Source',
      phala: 'good',
      phalaText: 'Fully transparent code',
      competitor: 'bad',
      competitorText: 'Proprietary',
    },
    {
      feature: 'Decentralized KMS',
      phala: 'good',
      phalaText: 'Ethereum-secured',
      competitor: 'bad',
      competitorText: 'Google-controlled',
    },
    {
      feature: 'Attestation Transparency',
      phala: 'good',
      phalaText: 'Public on-chain logs',
      competitor: 'partial',
      competitorText: 'Limited API access',
    },
    {
      feature: 'GPU Confidential Computing',
      phala: 'good',
      phalaText: 'NVIDIA H100/H200',
      competitor: 'bad',
      competitorText: 'Not supported',
    },
    {
      feature: 'Multi-Cloud Support',
      phala: 'good',
      phalaText: 'Any infrastructure',
      competitor: 'bad',
      competitorText: 'GCP only',
    },
    {
      feature: 'Compliance Certifications',
      phala: 'partial',
      phalaText: 'SOC 2 in progress',
      competitor: 'good',
      competitorText: 'Full compliance suite',
    },
  ],
  sections: {
    whatIs: {
      title: 'What is GCP Confidential Computing?',
      content:
        "Google Cloud Confidential VMs leverage AMD Secure Encrypted Virtualization (SEV) and Intel TDX to encrypt data in-use, protecting VM memory from the hypervisor and other VMs. This technology enables organizations to lift-and-shift existing workloads without code changes while maintaining data confidentiality. GCP provides comprehensive attestation through the Confidential Computing API and integrates with Google's security services like Binary Authorization and Cloud KMS. However, the solution remains bound to Google's infrastructure, pricing model, and doesn't support GPU-accelerated confidential computing needed for modern AI workloads.",
    },
    similar: {
      content: [
        'Both use hardware TEEs for isolation.',
        'Both protect workloads from cloud provider access.',
        'Both provide memory encryption at the hardware level.',
      ],
    },
    different: {
      content: [
        'Keys: GCP relies on Google KMS; Phala distributes keys through an onchain KMS with Ethereum governance.',
        'Openness: GCP Confidential VMs are proprietary; Phala is fully open-source and auditable.',
        'Audit: GCP verification is provider-managed; Phala gives public, verifiable attestation logs.',
        "Flexibility: GCP is bound to Google's infra; Phala can run across clouds and independent providers.",
        "GPU Support: GCP Confidential VMs don't support GPU enclaves; Phala provides native GPU TEE capabilities.",
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
