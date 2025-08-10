import { Badge } from '@/components/ui/badge'

const faqs = [
  {
    question: 'What is Trusted Execution Environment (TEE)?',
    answer:
      'TEE is a secure area inside a main processor that guarantees code and data protection. It provides hardware-level isolation, ensuring that sensitive operations are performed in a secure environment that cannot be accessed by the operating system, hypervisor, or other applications.',
  },
  {
    question: 'How does confidential AI protect sensitive data?',
    answer:
      'Confidential AI ensures that sensitive data and AI models remain private and secure during processing, using hardware-based security measures like TEE to prevent unauthorized access.',
  },
  {
    question: 'Is Phala compatible with existing AI frameworks?',
    answer:
      'Yes, Phala supports popular AI frameworks like TensorFlow, PyTorch, and Hugging Face, allowing you to run existing models with enhanced security.',
  },
  {
    question: 'What are the performance implications?',
    answer:
      'Our confidential AI platform typically adds only 5-10% overhead compared to standard AI deployments, while providing enterprise-grade security.',
  },
  {
    question: 'How can I verify the security of my AI workloads?',
    answer:
      "Phala provides cryptographic attestations that allow you to verify the integrity of your AI workloads in real-time, ensuring they're running in a genuine secure environment.",
  },
  {
    question: 'How do I get started?',
    answer:
      'Getting started is easy! Sign up for a free account, choose your AI model, and deploy in minutes. Our documentation provides step-by-step guides.',
  },
]

export default function FAQ() {
  return (
    <section className="w-full py-24 max-w-(--breakpoint-xl) mx-auto">
      <div className="container mx-auto">
        <div className="text-center">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold">
            Common Questions & Answers
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-muted-foreground">
            Find out all the essential details about our platform and how it can
            serve your needs.
          </p>
        </div>
        <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-muted font-mono text-xs text-muted-foreground font-semibold">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold font-sans">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
