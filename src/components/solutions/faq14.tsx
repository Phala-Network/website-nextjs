import { Badge } from '@/components/ui/badge'

interface FaqItem {
  question: string
  answer: string
}

interface FaqCategory {
  category: string
  items: FaqItem[]
}

interface Faq14Props {
  title?: string
  subtitle?: string
  faqItems?: FaqCategory[]
}

const DEFAULT_FAQ_ITEMS: FaqCategory[] = [
  {
    category: 'SUPPORT',
    items: [
      {
        question: 'Is there a free version?',
        answer:
          'Yes! We offer a generous free plan with just enough features except that one feature you really want! Our strategy is to get your credit card details on file then steadily double our prices against inflation rates.',
      },
      {
        question: 'How do I update my account without breaking my laptop?',
        answer:
          'Our platform is designed with safety in mind. You can update your account settings through our intuitive dashboard without any risk to your hardware. We have multiple safeguards in place to prevent any system conflicts.',
      },
      {
        question: 'Is support free, or do I need to Google everything?',
        answer:
          "We provide comprehensive support at no additional cost. Our dedicated support team is available 24/7 to help you with any questions or issues you might encounter. No need to rely on Google - we're here to help!",
      },
      {
        question: 'Are you going to be subsumed by AI?',
        answer:
          'While we embrace AI technology to enhance our services, we maintain a strong human element in our operations. Our team works alongside AI to provide the best possible service while ensuring human oversight and decision-making remain central to our operations.',
      },
    ],
  },
  {
    category: 'YOUR ACCOUNT',
    items: [
      {
        question: 'Is support free, or do I need to Google everything?',
        answer:
          "We provide comprehensive support at no additional cost. Our dedicated support team is available 24/7 to help you with any questions or issues you might encounter. No need to rely on Google - we're here to help!",
      },
      {
        question: 'Are you going to be subsumed by AI?',
        answer:
          'While we embrace AI technology to enhance our services, we maintain a strong human element in our operations. Our team works alongside AI to provide the best possible service while ensuring human oversight and decision-making remain central to our operations.',
      },
    ],
  },
  {
    category: 'OTHER QUESTIONS',
    items: [
      {
        question: 'Is support free, or do I need to Google everything?',
        answer:
          "We provide comprehensive support at no additional cost. Our dedicated support team is available 24/7 to help you with any questions or issues you might encounter. No need to rely on Google - we're here to help!",
      },
      {
        question: 'Are you going to be subsumed by AI?',
        answer:
          'While we embrace AI technology to enhance our services, we maintain a strong human element in our operations. Our team works alongside AI to provide the best possible service while ensuring human oversight and decision-making remain central to our operations.',
      },
    ],
  },
]

export function Faq14({
  title = 'Common Questions & Answers',
  subtitle = 'Find out all the essential details about our platform and how it can serve your needs.',
  faqItems = DEFAULT_FAQ_ITEMS,
}: Faq14Props) {
  // Flatten all FAQ items from all categories into a single array
  const allFaqs = faqItems.flatMap((category) => category.items)

  return (
    <section className="w-full py-24 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="text-center">
          <Badge className="text-xs leading-4 font-medium">FAQ</Badge>
          <h1 className="font-display mt-4 text-3xl leading-none md:text-4xl font-semibold">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-7 md:text-xl font-display font-medium text-muted-foreground">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {allFaqs.map((faq, index) => (
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
