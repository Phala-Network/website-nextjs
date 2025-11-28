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

type ApiModel = {
  id: string
  name: string
  created: number
  context_length: number
  pricing: {
    prompt: string
    completion: string
    image: string
    request: string
  }
  description: string
}

type ApiResponse = {
  data: ApiModel[]
}

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

// GPU TEE infrastructure providers using NVIDIA Confidential Compute
const GPU_TEE_INFRA_PROVIDERS = ['phala/', 'nearai/', 'tinfoil/']

// Open-source model providers that can run on GPU TEE
const GPU_TEE_MODEL_PROVIDERS = ['deepseek/', 'qwen/', 'google/', 'meta-llama/', 'nousresearch/']

export const fetchAiModels = async (limit: number = 20, skip: number = 0) => {
  const res = await fetch('https://api.redpill.ai/v1/models', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  })
  const apiData: ApiResponse = await res.json()

  // Filter models from GPU TEE providers (infrastructure + open-source models)
  const allTeeProviders = [...GPU_TEE_INFRA_PROVIDERS, ...GPU_TEE_MODEL_PROVIDERS]
  const gpuTeeModels = apiData.data.filter((model) =>
    allTeeProviders.some((prefix) => model.id.startsWith(prefix)),
  )

  // Sort by created timestamp (newest first)
  const sortedModels = gpuTeeModels.sort((a, b) => b.created - a.created)

  // Transform API response to match expected Model type
  const models: Model[] = sortedModels.map((apiModel, index) => {
    // Extract model name from ID (e.g., "phala/gpt-oss-20b" -> "gpt-oss-20b")
    const modelName = apiModel.id.replace(/^[^/]+\//, '')

    // Extract provider and build slug
    let provider: string
    let slug: string

    if (apiModel.name.includes(':')) {
      // Format: "OpenAI: GPT OSS 20B" -> provider="OpenAI", slug="openai/gpt-oss-20b"
      provider = apiModel.name.split(':')[0]?.trim() || 'Phala'
      slug = `${provider.toLowerCase()}/${modelName}`
    } else if (apiModel.name.includes('/')) {
      // Format: "deepseek/deepseek-chat-v3-0324" -> provider="deepseek", slug="deepseek/deepseek-chat-v3-0324"
      provider = apiModel.name.split('/')[0]?.trim() || 'Phala'
      slug = apiModel.name.toLowerCase()
    } else {
      // Fallback: extract provider from first word, removing version numbers
      // e.g., "Qwen2.5 7B Instruct" -> "qwen"
      const firstWord = apiModel.name.split(' ')[0]?.trim() || 'Phala'
      // Remove version numbers from provider (e.g., "Qwen2.5" -> "Qwen")
      const providerClean = firstWord.replace(/[0-9.]+$/, '')
      provider = providerClean || firstWord
      slug = `${providerClean.toLowerCase()}/${modelName}`
    }

    return {
      id: index + 1,
      slug,
      name: apiModel.name,
      provider,
      description: apiModel.description,
      contextLength: apiModel.context_length,
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
