import { ArrowRight, Check, Clock } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Compliance1Props {
  className?: string
}

const Compliance1 = ({ className }: Compliance1Props) => {
  return (
    <section className={cn('bg-muted/50 py-24', className)}>
      <div className="container max-w-7xl">
        <div className="grid gap-9 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Badge variant="outline" className="w-fit gap-1.5 bg-background">
              <span className="size-1.5 rounded-full bg-green-500" />
              Compliance
            </Badge>
            <h2 className="font-display text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
              Enterprise-Grade Compliance & Security
            </h2>
            <p className="text-lg text-muted-foreground">
              Deploy confidential AI with confidence. Our platform is SOC 2 Type
              I certified and HIPAA compliant, with ISO 27001 certification in
              progress. Hardware-backed security is designed to support
              enterprise regulatory and data protection requirements, including
              GDPR.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <Check className="size-4 text-green-600" />
                </div>
                <span className="font-medium">SOC 2 Type I</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <Check className="size-4 text-green-600" />
                </div>
                <span className="font-medium">HIPAA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                  <Clock className="size-4 text-orange-600" />
                </div>
                <span className="font-medium text-muted-foreground">
                  ISO 27001
                </span>
              </div>
            </div>
            <div className="mt-2">
              <Button asChild variant="outline">
                <Link href="/trust">
                  Visit Trust Center <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background">
            <div className="relative overflow-hidden border-b border-border p-6 lg:px-8 lg:py-11">
              <div>
                <h3 className="font-display text-xl font-medium lg:text-2xl">
                  SOC 2 Type I Certified
                </h3>
                <p className="mt-2 w-3/4 pr-10 text-sm text-muted-foreground md:text-base">
                  Independent audit validates our security, availability, and
                  confidentiality controls. Download the full report from our
                  Trust Center.
                </p>
              </div>
              <img
                src="/trust/soc2.png"
                alt="SOC 2"
                className="absolute right-4 -bottom-4 size-24 object-contain opacity-90 lg:right-8 lg:size-28"
              />
            </div>
            <div className="relative overflow-hidden p-6 lg:px-8 lg:py-11">
              <div>
                <h3 className="font-display text-xl font-medium lg:text-2xl">
                  HIPAA Compliant
                </h3>
                <p className="mt-2 w-3/4 pr-10 text-sm text-muted-foreground md:text-base">
                  Healthcare-ready infrastructure with protected health
                  information (PHI) safeguards and comprehensive privacy
                  controls.
                </p>
              </div>
              <img
                src="/trust/hipaa.svg"
                alt="HIPAA"
                className="absolute right-4 -bottom-4 size-24 object-contain opacity-90 lg:right-8 lg:size-28 dark:invert"
              />
            </div>
            <div className="relative overflow-hidden border-t border-border p-6 lg:px-8 lg:py-11">
              <div>
                <h3 className="font-display text-xl font-medium lg:text-2xl">
                  ISO 27001 In Progress
                </h3>
                <p className="mt-2 w-3/4 pr-10 text-sm text-muted-foreground md:text-base">
                  Working toward international information security management
                  certification to meet global enterprise requirements.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg"
                alt="ISO 27001"
                className="absolute right-4 -bottom-7 size-24 text-muted-foreground opacity-50 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
            <div className="relative overflow-hidden border-t border-border p-6 lg:px-8 lg:py-11">
              <div>
                <h3 className="font-display text-xl font-medium lg:text-2xl">
                  Aligned with GDPR principles
                </h3>
                <p className="mt-2 w-3/4 pr-10 text-sm text-muted-foreground md:text-base">
                  Built with privacy by design, leveraging Isolation, access
                  controls, and encryption to protect customer data. DPAs are
                  available where applicable.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg"
                alt="GDPR"
                className="absolute right-4 -bottom-7 size-24 text-muted-foreground opacity-50 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Compliance1 }
