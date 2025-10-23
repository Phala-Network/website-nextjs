'use client'

import { CheckCircle, Minus, XCircle } from 'lucide-react'
import { useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

const GpuTeeCompare = () => {
  const [hoveredModel, setHoveredModel] = useState<string | null>(null)

  const comparisonData = [
    {
      metric: 'GPU Computation',
      standard: { value: 'Not Protected', status: 'worst' },
      nvidia: { value: 'NVIDIA TEE', status: 'neutral' },
      phala: { value: 'NVIDIA TEE', status: 'best' },
    },
    {
      metric: 'CPU/Memory',
      standard: { value: 'Not Protected', status: 'worst' },
      nvidia: { value: 'Not Protected', status: 'worst' },
      phala: { value: 'Intel TDX', status: 'best' },
    },
    {
      metric: 'VM Environment',
      standard: { value: 'Not Protected', status: 'worst' },
      nvidia: { value: 'Not Protected', status: 'worst' },
      phala: { value: 'Intel TDX', status: 'best' },
    },
    {
      metric: 'Attestation',
      standard: { value: 'None', status: 'worst' },
      nvidia: { value: 'GPU Only', status: 'neutral' },
      phala: { value: 'Dual (Intel + NVIDIA)', status: 'best' },
    },
    {
      metric: 'Memory Encryption',
      standard: { value: 'No', status: 'worst' },
      nvidia: { value: 'GPU Only', status: 'neutral' },
      phala: { value: 'Full Stack', status: 'best' },
    },
    {
      metric: 'Host Access',
      standard: { value: 'Full Access', status: 'worst' },
      nvidia: { value: 'Partial Access', status: 'neutral' },
      phala: { value: 'No Access', status: 'best' },
    },
    {
      metric: 'Privacy Guarantee',
      standard: { value: 'None', status: 'worst' },
      nvidia: { value: 'GPU Level', status: 'neutral' },
      phala: { value: 'End-to-End', status: 'best' },
    },
    {
      metric: 'Compliance Ready',
      standard: { value: 'No', status: 'worst' },
      nvidia: { value: 'Partial', status: 'neutral' },
      phala: { value: 'GDPR/HIPAA/SOC2', status: 'best' },
    },
  ]

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
            Full-Stack TEE Protection: Beyond NVIDIA-Only Solutions
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Unlike standard GPU clouds that only secure the GPU, Phala Cloud
            protects your entire workload with Intel TDX (CPU/Memory) + NVIDIA
            Confidential Computing (GPU) - a unique full-stack TEE solution.
          </p>
        </div>
        <div className="relative overflow-hidden p-8">
          <div className="relative overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="font-semibold text-foreground">
                    Security Layer
                  </TableHead>
                  <TableHead className="text-center font-semibold text-foreground">
                    <div className="flex items-center justify-center gap-2">
                      Standard GPU Cloud
                    </div>
                  </TableHead>
                  <TableHead className="text-center font-semibold text-foreground">
                    <div className="flex items-center justify-center gap-2">
                      NVIDIA CC Only
                    </div>
                  </TableHead>
                  <TableHead className="text-center font-semibold text-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <span className="rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
                        Phala Cloud (Full-Stack TEE)
                      </span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow
                    key={index}
                    className="border-border/30 transition-colors hover:bg-muted/30"
                  >
                    <TableCell className="py-4 font-medium text-foreground">
                      {row.metric}
                    </TableCell>
                    <TableCell
                      className={cn(
                        'cursor-pointer py-4 text-center font-medium transition-all duration-300',
                        row.standard.status === 'best'
                          ? 'bg-green-50 text-green-600 dark:bg-green-950/20'
                          : row.standard.status === 'worst'
                            ? 'bg-red-50 text-red-600 dark:bg-red-950/20'
                            : 'bg-muted/50 text-foreground',
                        hoveredModel === 'standard' &&
                          'bg-red-50/80 dark:bg-red-950/30',
                      )}
                      onMouseEnter={() => setHoveredModel('standard')}
                      onMouseLeave={() => setHoveredModel(null)}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {row.standard.status === 'best' && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                        {row.standard.status === 'worst' && (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        {row.standard.status === 'neutral' && (
                          <Minus className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{row.standard.value}</span>
                      </div>
                    </TableCell>
                    <TableCell
                      className={cn(
                        'cursor-pointer py-4 text-center font-medium transition-all duration-300',
                        row.nvidia.status === 'best'
                          ? 'bg-green-50 text-green-600 dark:bg-green-950/20'
                          : row.nvidia.status === 'worst'
                            ? 'bg-red-50 text-red-600 dark:bg-red-950/20'
                            : 'bg-muted/50 text-foreground',
                        hoveredModel === 'nvidia' &&
                          'bg-yellow-50/80 dark:bg-yellow-950/30',
                      )}
                      onMouseEnter={() => setHoveredModel('nvidia')}
                      onMouseLeave={() => setHoveredModel(null)}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {row.nvidia.status === 'best' && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                        {row.nvidia.status === 'worst' && (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        {row.nvidia.status === 'neutral' && (
                          <Minus className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{row.nvidia.value}</span>
                      </div>
                    </TableCell>
                    <TableCell
                      className={cn(
                        'cursor-pointer py-4 text-center font-medium transition-all duration-300',
                        row.phala.status === 'best'
                          ? 'bg-green-50 text-green-600 dark:bg-green-950/20'
                          : row.phala.status === 'worst'
                            ? 'bg-red-50 text-red-600 dark:bg-red-950/20'
                            : 'bg-muted/50 text-foreground',
                        hoveredModel === 'phala' &&
                          'bg-green-50/80 dark:bg-green-950/30',
                      )}
                      onMouseEnter={() => setHoveredModel('phala')}
                      onMouseLeave={() => setHoveredModel(null)}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {row.phala.status === 'best' && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                        {row.phala.status === 'worst' && (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        {row.phala.status === 'neutral' && (
                          <Minus className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{row.phala.value}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Technical Analysis Section */}
          <div className="relative mt-8 border border-border/50 bg-muted/20 p-6">
            <div className="relative">
              <h4 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                Security Architecture Comparison
              </h4>
              <div className="space-y-3 font-mono text-xs text-muted-foreground">
                <div className="grid gap-2 md:grid-cols-3">
                  <div
                    className={cn(
                      'rounded border border-border/30 bg-background/50 p-3 transition-all duration-300',
                      hoveredModel === 'standard' &&
                        'shadow-lg ring-2 ring-red-500/50 dark:bg-red-950/10',
                    )}
                  >
                    <div className="mb-1 font-medium text-foreground">
                      Standard GPU Cloud
                    </div>
                    <div className="space-y-1">
                      <div>• No hardware isolation</div>
                      <div>• Host has full access</div>
                      <div>• No attestation support</div>
                      <div>• Not compliance ready</div>
                      <div>• Traditional cloud model</div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      'rounded border border-border/30 bg-background/50 p-3 transition-all duration-300',
                      hoveredModel === 'nvidia' &&
                        'shadow-lg ring-2 ring-yellow-500/50 dark:bg-yellow-950/10',
                    )}
                  >
                    <div className="mb-1 font-medium text-foreground">
                      NVIDIA CC Only
                    </div>
                    <div className="space-y-1">
                      <div>• GPU memory encrypted</div>
                      <div>• CPU/VM not protected</div>
                      <div>• GPU attestation only</div>
                      <div>• Partial security guarantee</div>
                      <div>• Host can access CPU/memory</div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      'rounded border border-border/30 bg-background/50 p-3 transition-all duration-300',
                      hoveredModel === 'phala' &&
                        'shadow-lg ring-2 ring-green-500/50 dark:bg-green-950/10',
                    )}
                  >
                    <div className="mb-1 font-medium text-foreground">
                      Phala Cloud (Full-Stack)
                    </div>
                    <div className="space-y-1">
                      <div>• Intel TDX + NVIDIA TEE</div>
                      <div>• Complete VM isolation</div>
                      <div>• Dual attestation (Intel + NVIDIA)</div>
                      <div>• End-to-end encryption</div>
                      <div>• Host cannot access any data</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded border border-border/30 bg-background/50 p-3">
                  <div className="mb-2 font-medium text-foreground">
                    Why Full-Stack TEE Matters
                  </div>
                  <div className="space-y-1">
                    <div>
                      • Standard Clouds: No security - cloud provider can access
                      everything
                    </div>
                    <div>
                      • NVIDIA CC Only: GPU is protected but CPU/memory
                      vulnerable to host attacks
                    </div>
                    <div>
                      • Phala Cloud: Complete protection with Intel TDX securing
                      CPU/memory AND NVIDIA CC securing GPU
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { GpuTeeCompare }
