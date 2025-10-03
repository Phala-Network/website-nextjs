import { Award, Cpu, FileCheck, Globe, Lock, Shield } from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

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

export function TEEFeatures() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="mb-6 text-4xl font-semibold text-pretty lg:text-5xl">
            Full-Stack TEE Architecture
          </h1>
          <p className="max-w-3xl text-muted-foreground lg:text-lg">
            Complete hardware protection from CPU to GPU. Intel TDX + NVIDIA
            Confidential Computing working together.
          </p>

          <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="flex h-full flex-col">
                <CardHeader className="pb-4">
                  <feature.icon
                    className="size-6 text-primary"
                    strokeWidth={1.5}
                  />
                </CardHeader>
                <CardContent className="flex-1 text-left">
                  <h2 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-sm leading-snug text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
                <CardFooter className="justify-end p-0">
                  <div className="h-20 w-full rounded-tl-md bg-gradient-to-br from-primary/10 to-primary/5" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
