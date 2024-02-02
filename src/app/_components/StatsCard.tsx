'use client';

import { type ReactNode } from 'react'
import { useComputationStats } from '@/hooks/useComputationStats'

const formatter = new Intl.NumberFormat('en-US')

function Stats({ children, name }: { children: ReactNode, name: string }) {
  return (
    <div className={"stats flex flex-col items-center"}>
      <h4 className={"text-24 font-bold"}>{children}</h4>
      <div>{name}</div>
    </div>
  )
}

export function StatsCard() {
  const stats = useComputationStats()
  return (
    <div className={"flex flex-row gap-6 sm:gap-12 justify-around w-full"}>
      <Stats name="Computers">{formatter.format(stats.totalNodes)}</Stats>
      <Stats name="$PHA">{formatter.format(stats.totalValue)}</Stats>
    </div>
  )
}
