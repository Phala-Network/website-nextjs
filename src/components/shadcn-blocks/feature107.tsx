import { Award, Cpu, FileCheck, Globe, Lock, Shield } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

const features = [
  {
    icon: Cpu,
    title: 'Full VM Isolation',
    description:
      'Intel TDX protects CPU, memory, and VM from host access. Complete isolation.',
  },
  {
    icon: Lock,
    title: 'GPU Memory Encryption',
    description:
      'NVIDIA CC encrypts all GPU memory. Model weights and data stay secure.',
  },
  {
    icon: FileCheck,
    title: 'Dual Attestation',
    description:
      'Cryptographic proof from Intel + NVIDIA. Independently verifiable.',
  },
  {
    icon: Shield,
    title: 'End-to-End Protection',
    description:
      'Data encrypted in transit (TLS), at rest (AES-256), and during processing (TEE).',
  },
  {
    icon: Globe,
    title: 'Multi-Region Deployment',
    description:
      'Deploy in US-West and India. Same Full-Stack TEE protection everywhere.',
  },
  {
    icon: Award,
    title: 'Compliance Ready',
    description:
      'GDPR, HIPAA, SOC 2 compliant. Hardware-backed security guarantees.',
  },
]

const Feature107 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="gap grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="mx-auto flex flex-col gap-4 md:col-span-2">
            <Badge
              variant="outline"
              className="flex w-fit gap-1 px-2.5 py-1.5 text-sm"
            >
              <Shield className="h-auto w-4" />
              Security
            </Badge>
            <h2 className="text-3xl font-semibold lg:text-4xl">
              Full-Stack TEE Architecture
            </h2>
            <p className="text-muted-foreground">
              Complete hardware protection from CPU to GPU. Intel TDX + NVIDIA
              Confidential Computing working together.
            </p>
          </div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-xl border p-6 transition-colors duration-300 hover:bg-muted/60"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 shrink-0 place-content-center rounded-md border">
                  <feature.icon className="h-auto w-6 text-primary" />
                </span>
              </div>
              <div>
                <h3 className="font-medium md:text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Feature107 }
