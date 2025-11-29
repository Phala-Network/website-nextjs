export type Model = {
  id: number
  slug: string
  name: string
  provider: string
  description: string
  contextLength: number
  promptPrice: string
  completionPrice: string
  imagePrice: string
  requestPrice: string
  createdAt: string
  updatedAt: string
  enabled: boolean
  verifiable: boolean
}

type ServiceApiModel = {
  id: string
  name: string
  created: number
  description: string
  specs: {
    context_length: number
  }
  providers: string[]
  pricing: {
    prompt: string
    completion: string
    image: string
    request: string
  }
}

type ServiceApiResponse = {
  data: ServiceApiModel[]
}

// GPU TEE infrastructure providers using NVIDIA Confidential Compute
const GPU_TEE_PROVIDERS = ['phala', 'nearai', 'tinfoil']

export const icons = [
  {
    name: 'openai',
    icon: '/confidential-ai-models/openai.svg',
  },
  {
    name: 'claude',
    icon: '/confidential-ai-models/claude.svg',
  },
  {
    name: 'gemini',
    icon: '/confidential-ai-models/gemini.svg',
  },
  {
    name: 'meta',
    icon: '/confidential-ai-models/meta.svg',
  },
  {
    name: 'qwen',
    icon: '/confidential-ai-models/qwen.svg',
  },
  {
    name: 'deepseek',
    icon: '/confidential-ai-models/deepseek.svg',
  },
  {
    name: 'mistral',
    icon: '/confidential-ai-models/mistral.svg',
  },
  {
    name: 'anthropic',
    icon: '/confidential-ai-models/anthropic.svg',
  },
  {
    name: 'openrouter',
    icon: '/confidential-ai-models/openrouter.svg',
  },
  {
    name: 'google',
    icon: '/confidential-ai-models/google.svg',
  },
  {
    name: 'huggingface',
    icon: '/confidential-ai-models/huggingface.svg',
  },
  {
    name: 'phala',
    icon: '/confidential-ai-models/phala.svg',
  },
  {
    name: 'redpill',
    icon: '/confidential-ai-models/redpill.svg',
  },
] as const

export const iconMap = new Map(icons.map((icon) => [icon.name, icon.icon]))

export type Icon = (typeof icons)[number]['name']

export const fetchAiModels = async (limit: number = 20, skip: number = 0) => {
  const res = await fetch('https://service.redpill.ai/api/models', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  })
  const apiData: ServiceApiResponse = await res.json()

  // Filter models that have GPU TEE providers (phala, nearai, tinfoil)
  const gpuTeeModels = apiData.data.filter((model) =>
    model.providers.some((provider) => GPU_TEE_PROVIDERS.includes(provider)),
  )

  // Sort by created timestamp (newest first)
  const sortedModels = gpuTeeModels.sort((a, b) => b.created - a.created)

  // Transform API response to match expected Model type
  const models: Model[] = sortedModels.map((apiModel, index) => {
    // Use the original model ID as slug (e.g., "meta-llama/llama-3.3-70b-instruct")
    const slug = apiModel.id

    // Extract provider from model name
    let provider: string

    if (apiModel.name.includes(':')) {
      // Format: "OpenAI: GPT OSS 20B" -> provider="OpenAI"
      provider = apiModel.name.split(':')[0]?.trim() || 'Phala'
    } else if (apiModel.name.includes('/')) {
      // Format: "deepseek/deepseek-chat-v3-0324" -> provider="deepseek"
      provider = apiModel.name.split('/')[0]?.trim() || 'Phala'
    } else {
      // Fallback: extract provider from first word, removing version numbers
      // e.g., "Qwen2.5 7B Instruct" -> "Qwen"
      const firstWord = apiModel.name.split(' ')[0]?.trim() || 'Phala'
      // Remove version numbers from provider (e.g., "Qwen2.5" -> "Qwen")
      const providerClean = firstWord.replace(/[0-9.]+$/, '')
      provider = providerClean || firstWord
    }

    return {
      id: index + 1,
      slug,
      name: apiModel.name,
      provider,
      description: apiModel.description,
      contextLength: apiModel.specs.context_length,
      promptPrice: apiModel.pricing.prompt,
      completionPrice: apiModel.pricing.completion,
      imagePrice: apiModel.pricing.image,
      requestPrice: apiModel.pricing.request,
      createdAt: new Date(apiModel.created * 1000).toISOString(),
      updatedAt: new Date(apiModel.created * 1000).toISOString(),
      enabled: true,
      verifiable: true,
    }
  })

  // Apply pagination
  return models.slice(skip, skip + limit)
}
