import { type SVGProps, useId } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const FAQ_ITEMS = [
  {
    category: 'GPU TEE BASICS',
    items: [
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
    ],
  },
  {
    category: 'USE CASES & DEPLOYMENT',
    items: [
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
    ],
  },
  {
    category: 'TECHNICAL & PRICING',
    items: [
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
    ],
  },
]

export function GpuTeeFaq() {
  return (
    <section className="relative py-32">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-2xl text-muted-foreground md:text-3xl">
            Everything you need to know about GPU TEE
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl space-y-12 md:mt-12 lg:mt-20">
          {FAQ_ITEMS.map((category) => (
            <Card key={category.category} className="border-hidden bg-muted">
              <CardHeader className="pb-0">
                <h3 className="border-b pb-4 font-mono text-sm font-medium tracking-widest text-accent-foreground uppercase">
                  {category.category}
                </h3>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${category.category}-${i}`}
                      className="border-b border-muted last:border-0"
                    >
                      <AccordionTrigger className="text-start text-base font-medium hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-medium text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)]">
        <PlusSigns className="h-full w-full text-foreground/[0.05]" />
      </div>
    </section>
  )
}

interface PlusSignsProps extends SVGProps<SVGSVGElement> {
  className?: string
}

const PlusSigns = ({ className, ...props }: PlusSignsProps) => {
  const GAP = 16
  const STROKE_WIDTH = 1
  const PLUS_SIZE = 6
  const id = useId()
  const patternId = `plus-pattern-${id}`

  return (
    <svg width={GAP * 2} height={GAP * 2} className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={GAP}
          height={GAP}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={GAP / 2}
            y1={(GAP - PLUS_SIZE) / 2}
            x2={GAP / 2}
            y2={(GAP + PLUS_SIZE) / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
          <line
            x1={(GAP - PLUS_SIZE) / 2}
            y1={GAP / 2}
            x2={(GAP + PLUS_SIZE) / 2}
            y2={GAP / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
