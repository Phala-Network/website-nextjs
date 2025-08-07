import { Expand, Globe, MoveRight, Rocket, Wrench } from 'lucide-react'

import { Button } from '@/components/ui/button'

const Hero24 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
            alt="placeholder"
            className="mx-auto mb-5 w-16 md:mb-6 md:w-24 lg:mb-7 lg:w-28"
          />
          <span className="mb-3 text-sm tracking-widest text-muted-foreground md:text-base">
            PLATFORM
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-balance lg:text-6xl">
            Develop, launch, and grow your service with our platform
          </h1>
          <Button className="mt-8" size="lg">
            Start now for free
            <MoveRight className="ml-2" strokeWidth={1} />
          </Button>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border bg-input md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3 bg-background p-5 md:gap-6">
            <Globe className="size-6 shrink-0" />
            <div>
              <h2 className="text-sm font-semibold md:text-base">
                Robust Infrastructure
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Reliable and scalable infrastructure, easy to manage.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-background p-5 md:gap-6">
            <Rocket className="size-6 shrink-0" />
            <div>
              <h2 className="text-sm font-semibold md:text-base">Easy Setup</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Quick and simple configuration for any use case.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-background p-5 md:gap-6">
            <Expand className="size-6 shrink-0" />
            <div>
              <h2 className="text-sm font-semibold md:text-base">
                Effortless Scaling
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Built to handle increased demand with ease.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-background p-5 md:gap-6">
            <Wrench className="size-6 shrink-0" />
            <div>
              <h2 className="text-sm font-semibold md:text-base">
                Low Maintenance
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Focus on building, not on maintenance tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero24 }
