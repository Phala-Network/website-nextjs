'use client'
import Lottie from 'lottie-react'
import { ChevronRight, Globe, Shield, Zap } from 'lucide-react'

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/magicui/terminal'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import animationData from './deploy-animation.json'

const tabsData = [
  {
    id: 'easy',
    label: 'Easy',
    description: 'Build in minutes, ship fast',
    icon: Zap,
    bg: 'bg-[#C0E735]',
    activeBg: 'data-[state=active]:bg-[#C0E735]/90',
  },
  {
    id: 'open',
    label: 'Open',
    description: 'Open source and transparent',
    icon: Globe,
    bg: 'bg-[#98DCFF]',
    activeBg: 'data-[state=active]:bg-[#98DCFF]/90',
  },
  {
    id: 'private',
    label: 'Private',
    description: 'Privacy-first architecture',
    icon: Shield,
    bg: 'bg-[#AFBEFE]',
    activeBg: 'data-[state=active]:bg-[#AFBEFE]/90',
  },
]

export default function PrivateCloudCompute() {
  return (
    <div className="w-full max-w-6xl mx-auto py-24">
      <section className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <h2 className="text-center text-3xl font-bold text-balance lg:text-4xl">
            Private Cloud Compute
          </h2>
          <p className="text-center text-muted-foreground text-lg md:text-xl font-medium">
            All-in-one confidential compute platform for AI workloads.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mx-auto rounded-3xl bg-primary/70 p-2 shadow gap-2 bg-radial-[at_top_center] from-white/60 to-transparent">
          {/* Left Column - Demo Card */}

          <Card className="relative rounded-2xl pt-8 pb-0 overflow-hidden">
            <CardContent className="flex h-full w-full items-center justify-center p-0">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="size-3.5 rounded-full bg-red-400" />
                <div className="size-3.5 rounded-full bg-yellow-400" />
                <div className="size-3.5 rounded-full bg-green-400" />
              </div>
              {/* Browser Window Content */}
              <div className="aspect-video">
                <Lottie animationData={animationData} loop={true} />
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Info Card */}
          <div className="flex flex-col items-start p-6 lg:p-10">
            <h3 className="font-semibold text-xl md:text-2xl">
              Confidential VM
            </h3>

            <p className="text-muted-foreground text-lg font-medium mt-2">
              Starting at $50.37/month
            </p>

            <p className="text-muted-foreground mt-4">
              Deploy arbitrary containerized app to TEE in minutes. No steep
              learning curve. No hardware maintenance costs. Just focus on
              delivery.
            </p>

            <Button variant="outline" asChild className="mt-8 lg:mt-auto">
              <a
                href="https://cloud.phala.network/features/confidential-vm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
                <ChevronRight className="ml-1 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* New Tabs Section */}
        <div className="mt-6">
          <Tabs defaultValue="easy" className="gap-6">
            <TabsList className="flex h-auto w-full shadow">
              {tabsData.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={cn(
                      'flex w-full gap-1 rounded-md p-2 md:p-4 text-left group transition cursor-pointer',
                      'hover:border border-none',
                      tab.activeBg,
                      'bg-radial-[at_top_center] from-white/60 to-transparent',
                    )}
                  >
                    <div className="flex items-center gap-2 lg:gap-4">
                      <span
                        className={cn(
                          'flex size-8 items-center justify-center rounded-full lg:size-10 group-data-[state=active]:bg-muted/70 shrink-0 transition',
                          tab.bg,
                        )}
                      >
                        <IconComponent className="size-4 text-white group-data-[state=active]:text-foreground transition" />
                      </span>
                      <div>
                        <h3 className="md:text-lg font-semibold">
                          {tab.label}
                        </h3>
                        <p className="font-normal text-muted-foreground max-lg:hidden">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </TabsTrigger>
                )
              })}
            </TabsList>
            <TabsContent value="easy">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="https://docs.phala.network/phala-cloud/phala-cloud-cli/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-110 rounded-lg shadow md:col-span-2 bg-muted px-6 py-8 relative overflow-hidden"
                >
                  <div className="flex justify-between items-center gap-4">
                    <h4 className="text-lg font-medium text-muted-foreground max-w-xs text-balance">
                      <span className="text-foreground">
                        Write code, dockerize,
                      </span>{' '}
                      and deploy it as trustless TEE apps.
                    </h4>
                    <div className="flex items-center gap-4 shrink-0">
                      {/** biome-ignore lint/performance/noImgElement: svg */}
                      <img
                        src="/home/docker-mark-blue.svg"
                        alt="docker"
                        className="w-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition"
                      />
                      {/** biome-ignore lint/performance/noImgElement: svg */}
                      <img
                        src="/home/kubernetes.svg"
                        alt="kubernetes"
                        className="w-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition"
                      />
                    </div>
                  </div>

                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md p-3 bg-primary/40 rounded-3xl h-full shadow">
                    <Terminal startOnView>
                      <TypingAnimation>
                        &gt; npx phala cvms create -n app
                      </TypingAnimation>
                      <AnimatedSpan>Name for the CVM: app</AnimatedSpan>
                      <AnimatedSpan>
                        Path to your Docker Compose file: compose.yml
                      </AnimatedSpan>
                      <AnimatedSpan className="text-muted-foreground">
                        Fetching available TEEPods...
                      </AnimatedSpan>
                      <AnimatedSpan className="text-muted-foreground">
                        Getting public key from CVM...
                      </AnimatedSpan>
                      <AnimatedSpan className="text-muted-foreground">
                        Encrypting environment variables...
                      </AnimatedSpan>
                      <AnimatedSpan className="text-muted-foreground">
                        Creating CVM...
                      </AnimatedSpan>
                      <AnimatedSpan className="text-green-500">
                        CVM created successfully! ✓
                      </AnimatedSpan>
                    </Terminal>
                  </div>
                </a>
                <div className="h-110 rounded-lg shadow bg-muted px-6 py-8 relative">
                  <h4 className="text-lg font-medium text-muted-foreground text-balance">
                    We deal with{' '}
                    <span className="text-foreground">
                      the pain of hardware maintenance.
                    </span>
                  </h4>
                  <div className="absolute top-1/3 left-0 right-0 px-6">
                    <div className="flex items-center gap-2">
                      <div className="size-12 rounded-full bg-background flex items-center justify-center border">
                        {/** biome-ignore lint/performance/noImgElement: svg */}
                        <img
                          src="/home/intel.svg"
                          alt="intel"
                          className="w-8"
                        />
                      </div>
                      <div className="size-12 rounded-full bg-background flex items-center justify-center border">
                        {/** biome-ignore lint/performance/noImgElement: svg */}
                        <img src="/home/amd.svg" alt="amd" className="w-8" />
                      </div>
                      <div className="size-12 rounded-full bg-background flex items-center justify-center border">
                        {/** biome-ignore lint/performance/noImgElement: svg */}
                        <img
                          src="/home/nvidia.svg"
                          alt="nvidia"
                          className="w-7"
                        />
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm pl-2">
                      have their own TEE.
                    </p>
                  </div>
                </div>
                <a
                  href="https://cloud.phala.network/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-110 rounded-lg shadow bg-muted px-6 py-8 relative overflow-hidden"
                >
                  <h4 className="text-lg font-medium text-muted-foreground text-balance">
                    Deploy{' '}
                    <span className="text-foreground">
                      production-grade TEE workloads
                    </span>{' '}
                    in minutes.
                  </h4>

                  <div className="absolute top-1/3 left-6 p-3 bg-primary/40 rounded-3xl h-full shadow">
                    <div className="bg-background h-full rounded-2xl aspect-video bg-contain bg-no-repeat bg-top-left bg-[url('/home/templates.png')]"></div>
                  </div>
                </a>
              </div>
            </TabsContent>
            <TabsContent value="open">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="h-110 rounded-lg shadow md:col-span-2 bg-muted"></div>
                <div className="h-110 rounded-lg shadow bg-muted"></div>
                <div className="h-110 rounded-lg shadow bg-muted"></div>
              </div>
            </TabsContent>
            <TabsContent value="private">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="h-110 rounded-lg shadow md:col-span-2 bg-muted"></div>
                <div className="h-110 rounded-lg shadow bg-muted"></div>
                <div className="h-110 rounded-lg shadow bg-muted"></div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
