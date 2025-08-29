import { Code, Rocket, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Confidential VM',
  description:
    'Deploy containerized apps in a Trusted Execution Environment (TEE) on Phala. Secure, fast, and open-source confidential computing.',
}

const features = [
  {
    title: 'Instant Launch',
    description:
      'Deploy TEE apps in minutes, not weeks. Phala eliminates complex setup by supporting arbitrary Docker containers, saving you time, money, and engineering effort. You can focus on building, not infrastructure.',
    cta: 'https://docs.phala.com/phala-cloud/getting-started/start-from-cloud-ui',
    icon: <Rocket className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: 'Full Chain of Trust',
    description:
      'From TEE attestation, key management infra, all the way to your source code, your TEE runs with security best practices enforced by default and backed by cryptographic proof.',
    cta: 'https://docs.phala.com/dstack/design-documents/decentralized-root-of-trust',
    icon: <ShieldCheck className="w-12 h-12 text-green-600 mb-4" />,
  },
  {
    title: 'Open Source Infra',
    description:
      "Built on dstack, the industry's most open TEE framework. Transparent, extensible, and self-hostable. No vendor lock-in, no hidden code. You have complete control over everything.",
    cta: 'https://docs.phala.com/dstack/overview',
    icon: <Code className="w-12 h-12 text-purple-600 mb-4" />,
  },
]

const faqs = [
  {
    question: 'What is a TEE or Confidential VM?',
    answer:
      'A Trusted Execution Environment (TEE) or Confidential VM (CVM) is a secure environment that isolates code and data from the host system using hardware-level protection. Even the vendor or the operating system cannot access the app data or interfere with code execution. It enables verifiable and encrypted computation.',
  },
  {
    question: 'How is Phala different from AWS Nitro and Azure CVM?',
    answer: `Phala saves you money. You can deploy any containerized app without changing your code. You need to spend weeks porting your code to AWS Nitro or Azure CVM.

Phala is secure. It enforces the security best practices by default. Achieving the same level of security on AWS Nitro or Azure CVM takes weeks of manual work.

Phala is open. The infrastructure [dstack] is fully open source. AWS Nitro and Azure CVM have proprietary components and APIs creating vendor lock-in.`,
  },
  {
    question: 'How fast can I launch a CVM with Phala?',
    answer:
      'You can launch a CVM on Phala in minutes, not weeks. Our lift-and-shift experience reduces setup time from weeks to just 1 day, saving you time and operational costs.',
  },
  {
    question:
      'How does Phala ensure end-to-end security and verifiable compute?',
    answer:
      'Phala implements a full chain of trust from hardware, key management, network to code. Every component is cryptographically attested, enabling verifiable compute and enforcing a zero-trust architecture by default.',
  },
  {
    question: "Is Phala's Confidential VM platform open source?",
    answer:
      'Yes. Phala is built on [dstack], a fully open-source TEE framework. You can inspect, modify, and self-host the entire stack. No hidden code, no restrictions.',
  },
  {
    question: 'What hardware does Phala use for TEE Confidential VMs?',
    answer:
      'Phala runs on TEE-enabled hardware such as Intel Xeon CPU (for Intel TDX) and NVIDIA H100/H200 (NVIDIA Confidential Computing).',
  },
  {
    question: 'How much does it cost to use Phala CVMs?',
    answer: `You can start exploring TEE development with a CVM for free! Take advantage of $20 in CVM credits before you scale.

Phala offers transparent pricing with significant savings in delivery time and engineering resources. Learn more on our [pricing page].`,
  },
]

export default function ConfidentialVmPage() {
  return (
    <div className="w-full bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 max-w-6xl mx-auto">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-semibold text-balance lg:text-5xl mb-8">
              Confidential VM
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl font-medium mb-12">
              Deploy arbitrary containerized app to TEE in minutes. No steep
              learning curve. No hardware maintenance costs. Just focus on
              delivery.
            </p>
            <div className="flex gap-3 items-start">
              <Button size="lg" className="shrink-0" asChild>
                <Link href="/register">Get started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="max-sm:px-6"
                asChild
              >
                <Link
                  href="https://docs.phala.com/phala-cloud/getting-started"
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
              Everything you need to deploy secure, confidential applications
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
              Everything you need to know about Confidential VMs
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
