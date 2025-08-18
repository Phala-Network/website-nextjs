import { getImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getBackgroundImage } from '@/lib/image'
import { cn } from '@/lib/utils'

export default function FinalCTA() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: 897,
    height: 863,
    src: '/home/cta-bg.png',
  })
  const backgroundImage = getBackgroundImage(srcSet)
  return (
    <section className="w-full max-w-7xl mx-auto py-24">
      <div className="container">
        <div
          className={cn(
            'overflow-hidden rounded-lg relative bg-muted border',
            'bg-[length:400px_auto] md:bg-[length:auto_440px] bg-right-top bg-no-repeat',
            'before:absolute',
            'max-md:before:left-0 max-md:before:top-[170px] max-md:before:w-full max-md:before:h-[240px]',
            'md:before:top-0 md:before:right-[290px] md:before:h-full md:before:w-[240px]',
            'before:bg-gradient-to-t before:from-muted max-md:before:via-muted/80 before:to-transparent md:before:bg-gradient-to-r',
          )}
          style={{ backgroundImage }}
        >
          <div className="relative w-full max-md:mt-[200px]">
            <div className="w-full p-8 lg:px-16 lg:h-80 flex flex-col">
              <h3 className="mb-3 text-2xl font-bold md:mb-4 sm:text-4xl lg:mb-6">
                Ready to Build AI <br className="xl:hidden" />
                People Trust?
              </h3>
              <p className="mb-8 text-muted-foreground lg:text-lg">
                Join <span className="font-bold text-primary-500">500+</span>{' '}
                teams deploying trustworthy AI in production
              </p>
              <div className="flex gap-3 items-center mt-auto">
                <Button asChild size="lg">
                  <a href="https://cloud.phala.network/register">Get started</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Request a demo</Link>
                </Button>
              </div>
              <p className="text-muted-foreground text-xs mt-4">
                No credit card required. Deploy your first model in 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
