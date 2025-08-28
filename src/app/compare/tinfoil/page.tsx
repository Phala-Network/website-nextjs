import type { Metadata } from 'next'

import {
  type ComparisonData,
  ComparisonTemplate,
} from '@/components/comparison-template'

export const metadata: Metadata = {
  title: 'Phala vs Tinfoil - Confidential AI Infrastructure Comparison',
  description:
    'Compare Phala Network and Tinfoil for confidential AI workloads. See the differences in key management, auditability, governance, and platform flexibility.',
}

const tinfoilData: ComparisonData = {
  competitor: {
    name: 'Tinfoil',
    description: 'Confidential AI service platform',
  },
  hero: {
    title: 'Phala vs Tinfoil',
    subtitle: 'Comparing decentralized infrastructure with managed confidential AI services',
    bannerImage: '/compare-tinfoil.png',
  },
  quickTakeaways: [
    'Infrastructure-as-code vs managed service approach',
    'Blockchain governance vs traditional SaaS model',
    'Pay-per-use vs subscription pricing',
    'Self-sovereign deployment vs vendor-managed platform',
    'Both support GPU TEEs for AI inference',
  ],
  features: [
    {
      feature: 'GPU TEE Support',
      phala: 'good',
      phalaText: 'H100/H200 TEEs',
      competitor: 'good',
      competitorText: 'NVIDIA GPU TEEs',
    },
    {
      feature: 'AI Model Compatibility',
      phala: 'good',
      phalaText: 'Any framework',
      competitor: 'good',
      competitorText: 'OpenAI compatible',
    },
    {
      feature: 'Open Source',
      phala: 'good',
      phalaText: 'Fully open-source',
      competitor: 'partial',
      competitorText: 'Partially open',
    },
    {
      feature: 'Decentralized Network',
      phala: 'good',
      phalaText: 'Global node network',
      competitor: 'bad',
      competitorText: 'Centralized service',
    },
    {
      feature: 'Key Management',
      phala: 'good',
      phalaText: 'User-controlled keys',
      competitor: 'partial',
      competitorText: 'Managed by Tinfoil',
    },
    {
      feature: 'Audit Trail',
      phala: 'good',
      phalaText: 'On-chain verification',
      competitor: 'bad',
      competitorText: 'Internal logs only',
    },
    {
      feature: 'Infrastructure Flexibility',
      phala: 'good',
      phalaText: 'Deploy anywhere',
      competitor: 'bad',
      competitorText: 'Tinfoil cloud only',
    },
    {
      feature: 'Ease of Use',
      phala: 'partial',
      phalaText: 'Technical knowledge required',
      competitor: 'good',
      competitorText: 'Simple API access',
    },
  ],
  sections: {
    whatIs: {
      title: 'What is Tinfoil?',
      content:
        'Tinfoil Security provides a managed confidential AI platform that enables secure inference for large language models and other AI workloads using GPU TEEs. Their service offers OpenAI-compatible API endpoints, making it easy for developers to switch from standard AI services to confidential alternatives. Tinfoil handles the complexity of TEE deployment, attestation, and key management behind a simple API interface. While this approach reduces technical barriers, it creates dependencies on Tinfoil\'s infrastructure, pricing models, and service availability. The platform is ideal for teams wanting confidential AI without managing infrastructure but lacks the flexibility and transparency of decentralized solutions.',
    },
    similar: {
      content: [
        'Both target confidential AI workloads.',
        'Both support GPU TEEs for AI inference.',
        'Both aim to reduce trust in cloud operators.',
        'Both provide confidential computing for sensitive AI models.',
      ],
    },
    different: {
      content: [
        'Keys: Tinfoil relies on vendor-controlled attestation; Phala uses an Ethereum-secured onchain KMS.',
        'Audit: Tinfoil is service-driven; Phala gives public audit logs of enclave attestation.',
        'Lock-in: Tinfoil is tied to its platform; Phala is open-source and multi-cloud deployable.',
        'Governance: Phala allows community or enterprise governance of enclaves through Ethereum contracts.',
        'Transparency: Tinfoil is partially open; Phala is completely open-source with public development.',
      ],
    },
  },
  cta: {
    text: 'Try Phala Cloud',
    href: 'https://docs.phala.network',
  },
}

export default function TinfoilComparison() {
  return <ComparisonTemplate data={tinfoilData} />
}
