import { vercel } from '@t3-oss/env-core/presets-zod'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production']).optional(),
    NOTION_TOKEN: z.string(),
    NOTION_POSTS_DATABASE_ID: z.string(),
    NOTION_LEARN_DATABASE_ID: z.string(),

    IMGPROXY_URL: z.string().optional(),
    VERCEL_PROJECT_PRODUCTION_URL: z.string().default('phala.network'),

    // S3-compatible Storage (e.g. Cloudflare R2)
    S3_ENDPOINT: z.string().optional(),
    S3_ACCESS_KEY_ID: z.string().optional(),
    S3_SECRET_ACCESS_KEY: z.string().optional(),
    S3_BUCKET: z.string().optional(),

    CUSTOMERIO_SITE_ID: z.string().optional(),
    CUSTOMERIO_API_KEY: z.string().optional(),
    CUSTOMERIO_FORM_ID: z.string().optional(),

    DISCORD_PUBLIC_KEY: z.string().optional(),
    DISCORD_TOKEN: z.string().optional(),
    DISCORD_APP_ID: z.string().optional(),

    VERCEL_WEBHOOK_SECRET: z.string().optional(),
    VERCEL_PROJECT_ID: z.string().optional(),

    REVALIDATE_TOKEN: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().optional(),
    NEXT_PUBLIC_S3_PUBLIC_URL: z.string(),
    // Image mode: 'direct' (S3 URLs) or 'proxy' (on-demand caching)
    NEXT_PUBLIC_IMAGE_MODE: z.enum(['direct', 'proxy']).default('proxy'),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_S3_PUBLIC_URL: process.env.NEXT_PUBLIC_S3_PUBLIC_URL,
    NEXT_PUBLIC_IMAGE_MODE: process.env.NEXT_PUBLIC_IMAGE_MODE,
  },
  extends: [vercel()],
})
