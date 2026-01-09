import { Activity, ArrowRight, Rocket, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const B200MetricsBento = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl mb-4">
            Revolutionary Blackwell Performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            15x faster inference with Full-Stack TEE on next-gen architecture
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Main highlight - Massive Inference speedup */}
          <div className="relative h-60 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 to-fuchsia-600/10 md:col-span-3 md:row-span-2 md:h-[400px] lg:col-span-4 lg:h-full border border-purple-500/20">
            <Image
              src="/gpu-tee-bento.png"
              alt="GPU TEE Bento"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 backdrop-blur-sm">
                  <Rocket className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 -m-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-white mb-2">15x</div>
                  <p className="text-lg font-medium text-white">
                    Faster Inference
                  </p>
                  <p className="text-sm text-white/80">vs H100 on large LLMs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Memory specs - Largest */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[192px] lg:col-span-4 bg-gradient-to-br from-pink-500/10 to-rose-600/5 border-pink-500/20">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="mb-3 text-5xl font-bold lg:text-6xl text-pink-600">
                192
                <span className="align-top text-3xl">GB</span>
              </div>
              <p className="text-sm leading-tight">
                HBM3e Memory (2.4x vs H100)
                <br />
                <span className="text-muted-foreground">8 TB/s Bandwidth</span>
              </p>
            </CardContent>
          </Card>

          {/* Training speedup */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[192px] lg:col-span-2 bg-gradient-to-br from-orange-500/10 to-amber-600/5 border-orange-500/20">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="mb-2 flex items-baseline">
                <span className="text-5xl font-bold text-orange-600">2.5</span>
                <span className="text-3xl font-bold text-orange-600">x</span>
              </div>
              <p className="text-sm leading-tight">
                Faster training
                <br />
                <span className="text-muted-foreground">vs H100</span>
              </p>
            </CardContent>
          </Card>

          {/* Blackwell Architecture */}
          <div className="relative col-span-1 h-60 overflow-hidden rounded-3xl md:col-span-3 md:row-span-1 md:h-[192px] lg:col-span-2 bg-gradient-to-br from-indigo-500/10 to-blue-600/5 border border-indigo-500/20">
            <div className="flex h-full flex-col justify-center p-6">
              <div className="mb-2">
                <Activity className="h-8 w-8 text-indigo-600 mb-3" />
              </div>
              <div className="text-2xl font-bold text-indigo-600 mb-1">
                Blackwell
              </div>
              <p className="text-sm text-muted-foreground">
                Next-gen GPU architecture
              </p>
            </div>
          </div>

          {/* TEE Protection */}
          <Card className="relative col-span-1 h-60 overflow-hidden rounded-3xl md:col-span-3 md:row-span-2 md:h-[400px] lg:col-span-4 bg-gradient-to-br from-emerald-500/10 to-teal-600/5 border border-emerald-500/20">
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div>
                <Shield className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="font-display font-semibold text-foreground text-xl leading-snug md:text-2xl mb-2">Full-Stack TEE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Intel TDX + NVIDIA Confidential Computing on cutting-edge
                  Blackwell GPUs
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-600">✓</span>
                  <span>Dual attestation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-600">✓</span>
                  <span>Hardware root of trust</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Bandwidth - Massive improvement */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[300px] lg:col-span-4 bg-gradient-to-br from-cyan-500/10 to-sky-600/5 border-cyan-500/20">
            <CardContent className="h-full p-6 flex flex-col justify-center">
              <div>
                <Zap className="h-8 w-8 text-cyan-600 mb-3" />
                <div className="text-5xl font-bold text-cyan-600 mb-2">
                  8 TB/s
                </div>
                <p className="text-sm text-muted-foreground">
                  Memory Bandwidth
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  2.4x faster than H100 for memory-intensive workloads
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Availability with CTA */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[300px] lg:col-span-4 bg-gradient-to-br from-violet-500/10 to-purple-600/5 border-violet-500/20">
            <CardContent className="h-full p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div>
                  <div className="text-4xl font-bold mb-1">Available Now</div>
                  <p className="text-sm text-muted-foreground">
                    US-East & US-West
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">1-8 GPUs</div>
                  <p className="text-sm text-muted-foreground">
                    Enterprise Clusters
                  </p>
                </div>
              </div>
              <Button asChild className="w-full">
                <a
                  href="https://cloud.phala.com/dashboard/gpu-tee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Configure Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export { B200MetricsBento }
