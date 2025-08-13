import posthog from 'posthog-js'

import { env } from '@/env'

if (env.NEXT_PUBLIC_POSTHOG_KEY) {
  // Initialize PostHog client with defaults
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/relay-ph',
    ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2025-05-24',
    capture_exceptions: true, // enable capturing exceptions via Error Tracking
    debug: process.env.NODE_ENV === 'development',
  })
}
