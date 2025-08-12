import { CheckCircle } from 'lucide-react'

import { DashedLine } from '@/components/dashed-line'

const metrics = [
  {
    description: 'Active developers deploying',
    value: '500+',
    label: 'teams building',
  },
  {
    description: 'Real-time security verifications',
    value: '10K+',
    label: 'daily attestations',
  },
  {
    description: 'Annual recurring revenue from',
    value: '$2M+',
    label: 'enterprise clients',
  },
]

const certifications = [
  'SOC 2 Type II',
  '99.9% Uptime SLA',
  'HIPAA Ready Infrastructure',
  '24/7 Enterprise Support',
  'GDPR Compliant Processing',
  'Zero Security Breaches',
]

export default function ProvenAtScaleSection() {
  return (
    <section className="py-24 w-full max-w-6xl mx-auto">
      <div className="container">
        {/* Section Header */}
        <div className="mb-4 sm:mb-12">
          <h1 className="text-center text-3xl font-bold md:text-4xl mb-4">
            Proven at Scale
          </h1>
          <p className="text-center text-muted-foreground font-medium text-lg md:text-xl">
            Built for enterprise security and regulatory requirements.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div
              key={metric.value}
              className="text-center relative px-4 lg:px-8 py-8"
            >
              <p className="text-sm lg:text-base font-medium text-muted-foreground mb-4">
                {metric.description}
              </p>
              <p className="text-4xl lg:text-5xl font-bold mb-3 leading-none">
                {metric.value}
              </p>
              <p className="text-lg lg:text-2xl font-semibold text-muted-foreground">
                {metric.label}
              </p>

              {/* Vertical lines for desktop (first two items) */}
              {index < metrics.length - 1 && (
                <DashedLine
                  orientation="vertical"
                  className="absolute top-0 right-0 md:block hidden h-full"
                />
              )}

              {/* Horizontal lines for mobile (last two items) */}
              {index > 0 && (
                <DashedLine
                  orientation="horizontal"
                  className="absolute top-0 md:hidden block w-full"
                />
              )}
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="relative">
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 left-0 w-full"
          />

          <div className="pt-12 sm:px-8 mx-auto max-w-4xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">
              Enterprise Trust & Compliance
            </h3>

            <div className="max-sm:max-w-[300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center space-x-3">
                  <CheckCircle className="size-4 text-green-500" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
