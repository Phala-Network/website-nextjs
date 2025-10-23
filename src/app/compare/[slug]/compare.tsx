import { AlertCircle, CheckCircle, CircleMinus } from 'lucide-react'
import Image from 'next/image'
import { Fragment } from 'react'

import FinalCTA from '@/components/final-cta'
import { Feature13 } from '@/components/shadcn-blocks/feature13'
import { Badge } from '@/components/ui/badge'
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
  currentSlug?: string
}

export default function Compare({ data, currentSlug }: CompareProps) {
  // Define all comparison pages with Feature13 format using hero banner images
  const allComparisons = [
    {
      id: 'compare-aws',
      slug: 'phala-vs-aws-nitro',
      heading: 'Phala vs AWS Nitro',
      label: 'CONFIDENTIAL COMPUTING',
      description:
        'Compare confidential computing features, pricing, and deployment options. See how Phala stacks up against AWS Nitro Enclaves.',
      image: '/compare/compare-aws.png', // Using hero banner image
      url: '/compare/phala-vs-aws-nitro',
    },
    {
      id: 'compare-gcp',
      slug: 'phala-vs-gcp',
      heading: 'Phala vs Google Cloud',
      label: 'TEE TECHNOLOGY',
      description:
        'See the differences in TEE technology, GPU support, and pricing. Detailed comparison with Google Cloud Confidential Computing.',
      image: '/compare/compare-gcp.png', // Using hero banner image
      url: '/compare/phala-vs-gcp',
    },
    {
      id: 'compare-tinfoil',
      slug: 'phala-vs-tinfoil',
      heading: 'Phala vs Tinfoil',
      label: 'INFRASTRUCTURE',
      description:
        'Explore the key differences in deployment, features, and infrastructure. Full comparison between Phala and Tinfoil.',
      image: '/compare/compare-tinfoil.png', // Using hero banner image
      url: '/compare/phala-vs-tinfoil',
    },
  ]

  // Filter out current page from comparisons
  const otherComparisons = allComparisons.filter(
    (comp) => comp.slug !== currentSlug,
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-16">
            <div className="flex-1 md:max-w-2xl">
              <div className="flex flex-col items-start">
                <Badge variant="outline" className="mb-6 text-xs font-medium uppercase tracking-wider">
                  Platform Comparison
                </Badge>
                <h1 className="mb-6 font-display text-5xl font-semibold leading-none text-foreground lg:text-6xl xl:text-7xl">
                  {data.hero.title}
                </h1>
                {data.hero.alternativeText && (
                  <p className="mb-8 text-muted-foreground text-base leading-6 lg:text-lg lg:leading-7">
                    {data.hero.alternativeText}
                  </p>
                )}
                {data.hero.subtitle && (
                  <p className="mb-8 text-muted-foreground text-base leading-6 lg:text-lg lg:leading-7">
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
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 text-xs font-medium uppercase tracking-wider">
                Quick Overview
              </Badge>
              <h2 className="font-display text-3xl font-semibold leading-tight text-foreground">
                Why Choose Phala?
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              {data.quickTakeaways.map((takeaway) => (
                <div
                  key={takeaway}
                  className="group flex items-start gap-4 rounded-xl border bg-gradient-to-br from-green-50/50 via-background to-background p-6 transition-all hover:shadow-md hover:border-green-200 dark:from-green-950/10 dark:hover:border-green-800"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <CheckCircle className="size-5 text-green-600 dark:text-green-500" />
                  </div>
                  <span className="text-foreground text-base leading-6 lg:text-lg lg:leading-7 pt-1.5">
                    {takeaway}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-20">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 text-xs font-medium uppercase tracking-wider">
                Feature Comparison
              </Badge>
              <h2 className="font-display text-3xl font-semibold leading-tight text-foreground">
                See How We Stack Up
              </h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-background/50 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <div className="grid min-w-2xl grid-cols-3">
                  {/* Header Row */}
                  <div className="border-b border-border/50 p-6"></div>
                  <div className="flex flex-col items-center gap-2 border-b border-border/50 bg-green-50/50 p-6 dark:bg-green-950/20">
                    <CheckCircle className="mb-2 size-8 text-green-600" />
                    <p className="font-display text-lg font-medium">Phala</p>
                    <p className="mt-1 text-center text-sm leading-5 text-muted-foreground">
                      Open-source confidential AI
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 border-b border-border/50 p-6">
                    <div className="mb-2 size-8" />
                    <p className="font-display text-lg font-medium">
                      {data.competitor.name}
                    </p>
                    <p className="mt-1 text-center text-sm leading-5 text-muted-foreground">
                      {data.competitor.description}
                    </p>
                  </div>

                {/* Feature Rows */}
                {data.features.map((feature, index) => (
                  <Fragment key={feature.feature}>
                    <div
                      className={`flex items-center gap-2 p-6 transition-colors hover:bg-muted/30 ${index === data.features.length - 1 ? 'border-border' : 'border-b border-border/50'}`}
                    >
                      <span className="font-display font-medium text-foreground">
                        {feature.feature}
                      </span>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center gap-2 p-6 transition-all hover:shadow-sm ${
                        feature.phala === 'good'
                          ? 'bg-green-50/50 dark:bg-green-950/20'
                          : feature.phala === 'bad'
                            ? 'bg-red-50/50 dark:bg-red-950/20'
                            : 'bg-muted/30'
                      } ${index === data.features.length - 1 ? 'border-border' : 'border-b border-border/50'}`}
                    >
                      <StatusIcon status={feature.phala} />
                      <span className="text-center text-sm leading-5 text-muted-foreground">
                        {feature.phalaText}
                      </span>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center gap-2 p-6 transition-all hover:bg-muted/30 ${
                        feature.competitor === 'good'
                          ? 'bg-green-50/50 dark:bg-green-950/20'
                          : feature.competitor === 'bad'
                            ? 'bg-red-50/50 dark:bg-red-950/20'
                            : ''
                      } ${index === data.features.length - 1 ? '' : 'border-b border-border/50'}`}
                    >
                      <StatusIcon status={feature.competitor} />
                      <span className="text-center text-sm leading-5 text-muted-foreground">
                        {feature.competitorText}
                      </span>
                    </div>
                  </Fragment>
                ))}

                {/* CTA Row */}
                <div className="p-6"></div>
                <div className="flex items-center justify-center gap-2 bg-green-50/50 p-6 dark:bg-green-950/20">
                  <Button className="w-full font-medium" size="lg" asChild>
                    <a href={data.cta.href}>{data.cta.text}</a>
                  </Button>
                </div>
                <div className="p-6"></div>
              </div>
            </div>
            </div>
          </section>

          {/* What does Phala do? */}
          <section className="mb-20">
            <h2 className="mb-6 font-display text-3xl font-semibold leading-tight text-foreground">
              {data.sections.whatIsPhala.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-base leading-6 lg:text-lg lg:leading-7">
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
              <p className="text-muted-foreground text-base leading-6 lg:text-lg lg:leading-7">
                {data.sections.whatIsCompetitor.content}
              </p>
            </div>
          </section>

          {/* Key Differentiators */}
          <section className="mb-20">
            <div className="mb-8 text-center">
              <Badge variant="outline" className="mb-4 text-xs font-medium uppercase tracking-wider">
                Key Advantages
              </Badge>
              <h2 className="font-display text-3xl font-semibold leading-tight text-foreground">
                {data.sections.differentiators.title}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {data.sections.differentiators.content.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl border bg-background/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 backdrop-blur-sm"
                >
                  <div className="absolute -right-4 -top-4 size-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <CheckCircle className="size-5" />
                      </div>
                      <h3 className="font-display text-xl font-medium leading-tight text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground text-base leading-6 lg:text-lg lg:leading-7">
                        {item.description}
                      </p>
                    </div>
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
                    <p className="text-muted-foreground text-base leading-6 lg:text-lg lg:leading-7">
                      {item}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Pricing Comparison */}
          <section className="mb-20">
            <div className="mb-8 text-center">
              <Badge variant="outline" className="mb-4 text-xs font-medium uppercase tracking-wider">
                Pricing
              </Badge>
              <h2 className="font-display text-3xl font-semibold leading-tight text-foreground">
                {data.sections.pricing.title}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-xl border-2 border-primary/20 p-8 bg-gradient-to-br from-primary/5 via-background to-background transition-all hover:border-primary/40 hover:shadow-xl">
                <div className="absolute right-0 top-0">
                  <Badge className="rounded-bl-lg rounded-tr-xl">Recommended</Badge>
                </div>
                <h3 className="mb-4 mt-8 font-display text-xl font-medium text-foreground flex items-center gap-2">
                  <CheckCircle className="size-5 text-primary" />
                  Phala Cloud
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground text-base leading-6 lg:text-lg lg:leading-7">
                    {data.sections.pricing.phalaContent}
                  </p>
                </div>
              </div>
              <div className="group rounded-xl border p-8 bg-background/50 backdrop-blur-sm transition-all hover:border-border/60 hover:shadow-lg">
                <h3 className="mb-4 font-display text-xl font-medium text-foreground">
                  {data.competitor.name}
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground text-base leading-6 lg:text-lg lg:leading-7">
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
                      <span className="text-muted-foreground text-base leading-6 lg:text-lg lg:leading-7">
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

      {/* Compare with Others Section - Cross-linking using Feature13 */}
      {otherComparisons.length > 0 && (
        <Feature13
          title="Compare Phala with Other Providers"
          features={otherComparisons}
        />
      )}

      {/* Final CTA */}
      <FinalCTA />
    </div>
  )
}
