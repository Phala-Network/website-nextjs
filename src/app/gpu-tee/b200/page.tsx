import type { Metadata } from 'next'

import { B200Configurations } from '@/components/gpu-tee/b200-configurations'
import { B200Hero } from '@/components/gpu-tee/b200-hero'
import { B200MetricsBento } from '@/components/gpu-tee/b200-metrics-bento'
import { B200Pricing } from '@/components/gpu-tee/b200-pricing'
import { GpuBenchmark } from '@/components/gpu-tee/gpu-benchmark'
import { makeDescription, makeTitle, productSchema } from '@/lib/seo'
import { Feature13 } from '@/components/shadcn-blocks/feature13'
import { Feature51 } from '@/components/shadcn-blocks/feature51'
import { Feature76 } from '@/components/shadcn-blocks/feature76'
import { Feature107 } from '@/components/shadcn-blocks/feature107'

export const metadata: Metadata = {
  title: makeTitle('NVIDIA B200 Blackwell GPU TEE - Next-Gen AI'),
  description: makeDescription(
    'Deploy NVIDIA B200 Blackwell GPUs with TEE protection. 192GB HBM3e memory, 8 TB/s bandwidth, 15x faster inference. Next-generation confidential AI with Intel TDX + NVIDIA Confidential Computing.',
  ),
  keywords: [
    'blackwell on prem',
    'NVIDIA GPU TEE',
    'blackwell private AI',
    'Blackwell TEE',
    'confidential blackwell',
  ],
}

export default function B200Page() {
  // SEO: JSON-LD Product Schema
  const productJsonLd = productSchema(
    'NVIDIA B200 Blackwell GPU TEE',
    'Next-generation confidential computing with NVIDIA B200 Blackwell GPUs. 192GB HBM3e memory, 8 TB/s bandwidth, up to 15x faster inference with Intel TDX protection and NVIDIA Confidential Computing.',
    'https://phala.com/gpu-tee/b200',
  )

  const otherGpuModels = [
    {
      id: 'gpu-h100',
      heading: 'NVIDIA H100',
      label: 'ENTERPRISE PROVEN',
      description:
        '80GB HBM3 memory with proven performance. Enterprise-grade AI workloads with full TEE protection and widespread adoption.',
      image: '/gpu-h100.png',
      url: '/gpu-tee/h100',
    },
    {
      id: 'gpu-h200',
      heading: 'NVIDIA H200',
      label: 'FLAGSHIP GPU',
      description:
        '141GB HBM3e memory with 4.8 TB/s bandwidth. Most powerful GPU available with full TEE protection for enterprise AI workloads.',
      image: '/gpu-h200.png',
      url: '/gpu-tee/h200',
    },
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="w-full bg-background">
        {/* 1. Hero - B200 Specific */}
        <B200Hero />

      {/* 2. Performance & Specs Bento Grid */}
      <B200MetricsBento />

      {/* 3. Benchmarks - Inference & Training */}
      <GpuBenchmark title="B200 vs H200" />

      {/* 4. Pricing Section - B200 Specific */}
      <B200Pricing />

      {/* 5. Available Configurations Table */}
      <B200Configurations />

      {/* 6. Full-Stack TEE Features */}
      <Feature107 />

      {/* 7. Use Cases Section (shared with GPU TEE page) */}
      <Feature76 />

      {/* 8. Deployment Options (shared with GPU TEE page) */}
      <Feature51 />

        {/* 9. Other GPU Models - Cross-linking */}
        <Feature13 title="Explore Other GPU TEE Models" features={otherGpuModels} />
      </div>
    </>
  )
}
