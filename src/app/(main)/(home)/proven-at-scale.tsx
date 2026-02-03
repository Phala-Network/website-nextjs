import { CheckCircle } from 'lucide-react'

const metrics = [
  {
    value: '500+',
    label: 'Active Teams',
    description: 'Building with confidential AI',
  },
  {
    value: '10K+',
    label: 'Daily Attestations',
    description: 'Real-time security verifications',
  },
  {
    value: '$2M+',
    label: 'ARR',
    description: 'From enterprise clients',
  },
]

const certifications = [
  'SOC 2 Type I Certified',
  'HIPAA Compliant',
  'ISO 27001 In Progress',
  '99.9% Uptime SLA',
  '24/7 Enterprise Support',
  'GDPR Compliant Processing',
]

export default function ProvenAtScaleSection() {
  return (
    <section className="py-24 w-full max-w-6xl mx-auto bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-4 sm:mb-12">
          <h1 className="font-display text-center text-3xl leading-none font-semibold md:text-4xl mb-4">
            Proven at Scale
          </h1>
          <p className="text-center text-muted-foreground font-display font-medium text-lg leading-7 md:text-xl">
            Built for enterprise security and regulatory requirements.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="text-center px-4 lg:px-8 py-8"
            >
              <p className="text-sm leading-5 lg:text-base lg:leading-6 font-medium text-muted-foreground mb-4">
                {metric.description}
              </p>
              <p className="font-display text-4xl lg:text-5xl font-bold mb-3 leading-none">
                {metric.value}
              </p>
              <p className="font-display text-lg leading-7 lg:text-2xl lg:leading-none font-semibold text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Enterprise Section - bordered card */}
        <div className="mt-8 rounded-xl border border-border p-8 sm:p-10">
          <h3 className="font-display text-xl leading-7 sm:text-2xl sm:leading-none font-semibold mb-8">
            Enterprise Trust & Compliance
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center space-x-3">
                <CheckCircle className="size-4 text-primary" />
                <span className="text-base leading-6 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
