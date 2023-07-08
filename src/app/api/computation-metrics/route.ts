import { getComputationMeta } from "@/lib/computationMeta"
import * as R from 'ramda'

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

// It's ok cache for 5 minutes.
export const revalidate = 300

export async function GET() {
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
  const result = await getComputationMeta()
  return new Response(JSON.stringify({ totalValue: Number(totalValue), totalNodes, ...result }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public,max-age=300,stale-while-revalidate',
    }
  })
}
