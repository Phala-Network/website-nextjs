import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function H100Pricing() {
  return (
    <section id="pricing" className="py-32">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="mb-2 font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
            H100 Pricing
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            Flexible pricing for any workload. All prices include Full-Stack TEE
            protection.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-0">
          <Card className="flex w-full flex-col justify-between gap-8 text-center lg:rounded-r-none lg:border-r-0">
            <CardHeader>
              <CardTitle>On-Demand</CardTitle>
              <p className="text-muted-foreground">Pay only for what you use</p>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <span className="text-5xl font-bold">$3.08</span>
                <span className="text-muted-foreground">/GPU/hr</span>
              </div>
              <p className="mt-3 text-muted-foreground">
                No commitment required
              </p>
              <div className="mt-6 space-y-2 text-left text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Scale from 1-2 GPUs instantly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>US-West region</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Full-Stack TEE included</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Dual attestation reports</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="https://cloud.phala.network/dashboard/gpu-tee">
                  Deploy Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Separator
            orientation="vertical"
            className="hidden h-auto lg:block"
          />
          <Card className="flex w-full flex-col justify-between gap-8 rounded-l-none border-l-0 text-center border-primary">
            <CardHeader>
              <div className="mb-2 text-xs font-bold text-primary uppercase">
                SAVE 23%
              </div>
              <CardTitle>Reserved</CardTitle>
              <p className="text-muted-foreground">12-month commitment</p>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <span className="text-5xl font-bold">$2.38</span>
                <span className="text-muted-foreground">/GPU/hr</span>
              </div>
              <p className="mt-3 text-muted-foreground">Best long-term value</p>
              <div className="mt-6 space-y-2 text-left text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Guaranteed GPU availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Priority support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Custom configurations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Enterprise SLA options</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="default" className="w-full">
                <Link href="https://phala.com/contact">Contact Sales</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
