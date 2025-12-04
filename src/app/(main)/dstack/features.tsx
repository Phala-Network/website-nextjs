import type { LucideIcon } from 'lucide-react'
import { Bot, Container, Lock, Shield } from 'lucide-react'

const features: ReadonlyArray<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Container,
    title: 'Developer Friendly',
    description:
      'Docker support means no code changes required. Package your existing applications and deploy them securely in minutes.',
  },
  {
    icon: Bot,
    title: 'Confidential AI Ready',
    description:
      'Purpose-built for confidential AI with TEE GPU support. Run private AI models on NVIDIA GPUs with hardware-guaranteed confidentiality.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Open source, independently audited by security experts, with secure services out-of-the-box.',
  },
  {
    icon: Lock,
    title: 'Verifiable Computing',
    description:
      'Every application comes with cryptographic attestation and a Trust Center for real-time verification.',
  },
]

const Features = () => {
  return (
    <section className="py-24 mx-auto">
      <div className="container">
        <div className="grid gap-4 overflow-hidden rounded-lg md:grid-cols-2 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`flex flex-col gap-3 p-5 md:p-8 md:gap-6 bg-card rounded-lg`}
              >
                <Icon className="size-6 shrink-0" />
                <div>
                  <h2 className="font-display text-sm font-semibold leading-4 md:text-base">
                    {feature.title}
                  </h2>
                  <p className="font-display text-sm leading-5 text-muted-foreground md:text-base md:leading-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
