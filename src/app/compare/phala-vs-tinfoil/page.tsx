import type { Metadata } from 'next'

import {
  type ComparisonData,
  ComparisonTemplate,
} from '@/components/comparison-template'

export const metadata: Metadata = {
  title: 'Phala vs Tinfoil - Open Source Confidential AI Alternative',
  description:
    'Phala is an open-source alternative to Tinfoil for confidential AI and private agents. Compare infrastructure control, pricing models, deployment flexibility, and decentralized trust vs managed services.',
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
    'Private AI agents with tool use capabilities',
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
      feature: 'Private AI Agents',
      phala: 'good',
      phalaText: 'Full agent support',
      competitor: 'bad',
      competitorText: 'Inference only',
    },
    {
      feature: 'Tool Use & Browser',
      phala: 'good',
      phalaText: 'Computer use agents',
      competitor: 'bad',
      competitorText: 'Not supported',
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
      content: 'Tinfoil is a developer-friendly managed confidential AI platform that makes GPU TEE deployment simple. With OpenAI-compatible endpoints and pre-deployed models, developers can integrate confidential AI inference in minutes. Tinfoil handles hardware provisioning, driver compatibility, attestation flows, and model optimization as a fully managed service for inference workloads.',
    },
    differentiators: {
      title: 'Where Tinfoil Stops, Phala Keeps Going',
      content: [
        {
          title: 'Beyond Inference: Private Agents',
          description: 'Tinfoil focuses on confidential AI inference. Phala extends beyond inference to support private AI agents that can interact with tools, browse the web, and perform complex multi-step tasks - all within TEE protection.'
        },
        {
          title: 'Infrastructure Control vs Managed Service',
          description: 'Tinfoil offers convenience with fully managed services but limits customization. Phala provides both managed and self-hosted options, giving you full control over your infrastructure and deployment choices.'
        },
        {
          title: 'Open Source vs Proprietary Core',
          description: 'Tinfoil\'s core infrastructure is proprietary - you cannot audit or modify their systems. Phala is fully open-source, enabling complete transparency and the ability to customize every component.'
        },
        {
          title: 'Decentralized Trust vs Company Reputation',
          description: 'Tinfoil asks you to trust their company and infrastructure. Phala uses blockchain-secured attestation where trust is mathematically verifiable, not dependent on corporate reputation.'
        },
        {
          title: 'Deployment Flexibility vs Vendor Lock-in',
          description: 'Tinfoil restricts you to their cloud infrastructure. Phala enables deployment anywhere - your own hardware, any cloud provider, or hybrid setups - preventing vendor lock-in.'
        }
      ]
    },
    howToChoose: {
      title: 'When to Choose Each Solution',
      content: [
        'Choose Tinfoil if you want the fastest path to confidential AI with minimal setup, don\'t need infrastructure control, and are comfortable with managed service limitations.',
        'Choose Phala Cloud if you need infrastructure sovereignty, want to audit and customize your confidential computing stack, or require deployment flexibility across multiple environments.',
        'Tinfoil optimizes for developer velocity with instant deployment, while Phala optimizes for long-term flexibility and control.',
        'Consider your growth trajectory: Tinfoil may be simpler now but creates dependencies, while Phala requires more initial setup but scales with your needs.'
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
