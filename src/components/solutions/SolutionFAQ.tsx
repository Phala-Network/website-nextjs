import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQ[];
}

interface SolutionFAQProps {
  faqs: FAQCategory[];
  title?: string;
}

export function SolutionFAQ({ faqs, title = "Frequently Asked Questions" }: SolutionFAQProps) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-12 text-center">
            {title}
          </h2>
          <div className="space-y-8">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${catIndex}-${faqIndex}`}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
