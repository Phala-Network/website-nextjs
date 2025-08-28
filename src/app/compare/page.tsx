'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'


interface ComparisonData {
  [key: string]: Array<{
    name: string
    value: string
    percentage: number
    isPhala: boolean
  }>
}

const comparisonData: ComparisonData = {
  performance: [
    { name: 'Phala Cloud', value: '15 sec', percentage: 50, isPhala: true },
    { name: 'GCP CVM', value: '25 sec', percentage: 83, isPhala: false },
    { name: 'AWS Nitro', value: '30 sec', percentage: 100, isPhala: false },
    { name: 'Azure Confidential', value: '28 sec', percentage: 93, isPhala: false },
  ],
  security: [
    { name: 'Phala Cloud', value: '100%', percentage: 100, isPhala: true },
    { name: 'GCP CVM', value: '60%', percentage: 60, isPhala: false },
    { name: 'AWS Nitro', value: '70%', percentage: 70, isPhala: false },
    { name: 'Azure Confidential', value: '65%', percentage: 65, isPhala: false },
  ],
  control: [
    { name: 'Phala Cloud', value: '100%', percentage: 100, isPhala: true },
    { name: 'GCP CVM', value: '40%', percentage: 40, isPhala: false },
    { name: 'AWS Nitro', value: '30%', percentage: 30, isPhala: false },
    { name: 'Azure Confidential', value: '35%', percentage: 35, isPhala: false },
  ],
  cost: [
    { name: 'Phala Cloud', value: '0 hrs', percentage: 0, isPhala: true },
    { name: 'GCP CVM', value: '240 hrs', percentage: 60, isPhala: false },
    { name: 'AWS Nitro', value: '400 hrs', percentage: 100, isPhala: false },
    { name: 'Azure Confidential', value: '320 hrs', percentage: 80, isPhala: false },
  ],
}

const tabs = [
  {
    id: 'performance',
    title: 'Performance',
    subtitle: 'Response Time',
    description: 'TEE container startup time (lower is better)',
  },
  {
    id: 'security',
    title: 'Security',
    subtitle: 'Chain of Trust',
    description: 'Chain of trust coverage (higher is better)',
  },
  {
    id: 'control',
    title: 'Control',
    subtitle: 'User Control',
    description: 'How much control end users have (higher is better)',
  },
  {
    id: 'cost',
    title: 'Cost',
    subtitle: 'Engineering Time',
    description: 'Private application build - engineer hours overhead (lower is better)',
  },
]

const comparisons = [
  {
    name: 'AWS Nitro Enclaves',
    slug: 'aws-nitro',
    description: 'Enterprise-grade confidential computing on AWS',
  },
  {
    name: 'GCP Confidential VMs',
    slug: 'gcp',
    description: 'Google\'s AMD SEV-based confidential computing',
  },
  {
    name: 'Tinfoil Security',
    slug: 'tinfoil',
    description: 'Managed confidential AI inference service',
  },
]

export default function ComparePage() {
  const [activeTab, setActiveTab] = useState('performance')

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge variant="outline">Performance Comparison</Badge>
            <h1 className="max-w-4xl text-4xl font-semibold sm:text-6xl">
              Feel the <span className="text-foreground">difference</span>
            </h1>
            <p className="max-w-3xl text-muted-foreground text-lg">
              Skip the compromise and secure your data with Phala Cloud's unmatched performance, transparency, and open-source security.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Comparison Section */}
      <section className="py-16">
        <div className="container max-w-5xl">
          {/* Tabs */}
          <div className="flex justify-between mb-10 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-center py-4 px-2 cursor-pointer transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="text-xl font-semibold mb-1">{tab.title}</div>
                <div className="text-sm opacity-80">{tab.subtitle}</div>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c7fa3c]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-8">
            <h2 className="text-center text-xl text-muted-foreground mb-10">
              {tabs.find((tab) => tab.id === activeTab)?.description}
            </h2>

            <div className="space-y-8">
              {comparisonData[activeTab]?.map((item) => (
                <div key={item.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold">{item.name}</div>
                    <div className="font-medium text-right">{item.value}</div>
                  </div>
                  <div className="h-10 bg-muted/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        item.isPhala ? 'bg-[#c7fa3c]' : 'bg-slate-600'
                      }`}
                      style={{ width: `${item.percentage === 0 ? 5 : item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground mt-12">
            Benchmark data as of March 2025
          </div>
        </div>
      </section>

      {/* Detailed Comparisons Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">
                Detailed Comparisons
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore comprehensive side-by-side comparisons with specific solutions.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {comparisons.map((comparison) => (
                <div
                  key={comparison.slug}
                  className="rounded-lg border bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="mb-2 text-xl font-semibold">
                    Phala vs {comparison.name}
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    {comparison.description}
                  </p>
                  <Button asChild className="w-full">
                    <Link href={`/compare/${comparison.slug}`}>
                      View Detailed Comparison
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Button size="lg" asChild className="bg-[#c7fa3c] text-[#111827] hover:bg-[#b8eb2d]">
              <a href="https://cloud.phala.network">Try Phala Cloud</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
