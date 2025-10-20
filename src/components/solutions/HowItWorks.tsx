interface HowItWorksStep {
  number: string
  title: string
  description: string
}

interface HowItWorksProps {
  title: string
  description?: string
  steps: HowItWorksStep[]
}

export function HowItWorks({ title, description, steps }: HowItWorksProps) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>
          {description && (
            <p className="font-display text-lg leading-7 text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="flex flex-col h-full p-6 rounded-lg border bg-card">
                <div className="font-display text-4xl font-bold leading-none text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold leading-tight mb-3">{step.title}</h3>
                <p className="font-display leading-7 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
