'use client'

import Lottie from 'lottie-react'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

import { Badge } from '@/components/ui/badge'
import trainingWorkflowAnimation from './training-workflow-animation.json'

const Feature95Training = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-16 max-w-xl px-8 lg:px-0">
          <Badge variant="outline">Training Workflow</Badge>
          <div className="flex items-center gap-4 mt-6 mb-3">
            <h2 className="text-balance text-2xl font-medium md:text-4xl">
              How It Works
            </h2>
            <div className="flex items-center gap-3">
              <img
                src="https://api.iconify.design/devicon:tensorflow.svg"
                alt="TensorFlow"
                className="h-8 md:h-10"
              />
              <img
                src="https://api.iconify.design/devicon:pytorch.svg"
                alt="PyTorch"
                className="h-8 md:h-10"
              />
            </div>
          </div>
          <p>Deploy a fully optimized system and upgrade your current setup.</p>
        </div>
        <div>
          <Tabs defaultValue="tab-1">
            <TabsList className="relative grid items-start gap-6 lg:grid-cols-4">
              <div className="bg-input absolute left-4 right-0 top-[30px] -z-10 hidden h-px lg:block"></div>

              {/* Step 1: Attestation & Setup */}
              <TabsTrigger
                value="tab-1"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background lg:group-data-[state=active]:bg-primary lg:group-data-[state=active]:text-background lg:group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium lg:group-data-[state=active]:ring">
                      1
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">Verify & Setup</h3>
                    <p className="text-sm">Attestation & data mount</p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <Lottie animationData={trainingWorkflowAnimation} loop={true} className="w-full" />
                </div>
              </TabsTrigger>

              {/* Step 2: Mount Dataset */}
              <TabsTrigger
                value="tab-2"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium group-data-[state=active]:ring">
                      2
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">Load Data</h3>
                    <p className="text-sm">Encrypted dataset</p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <Lottie animationData={trainingWorkflowAnimation} loop={true} className="w-full" />
                </div>
              </TabsTrigger>

              {/* Step 3: Training */}
              <TabsTrigger
                value="tab-3"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium group-data-[state=active]:ring">
                      3
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">Train Model</h3>
                    <p className="text-sm">Secure GPU TEE</p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <Lottie animationData={trainingWorkflowAnimation} loop={true} className="w-full" />
                </div>
              </TabsTrigger>

              {/* Step 4: Export */}
              <TabsTrigger
                value="tab-4"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium group-data-[state=active]:ring">
                      4
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">Export Weights</h3>
                    <p className="text-sm">Signed checkpoints</p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <Lottie animationData={trainingWorkflowAnimation} loop={true} className="w-full" />
                </div>
              </TabsTrigger>
            </TabsList>

            <div className="bg-muted/50 mt-10 hidden rounded-xl border p-10 lg:block">
              <Lottie animationData={trainingWorkflowAnimation} loop={true} className="w-full" />
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export { Feature95Training }
