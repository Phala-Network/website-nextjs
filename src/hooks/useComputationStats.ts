import { type ComputationMeta } from '@/lib/computationMeta'
import {atom, useAtomValue} from 'jotai'

export type ComputationStats = ComputationMeta & {
  totalValue: number,
  totalNodes: number,
}

export const computationStatsAtom = atom<ComputationStats>({
  onlineWorkers: 0,
  vCpu: 0,
  crossChainTx: 0,
  tx: BigInt(0),
  totalValue: 0,
  totalNodes: 0,
})

computationStatsAtom.onMount = (set) => {
  ;(async function () {
    const resp = await fetch('/api/computation-metrics')
    const data = await resp.json()
    set({ ...data, tx: BigInt(data.tx), crossChainTx: data.crossChainTx || '0' })
  })()
}

export const useComputationStats = () => useAtomValue(computationStatsAtom)
