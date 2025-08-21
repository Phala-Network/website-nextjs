import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FaqItem {
  id: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How does Confidential AI ensure my data is truly private?',
    answer:
      'We use Trusted Execution Environments (TEEs) that create cryptographically secure enclaves. Your data is encrypted and processed inside these hardware-protected environments where even we cannot access it. Each computation generates a cryptographic proof that you can verify independently.',
  },
  {
    id: 'faq-2',
    question: 'Is there any performance impact compared to regular AI APIs?',
    answer:
      'Minimal performance impact. Our confidential computing infrastructure is optimized for speed while maintaining the highest security standards.',
  },
  {
    id: 'faq-3',
    question:
      'How difficult is it to integrate Confidential AI into my existing application?',
    answer:
      'Very easy! Simply replace your API endpoint. Zero code changes required. Works with existing SDKs and frameworks.',
  },
  {
    id: 'faq-4',
    question: 'What models are available through Confidential AI?',
    answer:
      'We support all major AI providers including OpenAI, Anthropic, Meta, Google, Mistral, and Alibaba models.',
  },
  {
    id: 'faq-5',
    question: 'How can I verify that my data was actually protected?',
    answer:
      'Every request generates cryptographic proof that you can verify independently. Our Trust Center provides real-time proof generation and audit-ready documentation.',
  },
  {
    id: 'faq-6',
    question: 'What are the pricing differences compared to standard AI APIs?',
    answer:
      'Our pricing matches leading inference providers. Privacy protection comes at no additional cost - we believe security should be accessible to everyone, not a premium feature.',
  },
]

const Faq = () => {
  return (
    <section className="py-32">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            Everything you need to know about Confidential AI
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
