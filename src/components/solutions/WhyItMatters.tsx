interface WhyItMattersProps {
  title: string
  description: string
  points?: string[]
}

export function WhyItMatters({
  title,
  description,
  points,
}: WhyItMattersProps) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl mb-6">
            {title}
          </h2>
          <p className="font-display text-lg leading-7 text-muted-foreground mb-8">{description}</p>
          {points && points.length > 0 && (
            <ul className="text-left space-y-3 max-w-2xl mx-auto">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-display text-primary mt-1">•</span>
                  <span className="font-display leading-7 text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
