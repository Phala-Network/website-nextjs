import { ArrowUp } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const Stats7 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold md:text-5xl mb-4">
              Performance Benchmarks
            </h2>
            <p className="text-muted-foreground text-lg">
              TEE Protection with Minimal Overhead. Real-world performance
              tested with SP1 zkVM.
            </p>
          </div>
          <div className="rounded-lg border p-6 md:p-10">
            <div className="flex flex-col gap-8">
              <div>
                <div className="mb-2 flex justify-between">
                  <p className="font-medium">TEE Overhead</p>
                  <span className="flex items-center gap-1 font-medium text-green-400">
                    &lt;5% <ArrowUp size={16} />
                  </span>
                </div>
                <Progress value={95} className="h-3" />
                <p className="mt-1 text-sm text-muted-foreground">
                  Near-native performance with complete hardware protection
                </p>
              </div>
              <div>
                <div className="mb-2 flex justify-between">
                  <p className="font-medium">H200 vs H100 Performance</p>
                  <span className="flex items-center gap-1 font-medium text-green-400">
                    2x Faster <ArrowUp size={16} />
                  </span>
                </div>
                <Progress value={100} className="h-3" />
                <p className="mt-1 text-sm text-muted-foreground">
                  Up to 2x faster LLM inference with 141GB HBM3e memory
                </p>
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <p className="font-medium">SP1 zkVM in TEE Environment</p>
                  <span className="flex items-center gap-1 font-medium text-green-400">
                    4-5% Overhead <ArrowUp size={16} />
                  </span>
                </div>
                <Progress value={95} className="h-3" />
                <p className="mt-1 text-sm text-muted-foreground">
                  Verified benchmark generating ZK proofs in GPU TEE
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t">
              <Button asChild variant="outline">
                <Link
                  href="https://phala.network/posts/performance-benchmark-running-sp1-zkvm-in-tee-h200-with-low-overhead"
                  target="_blank"
                >
                  Read Full Benchmark Report →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Stats7 }
