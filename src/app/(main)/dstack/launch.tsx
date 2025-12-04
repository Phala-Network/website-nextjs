import Image from 'next/image'

const Feature102 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-5 md:text-center">
          <h2 className="font-display text-2xl leading-none md:text-4xl font-semibold">
            Simple Deploy Process
          </h2>
          <p className="font-display text-muted-foreground max-w-3xl mx-auto text-xl leading-7 font-medium">
            Deploy confidential applications with just a few clicks - no complex
            setup required
          </p>
        </div>
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16">
          <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="flex flex-col items-center justify-between gap-1">
                <span className="h-20 shrink-0"></span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                  1
                </span>
                <span className="h-20 w-[3px] shrink-0 bg-linear-to-b from-transparent to-primary opacity-70"></span>
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="font-display text-xl leading-none min-[960px]:text-2xl font-semibold">
                  Paste Docker Compose
                </h3>
                <p className="font-display text-sm leading-5 text-muted-foreground min-[960px]:text-base min-[960px]:leading-6">
                  Copy your existing docker-compose.yml file - no modifications
                  needed
                </p>
              </div>
            </div>
            <Image
              width={904}
              height={510}
              src="/dstack/step1.png"
              alt="Step 1"
              className="aspect-video w-full rounded-xl border object-cover min-[960px]:h-56 min-[960px]:w-auto shadow-xs"
            />
          </div>
          <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="relative flex flex-col items-center justify-between gap-1">
                <span className="absolute -top-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                  2
                </span>
                <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="font-display text-xl leading-none min-[960px]:text-2xl font-semibold">
                  Click Deploy
                </h3>

                <p className="font-display text-sm leading-5 text-muted-foreground min-[960px]:text-base min-[960px]:leading-6">
                  Select your TEE hardware and deployment options
                </p>
              </div>
            </div>

            <Image
              width={858}
              height={462}
              src="/dstack/step2.png"
              alt="Step 2"
              className="aspect-video w-full rounded-xl border object-cover min-[960px]:h-56 min-[960px]:w-auto shadow-xs"
            />
          </div>
          <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="flex flex-col items-center justify-between gap-1">
                <span className="h-20 w-[3px] shrink-0 bg-linear-to-t from-transparent to-primary opacity-70"></span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                  3
                </span>
                <span className="h-20 shrink-0"></span>
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="font-display text-xl leading-none min-[960px]:text-2xl font-semibold">
                  Application Launched
                </h3>

                <p className="font-display text-sm leading-5 text-muted-foreground min-[960px]:text-base min-[960px]:leading-6">
                  Your app runs with hardware-guaranteed confidentiality
                </p>
              </div>
            </div>
            <Image
              width={764}
              height={478}
              src="/dstack/step3.png"
              alt="Step 3"
              className="aspect-video w-full rounded-xl border object-cover min-[960px]:h-56 min-[960px]:w-auto shadow-xs"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Feature102 }
