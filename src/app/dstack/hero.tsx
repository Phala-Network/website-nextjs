import type { LucideIcon } from 'lucide-react'
import { Bot, Container, Lock, Shield } from 'lucide-react'
import Image from 'next/image'
import { FaGithub, FaStar } from 'react-icons/fa'

import { DashedLine } from '@/components/dashed-line'
import { Button } from '@/components/ui/button'

const features: ReadonlyArray<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Container,
    title: 'Developer Friendly',
    description:
      'Docker support means no code changes required. Package your existing applications and deploy them securely in minutes.',
  },
  {
    icon: Bot,
    title: 'Confidential AI Ready',
    description:
      'Purpose-built for confidential AI with TEE GPU support. Run private AI models on NVIDIA GPUs with hardware-guaranteed confidentiality.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Open source, independently audited by security experts, with secure services out-of-the-box.',
  },
  {
    icon: Lock,
    title: 'Verifiable Computing',
    description:
      'Every application comes with cryptographic attestation and a Trust Center for real-time verification.',
  },
]

interface Hero24Props {
  starCount: number
}

const Hero24 = ({ starCount }: Hero24Props) => {
  return (
    <section className="pt-24 pb-16 max-w-6xl mx-auto">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/dstack/logo.svg"
            alt="dstack Logo"
            className="mx-auto mb-5 h-16 md:mb-6"
            width={410}
            height={106}
          />
          {/* <Badge variant="outline" className="mb-3">
            Linux Foundation Project
          </Badge> */}
          <h1 className="mt-16 text-4xl font-semibold text-balance lg:text-5xl">
            Open-Source Confidential Computing
          </h1>
          <p className="mt-8 text-muted-foreground max-w-3xl mx-auto text-xl font-medium">
            Deploy secure applications with hardware-guaranteed privacy using
            TEE technology. Built for confidential AI, private cloud compute,
            and secure data processing.
          </p>
          <div className="mt-8 flex gap-1 justify-center flex-col">
            <Button className="mt-4" variant="outline" size="lg" asChild>
              <a
                href="https://github.com/Dstack-TEE/dstack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaGithub className="size-5" />
                <span>Dstack-TEE/dstack</span>
                {starCount > 0 && (
                  <div className="flex items-center gap-2 ml-1 border-l pl-2">
                    <FaStar className="size-4 text-yellow-400" />
                    <span className="text-sm text-muted-foreground/80">
                      {new Intl.NumberFormat('en-US').format(starCount)}
                    </span>
                  </div>
                )}
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://cloud.phala.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Don't own a TEE yet?
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`flex flex-col gap-3 p-5 md:gap-6 relative`}
              >
                <Icon className="size-6 shrink-0" />
                <div>
                  <h2 className="text-sm font-semibold md:text-base">
                    {feature.title}
                  </h2>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </div>
                {index === 0 && (
                  <DashedLine
                    orientation="vertical"
                    className="absolute top-0 right-0 max-md:hidden h-[200%]"
                  />
                )}
                {index === 0 && (
                  <DashedLine
                    orientation="horizontal"
                    className="absolute bottom-0 w-[200%] max-md:hidden"
                  />
                )}
                {index > 0 && (
                  <DashedLine
                    orientation="horizontal"
                    className="absolute top-0 md:hidden"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { Hero24 }
