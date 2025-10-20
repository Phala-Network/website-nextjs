import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Solution {
  title: string
  description: string
  href: string
  imageSrc: string
}

const solutions: Solution[] = [
  {
    title: 'Private AI Data',
    description:
      'Monetize and analyze sensitive data with TEEs and remote attestation—without exposing the raw data',
    href: '/solutions/private-ai-data',
    imageSrc: '/solutions/data/1.png',
  },
  {
    title: 'Private AI Inference',
    description:
      'Run AI models with end-to-end encryption to protect user inputs, outputs, and model IP',
    href: '/solutions/private-ai-inference',
    imageSrc: '/solutions/inference/2.png',
  },
  {
    title: 'Fine-Tuned Models',
    description:
      'Train and deploy custom AI models in secure enclaves while protecting your proprietary data',
    href: '/solutions/fine-tuned-models',
    imageSrc: '/solutions/tune/3.png',
  },
  {
    title: 'Confidential Training',
    description:
      'Train AI models on sensitive data without exposing it, ensuring privacy and compliance',
    href: '/solutions/confidential-training',
    imageSrc: '/solutions/train/4.png',
  },
  {
    title: 'AI Agents',
    description:
      'Build autonomous AI agents with cryptographic privacy guarantees for enterprise workflows',
    href: '/solutions/ai-agents',
    imageSrc: '/solutions/agent/1.png',
  },
]

const SolutionsCTA = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <h2 className="font-display text-center text-3xl font-semibold leading-none sm:text-4xl lg:text-5xl">
          Explore Our Solutions
        </h2>
        <p className="font-display text-center text-muted-foreground leading-6 mt-4 max-w-2xl mx-auto">
          Discover how Phala Network enables privacy-preserving AI across
          different use cases
        </p>

        <div className="mx-auto mt-12 max-w-5xl rounded-lg border bg-background">
          {solutions.map((solution, index) => (
            <div
              key={solution.href}
              className={`${index !== solutions.length - 1 ? 'border-b' : ''}`}
            >
              <Link
                href={solution.href}
                className="flex flex-col p-6 md:flex-row md:items-center md:justify-between lg:p-8 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center flex-1">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full p-2 lg:h-14 lg:w-14">
                    <ArrowRight className="text-primary h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-display text-lg font-semibold leading-6 lg:text-xl">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-5 mt-1 lg:text-base lg:leading-6">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 shrink-0 md:mt-0 md:w-60 md:ml-6">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={solution.imageSrc}
                      alt={solution.title}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsCTA
