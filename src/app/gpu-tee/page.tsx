import type { Metadata } from 'next'

import { CompareFullStackTEE } from '@/components/gpu-tee/compare-full-stack-tee'
import { PerformanceSecurityMerged } from '@/components/gpu-tee/performance-security-merged'
import { makeDescription, makeTitle, productSchema } from '@/lib/seo'
import { Faq14 } from '@/components/shadcn-blocks/faq14'
import { Feature51 } from '@/components/shadcn-blocks/feature51'
import { Feature67 } from '@/components/shadcn-blocks/feature67'
import { Feature76 } from '@/components/shadcn-blocks/feature76'
import { Feature221 } from '@/components/shadcn-blocks/feature221'
import { Gallery16 } from '@/components/shadcn-blocks/gallery16'
import { GpuTeeHero } from '@/components/shadcn-blocks/gpu-tee-hero'

export const metadata: Metadata = {
  title: makeTitle('GPU TEE - Confidential GPU Computing for Private AI'),
  description: makeDescription(
    'Deploy NVIDIA H100, H200, and B200 GPUs with TEE protection. Hardware-secured confidential AI training and inference with Intel TDX + NVIDIA Confidential Computing.',
  ),
  keywords: [
    'GPU TEE',
    'confidential GPU',
    'private GPU computing',
    'NVIDIA H100 TEE',
    'NVIDIA H200 TEE',
    'NVIDIA B200 TEE',
    'confidential AI training',
    'private GPU cloud',
    'secure GPU inference',
    'Intel TDX',
    'NVIDIA Confidential Computing',
  ],
}

export default function GpuTeePage() {
  // SEO: JSON-LD Product Schema
  const productJsonLd = productSchema(
    'GPU TEE - Confidential GPU Computing',
    'Hardware-secured GPU computing with NVIDIA H100/H200/B200 and Intel TDX. Deploy confidential AI training, private inference, and secure GPU workloads with end-to-end TEE protection.',
    'https://phala.network/gpu-tee',
  )

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

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
    </>
  )
}
