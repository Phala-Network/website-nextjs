import type { Metadata } from 'next'

import { CompareFullStackTEE } from '@/components/gpu-tee/compare-full-stack-tee'
import { PerformanceSecurityMerged } from '@/components/gpu-tee/performance-security-merged'
import { Faq14 } from '@/components/shadcn-blocks/faq14'
import { Feature51 } from '@/components/shadcn-blocks/feature51'
import { Feature67 } from '@/components/shadcn-blocks/feature67'
import { Feature76 } from '@/components/shadcn-blocks/feature76'
import { Feature221 } from '@/components/shadcn-blocks/feature221'
import { Gallery16 } from '@/components/shadcn-blocks/gallery16'
import { GpuTeeHero } from '@/components/shadcn-blocks/gpu-tee-hero'

export const metadata: Metadata = {
  title: 'GPU TEE - Most Powerful AI GPUs. Most Secure Platform.',
  description:
    'Deploy B200/H200/H100 with complete hardware protection. The only cloud combining Intel TDX + NVIDIA Confidential Computing for end-to-end security.',
  keywords:
    'GPU TEE, NVIDIA B200, NVIDIA H200, NVIDIA H100, Blackwell, Intel TDX, Confidential Computing, Private AI, ZK Proofs, FHE, Secure GPU',
}

export default function GpuTeePage() {
  return (
    <div className="w-full bg-background">
      {/* 1. Hero - Immediate Impact + Clear Differentiation */}
      <GpuTeeHero />

      {/* 2. GPU Configurations - Show Hardware + Pricing */}
      <Feature221 />

      {/* 3. Comparison - Establish Competitive Superiority */}
      <CompareFullStackTEE />

      {/* 4. Use Cases - Help Visitors See Themselves Using Product */}
      <Feature76 />

      {/* 5. Deployment Models - Show Flexibility */}
      <Feature51 />

      {/* 6. What is GPU TEE - Technical Architecture */}
      <Feature67 />

      {/* 7. Performance & Security - Combined Benchmarks */}
      <PerformanceSecurityMerged />

      {/* 8. GPU Carousel - Visual Showcase */}
      <Gallery16 />

      {/* 9. FAQ - Handle Objections */}
      <Faq14 />
    </div>
  )
}
