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

const fetchComputationSquid = (chain: 'phala' | 'khala') => {
  return fetch(`https://subsquid.phala.network/${chain}-computation/graphql`, {
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

// It's ok cache for 5 minutes.
export const revalidate = 300

export async function GET() {
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
  return new Response(JSON.stringify({ totalValue, totalNodes, ...result }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public,max-age=300,stale-while-revalidate',
    },
  })
}
