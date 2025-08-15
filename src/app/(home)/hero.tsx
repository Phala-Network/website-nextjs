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
          "max-w-(--breakpoint-2xl) mx-auto bg-[url('/home/hero-bg.png')]",
          'bg-right-bottom bg-no-repeat relative',
          'max-sm:pb-[100%] sm:h-[800px] xl:h-[680px]',
          'bg-[length:120%_auto] sm:bg-[length:600px_auto] md:bg-[length:680px_auto] lg:bg-[length:800px_auto] xl:bg-[length:984px_auto]',
        )}
      >
        <div className="container -mt-16">
          <section className="pt-16">
            <div className="pt-12 lg:pt-16 lg:pl-16">
              <div className="flex flex-col max-sm:items-center max-sm:text-center">
                <h1 className="font-bold text-3xl/tight sm:text-4xl/tight md:text-5xl/tight">
                  The New Cloud for
                  <br />
                  Confidential AI
                </h1>

                <h2 className="font-medium text-xl md:text-2xl mt-8 md:mt-16">
                  Build AI People Can Trust
                </h2>
                <p className="text-muted-foreground lg:text-lg max-w-2xs sm:max-w-md md:max-w-lg mt-4 max-sm:text-sm">
                  Hardware-secured compute platform that delivers verifiable AI
                  with enterprise-grade privacy. Deploy confidential AI models
                  with TEE protection in minutes, not months.
                </p>

                <div className="flex gap-3 items-start mt-12 max-sm:flex-col">
                  <Button size="lg" className="shrink-0 max-sm:w-full" asChild>
                    <a href="https://cloud.phala.network/register">
                      Get started
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="max-sm:px-6 max-sm:w-full"
                    asChild
                  >
                    <Link href="/contact">Request a demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
