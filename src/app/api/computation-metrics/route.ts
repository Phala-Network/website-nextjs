import { getComputationMeta } from "@/lib/computationMeta"
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

// It's ok cache for 5 minutes.
export const revalidate = 300

export async function GET() {
  const [json, result] = await Promise.all([
    fetch('https://subsquid.phala.network/phala-computation/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query}),
      next: {
        revalidate: 0,
      }
    }).then((res) => res.json()),
    getComputationMeta(),
  ])
  const totalValue = R.pathOr(
    0,
    ['data', 'globalStateById', 'totalValue'],
    json
  )
  const totalNodes = R.pathOr(
    0,
    ['data', 'globalStateById', 'idleWorkerCount'],
    json
  )
  return new Response(JSON.stringify({ totalValue: Number(totalValue), totalNodes, ...result }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public,max-age=300,stale-while-revalidate',
    }
  })
}
