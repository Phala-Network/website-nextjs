'use client'

import { useHydrateAtoms } from 'jotai/utils'

import { cn } from '@/lib/utils'
import { type PhatItem } from '@/lib/phat_list'
import PhatContract, { phatListAtom } from '@/app/_components/phat-contract'

function SectionFeatures({ list }: { list: PhatItem[][] }) {
  useHydrateAtoms([[phatListAtom, list]])
  return (
    <section
      id="section-features"
      className={cn(
        "safe-viewport pt-12 lg:pt-32",
        "flex flex-col gap-4 lg:gap-0",
        "items-center"
      )}
    >
      <div className="flex flex-col text-center">
        <h2 className="font-normal leading-tight text-4xl lg:text-6xl">Say hello to</h2>
        <h2 className="font-black leading-tight text-4xl lg:text-6xl">Phat Contract</h2>
        <div>
          <button className="mt-8 bg-black-800 text-white font-bold text-md py-3 px-7 rounded-full">Start Phat Contrat</button>
        </div>
      </div>
      <PhatContract />
    </section>
  )
}

export default SectionFeatures
