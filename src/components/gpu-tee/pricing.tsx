import { ArrowRight, Gpu } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { gpuConfigurations } from '@/data/gpu-configurations'

const gpuTypes = Array.from(
  new Set(gpuConfigurations.map((config) => config.gpuType)),
)

const GpuTeePricing = () => {
  return (
    <section
      id="pricing"
      className="bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-muted bg-[length:3.125rem_3.125rem] bg-repeat py-32"
    >
      <div className="container">
        <div className="flex w-full flex-col items-start justify-between gap-4 pb-16 lg:flex-row lg:items-end">
          <div className="flex w-full max-w-[32rem] flex-1 flex-col items-start gap-5">
            <h2 className="text-[2rem] font-bold leading-none tracking-tight md:text-[2.75rem] lg:text-5xl">
              Available GPU Configurations
            </h2>
            <p className="w-full max-w-[30rem] text-[1.15rem] font-medium leading-normal text-muted-foreground sm:text-xl">
              Enterprise-grade NVIDIA GPUs with full-stack TEE protection. From
              single GPUs to multi-GPU clusters.
            </p>
          </div>
          <div>
            <Button className="rounded-full" asChild>
              <a href="https://cloud.phala.network/dashboard/gpu-tee">
                See all configurations
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-[auto] gap-10 md:grid-cols-2">
          {gpuTypes.map((gpuType, i) => {
            const config = gpuConfigurations.find((c) => c.gpuType === gpuType)!
            const minPrice = Math.min(
              ...gpuConfigurations
                .filter((c) => c.gpuType === gpuType)
                .map((c) => c.pricePerGpuPerHour),
            )
            return (
              <Card
                key={`feature-${i}`}
                className="flex w-full flex-col justify-between gap-10 rounded-[.5rem] border bg-background p-5"
              >
                <CardHeader className="flex w-full flex-col justify-between gap-4 p-0 lg:flex-row lg:items-center">
                  <CardTitle className="flex w-fit items-center justify-start gap-2.5">
                    <Gpu className="size-6" />
                    <h3 className="text-[1.75rem] font-bold leading-none tracking-tight">
                      NVIDIA {gpuType}
                    </h3>
                  </CardTitle>
                  <Badge className="w-fit bg-primary/10 text-primary">
                    Full-Stack TEE
                  </Badge>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="mb-4 text-base font-medium leading-[1.4] text-muted-foreground">
                    From ${minPrice.toFixed(2)}/GPU/hour
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• {config.cpuCore}+ vCPU cores (Intel TDX)</div>
                    <div>• {config.ram}+ RAM</div>
                    <div>• {config.storage}+ NVMe storage</div>
                    <div>• Global availability</div>
                    <div>• Dual attestation (Intel + NVIDIA)</div>
                  </div>
                </CardContent>
                <CardFooter className="flex w-full items-end justify-between gap-5 p-0 lg:flex-row">
                  <div className="flex-1">
                    <Button size="sm" className="rounded-full" asChild>
                      <a
                        href={`https://cloud.phala.network`}
                        className="flex items-center gap-2"
                      >
                        Configure {gpuType}
                        <ArrowRight />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { GpuTeePricing }
