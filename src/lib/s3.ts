import 'server-only'

/**
 * S3 Storage utilities for on-demand image caching
 *
 * Uses AWS SDK S3 client to interact with S3-compatible storage (e.g. Cloudflare R2)
 */

import {
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'

import { env } from '@/env'

interface UploadResult {
  success: boolean
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
        return { success: true }
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

    return { success: true }
  } catch (error) {
    return {
      success: false,
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
