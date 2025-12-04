'use client'

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CircleAlert,
  Lock,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { type Icon, iconMap, icons, type Model } from '@/lib/ai-models'

const thumbnails: Icon[] = ['openai', 'google', 'deepseek', 'meta', 'qwen']

const ModelCard = ({ model }: { model: Model }) => (
  <a
    href={`https://redpill.ai/models/${model.slug}`}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="bg-background w-[260px] h-[380px] flex-shrink-0 overflow-hidden rounded-sm flex flex-col p-6 relative">
      {/* Logo/Icon with Lock Badge */}
      <div className="bg-background rounded-full size-16 flex items-center justify-center border mb-6 sm:mb-12 xl:mb-20 shrink-0 relative">
        <Avatar className="size-10">
          <AvatarImage
            src={
              icons.find((icon) =>
                model.name.toLowerCase().includes(icon.name.toLowerCase()),
              )?.icon
            }
            alt={model.name}
          />
          <AvatarFallback>
            {model.provider.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-0.5 -right-0.5 bg-card border rounded-full p-1">
          <Lock className="size-3 text-primary" />
        </div>
      </div>

      {/* Content - grows to fill available space */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="font-semibold text-lg leading-7 mb-3 xl:text-xl xl:leading-7">
          {model.name}
        </div>

        {/* Context */}
        <div className="text-sm leading-5 font-medium mb-3">
          {model.contextLength >= 1000000
            ? `${(model.contextLength / 1000000).toFixed(1)}M context`
            : `${(model.contextLength / 1000).toFixed(0)}K context`}
        </div>

        {/* Pricing */}
        <div className="space-y-1 mb-6">
          {model.promptPrice && model.promptPrice !== '0' && (
            <div className="text-sm leading-5 text-muted-foreground">
              ${(parseFloat(model.promptPrice) * 1000000).toFixed(2)}/M input
              tokens
            </div>
          )}
          {model.completionPrice && model.completionPrice !== '0' && (
            <div className="text-sm leading-5 text-muted-foreground">
              ${(parseFloat(model.completionPrice) * 1000000).toFixed(2)}/M
              output tokens
            </div>
          )}
        </div>

        {/* Encrypted Badge */}
        {model.verifiable && (
          <div className="mt-auto">
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 border border-green-200 text-xs leading-4 font-medium text-green-700">
              <Lock className="size-3" />
              Encrypted
            </div>
          </div>
        )}
      </div>
    </div>
  </a>
)

interface ConfidentialAIProps {
  models: Model[]
}

export default function ConfidentialAI({ models }: ConfidentialAIProps) {
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
    <section className="py-24 container">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
        <h2 className="font-display mb-2 text-center text-3xl leading-none font-semibold text-balance lg:text-4xl">
          Confidential AI
        </h2>
        <p className="text-center text-muted-foreground font-display text-lg leading-7 md:text-xl font-medium text-balance">
          Pre-configured AI models ready to deploy on hardware-secured
          GPU servers for instant, private computing.
        </p>
      </div>
      <div className="mx-auto mt-12 flex grid-cols-1 flex-col gap-5 lg:grid lg:grid-cols-7">
        <div className="col-span-7 grid overflow-hidden rounded-lg bg-card sm:grid-cols-2 lg:grid-cols-[30rem_1fr]">
          <div className="flex flex-col justify-between p-8 lg:p-12">
            <div>
              <div className="mb-4 text-xs leading-4 text-muted-foreground lg:text-base lg:leading-6">
                CONFIDENTIAL AI MODELS
              </div>
              <h3 className="font-display mb-2 text-xl leading-7 font-semibold lg:text-3xl lg:leading-none">
                <span className="text-muted-foreground">Secure AI models</span>{' '}
                ready to use
              </h3>
              <p className="text-sm leading-5 text-muted-foreground lg:text-base lg:leading-6 xl:text-lg xl:leading-7">
                Access pre-configured confidential AI models with complete
                privacy protection.
              </p>
              <div className="flex flex-wrap -space-x-2 mt-4">
                {thumbnails.map((icon) => (
                  <Avatar
                    key={icon}
                    className="size-8 bg-background p-1 border-2"
                  >
                    <AvatarImage src={iconMap.get(icon)} alt={icon} />
                  </Avatar>
                ))}
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <Button variant="outline" asChild>
                <Link href="/confidential-ai-models">
                  Explore models
                  <ChevronRight className="ml-1 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-300 to-blue-400 relative overflow-hidden py-4 order-first w-full sm:order-last">
            <div className="relative">
              {models.length === 0 ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-white text-lg">No models available</div>
                </div>
              ) : (
                <Carousel
                  setApi={setCarouselApi}
                  opts={{
                    align: 'start',
                    dragFree: true,
                  }}
                >
                  <CarouselContent className="ml-0">
                    {models.map((model) => (
                      <CarouselItem
                        key={model.id}
                        className="basis-auto pl-4 last:pr-4"
                      >
                        <ModelCard model={model} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              )}
            </div>
            {/* Scroll buttons */}
            {models.length > 0 && (
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
            )}
          </div>
        </div>
        <Link
          href="/gpu-tee"
          className="group relative overflow-hidden rounded-lg bg-card lg:col-span-3"
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
            src="/home/gpu-tee.png"
            alt="NVIDIA H200 GPU TEE"
            className="h-64 w-full object-cover bg-card select-none"
          />
          <div className="p-8 lg:p-12">
            <div className="mb-4 text-xs leading-4 text-muted-foreground lg:text-base lg:leading-6">
              NVIDIA H200 GPU TEE
            </div>
            <h3 className="font-display mb-2 text-xl leading-7 font-semibold lg:text-3xl lg:leading-none">
              <span className="text-muted-foreground">
                Deploy Confidential GPUs,
              </span>{' '}
              On-Demand
            </h3>
          </div>
        </Link>
        <div className="min-h-96 flex flex-col justify-between overflow-hidden rounded-lg bg-card p-8 lg:col-span-4 lg:p-12">
          <div className="mb-4 text-xs leading-4 text-muted-foreground lg:text-base lg:leading-6">
            PERFORMANCE VS PRIVACY
          </div>
          <h3 className="font-display text-xl leading-7 font-semibold lg:text-3xl lg:leading-none">
            100% privacy{' '}
            <span className="text-muted-foreground">
              with only 5% performance trade-off
            </span>
          </h3>

          <div className="flex items-center w-full flex-1">
            <div className="w-full">
              <table className="w-full border-collapse [&_td,th]:py-3 xl:[&_td,th]:py-4 [&_td,th]:px-2 xl:[&_td,th]:px-4">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-sm leading-5 font-medium text-muted-foreground text-left pb-2 min-w-25 xl:min-w-32">
                      Solution
                    </th>
                    <th className="text-sm leading-5 font-medium text-muted-foreground text-center pb-2 w-1/2">
                      Performance
                    </th>
                    <th className="text-sm leading-5 font-medium text-muted-foreground text-center pb-2 w-1/2">
                      Privacy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="font-medium text-sm leading-5">Native GPU</td>
                    <td>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs leading-4">
                          <span className="text-muted-foreground max-sm:hidden">
                            Native
                          </span>
                          <span className="font-medium ml-auto">100%</span>
                        </div>
                        <div className="bg-blue-400 h-2 rounded-full"></div>
                      </div>
                    </td>
                    <td>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs leading-4">
                          <div className="text-muted-foreground flex items-center gap-1 max-sm:hidden">
                            <span className="hidden sm:inline">
                              Data exposed
                            </span>
                            <CircleAlert size={10} />
                          </div>
                          <span className="font-medium ml-auto">0%</span>
                        </div>
                        <div className="bg-primary/20 h-2 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td>
                      <div className="font-medium text-sm leading-5 flex items-center gap-1">
                        {/** biome-ignore lint/performance/noImgElement: svg */}
                        <img
                          src="/home/icon.svg"
                          alt="GPU TEE"
                          className="size-4 shrink-0"
                        />
                        <span>GPU TEE</span>
                      </div>
                    </td>
                    <td>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs leading-4">
                          <span className="text-muted-foreground max-sm:hidden">
                            Nearly native
                          </span>
                          <span className="font-medium ml-auto">95%</span>
                        </div>
                        <div className="bg-blue-100 h-2 rounded-full">
                          <div className="bg-blue-400 h-2 rounded-full w-[95%]"></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs leading-4">
                          <span className="text-muted-foreground max-sm:hidden">
                            Fully private
                          </span>
                          <span className="font-medium ml-auto">100%</span>
                        </div>
                        <div className="bg-primary h-2 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-2">
            <Button variant="outline" asChild>
              <a
                href="https://arxiv.org/pdf/2409.03992"
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
    </section>
  )
}
