import { Server, Shield, Zap } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

export function H200SpecsBento() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Main spec card */}
          <div className="relative h-60 overflow-hidden rounded-3xl border md:col-span-4 md:row-span-2 md:h-[400px] lg:col-span-6 lg:h-full bg-gradient-to-br from-sky-400/20 to-blue-600/10">
            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <div className="flex items-center gap-2 mb-4">
                <Server className="size-8 text-sky-600" />
                <h2 className="font-display font-semibold text-foreground text-xl leading-snug md:text-2xl">NVIDIA H200</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Flagship AI GPU with industry's largest memory and Full-Stack
                TEE
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sky-600">✓</span>
                  <span>141GB HBM3e Memory (largest available)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sky-600">✓</span>
                  <span>4.8 TB/s Memory Bandwidth</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sky-600">✓</span>
                  <span>Intel TDX + NVIDIA Confidential Computing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance card */}
          <Card className="col-span-1 rounded-3xl md:col-span-2 md:row-span-1 md:h-[192px] lg:col-span-3 bg-gradient-to-br from-sky-500/20 to-blue-600/10 border-sky-500/30">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="mb-2 flex items-baseline">
                <span className="text-5xl font-bold text-sky-600">2</span>
                <span className="text-2xl font-bold text-sky-600">x</span>
              </div>
              <p className="text-sm leading-tight">
                Faster LLM inference
                <br />
                compared to H100
              </p>
            </CardContent>
          </Card>

          {/* Memory bandwidth card */}
          <Card className="col-span-1 rounded-3xl md:col-span-2 md:row-span-1 md:h-[192px] lg:col-span-3 bg-gradient-to-br from-purple-500/20 to-pink-600/10 border-purple-500/30">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="mb-2 text-4xl font-bold text-purple-600">
                4.8 TB/s
              </div>
              <p className="text-sm leading-tight">
                Memory Bandwidth
                <br />
                1.4x faster than H100
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
                    Deploy in US-West and India regions
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Scale from 1-8 GPUs per instance
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security card */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[200px] lg:col-span-6 bg-emerald-500/10 border-emerald-500/20">
            <CardContent className="h-full p-6">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="size-5 text-emerald-600" />
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
