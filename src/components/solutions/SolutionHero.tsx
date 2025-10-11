'use client'

import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface SolutionHeroProps {
  eyebrow?: string
  headline: string
  subheadline: string
  primaryCTA: { text: string; url: string }
  secondaryCTA: { text: string; url: string }
  features?: string[]
}

export function SolutionHero({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  features,
}: SolutionHeroProps) {
  return (
    <section className="relative py-32">
      <div className="container flex flex-col items-center justify-center gap-4">
        {eyebrow && (
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-center text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          {headline}
        </h1>
        <p className="max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
          {subheadline}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <a href={primaryCTA.url}>{primaryCTA.text}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={secondaryCTA.url}>{secondaryCTA.text}</a>
          </Button>
        </div>
        {features && features.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-6 text-sm justify-center">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
