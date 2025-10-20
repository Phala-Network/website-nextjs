'use client'

import { ArrowUp, Award, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

import { Button } from '@/components/ui/button'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Progress } from '@/components/ui/progress'

const chartData = [
  { metric: 'Performance', phala: 95, competitor: 70 },
  { metric: 'VM Security', phala: 100, competitor: 40 },
  { metric: 'GPU Encryption', phala: 100, competitor: 90 },
  { metric: 'Attestation', phala: 100, competitor: 50 },
  { metric: 'Compliance', phala: 95, competitor: 60 },
  { metric: 'Developer Experience', phala: 90, competitor: 75 },
]

const chartConfig = {
  phala: {
    label: 'Phala Cloud',
    color: 'oklch(0.8962 0.1971 123.29)',
  },
  competitor: {
    label: 'GPU-Only TEE',
    color: '#8DD7FF',
  },
} satisfies ChartConfig

const PerformanceSecurityMerged = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="bg-muted mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider">
              REAL-WORLD PERFORMANCE
            </p>
            <h2 className="font-display text-3xl font-bold leading-none md:text-5xl mb-4">
              Hardware Security Without Compromise
            </h2>
            <p className="text-muted-foreground font-display text-lg leading-7 max-w-3xl mx-auto">
              Full-Stack TEE protection delivers near-native performance.
              Benchmarked with SP1 zkVM generating ZK proofs in GPU TEE
              environment.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Radar Chart - Full-Stack TEE Comparison */}
            <div className="rounded-lg border bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="size-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-none">
                    Full-Stack TEE Advantage
                  </h3>
                  <p className="font-display text-sm leading-5 text-muted-foreground">
                    vs GPU-Only Protection
                  </p>
                </div>
              </div>

              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[350px]"
              >
                <RadarChart data={chartData}>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarGrid />
                  <Radar
                    dataKey="phala"
                    fill="oklch(0.8962 0.1971 123.29)"
                    fillOpacity={0.6}
                    stroke="oklch(0.8962 0.1971 123.29)"
                    strokeWidth={2}
                  />
                  <Radar
                    dataKey="competitor"
                    fill="#8DD7FF"
                    fillOpacity={0.3}
                    stroke="#8DD7FF"
                    strokeWidth={2}
                  />
                </RadarChart>
              </ChartContainer>

              <div className="mt-6 flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  <span className="font-medium">Phala Cloud</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: '#8DD7FF' }}
                  ></div>
                  <span className="text-muted-foreground">GPU-Only TEE</span>
                </div>
              </div>
            </div>

            {/* Performance Benchmarks */}
            <div className="rounded-lg border bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="size-6 text-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold leading-none">Performance Benchmarks</h3>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <div className="mb-2 flex justify-between">
                    <p className="font-medium">TEE Overhead</p>
                    <span className="flex items-center gap-1 font-medium text-green-600">
                      &lt;5% <ArrowUp size={16} />
                    </span>
                  </div>
                  <Progress value={95} className="h-3" />
                  <p className="mt-1 text-sm text-muted-foreground">
                    Near-native performance with complete hardware protection
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <p className="font-medium">H200 vs H100</p>
                    <span className="flex items-center gap-1 font-medium text-green-600">
                      2x Faster <ArrowUp size={16} />
                    </span>
                  </div>
                  <Progress value={100} className="h-3" />
                  <p className="mt-1 text-sm text-muted-foreground">
                    Up to 2x faster LLM inference with 141GB HBM3e memory
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <p className="font-medium">SP1 zkVM in TEE</p>
                    <span className="flex items-center gap-1 font-medium text-green-600">
                      4-5% Overhead <ArrowUp size={16} />
                    </span>
                  </div>
                  <Progress value={95} className="h-3" />
                  <p className="mt-1 text-sm text-muted-foreground">
                    Verified benchmark generating ZK proofs in GPU TEE
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <Button asChild variant="outline" className="w-full">
                  <Link
                    href="https://phala.network/posts/performance-benchmark-running-sp1-zkvm-in-tee-h200-with-low-overhead"
                    target="_blank"
                  >
                    Read Full Benchmark Report →
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Security Guarantees - Bottom Row */}
          <div className="mt-8 rounded-lg border bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="size-6 text-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold leading-none">Security Guarantees</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-2">
                <div className="flex size-10 items-center justify-center rounded-full bg-green-50 dark:bg-green-950/20">
                  <Shield className="size-5 text-green-600" />
                </div>
                <h4 className="font-semibold">Full VM Isolation</h4>
                <p className="text-sm text-muted-foreground">
                  Intel TDX Trust Domain isolates entire VM from host
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/20">
                  <Shield className="size-5 text-blue-600" />
                </div>
                <h4 className="font-semibold">GPU Encryption</h4>
                <p className="text-sm text-muted-foreground">
                  NVIDIA CC encrypts all GPU memory during computation
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex size-10 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-950/20">
                  <Award className="size-5 text-purple-600" />
                </div>
                <h4 className="font-semibold">Dual Attestation</h4>
                <p className="text-sm text-muted-foreground">
                  Cryptographic proof from Intel + NVIDIA verifying TEE
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex size-10 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-950/20">
                  <Award className="size-5 text-orange-600" />
                </div>
                <h4 className="font-semibold">Compliance Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Meets GDPR, HIPAA, SOC 2 with attestation logs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { PerformanceSecurityMerged }
