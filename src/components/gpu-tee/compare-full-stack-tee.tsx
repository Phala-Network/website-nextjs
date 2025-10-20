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
      subtitle: 'No Protection',
    },
    {
      name: 'On-Prem GPU',
      subtitle: 'Local Hardware',
    },
    {
      name: 'Phala Cloud',
      subtitle: 'GPU TEE + CPU TEE',
      highlight: true,
    },
  ]

  const metrics = [
    {
      name: 'CPU/Memory Protection',
      values: ['bad', 'good', 'good'],
      details: ['None', 'Physical', 'Intel TDX'],
    },
    {
      name: 'GPU Encryption',
      values: ['bad', 'bad', 'good'],
      details: ['None', 'None', 'NVIDIA CC'],
    },
    {
      name: 'Full VM Isolation',
      values: ['bad', 'neutral', 'good'],
      details: ['Standard VM', 'Physical', 'TDX + CC'],
    },
    {
      name: 'Attestation',
      values: ['bad', 'bad', 'good'],
      details: ['None', 'None', 'Intel + NVIDIA'],
    },
    {
      name: 'Verifiable Code Integrity',
      values: ['bad', 'bad', 'good'],
      details: ['None', 'Manual', 'Cryptographic'],
    },
    {
      name: 'Cloud Convenience',
      values: ['good', 'bad', 'good'],
      details: ['Easy', 'DevOps burden', 'Managed'],
    },
    {
      name: 'Costs',
      values: ['neutral', 'bad', 'good'],
      details: ['Variable', 'High CapEx', 'Pay-as-you-go'],
    },
    {
      name: 'AI Use Cases',
      values: ['neutral', 'neutral', 'good'],
      details: [
        'Agent only',
        'Inference/Fine-tune/Train',
        'Agent/Inference/Fine-tune/Train',
      ],
    },
  ]

  const getStatusIcon = (value: string) => {
    if (value === 'good') return <Check className="h-5 w-5 text-green-600" />
    if (value === 'bad') return <X className="h-5 w-5 text-red-600" />
    if (value === 'neutral')
      return (
        <div className="h-5 w-5 rounded-full bg-yellow-600/20 border-2 border-yellow-600" />
      )
  }

  const getStatusColor = (value: string) => {
    if (value === 'good') return 'bg-green-50 dark:bg-green-950/20'
    if (value === 'bad') return 'bg-red-50 dark:bg-red-950/20'
    if (value === 'neutral') return 'bg-yellow-50 dark:bg-yellow-950/20'
    return 'bg-muted/50'
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-display text-4xl font-bold leading-none md:text-5xl lg:text-6xl">
            Private GPU like Local,
            <br />
            But No DevOps Troubles
          </h2>
          <p className="mt-4 font-display text-base leading-6 text-muted-foreground lg:text-lg lg:leading-7">
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
                    <TableHead className="w-[200px] text-foreground font-semibold text-lg">
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
                          <div className="text-base font-bold">
                            {provider.name}
                          </div>
                          <div className="text-sm text-muted-foreground font-normal">
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
                      <TableCell className="text-foreground py-5 font-medium text-base">
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
                            <span className="text-sm text-muted-foreground">
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
