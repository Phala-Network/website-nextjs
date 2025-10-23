import { Bot, Building, Lock, Scale, Shield, Zap } from 'lucide-react'

const useCases = [
  {
    id: 'use-case-1',
    title: 'Private Enterprise AI',
    description:
      'Run proprietary LLMs without exposing models or data to cloud provider. Complete confidentiality for healthcare, finance, and legal AI applications.',
    icon: <Building className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'use-case-2',
    title: 'User-Owned AI Agents',
    description:
      'Deploy AI agents that users truly own and control. Unruggable AI with smart contract-level trustworthiness and verifiable execution.',
    icon: <Bot className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'use-case-3',
    title: 'ZK Proof Generation',
    description:
      'Run SP1 zkVM and other ZK provers with GPU acceleration. Near-native performance with no privacy leaks during proof generation.',
    icon: <Lock className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'use-case-4',
    title: 'FHE/MPC Acceleration',
    description:
      'GPU-accelerated FHE computation with secure key management. Build blind voting, encrypted analytics, and privacy-preserving AI.',
    icon: <Shield className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'use-case-5',
    title: 'Multi-Proof Systems',
    description:
      'Combine TEE with ZK for dual verification. Build zkRollups, zkTLS, and other systems requiring hardware + cryptographic security.',
    icon: <Zap className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'use-case-6',
    title: 'Regulatory Compliance',
    description:
      'Meet GDPR, HIPAA, and SOC 2 requirements with hardware-backed privacy. Verifiable confidential computing for sensitive data.',
    icon: <Scale className="size-10" strokeWidth={1.5} />,
  },
]

const GpuTeeUseCases = () => {
  return (
    <section className="relative pt-32">
      <div className="container relative z-10 flex flex-col space-y-14">
        <h2 className="px-6 font-display font-semibold text-foreground text-3xl leading-tight md:mb-4 md:text-4xl lg:mb-6 lg:max-w-md lg:px-10 lg:text-5xl">
          Built for Confidential AI and Advanced Cryptography
        </h2>
        <div className="relative mt-6 md:mt-10">
          <div className="absolute left-0 right-0 top-0 h-px bg-border" />
          <div className="grid divide-border md:grid-cols-3 md:divide-x">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className="relative px-6 pb-20 md:pb-10 lg:px-10"
              >
                <div className="absolute left-0 right-0 top-0 h-px bg-border md:hidden" />
                <div className="relative -mt-6 mb-10 flex aspect-square w-12 items-center justify-center bg-background md:-mt-10 md:mb-10 md:w-20">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="mb-3 max-w-[12rem] text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
        </div>
      </div>
      <div className="container absolute inset-0 hidden h-full md:block">
        <div className="relative h-full">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-border"></div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-border"></div>
        </div>
      </div>
    </section>
  )
}

export { GpuTeeUseCases }
