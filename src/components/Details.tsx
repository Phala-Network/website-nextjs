'use client';

import type { ReactNode } from "react"

import { atom, useAtom } from "jotai"

import { cn } from '@/lib/utils'

const openedDetailIdxAtom = atom(0)

export default function Detail({
  idx,
  children,
  ...props
}: {
  idx: number
  children: ReactNode
} & React.HTMLProps<HTMLDetailsElement>) {
  const [currentIdx, setCurrentIdx] = useAtom(openedDetailIdxAtom)
  return (
    <details
      {...props}
      className={cn(props.className, idx === currentIdx ? 'active' : null)}
      open={idx === currentIdx}
      onClick={(ev) => {
        ev.preventDefault()
        setCurrentIdx(idx)
      }}
    >
      {children}
    </details>
  )
}

