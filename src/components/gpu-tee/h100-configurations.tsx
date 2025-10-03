import { CheckCircle2, Server } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function H100Configurations() {
  const configurations = [
    {
      name: '1x H100',
      memory: '80GB HBM3',
      bandwidth: '3 TB/s',
      tee: 'Full-Stack TEE',
      region: 'US-West',
      available: true,
    },
    {
      name: '2x H100',
      memory: '160GB HBM3',
      bandwidth: '6 TB/s',
      tee: 'Full-Stack TEE',
      region: 'US-West',
      available: true,
    },
  ]

  return (
    <section className="bg-background py-32">
      <div className="container">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-tighter text-foreground lg:text-6xl">
          Available H100 Configurations
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
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
                        <h3 className="text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                          {config.name}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="font-mono text-sm text-green-500">
                          Available Now
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Memory</span>
                      <span className="font-mono font-semibold">
                        {config.memory}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Bandwidth</span>
                      <span className="font-mono font-semibold">
                        {config.bandwidth}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        TEE Protection
                      </span>
                      <span className="font-mono font-semibold">
                        {config.tee}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Region</span>
                      <span className="font-mono font-semibold">
                        {config.region}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="text-sm text-muted-foreground">
                    Perfect for enterprise AI workloads requiring proven
                    performance and complete security
                  </div>
                  <Button asChild className="w-full" size="sm">
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
