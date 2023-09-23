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
        "grid gap-4 grid-cols-2 lg:grid-cols-20 3xl:grid-cols-24 grid-rows-1",
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-4 lg:gap-0",
          "col-start-1 col-span-full lg:col-span-18 lg:col-start-2 3xl:col-start-4 3xl:col-span-18 row-start-1"
        )}
      >
        <div className="flex flex-col text-center gap-2 2xl:gap-4">
          <h2 className="font-normal leading-tight text-4xl 2xl:text-6xl">Say hello to</h2>
          <h2 className="font-black leading-tight text-4xl 2xl:text-6xl">Phat Contract</h2>
          <div className="flex items-center justify-center mt-4 lg:mt-6">
            <button className="bg-black-800 text-white font-bold text-md py-3 px-7 rounded-full 2xl:px-10 2xl:py-6">Start Phat Contrat</button>
          </div>
        </div>
        <PhatContract />
      </div>
    </section>
  )
}

export default SectionFeatures
