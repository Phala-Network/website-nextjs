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
        question:
          'What makes Phala Cloud different from other GPU cloud providers?',
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
    ],
  },
  {
    category: 'USE CASES & DEPLOYMENT',
    items: [
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
    ],
  },
  {
    category: 'TECHNICAL & PRICING',
    items: [
      {
        question: 'Which GPUs are available?',
        answer:
          'Currently: H200 (141GB HBM3e), H100 (80GB HBM3). Coming soon: B200 (192GB HBM3e). All GPUs include Intel TDX + NVIDIA Confidential Computing protection. Scale from 1 to 8 GPUs per instance.',
      },
      {
        question: "What's the pricing?",
        answer:
          'On-demand: H200 from $3.50/GPU/hr, H100 from $3.08/GPU/hr. Reserved (3+ months): H200 from $2.30/GPU/hr (34% savings), H100 from $2.50/GPU/hr (30% savings). Volume discounts available for enterprise.',
      },
      {
        question: 'How do I verify attestation?',
        answer:
          "Use our attestation API or open-source verification tools. You'll receive attestation reports from both Intel and NVIDIA that you can verify independently. We also provide a public PCCS server at https://pccs.phala.network for quote verification.",
      },
    ],
  },
]

export function Faq14() {
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
