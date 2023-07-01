import {ComputationMeta, getComputationMeta} from '@/lib/computationMeta'
import {atom, useAtomValue} from 'jotai'

export const computationStatsAtom = atom<ComputationMeta>({
  onlineWorkers: 0,
  vCpu: 0,
  crossChainTx: 0,
  tx: BigInt(0),
})

computationStatsAtom.onMount = (set) => {
  ;(async function () {
    const computationMeta = await getComputationMeta()
    set(computationMeta)
  })()
}

export const useComputationStats = () => useAtomValue(computationStatsAtom)
