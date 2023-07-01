import { getComputationMeta } from "@/lib/computationMeta"

// It's ok cache for 5 minutes.
export const revalidate = 300

export async function GET() {
  const result = await getComputationMeta()
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public,max-age=300,stale-while-revalidate',
    }
  })
}
