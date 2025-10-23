import { Badge } from '@/components/ui/badge'

interface FAQ {
  question: string
  answer: string
}

interface SolutionFAQProps {
  faqs: FAQ[]
  title?: string
  description?: string
}

export function SolutionFAQ({
  faqs,
  title = 'Common Questions & Answers',
  description = 'Find out all the essential details about our platform and how it can serve your needs.',
}: SolutionFAQProps) {
  return (
    <section className="w-full py-24 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="text-center">
          <Badge className="text-xs leading-4 font-medium">FAQ</Badge>
          <h1 className="font-display mt-4 text-3xl leading-none md:text-4xl font-semibold">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-7 md:text-xl font-display font-medium text-muted-foreground">
            {description}
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
