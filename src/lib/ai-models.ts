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

type Response<T> = {
  result: {
    data: {
      json: {
        data: T[]
      }
    }
  }
}

export const icons: { name: string; icon: string }[] = [
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
]

export const fetchAiModels = async (limit: number = 20, skip: number = 0) => {
  const res = await fetch(
    `https://redpill.ai/api/trpc/models.list?input=%7B%22json%22%3A%7B%22take%22%3A${limit}%2C%22skip%22%3A${skip}%2C%22keyword%22%3A%22%22%2C%22verifiable%22%3Afalse%7D%7D`,
  )
  const data: Response<Model> = await res.json()
  return data.result.data.json.data
}
