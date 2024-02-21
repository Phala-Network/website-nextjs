'use client'

import { useHydrateAtoms } from 'jotai/utils'

import { cn } from '@/lib/utils'
import { type PhatItem } from '@/lib/phat_lists'
import PhatContract, { phatListAtom } from '@/app/_components/phat-contract'

function SectionFeatures({
  default_list,
}: {
  default_list: PhatItem[][]
}) {
  useHydrateAtoms([[phatListAtom, default_list]])
  return (
    <section
      id="section-features"
      className={cn(
        "safe-viewport",
        "grid grid-cols-2 lg:grid-cols-20 3xl:grid-cols-24 grid-rows-1",
        "border border-solid border-black-100 rounded-3xl pt-20",
      )}
    >
      <div
        className={cn(
          "col-start-1 col-span-full lg:col-span-18 lg:col-start-2 3xl:col-start-4 3xl:col-span-18 row-start-1",
          "flex flex-col"
        )}
      >
        <h2
          className={cn(
            "text-4xl lg:text-5xl font-black text-center",
          )}
        >
          Smart Contracts, Now Smarter
        </h2>
        <div
          className={cn(
            "py-10 flex flex-col gap-10",
            "lg:py-0 lg:block lg:gap-0 lg:aspect-[1285/800] overflow-hidden relative"
          )}
        >
          <h3 className="lg:hidden text-black-300 font-medium text-xl text-center">Read Data</h3>
          <PhatContract />
          <h3 className="lg:hidden text-black-300 font-medium text-xl text-center">Verify & Use</h3>
        </div>
      </div>
    </section>
  )
}

export default SectionFeatures
