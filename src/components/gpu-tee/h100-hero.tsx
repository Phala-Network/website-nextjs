import { ArrowRight, Server } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function H100Hero() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left side: Badge, Title, and Image */}
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <Badge variant="secondary" className="mb-6">
              <Server className="mr-2 size-4" />
              NVIDIA H100 Tensor Core GPU
            </Badge>
            <h1 className="font-display font-semibold text-foreground text-3xl leading-none sm:text-5xl md:text-6xl mb-8 text-balance">
              Enterprise AI with H100 GPUs
            </h1>
            <div className="flex w-full justify-center overflow-hidden rounded-xl lg:justify-start">
              <img
                src="/gpu-h100.png"
                alt="NVIDIA H100 with Full-Stack TEE"
                className="max-h-[600px] w-full object-contain lg:max-h-[800px]"
              />
            </div>
          </div>

          {/* Right side: Everything else */}
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <p className="mb-8 max-w-xl text-balance font-display leading-7 text-muted-foreground lg:text-xl">
              Deploy NVIDIA H100 Tensor Core GPUs with Intel TDX + NVIDIA
              Confidential Computing. 80GB HBM3 memory, proven performance,
              complete hardware protection.
            </p>

            <div className="mb-8 grid w-full max-w-xl grid-cols-2 gap-4">
              <div className="rounded-lg border bg-card p-5">
                <div className="font-display text-3xl font-bold leading-none">80GB</div>
                <div className="mt-1 font-display text-sm leading-5 text-muted-foreground">HBM3 Memory</div>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <div className="font-display text-3xl font-bold leading-none">3.35 TB/s</div>
                <div className="mt-1 font-display text-sm leading-5 text-muted-foreground">Bandwidth</div>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <div className="font-display text-3xl font-bold leading-none">9x Faster</div>
                <div className="mt-1 font-display text-sm leading-5 text-muted-foreground">vs A100</div>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <div className="font-display text-3xl font-bold leading-none">Full TEE</div>
                <div className="mt-1 font-display text-sm leading-5 text-muted-foreground">
                  Intel + NVIDIA
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="font-medium">
                <Link href="https://cloud.phala.network/dashboard/gpu-tee">
                  Deploy H100 Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <Link href="#pricing">
                  View Pricing
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-balance font-display text-sm leading-5 text-muted-foreground lg:text-base lg:leading-6">
              Starting at{' '}
              <span className="font-semibold text-foreground">$3.08/GPU/hr</span>{' '}
              on-demand or{' '}
              <span className="font-semibold text-foreground">$2.38/GPU/hr</span> with
              12-month commitment <span className="text-green-600 dark:text-green-400">(23% savings)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
