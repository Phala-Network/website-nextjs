import {
  Award,
  FileCheck,
  Globe,
  Lock,
  Network,
  ShieldCheck,
} from 'lucide-react'

const features = [
  {
    id: 'vm-isolation',
    title: 'Full VM Isolation',
    description:
      'Intel TDX creates a Trust Domain that isolates your entire VM from the host OS and hypervisor. Not even the cloud provider can access your data.',
    icon: ShieldCheck,
  },
  {
    id: 'gpu-encryption',
    title: 'GPU Memory Encryption',
    description:
      'NVIDIA Confidential Computing encrypts all data in GPU memory. Model weights, training data, and inference results stay encrypted during computation.',
    icon: Lock,
  },
  {
    id: 'dual-attestation',
    title: 'Dual Remote Attestation',
    description:
      'Get cryptographic proof from both Intel and NVIDIA that your workload runs in genuine TEE hardware. Verify independently with our open-source tools.',
    icon: FileCheck,
  },
  {
    id: 'e2e-encryption',
    title: 'End-to-End Encryption',
    description:
      'Data encrypted in transit (TLS), at rest (AES-256), and during processing (TEE). Network traffic stays within the TEE boundary.',
    icon: Network,
  },
  {
    id: 'global-availability',
    title: 'Global Availability',
    description:
      'Deploy in US-West and India regions. More locations coming soon. All regions offer the same Full-Stack TEE protection.',
    icon: Globe,
  },
  {
    id: 'compliance',
    title: 'Compliance Ready',
    description:
      'Hardware-backed security meets GDPR, HIPAA, and SOC 2 requirements. Audit-ready with attestation logs and compliance reports.',
    icon: Award,
  },
]

const Feature67 = () => {
  return (
    <section className="py-24">
      <div className="container flex flex-col items-start gap-8 lg:gap-12 lg:px-16 xl:flex-row xl:gap-32">
        <div className="xl:max-w-md lg:max-w-xl shrink-0">
          <h2 className="font-display font-semibold text-foreground text-3xl leading-tight md:shrink-0 md:text-4xl lg:text-5xl mb-4">
            What is GPU TEE?
          </h2>
          <p className="text-muted-foreground font-display text-lg leading-7 mb-4">
            GPU TEE (Trusted Execution Environment) provides{' '}
            <strong className="text-foreground">
              hardware-level isolation
            </strong>{' '}
            for your entire AI workload—from CPU to GPU. Unlike traditional
            cloud computing where your data is exposed to the host system, GPU
            TEE creates a secure enclave that not even the cloud provider can
            access.
          </p>
          <p className="text-muted-foreground font-display text-lg leading-7">
            Phala Cloud is the only platform combining{' '}
            <strong className="text-foreground">Intel TDX</strong> (CPU/memory
            protection) with{' '}
            <strong className="text-foreground">
              NVIDIA Confidential Computing
            </strong>{' '}
            (GPU encryption) for complete Full-Stack TEE protection. This
            dual-layer security enables private AI training, ZK proof
            generation, and cryptographic operations with{' '}
            <strong className="text-foreground">
              cryptographic verification
            </strong>{' '}
            through dual attestation reports.
          </p>
        </div>
        <div className="grid w-full gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex rounded-lg border border-border bg-accent p-6 md:p-8"
            >
              <feature.icon className="mr-3 size-5 shrink-0 lg:mr-6 lg:size-6" />
              <div className="flex-1 min-w-0">
                <div className="mb-3 text-sm font-semibold text-accent-foreground md:text-base break-words">
                  {feature.title}
                </div>
                <div className="text-sm font-medium text-muted-foreground md:text-base break-words">
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

export { Feature67 }
