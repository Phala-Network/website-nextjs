'use client'

import { cn } from '@/lib/utils'
import type { GenericComponent } from '../../types/components'
import { useSectionTheme } from './Section'

export interface SimpleCardProps extends GenericComponent {
  label?: string
  title: string
  maxTitleLines?: number
}

export function SimpleCard({
  label,
  title,
  className,
  maxTitleLines,
  children,
}: SimpleCardProps) {
  const theme = useSectionTheme()
  return (
    <div
      className={cn(
        'flex flex-col gap-2.4 lg:gap-4 p-6 lg:p-8 border rounded',
        theme === 'light'
          ? 'border-blackAlpha-200 bg-white'
          : 'border-whiteAlpha-200 bg-whiteAlpha-50',
        className,
      )}
    >
      <dt>
        {label ? (
          <span className="font-bold text-black-800 bg-phalaGreen-500 py-1 px-5 rounded-xs">
            {label}
          </span>
        ) : null}
        <h4
          className={cn(
            'text-[20px] lg:text-[24px] font-bold tracking-tight text-balance',
            label && 'mt-4',
            maxTitleLines &&
              `h-[${maxTitleLines}lh] max-h-[${maxTitleLines}lh] overflow-hidden`,
            theme === 'light' ? 'text-black-800' : 'text-white',
          )}
          style={
            maxTitleLines
              ? {
                  height: `${maxTitleLines}lh`,
                  maxHeight: `${maxTitleLines}lh`,
                }
              : undefined
          }
        >
          {title}
        </h4>
      </dt>
      <dd
        className={cn(
          'mt-1 flex flex-auto flex-col text-sm lg:text-base leading-7 text-balance',
          theme === 'light' ? 'text-black-600' : 'text-gray-300',
        )}
      >
        {children}
      </dd>
    </div>
  )
}
