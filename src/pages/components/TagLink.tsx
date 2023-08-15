import React, { AnchorHTMLAttributes } from 'react'

export default function TagLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="text-xs text-black-800 bg-green-500 rounded-md px-3 py-1"
      {...props}
    >
      {children}
    </a>
  )
}
