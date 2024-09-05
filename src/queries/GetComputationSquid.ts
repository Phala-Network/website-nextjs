import { getComputationMeta } from '@/lib/computationMeta'
import * as R from 'ramda'

const query = `
  query MyQuery {
    globalStateById(id: "0") {
      workerCount
      totalValue
      idleWorkerCount
    }
    squidStatus {
      height
    }
  }
`

async function fetchComputationSquid (chain: 'phala' | 'khala') {
  return await fetch(`https://subsquid.phala.network/${chain}-computation/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json())
}

export async function getComputationSquid() {
  const [phala, khala, result] = await Promise.all([
    fetchComputationSquid('phala'),
    fetchComputationSquid('khala'),
    getComputationMeta(),
  ])
  const [totalValue, totalNodes] = [phala, khala].reduce(
    ([value, nodes], cur) => {
      value += Number.parseInt(
        R.pathOr('0', ['data', 'globalStateById', 'totalValue'], cur)
      )
      nodes += Number.parseInt(
        R.pathOr('0', ['data', 'globalStateById', 'idleWorkerCount'], cur)
      )
      return [value, nodes]
    },
    [0, 0]
  )
  return { totalValue, totalNodes, ...result }
}
