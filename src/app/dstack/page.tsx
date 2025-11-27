import type { Metadata } from 'next'

import { getGitHubStars } from '@/lib/github-stars'
import { makeDescription } from '@/lib/seo'
import { DstackClient } from './dstack-client'

export const revalidate = 3600 // Cache for 1 hour

// Keywords from CSV row 8: TEE open source, confidential VM, open source private cloud, TDX sdk, TDX docker
export const metadata: Metadata = {
  title: 'dstack - Open Source Confidential Computing',
  description: makeDescription(
    'Deploy secure applications with hardware-guaranteed privacy using TEE technology. Built for confidential AI, private cloud compute, and secure data processing.',
  ),
  keywords: [
    'TEE open source',
    'confidential VM',
    'open source private cloud',
    'TDX sdk',
    'TDX docker',
  ],
}

export default async function DstackPage() {
  const starCount = await getGitHubStars()

  return <DstackClient starCount={starCount} />
}
