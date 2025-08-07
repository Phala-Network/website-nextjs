const Feature102 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
          <h2 className="text-2xl md:text-4xl">Launch with Assurance</h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Simplify your workflow with our tools that provide clear insights,
            minimizing the complexity of managing intricate deployment data.
          </p>
        </div>
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16">
          <div className="flex flex-col items-center justify-between md:flex-row md:gap-10">
            <div className="flex gap-4 md:max-w-md">
              <div className="flex flex-col items-center justify-between gap-1">
                <span className="h-20 shrink-0"></span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                  1
                </span>
                <span className="h-20 w-[3px] shrink-0 bg-gradient-to-b from-transparent to-primary opacity-70"></span>
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 md:gap-6 md:px-4 md:py-4">
                <h3 className="text-xl md:text-2xl">
                  Monitor Deployments live
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  Track your deployments with clarity, seeing updates take place
                  as they happen.
                </p>
              </div>
            </div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="z-10 aspect-video w-full rounded-xl border object-cover md:max-h-56 md:w-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row md:gap-10">
            <div className="flex gap-4 md:max-w-md">
              <div className="relative flex flex-col items-center justify-between gap-1">
                <span className="absolute -top-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                  2
                </span>
                <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 md:gap-6 md:px-4 md:py-4">
                <h3 className="text-xl md:text-2xl">
                  Immediate Issue Detection
                </h3>

                <p className="text-sm text-muted-foreground md:text-base">
                  Spot issues instantly and address them with precise metrics
                  for optimized performance.
                </p>
              </div>
            </div>

            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="z-10 max-h-56 w-full rounded-xl border object-cover md:aspect-video md:w-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row md:gap-10">
            <div className="flex gap-4 md:max-w-md">
              <div className="flex flex-col items-center justify-between gap-1">
                <span className="h-20 w-[3px] shrink-0 bg-gradient-to-t from-transparent to-primary opacity-70"></span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                  3
                </span>
                <span className="h-20 shrink-0"></span>
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 md:gap-6 md:px-4 md:py-4">
                <h3 className="text-xl md:text-2xl">
                  Revert to a Stable Version
                </h3>

                <p className="text-sm text-muted-foreground md:text-base">
                  With just a few actions, revert to a previous version and
                  restore system health swiftly.
                </p>
              </div>
            </div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              alt="placeholder"
              className="z-10 max-h-56 w-full rounded-xl border object-cover md:aspect-video md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Feature102 }
