'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const Hero230 = () => {
  const images = [
    '/solutions/agents/vijil.png',
    '/solutions/agents/elizaos banner.png',
    '/solutions/agents/near banner.png',
    '/solutions/agents/copilot.png',
    '/solutions/agents/nous.avif',
  ]
  const logos = [
    {
      id: 'eliza-os',
      description: 'ElizaOS',
      image: '/partnerships/eliza-os.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'near',
      description: 'NEAR',
      image: '/partnerships/near.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'newton',
      description: 'Newton',
      image: '/partnerships/newton.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'swarms',
      description: 'Swarms',
      image: '/partnerships/swarms.png',
      className: 'h-7 w-auto',
    },
    {
      id: 'theoriq',
      description: 'Theoriq',
      image: '/partnerships/Theoriq.png',
      className: 'h-7 w-auto',
    },
    {
      id: 'holoworld',
      description: 'Holoworld',
      image: '/partnerships/holoworld.png',
      className: 'h-7 w-auto',
    },
    {
      id: 'xnomad',
      description: 'xNomadAI',
      image: '/partnerships/xNomad.png',
      className: 'h-7 w-auto',
    },
    {
      id: 'morpheus',
      description: 'Morpheus',
      image: '/partnerships/morpheus.png',
      className: 'h-7 w-auto',
    },
    {
      id: 'flashbots',
      description: 'Flashbots',
      image: '/partnerships/flashbots.png',
      className: 'h-7 w-auto',
    },
    {
      id: 'nous-research',
      description: 'Nous Research',
      image: '/partnerships/nous-research.jpg',
      className: 'h-7 w-auto',
    },
  ]
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <Button
          variant="secondary"
          className="bg-muted/70 group flex w-fit items-center justify-center gap-3 rounded-full px-5 py-1"
        >
          <span className="bg-foreground size-2.5 rounded-full" />
          Hardware-Enforced Security
        </Button>
        <h1 className="font-display font-semibold text-foreground text-3xl leading-none sm:text-5xl md:text-6xl max-w-3xl">
          Build Safe, Private & <br /> Autonomous AI Agents
        </h1>
        <p className="text-muted-foreground/80 mt-3 max-w-xl">
          Deploy AI agents with cryptographic proofs, verifiable execution, and
          hardware-enforced privacy. From autonomous trading bots to personal
          assistants.
        </p>
        <div className="mb-12 mt-8 flex gap-4">
          <Button
            variant="secondary"
            className="group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            asChild
          >
            <a href="https://cloud.phala.network/templates?tag=agent">
              <span>Explore Running Apps</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </a>
          </Button>
          <Button
            variant="default"
            className="group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            asChild
          >
            <a href="https://cloud.phala.network">
              <span>Deploy</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </a>
          </Button>
        </div>

        <div className="relative mx-auto flex items-center justify-center">
          <Carousel
            plugins={[AutoScroll({ playOnInit: true })]}
            opts={{ loop: true, align: 'start' }}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="h-15 lg:basis-1/9 relative mr-6 flex basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3"
                >
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="bg-gradient-t o-r from-background absolute inset-y-0 left-0 w-32 to-transparent"></div>
          <div className="from-background absolute inset-y-0 right-0 w-32 bg-gradient-to-l to-transparent"></div>
        </div>
        <div className="relative mx-auto -mt-12 flex items-center justify-center">
          <Carousel opts={{ loop: true, align: 'start' }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="translate-y-18 relative flex basis-1/2 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="easeOut hover:-translate-y-18 mt-auto w-full overflow-hidden rounded-t-3xl border transition-all">
                    <img
                      src={image}
                      alt={image}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export { Hero230 }
