import { Badge } from '@/components/ui/badge'

const faqs = [
  {
    question: "What makes Phala's GPU TEE different from other providers?",
    answer:
      'Phala Cloud is the only platform combining Intel TDX (for CPU/memory/VM protection) with NVIDIA Confidential Computing (for GPU protection). This full-stack TEE ensures your entire workload is isolated, not just the GPU. Other providers only protect the GPU, leaving CPU and memory vulnerable to host attacks.',
  },
  {
    question: 'What is dual attestation and why is it important?',
    answer:
      'Dual attestation means you receive two cryptographic proofs: one from Intel TDX verifying your CPU/memory/VM security, and one from NVIDIA verifying your GPU security. This provides end-to-end verification that your entire workload runs in a genuine, hardware-protected environment - not just part of it.',
  },
  {
    question: 'How does Intel TDX + NVIDIA CC work together?',
    answer:
      'Intel TDX creates an isolated Trust Domain (TD) for your entire VM, encrypting memory and preventing host access to CPU state. NVIDIA Confidential Computing extends this protection to the GPU, encrypting GPU memory and computations. Together, they provide complete full-stack isolation.',
  },
  {
    question: 'Can the cloud provider access my data or models?',
    answer:
      "No. With full-stack TEE, the host OS and cloud provider cannot access your CPU memory, GPU memory, or any execution state. All data is encrypted in hardware, and only your code running inside the TEE can decrypt it. Even Phala's operators cannot access your workload.",
  },
  {
    question: 'What use cases benefit from full-stack TEE?',
    answer:
      'Ideal for: Private enterprise AI (healthcare/finance/legal), user-owned AI agents, ZK proof generation (SP1 zkVM), FHE/MPC acceleration, multi-proof systems (zkRollups, zkTLS), and any workload requiring regulatory compliance (GDPR, HIPAA, SOC 2).',
  },
  {
    question: 'What are the three deployment models?',
    answer:
      '1) CVM + GPU: Full Docker control for custom workloads. 2) Confidential AI Models: One-click deployment of popular LLMs with OpenAI-compatible API. 3) Enterprise Deals: Dedicated clusters, custom SLAs, volume discounts for production workloads.',
  },
  {
    question: 'What frameworks and tools are supported?',
    answer:
      'All standard AI frameworks work: PyTorch, TensorFlow, JAX, vLLM, TGI, etc. For ZK: SP1, Risc0, and other zkVMs. For FHE/MPC: SEAL, TFHE, and standard MPC libraries. You can bring any Docker container.',
  },
  {
    question: 'How do I verify my workload is truly secure?',
    answer:
      'Use our attestation APIs to get both Intel TDX and NVIDIA reports. These cryptographic proofs can be verified independently to confirm your workload runs in genuine TEE. We provide SDKs in JavaScript, Python, and Go for easy verification.',
  },
  {
    question: 'What GPUs are available and how does pricing work?',
    answer:
      'Available: H200, H100, B200. Pricing starts at $2.30/GPU/hour with reserved commitments. On-demand pricing from $3.50/GPU/hour. Volume discounts available for enterprise. All prices include full-stack TEE protection.',
  },
  {
    question: 'What SLA do you offer for enterprise deployments?',
    answer:
      'Enterprise customers get 99.9% uptime SLA, dedicated support, reserved GPU capacity, and custom configurations. Contact our sales team for tailored SLAs and compliance certifications (SOC 2, ISO 27001).',
  },
]

export function GpuTeeFaq() {
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
