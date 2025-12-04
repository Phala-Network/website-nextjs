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
  const trustCenterUrl = 'https://trust.phala.com'

  return (
    <section className="py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col justify-between gap-8 lg:flex-row max-w-5xl mx-auto">
          {/* Left side - Main content */}
          <div className="flex-1">
            <h1 className="font-display text-2xl font-semibold leading-none sm:text-3xl md:text-4xl">
              Trust Center
            </h1>

            <p className="font-display text-muted-foreground mt-5 text-xl leading-7 font-medium">
              Complete Transparency. Every deployed application comes with a
              comprehensive Trust Center for full verification.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild>
                <a
                  href={trustCenterUrl}
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
                    <h2 className="font-display font-semibold leading-4">
                      {feature.title}
                    </h2>
                    <p className="font-display text-muted-foreground max-w-76 text-sm leading-5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 w-full">
          <Image
            width={1920}
            height={1080}
            src="/dstack/trust-center.png"
            alt="Trust Center Interface"
            className="w-full h-auto rounded-sm object-contain shadow-lg border"
          />
        </div>
      </div>
    </section>
  )
}

export default TrustCenter
