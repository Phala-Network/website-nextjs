import { BadgeCheck } from 'lucide-react'
import type React from 'react'

import { CardStack } from '@/components/aceternity/card-stack'
import { cn } from '@/lib/utils'

interface Card {
  id: number
  name: string
  designation: string
  content: React.ReactNode
}

interface Feature280Props {
  title?: string
  subtitle?: string
  features?: string[]
  cards?: Card[]
}

const Feature280 = ({
  title = 'What our Users say Proudly',
  subtitle = 'FEATURES',
  features = [
    'Instant Implementation',
    'One-Time Payment',
    'Developer Friendly',
    'Fully Responsive',
    'Production Ready',
    'Premium Support',
    'Regular Updates',
    'Customizable Design',
    'Performance Optimized',
    'Accessibility Compliant',
    'Cross-Browser ',
    'Documentation Included',
  ],
  cards = CARDS,
}: Feature280Props) => {
  return (
    <section className="h-full w-screen overflow-hidden py-32">
      <div className="container flex w-full max-w-6xl flex-col items-center justify-between lg:flex-row">
        <div className="gap-15 relative flex h-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="w-full max-w-md text-5xl font-medium font-semibold tracking-tighter lg:text-6xl">
            {title}
          </h1>

          <div className="flex w-full max-w-lg items-center gap-4 px-5">
            <span className="bg-muted-foreground/20 h-px w-full" />
            <p className="text-muted-foreground/50 text-sm">{subtitle}</p>
            <span className="bg-muted-foreground/20 h-px w-full" />
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2 lg:items-center">
                <BadgeCheck className="text-muted-foreground/80 size-4" />
                <p className="text-muted-foreground/80 tracking-tight">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-24 flex items-center justify-center lg:mt-0">
          <CardStack items={cards} />
        </div>
      </div>
    </section>
  )
}

export { Feature280 }

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span
      className={cn(
        'bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500',
        className,
      )}
    >
      {children}
    </span>
  )
}

const CARDS = [
  {
    id: 0,
    name: 'Anna Kazlauskas',
    designation: 'Founder of Vana',
    content: (
      <p>
        A well-designed system (like Vana) uses both crypto consensus where you
        don't trust hardware, and{' '}
        <Highlight>TEEs for privacy-specific applications</Highlight>
      </p>
    ),
  },
  {
    id: 1,
    name: 'Felix Meng',
    designation: 'Founder of Xtrace',
    content: (
      <p>
        Phala made it possible for us to build an AI retrieval engine that never
        exposes what it sees. Our users trust Xtrace because{' '}
        <Highlight>
          their private data stays encrypted, even while the model is thinking.
        </Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: 'Conan',
    designation: 'Founder of Rena Labs',
    content: (
      <p>
        I'm totally TEE pilled. From OpenAI to Apple, both top-down and
        bottom-up,{' '}
        <Highlight>
          the focus has shifted to making TEE tech actually usable and easy to
          integrate
        </Highlight>
      </p>
    ),
  },
]
