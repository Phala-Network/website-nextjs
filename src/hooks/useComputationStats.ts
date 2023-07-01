import { type ComputationMeta } from '@/lib/computationMeta'
import {atom, useAtomValue} from 'jotai'

export const computationStatsAtom = atom<ComputationMeta>({
  onlineWorkers: 0,
  vCpu: 0,
  crossChainTx: 0,
  tx: BigInt(0),
})

computationStatsAtom.onMount = (set) => {
  ;(async function () {
    const resp = await fetch('/api/computation-metrics')
    const data = await resp.json()
    set({ ...data, tx: BigInt(data.tx) })
  })()
}

export const useComputationStats = () => useAtomValue(computationStatsAtom)
