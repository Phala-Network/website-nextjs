'use client'

import { type ReactNode } from 'react'

import { useComputationStats } from '@/hooks/useComputationStats'
import { cn } from '@/lib/utils'
import { Stats } from '@/components/Stats'

export function NodeStats() {
  const { onlineWorkers, vCpu, crossChainTx, tx } = useComputationStats()
  return (
    <a
      href="https://dune.com/phala_network/phala-analytics"
      target="_blank"
      className={cn(
        "text-white",
        "grid grid-cols-2 gap-4 lg:grid-cols-4"
      )}
    >
      <Stats name="Online Workers" icon="/icons/hero-online-worker.png">
        {onlineWorkers.toLocaleString('en-US')}
      </Stats>
      <Stats name="Compute" icon="/icons/hero-compute.png">
        {vCpu.toLocaleString('en-US')} vCPU
      </Stats>
      <Stats name="Cross-Chain TX" icon="/icons/hero-cross-chain-tx.png">
        {crossChainTx.toLocaleString('en-US')}
      </Stats>
      <Stats name="TX" icon="/icons/hero-tx.png">
        {tx.toLocaleString('en-US')}
      </Stats>
    </a>
  )
}
