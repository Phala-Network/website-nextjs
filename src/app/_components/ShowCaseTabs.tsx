'use client';

import React, { type ReactNode } from 'react'
import Image from 'next/image'
import { atom, useAtomValue } from 'jotai'

import { cn } from '@/lib/utils'
import Details from '@/components/Details'

export const activeShowCaseAtom = atom(0)

export function ShowCaseTab({ idx, summary, live, children }: {
  idx: number
  summary: string
  live?: boolean
  children?: ReactNode
}) {
  return (
    <li>
      <Details
        className={cn("blueprint-details", "cursor-pointer")}
        idx={idx}
        theIdxAtom={activeShowCaseAtom}
      >
        <summary>{summary}</summary>
        {children ? (
        <div className="body">
          {children}
        </div>
        ) : null}
      </Details>
    </li>
  )
}

export function ShowCaseTabPanel({ idx, title, src, tags, href, children }: {
  idx: number
  title: string
  src: string
  tags?: string[]
  href?: string
  children: ReactNode
}) {
  const current = useAtomValue(activeShowCaseAtom)
  if (idx !== current) {
    return null
  }
  return (
    <div className={cn("rounded-3xl overflow-hidden bg-white")}>
      <div className={cn("aspect-[946/487] bg-[#cecece] relative")}>
        <img
          src={src}
          alt={title}
        />
      </div>
      <div className={cn("px-12 py-8")}>
        <header className={"flex flex-col gap-2"}>
          <h3 className={cn("text-2xl font-black uppercase")}>{title}</h3>
          {tags && tags.length > 0 ? (
            <ul className={cn("flex flex-row gap-4 flex-wrap")}>
              {tags.map((tag, idx) => (
                <li key={idx} className={cn("text-secondary text-xs uppercase px-6 py-2.5 bg-gray-100 rounded-[6px] whitespace-nowrap")}>{tag}</li>
              ))}
            </ul>
          ) : null}
        </header>
        <main className={cn("mt-6 mb-12 flex flex-col gap-2 text-base text-blackAlpha-700")}>
          {children}
        </main>
        <footer>
          {href ? (
          <a href={href} className={cn("btn bg-secondary text-white uppercase inline-flex flex-row justify-between px-5 py-3 w-[16rem]")}>
            <span className={"text-lg font-bold"}>Try Now</span>
            <img
              src="/icons/right-arrow.svg"
              alt=""
              className={cn("svg-white h-4 w-4")}
            />
          </a>
          ) : null}
        </footer>
      </div>
    </div>
  )
}
