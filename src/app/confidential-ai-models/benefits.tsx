import { DollarSign, KeyRound, Timer } from 'lucide-react'

const Benefits = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="relative container">
        <div className="pointer-events-none absolute inset-0 -top-20 -z-10 mx-auto hidden h-[500px] w-[500px] bg-[radial-gradient(var(--color-gray-400)_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)] [background-size:6px_6px] opacity-25 lg:block"></div>
        <div className="relative flex justify-between gap-16">
          <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-background via-transparent to-transparent lg:block"></div>

          <div className="w-full max-w-96 shrink-0 justify-between">
            <p className="font-mono text-xs text-muted-foreground">
              What’s the solution?
            </p>
            <h2 className="mt-6 mb-3 text-3xl font-medium lg:text-4xl">
              Let Streamline handle the details
            </h2>
            <p className="text-sm text-muted-foreground">
              Streamline optimizes your workflow from start to finish. It
              gathers information, generates reports, automates tasks, and
              delivers results—all in one seamless system.
            </p>
          </div>
          <div className="hidden w-full max-w-3xl shrink-0 lg:block">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="max-h-[450px] w-full max-w-3xl min-w-[450px] rounded-lg border object-cover"
            />
          </div>
        </div>
        <div className="relative mt-8 grid md:grid-cols-3">
          <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
            <Timer />
            <div>
              <h3 className="text-lg font-medium">Maximize efficiency</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Skip the manual tasks and complex setups. With Streamline, you
                can focus on what matters most while the system handles the
                rest.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
            <DollarSign />
            <div>
              <h3 className="text-lg font-medium">Optimize resources</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Don’t overspend on unnecessary tools or teams. Keep your
                operations lean and efficient by automating your workflows with
                Streamline.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
            <KeyRound />
            <div>
              <h3 className="text-lg font-medium">Simplify operations</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Say goodbye to managing multiple platforms. Streamline takes
                care of all the heavy lifting, ensuring consistent results with
                minimal hassle.
              </p>
            </div>
          </div>
          <div className="absolute top-0 -right-4 -left-4 h-px bg-input md:hidden"></div>
          <div className="absolute top-[-0.5px] -right-4 -left-4 row-start-2 h-px bg-input md:hidden"></div>
          <div className="absolute top-[-0.5px] -right-4 -left-4 row-start-3 h-px bg-input md:hidden"></div>
          <div className="absolute -right-4 bottom-0 -left-4 row-start-4 h-px bg-input md:hidden"></div>
          <div className="absolute -top-2 bottom-0 -left-2 w-px bg-input md:hidden"></div>
          <div className="absolute -top-2 -right-2 bottom-0 col-start-2 w-px bg-input md:hidden"></div>
          <div className="absolute top-0 -right-2 -left-2 hidden h-px bg-input md:block"></div>
          <div className="absolute -top-2 bottom-0 left-0 hidden w-px bg-input md:block"></div>
          <div className="absolute -top-2 bottom-0 -left-[0.5px] col-start-2 hidden w-px bg-input md:block"></div>
          <div className="absolute -top-2 bottom-0 -left-[0.5px] col-start-3 hidden w-px bg-input md:block"></div>
          <div className="absolute -top-2 right-0 bottom-0 hidden w-px bg-input md:block"></div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
