import {
  AlertCircle,
  CheckCircle,
  CircleMinus,
  Eye,
  Gauge,
  HelpCircle,
  type LucideIcon,
  Shield,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'
import Image from 'next/image'
import { Fragment } from 'react'

import { Button } from '@/components/ui/button'

type Status = 'good' | 'bad' | 'warn' | 'unknown'

type Column = {
  title: string
  subtitle: string
}

type Row = {
  key: string
  label: string
  icon: LucideIcon
  noBottomBorder?: boolean
  cells: { status: Status; text: string }[]
}

const columns: Column[] = [
  { title: 'dstack', subtitle: 'Open-source confidential computing' },
  { title: 'AWS / GCP / Azure', subtitle: 'Cloud providers' },
  { title: 'Confidential Containers', subtitle: 'CNCF project' },
  { title: 'Others', subtitle: 'Alternative solutions' },
]

const rows: Row[] = [
  {
    key: 'transparency',
    label: 'Transparency',
    icon: Eye,
    cells: [
      { status: 'good', text: 'Open Source' },
      { status: 'bad', text: 'Proprietary' },
      { status: 'good', text: 'Open Source' },
      { status: 'bad', text: 'Proprietary' },
    ],
  },
  {
    key: 'control',
    label: 'Control',
    icon: SlidersHorizontal,
    cells: [
      { status: 'good', text: 'Code Controlled' },
      { status: 'bad', text: 'Vendor Controlled' },
      { status: 'bad', text: 'Developer Controlled' },
      { status: 'bad', text: 'Third-party' },
    ],
  },
  {
    key: 'auditability',
    label: 'Auditability',
    icon: Shield,
    cells: [
      { status: 'good', text: 'Audited by zkSecurity' },
      { status: 'warn', text: 'Limited' },
      { status: 'bad', text: 'No audit' },
      { status: 'bad', text: 'None' },
    ],
  },
  {
    key: 'performance',
    label: 'Performance',
    icon: Gauge,
    cells: [
      { status: 'good', text: '<5% Overhead' },
      { status: 'warn', text: 'Varies' },
      { status: 'unknown', text: 'Unknown' },
      { status: 'unknown', text: 'Unknown' },
    ],
  },
  {
    key: 'ai-focus',
    label: 'AI Focus',
    icon: Sparkles,
    noBottomBorder: true,
    cells: [
      { status: 'good', text: 'Purpose-built' },
      { status: 'warn', text: 'Generic Cloud' },
      { status: 'warn', text: 'Generic' },
      { status: 'warn', text: 'Limited' },
    ],
  },
]

function StatusIcon({ status }: { status: Status }) {
  if (status === 'good') {
    return <CheckCircle className="size-5 text-success" />
  }
  if (status === 'bad') {
    return <CircleMinus className="size-5 text-destructive" />
  }
  if (status === 'warn') {
    return <AlertCircle className="size-5 text-warning" />
  }
  return <HelpCircle className="size-5 text-muted-foreground" />
}

const Compare3 = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto">
      <div className="container">
        <div className="flex flex-col items-center gap-5">
          <h2 className="max-w-2xl text-center text-3xl font-semibold sm:text-4xl">
            dstack vs Others
          </h2>
          <p className="text-center text-muted-foreground text-xl font-medium">
            Compare dstack with traditional cloud providers and other
            confidential computing solutions
          </p>
        </div>
        <div className="sm:-mx-7 overflow-x-auto">
          <div className="mt-14 grid min-w-4xl grid-cols-5 text-sm">
            {/* Header Row */}
            <div className="border-b border-border p-4" />
            {columns.map((col, idx) => (
              <div
                key={col.title}
                className={`${idx === 0 ? 'rounded-t-2xl bg-muted ' : ''}flex flex-col items-center gap-2 border-b border-border p-4`}
              >
                {idx === 0 ? (
                  <Image
                    src="/dstack/logo.svg"
                    alt="dstack"
                    width={96}
                    height={24}
                    className="h-6 w-auto -mb-1"
                    priority
                  />
                ) : (
                  <p className="text-center font-semibold">{col.title}</p>
                )}
                <p className="mt-1 text-center text-xs text-muted-foreground">
                  {col.subtitle}
                </p>
              </div>
            ))}

            {/* Data Rows */}
            {rows.map((row) => {
              const rowBorder = row.noBottomBorder
                ? 'border-border'
                : 'border-b border-border'
              const cellBorder = row.noBottomBorder
                ? 'border-border'
                : 'border-b border-border'
              return (
                <Fragment key={`${row.key}-${row.label}`}>
                  <div className={`flex items-center gap-2 p-4 ${rowBorder}`}>
                    <row.icon className="size-4 shrink-0" />
                    <span className="font-semibold">{row.label}</span>
                  </div>
                  {row.cells.map((cell, idx) => (
                    <div
                      key={`${row.key}-${idx}`}
                      className={`flex flex-col items-center justify-center gap-2 p-4 ${cellBorder} ${idx === 0 ? 'bg-muted' : ''}`}
                    >
                      <StatusIcon status={cell.status} />
                      <span className="text-xs text-muted-foreground">
                        {cell.text}
                      </span>
                    </div>
                  ))}
                </Fragment>
              )
            })}

            {/* CTA Row */}
            <div className="border-border p-4" />
            <div className="flex items-center justify-center gap-2 rounded-b-2xl border-border bg-muted p-4">
              <Button className="w-full" asChild>
                <a
                  href="https://docs.phala.network/dstack/design-documents"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Compare3 }
