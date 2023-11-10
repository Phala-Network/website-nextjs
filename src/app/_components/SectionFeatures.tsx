'use client'

import { useHydrateAtoms } from 'jotai/utils'

import { cn } from '@/lib/utils'
import { type PhatItem } from '@/lib/phat_lists'
import PhatContract, { phatListStoreAtom } from '@/app/_components/phat-contract'

function SectionFeatures({
  default_list,
  connect_list,
  programmable_list,
  verifiable_list,
}: {
  default_list: PhatItem[][]
  connect_list: PhatItem[][]
  programmable_list: PhatItem[][]
  verifiable_list: PhatItem[][]
}) {
  useHydrateAtoms([[phatListStoreAtom, {
    'default': default_list,
    'connect': connect_list,
    'programmable': programmable_list,
    'verifiable': verifiable_list,
  }]])
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
          <h2 className="font-normal leading-tight text-4xl 2xl:text-6xl flex flex-col">
            <span className="font-normal">Say hello to</span>
            <span className="font-black">Phat Contract</span>
          </h2>
          <div className="flex items-center justify-center mt-4 lg:mt-6">
            <a target="_blank" href="https://bricks.phala.network/">
              <button className="bg-black-800 text-white font-bold text-md py-3 px-7 rounded-full 2xl:px-10 2xl:py-6">Start Phat Contract</button>
            </a>
          </div>
        </div>
        <PhatContract />
      </div>
    </section>
  )
}

export default SectionFeatures
