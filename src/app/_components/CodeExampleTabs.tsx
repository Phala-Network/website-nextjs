'use client';

import React, { type ReactNode } from 'react'
import Image from 'next/image'
import { atom, useAtom, useAtomValue } from 'jotai'
import * as R from 'ramda'

import { cn } from '@/lib/utils'


export const activeCodeExampleAtom = atom(0)

export function CodeExampleTab({ idx, children }: {
  idx: number
  children: ReactNode
}) {
  const [current, setCurrent] = useAtom(activeCodeExampleAtom)
  return (
    <li>
      <button
        className={cn(
          "btn btn-lg border border-solid text-black uppercase text-xs",
          current === idx ? 'bg-primary border-primary' : 'bg-white border-[#CBD5E0]',
        )}
        onClick={() => setCurrent(idx)}
      >
        {children}
      </button>
    </li>
  )
}

export function CodeExampleCodeViewer({ idx, children }: {
  idx: number
  children: string
}) {
  const current = useAtomValue(activeCodeExampleAtom)
  if (idx !== current) {
    return null
  }
  return (
    <div className="code-viewer">
      <header className="flex flex-row justify-between items-center">
        <div className={cn("flex flex-row gap-2.5")}>
          <div className={cn("rounded-full bg-[#D9D9D9] w-4 h-4")} />
          <div className={cn("rounded-full bg-[#D9D9D9] w-4 h-4")} />
          <div className={cn("rounded-full bg-[#D9D9D9] w-4 h-4")} />
        </div>
        <button>
          <Image
            src="/icons/copy.svg"
            width={24}
            height={24}
            alt=""
            className="svg-gray-400"
          />
        </button>
      </header>
      <main className="py-8 px-0.5">
        <pre className={cn("font-mono text-xs whitespace-pre-wrap")}>{R.trim(children)}</pre>
      </main>
    </div>
  )
}

export function CodeExampleDescription({ idx, children }: {
  idx: number
  children: ReactNode
}) {
  const current = useAtomValue(activeCodeExampleAtom)
  if (idx !== current) {
    return null
  }
  return (
    <div
      className={cn(
        "flex flex-col gap-5 h-full justify-center text-blackAlpha-700",
      )}
    >
      {children}
    </div>
  )
}

