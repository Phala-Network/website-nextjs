export type ComparisonStatus = 'good' | 'bad' | 'partial'

export type ComparisonFeature = {
  feature: string
  phala: ComparisonStatus
  phalaText: string
  competitor: ComparisonStatus
  competitorText: string
}

export type ComparisonData = {
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
  competitor: {
    name: string
    description: string
  }
  hero: {
    alternativeText?: string
    title: string
    subtitle?: string
    bannerImage?: string
  }
  quickTakeaways: string[]
  features: ComparisonFeature[]
  sections: {
    whatIsPhala: {
      title: string
      content: string
    }
    whatIsCompetitor: {
      title: string
      content: string
    }
    differentiators: {
      title: string
      content: {
        title: string
        description: string
      }[]
    }
    howToChoose: {
      title: string
      content: string[]
    }
    pricing: {
      title: string
      phalaContent: string
      competitorContent: string
    }
    whyChoose?: {
      title: string
      content: string[]
    }
  }
  cta: {
    text: string
    href: string
  }
}

export const validSlugs = [
  'phala-vs-aws-nitro',
  'phala-vs-gcp',
  'phala-vs-tinfoil',
] as const

type ComparisonSlug = (typeof validSlugs)[number]

const isValidSlug = (slug: string): slug is ComparisonSlug => {
  return new Set(validSlugs).has(slug as ComparisonSlug)
}

export const comparisons: Record<ComparisonSlug, ComparisonData> = {
  'phala-vs-aws-nitro': {
    metadata: {
      title: 'Phala Cloud vs AWS Nitro Enclaves - Open Source Alternative',
      description:
        'Phala Cloud is a fully open-source alternative to AWS Nitro Enclaves. Compare features, pricing, GPU TEE support, and multi-cloud flexibility. Choose the decentralized confidential computing solution.',
      keywords: [
        'Phala',
        'AWS Nitro Enclaves',
        'Open Source',
        'Confidential Computing',
        'GPU TEE',
      ],
    },
    competitor: {
      name: 'AWS Nitro Enclaves',
      description: 'Enterprise-grade confidential computing',
    },
    hero: {
      alternativeText:
        'AWS Nitro Enclaves alternative with full open-source solution',
      title: 'Phala Cloud vs AWS Nitro Enclaves',
      bannerImage: '/compare/compare-aws.png',
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
        content:
          'Phala Cloud is a decentralized confidential computing platform that enables developers to deploy AI applications with full privacy guarantees. Built on open-source technology, it provides GPU TEE support for confidential AI workloads, blockchain-secured key management, and multi-cloud deployment flexibility without vendor lock-in.',
      },
      whatIsCompetitor: {
        title: 'What are AWS Nitro Enclaves?',
        content:
          "AWS Nitro Enclaves are Amazon's enterprise solution for confidential computing, providing hardware-isolated compute environments within EC2 instances. Built on custom Nitro hardware, they offer strong security guarantees with CPU and memory isolation, comprehensive compliance certifications, and seamless connectivity to AWS services.",
      },
      differentiators: {
        title: 'Where AWS Nitro Stops, Phala Keeps Going',
        content: [
          {
            title: 'Beyond CPU-Only Computing',
            description:
              'AWS Nitro Enclaves are limited to CPU workloads. Phala extends confidential computing to GPU TEE with H100/H200 support, enabling private AI inference and training at enterprise scale.',
          },
          {
            title: 'Open-Source Transparency',
            description:
              'While AWS uses proprietary Nitro hardware and closed-source attestation, Phala provides fully auditable open-source infrastructure. Every component can be verified and deployed independently.',
          },
          {
            title: 'Multi-Cloud Freedom',
            description:
              'AWS locks you into their ecosystem with Nitro-specific implementations. Phala runs anywhere - on-premises, AWS, GCP, or Azure - using standard TEE technologies like Intel TDX and AMD SEV.',
          },
          {
            title: 'Decentralized Key Management',
            description:
              'AWS controls your keys through centralized KMS. Phala uses blockchain-secured governance where key management decisions are transparent and community-controlled, not controlled by a single company.',
          },
        ],
      },
      howToChoose: {
        title: 'When to Choose Each Solution',
        content: [
          "Choose AWS Nitro Enclaves if you're already deep in the AWS ecosystem, need immediate enterprise support, and your confidential workloads are CPU-only with no AI/GPU requirements.",
          'Choose Phala Cloud if you need GPU TEE support for AI workloads, want infrastructure sovereignty without vendor lock-in, or require full transparency through open-source auditability.',
          'AWS Nitro requires significant AWS expertise and ties you to their proprietary platform, while Phala offers standard container deployment across any infrastructure.',
          'Consider long-term flexibility: AWS creates dependency on their ecosystem, while Phala enables true multi-cloud portability and infrastructure control.',
        ],
      },
      pricing: {
        title: 'Pricing Comparison',
        phalaContent:
          'Pay-what-you-use pricing starting from $0.10/hour for CPU TEE and $0.50/hour for GPU TEE. No upfront costs, enterprise contracts, or vendor lock-in fees. Transparent community-driven pricing.',
        competitorContent:
          'Enterprise pricing with AWS Premium Support fees, EC2 instance costs, plus Nitro Enclave compute charges. Requires AWS expertise and often involves long-term enterprise agreements.',
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
      href: 'https://cloud.phala.com/register',
    },
  },
  'phala-vs-gcp': {
    metadata: {
      title: 'Phala Cloud vs GCP Confidential VMs - Open Source Alternative',
      description:
        'Phala Cloud is a decentralized alternative to GCP Confidential VMs. Compare features, GPU TEE support, multi-cloud flexibility, and transparent pricing. Choose open-source confidential computing.',
      keywords: [
        'Phala',
        'GCP Confidential VMs',
        'Open Source',
        'Confidential Computing',
        'GPU TEE',
      ],
    },
    competitor: {
      name: 'GCP Confidential VMs',
      description: "Google's trusted cloud infrastructure",
    },
    hero: {
      alternativeText:
        'GCP Confidential VMs alternative with decentralized trust',
      title: 'Phala Cloud vs GCP Confidential VMs',
      bannerImage: '/compare/compare-gcp.png',
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
        feature: 'Memory Encryption',
        phala: 'good',
        phalaText: 'AMD SEV & Intel TDX',
        competitor: 'good',
        competitorText: 'AMD SEV & Intel TDX',
      },
      {
        feature: 'Ease of Migration',
        phala: 'partial',
        phalaText: 'Container-based',
        competitor: 'good',
        competitorText: 'Lift-and-shift VMs',
      },
      {
        feature: 'Global Availability',
        phala: 'partial',
        phalaText: '1000+ nodes',
        competitor: 'good',
        competitorText: '35+ regions worldwide',
      },
      {
        feature: 'Enterprise Support',
        phala: 'bad',
        phalaText: 'Community support',
        competitor: 'good',
        competitorText: 'Google Cloud Support',
      },
      {
        feature: 'Open Source',
        phala: 'good',
        phalaText: 'Fully auditable',
        competitor: 'bad',
        competitorText: 'Proprietary',
      },
      {
        feature: 'Decentralized Trust',
        phala: 'good',
        phalaText: 'Blockchain-secured',
        competitor: 'bad',
        competitorText: 'Centralized control',
      },
      {
        feature: 'GPU TEE Support',
        phala: 'good',
        phalaText: 'H100/H200 ready',
        competitor: 'partial',
        competitorText: 'A3 VMs without TEE',
      },
      {
        feature: 'Public Verifiability',
        phala: 'good',
        phalaText: 'On-chain attestation',
        competitor: 'partial',
        competitorText: 'API-based attestation',
      },
      {
        feature: 'Compliance Suite',
        phala: 'partial',
        phalaText: 'SOC2 planned',
        competitor: 'good',
        competitorText: 'ISO, HIPAA, PCI-DSS',
      },
      {
        feature: 'Performance Overhead',
        phala: 'good',
        phalaText: '3-5% overhead',
        competitor: 'partial',
        competitorText: '5-10% overhead',
      },
    ],
    sections: {
      whatIsPhala: {
        title: 'What does Phala Cloud do?',
        content:
          'Phala Cloud is a decentralized confidential computing platform that enables developers to deploy AI applications with full privacy guarantees. Built on open-source technology, it provides GPU TEE support for confidential AI workloads, blockchain-secured key management, and multi-cloud deployment flexibility without vendor lock-in.',
      },
      whatIsCompetitor: {
        title: 'What are GCP Confidential VMs?',
        content:
          "Google Cloud Confidential VMs use AMD SEV and Intel TDX to encrypt VM memory during processing. GCP excels at enterprise features with seamless lift-and-shift migration, comprehensive compliance certifications, and deep integration with Google's ecosystem including BigQuery, Cloud Run, and Vertex AI.",
      },
      differentiators: {
        title: 'Where GCP Confidential VMs Stop, Phala Keeps Going',
        content: [
          {
            title: 'GPU TEE for Confidential AI',
            description:
              'GCP Confidential VMs only protect CPU workloads. Their A3 GPU instances lack TEE protection, exposing AI models and data. Phala provides true GPU TEE with H100/H200, keeping your AI workloads confidential end-to-end.',
          },
          {
            title: 'Break Free from Google Lock-in',
            description:
              "GCP ties you to Google's ecosystem with proprietary APIs and services. Phala uses standard TEE technologies, enabling deployment on any cloud or on-premises infrastructure without vendor dependency.",
          },
          {
            title: 'Transparent vs Black Box',
            description:
              "Google's confidential computing relies on proprietary systems you cannot audit. Phala is fully open-source, allowing you to verify every component and process for true security transparency.",
          },
          {
            title: 'Decentralized Trust Model',
            description:
              'GCP requires trusting Google as a centralized authority. Phala uses blockchain-secured attestation and key management, removing single points of control and enabling community-governed trust.',
          },
        ],
      },
      howToChoose: {
        title: 'When to Choose Each Solution',
        content: [
          "Choose GCP Confidential VMs if you're already committed to Google Cloud, need easy lift-and-shift VM migration, and your workloads are CPU-only without AI/GPU requirements.",
          'Choose Phala Cloud if you need confidential AI with GPU TEE support, want multi-cloud flexibility, or require infrastructure sovereignty with open-source transparency.',
          'GCP offers convenient integration with Google services but creates vendor lock-in, while Phala requires containerization but provides true portability.',
          'Consider control vs convenience: GCP manages everything but limits your options, while Phala gives you full control over your confidential computing infrastructure.',
        ],
      },
      pricing: {
        title: 'Pricing Comparison',
        phalaContent:
          'Transparent pay-what-you-use pricing starting from $0.10/hour for CPU TEE and $0.50/hour for GPU TEE. No enterprise markup, hidden fees, or long-term commitments required.',
        competitorContent:
          'Premium GCP pricing with enterprise SLAs, Confidential VM surcharges on top of standard Compute Engine costs. Often requires committed use discounts for cost optimization.',
      },
      whyChoose: {
        title: 'Choose Phala over GCP Confidential VMs',
        content: [
          'Break free from Google vendor lock-in with multi-cloud deployment flexibility',
          'GPU TEE support for confidential AI workloads with H100/H200 compatibility',
          'Blockchain-secured key management instead of centralized Google control',
          'Full open-source transparency - audit every component and process',
        ],
      },
    },
    cta: {
      text: 'Try Phala Cloud',
      href: 'https://cloud.phala.com/register',
    },
  },
  'phala-vs-tinfoil': {
    metadata: {
      title: 'Phala vs Tinfoil - Open Source Confidential AI Alternative',
      description:
        'Phala is an open-source alternative to Tinfoil for confidential AI and private agents. Compare infrastructure control, pricing models, deployment flexibility, and decentralized trust vs managed services.',
      keywords: [
        'Phala',
        'Tinfoil',
        'Open Source',
        'Confidential Computing',
        'GPU TEE',
      ],
    },
    competitor: {
      name: 'Tinfoil',
      description: 'Managed confidential AI platform',
    },
    hero: {
      alternativeText:
        'Tinfoil alternative with infrastructure control and transparency',
      title: 'Phala vs Tinfoil',
      bannerImage: '/compare/compare-tinfoil.png',
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
        content:
          'Phala Cloud is a decentralized confidential computing platform that enables developers to deploy AI applications with full privacy guarantees. Built on open-source technology, it provides GPU TEE support for confidential AI workloads, blockchain-secured key management, and multi-cloud deployment flexibility without vendor lock-in.',
      },
      whatIsCompetitor: {
        title: 'What does Tinfoil do?',
        content:
          'Tinfoil is a developer-friendly managed confidential AI platform that makes GPU TEE deployment simple. With OpenAI-compatible endpoints and pre-deployed models, developers can integrate confidential AI inference in minutes. Tinfoil handles hardware provisioning, driver compatibility, attestation flows, and model optimization as a fully managed service for inference workloads.',
      },
      differentiators: {
        title: 'Where Tinfoil Stops, Phala Keeps Going',
        content: [
          {
            title: 'Beyond Inference: Private Agents',
            description:
              'Tinfoil focuses on confidential AI inference. Phala extends beyond inference to support private AI agents that can interact with tools, browse the web, and perform complex multi-step tasks - all within TEE protection.',
          },
          {
            title: 'Infrastructure Control vs Managed Service',
            description:
              'Tinfoil offers convenience with fully managed services but limits customization. Phala provides both managed and self-hosted options, giving you full control over your infrastructure and deployment choices.',
          },
          {
            title: 'Open Source vs Proprietary Core',
            description:
              "Tinfoil's core infrastructure is proprietary - you cannot audit or modify their systems. Phala is fully open-source, enabling complete transparency and the ability to customize every component.",
          },
          {
            title: 'Decentralized Trust vs Company Reputation',
            description:
              'Tinfoil asks you to trust their company and infrastructure. Phala uses blockchain-secured attestation where trust is mathematically verifiable, not dependent on corporate reputation.',
          },
          {
            title: 'Deployment Flexibility vs Vendor Lock-in',
            description:
              'Tinfoil restricts you to their cloud infrastructure. Phala enables deployment anywhere - your own hardware, any cloud provider, or hybrid setups - preventing vendor lock-in.',
          },
        ],
      },
      howToChoose: {
        title: 'When to Choose Each Solution',
        content: [
          "Choose Tinfoil if you want the fastest path to confidential AI with minimal setup, don't need infrastructure control, and are comfortable with managed service limitations.",
          'Choose Phala Cloud if you need infrastructure sovereignty, want to audit and customize your confidential computing stack, or require deployment flexibility across multiple environments.',
          'Tinfoil optimizes for developer velocity with instant deployment, while Phala optimizes for long-term flexibility and control.',
          'Consider your growth trajectory: Tinfoil may be simpler now but creates dependencies, while Phala requires more initial setup but scales with your needs.',
        ],
      },
      pricing: {
        title: 'Pricing Comparison',
        phalaContent:
          'Transparent pay-what-you-use pricing starting from $0.50/hour for GPU TEE. No subscription fees, setup costs, or vendor lock-in charges. Scale up or down instantly.',
        competitorContent:
          'Subscription-based pricing tiers with monthly commitments. Includes managed service premium but limits flexibility and requires ongoing subscription fees regardless of usage.',
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
      href: 'https://cloud.phala.com/register',
    },
  },
}

export function getComparisonData(slug: string): ComparisonData | undefined {
  if (isValidSlug(slug)) {
    return comparisons[slug]
  }
  return undefined
}
