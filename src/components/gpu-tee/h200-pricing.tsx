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

export function H200Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="mb-2 font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
            H200 Pricing
          </h2>
          <p className="font-display text-muted-foreground leading-7 lg:text-xl">
            Flexible pricing for flagship performance. All prices include
            Full-Stack TEE protection.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-0">
          <Card className="flex w-full flex-col justify-between gap-8 text-center lg:rounded-r-none lg:border-r-0">
            <CardHeader>
              <CardTitle className="font-display">On-Demand</CardTitle>
              <p className="font-display text-sm leading-5 text-muted-foreground">Pay only for what you use</p>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <span className="font-display text-5xl font-bold leading-none">$3.50</span>
                <span className="font-display text-base leading-6 text-muted-foreground">/GPU/hr</span>
              </div>
              <p className="mt-3 font-display text-sm leading-5 text-muted-foreground">
                No commitment required
              </p>
              <div className="mt-6 space-y-2 text-left font-display text-sm leading-5">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Scale from 1-8 GPUs instantly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>US-West & India regions</span>
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
              <Button asChild className="w-full font-medium">
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
              <div className="mb-2 font-display text-xs leading-4 font-bold text-primary uppercase">
                SAVE 27%
              </div>
              <CardTitle className="font-display">Reserved</CardTitle>
              <p className="font-display text-sm leading-5 text-muted-foreground">6-month commitment</p>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <span className="font-display text-5xl font-bold leading-none">$2.56</span>
                <span className="font-display text-base leading-6 text-muted-foreground">/GPU/hr</span>
              </div>
              <p className="mt-3 font-display text-sm leading-5 text-muted-foreground">
                Best value for sustained workloads
              </p>
              <div className="mt-6 space-y-2 text-left font-display text-sm leading-5">
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
              <Button asChild variant="default" className="w-full font-medium">
                <Link href="https://phala.com/contact">Contact Sales</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
