import { Cloud, Handshake, Sparkles } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const GpuTeeDeploymentModels = () => {
  return (
    <section className="py-32">
      <div className="container max-w-5xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Choose Your Deployment Model
          </h2>
          <p className="text-lg text-muted-foreground">
            Three ways to deploy GPU TEE workloads on Phala Cloud
          </p>
        </div>
        <Tabs defaultValue="cvm">
          <TabsList className="flex h-auto w-full flex-col gap-2 bg-background md:flex-row">
            <TabsTrigger
              value="cvm"
              className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                  <Cloud className="size-4 text-primary" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  CVM + GPU
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                Deploy custom Docker workloads with full control
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="models"
              className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                  <Sparkles className="size-4 text-primary" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Confidential AI Models
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                One-click deployment of popular LLMs
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="enterprise"
              className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                  <Handshake className="size-4 text-primary" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Enterprise Deals
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                Custom solutions & volume pricing
              </p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cvm">
            <div className="mt-6 rounded-xl border p-6">
              <h3 className="mb-4 text-2xl font-bold">
                Deploy Custom Docker Workloads
              </h3>
              <div className="mb-6 space-y-3 text-muted-foreground">
                <p>
                  Full control over your environment with Docker Compose
                  support. Ideal for:
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>Custom AI pipelines and training jobs</li>
                  <li>Bring your own container images</li>
                  <li>Advanced configurations and custom dependencies</li>
                  <li>SSH access for debugging and development</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="https://cloud.phala.network/dashboard/gpu-tee">
                    Deploy CVM
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs">View Documentation</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="models">
            <div className="mt-6 rounded-xl border p-6">
              <h3 className="mb-4 text-2xl font-bold">
                One-Click Model Deployment
              </h3>
              <div className="mb-6 space-y-3 text-muted-foreground">
                <p>
                  Deploy popular LLMs instantly with our model marketplace.
                  Perfect for:
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>API-first inference workloads</li>
                  <li>Pre-configured models (Llama, Mistral, etc.)</li>
                  <li>OpenAI-compatible API</li>
                  <li>Auto-scaling based on demand</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="https://cloud.phala.network/dashboard/confidential-ai-models">
                    Browse Models
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs/models">Model Docs</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="enterprise">
            <div className="mt-6 rounded-xl border p-6">
              <h3 className="mb-4 text-2xl font-bold">
                Enterprise Solutions & Volume Pricing
              </h3>
              <div className="mb-6 space-y-3 text-muted-foreground">
                <p>
                  Dedicated clusters and custom SLAs for production workloads:
                </p>
                <ul className="ml-6 space-y-2 list-disc">
                  <li>Reserved GPU capacity with volume discounts</li>
                  <li>Custom configurations and dedicated support</li>
                  <li>Enterprise SLAs and compliance certifications</li>
                  <li>Dedicated account manager</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="https://phala.com/contact">Contact Sales</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export { GpuTeeDeploymentModels }
