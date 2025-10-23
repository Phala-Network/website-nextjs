import type { Metadata } from 'next'

import { GpuBenchmark } from '@/components/gpu-tee/gpu-benchmark'
import { H200Configurations } from '@/components/gpu-tee/h200-configurations'
import { H200Hero } from '@/components/gpu-tee/h200-hero'
import { H200MetricsBento } from '@/components/gpu-tee/h200-metrics-bento'
import { H200Pricing } from '@/components/gpu-tee/h200-pricing'
import { makeDescription, makeTitle, productSchema } from '@/lib/seo'
import { Feature13 } from '@/components/shadcn-blocks/feature13'
import { Feature51 } from '@/components/shadcn-blocks/feature51'
import { Feature76 } from '@/components/shadcn-blocks/feature76'
import { Feature107 } from '@/components/shadcn-blocks/feature107'

export const metadata: Metadata = {
  title: makeTitle('NVIDIA H200 GPU TEE - Flagship Confidential AI'),
  description: makeDescription(
    'Deploy NVIDIA H200 Tensor Core GPUs with TEE protection. 141GB HBM3e memory, 4.8 TB/s bandwidth, Intel TDX + NVIDIA Confidential Computing. Most powerful confidential AI GPU available.',
  ),
  keywords: [
    'H200 GPU TEE',
    'NVIDIA H200 confidential computing',
    'H200 private AI',
    'H200 secure training',
    'confidential H200',
    'H200 GPU privacy',
    'H200 with TEE',
    'private H200 GPU',
    'H200 Tensor Core TEE',
    'NVIDIA H200 encryption',
  ],
}

export default function H200Page() {
  // SEO: JSON-LD Product Schema
  const productJsonLd = productSchema(
    'NVIDIA H200 GPU TEE',
    'Flagship confidential computing with NVIDIA H200 Tensor Core GPUs. 141GB HBM3e memory, 4.8 TB/s bandwidth, Intel TDX protection, and NVIDIA Confidential Computing for the most demanding private AI workloads.',
    'https://phala.network/gpu-tee/h200',
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
      id: 'gpu-b200',
      heading: 'NVIDIA B200 Blackwell',
      label: 'NEXT-GENERATION',
      description:
        '192GB HBM3e memory with 8 TB/s bandwidth. Up to 15x faster inference with next-gen Blackwell architecture and full TEE security.',
      image: '/gpu-B200.png',
      url: '/gpu-tee/b200',
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
        {/* 1. Hero - H200 Specific */}
        <H200Hero />

      {/* 2. Performance & Specs Bento Grid */}
      <H200MetricsBento />

      {/* 3. Benchmarks - Inference & Training */}
      <GpuBenchmark title="H200 vs B200 / H100" />

      {/* 4. Pricing Section - H200 Specific */}
      <H200Pricing />

      {/* 5. Available Configurations Table */}
      <H200Configurations />

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
