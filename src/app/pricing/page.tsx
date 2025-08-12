'use client'

import { Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const professionalInstances = [
  {
    name: 'tdx.medium',
    specs: {
      cpu: '1 vCPU',
      ram: '2GB RAM',
      storage: '40GB SSD',
      traffic: '40GB Network Traffic',
    },
    benefits: [
      'Pay-As-You-Go, scale up and down as needed',
      'Advanced monitoring',
      'Premium on-call support',
      'Premium 99.9% uptime SLA',
      'Intel TDX hardware security',
    ],
    price: 0.069,
    price_monthly: (0.069 * 730).toFixed(2),
  },
  {
    name: 'tdx.large',
    specs: {
      cpu: '2 vCPU',
      ram: '4GB RAM',
      storage: '80GB SSD',
      traffic: '80GB Network Traffic',
    },
    benefits: [
      'Pay-As-You-Go, scale up and down as needed',
      'Advanced monitoring',
      'Premium on-call support',
      'Premium 99.9% uptime SLA',
      'Intel TDX hardware security',
    ],
    price: 0.139,
    price_monthly: (0.139 * 730).toFixed(2),
    popular: true,
  },
  {
    name: 'tdx.2xlarge',
    specs: {
      cpu: '4 vCPU',
      ram: '8GB RAM',
      storage: '160GB SSD',
      traffic: '160GB Network Traffic',
    },
    benefits: [
      'Pay-As-You-Go, scale up and down as needed',
      'Advanced monitoring',
      'Premium on-call support',
      'Premium 99.9% uptime SLA',
      'Intel TDX hardware security',
    ],
    price: 0.279,
    price_monthly: (0.279 * 730).toFixed(2),
  },
]

const gpuInstance = {
  specs: {
    gpu: 'NVIDIA H200 x 8',
    vram: '1120GB VRAM',
    cpu: '64 vCPU',
    ram: '3TB RAM',
  },
  benefits: [
    'Everything in Compute Enterprise',
    'Fully verifiable TEE chain-of-trust with NVIDIA GPU Remote Attestation',
    "Compatible with Phala and NEAR's private-ml-sdk",
    'Shared GPUs are also available',
  ],
  price: 2.56,
  price_monthly: 2.56 * 730,
}

const apiFeatures = [
  'No infrastructure management',
  'Automatic scaling',
  'High availability',
  'Intel TDX and NVIDIA Remote Attestation',
  'On-Chain Verifiable Proof',
]

// Reusable components only for GPU section
const GpuCard = ({ isMonthly }: { isMonthly: boolean }) => (
  <div className="rounded-lg border p-4 sm:p-6 bg-muted shadow">
    <h3 className="font-semibold">NVIDIA H200 Confidential Compute</h3>
    <p className="mt-1 text-sm">Start from</p>
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-semibold">
        ${isMonthly ? gpuInstance.price_monthly : gpuInstance.price}
      </span>
      <span className="text-muted-foreground text-sm">
        / gpu / {isMonthly ? 'month' : 'hour'}
      </span>
    </div>
    <p className="mt-1 text-muted-foreground text-sm">
      6-Month Commitment Saving of{' '}
      <span className="text-primary-500 font-semibold">19%</span>
    </p>

    <div className="mt-6">
      <p className="font-medium mb-3 text-sm">Resources</p>
      <ul className="space-y-2 text-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
        {Object.entries(gpuInstance.specs).map(
          ([key, value]: [string, string]) => (
            <li key={key} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary-500 shrink-0" />
              <span>{value}</span>
            </li>
          ),
        )}
      </ul>
    </div>

    <div className="mt-6">
      <p className="font-medium mb-3 text-sm">Benefits</p>
      <ul className="space-y-2 text-sm">
        {gpuInstance.benefits.map((benefit: string) => (
          <li key={benefit} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary-500" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>

    <Button className="w-full mt-6" asChild variant="outline">
      <Link href="/register">Get Started</Link>
    </Button>
  </div>
)

const ApiCard = () => (
  <div className="rounded-lg border p-4 sm:p-6 bg-muted shadow">
    <h3 className="font-semibold">GPU TEE On-Demand API</h3>
    <div className="mt-1">
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-semibold">$0.14</span>
        <span className="text-muted-foreground text-sm">/1M tokens</span>
      </div>
      <p className="text-muted-foreground text-sm">Input</p>
    </div>
    <div className="mt-4">
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-semibold">$0.20</span>
        <span className="text-muted-foreground text-sm">/1M tokens</span>
      </div>
      <p className="text-muted-foreground text-sm">Output</p>
    </div>
    <p className="mt-1 text-muted-foreground text-sm">
      Serverless AI inference by{' '}
      <Link
        href="https://red-pill.ai"
        target="_blank"
        className="underline underline-offset-4"
      >
        RedPill AI
      </Link>
      .
    </p>

    <div className="mt-6">
      <p className="font-medium mb-3 text-sm">Features</p>
      <ul className="space-y-2 text-sm">
        {apiFeatures.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <Button className="w-full mt-6" asChild variant="outline">
      <Link href="/api-docs">View Documentation</Link>
    </Button>
  </div>
)

export default function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(false)

  return (
    <div className="container">
      <div className="w-full max-w-7xl mx-auto py-8 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 md:mt-6 text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
            Pay as you go pricing for every scale. Only pay for what you use,
            billed by the hour.
          </p>

          {/* Pricing Toggle */}
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-3">
            <span
              className={`text-sm ${!isMonthly ? 'text-primary-500 font-medium' : 'text-muted-foreground'}`}
            >
              Hourly
            </span>
            <Switch checked={isMonthly} onCheckedChange={setIsMonthly} />
            <span
              className={`text-sm ${isMonthly ? 'text-primary-500 font-medium' : 'text-muted-foreground'}`}
            >
              Monthly
            </span>
          </div>
        </div>

        {/* CPU Instances Section */}
        <div className="mb-16 md:mb-24">
          {/* Mobile View */}
          <div className="xl:hidden py-4">
            <Tabs defaultValue="tdx.medium" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                <TabsTrigger value="tdx.medium">Small</TabsTrigger>
                <TabsTrigger value="tdx.large">Medium</TabsTrigger>
                <TabsTrigger value="tdx.2xlarge">Large</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              </TabsList>

              {professionalInstances.map((instance) => (
                <TabsContent key={instance.name} value={instance.name}>
                  <div
                    className={`rounded-lg border p-4 sm:p-6 bg-muted shadow ${instance.popular ? 'border-2 border-primary-500' : ''}`}
                  >
                    {instance.popular && (
                      <Badge variant="secondary" className="mb-4">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="font-semibold">{instance.name}</h3>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-2xl font-semibold">
                        ${isMonthly ? instance.price_monthly : instance.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        /{isMonthly ? 'month' : 'hour'}
                      </span>
                    </div>
                    <p className="mt-1 text-muted-foreground text-sm">
                      Professional grade secure computing
                    </p>

                    <div className="mt-6">
                      <p className="font-medium mb-3 text-sm">Resources</p>
                      <ul className="space-y-2 text-sm">
                        {Object.entries(instance.specs).map(([key, value]) => (
                          <li key={key} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary-500" />
                            <span>{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <p className="font-medium mb-3 text-sm">Benefits</p>
                      <ul className="space-y-2 text-sm">
                        {instance.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary-500" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full mt-6" asChild>
                      <Link href="/register">Get Started</Link>
                    </Button>
                  </div>
                </TabsContent>
              ))}

              <TabsContent value="enterprise">
                <div className="rounded-lg border p-4 sm:p-6 bg-muted shadow">
                  <Badge variant="outline" className="mb-4">
                    Enterprise
                  </Badge>
                  <h3 className="font-semibold">Custom Solution</h3>
                  <p className="mt-1 text-muted-foreground text-sm">
                    Need a custom solution? Our enterprise plan includes
                    dedicated support, custom configurations, and volume
                    discounts.
                  </p>

                  <div className="mt-6">
                    <p className="font-medium mb-3 text-sm">
                      Enterprise Features
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary-500" />
                        <span>Custom resource allocation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary-500" />
                        <span>Custom security policies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary-500" />
                        <span>24/7 Premium Support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary-500 shrink-0" />
                        <span>Dedicated Technical Account Manager</span>
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full mt-6" asChild variant="outline">
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Tablet View */}
          <div className="hidden lg:block xl:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {professionalInstances.map((instance) => (
                <div
                  key={instance.name}
                  className={`rounded-lg border p-6 bg-muted shadow ${instance.popular ? 'border-2 border-primary-500' : ''}`}
                >
                  {instance.popular && (
                    <Badge variant="secondary" className="mb-4">
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="font-semibold">{instance.name}</h3>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-2xl font-semibold">
                      ${isMonthly ? instance.price_monthly : instance.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      /{isMonthly ? 'month' : 'hour'}
                    </span>
                  </div>
                  <p className="mt-1 text-muted-foreground text-sm">
                    Professional grade secure computing
                  </p>

                  <div className="mt-6">
                    <p className="font-medium mb-3 text-sm">Resources</p>
                    <ul className="space-y-2 text-sm">
                      {Object.entries(instance.specs).map(([key, value]) => (
                        <li key={key} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary-500" />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="font-medium mb-3 text-sm">Benefits</p>
                    <ul className="space-y-2 text-sm">
                      {instance.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full mt-6" asChild>
                    <Link href="/register">Get Started</Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Enterprise Card for Tablet */}
            <div className="rounded-lg border p-6 bg-muted shadow max-w-lg mx-auto">
              <Badge variant="outline" className="mb-4">
                Enterprise
              </Badge>
              <h3 className="font-semibold">Custom Solution</h3>
              <p className="mt-1 text-muted-foreground text-sm">
                Need a custom solution? Our enterprise plan includes dedicated
                support, custom configurations, and volume discounts.
              </p>

              <div className="mt-6">
                <p className="font-medium mb-3 text-sm">Enterprise Features</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500" />
                    <span>Custom resource allocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500" />
                    <span>Custom security policies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500" />
                    <span>24/7 Premium Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500 shrink-0" />
                    <span>Dedicated Technical Account Manager</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full mt-6" asChild variant="outline">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden xl:grid xl:grid-cols-12 gap-4 xl:gap-6">
            {/* Professional Instances - Combined */}
            <div className="col-span-9 rounded-lg border-2 p-4 lg:p-6 bg-muted shadow">
              <Badge variant="outline" className="mb-4">
                Professional TEE Instances
              </Badge>
              <h3 className="font-semibold">Secure & Scalable Computing</h3>
              <p className="mt-1 text-muted-foreground text-sm">
                Production-grade confidential computing with guaranteed
                performance
              </p>

              <div className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:divide-x">
                  {professionalInstances.map((instance) => (
                    <div key={instance.name} className="lg:pr-6 pb-6 lg:pb-0 border-b lg:border-b-0 last:border-b-0">
                      {instance.popular && (
                        <div className="absolute -top-6 left-3 w-full flex">
                          <Badge variant="secondary" className="text-xs">
                            Most Popular
                          </Badge>
                        </div>
                      )}

                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            instance.name === 'tdx.small'
                              ? 'bg-primary-500/60'
                              : instance.name === 'tdx.medium'
                                ? 'bg-primary-500/80'
                                : 'bg-primary-500'
                          }`}
                        />
                        <h4 className="text-sm font-medium">{instance.name}</h4>
                      </div>

                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-2xl font-semibold">
                          ${isMonthly ? instance.price_monthly : instance.price}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          /{isMonthly ? 'month' : 'hour'}
                        </span>
                      </div>

                      <div className="mt-4">
                        <p className="font-medium mb-3 text-sm">Resources</p>
                        <ul className="space-y-2 text-sm">
                          {Object.entries(instance.specs).map(
                            ([key, value]) => (
                              <li key={key} className="flex gap-2">
                                <Check className="h-4 w-4 text-primary-500 shrink-0 mt-0.5" />
                                <span>{value}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="font-medium mb-3 text-sm">Benefits</p>
                  <ul className="space-y-2 text-sm">
                    {professionalInstances[0].benefits.map(
                      (benefit: string) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary-500 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <Button className="w-full mt-6" asChild>
                  <Link href="/register">Get Started with Professional</Link>
                </Button>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="col-span-3 rounded-lg border p-4 lg:p-6 bg-muted shadow">
              <Badge variant="outline" className="mb-4">
                Enterprise
              </Badge>
              <h3 className="font-semibold">Custom Solution</h3>
              <p className="mt-1 text-muted-foreground text-sm">
                Need a custom solution? Our enterprise plan includes dedicated
                support, custom configurations, and volume discounts.
              </p>

              <div className="mt-6">
                <p className="font-medium mb-3 text-sm">Enterprise Features</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500" />
                    <span>Custom resource allocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500" />
                    <span>Custom security policies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500" />
                    <span>24/7 Premium Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500 shrink-0" />
                    <span>Dedicated Technical Account Manager</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full mt-6" asChild variant="outline">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* GPU TEE Instances & API Section */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              GPU TEE Instances & API Access
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Choose between dedicated GPU instances or on-demand API access
            </p>
          </div>

          {/* Mobile Plan Selector */}
          <div className="md:hidden mb-4">
            <Tabs defaultValue="gpu" className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="gpu">GPU Compute</TabsTrigger>
                <TabsTrigger value="api">API Access</TabsTrigger>
              </TabsList>
              <TabsContent value="gpu">
                <GpuCard isMonthly={isMonthly} />
              </TabsContent>
              <TabsContent value="api">
                <ApiCard />
              </TabsContent>
            </Tabs>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {/* GPU Instance Card */}
            <GpuCard isMonthly={isMonthly} />

            {/* API Access Card */}
            <ApiCard />
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            All prices are pay-as-you-go. You only pay for what you use, billed
            by the hour. Professional and GPU instances require a valid payment
            method. Enterprise customers may qualify for volume discounts.
          </p>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block rounded-full bg-primary-500/10 px-3 py-1 text-sm text-primary-500 mb-4">
            Why Choose Phala Cloud
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            The Most Valuable Offer in
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Confidential Computing
          </h2>
          <p className="mt-4 md:mt-6 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            We've engineered an unmatched value proposition that delivers
            exactly what you need:
            <span className="font-medium">
              {' '}
              enterprise-grade security, guaranteed verifiability, unlimited
              scalability
            </span>
            , and comprehensive support—all at market-disrupting prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            {
              title: 'Pay Only For Value',
              highlight: 'From $0.069/hour',
              description:
                'Transparent usage-based pricing that scales with your success. No hidden fees, no surprises.',
              features: [
                'Per-second billing',
                'No minimum commitment',
                'Volume discounts available',
                'Resource autoscaling',
              ],
              gradient: 'from-green-50 to-white',
              icon: '💎',
              featured: true,
            },
            {
              title: 'Enterprise-Ready',
              highlight: '99.9% Uptime SLA',
              description:
                'Production-grade infrastructure with guaranteed reliability for mission-critical workloads.',
              features: [
                'Hardware-enforced security',
                'Real-time attestation',
                '24/7 premium support',
                'Custom configurations',
              ],
              gradient: 'from-purple-50 to-white',
              icon: '🏢',
            },
            {
              title: 'Secure GPU Computing',
              highlight: 'NVIDIA H200 Ready',
              description:
                'Lead the market with confidential AI capabilities that ensure complete data privacy.',
              features: [
                'AI model protection',
                'Secure inference',
                'High throughput',
                'Flexible scaling',
              ],
              gradient: 'from-orange-50 to-white',
              icon: '⚡',
            },
            {
              title: 'Privacy-First AI',
              highlight: 'Built-in LLM API',
              description:
                'Deploy AI solutions that protect sensitive data while maintaining full control over your IP.',
              features: [
                'Pay-per-token pricing',
                'Data sovereignty',
                'Model fine-tuning',
                'API integration',
              ],
              gradient: 'from-pink-50 to-white',
              icon: '🔐',
            },
            {
              title: 'Future-Proof Platform',
              highlight: 'Open Architecture',
              description:
                'Scale freely on a decentralized infrastructure that evolves with market demands.',
              features: [
                'No vendor lock-in',
                'On-chain verification',
                'Global edge network',
                'Community-driven',
              ],
              gradient: 'from-indigo-50 to-white',
              icon: '🌐',
            },
          ].map((card) => (
            <div
              key={card.title}
              className={cn(
                'rounded-lg border p-6 md:p-8 relative bg-gradient-to-b bg-muted shadow',
                card.gradient,
              )}
            >
              <div className="text-2xl md:text-3xl mb-4 md:mb-6">{card.icon}</div>
              <div className="space-y-2 mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold">{card.title}</h3>
                <div className="text-primary-500 font-semibold">
                  {card.highlight}
                </div>
                <p className="text-muted-foreground text-sm">
                  {card.description}
                </p>
              </div>
              <ul className="space-y-3">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto rounded-full bg-muted/50 px-3 sm:px-4 py-2">
            <span>🎯</span>
            <p>
              We've streamlined enterprise-grade confidential computing to
              maximize your potential for success.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
