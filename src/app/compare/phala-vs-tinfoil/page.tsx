import type { Metadata } from 'next'

import {
  type ComparisonData,
  ComparisonTemplate,
} from '@/components/comparison-template'

export const metadata: Metadata = {
  title: 'Phala vs Tinfoil - Open Source Confidential AI Alternative',
  description:
    'Phala is an open-source alternative to Tinfoil for confidential AI. Compare infrastructure control, pricing models, deployment flexibility, and decentralized trust vs managed services.',
}

const tinfoilData: ComparisonData = {
  competitor: {
    name: 'Tinfoil',
    description: 'Managed confidential AI platform',
  },
  hero: {
    alternativeText: 'Tinfoil alternative with infrastructure control and transparency',
    title: 'Phala vs Tinfoil',
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
        'Developer Experience: Tinfoil offers instant OpenAI-compatible APIs; Phala Cloud requires infrastructure setup but provides full customization',
        'Business Model: Tinfoil operates as a SaaS with monthly subscriptions; Phala Cloud uses decentralized tokenomics',
        'Trust Architecture: Tinfoil requires trusting their company; Phala Cloud distributes trust across blockchain validators',
        'Deployment Options: Tinfoil is cloud-only managed service; Phala Cloud supports on-premise, multi-cloud, and edge deployments',
        'Innovation Focus: Tinfoil prioritizes ease-of-use; Phala Cloud emphasizes decentralization and transparency',
      ],
    },
    whyChoose: {
      title: 'Why Choose Phala?',
      content: [
        'Full infrastructure control - deploy on your own hardware or any cloud provider',
        'Open-source transparency - audit all code vs proprietary managed service',
        'Decentralized trust model - no single company controls your confidential AI',
        'No vendor lock-in - migrate and scale without platform dependencies',
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
