import { AlertCircle, CheckCircle, CircleMinus } from 'lucide-react'
import Image from 'next/image'
import { Fragment } from 'react'

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
                <h1 className="mb-6 font-display text-5xl font-semibold leading-none text-foreground lg:text-6xl xl:text-7xl">
                  {data.hero.title}
                </h1>
                {data.hero.alternativeText && (
                  <p className="mb-8 font-display text-xl leading-7 text-muted-foreground">
                    {data.hero.alternativeText}
                  </p>
                )}
                {data.hero.subtitle && (
                  <p className="mb-8 font-display text-lg leading-7 text-muted-foreground">
                    {data.hero.subtitle}
                  </p>
                )}
                <Button size="lg" className="font-medium" asChild>
                  <a href={data.cta.href}>{data.cta.text}</a>
                </Button>
              </div>
            </div>
            {data.hero.bannerImage && (
              <div className="flex-1 max-w-xl">
                <div className="w-full rounded-sm border overflow-hidden">
                  <Image
                    src={data.hero.bannerImage}
                    alt={`${data.competitor.name} comparison`}
                    width={1280}
                    height={718}
                    className="w-full h-auto object-video"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-16">
        <div className="mx-auto max-w-4xl">
          {/* Quick Takeaways */}
          <section className="mb-20">
            <h2 className="mb-8 font-display text-3xl font-semibold leading-tight text-foreground">
              Why Choose Phala?
            </h2>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              {data.quickTakeaways.map((takeaway) => (
                <div
                  key={takeaway}
                  className="flex items-start gap-3 rounded-lg border p-4 bg-background"
                >
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-green-600" />
                  <span className="font-display text-base leading-7 text-foreground">
                    {takeaway}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-20">
            <h2 className="mb-12 font-display text-3xl font-semibold leading-tight text-foreground">
              Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <div className="grid min-w-2xl grid-cols-3">
                {/* Header Row */}
                <div className="border-b border-border p-6"></div>
                <div className="flex flex-col items-center gap-2 rounded-t-2xl border-b border-border bg-muted p-6">
                  <p className="font-display text-lg font-semibold">Phala</p>
                  <p className="mt-1 font-display text-center text-sm leading-5 text-muted-foreground">
                    Open-source confidential AI
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 border-b border-border p-6">
                  <p className="font-display text-lg font-semibold">
                    {data.competitor.name}
                  </p>
                  <p className="mt-1 font-display text-center text-sm leading-5 text-muted-foreground">
                    {data.competitor.description}
                  </p>
                </div>

                {/* Feature Rows */}
                {data.features.map((feature, index) => (
                  <Fragment key={feature.feature}>
                    <div
                      className={`flex items-center gap-2 p-6 ${index === data.features.length - 1 ? 'border-border' : 'border-b border-border'}`}
                    >
                      <span className="font-display font-semibold text-foreground">
                        {feature.feature}
                      </span>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center gap-2 bg-muted p-6 ${index === data.features.length - 1 ? 'border-border' : 'border-b border-border'}`}
                    >
                      <StatusIcon status={feature.phala} />
                      <span className="font-display text-center text-sm leading-5 text-muted-foreground">
                        {feature.phalaText}
                      </span>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center gap-2 p-6 ${index === data.features.length - 1 ? '' : 'border-b border-border'}`}
                    >
                      <StatusIcon status={feature.competitor} />
                      <span className="font-display text-center text-sm leading-5 text-muted-foreground">
                        {feature.competitorText}
                      </span>
                    </div>
                  </Fragment>
                ))}

                {/* CTA Row */}
                <div className="border-border p-6"></div>
                <div className="flex items-center justify-center gap-2 rounded-b-2xl border-border bg-muted p-6">
                  <Button className="w-full font-medium" asChild>
                    <a href={data.cta.href}>{data.cta.text}</a>
                  </Button>
                </div>
                <div className="p-6"></div>
              </div>
            </div>
          </section>

          {/* What does Phala do? */}
          <section className="mb-20">
            <h2 className="mb-6 font-display text-3xl font-semibold leading-tight text-foreground">
              {data.sections.whatIsPhala.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-display text-lg leading-7 text-muted-foreground">
                {data.sections.whatIsPhala.content}
              </p>
            </div>
          </section>

          {/* What does Competitor do? */}
          <section className="mb-20">
            <h2 className="mb-6 font-display text-3xl font-semibold leading-tight text-foreground">
              {data.sections.whatIsCompetitor.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-display text-lg leading-7 text-muted-foreground">
                {data.sections.whatIsCompetitor.content}
              </p>
            </div>
          </section>

          {/* Key Differentiators */}
          <section className="mb-20">
            <h2 className="mb-8 font-display text-3xl font-semibold leading-tight text-foreground">
              {data.sections.differentiators.title}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {data.sections.differentiators.content.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border bg-background p-6"
                >
                  <h3 className="mb-4 font-display text-xl font-semibold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="font-display leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to Choose */}
          <section className="mb-20">
            <h2 className="mb-8 font-display text-3xl font-semibold leading-tight text-foreground">
              {data.sections.howToChoose.title}
            </h2>
            <ol className="space-y-6 list-decimal list-outside ml-6">
              {data.sections.howToChoose.content.map((item) => (
                <li key={item} className="pl-2">
                  <div className="prose prose-lg max-w-none">
                    <p className="font-display text-lg leading-7 text-muted-foreground">
                      {item}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Pricing Comparison */}
          <section className="mb-20">
            <h2 className="mb-8 font-display text-3xl font-semibold leading-tight text-foreground">
              {data.sections.pricing.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border p-8 bg-background">
                <h3 className="mb-4 font-display text-xl font-semibold text-foreground">
                  Phala Cloud
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="font-display text-lg leading-7 text-muted-foreground">
                    {data.sections.pricing.phalaContent}
                  </p>
                </div>
              </div>
              <div className="rounded-xl border p-8 bg-background">
                <h3 className="mb-4 font-display text-xl font-semibold text-foreground">
                  {data.competitor.name}
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="font-display text-lg leading-7 text-muted-foreground">
                    {data.sections.pricing.competitorContent}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          {data.sections.whyChoose && (
            <section className="mb-20">
              <h2 className="mb-8 font-display text-3xl font-semibold leading-tight text-foreground">
                {data.sections.whyChoose.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {data.sections.whyChoose.content.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border p-8 bg-background"
                  >
                    <div className="prose prose-lg max-w-none">
                      <span className="font-display text-lg leading-7 text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  )
}
