import { revalidatePath, revalidateTag } from 'next/cache'
import { after } from 'next/server'

import { env } from '@/env'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const tag = searchParams.get('tag')
    const path = searchParams.get('path')

    // Validate token
    if (!token || token !== env.REVALIDATE_TOKEN) {
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Either tag or path is required
    if (!tag && !path) {
      return new Response(
        JSON.stringify({ error: 'Either tag or path parameter is required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    // Revalidate by tag (preferred) or path
    if (tag) {
      revalidateTag(tag, { expire: 0 })
    }
    if (path) {
      revalidatePath(path)
      after(() => {
        const url = new URL(path, `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`)
        return fetch(url.toString())
      })
    }

    return new Response(
      JSON.stringify({
        revalidated: true,
        tag: tag || undefined,
        path: path || undefined,
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
