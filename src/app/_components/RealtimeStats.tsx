'use client'

import { type ReactNode } from 'react'

import { useComputationStats } from '@/hooks/useComputationStats'
import { cn } from '@/lib/utils'
import { Stats } from '@/components/Stats'

export function RealtimeStats() {
  const { onlineWorkers, vCpu, crossChainTx, tx } = useComputationStats()
  return (
    <div
      className={cn(
        "flex flex-col gap-10 lg:flex-row justify-between pb-8",
        "text-black-800"
      )}
    >
      <div className="lg:py-4 lg:px-8 lg:bg-whiteAlpha-700 flex lg:flex-row gap-8 lg:gap-14 items-start rounded-xl">
        <Stats name="Online Workers" icon="/icons/hero-online-worker.png">
          {onlineWorkers.toLocaleString('en-US')}
        </Stats>
        <Stats name="Compute" icon="/icons/hero-compute.png">
          {vCpu.toLocaleString('en-US')} vCPU
        </Stats>
      </div>
      <div className="lg:col-start-3 lg:py-4 lg:px-8 lg:bg-whiteAlpha-700 flex lg:flex-row gap-14 items-start rounded-xl">
        <Stats name="Cross-Chain TX" icon="/icons/hero-cross-chain-tx.png">
          {crossChainTx.toLocaleString('en-US')}
        </Stats>
        <Stats name="TX" icon="/icons/hero-tx.png">{tx.toLocaleString('en-US')}</Stats>
      </div>
    </div>
  )
}
