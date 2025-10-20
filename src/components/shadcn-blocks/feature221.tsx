import { ArrowRight, Rocket, Server, Zap } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface GpuConfig {
  id: string
  name: string
  badge: string
  badgeVariant?: 'default' | 'secondary' | 'outline'
  icon: 'Zap' | 'Server' | 'Rocket'
  specs: string[]
  priceOnDemand: string
  priceReserved: string | null
  savings: string | null
  ctaText: string
  ctaUrl: string
  gradient: string
}

const ICONS = {
  Zap: Zap,
  Server: Server,
  Rocket: Rocket,
}

const GPU_CONFIGS: Array<GpuConfig> = [
  {
    id: 'h200',
    name: 'NVIDIA H200',
    badge: 'Flagship Performance',
    icon: 'Zap',
    specs: [
      '141GB HBM3e Memory',
      '4.8 TB/s Bandwidth',
      'Up to 2x faster vs H100',
      'Full-Stack TEE Protection',
    ],
    priceOnDemand: '$3.50',
    priceReserved: '$2.56',
    savings: 'Save 27%',
    ctaText: 'Configure H200',
    ctaUrl: 'https://cloud.phala.network/dashboard/gpu-tee',
    gradient: 'bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]',
  },
  {
    id: 'h100',
    name: 'NVIDIA H100',
    badge: 'Enterprise Standard',
    icon: 'Server',
    specs: [
      '80GB HBM3 Memory',
      'Proven Performance',
      '9x Faster Training',
      'Full-Stack TEE Protection',
    ],
    priceOnDemand: '$3.08',
    priceReserved: '$2.38',
    savings: 'Save 23%',
    ctaText: 'Configure H100',
    ctaUrl: 'https://cloud.phala.network/dashboard/gpu-tee',
    gradient: 'bg-gradient-to-r from-[#f8ff00] to-[#3ad59f]',
  },
  {
    id: 'b200',
    name: 'NVIDIA B200',
    badge: 'Available Now',
    badgeVariant: 'default' as const,
    icon: 'Rocket',
    specs: [
      '192GB HBM3e Memory',
      'Next-Gen Blackwell',
      '15x Faster Inference',
      'Full-Stack TEE Protection',
    ],
    priceOnDemand: '$7.99',
    priceReserved: '$5.63',
    savings: 'Save 29%',
    ctaText: 'Configure B200',
    ctaUrl: 'https://cloud.phala.network/dashboard/gpu-tee',
    gradient: 'bg-gradient-to-r from-[#FC466B] to-[#3F5EFB]',
  },
]

const Feature221 = () => {
  return (
    <section
      id="pricing"
      className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat py-24"
    >
      <div className="container">
        <div className="flex w-full flex-col items-start justify-between gap-4 pb-16 lg:flex-row lg:items-end">
          <div className="flex w-full max-w-[32rem] flex-1 flex-col items-start gap-5">
            <h2 className="font-display text-[2rem] font-bold leading-none tracking-tight md:text-[2.75rem] lg:text-5xl">
              Available GPU Configurations
            </h2>
            <p className="text-muted-foreground font-display w-full max-w-[30rem] text-[1.15rem] font-medium leading-7 sm:text-xl">
              From single GPU to enterprise clusters. All configurations include{' '}
              <span className="font-semibold text-foreground">
                Intel TDX + NVIDIA Confidential Computing
              </span>{' '}
              protection.
            </p>
          </div>
          <div>
            <Button className="rounded-full" asChild>
              <Link href="https://cloud.phala.network/dashboard/gpu-tee">
                Deploy Now
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-[auto] gap-10 md:grid-cols-2 lg:grid-cols-3">
          {GPU_CONFIGS.map((config, i) => {
            const IconComponent = ICONS[config.icon]
            return (
              <Card
                key={`gpu-${config.id}`}
                className="bg-background flex w-full flex-col justify-between gap-6 rounded-[.5rem] border p-5 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="flex w-full flex-col justify-between gap-4 p-0">
                  <div className="flex items-start justify-between">
                    <CardTitle className="flex w-fit flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <h3 className="text-[1.75rem] font-bold leading-none tracking-tight">
                          {config.name}
                        </h3>
                      </div>
                    </CardTitle>
                    <Badge
                      variant={config.badgeVariant || 'default'}
                      className="bg-primary/10 text-primary"
                    >
                      {config.badge}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-0 space-y-4">
                  <div className="space-y-2">
                    {config.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span className="text-muted-foreground font-medium">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">
                        On-Demand
                      </div>
                      <div className="text-2xl font-bold">
                        {config.priceOnDemand}
                        {config.priceOnDemand.includes('$') && (
                          <span className="text-sm font-normal text-muted-foreground">
                            /GPU/hour
                          </span>
                        )}
                      </div>
                    </div>

                    {config.priceReserved && (
                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-xs text-muted-foreground">
                            Reserved (6-12 months)
                          </div>
                          {config.savings && (
                            <Badge
                              variant="outline"
                              className="text-green-600 border-green-600 text-xs"
                            >
                              {config.savings}
                            </Badge>
                          )}
                        </div>
                        <div className="text-xl font-bold text-green-600">
                          {config.priceReserved}
                          <span className="text-sm font-normal text-muted-foreground">
                            /GPU/hour
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex w-full items-end justify-between gap-5 p-0">
                  <div className="flex-1">
                    <Button size="sm" className="w-full rounded-full" asChild>
                      <Link
                        href={config.ctaUrl}
                        className="flex items-center gap-2 justify-center"
                      >
                        {config.ctaText}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="h-8 w-8">
                    <div
                      className={cn(
                        'h-full w-full rounded-full',
                        config.gradient,
                      )}
                    ></div>
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All prices include{' '}
            <span className="font-semibold text-foreground">
              Intel TDX + NVIDIA Confidential Computing
            </span>{' '}
            protection. Volume discounts available.{' '}
            <Link
              href="https://phala.com/contact"
              className="text-primary hover:underline"
            >
              Contact sales
            </Link>{' '}
            for custom configurations.
          </p>
        </div>
      </div>
    </section>
  )
}

export { Feature221 }
