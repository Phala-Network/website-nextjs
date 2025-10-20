'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
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
    title: (
      <>
        <span className="bg-gradient-to-b from-foreground/20 to-muted-foreground bg-clip-text text-transparent">
          NVIDIA H200
        </span>
        <br />
        Flagship Performance
      </>
    ),
    description: (
      <>
        <p>The most powerful AI GPU with complete TEE protection:</p>
        <ul className="my-4 ml-6 list-disc">
          <li>141GB HBM3e Memory</li>
          <li>4.8 TB/s Bandwidth</li>
          <li>2x faster vs H100</li>
          <li>Intel TDX + NVIDIA CC</li>
        </ul>
        <p>
          Scale 1-8 GPUs. Deploy instantly or save 27% with reserved pricing.
        </p>
      </>
    ),
    note: 'On-demand from $3.50/GPU/hr or reserved from $2.56/GPU/hr with 6-month commitment.',
    image: '/h200-small.png',
    category: 'H200',
    link: '/gpu-tee/h200',
  },
  {
    title: (
      <>
        <span className="bg-gradient-to-b from-foreground/20 to-muted-foreground bg-clip-text text-transparent">
          NVIDIA H100
        </span>
        <br />
        Enterprise Standard
      </>
    ),
    description: (
      <>
        <p>Battle-tested GPU for enterprise AI workloads:</p>
        <ul className="my-4 ml-6 list-disc">
          <li>80GB HBM3 Memory</li>
          <li>3 TB/s Bandwidth</li>
          <li>9x faster vs A100</li>
          <li>Intel TDX + NVIDIA CC</li>
        </ul>
        <p>Full-stack TEE protection. Perfect for training on private data.</p>
      </>
    ),
    note: 'On-demand from $3.08/GPU/hr or reserved from $2.50/GPU/hr with volume discounts.',
    image: '/h100-small.png',
    category: 'H100',
    link: '/gpu-tee/h100',
  },
  {
    title: (
      <>
        <span className="bg-gradient-to-b from-foreground/20 to-muted-foreground bg-clip-text text-transparent">
          NVIDIA B200
        </span>
        <br />
        Available Now
      </>
    ),
    description: (
      <>
        <p>
          Next-generation Blackwell architecture with revolutionary performance:
        </p>
        <ul className="my-4 ml-6 list-disc">
          <li>192GB HBM3e Memory</li>
          <li>8 TB/s Bandwidth</li>
          <li>15x faster inference vs H100</li>
          <li>Intel TDX + NVIDIA CC</li>
        </ul>
        <p>
          Scale 1-8 GPUs. Deploy instantly or save 29% with reserved pricing.
        </p>
      </>
    ),
    note: 'On-demand from $7.99/GPU/hr or reserved from $5.63/GPU/hr with 6-month commitment.',
    image: '/b200-small.png',
    category: 'B200',
    link: '/gpu-tee/b200',
  },
]

const Gallery16 = () => {
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
    <section className="overflow-hidden py-24">
      <div className="container">
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
                <div className="grid h-full max-w-4xl gap-10 rounded-xl border border-border bg-white p-6 shadow-sm select-none sm:p-10 md:min-h-[500px] md:grid-cols-2 lg:gap-20">
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl font-medium leading-none sm:text-4xl">
                        {item.title}
                      </h2>
                      <div className="mt-4 font-display text-sm leading-5 text-muted-foreground sm:mt-6">
                        {item.description}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs text-muted-foreground">
                        {item.note}
                      </p>
                      {item.link ? (
                        <Button asChild size="lg" className="w-full">
                          <Link href={item.link}>
                            Learn More About {item.category} →
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="w-full"
                        >
                          <Link href="https://phala.com/contact">
                            Request Early Access
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center overflow-hidden rounded-xl bg-muted/30">
                    <img
                      src={item.image}
                      alt={`${item.category} GPU`}
                      className="h-[600px] w-[800px] object-cover"
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

export { Gallery16 }
