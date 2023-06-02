'use client';

import React, { type ReactNode, useState } from 'react'
import Image from 'next/image'
import { atom, useAtom, useAtomValue } from 'jotai'
import * as R from 'ramda'
import hls from 'highlight.js/lib/core'
import 'highlight.js/styles/github.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { cn } from '@/lib/utils'

// FIXME maybe we can move this part to server-side.
hls.registerLanguage('rust', require('highlight.js/lib/languages/rust'))

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
          "btn btn-lg border border-solid text-black uppercase text-xs whitespace-nowrap",
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
  const trimed = R.trim(children)
  const [copied, setCopied] = useState(false)
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
        <div className="flex flex-row gap-1 items-center">
          <CopyToClipboard
            text={trimed}
            onCopy={() => {
              setCopied(true)
              setTimeout(() => setCopied(false), 2500)
            }}
          >
            <button>
              <Image
                src="/icons/copy.svg"
                width={20}
                height={20}
                alt=""
                className="svg-gray-400"
              />
            </button>
          </CopyToClipboard>
          {copied ? (<span className="text-xs text-gray-400">Copied!</span>) : null}
        </div>
      </header>
      <main className="py-4 px-0.5">
        <div className={cn("font-mono text-xs whitespace-pre-wrap")} dangerouslySetInnerHTML={{ __html: hls.highlight(children, { language: 'rust' }).value }} />
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

