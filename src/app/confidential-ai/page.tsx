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
    question: 'What hardware does Phala Cloud use for GPU TEE Inference?',
    answer:
      'Phala Cloud runs AI Inference tasks on TEE-enabled hardware such as Intel Xeon CPUs (for Intel TDX) and NVIDIA H100/H200 GPUs (NVIDIA Confidential Computing).',
  },
  {
    question: 'How much does it cost to use GPU TEE Inference?',
    answer: `We offer fair and transparent pricing that matches other AI inference providers. The difference is that with GPU TEE Inference, you get much stronger privacy and verifiable security at no additional cost.`,
  },
]

export default function GpuTeePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-(--breakpoint-lg)">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-semibold mb-4">GPU TEE Inference</h1>
        <p className="mb-8 max-w-xl mx-auto">
          Run AI models with hardware secured privacy and verifiable output. No
          code change required.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/dashboard/gpu-tee">Get started</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link
              href="https://docs.phala.network/overview/phala-network/gpu-tee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-xs text-center flex flex-col h-full"
            >
              <div className="grow">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="mb-4 text-left text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              {feature.cta && (
                <div className="mt-auto">
                  <Button asChild variant="outline">
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
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
