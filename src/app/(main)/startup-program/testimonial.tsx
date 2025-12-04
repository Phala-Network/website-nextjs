import type { ReactNode } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

import { cn } from '@/lib/utils'

interface TestimonialProps {
  children: ReactNode
  className?: string
}

export function Testimonial({ children, className = '' }: TestimonialProps) {
  return (
    <blockquote className={cn('relative my-4 mx-6', className)}>
      <FaQuoteLeft className="absolute -left-6 -top-2 text-xl text-zinc-300" />
      <FaQuoteRight className="absolute -bottom-2 -right-4 text-xl text-zinc-300" />
      <p className="text-lg font-medium text-zinc-600 relative hyphens-auto mx-0.5">
        {children}
      </p>
    </blockquote>
  )
}
