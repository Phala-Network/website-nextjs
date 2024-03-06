'use client';

import { GenericComponent } from '../../types/components'
import { cn } from '@/lib/utils'
import { useSectionTheme } from './Section'

export interface SupportProps extends GenericComponent {
  question: string
}

export function Support({ question, className, children }: SupportProps) {
  const theme = useSectionTheme()
  return (
    <details
      className={cn(
        "d-collapse d-collapse-arrow border transform-gpu transition-all duration-200",
        theme === "dark" ? "text-white" : "text-black-800",
        theme === "dark" ? "bg-whiteAlpha-50" : "bg-white",
        theme === "dark"
          ? "border-whiteAlpha-200 open:border-phalaGreen-500 [&_summary]:open:text-phalaGreen-500"
          : "border-whiteAlpha-200 open:border-phalaPurple-500 [&_summary]:open:text-phalaPurple-500",
        theme === "dark"
          ? "hover:border-phalaGreen-500 hover:[&_summary]:text-phalaGreen-500"
          : "hover:border-phalaPurple-500 hover:[&_summary]:text-phalaPurple-500",
        className,
      )}
    >
      <summary
        className={cn(
          "d-collapse-title text-2xl font-medium",
        )}
      >
        {question}
      </summary>
      <div
        className={cn(
          "d-collapse-content", "text-base leading-7"
        )}
      >
        {children}
      </div>
    </details>
  )
}
