import Link from 'next/link'
import ReactDOM from 'react-dom'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Hero() {
  ReactDOM.preload('/home/hero-bg.png', { as: 'image' })
  return (
    <div className="bg-background">
      <div
        className={cn(
          'container -mt-16',
          "bg-[url('/home/hero-bg.png')] bg-right-bottom bg-no-repeat relative",
          'h-[700px] sm:h-[800px] xl:h-[680px]',
          'bg-[length:400px_auto] sm:bg-[length:600px_auto] md:bg-[length:680px_auto] lg:bg-[length:800px_auto] xl:bg-[length:984px_auto]',
        )}
      >
        <section className="pt-24">
          <div className="container pl-8 md:pt-12 lg:pt-16 lg:pl-16">
            <h1 className="font-bold text-4xl/tight md:text-5xl/tight">
              The New Cloud for
              <br />
              Confidential AI
            </h1>

            <div className="max-w-md md:max-w-lg mt-8 md:mt-16 space-y-4">
              <h2 className="font-semibold text-xl md:text-2xl">
                Build AI People Can Trust
              </h2>
              <p className="text-muted-foreground lg:text-lg">
                Hardware-secured compute platform that delivers verifiable AI
                with enterprise-grade privacy. Deploy confidential AI models
                with TEE protection in minutes, not months.
              </p>
            </div>

            <div className="flex gap-3 items-start mt-12">
              <Button size="lg" className="shrink-0" asChild>
                <a href="https://cloud.phala.network/register">Get started</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="max-sm:px-6"
                asChild
              >
                <Link href="/contact">Request a demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
