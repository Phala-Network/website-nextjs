'use client';

import React, { type ReactNode, useState } from 'react'
import { atom, useAtom, useAtomValue } from 'jotai'
import * as R from 'ramda'
import hls from 'highlight.js/lib/core'
import 'highlight.js/styles/github.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { AnimatePresence, motion } from "framer-motion"
import { FiCheck } from 'react-icons/fi'

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
            <button className="relative w-6 h-6">
              <AnimatePresence mode="sync">
                <motion.span
                  key="copy"
                  className="absolute left-0 top-0"
                  initial={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  animate={{ opacity: copied ? 0 : 1, scale: copied ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                >
                  <img
                    src="/icons/copy.svg"
                    className="svg-gray-400 h-5 w-5"
                    alt=""
                  />
                </motion.span>
                <motion.span
                  key="check"
                  className="absolute left-0 top-0"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: copied ? 1 : 0, scale: copied ? 1 : 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <FiCheck className="text-green-500 h-6 w-6" />
                </motion.span>
              </AnimatePresence>
            </button>
          </CopyToClipboard>
          <motion.span
            className="text-xs text-gray-400"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: copied ? 1 : 0, width: copied ? 'auto' : 0 }}
          >
            Copied!
          </motion.span>
        </div>
      </header>
      <main className="py-4 px-0.5">
        <div className={cn("font-mono text-xs whitespace-pre-wrap")} dangerouslySetInnerHTML={{ __html: hls.highlight(trimed, { language: 'rust' }).value }} />
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

