import { Activity, ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const H200MetricsBento = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl mb-4">
            Flagship AI Performance
          </h2>
          <p className="font-display text-lg leading-7 text-muted-foreground max-w-2xl mx-auto lg:text-xl">
            Industry's largest GPU memory with Full-Stack TEE security
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Main highlight - Inference Performance */}
          <div className="relative h-60 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500/20 to-blue-600/10 md:col-span-3 md:row-span-2 md:h-[400px] lg:col-span-4 lg:h-full border border-sky-500/20">
            <Image
              src="/gpu-tee-bento.png"
              alt="GPU TEE Bento"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20 backdrop-blur-sm">
                  <Zap className="h-6 w-6 text-sky-600" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 -m-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-2xl" />
                <div className="relative z-10">
                  <div className="font-display text-6xl font-bold leading-none text-white mb-2">33K</div>
                  <p className="font-display text-lg leading-7 font-medium text-white">tokens/sec</p>
                  <p className="font-display text-sm leading-5 text-white/80">
                    Llama 2 70B Inference (1.51x vs H100)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Memory specs - Highlight */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[192px] lg:col-span-4 bg-gradient-to-br from-violet-500/10 to-purple-600/5 border-violet-500/20">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="mb-3 font-display text-5xl font-bold leading-none lg:text-6xl text-violet-600">
                141
                <span className="align-top text-3xl">GB</span>
              </div>
              <p className="font-display text-sm leading-5">
                HBM3e Memory (1.76x vs H100)
                <br />
                <span className="text-muted-foreground">
                  4.8 TB/s Bandwidth
                </span>
              </p>
            </CardContent>
          </Card>

          {/* Training speedup */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[192px] lg:col-span-2 bg-gradient-to-br from-orange-500/10 to-red-600/5 border-orange-500/20">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="mb-2 flex items-baseline font-display">
                <span className="text-5xl font-bold leading-none text-orange-600">1.9</span>
                <span className="text-3xl font-bold leading-none text-orange-600">x</span>
              </div>
              <p className="font-display text-sm leading-5">
                Faster training
                <br />
                <span className="text-muted-foreground">vs H100</span>
              </p>
            </CardContent>
          </Card>

          {/* Power - Same as H100 */}
          <div className="relative col-span-1 h-60 overflow-hidden rounded-3xl md:col-span-3 md:row-span-1 md:h-[192px] lg:col-span-2 bg-gradient-to-br from-purple-500/10 to-pink-600/5 border border-purple-500/20">
            <div className="flex h-full flex-col justify-center p-6">
              <div className="mb-2">
                <Activity className="h-8 w-8 text-purple-600 mb-3" />
              </div>
              <div className="font-display text-3xl font-bold leading-none text-purple-600 mb-1">
                700W
              </div>
              <p className="font-display text-sm leading-5 text-muted-foreground">
                Same power, more performance
              </p>
            </div>
          </div>

          {/* TEE Protection */}
          <Card className="relative col-span-1 h-60 overflow-hidden rounded-3xl md:col-span-3 md:row-span-2 md:h-[400px] lg:col-span-4 bg-gradient-to-br from-emerald-500/10 to-teal-600/5 border border-emerald-500/20">
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div>
                <Shield className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="font-display font-semibold text-foreground text-xl leading-snug md:text-2xl mb-2">Full-Stack TEE</h3>
                <p className="font-display text-sm leading-5 text-muted-foreground">
                  Intel TDX + NVIDIA Confidential Computing with dual
                  attestation
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-display text-sm leading-5">
                  <span className="text-emerald-600">✓</span>
                  <span>Memory encryption</span>
                </div>
                <div className="flex items-center gap-2 font-display text-sm leading-5">
                  <span className="text-emerald-600">✓</span>
                  <span>Verified boot chain</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Bandwidth highlight */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[300px] lg:col-span-4 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 border-cyan-500/20">
            <CardContent className="h-full p-6 flex flex-col justify-center">
              <div>
                <TrendingUp className="h-8 w-8 text-cyan-600 mb-3" />
                <div className="font-display text-5xl font-bold leading-none text-cyan-600 mb-2">4.8</div>
                <p className="font-display text-sm leading-5 text-muted-foreground">
                  TB/s Memory Bandwidth
                </p>
                <p className="font-display text-xs leading-4 text-muted-foreground mt-2">
                  1.4x improvement over H100's 3.35 TB/s
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Availability with CTA */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[300px] lg:col-span-4 bg-gradient-to-br from-amber-500/10 to-yellow-600/5 border-amber-500/20">
            <CardContent className="h-full p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div>
                  <div className="font-display text-4xl font-bold leading-none mb-1">Available Now</div>
                  <p className="font-display text-sm leading-5 text-muted-foreground">
                    US-West & India
                  </p>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold leading-none mb-1">1-8 GPUs</div>
                  <p className="font-display text-sm leading-5 text-muted-foreground">
                    Scalable Configurations
                  </p>
                </div>
              </div>
              <Button asChild className="w-full font-medium">
                <a
                  href="https://cloud.phala.network/dashboard/gpu-tee"
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

export { H200MetricsBento }
