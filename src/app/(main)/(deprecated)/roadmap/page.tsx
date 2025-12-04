import type { Metadata } from 'next'

import Roadmap from '@/components/roadmap'
import { env } from '@/env'

export const metadata: Metadata = {
  title: 'Roadmap',
  alternates: {
    canonical: `https://${env.VERCEL_PROJECT_PRODUCTION_URL}/roadmap`,
  },
}

export default function Page() {
  return <Roadmap />
}
