'use client'

import { useComputationStats } from '@/hooks/useComputationStats'

const formatter = new Intl.NumberFormat('en-US')

export function Stats() {
  const stats = useComputationStats()
  return (
    <main className="col-span-6 md:col-start-4 row-start-2 flex flex-row justify-center">
      <div className="w-[49%] lg:w-300 text-center p-2 lg:px-6 lg:py-4 spacing-y-2">
        <h4 className="text-[14px] font-bold">TEE Nodes Online</h4>
        <div className="text-[40px] font-bold tracking-tight">
          {formatter.format(stats.totalNodes)}
        </div>
      </div>
      <div className="w-px h-full bg-black-150" />
      <div className="w-[49%] lg:w-300 text-center p-2 lg:px-6 lg:py-4 spacing-y-2">
        <h4 className="text-[14px] font-bold">Secured Value</h4>
        <div className="text-[40px] font-bold tracking-tight">
          {formatter.format(stats.totalValue)}
        </div>
        <p className="text-[14px] text-black-900">
          In PHA-backed cryptographic computation
        </p>
      </div>
    </main>
  )
}
