import { Building, Sparkles, Terminal } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Feature51 = () => {
  return (
    <section className="py-24">
      <div className="container max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold leading-none md:text-5xl mb-4 text-foreground">
            Three Ways to Deploy GPU TEE
          </h2>
          <p className="text-muted-foreground font-display text-lg leading-7 max-w-3xl mx-auto">
            Choose the deployment model that fits your needs—from full control
            to instant deployment
          </p>
        </div>
        <Tabs defaultValue="cvm-gpu">
          <TabsList className="flex h-auto w-full flex-col gap-2 bg-background md:flex-row">
            <TabsTrigger
              value="cvm-gpu"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 lg:size-12">
                  <Terminal className="size-5 text-foreground lg:size-6" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl text-foreground">
                  CVM + GPU
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                Full control with SSH access. Deploy your own Docker containers
                and custom models.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="confidential-models"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 lg:size-12">
                  <Sparkles className="size-5 text-foreground lg:size-6" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl text-foreground">
                  Confidential AI Models
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                Instant deployment with pre-configured templates.
                OpenAI-compatible API.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="enterprise"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 lg:size-12">
                  <Building className="size-5 text-foreground lg:size-6" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl text-foreground">
                  Enterprise Solutions
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                White-glove service with dedicated clusters and custom SLAs.
              </p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cvm-gpu" className="mt-8">
            <div className="rounded-lg border bg-card p-8">
              <h3 className="text-2xl font-bold mb-4">
                CVM + GPU: Maximum Flexibility
              </h3>
              <p className="text-muted-foreground mb-6">
                Deploy your own Docker containers with SSH access to
                TEE-protected GPUs. Perfect for developers who need complete
                control.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    Deploy custom Docker containers with full SSH access
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    Fine-tune models on private data with complete hardware
                    protection
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    Intel TDX + NVIDIA Confidential Computing protection
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    Dual attestation reports (Intel + NVIDIA) for verification
                  </span>
                </li>
              </ul>
              <Button asChild>
                <Link href="https://cloud.phala.network/dashboard/gpu-tee">
                  Deploy CVM Now
                </Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="confidential-models" className="mt-8">
            <div className="rounded-lg border bg-card p-8">
              <h3 className="text-2xl font-bold mb-4">
                Confidential AI Models: Fast Time-to-Market
              </h3>
              <p className="text-muted-foreground mb-6">
                Pre-configured model templates with one-click deployment.
                OpenAI-compatible API for easy integration.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Pre-configured templates for popular AI models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>One-click deployment with automatic scaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>OpenAI-compatible API for drop-in replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Built-in Full-Stack TEE protection</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="https://cloud.phala.network/dashboard/confidential-ai-models">
                  Browse Models
                </Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="enterprise" className="mt-8">
            <div className="rounded-lg border bg-card p-8">
              <h3 className="text-2xl font-bold mb-4">
                Enterprise Solutions: White-Glove Service
              </h3>
              <p className="text-muted-foreground mb-6">
                Dedicated GPU clusters with custom SLAs and 24/7 support.
                Perfect for organizations with specific compliance needs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    Dedicated GPU clusters with guaranteed availability
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Custom SLA and volume pricing discounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    Private deployment options for sensitive workloads
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    24/7 technical support with dedicated account manager
                  </span>
                </li>
              </ul>
              <Button asChild>
                <Link href="https://phala.com/contact">Contact Sales</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export { Feature51 }
