import {ComputationMeta, getComputationMeta} from '@/lib/computationMeta'
import {atom, useAtomValue} from 'jotai'
import * as R from 'ramda'

export interface ComputationStats extends ComputationMeta {
  totalValue: number
  totalNodes: number
}

export const computationStatsAtom = atom<ComputationStats>({
  totalValue: 0,
  totalNodes: 0,
  onlineWorkers: 0,
  vCpu: 0,
  crossChainTx: 0,
  tx: BigInt(0),
})

const query = `
  query MyQuery {
    globalStatesConnection(orderBy: id_ASC) {
      edges {
        node {
          height
          totalValue
        }
      }
    }
    workersConnection(orderBy: id_ASC, where: {session: {state_eq: WorkerIdle}}) {
      totalCount
    }
  }
`

computationStatsAtom.onMount = (set) => {
  ;(async function () {
    const [json, computationMeta] = await Promise.all([
      fetch('https://squid.subsquid.io/phala-computation/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({query}),
      }).then((res) => res.json()),
      getComputationMeta(),
    ])
    const totalValue = R.pathOr(
      0,
      ['data', 'globalStatesConnection', 'edges', '0', 'node', 'totalValue'],
      json
    )
    const totalNodes = R.pathOr(
      0,
      ['data', 'workersConnection', 'totalCount'],
      json
    )

    set({
      totalValue: Number(totalValue),
      totalNodes,
      ...computationMeta,
    })
  })()
}

export const useComputationStats = () => useAtomValue(computationStatsAtom)
