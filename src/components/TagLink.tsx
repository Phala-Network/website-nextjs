import Link, { type LinkProps } from 'next/link'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export default function TagLink({
  children,
  ...props
}: LinkProps & { children: ReactNode; className?: string }) {
  return (
    <Link
      {...props}
      className={cn(
        'text-xs text-black-800 bg-primary-500 rounded-md px-3 py-1 transition-all hover:bg-primary-600',
        props.className,
      )}
    >
      {children}
    </Link>
  )
}
