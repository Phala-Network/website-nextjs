import type { Metadata } from 'next'

import { GpuBenchmark } from '@/components/gpu-tee/gpu-benchmark'
import { H100Configurations } from '@/components/gpu-tee/h100-configurations'
import { H100Hero } from '@/components/gpu-tee/h100-hero'
import { H100MetricsBento } from '@/components/gpu-tee/h100-metrics-bento'
import { H100Pricing } from '@/components/gpu-tee/h100-pricing'
import { Feature51 } from '@/components/shadcn-blocks/feature51'
import { Feature76 } from '@/components/shadcn-blocks/feature76'
import { Feature107 } from '@/components/shadcn-blocks/feature107'

export const metadata: Metadata = {
  title: 'NVIDIA H100 GPU TEE - Enterprise AI with Full-Stack Security',
  description:
    'Deploy NVIDIA H100 Tensor Core GPUs with Intel TDX + NVIDIA Confidential Computing. 80GB HBM3, proven performance, complete hardware protection.',
}

export default function H100Page() {
  return (
    <div className="w-full bg-background">
      {/* 1. Hero - H100 Specific */}
      <H100Hero />

      {/* 2. Performance & Specs Bento Grid */}
      <H100MetricsBento />

      {/* 3. Benchmarks - Inference & Training */}
      <GpuBenchmark title="H100 vs H200" />

      {/* 4. Pricing Section - H100 Specific */}
      <H100Pricing />

      {/* 5. Available Configurations Table */}
      <H100Configurations />

      {/* 6. Full-Stack TEE Features */}
      <Feature107 />

      {/* 7. Use Cases Section (shared with GPU TEE page) */}
      <Feature76 />

      {/* 8. Deployment Options (shared with GPU TEE page) */}
      <Feature51 />
    </div>
  )
}
