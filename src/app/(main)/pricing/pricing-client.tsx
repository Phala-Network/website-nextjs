'use client'

import { useState } from 'react'
import { Check, Clock, HardDrive, Cpu, CirclePause, Zap } from 'lucide-react'
import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const HOURS_PER_MONTH = 730

const cvmInstances = [
  {
    name: 'tdx.medium',
    cpu: '1 vCPU',
    ram: '2GB',
    storage: '40GB',
    price: 0.069,
  },
  {
    name: 'tdx.large',
    cpu: '2 vCPU',
    ram: '4GB',
    storage: '80GB',
    price: 0.139,
    popular: true,
  },
  {
    name: 'tdx.2xlarge',
    cpu: '4 vCPU',
    ram: '8GB',
    storage: '160GB',
    price: 0.279,
  },
]

const gpuInstances = [
  {
    name: 'H100',
    memory: '80GB HBM3',
    bandwidth: '3.35 TB/s',
    priceOnDemand: 3.08,
    priceReserved: 2.38,
    savings: '23%',
  },
  {
    name: 'H200',
    memory: '141GB HBM3e',
    bandwidth: '4.8 TB/s',
    priceOnDemand: 3.5,
    priceReserved: 2.56,
    savings: '27%',
    popular: true,
  },
  {
    name: 'B200',
    memory: '192GB HBM3e',
    bandwidth: '8 TB/s',
    priceOnDemand: 7.99,
    priceReserved: 5.63,
    savings: '29%',
  },
]

const formatPrice = (price: number, isMonthly: boolean) => {
  const value = isMonthly ? price * HOURS_PER_MONTH : price
  if (value >= 1000) {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export default function PricingClient() {
  const [isMonthly, setIsMonthly] = useState(false)

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Pay only for what you use. Per-minute billing with no minimums,
            commitments, or hidden fees.
          </p>

          {/* Billing Highlights */}
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm mb-8">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Per-minute billing</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span>Compute stops when you stop</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-primary" />
              <span>Storage: $0.10/GB/mo</span>
            </div>
          </div>

          {/* Time Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span
              className={cn(
                'text-sm transition-colors',
                !isMonthly ? 'text-primary font-medium' : 'text-muted-foreground'
              )}
            >
              Hourly
            </span>
            <Switch checked={isMonthly} onCheckedChange={setIsMonthly} />
            <span
              className={cn(
                'text-sm transition-colors',
                isMonthly ? 'text-primary font-medium' : 'text-muted-foreground'
              )}
            >
              Monthly (730 hrs)
            </span>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* CVM Card */}
          <Card className="relative">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Confidential VM</CardTitle>
              <CardDescription>
                Secure virtual machines with Intel TDX
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pt-4">
              <div className="text-5xl font-bold">
                ${formatPrice(0.069, isMonthly)}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {isMonthly ? 'per month' : 'per hour'} (tdx.medium)
              </p>
              {!isMonthly && (
                <p className="text-xs text-muted-foreground mt-2">
                  ~${formatPrice(0.069, true)}/month for 730 hours
                </p>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="https://cloud.phala.com/register">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* GPU TEE Card */}
          <Card className="relative border-primary">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge>Most Powerful</Badge>
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">GPU TEE</CardTitle>
              <CardDescription>
                Full-stack TEE with NVIDIA Confidential Computing
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pt-4">
              <div className="text-5xl font-bold">
                ${formatPrice(2.38, isMonthly)}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {isMonthly ? 'per GPU/month' : 'per GPU/hour'} (H100, reserved)
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                H200 from ${formatPrice(2.56, isMonthly)}/{isMonthly ? 'mo' : 'hr'} | B200 from ${formatPrice(5.63, isMonthly)}/{isMonthly ? 'mo' : 'hr'}
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/gpu-tee">View GPU Options</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* How Billing Works */}
      <section className="mt-24 bg-muted/30 py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How Billing Works</h2>
            <p className="text-muted-foreground">
              Two components: Compute and Storage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Compute</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Billed per minute based on instance type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Only charged while running</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Stop a CVM = compute billing stops instantly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <HardDrive className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Storage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>$0.10/GB/month</strong> (~$0.000139/GB/hour)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Charged while CVM exists (running or stopped)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Delete CVM = storage billing stops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Example */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">
                Example: tdx.large with 100GB disk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-700 dark:text-green-400">
                      Running
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Compute</span>
                      <span>
                        ${isMonthly ? formatPrice(0.139, true) : '0.139'}/{isMonthly ? 'mo' : 'hr'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Storage (100GB)</span>
                      <span>
                        ${isMonthly ? '10.00' : '0.014'}/{isMonthly ? 'mo' : 'hr'}
                      </span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>
                        ~${isMonthly ? formatPrice(0.153, true) : '0.153'}/{isMonthly ? 'mo' : 'hr'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CirclePause className="h-4 w-4 text-amber-600" />
                    <span className="font-medium text-amber-700 dark:text-amber-400">
                      Stopped
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Compute</span>
                      <span>$0.00/{isMonthly ? 'mo' : 'hr'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Storage (100GB)</span>
                      <span>
                        ${isMonthly ? '10.00' : '0.014'}/{isMonthly ? 'mo' : 'hr'}
                      </span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>
                        ~${isMonthly ? '10.00' : '0.014'}/{isMonthly ? 'mo' : 'hr'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Instance Types with Tabs */}
      <section className="container py-24 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Instance Types</h2>
          <p className="text-muted-foreground">
            Choose the right configuration for your workload
          </p>
        </div>

        <Tabs defaultValue="cvm" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="cvm">Confidential VM</TabsTrigger>
            <TabsTrigger value="gpu">GPU TEE</TabsTrigger>
          </TabsList>

          <TabsContent value="cvm">
            <div className="grid md:grid-cols-3 gap-4">
              {cvmInstances.map((instance) => (
                <Card
                  key={instance.name}
                  className={cn(
                    'relative',
                    instance.popular && 'border-primary ring-1 ring-primary'
                  )}
                >
                  {instance.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge>Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-mono">
                      {instance.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold">
                        ${formatPrice(instance.price, isMonthly)}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        /{isMonthly ? 'month' : 'hour'}
                      </p>
                    </div>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">CPU</span>
                        <span>{instance.cpu}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">RAM</span>
                        <span>{instance.ram}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Storage</span>
                        <span>{instance.storage}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="sm" asChild>
                      <Link href="https://cloud.phala.com/register">Deploy</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Card className="inline-block">
                <CardContent className="py-4 px-6">
                  <p className="text-sm text-muted-foreground">
                    Need more resources?{' '}
                    <Link
                      href="/contact"
                      className="text-primary hover:underline"
                    >
                      Contact us
                    </Link>{' '}
                    for custom enterprise configurations.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              All instances include Intel TDX hardware security, 99.9% uptime
              SLA, and premium support.
            </p>
          </TabsContent>

          <TabsContent value="gpu">
            <div className="grid md:grid-cols-3 gap-4">
              {gpuInstances.map((instance) => (
                <Card
                  key={instance.name}
                  className={cn(
                    'relative',
                    instance.popular && 'border-primary ring-1 ring-primary'
                  )}
                >
                  {instance.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge>Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">
                      NVIDIA {instance.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold">
                        ${formatPrice(instance.priceReserved, isMonthly)}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        /GPU/{isMonthly ? 'month' : 'hour'} (reserved)
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        On-demand: ${formatPrice(instance.priceOnDemand, isMonthly)}/{isMonthly ? 'mo' : 'hr'}
                      </p>
                    </div>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Memory</span>
                        <span>{instance.memory}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bandwidth</span>
                        <span>{instance.bandwidth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Savings</span>
                        <span className="text-green-600">{instance.savings}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="sm" asChild>
                      <Link href={`/gpu-tee/${instance.name.toLowerCase()}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              All GPUs include Intel TDX + NVIDIA Confidential Computing with
              dual remote attestation.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      {/* FAQ Section */}
      <section className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">Common billing questions</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="partial-month">
            <AccordionTrigger className="text-left">
              If I only use for 1 week, do I pay 25% of monthly cost?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <strong className="text-foreground">Yes!</strong> With per-minute
              billing, you only pay for exact usage. 1 week (168 hours) out of
              730 hours = ~23% of monthly compute cost. Storage is also
              prorated.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="stopped-cvm">
            <AccordionTrigger className="text-left">
              What happens when I stop a CVM?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <strong className="text-foreground">
                Compute charges stop immediately.
              </strong>{' '}
              Storage charges continue (your data is preserved). Delete the CVM
              to stop all charges.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="free-credits">
            <AccordionTrigger className="text-left">
              Do you offer free credits?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes!{' '}
              <strong className="text-foreground">$20 free credits</strong> when
              you verify your account. Credits work for CVM usage (not GPU),
              never expire, and are used before your balance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment">
            <AccordionTrigger className="text-left">
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <strong className="text-foreground">Credit Card</strong> (Stripe),{' '}
              <strong className="text-foreground">Crypto</strong> (Coinbase,
              ERC20 on Base), and{' '}
              <strong className="text-foreground">Wire Transfer</strong> for
              enterprise accounts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="overdue">
            <AccordionTrigger className="text-left">
              What if my balance runs out?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We&apos;ll notify you. CVMs keep running for{' '}
              <strong className="text-foreground">14 days</strong>, then stop.
              Data is kept for{' '}
              <strong className="text-foreground">3 months</strong> before
              deletion.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="container max-w-3xl mt-24 text-center">
        <Card className="bg-muted/30 border-0">
          <CardContent className="py-12">
            <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">
              Start with $20 free credits. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="https://cloud.phala.com/register">
                  Start Free Trial
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Enterprise? Email{' '}
              <a
                href="mailto:cloud@phala.network"
                className="text-primary hover:underline"
              >
                cloud@phala.network
              </a>{' '}
              for volume discounts.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
