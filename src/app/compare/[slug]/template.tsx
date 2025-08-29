import { AlertCircle, CheckCircle, CircleMinus } from 'lucide-react'
import Image from 'next/image'

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

interface ComparisonTemplateProps {
  data: ComparisonData
}

export default function ComparisonTemplate({ data }: ComparisonTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
            <div className="flex-1 md:max-w-2xl">
              <div className="flex flex-col items-start">
                <div className="mb-2 text-sm font-medium text-foreground uppercase tracking-wide">
                  Alternative
                </div>
                <h1 className="mb-6 text-4xl leading-tight font-semibold tracking-tighter text-foreground lg:text-5xl xl:text-6xl">
                  {data.hero.title}
                </h1>
                {data.hero.alternativeText && (
                  <p className="mb-8 text-lg text-foreground lg:text-xl leading-relaxed font-medium">
                    {data.hero.alternativeText}
                  </p>
                )}
                {data.hero.subtitle && (
                  <p className="mb-8 text-lg text-muted-foreground lg:text-xl leading-relaxed">
                    {data.hero.subtitle}
                  </p>
                )}
                <Button
                  className="h-fit rounded-full px-7 py-4 text-sm font-semibold lg:text-base"
                  asChild
                >
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
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.quickTakeaways.map((takeaway, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border bg-background p-4"
                >
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-green-600" />
                  <span className="text-base lg:text-lg">{takeaway}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-semibold lg:text-4xl">
              Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <div className="min-w-2xl">
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4">
                    <h3 className="font-semibold text-xl lg:text-2xl">
                      Feature
                    </h3>
                  </div>
                  <div className="rounded-t-lg bg-muted p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="font-semibold text-lg">Phala</span>
                    </div>
                    <p className="text-base text-muted-foreground">
                      Open-source confidential AI
                    </p>
                  </div>
                  <div className="rounded-t-lg border-2 border-muted p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {data.competitor.logo && (
                        <Image
                          src={data.competitor.logo}
                          alt={data.competitor.name}
                          width={24}
                          height={24}
                          className="size-6"
                        />
                      )}
                      <span className="font-semibold text-lg">
                        {data.competitor.name}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground">
                      {data.competitor.description}
                    </p>
                  </div>
                </div>

                {/* Table Body */}
                <div className="space-y-1">
                  {data.features.map((feature, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-3 gap-4 border-b border-border py-4"
                    >
                      <div className="flex items-center p-2">
                        <span className="font-medium text-lg">
                          {feature.feature}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 bg-muted/50 p-4 rounded">
                        <StatusIcon status={feature.phala} />
                        <span className="text-sm text-center text-muted-foreground">
                          {feature.phalaText}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 p-4 rounded">
                        <StatusIcon status={feature.competitor} />
                        <span className="text-sm text-center text-muted-foreground">
                          {feature.competitorText}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Row */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div />
                  <div className="bg-muted rounded-b-lg p-4">
                    <Button className="w-full" asChild>
                      <a href={data.cta.href}>{data.cta.text}</a>
                    </Button>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What does Phala do? */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">
              {data.sections.whatIsPhala.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {data.sections.whatIsPhala.content}
            </p>
          </div>
        </div>
      </section>

      {/* What does Competitor do? */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">
              {data.sections.whatIsCompetitor.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {data.sections.whatIsCompetitor.content}
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-semibold lg:text-4xl text-center">
              {data.sections.differentiators.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {data.sections.differentiators.content.map((item, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 border"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">
              {data.sections.howToChoose.title}
            </h2>
            <div className="space-y-4">
              {data.sections.howToChoose.content.map((item, index) => (
                <p
                  key={index}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-semibold lg:text-3xl">
              {data.sections.pricing.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-6">
                <h3 className="mb-3 font-semibold text-lg">Phala Cloud</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {data.sections.pricing.phalaContent}
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="mb-3 font-semibold text-lg">
                  {data.competitor.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {data.sections.pricing.competitorContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      {data.sections.whyChoose && (
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-semibold lg:text-4xl text-center">
                {data.sections.whyChoose.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {data.sections.whyChoose.content.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-background p-6"
                  >
                    <span className="text-base lg:text-lg leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-semibold lg:text-4xl">
              Ready to Build Verifiable AI?
            </h2>
            <p className="mb-8 text-muted-foreground text-xl lg:text-2xl">
              Join thousands of developers building the future of confidential
              computing with Phala.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <a href="https://docs.phala.network">Get Started</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact">Talk to Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
