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
    whatIsPhala: {
      title: 'What does Phala Cloud do?',
      content: 'Phala Cloud is a decentralized confidential computing platform that enables developers to deploy AI applications with full privacy guarantees. Built on open-source technology, it provides GPU TEE support for confidential AI workloads, blockchain-secured key management, and multi-cloud deployment flexibility without vendor lock-in.',
    },
    whatIsCompetitor: {
      title: 'What does Tinfoil do?',
      content: 'Tinfoil is a developer-friendly managed confidential AI platform that makes GPU TEE deployment simple. With OpenAI-compatible endpoints and pre-deployed models, developers can integrate confidential AI in minutes. Tinfoil handles hardware provisioning, driver compatibility, attestation flows, and model optimization as a fully managed service.',
    },
    howToChoose: {
      title: 'Phala vs Tinfoil: How to choose?',
      content: [
        'Choose Tinfoil if you want instant deployment with OpenAI-compatible APIs and don\'t want to manage infrastructure',
        'Choose Phala Cloud if you need full infrastructure control, open-source transparency, and deployment flexibility',
        'Consider development speed: Tinfoil offers minutes to deployment, while Phala requires more setup but provides customization',
        'Evaluate long-term strategy: Tinfoil creates vendor dependency, while Phala enables infrastructure sovereignty'
      ],
    },
    pricing: {
      title: 'Pricing Comparison',
      phalaContent: 'Transparent pay-what-you-use pricing starting from $0.50/hour for GPU TEE. No subscription fees, setup costs, or vendor lock-in charges. Scale up or down instantly.',
      competitorContent: 'Subscription-based pricing tiers with monthly commitments. Includes managed service premium but limits flexibility and requires ongoing subscription fees regardless of usage.',
    },
    whyChoose: {
      title: 'Choose Phala over Tinfoil',
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
