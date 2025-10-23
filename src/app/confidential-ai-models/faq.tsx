import { Badge } from '@/components/ui/badge'

const faqs = [
  {
    question: 'How does Confidential AI ensure my data is truly private?',
    answer:
      'We use Trusted Execution Environments (TEEs) that create cryptographically secure enclaves. Your data is encrypted and processed inside these hardware-protected environments where even we cannot access it. Each computation generates a cryptographic proof that you can verify independently.',
  },
  {
    question: 'Is there any performance impact compared to regular AI APIs?',
    answer:
      'Minimal performance impact. Our confidential computing infrastructure is optimized for speed while maintaining the highest security standards.',
  },
  {
    question:
      'How difficult is it to integrate Confidential AI into my existing application?',
    answer:
      'Very easy! Simply replace your API endpoint. Zero code changes required. Works with existing SDKs and frameworks.',
  },
  {
    question: 'What models are available through Confidential AI?',
    answer:
      'We support all major AI providers including OpenAI, Anthropic, Meta, Google, Mistral, and Alibaba models.',
  },
  {
    question: 'How can I verify that my data was actually protected?',
    answer:
      'Every request generates cryptographic proof that you can verify independently. Our Trust Center provides real-time proof generation and audit-ready documentation.',
  },
  {
    question: 'What are the pricing differences compared to standard AI APIs?',
    answer:
      'Our pricing matches leading inference providers. Privacy protection comes at no additional cost - we believe security should be accessible to everyone, not a premium feature.',
  },
]

export default function Faq() {
  return (
    <section className="w-full py-24 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="text-center">
          <Badge className="text-xs leading-4 font-medium">FAQ</Badge>
          <h2 className="font-display mt-4 font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
            Common Questions & Answers
          </h2>
          <p className="mt-4 text-lg leading-7 md:text-xl font-display font-medium text-muted-foreground">
            Everything you need to know about Confidential AI
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
