'use client'

import { useHydrateAtoms } from 'jotai/utils'

import { cn } from '@/lib/utils'
import { type PhatItem } from '@/lib/phat_list'
import PhatContract, { phatListAtom } from '@/app/_components/phat-contract'

function SectionFeatures({ list }: { list: PhatItem[][] }) {
  useHydrateAtoms([[phatListAtom, list]])
  return (
    <div className={cn(
      "safe-viewport min-h-screen py-16",
      "flex flex-col",
      "items-center"
    )}>
      <div className="flex flex-col text-center">
        <h2 className="font-normal leading-tight text-4xl lg:text-6xl">Say hello to</h2>
        <h2 className="font-black leading-tight text-4xl lg:text-6xl">Phat Contract</h2>
        <div>
          <button className="mt-8 bg-black-800 text-white font-bold text-md py-3 px-7 rounded-full">Start Phat Contrat</button>
        </div>
      </div>
      <PhatContract />
    </div>
  )
}

export default SectionFeatures
