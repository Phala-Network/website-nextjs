import { PostHog } from 'posthog-node'

import { env } from '@/env'

export default function PostHogClient() {
  if (!env.NEXT_PUBLIC_POSTHOG_KEY) {
    return null
  }
  const posthogClient = new PostHog(env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  })
  return posthogClient
}
