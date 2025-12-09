import 'server-only'

/**
 * S3 Storage utilities for uploading and managing images
 *
 * Uses AWS SDK S3 client to interact with S3-compatible storage (e.g. Cloudflare R2)
 * Compatible with both Node.js (Vercel) and Bun runtimes
 */

import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import { env } from '@/env'

interface UploadOptions {
  contentType?: string
}

interface UploadResult {
  success: boolean
  key: string
  url: string
  error?: string
}

/**
 * Create S3 client
 */
function createS3Client() {
  return new S3Client({
    region: 'auto',
    endpoint: env.S3_ENDPOINT,
    credentials: {
      accessKeyId: env.S3_ACCESS_KEY_ID || '',
      secretAccessKey: env.S3_SECRET_ACCESS_KEY || '',
    },
  })
}

/**
 * Generate the public URL for an S3 object
 */
export function getS3PublicUrl(key: string): string {
  const baseUrl = env.NEXT_PUBLIC_S3_PUBLIC_URL
  return `${baseUrl}/${key}`
}

/**
 * Upload an image to S3 from a URL
 */
export async function uploadImageFromUrl(
  sourceUrl: string,
  key: string,
  options: UploadOptions = {},
): Promise<UploadResult> {
  try {
    // Fetch the image
    const response = await fetch(sourceUrl)
    if (!response.ok) {
      return {
        success: false,
        key,
        url: '',
        error: `Failed to fetch image: ${response.status} ${response.statusText}`,
      }
    }

    const contentType =
      options.contentType ||
      response.headers.get('content-type') ||
      'image/jpeg'

    // Get the body as ArrayBuffer
    const body = await response.arrayBuffer()

    // Upload to S3 using AWS SDK
    const client = createS3Client()
    await client.send(
      new PutObjectCommand({
        Bucket: env.S3_BUCKET,
        Key: key,
        Body: Buffer.from(body),
        ContentType: contentType,
      }),
    )

    return {
      success: true,
      key,
      url: getS3PublicUrl(key),
    }
  } catch (error) {
    return {
      success: false,
      key,
      url: '',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Upload raw buffer to S3
 *
 * @param skipIfExists - If true, skip upload if object already exists (avoid duplicate uploads)
 */
export async function uploadBuffer(
  buffer: ArrayBuffer | Buffer | Uint8Array,
  key: string,
  contentType: string,
  options: { skipIfExists?: boolean } = {},
): Promise<UploadResult> {
  try {
    const client = createS3Client()

    // Check if already exists to avoid duplicate uploads from concurrent requests
    if (options.skipIfExists) {
      try {
        await client.send(
          new HeadObjectCommand({
            Bucket: env.S3_BUCKET,
            Key: key,
          }),
        )
        // Object exists, skip upload
        return {
          success: true,
          key,
          url: getS3PublicUrl(key),
        }
      } catch {
        // Object doesn't exist, proceed with upload
      }
    }

    // Convert to Uint8Array for compatibility
    const body = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer)
    await client.send(
      new PutObjectCommand({
        Bucket: env.S3_BUCKET,
        Key: key,
        Body: body,
        ContentType: contentType,
      }),
    )

    return {
      success: true,
      key,
      url: getS3PublicUrl(key),
    }
  } catch (error) {
    return {
      success: false,
      key,
      url: '',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Check if an object exists in S3
 */
export async function checkObjectExists(key: string): Promise<boolean> {
  try {
    const client = createS3Client()
    await client.send(
      new HeadObjectCommand({
        Bucket: env.S3_BUCKET,
        Key: key,
      }),
    )
    return true
  } catch {
    return false
  }
}

/**
 * Delete an object from S3
 */
export async function deleteObject(key: string): Promise<boolean> {
  try {
    const client = createS3Client()
    await client.send(
      new DeleteObjectCommand({
        Bucket: env.S3_BUCKET,
        Key: key,
      }),
    )
    return true
  } catch {
    return false
  }
}

/**
 * Get file size in S3
 */
export async function getObjectSize(key: string): Promise<number | null> {
  try {
    const client = createS3Client()
    const response = await client.send(
      new HeadObjectCommand({
        Bucket: env.S3_BUCKET,
        Key: key,
      }),
    )
    return response.ContentLength ?? null
  } catch {
    return null
  }
}

/**
 * Get object content from S3
 */
export async function getObject(key: string): Promise<Uint8Array | null> {
  try {
    const client = createS3Client()
    const response = await client.send(
      new GetObjectCommand({
        Bucket: env.S3_BUCKET,
        Key: key,
      }),
    )
    if (!response.Body) return null
    return await response.Body.transformToByteArray()
  } catch {
    return null
  }
}

/**
 * Generate a presigned URL for temporary access
 */
export async function presignUrl(
  key: string,
  expiresIn = 3600,
): Promise<string> {
  const client = createS3Client()
  return getSignedUrl(
    client,
    new GetObjectCommand({
      Bucket: env.S3_BUCKET,
      Key: key,
    }),
    { expiresIn },
  )
}
