'use client'

import { Check, X } from 'lucide-react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function CompareFullStackTEE() {
  const providers = [
    {
      name: 'Standard Cloud',
      subtitle: 'No TEE',
    },
    {
      name: 'GPU-Only TEE',
      subtitle: 'NVIDIA CC',
    },
    {
      name: 'Phala Cloud',
      subtitle: 'Full-Stack TEE',
      highlight: true,
    },
  ]

  const metrics = [
    {
      name: 'CPU/Memory Protection',
      values: ['bad', 'bad', 'good'],
      details: ['None', 'Exposed', 'Intel TDX'],
    },
    {
      name: 'GPU Encryption',
      values: ['bad', 'good', 'good'],
      details: ['None', 'NVIDIA CC', 'NVIDIA CC'],
    },
    {
      name: 'Full VM Isolation',
      values: ['bad', 'bad', 'good'],
      details: ['Standard', 'GPU only', 'Complete'],
    },
    {
      name: 'Attestation',
      values: ['bad', 'bad', 'good'],
      details: ['None', 'GPU only', 'Dual Reports'],
    },
  ]

  const getStatusIcon = (value: string) => {
    if (value === 'good') return <Check className="h-5 w-5 text-green-600" />
    if (value === 'bad') return <X className="h-5 w-5 text-red-600" />
  }

  const getStatusColor = (value: string) => {
    if (value === 'good') return 'bg-green-50 dark:bg-green-950/20'
    if (value === 'bad') return 'bg-red-50 dark:bg-red-950/20'
    return 'bg-muted/50'
  }

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Private GPU like Local,
            <br />
            But No DevOps Troubles
          </h2>
          <p className="mt-4 text-base text-muted-foreground lg:text-lg">
            Most clouds offer GPU-only protection or no TEE at all. Phala Cloud
            protects your{' '}
            <span className="font-semibold text-foreground">
              entire workload
            </span>{' '}
            with Intel TDX + NVIDIA CC.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="relative overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border/50 bg-muted/20">
                    <TableHead className="w-[200px] text-foreground font-semibold text-base">
                      Feature
                    </TableHead>
                    {providers.map((provider, i) => (
                      <TableHead
                        key={i}
                        className={`text-center font-semibold ${
                          provider.highlight ? 'bg-primary/10' : ''
                        }`}
                      >
                        <div className="flex flex-col items-center gap-1 py-2">
                          <div className="text-sm font-bold">
                            {provider.name}
                          </div>
                          <div className="text-xs text-muted-foreground font-normal">
                            {provider.subtitle}
                          </div>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {metrics.map((metric, i) => (
                    <TableRow key={i} className="border-b border-border/30">
                      <TableCell className="text-foreground py-5 font-medium">
                        {metric.name}
                      </TableCell>
                      {metric.values.map((value, j) => (
                        <TableCell
                          key={j}
                          className={`py-5 text-center ${getStatusColor(
                            value,
                          )} ${providers[j].highlight ? 'bg-primary/10' : ''}`}
                        >
                          <div className="flex flex-col items-center gap-2">
                            {getStatusIcon(value)}
                            <span className="text-xs text-muted-foreground">
                              {metric.details[j]}
                            </span>
                          </div>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
