import {
  CheckCircle2,
  Cpu,
  Fingerprint,
  Globe,
  Key,
  Shield,
} from 'lucide-react'

const features = [
  {
    id: 'feature-1',
    title: 'Full VM Isolation',
    description:
      'Intel TDX provides complete VM-level isolation. Host OS cannot access your memory, CPU registers, or any execution state.',
    icon: Shield,
  },
  {
    id: 'feature-2',
    title: 'GPU Memory Encryption',
    description:
      'NVIDIA Confidential Computing encrypts all GPU memory. Your model weights and activations never leave the protected GPU.',
    icon: Cpu,
  },
  {
    id: 'feature-3',
    title: 'Dual Remote Attestation',
    description:
      'Get both Intel TDX and NVIDIA attestation reports. Cryptographically verify your entire workload runs in genuine TEE.',
    icon: Fingerprint,
  },
  {
    id: 'feature-4',
    title: 'End-to-End Encryption',
    description:
      'Data encrypted from ingress to egress. Even network traffic is protected within the TEE boundary.',
    icon: Key,
  },
  {
    id: 'feature-5',
    title: 'Global Availability',
    description:
      'Deploy in US-East, US-West, Europe, India, and Asia-Pacific regions with low-latency connections.',
    icon: Globe,
  },
  {
    id: 'feature-6',
    title: 'Compliance Ready',
    description:
      'Meet GDPR, HIPAA, SOC 2, and other regulatory requirements with hardware-backed privacy guarantees.',
    icon: CheckCircle2,
  },
]

const GpuTeeFeatures = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-start gap-8 lg:gap-12 lg:px-16 xl:flex-row xl:gap-32">
        <h2 className="font-display font-semibold text-foreground text-3xl leading-tight md:shrink-0 md:text-4xl lg:max-w-3xl lg:text-5xl">
          Enterprise-Grade Security Features
        </h2>
        <div className="grid w-full gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex rounded-lg border border-border bg-accent p-6 md:p-8"
            >
              <feature.icon className="mr-3 size-5 shrink-0 lg:mr-6 lg:size-6" />
              <div>
                <div className="mb-3 h-5 text-sm font-semibold text-accent-foreground md:text-base">
                  {feature.title}
                </div>
                <div className="text-sm font-medium text-muted-foreground md:text-base">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { GpuTeeFeatures }
