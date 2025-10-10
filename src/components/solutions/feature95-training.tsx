'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

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
                  <div className="aspect-video">
                    <FlowchartSVG activeStep={1} />
                  </div>
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
                  <div className="aspect-video">
                    <FlowchartSVG activeStep={2} />
                  </div>
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
                  <div className="aspect-video">
                    <FlowchartSVG activeStep={3} />
                  </div>
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
                  <div className="aspect-video">
                    <FlowchartSVG activeStep={5} />
                  </div>
                </div>
              </TabsTrigger>
            </TabsList>

            <div className="bg-muted/50 mt-10 hidden rounded-xl border p-10 lg:block">
              <TabsContent value="tab-1" className="aspect-video">
                <FlowchartSVG activeStep={1} />
              </TabsContent>
              <TabsContent value="tab-2" className="aspect-video">
                <FlowchartSVG activeStep={2} />
              </TabsContent>
              <TabsContent value="tab-3" className="aspect-video">
                <FlowchartSVG activeStep={3} />
              </TabsContent>
              <TabsContent value="tab-4" className="aspect-video">
                <FlowchartSVG activeStep={4} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

const FlowchartSVG = ({ activeStep }: { activeStep: number }) => {
  return (
    <svg
      viewBox="0 0 1600 600"
      className="h-full w-full rounded-xl border object-cover shadow"
    >
      {/* Step 1: Remote Attestation */}
      <g
        className={cn(
          'transition-all duration-300',
          activeStep === 1 ? 'opacity-100' : 'opacity-40',
        )}
      >
        <rect
          x="50"
          y="250"
          width="220"
          height="80"
          rx="8"
          className={cn(
            'transition-all',
            activeStep === 1
              ? 'fill-green-200 dark:fill-green-900 stroke-green-600 dark:stroke-green-400'
              : 'fill-green-50 dark:fill-green-950 stroke-green-300 dark:stroke-green-700',
          )}
          strokeWidth="3"
        />
        <text
          x="160"
          y="275"
          textAnchor="middle"
          className="text-sm fill-green-900 dark:fill-green-100 font-semibold"
        >
          🔐 Attestation
        </text>
        <text
          x="160"
          y="300"
          textAnchor="middle"
          className="text-xs fill-green-700 dark:fill-green-300"
        >
          Verify TEE
        </text>
        <text
          x="160"
          y="320"
          textAnchor="middle"
          className="text-xs fill-green-700 dark:fill-green-300"
        >
          Hardware
        </text>
      </g>

      {/* Arrow 1 */}
      <line
        x1="270"
        y1="290"
        x2="320"
        y2="290"
        className="stroke-current"
        strokeWidth="3"
        markerEnd="url(#arrowhead)"
      />

      {/* Step 2: Mount Dataset */}
      <g
        className={cn(
          'transition-all duration-300',
          activeStep === 2 ? 'opacity-100' : 'opacity-40',
        )}
      >
        <rect
          x="320"
          y="250"
          width="220"
          height="80"
          rx="8"
          className={cn(
            'transition-all',
            activeStep === 2
              ? 'fill-green-200 dark:fill-green-900 stroke-green-600 dark:stroke-green-400'
              : 'fill-green-50 dark:fill-green-950 stroke-green-300 dark:stroke-green-700',
          )}
          strokeWidth="3"
        />
        <text
          x="430"
          y="275"
          textAnchor="middle"
          className="text-sm fill-green-900 dark:fill-green-100 font-semibold"
        >
          📦 Load Data
        </text>
        <text
          x="430"
          y="300"
          textAnchor="middle"
          className="text-xs fill-green-700 dark:fill-green-300"
        >
          Mount encrypted
        </text>
        <text
          x="430"
          y="320"
          textAnchor="middle"
          className="text-xs fill-green-700 dark:fill-green-300"
        >
          dataset & weights
        </text>
      </g>

      {/* Arrow 2 */}
      <line
        x1="540"
        y1="290"
        x2="590"
        y2="290"
        className="stroke-current"
        strokeWidth="3"
        markerEnd="url(#arrowhead)"
      />

      {/* Step 3: Training Environment (Large Box) */}
      <g
        className={cn(
          'transition-all duration-300',
          activeStep === 3 ? 'opacity-100' : 'opacity-40',
        )}
      >
        <rect
          x="590"
          y="50"
          width="420"
          height="500"
          rx="12"
          className={cn(
            'transition-all',
            activeStep === 3
              ? 'fill-blue-100 dark:fill-blue-950 stroke-blue-600 dark:stroke-blue-400'
              : 'fill-blue-50 dark:fill-blue-950 stroke-blue-300 dark:stroke-blue-700',
          )}
          strokeWidth="4"
          strokeDasharray="10,5"
        />
        <text
          x="750"
          y="85"
          textAnchor="middle"
          className="text-base fill-blue-900 dark:fill-blue-100 font-bold"
        >
          ⚙️ GPU TEE Training
        </text>

        {/* TensorFlow and PyTorch logos */}
        <image
          x="860"
          y="62"
          width="32"
          height="32"
          href="https://api.iconify.design/devicon:tensorflow.svg"
        />
        <image
          x="900"
          y="62"
          width="32"
          height="32"
          href="https://api.iconify.design/devicon:pytorch.svg"
        />

        {/* Sub-steps */}
        <rect
          x="620"
          y="110"
          width="360"
          height="65"
          rx="6"
          className={cn(
            'transition-all',
            activeStep === 3
              ? 'fill-blue-200 dark:fill-blue-900 stroke-blue-500 dark:stroke-blue-400'
              : 'fill-blue-100 dark:fill-blue-900 stroke-blue-300 dark:stroke-blue-700',
          )}
          strokeWidth="2"
        />
        <text
          x="800"
          y="148"
          textAnchor="middle"
          className="text-sm fill-blue-900 dark:fill-blue-100"
        >
          Load Framework (PyTorch/TF)
        </text>

        <rect
          x="620"
          y="185"
          width="360"
          height="65"
          rx="6"
          className={cn(
            'transition-all',
            activeStep === 3
              ? 'fill-blue-200 dark:fill-blue-900 stroke-blue-500 dark:stroke-blue-400'
              : 'fill-blue-100 dark:fill-blue-900 stroke-blue-300 dark:stroke-blue-700',
          )}
          strokeWidth="2"
        />
        <text
          x="800"
          y="223"
          textAnchor="middle"
          className="text-sm fill-blue-900 dark:fill-blue-100"
        >
          Initialize Model Architecture
        </text>

        <rect
          x="620"
          y="260"
          width="360"
          height="65"
          rx="6"
          className={cn(
            'transition-all',
            activeStep === 3
              ? 'fill-blue-200 dark:fill-blue-900 stroke-blue-500 dark:stroke-blue-400'
              : 'fill-blue-100 dark:fill-blue-900 stroke-blue-300 dark:stroke-blue-700',
          )}
          strokeWidth="2"
        />
        <text
          x="800"
          y="298"
          textAnchor="middle"
          className="text-sm fill-blue-900 dark:fill-blue-100"
        >
          Distribute Across H200/A100
        </text>

        <rect
          x="620"
          y="335"
          width="360"
          height="65"
          rx="6"
          className={cn(
            'transition-all',
            activeStep === 3
              ? 'fill-orange-200 dark:fill-orange-900 stroke-orange-500 dark:stroke-orange-400'
              : 'fill-orange-100 dark:fill-orange-900 stroke-orange-300 dark:stroke-orange-700',
          )}
          strokeWidth="2"
        />
        <text
          x="800"
          y="373"
          textAnchor="middle"
          className="text-sm fill-orange-900 dark:fill-orange-100"
        >
          Secure Training Loop
        </text>

        <rect
          x="620"
          y="410"
          width="360"
          height="65"
          rx="6"
          className={cn(
            'transition-all',
            activeStep === 3
              ? 'fill-orange-200 dark:fill-orange-900 stroke-orange-500 dark:stroke-orange-400'
              : 'fill-orange-100 dark:fill-orange-900 stroke-orange-300 dark:stroke-orange-700',
          )}
          strokeWidth="2"
        />
        <text
          x="800"
          y="448"
          textAnchor="middle"
          className="text-sm fill-orange-900 dark:fill-orange-100"
        >
          Checkpoint Encrypted Volume
        </text>

        <rect
          x="620"
          y="485"
          width="360"
          height="50"
          rx="6"
          className={cn(
            'transition-all',
            activeStep === 3
              ? 'fill-purple-200 dark:fill-purple-900 stroke-purple-500 dark:stroke-purple-400'
              : 'fill-purple-100 dark:fill-purple-900 stroke-purple-300 dark:stroke-purple-700',
          )}
          strokeWidth="2"
        />
        <text
          x="800"
          y="517"
          textAnchor="middle"
          className="text-sm fill-purple-900 dark:fill-purple-100"
        >
          🧾 Generate Attestation
        </text>
      </g>

      {/* Arrow 3 */}
      <line
        x1="1010"
        y1="290"
        x2="1060"
        y2="290"
        className="stroke-current"
        strokeWidth="3"
        markerEnd="url(#arrowhead)"
      />

      {/* Step 4: Export & Deploy */}
      <g
        className={cn(
          'transition-all duration-300',
          activeStep === 4 ? 'opacity-100' : 'opacity-40',
        )}
      >
        <rect
          x="1060"
          y="180"
          width="220"
          height="100"
          rx="8"
          className={cn(
            'transition-all',
            activeStep === 4
              ? 'fill-purple-200 dark:fill-purple-900 stroke-purple-600 dark:stroke-purple-400'
              : 'fill-purple-50 dark:fill-purple-950 stroke-purple-300 dark:stroke-purple-700',
          )}
          strokeWidth="3"
        />
        <text
          x="1170"
          y="210"
          textAnchor="middle"
          className="text-sm fill-purple-900 dark:fill-purple-100 font-semibold"
        >
          💾 Export Model
        </text>
        <text
          x="1170"
          y="230"
          textAnchor="middle"
          className="text-xs fill-purple-700 dark:fill-purple-300"
        >
          Signed checkpoints
        </text>
        <text
          x="1170"
          y="250"
          textAnchor="middle"
          className="text-xs fill-purple-700 dark:fill-purple-300"
        >
          with attestation
        </text>
      </g>

      {/* Arrow 4 */}
      <line
        x1="1170"
        y1="280"
        x2="1170"
        y2="310"
        className="stroke-current"
        strokeWidth="3"
        markerEnd="url(#arrowhead)"
      />

      {/* Deploy box below */}
      <g
        className={cn(
          'transition-all duration-300',
          activeStep === 4 ? 'opacity-100' : 'opacity-40',
        )}
      >
        <rect
          x="1060"
          y="310"
          width="220"
          height="100"
          rx="8"
          className={cn(
            'transition-all',
            activeStep === 4
              ? 'fill-gray-200 dark:fill-gray-800 stroke-gray-600 dark:stroke-gray-400'
              : 'fill-gray-50 dark:fill-gray-900 stroke-gray-300 dark:stroke-gray-700',
          )}
          strokeWidth="3"
        />
        <text
          x="1170"
          y="345"
          textAnchor="middle"
          className="text-sm fill-gray-900 dark:fill-gray-100 font-semibold"
        >
          🚀 Deploy
        </text>
        <text
          x="1170"
          y="365"
          textAnchor="middle"
          className="text-xs fill-gray-700 dark:fill-gray-300"
        >
          Phala Inference TEE
        </text>
        <text
          x="1170"
          y="385"
          textAnchor="middle"
          className="text-xs fill-gray-700 dark:fill-gray-300"
        >
          HuggingFace / S3
        </text>
      </g>

      {/* Arrow marker definition */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" className="fill-current" />
        </marker>
      </defs>
    </svg>
  )
}

export { Feature95Training }
