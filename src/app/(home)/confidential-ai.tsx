'use client'

import { ArrowLeft, ArrowRight, ChevronRight, CircleAlert } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

interface ModelCard {
  id: string
  name: string
  logo: string
  context: string
  inputPrice: string
  outputPrice: string
  updatedDate: string
}

const icons = [
  {
    name: 'OpenAI',
    icon: '/home/openai.svg',
  },
  {
    name: 'Claude',
    icon: '/home/claude-color.svg',
  },
  {
    name: 'Gemini',
    icon: '/home/gemini-color.svg',
  },
  {
    name: 'Meta',
    icon: '/home/meta-color.svg',
  },
  {
    name: 'Qwen',
    icon: '/home/qwen-color.svg',
  },
  {
    name: 'DeepSeek',
    icon: '/home/deepseek-color.svg',
  },
  {
    name: 'Mistral',
    icon: '/home/mistral-color.svg',
  },
]

const modelCards: ModelCard[] = [
  {
    id: 'phala/gpt-oss-120b',
    name: 'GPT-OSS-120B',
    logo: '/home/openai.svg',
    context: '131K context',
    inputPrice: '$0.2/M input tokens',
    outputPrice: '$0.6/M output tokens',
    updatedDate: 'Updated Aug 6',
  },
  {
    id: 'phala/qwen3-coder',
    name: 'Qwen3 Coder',
    logo: '/home/qwen-color.svg',
    context: '262K context',
    inputPrice: '$1.5/M input tokens',
    outputPrice: '$1.6/M output tokens',
    updatedDate: 'Updated Aug 1',
  },
  {
    id: 'anthropic/claude-sonnet-4',
    name: 'Claude Sonnet 4',
    logo: '/home/claude-color.svg',
    context: '200K context',
    inputPrice: '$3/M input tokens',
    outputPrice: '$15/M output tokens',
    updatedDate: 'Updated May 25',
  },
  {
    id: 'phala/llama-3.3-70b-instruct',
    name: 'Llama 3.3 70B Instruct',
    logo: '/home/meta-color.svg',
    context: '131K context',
    inputPrice: '$0.12/M input tokens',
    outputPrice: '$0.35/M output tokens',
    updatedDate: 'Updated Dec 6',
  },
  {
    id: 'phala/deepseek-chat-v3-0324',
    name: 'DeepSeek Chat V3 0324',
    logo: '/home/deepseek-color.svg',
    context: '163K context',
    inputPrice: '$0.49/M input tokens',
    outputPrice: '$1.14/M output tokens',
    updatedDate: 'Updated Jun 25',
  },
]

const ModelCard = ({ model }: { model: ModelCard }) => (
  <a
    href={`https://redpill.ai/models/${model.id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="bg-background w-[260px] flex-shrink-0 overflow-hidden rounded-sm flex flex-col p-6 relative">
      {/* Logo/Icon */}
      <div className="bg-background rounded-full size-16 flex items-center justify-center border mb-6 sm:mb-12 shrink-0">
        {/** biome-ignore lint/performance/noImgElement: svg */}
        <img alt={model.name} className="size-10" src={model.logo} />
      </div>

      {/* Content - grows to fill available space */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="font-semibold text-lg mb-3">{model.name}</div>

        {/* Context */}
        <div className="text-sm font-medium mb-3">{model.context}</div>

        {/* Pricing */}
        <div className="space-y-1 mb-6">
          <div className="text-xs text-muted-foreground">
            {model.inputPrice}
          </div>
          <div className="text-xs text-muted-foreground">
            {model.outputPrice}
          </div>
        </div>
        <div className="text-xs text-muted-foreground">{model.updatedDate}</div>
      </div>
    </div>
  </a>
)

export default function ConfidentialAI() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!carouselApi) {
      return
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
    }
    updateSelection()
    carouselApi.on('select', updateSelection)
    return () => {
      carouselApi.off('select', updateSelection)
    }
  }, [carouselApi])

  return (
    <section className="py-24 max-w-5xl mx-auto">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-balance lg:text-4xl">
            Confidential AI
          </h2>
          <p className="text-center text-muted-foreground text-lg md:text-xl font-medium text-balance">
            Pre-configured secure AI models ready to deploy with
            hardware-secured GPU servers for instant, private AI computing.
          </p>
        </div>
        <div className="mx-auto mt-12 flex grid-cols-1 flex-col gap-6 lg:grid lg:grid-cols-7">
          <div className="col-span-7 grid overflow-hidden rounded-lg bg-muted sm:grid-cols-2 shadow">
            <div className="flex flex-col justify-between p-8 lg:p-12">
              <div>
                <div className="mb-4 text-xs text-muted-foreground">
                  CONFIDENTIAL AI MODELS
                </div>
                <h3 className="mb-2 text-xl font-semibold lg:text-2xl">
                  <span className="text-muted-foreground">
                    Secure AI models
                  </span>{' '}
                  ready to use
                </h3>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Access pre-configured confidential AI models with complete
                  privacy protection.
                </p>
                <div className="flex flex-wrap -space-x-2 mt-4">
                  {icons.map((icon) => (
                    <Avatar
                      key={icon.name}
                      className="size-8 bg-background p-1 border-2"
                    >
                      <AvatarImage src={icon.icon} />
                      <AvatarFallback className="text-xs">
                        {icon.name}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <Button variant="outline" asChild>
                  <a
                    href="https://redpill.ai/models"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore models
                    <ChevronRight className="ml-1 h-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-300 to-blue-400 relative overflow-hidden py-4 order-first w-full sm:order-last">
              <div className="relative">
                <Carousel
                  setApi={setCarouselApi}
                  opts={{
                    align: 'start',
                    dragFree: true,
                  }}
                >
                  <CarouselContent className="ml-0">
                    {modelCards.map((model) => (
                      <CarouselItem
                        key={model.id}
                        className="basis-auto pl-4 last:pr-4"
                      >
                        <ModelCard model={model} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              {/* Scroll buttons */}
              <div className="absolute bottom-8 right-4 flex gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    carouselApi?.scrollPrev()
                  }}
                  disabled={!canScrollPrev}
                  className="h-8 w-8 bg-white/90 hover:bg-white disabled:opacity-30 shadow-sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    carouselApi?.scrollNext()
                  }}
                  disabled={!canScrollNext}
                  className="h-8 w-8 bg-white/90 hover:bg-white disabled:opacity-30 shadow-sm"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <a
            href="https://cloud.phala.network/features/gpu-tee"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg bg-muted lg:col-span-3 shadow"
          >
            <Button
              variant="outline"
              size="sm"
              className="absolute top-7 right-10 transition-all duration-200 group-hover:opacity-100 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0"
            >
              <ChevronRight className="h-4" />
            </Button>
            <Image
              width={1520}
              height={852}
              src="/home/gpu.png"
              alt="NVIDIA H200 GPU TEE"
              className="max-h-72 w-full border-b object-cover bg-card select-none"
            />
            <div className="p-8 lg:p-12">
              <div className="mb-4 text-xs text-muted-foreground">
                NVIDIA H200 GPU TEE
              </div>
              <h3 className="mb-2 text-xl font-semibold lg:text-2xl">
                <span className="text-muted-foreground">
                  Deploy Confidential GPUs,
                </span>{' '}
                On-Demand
              </h3>
            </div>
          </a>
          <div className="flex flex-col justify-between overflow-hidden rounded-lg bg-muted p-8 lg:col-span-4 lg:p-12 shadow">
            <div>
              <div className="mb-4 text-xs text-muted-foreground">
                PERFORMANCE VS PRIVACY
              </div>
              <h3 className="mb-2 text-xl font-semibold lg:text-2xl">
                100% privacy{' '}
                <span className="text-muted-foreground">
                  with only 5% performance trade-off
                </span>
              </h3>

              <div className="mt-8 space-y-4">
                {/* Column Headers */}
                <div className="grid grid-cols-[80px_1fr_1fr] gap-3 sm:gap-8 pb-2 border-b">
                  <div className="text-sm font-medium text-muted-foreground">
                    Solution
                  </div>
                  <div className="text-sm font-medium text-muted-foreground text-center">
                    Performance
                  </div>
                  <div className="text-sm font-medium text-muted-foreground text-center">
                    Privacy
                  </div>
                </div>

                {/* Native GPU Row */}
                <div className="grid grid-cols-[80px_1fr_1fr] gap-3 sm:gap-8 pb-4 items-center border-b">
                  <div className="font-medium text-sm">Native GPU</div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground max-sm:hidden">
                        Native
                      </span>
                      <span className="font-medium ml-auto">100%</span>
                    </div>
                    <div className="bg-blue-400 h-2 rounded-full"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <div className="text-muted-foreground flex items-center gap-1 max-sm:hidden">
                        <span className="hidden sm:inline">Data exposed</span>
                        <CircleAlert size={10} />
                      </div>
                      <span className="font-medium ml-auto">0%</span>
                    </div>
                    <div className="bg-primary-200 h-2 rounded-full"></div>
                  </div>
                </div>

                {/* GPU TEE Row */}
                <div className="grid grid-cols-[80px_1fr_1fr] gap-3 sm:gap-8 pb-4 items-center">
                  <div className="font-medium text-sm flex items-center gap-1">
                    {/** biome-ignore lint/performance/noImgElement: svg */}
                    <img
                      src="/home/icon.svg"
                      alt="GPU TEE"
                      className="size-4"
                    />
                    <span>GPU TEE</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground max-sm:hidden">
                        Nearly native
                      </span>
                      <span className="font-medium ml-auto">95%</span>
                    </div>
                    <div className="bg-blue-100 h-2 rounded-full">
                      <div className="bg-blue-400 h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground max-sm:hidden">
                        Fully private
                      </span>
                      <span className="font-medium ml-auto">100%</span>
                    </div>
                    <div className="bg-primary-500 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <Button variant="outline" asChild>
                <a
                  href="https://cloud.phala.network/features/gpu-tee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
