import { vercel } from '@t3-oss/env-core/presets-zod'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production']).optional(),
    NOTION_TOKEN: z.string(),
    NOTION_POSTS_DATABASE_ID: z.string(),
    VERCEL_PROJECT_PRODUCTION_URL: z.string().default('phala.network'),
  },
  client: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
    NEXT_PUBLIC_GTM_ID: z.string().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  },
  extends: [vercel()],
})
