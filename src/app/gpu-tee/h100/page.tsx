import type { Metadata } from 'next'

import { GpuBenchmark } from '@/components/gpu-tee/gpu-benchmark'
import { H100Configurations } from '@/components/gpu-tee/h100-configurations'
import { H100Hero } from '@/components/gpu-tee/h100-hero'
import { H100MetricsBento } from '@/components/gpu-tee/h100-metrics-bento'
import { H100Pricing } from '@/components/gpu-tee/h100-pricing'
import { Feature13 } from '@/components/shadcn-blocks/feature13'
import { Feature51 } from '@/components/shadcn-blocks/feature51'
import { Feature76 } from '@/components/shadcn-blocks/feature76'
import { Feature107 } from '@/components/shadcn-blocks/feature107'

export const metadata: Metadata = {
  title: 'NVIDIA H100 GPU TEE - Enterprise AI with Full-Stack Security',
  description:
    'Deploy NVIDIA H100 Tensor Core GPUs with Intel TDX + NVIDIA Confidential Computing. 80GB HBM3, proven performance, complete hardware protection.',
}

export default function H100Page() {
  const otherGpuModels = [
    {
      id: 'gpu-h200',
      heading: 'NVIDIA H200',
      label: 'FLAGSHIP GPU',
      description:
        '141GB HBM3e memory with 4.8 TB/s bandwidth. Most powerful GPU available with full TEE protection for enterprise AI workloads.',
      image: '/gpu-h200.png',
      url: '/gpu-tee/h200',
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

      {/* 9. Other GPU Models - Cross-linking */}
      <Feature13 title="Explore Other GPU TEE Models" features={otherGpuModels} />
    </div>
  )
}
