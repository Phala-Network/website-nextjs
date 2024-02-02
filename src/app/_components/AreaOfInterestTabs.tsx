'use client';

import React, { type ReactNode } from 'react'
import { atom, useAtom, useAtomValue } from 'jotai'
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md"

import { cn } from '@/lib/utils'

export const activeAreaOfInterestAtom = atom(0)

export type AreaOfInterestTabProps = { idx: number, className: string, children: ReactNode }

export function AreaOfInterestTab({ idx, className, children }: AreaOfInterestTabProps) {
  const [current, setCurrent] = useAtom(activeAreaOfInterestAtom)
  return (
    <button
      className={cn(
        "rounded-sm p-5 w-full aspect-square transition-all",
        "border-2 border-solid border-transparent hover:border-phalaPurple-500",
        current === idx ? 'active bg-phalaPurple-500 text-white' : 'bg-white text-black-800',
        "flex flex-row text-left",
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
  const [current, setCurrentIdx] = useAtom(activeAreaOfInterestAtom)
  return (
    <details
      open={idx === current}
      className={cn(idx === current && 'lg:h-full')}
      onClick={(ev) => {
        ev.preventDefault()
        setCurrentIdx(idx)
      }}
    >
      <summary
        className="list-none lg:hidden"
        onClick={ev => {
          ev.preventDefault()
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <h4 className={cn("text-20 font-bold px-1.5 py-2")}>{title}</h4>
          {idx === current ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
        </div>
      </summary>
      <div className={cn("flex flex-col lg:gap-10", "bg-white rounded-sm p-5 lg:p-10", "lg:h-full")}>
        <h4 className={cn("text-32 font-bold invisible h-0 lg:visible lg:h-auto")}>{title}</h4>
        <div className={cn("flex flex-col gap-5", "leading-normal text-16")}>{children}</div>
      </div>
    </details>
  )
}
