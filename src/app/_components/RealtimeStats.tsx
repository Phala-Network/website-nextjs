'use client'

import { type ReactNode } from 'react'

import { useComputationStats } from '@/hooks/useComputationStats'
import { cn } from '@/lib/utils'

function Stats({ children, name, icon, className }: { children: ReactNode, icon: string, name: string, className?: string }) {
  return (
    <div className={cn(className, "flex flex-col items-center lg:items-start lg:flex-row gap-4 m-auto")}>
      <div className="drop-shadow bg-white rounded-full w-12 h-12 shrink-0 flex items-center justify-center">
        <img
          className="pointer-events-none"
          src={icon}
          alt={name}
        />
      </div>
      <div className="text-center lg:text-left">
        <strong className={cn("stats-text-shadow text-md font-bold text-black-800")}>{children}</strong>
        <div className={cn("stats-text-shadow text-sm text-black-800 font-medium -tracking-tight")}>{name}</div>
      </div>
    </div>
  )
}

export function RealtimeStats() {
  const { onlineWorkers, vCpu, crossChainTx, tx } = useComputationStats()
  return (
    <div
      className={cn(
        "flex flex-col gap-10 lg:flex-row justify-between pb-8",
        // "lg:grid-cols-4 2xl:grid-cols-6 gap-6 lg:gap-1.5 lg:pb-10"
      )}
    >
      <div className="lg:py-4 lg:px-8 lg:bg-whiteAlpha-700 flex lg:flex-row gap-8 lg:gap-14 rounded-xl">
        <Stats name="Online Workers" icon="/icons/hero-online-worker.png">
          {onlineWorkers.toLocaleString('en-US')}
        </Stats>
        <Stats name="Compute" icon="/icons/hero-compute.png">
          {vCpu.toLocaleString('en-US')} vCPU
        </Stats>
      </div>
      <div className="lg:col-start-3 lg:py-4 lg:px-8 lg:bg-whiteAlpha-700 flex lg:flex-row gap-14 rounded-xl">
        <Stats name="Cross-Chain TX" icon="/icons/hero-cross-chain-tx.png">
          {crossChainTx.toLocaleString('en-US')}
        </Stats>
        <Stats name="TX" icon="/icons/hero-tx.png">{tx.toLocaleString('en-US')}</Stats>
      </div>
    </div>
  )
}
