'use client';

import { createContext, useContext } from 'react'
import { cn } from '@/lib/utils'
import { type GenericComponent } from '../../types/components'

export interface SectionProps extends GenericComponent {
  theme?: 'light' | 'dark'
}

export interface SectionHeaderProps extends GenericComponent {
  id?: string
}

export const sectionContext = createContext('section-context')

export function useSectionTheme() {
  return useContext(sectionContext)
}

export function Section({ theme, className, children }: SectionProps) {
  theme = theme || 'light'
  return (
    <sectionContext.Provider value={theme}>
      <section className={cn('py-8 lg:py-20 rounded', theme === 'dark' ? 'bg-black-900' : 'bg-black-50', className)}>
        <div className="mx-auto px-6 lg:px-8">
          {children}
        </div>
      </section>
    </sectionContext.Provider>
  )
}

export function SectionHeader({ id, className, children }: SectionHeaderProps) {
  const theme = useSectionTheme()
  return (
    <div className="mx-auto lg:text-center">
      <h2
        id={id}
        className={cn(
          "text-24 lg:text-40 font-black max-w-4xl mx-auto",
          theme === 'dark' ? 'text-white' : 'text-black-800',
          className,
        )}
      >
        {children}
      </h2>
    </div>
  )
}

export function SectionSubHeader({ className, children }: GenericComponent) {
  const theme = useSectionTheme()
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl lg:text-center mt-4",
        theme === 'dark' ? 'text-whiteAlpha-800' : 'text-black-600',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function SectionBody({ className, children }: GenericComponent) {
  return (
    <div className={cn("mx-auto mt-8 lg:mt-16 max-w-6xl", className)}>
      {children}
    </div>
  )
}

export function SectionActions({ className, children }: GenericComponent) {
  return (
    <div className={cn("mt-10 flex flex-col lg:flex-row items-center justify-center gap-y-2.5 gap-x-6", className)}>
      {children}
    </div>
  )
}
