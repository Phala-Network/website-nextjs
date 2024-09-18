import { getComputationData } from '@/queries/GetComputationData'

// It's ok cache for 5 minutes.
export const revalidate = 300

export async function GET() {
  const data = await getComputationData()
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public,max-age=300,stale-while-revalidate',
    },
  })
}
