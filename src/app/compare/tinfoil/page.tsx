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
    description: 'Managed confidential AI platform',
  },
  hero: {
    title: 'Phala vs Tinfoil',
    subtitle: 'Decentralized infrastructure meets managed confidential AI services',
    bannerImage: '/compare-tinfoil.png',
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
      feature: 'GPU TEE Support',
      phala: 'good',
      phalaText: 'H100/H200 TEEs',
      competitor: 'good',
      competitorText: 'H100 TEEs',
    },
    {
      feature: 'Time to Production',
      phala: 'good',
      phalaText: 'Minutes with templates',
      competitor: 'good',
      competitorText: 'Minutes',
    },
    {
      feature: 'API Compatibility',
      phala: 'good',
      phalaText: 'OpenAI compatible',
      competitor: 'good',
      competitorText: 'OpenAI compatible',
    },
    {
      feature: 'Operational Overhead',
      phala: 'good',
      phalaText: 'Self-managed + Fully managed',
      competitor: 'good',
      competitorText: 'Fully managed',
    },
    {
      feature: 'Model Library',
      phala: 'good',
      phalaText: '10+ models + BYO',
      competitor: 'partial',
      competitorText: '10 models',
    },
    {
      feature: 'Open Source',
      phala: 'good',
      phalaText: 'Fully transparent',
      competitor: 'partial',
      competitorText: 'Core components only',
    },
    {
      feature: 'Infrastructure Control',
      phala: 'good',
      phalaText: 'Full control',
      competitor: 'bad',
      competitorText: 'Vendor-managed',
    },
    {
      feature: 'Decentralized Trust',
      phala: 'good',
      phalaText: 'Blockchain-verified',
      competitor: 'bad',
      competitorText: 'Company reputation',
    },
    {
      feature: 'Custom Deployment',
      phala: 'good',
      phalaText: 'Any location',
      competitor: 'bad',
      competitorText: 'Tinfoil cloud only',
    },
    {
      feature: 'Pricing Model',
      phala: 'good',
      phalaText: 'Pay-what-you-use',
      competitor: 'partial',
      competitorText: 'Subscription tiers',
    },
  ],
  sections: {
    whatIs: {
      title: 'What is Tinfoil?',
      content:
        'Tinfoil is a developer-friendly confidential AI platform that makes GPU TEE deployment incredibly simple. With OpenAI-compatible endpoints and pre-deployed models like Llama and Mistral, developers can integrate confidential AI in minutes rather than weeks. Tinfoil excels at removing complexity - they handle hardware provisioning, driver compatibility, attestation flows, and model optimization. Their managed service approach with SOC2 compliance and enterprise SLAs makes them attractive for companies wanting confidential AI without infrastructure headaches. For teams prioritizing speed and simplicity over control, Tinfoil offers the fastest path to production.',
    },
    similar: {
      content: [
        'Both leverage NVIDIA H100 GPU TEEs for confidential AI inference',
        'Both protect model weights and inference data from infrastructure providers',
        'Both support popular AI models like Llama, Mistral, and custom models',
        'Both enable confidential computing for sensitive AI workloads',
      ],
    },
    different: {
      content: [
        'Developer Experience: Tinfoil offers instant OpenAI-compatible APIs; Phala requires infrastructure setup but provides full customization',
        'Business Model: Tinfoil operates as a SaaS with monthly subscriptions; Phala uses decentralized tokenomics',
        'Trust Architecture: Tinfoil requires trusting their company; Phala distributes trust across blockchain validators',
        'Deployment Options: Tinfoil is cloud-only managed service; Phala supports on-premise, multi-cloud, and edge deployments',
        'Innovation Focus: Tinfoil prioritizes ease-of-use; Phala emphasizes decentralization and transparency',
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
