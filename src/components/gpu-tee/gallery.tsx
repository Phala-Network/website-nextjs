'use client'

import { useEffect, useRef, useState } from 'react'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const items = [
  {
    title: 'H200',
    subtitle: 'NVIDIA H200 Tensor Core GPU',
    description: (
      <>
        <p>Most powerful AI GPU with full-stack TEE protection:</p>
        <ul className="my-4 ml-6 list-disc">
          <li>141GB HBM3e memory - largest GPU memory available</li>
          <li>4.8 TB/s bandwidth - 1.4x faster than H100</li>
          <li>Intel TDX + NVIDIA CC for complete isolation</li>
        </ul>
        <p>Best for: Large model training, high-throughput inference</p>
      </>
    ),
    note: 'Starting at $2.30/GPU/hour with reserved pricing',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
    category: 'H200',
  },
  {
    title: 'H100',
    subtitle: 'NVIDIA H100 Tensor Core GPU',
    description: (
      <>
        <p>Enterprise workhorse for AI workloads:</p>
        <ul className="my-4 ml-6 list-disc">
          <li>80GB HBM3 memory</li>
          <li>Up to 9x faster AI training vs previous gen</li>
          <li>Full-stack TEE with dual attestation</li>
        </ul>
        <p>Best for: Production inference, model fine-tuning</p>
      </>
    ),
    note: 'Available in US-East, US-West, and global regions',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg',
    category: 'H100',
  },
  {
    title: 'B200',
    subtitle: 'NVIDIA B200 Tensor Core GPU',
    description: (
      <>
        <p>Next-generation Blackwell architecture:</p>
        <ul className="my-4 ml-6 list-disc">
          <li>2nd gen Transformer Engine</li>
          <li>Advanced confidential computing capabilities</li>
          <li>Optimized for multi-trillion parameter models</li>
        </ul>
        <p>Best for: Cutting-edge AI research, massive scale</p>
      </>
    ),
    note: 'Contact sales for availability and custom configurations',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg',
    category: 'B200',
  },
]

const GpuTeeGallery = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(items[0].category)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  })

  useEffect(() => {
    const currentIndex = items.findIndex((item) => item.category === current)
    const activeTab = tabRefs.current[currentIndex]

    if (activeTab) {
      const { offsetWidth, offsetLeft } = activeTab
      setIndicatorStyle({
        width: offsetWidth,
        left: offsetLeft,
      })
    }
  }, [current])

  useEffect(() => {
    if (!api) {
      return
    }

    const currentIndex = items.findIndex((item) => item.category === current)
    api.scrollTo(currentIndex)

    const onSelect = () => {
      const idx = api.selectedScrollSnap()
      setCurrent(items[idx].category)
    }
    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api, current])

  return (
    <section className="overflow-hidden py-32">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            GPU Configuration Showcase
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our GPU offerings with full-stack TEE protection
          </p>
        </div>
        <Carousel
          setApi={setApi}
          className="[&>div[data-slot=carousel-content]]:overflow-visible"
        >
          <div className="flex items-center justify-between">
            <Tabs
              value={current}
              onValueChange={setCurrent}
              className="mb-8 flex justify-center"
            >
              <TabsList className="relative h-auto gap-6 bg-background">
                {items.map((item, idx) => (
                  <TabsTrigger
                    key={idx}
                    ref={(el) => {
                      tabRefs.current[idx] = el
                    }}
                    value={item.category}
                    className="text-base transition-all duration-700 ease-out [&[data-state=active]]:shadow-none"
                  >
                    {item.category}
                  </TabsTrigger>
                ))}
                <div
                  className="absolute bottom-0 h-0.5 bg-primary transition-all duration-700 ease-out"
                  style={{
                    width: `${indicatorStyle.width}px`,
                    left: `${indicatorStyle.left}px`,
                  }}
                />
              </TabsList>
            </Tabs>
            <div className="hidden items-center gap-4 sm:flex">
              <CarouselPrevious className="static size-10 translate-0" />
              <CarouselNext className="static size-10 translate-0" />
            </div>
          </div>
          <CarouselContent className="max-w-4xl">
            {items.map((item, idx) => (
              <CarouselItem key={idx} className="w-fit max-w-4xl">
                <div className="grid h-full max-w-4xl gap-10 rounded-xl border border-border p-6 shadow-sm select-none sm:p-10 md:max-h-[450px] md:grid-cols-2 lg:gap-20">
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <p className="mb-2 text-sm font-semibold text-primary">
                        {item.subtitle}
                      </p>
                      <h2 className="text-2xl font-medium sm:text-4xl">
                        {item.title}
                      </h2>
                      <div className="mt-4 text-sm text-muted-foreground sm:mt-6">
                        {item.description}
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground sm:mt-6">
                      {item.note}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-2">
                    <img
                      src={item.image}
                      alt="GPU configuration"
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export { GpuTeeGallery }
