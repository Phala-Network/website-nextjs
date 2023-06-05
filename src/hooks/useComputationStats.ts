import { atom, useAtomValue } from 'jotai'
import * as R from 'ramda'

export interface ComputationStats {
  totalValue: number
  totalNodes: number
}

export const computationStatsAtom = atom<ComputationStats>({
  totalValue: 0,
  totalNodes: 0,
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
  (async function() {
    const resp = await fetch('https://squid.subsquid.io/phala-computation/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
    const json = await resp.json()
    const totalValue = R.pathOr(0, ['data', 'globalStatesConnection', 'edges', '0', 'node', 'totalValue'], json)
    const totalNodes = R.pathOr(0, ['data', 'workersConnection', 'totalCount'], json)
    set({ totalValue: Number(totalValue), totalNodes })
  })();
}

export const useComputationStats = () => useAtomValue(computationStatsAtom)
