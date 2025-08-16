'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import {
  Globe,
  MessagesSquare,
  MoveRight,
  PanelsTopLeft,
  PenTool,
  ScissorsLineDashed,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const features = [
  {
    title: 'Pixel-Perfect',
    description: 'Begin our journey to build  outstanding websites.',
    icon: <ScissorsLineDashed className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'SEO Optimized',
    description: 'We ensure that your website ranks high on Google.',
    icon: <Globe className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'Responsive',
    description: 'Our websites look great on any device.',
    icon: <PanelsTopLeft className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'Customizable',
    description: 'We can tailor your website to your needs.',
    icon: <PenTool className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'Fast Loading',
    description: 'We ensure that your website loads quickly.',
    icon: <Zap className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'Secure',
    description: 'We take security seriously. Your data is safe with us.',
    icon: <ShieldCheck className="h-auto w-8 md:w-12" />,
  },
  {
    title: '24/7 Support',
    description: 'We are always here to help you. Reach out to us.',
    icon: <MessagesSquare className="h-auto w-8 md:w-12" />,
  },
  {
    title: 'User-Friendly',
    description: 'We make sure that your website is easy to use.',
    icon: <Users className="h-auto w-8 md:w-12" />,
  },
]

const ForEnterprises = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-20 md:grid-cols-2">
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            <span className="inline-flex items-center -space-x-4">
              <Avatar className="size-11 border lg:size-16">
                <AvatarImage
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                  alt="placeholder"
                />
              </Avatar>
              <Avatar className="size-11 border lg:size-16">
                <AvatarImage
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp"
                  alt="placeholder"
                />
              </Avatar>
              <Avatar className="size-11 border lg:size-16">
                <AvatarImage
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp"
                  alt="placeholder"
                />
              </Avatar>
            </span>
            <h1 className="text-3xl font-semibold md:text-5xl">
              Explore New Frontiers in Digital Innovation with Us
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Join our journey to craft highly optimized web experiences.
            </p>
            <Button size="lg" className="w-fit gap-2">
              View Features <MoveRight className="h-auto w-5" />
            </Button>
            <div className="grid grid-cols-2 justify-between gap-4 pt-10 text-left md:gap-20">
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-semibold md:text-5xl">85%</h2>
                <p className="text-muted-foreground md:text-lg">
                  Conversion boost
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-semibold md:text-5xl">25k+</h2>
                <p className="text-muted-foreground md:text-lg">
                  Happy Customers
                </p>
              </div>
            </div>
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
                    <div className="flex flex-col rounded-xl border p-5 md:p-7">
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
                {features
                  .slice(0, features.length / 2)
                  .map((feature, index) => (
                    <CarouselItem key={index}>
                      <div className="flex flex-col rounded-xl border p-4 md:p-7">
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
                    <div className="flex flex-col rounded-xl border p-4 md:p-7">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForEnterprises
