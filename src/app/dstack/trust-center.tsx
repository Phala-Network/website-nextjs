import { FileText, Globe, HardDrive, Shield } from 'lucide-react'
import Image from 'next/image'

import { DashedLine } from '@/components/dashed-line'
import { Button } from '@/components/ui/button'

const features = [
  {
    title: 'Source Code Verification',
    description: 'Review the exact source code running in your TEE environment',
    icon: FileText,
  },
  {
    title: 'Hardware Information',
    description: 'Detailed specs of the TEE hardware running your application',
    icon: HardDrive,
  },
  {
    title: 'Network Configuration',
    description: 'Complete network topology and security settings',
    icon: Globe,
  },
  {
    title: 'Attestation Report',
    description: 'Cryptographic proof of execution environment integrity',
    icon: Shield,
  },
]

const TrustCenter = () => {
  return (
    <section className="py-24 max-w-5xl mx-auto">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          {/* Left side - Main content */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              Trust Center
            </h1>

            <p className="text-muted-foreground mt-5 font-sans text-xl font-medium">
              Complete Transparency. Every deployed application comes with a
              comprehensive Trust Center for full verification.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild>
                <a
                  href="https://tee-visualization.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="relative flex flex-1 flex-col justify-center space-y-4 max-lg:pt-10 lg:px-10">
            <DashedLine
              orientation="vertical"
              className="absolute top-0 left-0 max-lg:hidden"
            />
            <DashedLine
              orientation="horizontal"
              className="absolute top-0 lg:hidden"
            />
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                  <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-inter font-semibold">
                      {feature.title}
                    </h2>
                    <p className="text-muted-foreground max-w-76 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <Image
          width={858}
          height={462}
          src="/dstack/trust-center.png"
          alt="Trust Center Interface"
          className="w-full rounded-sm object-cover object-top-left shadow-lg mt-12 border overflow-hidden"
        />
      </div>
    </section>
  )
}

export default TrustCenter
