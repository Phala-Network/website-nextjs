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
        "safe-viewport",
        "grid gap-4 grid-cols-2 lg:grid-cols-20 3xl:grid-cols-24 grid-rows-1",
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-4 lg:gap-0",
          "col-start-1 col-span-full lg:col-span-18 lg:col-start-2 3xl:col-start-4 3xl:col-span-18 row-start-1"
        )}
      >
        <PhatContract />
      </div>
    </section>
  )
}

export default SectionFeatures
