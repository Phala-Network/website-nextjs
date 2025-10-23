import { CheckCircle2, Server } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function H200Configurations() {
  const configurations = [
    {
      name: '1x H200',
      memory: '141GB HBM3e',
      bandwidth: '4.8 TB/s',
      tee: 'Full-Stack TEE',
      regions: 'US-West, India',
      available: true,
    },
    {
      name: '2x H200',
      memory: '282GB HBM3e',
      bandwidth: '9.6 TB/s',
      tee: 'Full-Stack TEE',
      regions: 'US-West, India',
      available: true,
    },
    {
      name: '4x H200',
      memory: '564GB HBM3e',
      bandwidth: '19.2 TB/s',
      tee: 'Full-Stack TEE',
      regions: 'US-West, India',
      available: true,
    },
    {
      name: '8x H200',
      memory: '1.1TB HBM3e',
      bandwidth: '38.4 TB/s',
      tee: 'Full-Stack TEE',
      regions: 'US-West, India',
      available: true,
    },
  ]

  return (
    <section className="bg-background py-24">
      <div className="container">
        <h2 className="mb-10 text-center font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
          Available H200 Configurations
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {configurations.map((config, index) => (
            <div
              key={index}
              className="group block h-full rounded-xl border bg-card p-6 transition-all duration-200 hover:border-primary hover:shadow-lg"
            >
              <div className="flex h-full flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Server className="h-5 w-5 text-primary" />
                        <h3 className="font-display font-semibold text-foreground text-xl leading-snug md:text-2xl transition-colors duration-200 group-hover:text-primary">
                          {config.name}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="font-display text-sm leading-5 text-green-500">
                          Available Now
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 font-display text-sm leading-5">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Total Memory
                      </span>
                      <span className="font-semibold">
                        {config.memory}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Total Bandwidth
                      </span>
                      <span className="font-semibold">
                        {config.bandwidth}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        TEE Protection
                      </span>
                      <span className="font-semibold">
                        {config.tee}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Regions</span>
                      <span className="font-semibold">
                        {config.regions}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="font-display text-sm leading-5 text-muted-foreground">
                    Flagship performance for demanding AI workloads with
                    complete hardware protection
                  </div>
                  <Button asChild className="w-full font-medium" size="sm">
                    <Link href="https://cloud.phala.network/dashboard/gpu-tee">
                      Configure & Deploy
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
