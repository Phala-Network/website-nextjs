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

export function B200Pricing() {
  return (
    <section id="pricing" className="py-32">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="mb-2 font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
            B200 Pricing
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            Next-gen performance at competitive prices. All prices include
            Full-Stack TEE protection.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-0">
          <Card className="flex w-full flex-col justify-between gap-8 text-center lg:rounded-r-none lg:border-r-0">
            <CardHeader>
              <CardTitle>Single GPU</CardTitle>
              <p className="text-muted-foreground">1 GPU per instance</p>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <span className="text-5xl font-bold">$7.99</span>
                <span className="text-muted-foreground">/GPU/hr</span>
              </div>
              <p className="mt-3 text-muted-foreground">
                On-demand availability
              </p>
              <div className="mt-6 space-y-2 text-left text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>192GB HBM3e memory</span>
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
                SAVE 29%
              </div>
              <CardTitle>Reserved</CardTitle>
              <p className="text-muted-foreground">6-month commitment</p>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <span className="text-5xl font-bold">$5.63</span>
                <span className="text-muted-foreground">/GPU/hr</span>
              </div>
              <p className="mt-3 text-muted-foreground">
                8-GPU cluster pricing
              </p>
              <div className="mt-6 space-y-2 text-left text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>1.54TB total memory (8x 192GB)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>US-East region</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>NVLink 5 interconnect</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Priority support included</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="default" className="w-full">
                <Link href="https://cloud.phala.network/dashboard/gpu-tee">
                  Deploy Cluster
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
