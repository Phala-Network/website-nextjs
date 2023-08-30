import React, { type ReactNode } from 'react'
import Link, { type LinkProps } from 'next/link'

export default function TagLink({
  children,
  ...props
}: LinkProps & { children: ReactNode }) {
  return (
    <Link
      className="text-xs text-black-800 bg-green-500 rounded-md px-3 py-1 transition-all hover:bg-green-600"
      {...props}
    >
      {children}
    </Link>
  )
}
