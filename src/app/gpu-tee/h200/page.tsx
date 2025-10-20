import type { Metadata } from 'next'

import { GpuBenchmark } from '@/components/gpu-tee/gpu-benchmark'
import { H200Configurations } from '@/components/gpu-tee/h200-configurations'
import { H200Hero } from '@/components/gpu-tee/h200-hero'
import { H200MetricsBento } from '@/components/gpu-tee/h200-metrics-bento'
import { H200Pricing } from '@/components/gpu-tee/h200-pricing'
import { Feature51 } from '@/components/shadcn-blocks/feature51'
import { Feature76 } from '@/components/shadcn-blocks/feature76'
import { Feature107 } from '@/components/shadcn-blocks/feature107'

export const metadata: Metadata = {
  title: 'NVIDIA H200 GPU TEE - Most Powerful GPU with Full-Stack Security',
  description:
    'Immediate access to NVIDIA H200 GPUs with Intel TDX + NVIDIA Confidential Computing. 141GB HBM3e memory, 4.8 TB/s bandwidth, complete hardware protection.',
}

export default function H200Page() {
  return (
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
    </div>
  )
}
