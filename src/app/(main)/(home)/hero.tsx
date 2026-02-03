import { getImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getBackgroundImage } from '@/lib/image'
import { cn } from '@/lib/utils'

export default function Hero() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: 984,
    height: 800,
    src: '/home/hero-bg.png',
  })
  const backgroundImage = getBackgroundImage(srcSet)
  return (
    <div className="bg-background">
      <div
        className={cn(
          'max-w-[120rem] mx-auto',
          'bg-right-bottom bg-no-repeat relative',
          'max-sm:pb-[70%] sm:h-200',
          'bg-[length:120%_auto] sm:bg-[length:600px_auto] md:bg-[length:680px_auto] lg:bg-[length:800px_auto] xl:bg-[length:984px_auto]',
        )}
        style={{ backgroundImage }}
      >
        <div className="container -mt-20">
          <section className="pt-20">
            <div className="pt-12 lg:pt-24 lg:pl-8">
              <div className="flex flex-col max-sm:items-center max-sm:text-center">
                <h1 className="font-display font-semibold text-foreground text-3xl leading-none sm:text-5xl md:text-6xl">
                  The Neo Cloud for
                  <br />
                  Confidential AI
                </h1>

                <h2 className="font-display font-medium text-xl leading-7 md:text-2xl md:leading-none mt-8 md:mt-16">
                  Build AI People Can Trust
                </h2>
                <p className="text-muted-foreground text-base leading-6 lg:text-lg lg:leading-7 max-w-2xs sm:max-w-md xl:max-w-xl mt-4">
                  Hardware-secured compute platform that delivers verifiable AI
                  with enterprise-grade privacy. Deploy confidential AI models
                  with TEE protection in minutes.
                </p>

                <div className="flex gap-4 items-start mt-12 md:mt-16 max-sm:flex-col lg:gap-6">
                  <Button
                    size="lg"
                    className="shrink-0 w-full lg:h-12 lg:text-base sm:w-40"
                    asChild
                  >
                    <a href="https://cloud.phala.com/register">
                      Get started
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="max-sm:px-6 w-full sm:w-40 lg:h-12 lg:text-base lg:w-40"
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
