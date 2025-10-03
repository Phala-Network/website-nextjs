import type { Metadata } from 'next'

import { B200Configurations } from '@/components/gpu-tee/b200-configurations'
import { B200Hero } from '@/components/gpu-tee/b200-hero'
import { B200MetricsBento } from '@/components/gpu-tee/b200-metrics-bento'
import { B200Pricing } from '@/components/gpu-tee/b200-pricing'
import { GpuBenchmark } from '@/components/gpu-tee/gpu-benchmark'
import { Feature51 } from '@/components/shadcn-blocks/feature51'
import { Feature76 } from '@/components/shadcn-blocks/feature76'
import { Feature107 } from '@/components/shadcn-blocks/feature107'

export const metadata: Metadata = {
  title: 'NVIDIA B200 Blackwell GPU TEE - Next-Gen AI with Full-Stack Security',
  description:
    'Deploy NVIDIA B200 Blackwell GPUs with Intel TDX + NVIDIA Confidential Computing. 192GB HBM3e memory, 8 TB/s bandwidth, up to 15x faster inference.',
}

export default function B200Page() {
  return (
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
    </div>
  )
}
