'use client'

import { motion } from 'motion/react'
import { BarChart3, Zap } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface BenchmarkData {
  gpu: string
  inference: number // Tokens per second on Llama 2 70B
  training: number // Relative speedup (normalized to H100=1.0)
  color: string
}

// Based on MLPerf v5.0 and NVIDIA official benchmarks (2024-2025)
const benchmarkData: BenchmarkData[] = [
  { gpu: 'H100', inference: 21800, training: 1.0, color: 'bg-green-500' },
  { gpu: 'H200', inference: 33000, training: 1.9, color: 'bg-sky-500' },
  { gpu: 'B200', inference: 75000, training: 2.5, color: 'bg-purple-500' },
]

interface GpuBenchmarkProps {
  title?: string
}

export function GpuBenchmark({
  title = 'MLPerf-Verified Performance',
}: GpuBenchmarkProps) {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center mb-12">
          <h2 className="font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">
            Official benchmarks from MLPerf v5.0 and NVIDIA Technical Labs
          </p>
        </div>

        <Tabs defaultValue="inference" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="inference" className="gap-2">
              <Zap className="size-4" />
              Inference
            </TabsTrigger>
            <TabsTrigger value="training" className="gap-2">
              <BarChart3 className="size-4" />
              Training
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inference">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  LLM Inference Performance (Llama 2 70B)
                </CardTitle>
                <p className="text-center text-sm text-muted-foreground">
                  Tokens per second (single GPU) - higher is better
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {benchmarkData.map((data, index) => (
                    <BenchmarkBar
                      key={data.gpu}
                      label={data.gpu}
                      value={data.inference}
                      maxValue={75000}
                      color={data.color}
                      delay={index * 0.1}
                      showMetric
                      displayValue={`${(data.inference / 1000).toFixed(1)}K tok/s`}
                    />
                  ))}
                </div>
                <div className="mt-8 text-center text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong>H100:</strong> 21.8K tokens/sec (baseline) |{' '}
                    <strong>H200:</strong> 33K tokens/sec (1.51x) |{' '}
                    <strong>B200:</strong> 75K+ tokens/sec (3.4x)
                  </p>
                  <p className="text-xs">
                    Source: MLPerf Inference v5.0 (2024), NVIDIA Technical Blogs
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  Training Performance (Llama 2 70B LoRA)
                </CardTitle>
                <p className="text-center text-sm text-muted-foreground">
                  Time-to-train speedup vs H100 - higher is better
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {benchmarkData.map((data, index) => (
                    <BenchmarkBar
                      key={data.gpu}
                      label={data.gpu}
                      value={data.training}
                      maxValue={2.6}
                      color={data.color}
                      delay={index * 0.1}
                      showMetric
                      displayValue={
                        data.training === 1.0
                          ? 'Baseline'
                          : `${data.training}x faster`
                      }
                    />
                  ))}
                </div>
                <div className="mt-8 text-center text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong>H100:</strong> Baseline | <strong>H200:</strong>{' '}
                    1.9x faster | <strong>B200:</strong> 2.5x faster (8-GPU DGX)
                  </p>
                  <p className="text-xs">
                    Source: MLPerf Training v5.0 (2025), NVIDIA DGX benchmarks
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All benchmarks include Full-Stack TEE protection with {'<'}5%
            overhead
          </p>
        </div>
      </div>
    </section>
  )
}

interface BenchmarkBarProps {
  label: string
  value: number
  maxValue: number
  color: string
  delay?: number
  showMetric?: boolean
  displayValue?: string
}

function BenchmarkBar({
  label,
  value,
  maxValue,
  color,
  delay = 0,
  showMetric = false,
  displayValue,
}: BenchmarkBarProps) {
  const percentage = (value / maxValue) * 100

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold min-w-[60px]">{label}</span>
          {showMetric && (
            <span className="text-sm text-muted-foreground">
              {displayValue}
            </span>
          )}
        </div>
      </div>
      <div className="relative h-12 w-full rounded-lg bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 1,
            delay,
            ease: 'easeOut',
          }}
          className={`h-full ${color} flex items-center justify-end px-4`}
        >
          <span className="text-xs font-bold text-white">
            {percentage.toFixed(0)}%
          </span>
        </motion.div>
      </div>
    </div>
  )
}
