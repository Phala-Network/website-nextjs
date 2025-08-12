import Link, { type LinkProps } from 'next/link'
import type { ReactNode } from 'react'

import { Badge } from '@/components/ui/badge'

export default function TagLink({
  children,
  ...props
}: LinkProps & { children: ReactNode; className?: string }) {
  return (
    <Badge asChild className="bg-primary-300">
      <Link {...props}>{children}</Link>
    </Badge>
  )
}
