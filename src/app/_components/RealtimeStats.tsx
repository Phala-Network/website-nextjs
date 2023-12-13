'use client'

import { type ReactNode } from 'react'

import { useComputationStats } from '@/hooks/useComputationStats'
import { cn } from '@/lib/utils'

function Stats({ children, name, icon, className }: { children: ReactNode, icon: string, name: string, className?: string }) {
  return (
    <div className={cn(className, "flex flex-col lg:flex-row gap-4 m-auto")}>
      <div className="drop-shadow bg-white rounded-full w-12 h-12 shrink-0 flex items-center justify-center">
        <img
          className="pointer-events-none"
          src={icon}
          alt={name}
        />
      </div>
      <div>
        <strong className={cn("stats-text-shadow text-lg font-semibold")}>{children}</strong>
        <div className={cn("stats-text-shadow text-sm text-blackAlpha-700")}>{name}</div>
      </div>
    </div>
  )
}

export function RealtimeStats() {
  const { onlineWorkers, vCpu, crossChainTx, tx } = useComputationStats()
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-6 lg:gap-1.5 lg:pb-10"
    >
      <Stats name="Online Workers" icon="/icons/hero-online-worker.svg">
        {onlineWorkers.toLocaleString('en-US')}
      </Stats>
      <Stats name="Compute" icon="/icons/hero-compute.svg">
        {vCpu.toLocaleString('en-US')} vCPU
      </Stats>
      <Stats className="2xl:col-start-5" name="Cross-Chain TX" icon="/icons/hero-cross-chain-tx.svg">
        {crossChainTx.toLocaleString('en-US')}
      </Stats>
      <Stats name="TX" icon="/icons/hero-tx.svg">{tx.toLocaleString('en-US')}</Stats>
    </div>
  )
}
