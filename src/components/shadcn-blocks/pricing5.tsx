import { Check, Minus } from 'lucide-react'
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type PlanFeature = {
  feature: string
  confidentialVM: string | boolean
  gpuTEE: string | boolean
}

const planData: PlanFeature[] = [
  {
    feature: 'Intel TDX Hardware Security',
    confidentialVM: true,
    gpuTEE: true,
  },
  {
    feature: 'NVIDIA Confidential Computing',
    confidentialVM: false,
    gpuTEE: true,
  },
  {
    feature: 'Dual Remote Attestation',
    confidentialVM: false,
    gpuTEE: true,
  },
  {
    feature: 'Scalable Instances',
    confidentialVM: '1-4 vCPU',
    gpuTEE: '1-8 GPUs',
  },
  {
    feature: 'Memory Options',
    confidentialVM: '2-8 GB RAM',
    gpuTEE: 'Up to 1120 GB VRAM',
  },
  {
    feature: '99.9% Uptime SLA',
    confidentialVM: true,
    gpuTEE: true,
  },
  {
    feature: 'Premium Support',
    confidentialVM: true,
    gpuTEE: true,
  },
  {
    feature: 'Volume Discounts',
    confidentialVM: true,
    gpuTEE: true,
  },
]

const Pricing5 = () => {
  return (
    <section className="py-32">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="mb-2 text-3xl font-semibold lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground lg:text-lg max-w-2xl">
            Pay-as-you-go pricing for every scale. Only pay for what you use,
            billed by the hour.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-0">
          <Card className="flex w-full flex-col justify-between gap-8 text-center lg:rounded-r-none lg:border-r-0">
            <CardHeader>
              <CardTitle>Confidential VM</CardTitle>
              <p className="text-muted-foreground">
                Secure virtual machines with Intel TDX
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="text-5xl font-bold">$0.069</span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    per hour (tdx.medium)
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  ~$50/month with 730h usage
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="https://cloud.phala.com/register">
                  Get Started
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Separator
            orientation="vertical"
            className="hidden h-auto lg:block"
          />
          <Card className="flex w-full flex-col justify-between gap-8 lg:rounded-l-none lg:border-l-0 text-center">
            <CardHeader>
              <CardTitle>GPU TEE</CardTitle>
              <p className="text-muted-foreground">
                Most powerful AI GPUs with Full-Stack TEE
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="text-5xl font-bold">$2.38</span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    per GPU/hour (H100, 12-month)
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  H200 from $2.56/hr • B200 from $5.63/hr
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/gpu-tee">View GPU Options</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Table className="mt-10 min-w-[420px]">
          <TableHeader>
            <TableRow className="hover:bg-background">
              <TableHead></TableHead>
              <TableHead className="font-bold text-primary">
                Confidential VM
              </TableHead>
              <TableHead className="font-bold text-primary">GPU TEE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {planData.map((item) => (
              <TableRow key={item.feature} className="hover:bg-background">
                <TableCell className="font-medium">{item.feature}</TableCell>
                <TableCell>
                  {typeof item.confidentialVM === 'boolean' ? (
                    item.confidentialVM ? (
                      <Check className="size-6 text-green-600" />
                    ) : (
                      <Minus className="size-6 text-muted-foreground" />
                    )
                  ) : (
                    item.confidentialVM
                  )}
                </TableCell>
                <TableCell>
                  {typeof item.gpuTEE === 'boolean' ? (
                    item.gpuTEE ? (
                      <Check className="size-6 text-green-600" />
                    ) : (
                      <Minus className="size-6 text-muted-foreground" />
                    )
                  ) : (
                    item.gpuTEE
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            All prices are pay-as-you-go. Enterprise customers qualify for
            volume discounts.{' '}
            <Link href="/contact" className="text-primary hover:underline">
              Contact sales
            </Link>{' '}
            for custom configurations.
          </p>
        </div>
      </div>
    </section>
  )
}

export { Pricing5 }
