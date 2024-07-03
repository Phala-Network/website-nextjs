'use client';

import { type ReactNode, useState, useMemo, useEffect } from 'react'
import { type PrimitiveAtom, atom, useAtom } from "jotai"
import { motion } from 'framer-motion'

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

export function AnimatedDetails({
  theIdxAtom,
  idx,
  summary,
  summaryClassName,
  children,
  ...props
}:  Omit<React.HTMLProps<HTMLDetailsElement>, 'summary'> & {
  theIdxAtom?: PrimitiveAtom<number>
  idx: number
  summary: ReactNode
  summaryClassName?: string | ((state: { isClosed: boolean }) => string)
  children: ReactNode
}) {
  const [isClosed, setIsClosed] = useState(false)
  const theAtom = useMemo(() => theIdxAtom || defaultOpenedDetailIdxAtom, [theIdxAtom])
  const [currentIdx, setCurrentIdx] = useAtom(theAtom)
  useEffect(() => {
    if (currentIdx !== idx) {
      setIsClosed(true)
    } else {
      setIsClosed(false)
    }
  }, [currentIdx, setCurrentIdx, idx])
  return (
    <details
      {...props}
      className={cn(props.className, idx === currentIdx ? 'active' : null)}
      open
      onClick={(ev) => {
        ev.preventDefault()
        if ((ev.target as HTMLElement).tagName === 'SUMMARY' && ev.currentTarget.open) {
          setIsClosed(i => !i)
          setCurrentIdx(idx)
        }
      }}
    >
      <summary
        className={typeof summaryClassName === 'function' ? cn(summaryClassName({ isClosed }), isClosed && 'is-closed') : cn(summaryClassName, isClosed ? 'is-closed' : null)}
        onClick={ev => {
          ev.preventDefault()
        }}
      >
        {summary}
      </summary>
      <motion.div
        className={cn("overflow-hidden")}
        initial={{ height: 0, scale: 0.75, opacity: 0.25 }}
        animate={{
          height: isClosed ? 0 : 'auto',
          scale: isClosed ? 0.75 : 1,
          opacity: isClosed ? 0.25 : 1,
        }}
      >
        {children}
      </motion.div>
    </details>
  )
}

