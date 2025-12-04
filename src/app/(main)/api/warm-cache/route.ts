import { after } from 'next/server'
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

async function fetchRecentPostPaths(limit: number): Promise<string[]> {
  try {
    const posts = await getRecentPosts(limit)
    return posts.map((post) => `/posts/${post.slug}`)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

async function fetchAllTagPaths(): Promise<string[]> {
  try {
    const tags = await retrieveTags()
    return tags.map((tag) => `/tags/${tag}`)
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}

function sha1(data: Buffer, secret: string): string {
  return crypto.createHmac('sha1', secret).update(data).digest('hex')
}

async function warmUpUrls(
  baseUrl: string,
  paths: string[],
): Promise<{ successful: number; failed: number }> {
  const urls = paths.map((path) => new URL(path, baseUrl).toString())

  const results = await Promise.allSettled(
    urls.map((url) =>
      fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'ISR-Warmup-Bot/1.0',
        },
        signal: AbortSignal.timeout(30000),
      }),
    ),
  )

  let successful = 0
  let failed = 0

  results.forEach((result) => {
    if (result.status === 'fulfilled' && result.value.ok) {
      successful++
    } else {
      failed++
    }
  })

  return { successful, failed }
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

  if (
    json.type !== 'deployment.promoted' ||
    json.payload.project.id !== VERCEL_PROJECT_ID
  ) {
    return new Response('Skipping')
  }

  // Run warm-up asynchronously after response
  after(async () => {
    console.log('Starting ISR warm-up for production deployment')
    try {
      const baseUrl = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`

      // Get all paths to warm up
      const [postPaths, tagPaths] = await Promise.all([
        fetchRecentPostPaths(50),
        fetchAllTagPaths(),
      ])

      console.log(
        `Warming up ${postPaths.length} posts, ${tagPaths.length} tags, and 1 blog page`,
      )

      // Warm up all URLs in parallel
      const [blogResult, postResults, tagResults] = await Promise.allSettled([
        warmUpUrls(baseUrl, ['/blog']),
        warmUpUrls(baseUrl, postPaths),
        warmUpUrls(baseUrl, tagPaths),
      ])

      const summary = {
        blog: {
          successful:
            blogResult.status === 'fulfilled' ? blogResult.value.successful : 0,
          failed:
            blogResult.status === 'fulfilled' ? blogResult.value.failed : 1,
        },
        posts: {
          total: postPaths.length,
          successful:
            postResults.status === 'fulfilled'
              ? postResults.value.successful
              : 0,
          failed:
            postResults.status === 'fulfilled'
              ? postResults.value.failed
              : postPaths.length,
        },
        tags: {
          total: tagPaths.length,
          successful:
            tagResults.status === 'fulfilled' ? tagResults.value.successful : 0,
          failed:
            tagResults.status === 'fulfilled'
              ? tagResults.value.failed
              : tagPaths.length,
        },
      }

      console.log('ISR warm-up completed:', summary)
    } catch (error) {
      console.error('Error during ISR warm-up:', error)
    }
  })

  return Response.json({ message: 'Webhook received, warm-up started' })
}
