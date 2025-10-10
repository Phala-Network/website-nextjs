import { Bot, Building2, FileCheck, Layers, Lock, Shield } from 'lucide-react'

const features = [
  {
    id: 'private-ai',
    title: 'Private Enterprise AI',
    description:
      'Train and deploy models on sensitive healthcare, financial, or legal data with complete hardware protection. Your data never leaves the TEE.',
    icon: <Building2 className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'ai-agents',
    title: 'User-Owned AI Agents',
    description:
      'Build autonomous AI agents that securely manage cryptographic keys and digital assets. Powers platforms like Eliza and Virtuals Game Agents.',
    icon: <Bot className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'zk-proofs',
    title: 'ZK Proof Generation',
    description:
      'Accelerate zkVM and zkRollup proof generation with GPU TEE. SP1 zkVM runs with <5% TEE overhead—verified with dual attestation.',
    icon: <Shield className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'fhe-mpc',
    title: 'FHE/MPC Acceleration',
    description:
      'Use GPU TEE as 2FA for FHE and MPC systems. Secure key generation, computation integrity, and attestation in one platform. Powers Fairblock and Mind Network.',
    icon: <Lock className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'multi-proof',
    title: 'Multi-Proof Systems',
    description:
      'Combine ZK proofs with TEE attestation for double security. Hedge against cryptographic bugs while maintaining verifiability.',
    icon: <Layers className="size-10" strokeWidth={1.5} />,
  },
  {
    id: 'compliance',
    title: 'Regulatory Compliance',
    description:
      'Meet GDPR, HIPAA, and SOC 2 requirements with hardware-backed privacy guarantees. Full audit trail with Intel and NVIDIA attestation.',
    icon: <FileCheck className="size-10" strokeWidth={1.5} />,
  },
]

const Feature76 = () => {
  return (
    <section className="relative pt-32">
      <div className="container relative z-10 flex flex-col space-y-14">
        <div className="px-6 lg:px-10">
          <h2 className="text-3xl font-semibold md:mb-4 md:text-5xl lg:mb-6 lg:max-w-2xl">
            What You Can Build with GPU TEE
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            Real-world applications running on Phala Cloud with complete Intel
            TDX + NVIDIA Confidential Computing protection
          </p>
        </div>
        <div className="relative mt-6 md:mt-10">
          <div className="bg-border absolute left-0 right-0 top-0 h-px" />
          <div className="divide-border grid md:grid-cols-2 lg:grid-cols-3 md:divide-x">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative px-6 pb-20 md:pb-16 lg:px-10"
              >
                <div className="bg-border absolute left-0 right-0 top-0 h-px md:hidden" />
                <div className="bg-background relative -mt-6 mb-10 flex aspect-square w-12 items-center justify-center md:-mt-10 md:mb-10 md:w-20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-3 max-w-[14rem] text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-border absolute bottom-0 left-0 right-0 h-px" />
        </div>
      </div>
      <div className="container absolute inset-0 hidden h-full md:block">
        <div className="relative h-full">
          <div className="bg-border absolute inset-y-0 left-0 h-full w-px"></div>
          <div className="bg-border absolute inset-y-0 right-0 h-full w-px"></div>
        </div>
      </div>
    </section>
  )
}

export { Feature76 }
