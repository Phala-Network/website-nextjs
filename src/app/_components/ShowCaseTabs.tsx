'use client';

import React, { type ReactNode } from 'react'
import { atom, useAtomValue } from 'jotai'

import { cn } from '@/lib/utils'
import Details from '@/components/Details'
import Squircle from '@/components/Squircle'

export const activeShowCaseAtom = atom(0)

export function ShowCaseTab({ idx, summary, live, children }: {
  idx: number
  summary: string
  live?: boolean
  children?: ReactNode
}) {
  const isActive = useAtomValue(activeShowCaseAtom) === idx
  return (
    <li>
      <Squircle cornerRadius={24} fill={isActive ? "#CDFA50" : "#526420"}>
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
      </Squircle>
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
    <div>
      <div className={cn("aspect-[946/487] bg-[#cecece] relative rounded-3xl overflow-hidden")}>
        <img
          src={src}
          alt={title}
        />
      </div>
      <div className={cn("px-12 py-8")}>
        <header className={"flex flex-col gap-2"}>
          <h3 className={cn("text-2xl font-black text-white uppercase")}>{title}</h3>
          {tags && tags.length > 0 ? (
            <ul className={cn("flex flex-row gap-4 flex-wrap")}>
              {tags.map((tag, idx) => (
                <li key={idx} className={cn("text-xs uppercase px-4 py-2.5 rounded-[18px] whitespace-nowrap bg-phat-700 text-phat-500")}>
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </header>
        <main className={cn("mt-6 mb-12 flex flex-col gap-2 text-sm text-whiteAlpha-700")}>
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
