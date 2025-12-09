import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { checkObjectExists, getObject, uploadBuffer } from '@/lib/s3'

/**
 * On-demand Notion media proxy with S3 caching
 *
 * URL format: /api/image/notion/{type}/{id}.{ext}
 * - /api/image/notion/covers/{pageId}.jpg (cover images)
 * - /api/image/notion/files/{blockId}.{ext} (block images/videos)
 *
 * Flow:
 * 1. Check if media exists in S3
 * 2. If exists, return from S3
 * 3. If not, fetch from Notion, upload to S3, return
 *
 * Supported formats:
 * - Images: jpg, jpeg, png, gif, webp, svg
 * - Videos: mp4, webm, mov
 */

// Cache for 1 year (immutable content-addressed storage)
const CACHE_CONTROL = 'public, max-age=31536000, immutable'

// Supported media types
const CONTENT_TYPES: Record<string, string> = {
  // Images
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  webp: 'image/webp',
  svg: 'image/svg+xml',
  // Videos
  mp4: 'video/mp4',
  webm: 'video/webm',
  mov: 'video/quicktime',
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params

  // Parse path: ["covers", "abc123.jpg"] or ["files", "block123.png"]
  if (path.length !== 2) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
  }

  const [type, filename] = path
  if (type !== 'covers' && type !== 'files') {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  // Parse filename
  const lastDot = filename.lastIndexOf('.')
  if (lastDot === -1) {
    return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
  }

  const id = filename.substring(0, lastDot)
  const ext = filename.substring(lastDot + 1).toLowerCase()
  const contentType = CONTENT_TYPES[ext]

  if (!contentType) {
    return NextResponse.json(
      { error: 'Unsupported media type' },
      { status: 400 },
    )
  }

  const s3Key = `${type}/${id}.${ext}`

  try {
    // Check if already in S3
    const exists = await checkObjectExists(s3Key)

    if (exists) {
      // Fetch from S3 and return
      const buffer = await getObject(s3Key)
      if (buffer) {
        return new NextResponse(buffer as unknown as BodyInit, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': CACHE_CONTROL,
          },
        })
      }
    }

    // Not in S3 - need to fetch from Notion
    // For covers: fetch page and get cover URL
    // For files: fetch block and get file URL
    const notionUrl = await getNotionImageUrl(type, id)

    if (!notionUrl) {
      return NextResponse.json({ error: 'Media not found' }, { status: 404 })
    }

    // Fetch from Notion
    const response = await fetch(notionUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      console.error(`Failed to fetch from Notion: ${response.status}`)
      return NextResponse.json(
        { error: 'Failed to fetch media' },
        { status: 502 },
      )
    }

    const buffer = await response.arrayBuffer()

    // Upload to S3 in background (don't wait)
    // Use skipIfExists to avoid duplicate uploads from concurrent requests
    uploadBuffer(buffer, s3Key, contentType, { skipIfExists: true }).catch(
      (err) => {
        console.error(`Failed to upload to S3: ${err}`)
      },
    )

    // Return the image
    return new NextResponse(new Uint8Array(buffer) as unknown as BodyInit, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': CACHE_CONTROL,
      },
    })
  } catch (error) {
    console.error('Image proxy error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}

/**
 * Get fresh Notion image URL by fetching the page/block
 */
async function getNotionImageUrl(
  type: 'covers' | 'files',
  id: string,
): Promise<string | null> {
  const { createNotionClient } = await import('@/lib/notion-client')
  const client = createNotionClient(['image-proxy'])

  try {
    if (type === 'covers') {
      // Fetch page to get cover URL
      // ID format: pageId without dashes
      const pageId = formatNotionId(id)
      const page = await client.pages.retrieve({ page_id: pageId })

      if (!('cover' in page) || !page.cover) {
        return null
      }

      if (page.cover.type === 'external') {
        return page.cover.external.url
      }
      if (page.cover.type === 'file') {
        return page.cover.file.url
      }
    } else {
      // Fetch block to get file URL
      const blockId = formatNotionId(id)
      const block = await client.blocks.retrieve({ block_id: blockId })

      if (!('type' in block)) {
        return null
      }

      if (block.type === 'image') {
        if (block.image.type === 'external') {
          return block.image.external.url
        }
        if (block.image.type === 'file') {
          return block.image.file.url
        }
      }

      if (block.type === 'video') {
        if (block.video.type === 'external') {
          return block.video.external.url
        }
        if (block.video.type === 'file') {
          return block.video.file.url
        }
      }
    }
  } catch (error) {
    console.error(`Failed to fetch from Notion: ${error}`)
  }

  return null
}

/**
 * Format ID to Notion UUID format (with dashes)
 */
function formatNotionId(id: string): string {
  // If already has dashes, return as-is
  if (id.includes('-')) {
    return id
  }

  // Insert dashes: 8-4-4-4-12
  if (id.length === 32) {
    return `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20)}`
  }

  return id
}
