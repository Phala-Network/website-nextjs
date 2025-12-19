import Link from 'next/link'
import { ArrowRight, Check, Clock } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Compliance5 = () => {
  return (
    <section className="py-24">
      <div className="container max-w-7xl">
        <div className="flex flex-col gap-12">
          <div className="space-y-4 text-center">
            <h2 className="font-display font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
              Enterprise-Grade Compliance
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              SOC 2 Type I certified and HIPAA compliant. Hardware-backed security meets regulatory requirements.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-xl border bg-background p-6">
              <img
                src="/trust/soc2.png"
                alt="SOC 2 Type I"
                className="h-20 object-contain"
              />
              <div className="flex items-center gap-2">
                <div className="flex size-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <Check className="size-3 text-green-600" />
                </div>
                <span className="font-medium">SOC 2 Type I</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl border bg-background p-6">
              <img
                src="/trust/hipaa.svg"
                alt="HIPAA"
                className="h-20 object-contain dark:invert"
              />
              <div className="flex items-center gap-2">
                <div className="flex size-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <Check className="size-3 text-green-600" />
                </div>
                <span className="font-medium">HIPAA Compliant</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl border bg-background p-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg"
                alt="ISO 27001"
                className="h-20 object-contain opacity-50 grayscale dark:invert"
              />
              <div className="flex items-center gap-2">
                <div className="flex size-6 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                  <Clock className="size-3 text-orange-600" />
                </div>
                <span className="font-medium text-muted-foreground">ISO 27001 In Progress</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/trust">
                Visit Trust Center <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Compliance5 }
