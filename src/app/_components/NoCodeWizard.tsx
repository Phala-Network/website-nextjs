'use client';

import React, { type ReactNode } from 'react'
import { atom, useAtom, useAtomValue } from 'jotai'

import { cn } from '@/lib/utils'
import Details from '@/components/Details'


export const noCodeWizardStepAtom = atom(0)

export function NoCodeWizardStepTrigger({ idx, children }: { idx: number, children: ReactNode }) {
  const [current, setCurrent] = useAtom(noCodeWizardStepAtom)
  return (
    <button
      className={cn(
        "btn btn-lg w-full text-left border border-blackAlpha-100 border-solid",
        current === idx ? 'btn-primary font-medium' : 'btn-secondary font-light',
      )}
      onClick={() => setCurrent(idx)}
    >
      {children}
    </button>
  )
}

export function NoCodeWizardStepDetails({ idx, summary, children }: { idx: number, summary: string, children: ReactNode }) {
  const current = useAtomValue(noCodeWizardStepAtom)
  return (
    <Details
      theIdxAtom={noCodeWizardStepAtom}
      idx={idx}
      className={cn(current === idx ? 'block' : 'hidden')}
    >
      <summary className="sr-only">{summary}</summary>
      <h4 className="text-3xl font-black mb-5">{summary}</h4>
      <div className="text-sm text-blackAlpha-700 leading-relaxed">
        {children}
      </div>
    </Details>
  )
}

export function NoCodeWizardStepPreview({ idx, alt = '', src }: { idx: number, alt?: string, src: string }) {
  const current = useAtomValue(noCodeWizardStepAtom)
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "pointer-events-none select-none bg-gray-100",
        current === idx ? 'block' : 'hidden',
      )}
    />
  )
}
