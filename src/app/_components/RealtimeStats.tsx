'use client';

import { type ReactNode } from 'react'

import { useComputationStats } from '@/hooks/useComputationStats'
import { cn } from '@/lib/utils'

import Squircle from '@/components/Squircle'

function Stats({ children, name }: { children: ReactNode, name: string }) {
  return (
    <div>
      <strong className={cn("text-[10px] lg:text-lg font-semibold")}>{children}</strong>
      <div className={cn("text-[8px] lg:text-sm text-blackAlpha-700")}>{name}</div>
    </div>
  )
}

export function RealtimeStats() {
  const { onlineWorkers, vCpu, crossChainTx, tx } = useComputationStats()
  return (
    <div className="flex flex-col 3xl:flex-row gap-2 3xl:items-center 3xl:-ml-[5rem] w-full">
      <img
        src="/icons/gear.svg"
        alt=""
        className="svg-black mr-2.5 motion-safe:animate-spin untanglable w-9 h-9 invisible lg:visible lg:ml-6"
      />
      <Squircle
        className="grid grid-cols-4 gap-1.5 lg:gap-4 px-4 pt-0.5 pb-1.5 lg:px-8 lg:py-2.5"
        cornerRadius={32}
        fill="rgba(255, 255, 255, 0.64)"
        shadow={[
          '0px 10px 15px rgba(0, 0, 0, 0.1)',
          '0px 4px 6px rgba(0, 0, 0, 0.05)'
        ]}
      >
        <Stats name="Online Workers">
          {onlineWorkers.toLocaleString('en-US')}
        </Stats>
        <Stats name="Compute">
          {vCpu.toLocaleString('en-US')} vCPU
        </Stats>
        <Stats name="Cross-Chain TX">
          {crossChainTx.toLocaleString('en-US')}
        </Stats>
        <Stats name="TX">{tx.toLocaleString('en-US')}</Stats>
      </Squircle>
    </div>
  )
}
