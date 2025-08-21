import { revalidatePath } from 'next/cache'

import { env } from '@/env'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const path = searchParams.get('path')

    // Validate token
    if (!token || token !== env.REVALIDATE_TOKEN) {
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Validate path parameter
    if (!path || typeof path !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Path parameter is required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    // Revalidate the specified path
    revalidatePath(path)

    return new Response(
      JSON.stringify({
        revalidated: true,
        path,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Revalidation error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
