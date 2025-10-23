import { Activity, ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const H100MetricsBento = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl mb-4">
            Proven Enterprise Performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MLPerf-certified AI acceleration with Full-Stack TEE security
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Main highlight - Inference Performance */}
          <div className="relative h-60 overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-600/10 md:col-span-3 md:row-span-2 md:h-[400px] lg:col-span-4 lg:h-full border border-green-500/20">
            <Image
              src="/gpu-tee-bento.png"
              alt="GPU TEE Bento"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 backdrop-blur-sm">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 -m-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-white mb-2">
                    21.8K
                  </div>
                  <p className="text-lg font-medium text-white">tokens/sec</p>
                  <p className="text-sm text-white/80">Llama 2 70B Inference</p>
                </div>
              </div>
            </div>
          </div>

          {/* Memory specs */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[192px] lg:col-span-4 bg-gradient-to-br from-blue-500/10 to-cyan-600/5 border-blue-500/20">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="mb-3 text-5xl font-bold lg:text-6xl text-blue-600">
                80
                <span className="align-top text-3xl">GB</span>
              </div>
              <p className="text-sm leading-tight">
                HBM3 Memory
                <br />
                <span className="text-muted-foreground">
                  3.35 TB/s Bandwidth
                </span>
              </p>
            </CardContent>
          </Card>

          {/* Training speedup */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[192px] lg:col-span-2 bg-gradient-to-br from-orange-500/10 to-red-600/5 border-orange-500/20">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="mb-2 flex items-baseline">
                <span className="text-5xl font-bold text-orange-600">9</span>
                <span className="text-3xl font-bold text-orange-600">x</span>
              </div>
              <p className="text-sm leading-tight">
                Faster training
                <br />
                <span className="text-muted-foreground">vs A100</span>
              </p>
            </CardContent>
          </Card>

          {/* Power Efficiency */}
          <div className="relative col-span-1 h-60 overflow-hidden rounded-3xl md:col-span-3 md:row-span-1 md:h-[192px] lg:col-span-2 bg-gradient-to-br from-purple-500/10 to-pink-600/5 border border-purple-500/20">
            <div className="flex h-full flex-col justify-center p-6">
              <div className="mb-2">
                <Activity className="h-8 w-8 text-purple-600 mb-3" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">
                700W
              </div>
              <p className="text-sm text-muted-foreground">
                Thermal Design Power
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
                  Intel TDX + NVIDIA Confidential Computing protection with
                  cryptographic attestation
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-600">✓</span>
                  <span>Hardware-enforced isolation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-600">✓</span>
                  <span>{'<'}5% performance overhead</span>
                </div>
              </div>
            </div>
          </Card>

          {/* MLPerf Results */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[300px] lg:col-span-4 bg-gradient-to-br from-amber-500/10 to-yellow-600/5 border-amber-500/20">
            <CardContent className="h-full p-6 flex flex-col justify-between">
              <div>
                <TrendingUp className="h-8 w-8 text-amber-600 mb-3" />
                <h3 className="font-display font-semibold text-foreground text-lg leading-snug mb-2">MLPerf Certified</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    GPT-3 Training
                  </span>
                  <span className="text-lg font-bold">Baseline</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    ResNet-50
                  </span>
                  <span className="text-lg font-bold">3.9x vs V100</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability with CTA */}
          <Card className="col-span-1 rounded-3xl md:col-span-3 md:row-span-1 md:h-[300px] lg:col-span-4 bg-gradient-to-br from-sky-500/10 to-blue-600/5 border-sky-500/20">
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
                    Flexible Configurations
                  </p>
                </div>
              </div>
              <Button asChild className="w-full">
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

export { H100MetricsBento }
