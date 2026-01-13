import { Badge } from '@/components/ui/badge'

const faqs = [
  {
    question: 'What makes Phala Cloud different from other GPU cloud providers?',
    answer:
      'Phala Cloud is the only provider offering Full-Stack TEE: Intel TDX for CPU/memory protection + NVIDIA Confidential Computing for GPU protection. Most providers offer GPU-only security or no TEE at all, leaving your data exposed to the host system.',
  },
  {
    question: 'What is dual attestation?',
    answer:
      'Dual attestation means you get cryptographic proof from both Intel (for TDX) and NVIDIA (for Confidential Computing) that your workload runs in genuine TEE hardware. You can verify these attestation reports independently with our open-source tools.',
  },
  {
    question: "What's the performance overhead of TEE?",
    answer:
      'Our benchmarks show <5% overhead for most workloads. For example, SP1 zkVM running in GPU TEE shows only 4-5% performance impact compared to non-TEE environments, while providing complete hardware protection.',
  },
  {
    question: 'Can I train AI models on private data?',
    answer:
      'Yes! Full-Stack TEE protection means your training data, model weights, and inference results are all protected by hardware encryption. Perfect for healthcare, financial, and legal AI applications where data privacy is critical.',
  },
  {
    question: 'How do I deploy my own models?',
    answer:
      'Three options: (1) Deploy CVM + GPU for full control with SSH access, (2) Use our Confidential AI Models for one-click deployment, or (3) Contact us for Enterprise Solutions with dedicated clusters and custom SLAs.',
  },
  {
    question: 'What about ZK proof generation and FHE workloads?',
    answer:
      'GPU TEE is optimized for cryptographic operations. We support SP1 zkVM, zkRollups, FHE acceleration, and MPC systems. Our customers include projects like Fairblock, Mind Network, and various zkRollup providers.',
  },
  {
    question: 'Which GPUs are available?',
    answer:
      'Currently: H200 (141GB HBM3e), H100 (80GB HBM3). Coming soon: B200 (192GB HBM3e). All GPUs include Intel TDX + NVIDIA Confidential Computing protection. Scale from 1 to 8 GPUs per instance.',
  },
  {
    question: "What's the pricing?",
    answer:
      'On-demand: H200 from $3.50/GPU/hr, H100 from $3.08/GPU/hr, B200 from $7.99/GPU/hr. On-demand includes 24-hour minimum billing. Reserved (6+ months): H200 from $2.56/GPU/hr (27% savings), H100 from $2.38/GPU/hr (23% savings), B200 from $5.63/GPU/hr (29% savings). Volume discounts available for enterprise.',
  },
  {
    question: 'How do I verify attestation?',
    answer:
      "Use our attestation API or open-source verification tools. You'll receive attestation reports from both Intel and NVIDIA that you can verify independently. We also provide a public PCCS server at https://pccs.phala.network for quote verification.",
  },
]

export function Faq14() {
  return (
    <section className="w-full py-24 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="text-center">
          <Badge className="text-xs leading-4 font-medium">FAQ</Badge>
          <h1 className="font-display mt-4 text-3xl leading-none md:text-4xl font-semibold">
            Common Questions & Answers
          </h1>
          <p className="mt-4 text-lg leading-7 md:text-xl font-display font-medium text-muted-foreground">
            Everything you need to know about GPU TEE
          </p>
        </div>
        <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="flex gap-4">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-muted font-mono text-sm leading-5 text-muted-foreground font-semibold">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-lg leading-7">{faq.question}</h3>
                <p className="text-muted-foreground text-base leading-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
