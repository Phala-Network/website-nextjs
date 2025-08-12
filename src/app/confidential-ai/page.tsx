import { Cpu, Replace, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'GPU TEE Inference',
  description:
    'Run AI models privately and verifiably using NVIDIA GPU TEEs on Phala. OpenAI-compatible API with hardware-backed security.',
}

const features = [
  {
    title: 'Drop-in Replacement for LLM API',
    description:
      "Enjoy the privacy and verifiability with zero cost. Our API is fully OpenAI-compatible. Just switch the endpoint and you're ready to go.",
    cta: 'https://docs.phala.network/llm-in-gpu-tee/llm-in-tee#overview',
    icon: <Replace className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Don't Trust, Verify",
    description:
      'Every inference runs inside TEE. Data stays private and outputs are tamper-proof. You receive remote attestation to cryptographically verify the trustworthiness of each result.',
    cta: 'https://docs.phala.network/llm-in-gpu-tee/llm-in-tee#get-tee-attestation-report',
    icon: <ShieldCheck className="w-12 h-12 text-green-600 mb-4" />,
  },
  {
    title: 'NVIDIA Confidential Compute & Open Infra',
    description:
      'Built on NVIDIA Confidential Computing technology and the open source private-ml-sdk and dstack, you get unmatched transparency, hardware-backed security, open code, and full control.',
    cta: null,
    icon: <Cpu className="w-12 h-12 text-purple-600 mb-4" />,
  },
]

const faqs = [
  {
    question: 'What is a TEE?',
    answer:
      'A Trusted Execution Environment (TEE) is a secure environment that isolates code and data from the host system using hardware-level protection. Even the vendor or operating system cannot access the app data or interfere with code execution. It enables verifiable and encrypted computation.',
  },
  {
    question: 'What is GPU TEE Inference?',
    answer: `GPU TEE Inference runs AI models inside GPU-based TEEs, providing hardware-level privacy and verifiability. It ensures that both your input data and model outputs are protected from cloud providers and third parties.`,
  },
  {
    question: 'How is this different from using OpenAI or Hugging Face APIs?',
    answer: `Unlike traditional APIs, GPU TEE Inference provides confidentiality and execution proof. Each call runs inside a secure NVIDIA GPU TEE and includes remote attestation. So you can verify the inference was executed in a secure environment.`,
  },
  {
    question: 'Is the API really OpenAI-compatible?',
    answer: `Yes. Our API is fully compatible with OpenAI and OpenRouter standards. Just update the base URL and reuse your existing code and tools. No rewrites required.`,
  },
  {
    question: 'How can I verify that an inference was private and secure?',
    answer: `Every inference includes a cryptographic proof that shows it ran securely inside a GPU TEE. You can verify both the platform's integrity and the result itself. So your users can trust the output, not just take it on faith.`,
  },
  {
    question: 'What hardware does Phala use for GPU TEE Inference?',
    answer:
      'Phala runs AI Inference tasks on TEE-enabled hardware such as Intel Xeon CPUs (for Intel TDX) and NVIDIA H100/H200 GPUs (NVIDIA Confidential Computing).',
  },
  {
    question: 'How much does it cost to use GPU TEE Inference?',
    answer: `We offer fair and transparent pricing that matches other AI inference providers. The difference is that with GPU TEE Inference, you get much stronger privacy and verifiable security at no additional cost.`,
  },
]

export default function GpuTeePage() {
  return (
    <div className="w-full bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 max-w-6xl mx-auto">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-semibold text-balance lg:text-5xl mb-8">
              GPU TEE Inference
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl font-medium mb-12">
              Run AI models with hardware secured privacy and verifiable output.
              No code change required.
            </p>
            <div className="flex gap-3 items-start">
              <Button size="lg" className="shrink-0" asChild>
                <Link href="/dashboard/gpu-tee">Get started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="max-sm:px-6"
                asChild
              >
                <Link
                  href="https://docs.phala.network/overview/phala-network/gpu-tee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 max-w-6xl mx-auto">
        <div className="container">
          <div className="mb-4 sm:mb-12">
            <h2 className="text-center text-3xl font-bold md:text-4xl mb-4">
              Features
            </h2>
            <p className="text-center text-muted-foreground font-medium text-lg md:text-xl">
              Enterprise-grade privacy and verifiability for AI inference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 border rounded-lg shadow-sm text-center flex flex-col h-full bg-card"
              >
                <div className="grow">
                  <div className="flex justify-center mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {feature.cta && (
                  <div className="mt-8">
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href={feature.cta}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-6xl mx-auto">
        <div className="container">
          <div className="mb-4 sm:mb-12">
            <h2 className="text-center text-3xl font-bold md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground font-medium text-lg md:text-xl">
              Everything you need to know about GPU TEE Inference
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-border pb-8 last:border-b-0"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
