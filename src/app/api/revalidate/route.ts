import { revalidatePath } from 'next/cache'

export async function POST(req: Request) {
  const json = await req.json()
  const { slug } = json
  revalidatePath(slug)
  return new Response(JSON.stringify({
    revalidated: true,
    now: Date.now()
  }), {
    status: 200,
  })
}
