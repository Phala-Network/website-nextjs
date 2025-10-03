import { ArrowRight, Server } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function H100Hero() {
  return (
    <section className="py-32">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex justify-end rounded-xl overflow-hidden">
          <img
            src="/gpu-h100.png"
            alt="NVIDIA H100 with Full-Stack TEE"
            className="max-h-[600px] w-full object-contain lg:max-h-[800px]"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left">
          <Badge variant="secondary" className="mb-4">
            <Server className="mr-2 size-4" />
            NVIDIA H100 Tensor Core GPU
          </Badge>
          <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl xl:text-7xl">
            Enterprise AI with H100 GPUs
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            Deploy NVIDIA H100 Tensor Core GPUs with Intel TDX + NVIDIA
            Confidential Computing. 80GB HBM3 memory, proven performance,
            complete hardware protection.
          </p>

          <div className="mb-8 grid grid-cols-2 gap-4 w-full max-w-xl">
            <div className="rounded-lg border bg-card p-4">
              <div className="text-2xl font-bold">80GB</div>
              <div className="text-sm text-muted-foreground">HBM3 Memory</div>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="text-2xl font-bold">3.35 TB/s</div>
              <div className="text-sm text-muted-foreground">Bandwidth</div>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="text-2xl font-bold">9x Faster</div>
              <div className="text-sm text-muted-foreground">vs A100</div>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="text-2xl font-bold">Full TEE</div>
              <div className="text-sm text-muted-foreground">
                Intel + NVIDIA
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button asChild size="lg">
              <Link href="https://cloud.phala.network/dashboard/gpu-tee">
                Deploy H100 Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#pricing">
                View Pricing
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            Starting at{' '}
            <span className="font-bold text-foreground">$3.08/GPU/hr</span>{' '}
            on-demand or{' '}
            <span className="font-bold text-foreground">$2.38/GPU/hr</span> with
            12-month commitment (23% savings)
          </div>
        </div>
      </div>
    </section>
  )
}
