/**
 * GPU TEE Page Copywriting
 * Marketing content for GPU TEE landing pages
 */

export const heroSection = {
  badge: 'Full-Stack TEE Protection',
  headline: 'Most Powerful AI GPUs.',
  headlineGradient: 'Most Secure Platform.',
  subheadline:
    'Deploy H200/H100 GPUs with complete hardware protection. The only cloud combining Intel TDX + NVIDIA Confidential Computing for end-to-end security.',
  ctaPrimary: 'Deploy GPU TEE Now',
  ctaPrimaryUrl: 'https://cloud.phala.network',
  ctaSecondary: 'View Pricing',
  ctaSecondaryUrl: '#pricing',
  badges: [
    { icon: 'Shield', label: 'Intel TDX' },
    { icon: 'Lock', label: 'NVIDIA CC' },
    { icon: 'Zap', label: 'H200/H100' },
  ],
}

export const comparisonSection = {
  title: 'Why Phala Cloud is Unique',
  subtitle: 'Full-Stack TEE vs GPU-Only Solutions',
  description:
    'Most cloud providers offer GPU-only protection or no TEE at all. Phala Cloud protects your entire workload with Intel TDX + NVIDIA Confidential Computing.',
  columns: [
    {
      name: 'Standard GPU Cloud',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/cloud-generic.svg',
      subtitle: 'No TEE Protection',
    },
    {
      name: 'NVIDIA CC Only',
      logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nvidia-icon.svg',
      subtitle: 'GPU Protection',
    },
    {
      name: 'Phala Cloud',
      logo: '/phala-logo.svg',
      subtitle: 'Full-Stack TEE',
      highlight: true,
    },
  ],
  metrics: [
    {
      name: 'CPU/Memory Protection',
      values: ['bad', 'neutral', 'good'],
      descriptions: ['No protection', 'Exposed to host', 'Intel TDX isolation'],
    },
    {
      name: 'GPU Memory Encryption',
      values: ['bad', 'good', 'good'],
      descriptions: ['No encryption', 'NVIDIA CC enabled', 'NVIDIA CC enabled'],
    },
    {
      name: 'Complete VM Isolation',
      values: ['bad', 'bad', 'good'],
      descriptions: [
        'Standard VM',
        'GPU isolated only',
        'Full TDX Trust Domain',
      ],
    },
    {
      name: 'Attestation Reports',
      values: ['bad', 'neutral', 'good'],
      descriptions: ['None', 'NVIDIA only', 'Intel + NVIDIA dual'],
    },
    {
      name: 'Private Model Training',
      values: ['bad', 'neutral', 'good'],
      descriptions: [
        'Data exposed',
        'Partial protection',
        'End-to-end privacy',
      ],
    },
    {
      name: 'ZK/FHE Acceleration',
      values: ['neutral', 'neutral', 'good'],
      descriptions: [
        'No TEE support',
        'Limited support',
        'Optimized for crypto ops',
      ],
    },
    {
      name: 'TEE Overhead',
      values: ['good', 'neutral', 'good'],
      descriptions: ['0% (no TEE)', '~3-5%', '<5%'],
    },
    {
      name: 'Compliance Ready',
      values: ['bad', 'neutral', 'good'],
      descriptions: ['Standard cloud', 'GPU compliance', 'GDPR, HIPAA, SOC 2'],
    },
  ],
}

export const pricingSection = {
  title: 'Available GPU Configurations',
  subtitle: 'From Single GPU to Enterprise Clusters',
  description:
    'All configurations include Intel TDX + NVIDIA Confidential Computing protection',
  gpus: [
    {
      id: 'h200',
      name: 'NVIDIA H200',
      badge: 'Flagship Performance',
      icon: 'Zap',
      specs: [
        '141GB HBM3e Memory',
        '4.8 TB/s Bandwidth',
        'Up to 2x faster vs H100',
        'Dual TEE Protection',
      ],
      priceOnDemand: '$3.50',
      priceReserved: '$2.30',
      savings: '34% savings',
      ctaText: 'Configure H200',
      ctaUrl: '/gpu-tee/h200',
    },
    {
      id: 'h100',
      name: 'NVIDIA H100',
      badge: 'Enterprise Standard',
      icon: 'Server',
      specs: [
        '80GB HBM3 Memory',
        'Proven Performance',
        '9x Faster Training',
        'Dual TEE Protection',
      ],
      priceOnDemand: '$3.08',
      priceReserved: '$2.50',
      savings: '30% savings',
      ctaText: 'Configure H100',
      ctaUrl: '/gpu-tee/h100',
    },
    {
      id: 'b200',
      name: 'NVIDIA B200',
      badge: 'Coming Soon',
      icon: 'Rocket',
      specs: [
        '192GB HBM3e Memory',
        'Next-Gen Blackwell',
        'Ultra Performance',
        'Dual TEE Protection',
      ],
      priceOnDemand: 'Contact Sales',
      priceReserved: null,
      savings: null,
      ctaText: 'Request Access',
      ctaUrl: 'https://phala.com/contact',
    },
  ],
}

export const useCasesSection = {
  title: 'What You Can Build with GPU TEE',
  subtitle: 'Real-World Applications Running on Phala Cloud',
  cases: [
    {
      title: 'Private Enterprise AI',
      description:
        'Train and deploy models on sensitive healthcare, financial, or legal data with complete hardware protection. Your data never leaves the TEE.',
      icon: 'Building2',
      badge: 'Enterprise',
      link: '/success-stories/enterprise-ai',
    },
    {
      title: 'User-Owned AI Agents',
      description:
        'Build autonomous AI agents that securely manage cryptographic keys and digital assets. Powers platforms like Eliza and Virtuals Game Agents.',
      icon: 'Bot',
      badge: 'Web3',
      link: '/success-stories/ai-agents',
      customers: ['Eliza', 'Virtuals', 'Spore.fun'],
    },
    {
      title: 'ZK Proof Generation',
      description:
        'Accelerate zkVM and zkRollup proof generation with GPU TEE. SP1 zkVM runs with <5% TEE overhead—verified with dual attestation.',
      icon: 'Shield',
      badge: 'Zero-Knowledge',
      link: '/cases/tee_with_zk_and_zkrollup',
      benchmark: 'SP1 zkVM: 4-5% overhead',
    },
    {
      title: 'FHE/MPC Acceleration',
      description:
        'Use GPU TEE as 2FA for FHE and MPC systems. Secure key generation, computation integrity, and attestation in one platform.',
      icon: 'Lock',
      badge: 'Cryptography',
      link: '/cases/tee_with_fhe_and_mpc',
      customers: ['Fairblock', 'Mind Network'],
    },
    {
      title: 'Multi-Proof Systems',
      description:
        'Combine ZK proofs with TEE attestation for double security. Hedge against cryptographic bugs while maintaining verifiability.',
      icon: 'Layers',
      badge: 'Hybrid',
      link: '/cases/tee_with_zk_and_zkrollup',
    },
    {
      title: 'Regulatory Compliance',
      description:
        'Meet GDPR, HIPAA, and SOC 2 requirements with hardware-backed privacy guarantees. Full audit trail with Intel and NVIDIA attestation.',
      icon: 'FileCheck',
      badge: 'Compliance',
      link: '/pricing#compliance',
    },
  ],
}

export const deploymentModelsSection = {
  title: 'Three Ways to Deploy GPU TEE',
  subtitle: 'Choose the deployment model that fits your needs',
  models: [
    {
      id: 'cvm-gpu',
      name: 'CVM + GPU',
      description: 'Full Control',
      icon: 'Terminal',
      features: [
        'Deploy your own Docker containers',
        'SSH access to TEE-protected GPUs',
        'Custom model deployment & fine-tuning',
        'Intel TDX + NVIDIA CC protection',
        'Dual attestation (Intel + NVIDIA)',
      ],
      ideal: 'Developers who need maximum flexibility',
      cta: 'Deploy CVM',
      ctaUrl: 'https://cloud.phala.network/dashboard/gpu-tee',
    },
    {
      id: 'confidential-models',
      name: 'Confidential AI Models',
      description: 'Instant Deployment',
      icon: 'Sparkles',
      features: [
        'Pre-configured model templates',
        'One-click deployment',
        'OpenAI-compatible API',
        'Automatic scaling',
        'Built-in TEE protection',
      ],
      ideal: 'Teams who want fast time-to-market',
      cta: 'Browse Models',
      ctaUrl: 'https://cloud.phala.network/dashboard/confidential-ai-models',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solutions',
      description: 'White-Glove Service',
      icon: 'Building',
      features: [
        'Dedicated GPU clusters',
        'Custom SLA & support',
        'Volume pricing discounts',
        'Private deployment options',
        '24/7 technical support',
      ],
      ideal: 'Organizations with specific compliance needs',
      cta: 'Contact Sales',
      ctaUrl: 'https://phala.com/contact',
    },
  ],
}

export const technicalFeaturesSection = {
  title: 'Full-Stack TEE Architecture',
  subtitle: 'Complete Hardware Protection from CPU to GPU',
  features: [
    {
      title: 'Full VM Isolation',
      description:
        'Intel TDX creates a Trust Domain that isolates your entire VM from the host OS and hypervisor. Not even the cloud provider can access your data.',
      icon: 'ShieldCheck',
    },
    {
      title: 'GPU Memory Encryption',
      description:
        'NVIDIA Confidential Computing encrypts all data in GPU memory. Model weights, training data, and inference results stay encrypted during computation.',
      icon: 'Lock',
    },
    {
      title: 'Dual Remote Attestation',
      description:
        'Get cryptographic proof from both Intel and NVIDIA that your workload runs in genuine TEE hardware. Verify independently with our open-source tools.',
      icon: 'FileCheck',
    },
    {
      title: 'End-to-End Encryption',
      description:
        'Data encrypted in transit (TLS), at rest (AES-256), and during processing (TEE). Network traffic stays within the TEE boundary.',
      icon: 'Network',
    },
    {
      title: 'Global Availability',
      description:
        'Deploy in US-West and India regions. More locations coming soon. All regions offer the same Full-Stack TEE protection.',
      icon: 'Globe',
    },
    {
      title: 'Compliance Ready',
      description:
        'Hardware-backed security meets GDPR, HIPAA, and SOC 2 requirements. Audit-ready with attestation logs and compliance reports.',
      icon: 'Award',
    },
  ],
}

export const performanceSection = {
  title: 'Performance Benchmarks',
  subtitle: 'TEE Protection with Minimal Overhead',
  stats: [
    {
      label: 'TEE Overhead',
      value: '<5%',
      description: 'Near-native performance',
      trend: 'up',
    },
    {
      label: 'H200 vs H100',
      value: '2x',
      description: 'Faster LLM inference',
      trend: 'up',
    },
    {
      label: 'Memory Bandwidth',
      value: '4.8 TB/s',
      description: 'H200 HBM3e',
      trend: 'neutral',
    },
    {
      label: 'SP1 zkVM Overhead',
      value: '4-5%',
      description: 'In GPU TEE environment',
      trend: 'up',
    },
  ],
  benchmark: {
    title: 'Real-World Performance',
    description:
      'Tested with SP1 zkVM generating ZK proofs in GPU TEE. Full attestation verification included.',
    link: 'https://phala.network/posts/performance-benchmark-running-sp1-zkvm-in-tee-h200-with-low-overhead',
    linkText: 'Read Full Benchmark →',
  },
}

export const faqSection = {
  title: 'Frequently Asked Questions',
  subtitle: 'Everything you need to know about GPU TEE',
  categories: [
    {
      name: 'GPU TEE BASICS',
      questions: [
        {
          q: 'What makes Phala Cloud different from other GPU cloud providers?',
          a: 'Phala Cloud is the only provider offering Full-Stack TEE: Intel TDX for CPU/memory protection + NVIDIA Confidential Computing for GPU protection. Most providers offer GPU-only security or no TEE at all, leaving your data exposed to the host system.',
        },
        {
          q: 'What is dual attestation?',
          a: 'Dual attestation means you get cryptographic proof from both Intel (for TDX) and NVIDIA (for Confidential Computing) that your workload runs in genuine TEE hardware. You can verify these attestation reports independently with our open-source tools.',
        },
        {
          q: "What's the performance overhead of TEE?",
          a: 'Our benchmarks show <5% overhead for most workloads. For example, SP1 zkVM running in GPU TEE shows only 4-5% performance impact compared to non-TEE environments, while providing complete hardware protection.',
        },
      ],
    },
    {
      name: 'USE CASES & DEPLOYMENT',
      questions: [
        {
          q: 'Can I train AI models on private data?',
          a: 'Yes! Full-Stack TEE protection means your training data, model weights, and inference results are all protected by hardware encryption. Perfect for healthcare, financial, and legal AI applications where data privacy is critical.',
        },
        {
          q: 'How do I deploy my own models?',
          a: 'Three options: (1) Deploy CVM + GPU for full control with SSH access, (2) Use our Confidential AI Models for one-click deployment, or (3) Contact us for Enterprise Solutions with dedicated clusters and custom SLAs.',
        },
        {
          q: 'What about ZK proof generation and FHE workloads?',
          a: 'GPU TEE is optimized for cryptographic operations. We support SP1 zkVM, zkRollups, FHE acceleration, and MPC systems. Our customers include projects like Fairblock, Mind Network, and various zkRollup providers.',
        },
      ],
    },
    {
      name: 'TECHNICAL & PRICING',
      questions: [
        {
          q: 'Which GPUs are available?',
          a: 'Currently: H200 (141GB HBM3e), H100 (80GB HBM3). Coming soon: B200 (192GB HBM3e). All GPUs include Intel TDX + NVIDIA Confidential Computing protection. Scale from 1 to 8 GPUs per instance.',
        },
        {
          q: "What's the pricing?",
          a: 'On-demand: H200 from $3.50/GPU/hr, H100 from $3.08/GPU/hr. Reserved (3+ months): H200 from $2.30/GPU/hr (34% savings), H100 from $2.50/GPU/hr (30% savings). Volume discounts available for enterprise.',
        },
        {
          q: 'How do I verify attestation?',
          a: "Use our attestation API or open-source verification tools. You'll receive attestation reports from both Intel and NVIDIA that you can verify independently. We also provide a public PCCS server at https://pccs.phala.network for quote verification.",
        },
      ],
    },
  ],
}

// H200-specific content
export const h200Content = {
  hero: {
    badge: 'NVIDIA H200 Tensor Core',
    headline: 'Immediate Access to NVIDIA H200 GPUs',
    subheadline:
      "From a single GPU to thousands. Industry's largest GPU memory with complete Intel TDX + NVIDIA TEE protection. On-demand or reserved pricing.",
    features: [
      '141GB HBM3e Memory',
      '4.8 TB/s Bandwidth',
      '2x Faster vs H100',
      'Full-Stack TEE',
    ],
  },
  technicalSpecs: {
    title: 'Industry-Leading Specifications',
    subtitle: 'Most powerful AI GPU with full-stack TEE protection',
    specs: [
      {
        label: '141GB',
        sublabel: 'HBM3e Memory',
        description: "Industry's largest GPU memory",
      },
      {
        label: '4.8TB/s',
        sublabel: 'Memory Bandwidth',
        description: '1.4x faster than H100',
      },
      {
        label: 'Full TEE',
        sublabel: 'Intel TDX + NVIDIA CC',
        description: 'Complete hardware isolation',
      },
      {
        label: 'Up to 2x Faster',
        sublabel: 'LLM inference vs H100',
        description: 'Real-world benchmarks',
      },
      {
        label: 'Dual Attestation',
        sublabel: 'Intel + NVIDIA reports',
        description: 'Cryptographic proof',
      },
    ],
  },
  pricing: {
    onDemand: {
      price: '$3.50',
      features: [
        'Scale instantly from 1-8 GPUs',
        'Pay only for what you use',
        'Full-stack TEE included',
        'US-West & India regions',
      ],
    },
    reserved: {
      price: '$2.30',
      badge: 'SAVE 34%',
      description: '3+ month commitment',
      features: [
        'Volume discounts available',
        'Guaranteed GPU availability',
        'Custom configurations',
        'Enterprise SLA & support',
      ],
    },
  },
}

// H100-specific content
export const h100Content = {
  hero: {
    badge: 'NVIDIA H100 Tensor Core',
    headline: 'Enterprise AI with H100 GPUs',
    subheadline:
      'Proven performance meets complete security. Deploy H100 GPUs with Intel TDX + NVIDIA Confidential Computing for enterprise workloads.',
    features: [
      '80GB HBM3 Memory',
      'Proven Performance',
      '9x Faster Training',
      'Full-Stack TEE',
    ],
  },
  technicalSpecs: {
    title: 'Enterprise-Grade Performance',
    subtitle: 'Battle-tested GPU with full-stack TEE protection',
    specs: [
      {
        label: '80GB',
        sublabel: 'HBM3 Memory',
        description: 'Proven for enterprise AI',
      },
      {
        label: '3TB/s',
        sublabel: 'Memory Bandwidth',
        description: 'Fast data access',
      },
      {
        label: 'Full TEE',
        sublabel: 'Intel TDX + NVIDIA CC',
        description: 'Complete hardware isolation',
      },
      {
        label: '9x Faster',
        sublabel: 'AI training vs A100',
        description: 'Real-world performance',
      },
      {
        label: 'Dual Attestation',
        sublabel: 'Intel + NVIDIA reports',
        description: 'Cryptographic verification',
      },
    ],
  },
  pricing: {
    onDemand: {
      price: '$3.08',
      features: [
        'Scale from 1-2 GPUs instantly',
        'No long-term commitment',
        'Full-stack TEE included',
        'US-West region',
      ],
    },
    reserved: {
      price: '$2.50',
      badge: 'SAVE 30%',
      description: '3+ month commitment',
      features: [
        'Enterprise volume discounts',
        'Priority GPU allocation',
        'Custom memory configurations',
        'Dedicated support team',
      ],
    },
  },
}
