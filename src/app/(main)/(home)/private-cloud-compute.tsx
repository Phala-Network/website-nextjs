'use client'
import Lottie from 'lottie-react'
import { Globe, Shield, Zap } from 'lucide-react'
import { getImageProps } from 'next/image'
import Link from 'next/link'

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/magicui/terminal'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getBackgroundImage } from '@/lib/image'
import { cn } from '@/lib/utils'
import animationData from './deploy-animation.json'

const tabsData = [
  {
    id: 'easy',
    label: 'Easy',
    description: 'Build in minutes',
    icon: Zap,
    bg: 'bg-primary',
    activeBg: 'data-[state=active]:bg-primary/90',
  },
  {
    id: 'open',
    label: 'Open',
    description: 'Audit everything',
    icon: Globe,
    bg: 'bg-phala-blue-300',
    activeBg: 'data-[state=active]:bg-phala-blue-300/90',
  },
  {
    id: 'private',
    label: 'Private',
    description: 'Hardware-level security',
    icon: Shield,
    bg: 'bg-[#AFBEFE]',
    activeBg: 'data-[state=active]:bg-[#AFBEFE]/90',
  },
]

export default function PrivateCloudCompute() {
  // Get optimized background images
  const templatesImage = getImageProps({
    alt: '',
    width: 762,
    height: 433,
    src: '/home/templates.png',
  })
  const trustCenterImage = getImageProps({
    alt: '',
    width: 535,
    height: 434,
    src: '/home/trust-center.png',
  })
  const dstackBgImage = getImageProps({
    alt: '',
    width: 530,
    height: 490,
    src: '/home/dstack-bg.png',
  })

  const templatesBackgroundImage = getBackgroundImage(
    templatesImage.props.srcSet,
  )
  const trustCenterBackgroundImage = getBackgroundImage(
    trustCenterImage.props.srcSet,
  )
  const dstackBackgroundImage = getBackgroundImage(dstackBgImage.props.srcSet)
  return (
    <section className="py-24 container">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
        <h2 className="text-center text-3xl font-semibold text-balance lg:text-4xl">
          Private Cloud Compute
        </h2>
        <p className="text-center text-muted-foreground text-lg md:text-xl font-medium">
          All-in-one confidential compute platform for AI workloads.
        </p>
      </div>

      {/* Main Content Grid - Phala Cloud Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 min-h-[420px]">
        {/* Left Column - Green Card with Animation */}
        <div className="relative bg-primary rounded-xl overflow-hidden flex items-center justify-center min-h-[420px]">
          {/* Ellipse background */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[144px] w-[594px] h-[594px] opacity-30 pointer-events-none">
            <div className="w-full h-full rounded-full bg-gradient-radial from-white/40 to-transparent blur-3xl" />
          </div>

          {/* Browser Window */}
          <div className="relative z-10 w-full max-w-[510px] mx-auto px-4 translate-y-[45px]">
            <div className="bg-white rounded-2xl border-[12px] border-white/50 shadow-2xl overflow-hidden">
              <div className="h-full w-full rounded-xl overflow-hidden">
                {/* Browser Header */}
                <div className="h-10 border-b border-border flex items-center px-6 bg-white">
                  <p className="font-display font-medium text-sm tracking-tight">
                    Phala Cloud
                  </p>
                </div>
                {/* Animation Content */}
                <div className="p-4 bg-white">
                  <Lottie animationData={animationData} loop={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - White Card with Info */}
        <div className="bg-white rounded-xl p-8 lg:p-10 flex flex-col justify-between min-h-[420px]">
          {/* Top Section */}
          <div className="flex flex-col gap-4 max-w-[280px]">
            <h3 className="font-display font-semibold text-2xl leading-none tracking-tight md:text-3xl">
              Phala Cloud
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed tracking-tight md:text-lg">
              All-in-one confidential compute platform for AI workloads
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-6 mt-8">
            {/* Pricing */}
            <div className="flex flex-col gap-3">
              <p className="font-display font-medium text-base leading-none tracking-tight md:text-lg">
                Starting at
              </p>
              <p className="font-display font-semibold text-lg leading-none tracking-tight md:text-xl">
                $50.37/month
              </p>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-background text-foreground hover:bg-muted h-10 w-fit px-6 rounded-full shadow-sm border border-border"
            >
              <Link href="/confidential-vm">
                <span className="font-display font-semibold text-sm tracking-tight">
                  Start Building
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-5">
        <Tabs defaultValue="easy" className="gap-5">
          <TabsList className="flex h-auto w-full bg-card">
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
                      <h3 className="md:text-lg font-semibold xl:text-xl">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <a
                href="https://docs.phala.com/phala-cloud/phala-cloud-cli/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-110 rounded-lg md:col-span-2 px-6 py-8 relative overflow-hidden bg-card"
              >
                <div className="flex flex-col items-center gap-4">
                  <h4 className="text-lg font-medium text-muted-foreground max-w-xs text-center xl:text-xl">
                    <span className="text-foreground">
                      Write code, dockerize,
                    </span>{' '}
                    <br />
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

                <div className="absolute top-2/5 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md p-3 bg-primary/50 rounded-3xl h-full">
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
              <div className="h-110 rounded-lg bg-card px-6 xl:px-8 py-8 relative">
                <h4 className="text-lg font-medium text-muted-foreground text-balance xl:text-xl">
                  We deal with{' '}
                  <span className="text-foreground">
                    the pain of hardware maintenance.
                  </span>
                </h4>
                <div className="absolute top-2/5 left-0 right-0 px-6 xl:px-8">
                  <div className="flex items-center gap-2">
                    <div className="size-12 rounded-full bg-background flex items-center justify-center border">
                      {/** biome-ignore lint/performance/noImgElement: svg */}
                      <img src="/home/intel.svg" alt="intel" className="w-8" />
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
                  <p className="text-muted-foreground mt-4 text-sm">
                    Too many TEE secured chip variants—Phala support all TEE
                    chip types with one API.
                  </p>
                </div>
              </div>
              <a
                href="https://cloud.phala.com/templates"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-110 rounded-lg bg-card px-6 xl:px-8 py-8 relative overflow-hidden"
              >
                <h4 className="text-lg font-medium text-muted-foreground text-balance xl:text-xl">
                  Deploy{' '}
                  <span className="text-foreground">
                    production-grade TEE workloads
                  </span>{' '}
                  in minutes.
                </h4>

                <div className="absolute top-2/5 left-6 xl:left-8 p-3 bg-primary/50 rounded-3xl h-full">
                  <div
                    className="bg-background h-full rounded-2xl aspect-video bg-contain bg-no-repeat bg-top-left border"
                    style={{ backgroundImage: templatesBackgroundImage }}
                  ></div>
                </div>
              </a>
            </div>
          </TabsContent>
          <TabsContent value="open">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <a
                href="https://trust.phala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-110 rounded-lg md:col-span-2 relative py-8 px-6 overflow-hidden bg-card"
              >
                <h4 className="text-lg font-medium text-muted-foreground text-center mt-6 xl:text-xl">
                  Explore{' '}
                  <span className="text-foreground">the chain of trust</span>{' '}
                  <br />
                  in TEE trust center.
                </h4>
                <div className="absolute top-2/5 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md p-3 bg-phala-blue-300/50 rounded-3xl h-full">
                  <div
                    className="bg-background w-full h-full rounded-2xl bg-contain bg-no-repeat bg-top-left border"
                    style={{ backgroundImage: trustCenterBackgroundImage }}
                  ></div>
                </div>
              </a>
              <a
                href="https://proof.t16z.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-110 rounded-lg bg-card px-6 xl:px-8 py-8 relative overflow-hidden"
              >
                <h4 className="text-lg font-medium text-muted-foreground text-balance xl:text-xl">
                  <span className="text-foreground">
                    Live attestation and verification
                  </span>{' '}
                  for every running workload.
                </h4>
                <div className="absolute top-2/5 left-6 xl:left-8 bottom-0 right-0 pt-3 pl-3 bg-phala-blue-300/50 rounded-tl-3xl">
                  <div className="text-white bg-phala-blue-400/90 h-full w-full rounded-tl-2xl bg-contain bg-no-repeat bg-top-left pt-4 pl-4">
                    <div className="max-w-[180px]">
                      <p className="text-lg font-semibold">
                        Real-time Transparency
                      </p>
                      <p className="text-sm font-medium mt-4">
                        Live attestation and verification
                      </p>
                      <ul className="text-sm mt-10 list-disc list-inside">
                        <li>10K+ daily attestations</li>
                        <li>Public verification</li>
                        <li>Audit trails</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </a>
              <Link
                href="/dstack"
                className="block h-110 rounded-lg bg-card px-6 py-8 relative overflow-hidden bg-[length:210px_auto] bg-no-repeat bg-bottom-right"
                style={{ backgroundImage: dstackBackgroundImage }}
              >
                <h4 className="text-lg font-medium text-muted-foreground text-balance xl:text-xl">
                  <span className="text-foreground">
                    Fully open-source infrastructure
                  </span>{' '}
                  you can audit, fork, and customize.
                </h4>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="private">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="h-110 rounded-lg bg-card relative overflow-hidden px-6 xl:px-8 py-8">
                <h4 className="text-lg font-medium text-muted-foreground text-balance xl:text-xl">
                  <span className="text-foreground">
                    Hardware-level isolation
                  </span>{' '}
                  using Trusted Execution Environments.
                </h4>
                <div className="absolute top-2/5 left-6 xl:left-8 bottom-0 right-0 pt-3 pl-3 bg-[#AFBEFE]/50 rounded-tl-3xl border">
                  <div className="text-white bg-[#9DA9F0] h-full w-full rounded-tl-2xl bg-contain bg-no-repeat bg-top-left pt-6 pl-6">
                    <p className="text-lg font-semibold">TEE Protection</p>
                    <p className="text-sm font-medium mt-4">
                      Hardware-level isolation
                    </p>
                    <ul className="text-sm mt-18 list-disc list-inside">
                      <li>CPU/GPU TEE</li>
                      <li>5% overhead</li>
                      <li>Zero breaches</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="h-80 md:h-110 rounded-lg bg-card relative overflow-hidden px-6 xl:px-8 py-8">
                <h4 className="text-lg font-medium text-muted-foreground text-balance xl:text-xl">
                  <span className="text-foreground">
                    Only you can access your data
                  </span>{' '}
                  — no one else, not even us.
                </h4>
                <div className="absolute top-2/5 left-0 bottom-0 pt-3 bg-[#AFBEFE]/50 w-full">
                  <div className="w-full h-full bg-[#9DA9F0]">
                    <video
                      src="/home/flow-tee.mp4"
                      autoPlay
                      loop
                      muted
                      preload="auto"
                      playsInline
                      className="w-full h-full object-cover object-left-bottom"
                    />
                  </div>
                </div>
              </div>
              <div className="h-110 rounded-lg bg-card relative overflow-hidden px-6 xl:px-8 py-8">
                <h4 className="text-lg font-medium text-muted-foreground text-balance xl:text-xl">
                  Cloud convenience with{' '}
                  <span className="text-foreground">
                    on-premise privacy guarantees.
                  </span>
                </h4>
                <div className="absolute top-2/5 left-0 bottom-0 right-6 xl:right-8 pt-3 pr-3 bg-[#AFBEFE]/50 rounded-tr-3xl">
                  <div className="text-white bg-[#9DA9F0] h-full w-full rounded-tr-2xl bg-contain bg-no-repeat bg-top-left pt-6 pl-6">
                    <p className="text-lg font-semibold">
                      Private as On-Premise
                    </p>
                    <p className="text-sm font-medium mt-4">
                      Enterprise-grade privacy
                    </p>
                    <ul className="text-sm mt-18 list-disc list-inside">
                      <li>Trusted by 500+ teams</li>
                      <li>$2M+ ARR proven market</li>
                      <li>Enterprise-grade compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
