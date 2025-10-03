'use client'

import { Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Pricing5 } from '@/components/shadcn-blocks/pricing5'
import { cn } from '@/lib/utils'

const vmInstances = [
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
    priceMonthly: (0.069 * 730).toFixed(2),
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
    priceMonthly: (0.139 * 730).toFixed(2),
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
    priceMonthly: (0.279 * 730).toFixed(2),
  },
]

const gpuPlans = [
  {
    name: 'NVIDIA H100',
    badge: 'Enterprise Standard',
    specs: {
      gpu: 'H100 Tensor Core',
      memory: '80GB HBM3',
      bandwidth: '3.35 TB/s',
      tee: 'Intel TDX + NVIDIA CC',
    },
    priceOnDemand: 3.08,
    priceReserved: 2.38,
    commitment: '12-month',
    savings: '23%',
    href: '/gpu-tee/h100',
  },
  {
    name: 'NVIDIA H200',
    badge: 'Flagship Performance',
    specs: {
      gpu: 'H200 Tensor Core',
      memory: '141GB HBM3e',
      bandwidth: '4.8 TB/s',
      tee: 'Intel TDX + NVIDIA CC',
    },
    priceOnDemand: 3.50,
    priceReserved: 2.56,
    commitment: '6-month',
    savings: '27%',
    href: '/gpu-tee/h200',
    popular: true,
  },
  {
    name: 'NVIDIA B200',
    badge: 'Available Now',
    specs: {
      gpu: 'B200 Blackwell',
      memory: '192GB HBM3e',
      bandwidth: '8 TB/s',
      tee: 'Intel TDX + NVIDIA CC',
    },
    priceOnDemand: 7.99,
    priceReserved: 5.63,
    commitment: '6-month',
    savings: '29%',
    href: '/gpu-tee/b200',
  },
]

export default function PricingClient() {
  const [isMonthly, setIsMonthly] = useState(false)

  return (
    <div>
      {/* Hero Section */}
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pay-as-you-go pricing for every scale. Only pay for what you use, billed by the hour.
          </p>

          {/* Pricing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm ${!isMonthly ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              Hourly
            </span>
            <Switch checked={isMonthly} onCheckedChange={setIsMonthly} />
            <span className={`text-sm ${isMonthly ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
          </div>
        </div>
      </div>

      {/* Confidential VM Instances */}
      <div className="container pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Confidential VM Instances</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional-grade secure computing with Intel TDX
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {vmInstances.map((instance) => (
            <Card
              key={instance.name}
              className={cn(
                'relative',
                instance.popular && 'border-2 border-primary shadow-lg'
              )}
            >
              {instance.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="px-3 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{instance.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">
                    ${isMonthly ? instance.priceMonthly : instance.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    /{isMonthly ? 'month' : 'hour'}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Resources</div>
                  <ul className="space-y-2 text-sm">
                    {Object.values(instance.specs).map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://cloud.phala.network/register">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}

          {/* Enterprise Card */}
          <Card>
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">Enterprise</Badge>
              <CardTitle className="text-xl">Custom Solution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Need a custom solution? Our enterprise plan includes dedicated support, custom configurations, and volume discounts.
              </p>

              <div className="space-y-2">
                <div className="text-sm font-medium">Enterprise Features</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>Custom resource allocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>Custom security policies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>24/7 Premium Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>Dedicated Account Manager</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Main Pricing Comparison - Confidential VM vs GPU TEE */}
      <Pricing5 />

      {/* GPU TEE Detailed Plans */}
      <div className="container py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">GPU TEE Configurations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from H100, H200, or B200 GPUs with Full-Stack TEE protection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {gpuPlans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'relative',
                plan.popular && 'border-2 border-primary shadow-lg'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="px-3 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <Badge variant="outline">{plan.badge}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pricing */}
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">On-Demand</div>
                    <div className="text-3xl font-bold">
                      ${plan.priceOnDemand}
                      <span className="text-sm font-normal text-muted-foreground">/GPU/hour</span>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm text-muted-foreground">Reserved ({plan.commitment})</div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Save {plan.savings}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      ${plan.priceReserved}
                      <span className="text-sm font-normal text-muted-foreground">/GPU/hour</span>
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Specifications</div>
                  <ul className="space-y-2 text-sm">
                    {Object.entries(plan.specs).map(([key, value]) => (
                      <li key={key} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button className="w-full" asChild>
                  <Link href={plan.href}>View Details</Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="https://cloud.phala.network/dashboard/gpu-tee">
                    Configure Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="w-full bg-muted/30 py-24">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Why Choose Phala Cloud
            </div>
            <h2 className="text-3xl font-bold">
              The Most Valuable Offer in Confidential Computing
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security, guaranteed verifiability, unlimited scalability, and comprehensive support—all at market-disrupting prices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Pay Only For Value',
                highlight: 'From $0.069/hour',
                description: 'Transparent usage-based pricing that scales with your success. No hidden fees, no surprises.',
                features: [
                  'Per-second billing',
                  'No minimum commitment',
                  'Volume discounts available',
                  'Resource autoscaling',
                ],
                icon: '💎',
              },
              {
                title: 'Enterprise-Ready',
                highlight: '99.9% Uptime SLA',
                description: 'Production-grade infrastructure with guaranteed reliability for mission-critical workloads.',
                features: [
                  'Hardware-enforced security',
                  'Real-time attestation',
                  '24/7 premium support',
                  'Custom configurations',
                ],
                icon: '🏢',
              },
              {
                title: 'Secure GPU Computing',
                highlight: 'H100/H200/B200',
                description: 'Lead the market with confidential AI capabilities that ensure complete data privacy.',
                features: [
                  'AI model protection',
                  'Secure inference',
                  'High throughput',
                  'Flexible scaling',
                ],
                icon: '⚡',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-lg border p-8 bg-background shadow-sm"
              >
                <div className="text-3xl mb-6">{card.icon}</div>
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <div className="text-primary font-semibold">{card.highlight}</div>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                </div>
                <ul className="space-y-3">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ/Footer */}
      <div className="container py-16 text-center">
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          All prices are pay-as-you-go. You only pay for what you use, billed by the hour. Enterprise customers may qualify for volume discounts.{' '}
          <Link href="/contact" className="text-primary hover:underline">Contact sales</Link> for custom configurations.
        </p>
      </div>
    </div>
  )
}
