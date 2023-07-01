import { getComputationMeta } from "@/lib/computationMeta"

export async function GET() {
  const result = await getComputationMeta()
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
