import { kv } from '@vercel/kv'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get('address') || ''
  if (!address) {
    throw new Error('Invalid Address')
  }
  const raw = await kv.get(address)
  if (raw) {
    return new Response(JSON.stringify({
      succeed: false,
      error: 'Can only be requested once every 24 hours'
    }), {
      status: 200,
    })
  }
  return new Response(JSON.stringify({
    succeed: true,
  }), {
    status: 200,
  })
}


export async function POST(request: Request) {
  const json = await request.json()
  if (!json.address) {
    throw new Error('Invalid Address')
  }
  await kv.set(json.address, 1, { ex: 86400, nx: true })
  return new Response(JSON.stringify({
    succeed: true,
  }), {
    status: 200,
  })
}
