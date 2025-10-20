import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

const AuditReport = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="font-display mb-5 text-pretty text-3xl font-semibold leading-none lg:text-4xl">
              Security Audit Report
            </h1>
            <p className="font-display text-muted-foreground mb-8 max-w-xl text-xl leading-7 font-medium">
              Independent security audit by zkSecurity team. Review our
              comprehensive security analysis and recommendations.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a
                  href="/dstack/dstack-audit.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  View Report <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href="/dstack/dstack-audit.pdf" download>
                  Download Report
                </a>
              </Button>
            </div>

            <div className="flex flex-col gap-2 mt-8">
              <p className="font-display text-muted-foreground text-sm leading-5">Sponsored by</p>
              <div className="flex items-center gap-10 mt-2">
                <a href="https://phala.network" target="_blank" rel="noopener">
                  <img className="h-6" src="/home/logo.svg" alt="Phala" />
                </a>
                <a
                  href="https://www.flashbots.net"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    className="h-6"
                    src="/partnerships/flashbots.svg"
                    alt="Flashbots"
                  />
                </a>
                <a href="https://near.org" target="_blank" rel="noopener">
                  <img
                    className="h-4"
                    src="/partnerships/near.svg"
                    alt="NEAR"
                  />
                </a>
              </div>
            </div>
          </div>
          <a
            href="/dstack/dstack-audit.pdf"
            target="_blank"
            rel="noopener"
            className="relative rounded-md border shadow-lg overflow-hidden"
          >
            <Image
              src="/dstack/audit-cover.png"
              alt="Security Audit Report Cover"
              width={1368}
              height={862}
              className="max-h-96 w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/10 to-transparent p-4">
              <p className="font-display text-black/80 text-sm leading-5 font-medium mb-1">
                zkSecurity Team Audit
              </p>
              <p className="font-display text-black/50 text-xs leading-4">
                Comprehensive security analysis and vulnerability assessment
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default AuditReport
