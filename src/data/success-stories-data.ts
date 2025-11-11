const story1 = '/home/story-1.png'
const story2 = '/home/story-2.png'
const story3 = '/home/story-3.png'
const story4 = '/home/story-4.png'
const story5 = '/home/story-5.png'

export interface SuccessStory {
  id: string
  slug: string
  category: string
  title: string
  stats: string[]
  bgColor: string
  bgImage: string
  isDark?: boolean
  description: string
  pdfPath: string
}

export const successStories: SuccessStory[] = [
  {
    id: '1',
    slug: 'financial-services',
    category: 'Financial\nServices',
    title: 'Major Investment Bank',
    stats: ['• Risk Management AI', '• $2B+ Assets Under Management'],
    bgColor: 'bg-[#f3f3f3]',
    bgImage: story1,
    description:
      "Phala enabled us to process sensitive trading data with AI while maintaining complete regulatory compliance. We've reduced compliance costs by 40% while improving model accuracy.",
    pdfPath:
      '/success-stories-reports/financial-services-ai-with-compliance.pdf',
  },
  {
    id: '2',
    slug: 'healthcare-research',
    category: 'Healthcare\nResearch',
    title: 'Research Consortium',
    stats: ['• 5 Hospital Network', '• 100K+ Patient Records'],
    bgColor: 'bg-[#a7518d]',
    bgImage: story2,
    isDark: true,
    description:
      'Multi-party collaboration on patient data without privacy compromise. Accelerated drug discovery by 60% while maintaining HIPAA compliance.',
    pdfPath: '/success-stories-reports/secure-healthcare-ai-with-phala.pdf',
  },
  {
    id: '3',
    slug: 'ai-saas-platform',
    category: 'AI SaaS\nPlatform',
    title: 'Enterprise Software Company',
    stats: ['• B2B AI Platform', '• 50+ Enterprise Clients'],
    bgColor: 'bg-[#5159a1]',
    bgImage: story3,
    isDark: true,
    description:
      "Phala's confidential AI helped us land Fortune 500 clients who required verifiable data protection. Increased enterprise sales by 300%.",
    pdfPath:
      '/success-stories-reports/privacy-computing-for-ai-saas-applications.pdf',
  },
  {
    id: '4',
    slug: 'decentralized-ai',
    category: 'Decentralized\nAI',
    title: 'DeFi Protocol',
    stats: ['• Autonomous Agents', '• $50M+ TVL'],
    bgColor: 'bg-[#3e3e3e]',
    bgImage: story4,
    description:
      'Built autonomous trading agents with verifiable execution. Users trust our AI because they can verify every decision on-chain.',
    pdfPath: '/success-stories-reports/2025RealCodeForRealdAGI.pdf',
  },
  {
    id: '5',
    slug: 'legal',
    category: 'Legal\nAI',
    title: 'Law Firm & Legal Tech',
    stats: ['• Multi-Dimensional Benchmarking', '• LLM Evaluation Framework'],
    bgColor: 'bg-[#2c5f7c]',
    bgImage: story5,
    isDark: true,
    description:
      'Comprehensive evaluation of Large Language Models for legal practice. Benchmarking framework for assessing LLM capabilities across multiple dimensions of legal work.',
    pdfPath: '/success-stories-reports/legal-ai-llm-evaluation.pdf',
  },
]

export const getSuccessStoryBySlug = (
  slug: string,
): SuccessStory | undefined => {
  return successStories.find((story) => story.slug === slug)
}
