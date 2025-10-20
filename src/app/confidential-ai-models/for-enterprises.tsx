'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import {
  Globe,
  GlobeLock,
  MessagesSquare,
  PenTool,
  Search,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const features = [
  {
    title: 'Private Infrastructure',
    description: 'Private dedicated infrastructure for your AI workloads.',
    icon: <GlobeLock className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'Custom Models',
    description: 'Deploy your own custom AI models securely.',
    icon: <PenTool className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'Full Audit Trails',
    description: 'Complete compliance and audit documentation.',
    icon: <Search className="h-auto w-8 md:w-12" />,
  },
  {
    title: '24/7 Support',
    description: 'Dedicated enterprise support team.',
    icon: <MessagesSquare className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'Fast Performance',
    description: 'Optimized for speed and efficiency.',
    icon: <Zap className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'Secure Processing',
    description: 'Hardware-protected confidential computing.',
    icon: <ShieldCheck className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'Compliance Ready',
    description: 'Meet regulatory requirements easily.',
    icon: <Globe className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'Scalable Solution',
    description: 'Grow with your business needs.',
    icon: <Users className="h-auto w-8 md:w-12" />,
  },
]

const ForEnterprises = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid items-center gap-20 md:grid-cols-2">
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <Badge variant="outline">Enterprise</Badge>
            <h2 className="font-display text-3xl font-semibold leading-none md:text-4xl">
              Build Your Own PCC
            </h2>
            <p className="font-display text-muted-foreground leading-6 text-balance">
              Go beyond shared APIs. With our Confidential GPUs, you can deploy
              private, fully-audited AI clouds, tailored to your business or
              product. It's the same technology behind Apple's Private Compute
              Cloud (PCC), but more open and transparent. Now available for your
              own models and workloads.
            </p>
            <Button size="lg" asChild className="mt-4">
              <Link href="/contact">Talk to Experts</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:gap-7 lg:grid-cols-2">
            <Carousel
              opts={{
                loop: true,
                align: 'start',
              }}
              plugins={[
                AutoScroll({
                  speed: 0.7,
                }),
              ]}
              orientation="vertical"
              className="pointer-events-none relative lg:hidden"
            >
              <CarouselContent className="max-h-[600px]">
                {features.map((feature, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col rounded-xl border bg-background p-5 md:p-7">
                      {feature.icon}
                      <h3 className="font-display mt-5 mb-2.5 font-semibold leading-5 md:text-xl">
                        {feature.title}
                      </h3>
                      <p className="font-display text-sm leading-5 text-muted-foreground md:text-base md:leading-6">
                        {feature.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background"></div>
            </Carousel>
            <Carousel
              opts={{
                loop: true,
                align: 'start',
              }}
              plugins={[
                AutoScroll({
                  speed: 0.7,
                }),
              ]}
              orientation="vertical"
              className="pointer-events-none relative hidden lg:block"
            >
              <CarouselContent className="max-h-[600px]">
                {features
                  .slice(0, features.length / 2)
                  .map((feature, index) => (
                    <CarouselItem key={index}>
                      <div className="flex flex-col rounded-xl border bg-background p-4 md:p-7">
                        {feature.icon}
                        <h3 className="mt-5 mb-2.5 font-semibold md:text-xl">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground md:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background"></div>
            </Carousel>
            <Carousel
              opts={{
                loop: true,
                align: 'start',
              }}
              plugins={[
                AutoScroll({
                  speed: 0.7,
                }),
              ]}
              orientation="vertical"
              className="pointer-events-none relative hidden lg:block"
            >
              <CarouselContent className="max-h-[600px]">
                {features.slice(features.length / 2).map((feature, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col rounded-xl border bg-background p-4 md:p-7">
                      {feature.icon}
                      <h3 className="font-display mt-5 mb-2.5 font-semibold leading-5 md:text-xl">
                        {feature.title}
                      </h3>
                      <p className="font-display text-sm leading-5 text-muted-foreground md:text-base md:leading-6">
                        {feature.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background"></div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForEnterprises
