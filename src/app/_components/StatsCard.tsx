'use client';

import { type ReactNode } from 'react'
import { useComputationStats } from '@/hooks/useComputationStats'

const formatter = new Intl.NumberFormat('en-US')


function Stats({ children, name }: { children: ReactNode, name: string }) {
  return (
    <div className={"flex flex-col items-center"}>
      <h4 className={"text-lg font-semibold"}>{children}</h4>
      <div className={"text-sm text-blackAlpha-700"}>{name}</div>
    </div>
  )
}

export function StatsCard() {
  const stats = useComputationStats()
  return (
    <div className={"flex flex-row gap-12"}>
      <Stats name="Computers">{formatter.format(stats.totalNodes)}</Stats>
      <Stats name="$PHA">{formatter.format(stats.totalValue)}</Stats>
    </div>
  )
}
