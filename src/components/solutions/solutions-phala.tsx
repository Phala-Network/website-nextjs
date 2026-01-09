'use client'

import { ArrowRight, Building, CheckCircle, Code, User } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Solution {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  ctaText: string
  ctaLink: string
}

const solutions: Solution[] = [
  {
    title: 'Personal',
    description:
      'Private AI assistants for individuals who value data sovereignty and zero-logging guarantees.',
    features: [
      'Private chat with zero data retention',
      'Encrypted journal & notes',
      'Personal data analysis',
    ],
    icon: <User className="h-6 w-6" />,
    ctaText: 'Try Models',
    ctaLink: 'https://cloud.phala.com/dashboard/confidential-ai-models',
  },
  {
    title: 'Developer',
    description:
      'OpenAI-compatible APIs with TEE protection—drop-in replacement with hardware-enforced privacy.',
    features: [
      'One-line API integration',
      'Same SDKs & libraries',
      'Verifiable attestation',
    ],
    icon: <Code className="h-6 w-6" />,
    ctaText: 'Get API Key',
    ctaLink: 'https://cloud.phala.com/dashboard/confidential-ai-api',
  },
  {
    title: 'Enterprise',
    description:
      'Scalable confidential AI infrastructure with compliance, auditability, and flexible deployment options.',
    features: [
      'Private RAG & AI copilots',
      'Confidential fine-tuning',
      'On-prem or cloud deployment',
      'SOC 2 & HIPAA certified',
    ],
    icon: <Building className="h-6 w-6" />,
    ctaText: 'Contact Us',
    ctaLink: 'https://phala.com/contact',
  },
]

export function SolutionsPhala() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Solutions for Every User
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Choose the perfect privacy-first AI solution tailored to your
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-background hover:border-primary/50 backdrop-blur-sm flex flex-col"
              >
                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-lg p-3 text-primary">
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {solution.title}
                        </h3>
                        <div className="text-muted-foreground mt-1 text-sm">
                          {solution.title === 'Personal'
                            ? 'Individual'
                            : solution.title === 'Developer'
                              ? 'API'
                              : 'Enterprise'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="mb-3 text-sm font-medium">
                        What's included:
                      </h4>
                      <ul className="space-y-2 min-h-[96px]">
                        {solution.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-3 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full group"
                      variant={
                        solution.title === 'Enterprise' ? 'outline' : 'default'
                      }
                    >
                      <Link href={solution.ctaLink}>
                        {solution.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
