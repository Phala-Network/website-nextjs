import { AlertCircle, CheckCircle, CircleMinus } from 'lucide-react'
import Image from 'next/image'

import FinalCTA from '@/components/final-cta'
import { Button } from '@/components/ui/button'
import type { ComparisonData, ComparisonStatus } from '@/data/comparisons'

function StatusIcon({ status }: { status: ComparisonStatus }) {
  switch (status) {
    case 'good':
      return <CheckCircle className="size-5 text-green-600" />
    case 'bad':
      return <CircleMinus className="size-5 text-red-600" />
    case 'partial':
      return <AlertCircle className="size-5 text-orange-500" />
  }
}

interface CompareProps {
  data: ComparisonData
}

export default function Compare({ data }: CompareProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-muted">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-16">
            <div className="flex-1 md:max-w-2xl">
              <div className="flex flex-col items-start">
                <h1 className="mb-6 text-4xl font-semibold tracking-tighter text-foreground sm:text-5xl xl:text-6xl">
                  {data.hero.title}
                </h1>
                {data.hero.alternativeText && (
                  <p className="mb-8 text-xl text-muted-foreground leading-relaxed">
                    {data.hero.alternativeText}
                  </p>
                )}
                {data.hero.subtitle && (
                  <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                    {data.hero.subtitle}
                  </p>
                )}
                <Button size="lg" asChild>
                  <a href={data.cta.href}>{data.cta.text}</a>
                </Button>
              </div>
            </div>
            {data.hero.bannerImage && (
              <div className="flex-1 max-w-xl">
                <div className="w-full rounded-2xl border overflow-hidden">
                  <Image
                    src={data.hero.bannerImage}
                    alt={`${data.competitor.name} comparison`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Takeaways */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-semibold lg:text-4xl">
              Why Choose Phala?
            </h2>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.quickTakeaways.map((takeaway) => (
                <div
                  key={takeaway}
                  className="flex items-start gap-3 rounded-lg border p-4"
                >
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-green-600" />
                  <span className="text-sm sm:text-base">{takeaway}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-4 mb-12">
              <h2 className="text-center text-4xl font-semibold sm:text-5xl">
                Feature Comparison
              </h2>
              <p className="mt-2 text-center text-muted-foreground text-xl max-w-2xl">
                See how Phala stacks up against the competition
              </p>
            </div>
            <div className="overflow-x-auto">
              <div className="mt-14 grid min-w-2xl grid-cols-3">
                {/* Header Row */}
                <div className="border-b border-border p-5"></div>
                <div className="flex flex-col items-center gap-2 rounded-t-2xl border-b border-border bg-muted p-5">
                  <p className="text-lg font-semibold">Phala</p>
                  <p className="mt-1 text-center text-sm text-muted-foreground">
                    Open-source confidential AI
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 border-b border-border p-5">
                  {data.competitor.logo && (
                    <Image
                      src={data.competitor.logo}
                      alt={data.competitor.name}
                      width={32}
                      height={32}
                      className="size-8"
                    />
                  )}
                  <p className="text-lg font-semibold">
                    {data.competitor.name}
                  </p>
                  <p className="mt-1 text-center text-sm text-muted-foreground">
                    {data.competitor.description}
                  </p>
                </div>

                {/* Feature Rows */}
                {data.features.map((feature, index) => (
                  <>
                    <div
                      key={feature.feature}
                      className={`flex items-center gap-2 p-5 ${index === data.features.length - 1 ? 'border-border' : 'border-b border-border'}`}
                    >
                      <span className="font-semibold">{feature.feature}</span>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center gap-2 bg-muted p-5 ${index === data.features.length - 1 ? 'border-border' : 'border-b border-border'}`}
                    >
                      <StatusIcon status={feature.phala} />
                      <span className="text-xs text-muted-foreground text-center">
                        {feature.phalaText}
                      </span>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center gap-2 p-5 ${index === data.features.length - 1 ? '' : 'border-b border-border'}`}
                    >
                      <StatusIcon status={feature.competitor} />
                      <span className="text-xs text-muted-foreground text-center">
                        {feature.competitorText}
                      </span>
                    </div>
                  </>
                ))}

                {/* CTA Row */}
                <div className="border-border p-5"></div>
                <div className="flex items-center justify-center gap-2 rounded-b-2xl border-border bg-muted p-5">
                  <Button className="w-full" asChild>
                    <a href={data.cta.href}>{data.cta.text}</a>
                  </Button>
                </div>
                <div className="p-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What does Phala do? */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-semibold lg:text-3xl leading-tight">
              {data.sections.whatIsPhala.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {data.sections.whatIsPhala.content}
            </p>
          </div>
        </div>
      </section>

      {/* What does Competitor do? */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-semibold lg:text-3xl leading-tight">
              {data.sections.whatIsCompetitor.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {data.sections.whatIsCompetitor.content}
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-semibold lg:text-4xl leading-tight">
                {data.sections.differentiators.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover what sets Phala apart from the competition
              </p>
            </div>
            <div className="space-y-12">
              {data.sections.differentiators.content.map((item) => (
                <div key={item.title} className="max-w-none">
                  <h3 className="text-xl font-semibold mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-semibold lg:text-4xl">
              {data.sections.howToChoose.title}
            </h2>
            <div className="space-y-6">
              {data.sections.howToChoose.content.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-semibold lg:text-4xl">
              {data.sections.pricing.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border p-8">
                <h3 className="mb-4 font-semibold text-xl">Phala Cloud</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {data.sections.pricing.phalaContent}
                </p>
              </div>
              <div className="rounded-xl border p-8">
                <h3 className="mb-4 font-semibold text-xl">
                  {data.competitor.name}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {data.sections.pricing.competitorContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      {data.sections.whyChoose && (
        <section className="py-32 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col items-center gap-4 mb-12">
                <h2 className="text-center text-4xl font-semibold sm:text-5xl">
                  {data.sections.whyChoose.title}
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {data.sections.whyChoose.content.map((item) => (
                  <div key={item} className="rounded-lg border p-8">
                    <span className="text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <FinalCTA />
    </div>
  )
}
