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
    question: 'What is a FAQ?',
    answer:
      'A FAQ is a list of frequently asked questions and answers on a particular topic.',
  },
  {
    id: 'faq-2',
    question: 'What is the purpose of a FAQ?',
    answer:
      'The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.',
  },
  {
    id: 'faq-3',
    question: 'How do I create a FAQ?',
    answer:
      'To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.',
  },
  {
    id: 'faq-4',
    question: 'What are the benefits of a FAQ?',
    answer:
      'The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.',
  },
  {
    id: 'faq-5',
    question: 'How should I organize my FAQ?',
    answer:
      'You should organize your FAQ in a logical manner, grouping related questions together and ordering them from most basic to more advanced topics.',
  },
  {
    id: 'faq-6',
    question: 'How long should FAQ answers be?',
    answer:
      'FAQ answers should be concise and to the point, typically a few sentences or a short paragraph is sufficient for most questions.',
  },
  {
    id: 'faq-7',
    question: 'Should I include links in my FAQ?',
    answer:
      'Yes, including links to more detailed information or related resources can be very helpful for users who want to learn more about a particular topic.',
  },
]

const Faq = () => {
  return (
    <section className="py-32">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground lg:text-lg">
            Find answers to common questions about our products. Can't find what
            you're looking for? Contact our support team.
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
