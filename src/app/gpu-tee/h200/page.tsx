import type { Metadata } from 'next'

import { GpuBenchmark } from '@/components/gpu-tee/gpu-benchmark'
import { H200Configurations } from '@/components/gpu-tee/h200-configurations'
import { H200Hero } from '@/components/gpu-tee/h200-hero'
import { H200MetricsBento } from '@/components/gpu-tee/h200-metrics-bento'
import { H200Pricing } from '@/components/gpu-tee/h200-pricing'
import { Feature13 } from '@/components/shadcn-blocks/feature13'
import { Feature51 } from '@/components/shadcn-blocks/feature51'
import { Feature76 } from '@/components/shadcn-blocks/feature76'
import { Feature107 } from '@/components/shadcn-blocks/feature107'

export const metadata: Metadata = {
  title: 'NVIDIA H200 GPU TEE - Most Powerful GPU with Full-Stack Security',
  description:
    'Immediate access to NVIDIA H200 GPUs with Intel TDX + NVIDIA Confidential Computing. 141GB HBM3e memory, 4.8 TB/s bandwidth, complete hardware protection.',
}

export default function H200Page() {
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
  )
}
