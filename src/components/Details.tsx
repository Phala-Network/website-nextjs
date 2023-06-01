'use client';

import type { ReactNode } from "react"
import type { PrimitiveAtom } from "jotai"

import { useMemo } from 'react'
import { atom, useAtom } from "jotai"

import { cn } from '@/lib/utils'

const defaultOpenedDetailIdxAtom = atom(0)

export default function Details({
  theIdxAtom,
  idx,
  children,
  ...props
}: {
  theIdxAtom?: PrimitiveAtom<number>
  idx: number
  children: ReactNode
} & React.HTMLProps<HTMLDetailsElement>) {
  const theAtom = useMemo(() => theIdxAtom || defaultOpenedDetailIdxAtom, [theIdxAtom])
  const [currentIdx, setCurrentIdx] = useAtom(theAtom)
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

