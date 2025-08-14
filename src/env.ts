import { vercel } from '@t3-oss/env-core/presets-zod'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production']).optional(),
    NOTION_TOKEN: z.string(),
    NOTION_POSTS_DATABASE_ID: z.string(),
    NOTION_BACKEND_PREFIX: z.string(),

    SUBSCAN_API_KEY: z.string().optional(),

    IMGPROXY_URL: z.string().optional(),
    VERCEL_PROJECT_PRODUCTION_URL: z.string().default('phala.network'),

    MAILERLITE_API_KEY: z.string().optional(),
    MAILERLITE_GROUP_NEWSLETTER: z.string().optional(),

    DISCORD_PUBLIC_KEY: z.string().optional(),
    DISCORD_TOKEN: z.string().optional(),
    DISCORD_APP_ID: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
    NEXT_PUBLIC_GTM_ID: z.string().optional(),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  },
  extends: [vercel()],
})
