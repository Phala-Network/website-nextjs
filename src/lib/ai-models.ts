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

export const fetchAiModels = async (limit: number = 20, skip: number = 0) => {
  const res = await fetch('https://api.redpill.ai/v1/models')
  const apiData: ApiResponse = await res.json()

  // Filter only phala models
  const phalaModels = apiData.data.filter(model => model.id.startsWith('phala/'))

  // Transform API response to match expected Model type
  const models: Model[] = phalaModels.map((apiModel, index) => {
    // Extract model name from ID (e.g., "phala/gpt-oss-20b" -> "gpt-oss-20b")
    const modelName = apiModel.id.replace('phala/', '')

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
      // Fallback: use model name as-is
      provider = 'Phala'
      slug = `phala/${modelName}`
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
