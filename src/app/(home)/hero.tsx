import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Hero() {
  return (
    <>
      <Head>
        <link rel="preload" href="/home/hero-bg.png" as="image" />
      </Head>
      <div className="w-full bg-background">
        <section
          className={cn(
            "w-full max-w-screen-2xl mx-auto pt-24 bg-[url('/home/hero-bg.png')] bg-right-bottom bg-no-repeat relative",
            'h-[700px] sm:h-[800px] xl:h-[680px]',
            'bg-[length:400px_auto] sm:bg-[length:600px_auto] md:bg-[length:680px_auto] lg:bg-[length:800px_auto] xl:bg-[length:984px_auto]',
          )}
        >
          <div className="ml-3 sm:ml-8 lg:ml-20 p-4 lg:pt-16">
            <h1 className="font-bold text-3xl/tight md:text-5xl/tight">
              The New Cloud for
              <br />
              Confidential AI
            </h1>

            <div className="max-w-[480px] mt-8 md:mt-16 space-y-4">
              <h2 className="font-semibold text-xl md:text-2xl">
                Build AI People Can Trust
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Hardware-secured compute platform that delivers verifiable AI
                with enterprise-grade privacy. Deploy confidential AI models
                with TEE protection in minutes, not months.
              </p>
            </div>

            <div className="flex gap-3 items-start mt-12">
              <Button size="lg" className="shrink-0" asChild>
                <a href="https://cloud.phala.network/register">Get started</a>
              </Button>
              <Button size="lg" variant="outline" className="max-sm:px-6">
                <Link href="/contact">Request a demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
