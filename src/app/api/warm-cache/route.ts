import { revalidatePath } from 'next/cache'
import crypto from 'node:crypto'

import { env } from '@/env'
import { getRecentPosts, retrieveTags } from '@/lib/post'

interface VercelWebhookPayload {
  type: string
  payload: {
    project: {
      id: string
    }
  }
}

async function fetchRecentPostSlugs(limit = 200): Promise<string[]> {
  try {
    const posts = await getRecentPosts(limit)
    return posts.map((post) => `/posts${post.slug}`)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

async function fetchAllTagSlugs(): Promise<string[]> {
  try {
    const tags = await retrieveTags()
    return tags.map((tag) => `/tags/${encodeURIComponent(tag)}`)
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}

function sha1(data: Buffer, secret: string): string {
  return crypto.createHmac('sha1', secret).update(data).digest('hex')
}

export async function POST(request: Request) {
  const { VERCEL_WEBHOOK_SECRET, VERCEL_PROJECT_ID } = env

  if (!VERCEL_WEBHOOK_SECRET || !VERCEL_PROJECT_ID) {
    throw new Error('Not configured')
  }

  const rawBody = await request.text()
  const rawBodyBuffer = Buffer.from(rawBody, 'utf-8')
  const bodySignature = sha1(rawBodyBuffer, VERCEL_WEBHOOK_SECRET)

  if (bodySignature !== request.headers.get('x-vercel-signature')) {
    return Response.json({
      code: 'invalid_signature',
      error: "signature didn't match",
    })
  }

  const json: VercelWebhookPayload = JSON.parse(rawBodyBuffer.toString('utf-8'))

  // Only process deployment success events for production
  if (
    json.type !== 'deployment.promoted' ||
    json.payload.project.id !== VERCEL_PROJECT_ID
  ) {
    return new Response('Skipping')
  }

  console.log('Starting ISR revalidation for production deployment')

  try {
    // Revalidate blog page
    revalidatePath('/blog')

    // Fetch and revalidate recent posts
    const postSlugs = await fetchRecentPostSlugs(200)
    for (const slug of postSlugs) {
      revalidatePath(slug)
    }

    // Fetch and revalidate all tag pages
    const tagSlugs = await fetchAllTagSlugs()
    for (const slug of tagSlugs) {
      revalidatePath(slug)
    }

    const summary = {
      blog: 'revalidated',
      posts: {
        total: postSlugs.length,
        revalidated: postSlugs.length,
      },
      tags: {
        total: tagSlugs.length,
        revalidated: tagSlugs.length,
      },
    }

    console.log('ISR revalidation completed:', summary)

    return Response.json('Webhook received')
  } catch (error) {
    console.error('Error during ISR revalidation:', error)
    return Response.json(
      { error: 'Internal server error during revalidation' },
      { status: 500 },
    )
  }
}
