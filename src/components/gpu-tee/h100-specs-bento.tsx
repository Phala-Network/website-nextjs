import { Server, Shield, Zap } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

export function H100SpecsBento() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Main spec card */}
          <div className="relative h-60 overflow-hidden rounded-3xl border md:col-span-4 md:row-span-2 md:h-[400px] lg:col-span-6 lg:h-full bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <div className="flex items-center gap-2 mb-4">
                <Server className="size-8 text-primary" />
                <h2 className="text-3xl font-bold">NVIDIA H100</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Enterprise-grade AI GPU with complete Full-Stack TEE protection
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>80GB HBM3 Memory</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>3.35 TB/s Memory Bandwidth</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Intel TDX + NVIDIA Confidential Computing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance card */}
          <Card className="col-span-1 rounded-3xl md:col-span-2 md:row-span-1 md:h-[192px] lg:col-span-3 bg-green-500/10 border-green-500/20">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="mb-2 text-5xl font-bold text-green-600">9x</div>
              <p className="text-sm leading-tight">
                Faster AI training
                <br />
                compared to A100
              </p>
            </CardContent>
          </Card>

          {/* TEE Overhead card */}
          <Card className="col-span-1 rounded-3xl md:col-span-2 md:row-span-1 md:h-[192px] lg:col-span-3 bg-blue-500/10 border-blue-500/20">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="mb-2 flex items-baseline">
                <span className="text-5xl font-bold text-blue-600">&lt;5</span>
                <span className="text-2xl font-bold text-blue-600">%</span>
              </div>
              <p className="text-sm leading-tight">
                TEE Performance
                <br />
                Overhead
              </p>
            </CardContent>
          </Card>

          {/* Available regions card */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[200px] lg:col-span-6">
            <CardContent className="h-full p-6">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="size-5 text-primary" />
                  <h3 className="text-lg font-semibold">Available Now</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Deploy in US-West region
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Scale from 1-2 GPUs per instance
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security card */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[200px] lg:col-span-6 bg-purple-500/10 border-purple-500/20">
            <CardContent className="h-full p-6">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="size-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Dual Attestation</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Cryptographic proof from Intel + NVIDIA
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Independently verifiable TEE protection
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
