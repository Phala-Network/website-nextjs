'use client';

import React, { type ReactNode } from 'react'
import { atom, useAtom, useAtomValue } from 'jotai'

import { cn } from '@/lib/utils'

export const activeAreaOfInterestAtom = atom(0)

export type AreaOfInterestTabProps = { idx: number, className: string, children: ReactNode }

export function AreaOfInterestTab({ idx, className, children }: AreaOfInterestTabProps) {
  const [current, setCurrent] = useAtom(activeAreaOfInterestAtom)
  return (
    <button
      className={cn(
        "rounded-4xl p-6 w-full aspect-square transition-all border border-solid border-transparent hover:border-[#CDFA50]",
        current === idx ? 'active bg-[#CDFA50] text-black' : 'bg-blackAlpha-800',
        "flex flex-row text-left leading-7",
        className
      )}
      onClick={() => setCurrent(idx)}
    >
      {children}
    </button>
  )
}

export function AreaOfInterestTabPanel({ idx, title, children }: {
  idx: number
  title: string
  children: ReactNode
}) {
  const current = useAtomValue(activeAreaOfInterestAtom)
  return (
    <details open={idx === current}>
      <summary className="list-none" />
      <div className={cn("flex flex-col justify-between")}>
        <h4 className={cn("text-2xl font-black uppercase")}>{title}</h4>
        <div className={cn("flex flex-col gap-2.5 leading-normal text-base py-5 xl:py-10")}>{children}</div>
      </div>
    </details>
  )
}
