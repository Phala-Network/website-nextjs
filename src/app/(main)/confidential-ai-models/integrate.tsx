'use client'

import { Check } from 'lucide-react'
import Lottie from 'lottie-react'
import { getImageProps } from 'next/image'

import { iconMap } from '@/lib/ai-models'
import { getBackgroundImage } from '@/lib/image'

import traditionalAiAnimation from './traditional-ai-animation.json'

const Integrate = () => {
  const trustCenterImage = getImageProps({
    alt: '',
    width: 535,
    height: 434,
    src: '/home/trust-center.png',
  })

  const trustCenterBackgroundImage = getBackgroundImage(
    trustCenterImage.props.srcSet,
  )
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="font-display mb-6 font-semibold text-foreground text-3xl leading-tight md:text-4xl lg:text-5xl">
            Integrate in Minutes
          </h2>
          <p className="font-display text-muted-foreground leading-6 text-balance">
            The easiest way to add cryptographic privacy to your AI
            applications. Drop-in replacement for OpenAI, Anthropic, and other
            major providers.
          </p>
        </div>
        <div className="mx-auto grid gap-10 lg:grid-cols-3">
          <div className="order-1 flex flex-col h-full min-h-108 items-center rounded-lg bg-background p-8 lg:order-none">
            <Lottie animationData={traditionalAiAnimation} loop={true} />
          </div>
          <div className="order-3 h-full min-h-108 rounded-lg bg-background lg:order-none relative overflow-hidden p-8">
            <p className="text-muted-foreground text-center mb-4">
              Built-in Trust Features
            </p>
            <ul className="flex flex-col gap-3 w-fit mx-auto">
              {[
                'Real-time proof generation',
                'Audit-ready documentation',
                'Customer-facing dashboard',
              ].map((item) => (
                <li
                  className="flex items-center gap-2 text-sm font-medium"
                  key={item}
                >
                  <Check size={16} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="absolute top-44 left-8 w-full min-w-250 p-3 bg-primary/25 rounded-3xl">
              <div
                className="bg-background w-full aspect-video rounded-2xl bg-contain bg-no-repeat bg-top-left border"
                style={{ backgroundImage: trustCenterBackgroundImage }}
              ></div>
            </div>
          </div>
          <div className="order-5 min-h-108 h-full flex flex-col rounded-lg bg-background p-8 lg:order-none">
            <p className="text-muted-foreground text-center mb-4">
              Enterprise Features
            </p>
            <ul className="grid grid-cols-2 gap-3 mt-2">
              {[
                'SLA Support',
                'Custom Models',
                'Volume Discounts',
                'Priority Access',
              ].map((item) => (
                <li
                  className="flex items-center gap-2 text-sm font-medium"
                  key={item}
                >
                  <Check size={16} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center bg-muted px-4 py-3 mt-auto rounded-lg gap-3">
              {/** biome-ignore lint/performance/noImgElement: svg */}
              <img
                src={iconMap.get('deepseek')}
                alt="DeepSeek V3.1"
                className="size-6"
              />
              <div className="flex-1">
                <div className="font-medium text-sm">DeepSeek V3.1</div>
                <div className="text-muted-foreground text-xs">
                  Input / Output
                </div>
              </div>
              <div className="font-medium text-muted-foreground text-sm">
                $0.27 / $1.10
              </div>
            </div>
            <div className="flex justify-between items-center bg-muted px-4 py-3 mt-5 rounded-lg gap-3">
              {/** biome-ignore lint/performance/noImgElement: svg */}
              <img
                src={iconMap.get('qwen')}
                alt="Qwen3 Coder 480B"
                className="size-6"
              />
              <div className="flex-1">
                <div className="font-medium text-sm">Qwen3 Coder 480B</div>
                <div className="text-muted-foreground text-xs">
                  Input / Output
                </div>
              </div>
              <div className="font-medium text-muted-foreground text-sm">
                $0.9 / $1.5
              </div>
            </div>
            <div className="flex justify-between items-center bg-muted px-4 py-3 mt-5 rounded-lg gap-3">
              {/** biome-ignore lint/performance/noImgElement: svg */}
              <img
                src={iconMap.get('openai')}
                alt="GPT OSS 120B"
                className="size-6"
              />
              <div className="flex-1">
                <div className="font-medium text-sm">GPT OSS 120B</div>
                <div className="text-muted-foreground text-xs">
                  Input / Output
                </div>
              </div>
              <div className="font-medium text-muted-foreground text-sm">
                $0.14 / $0.49
              </div>
            </div>
          </div>
          <div className="order-2 max-w-xl lg:order-none">
            <h3 className="mb-3 font-display font-semibold text-foreground text-xl leading-snug md:text-2xl lg:mb-6">
              Drop-in Replacement
            </h3>
            <p className="mb-6 text-muted-foreground">
              Simply replace your API endpoint. Zero code changes required.
              Works with existing SDKs and frameworks.
            </p>
          </div>
          <div className="order-4 max-w-xl lg:order-none">
            <h3 className="mb-3 font-display font-semibold text-foreground text-xl leading-snug md:text-2xl lg:mb-6">
              Built-in Trust Center
            </h3>
            <p className="mb-6 text-muted-foreground">
              Every request generates cryptographic proof. Show customers
              exactly how their data is protected with our Trust Center.{' '}
              <a
                href="https://trust.phala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View demo →
              </a>
            </p>
          </div>
          <div className="order-6 max-w-xl lg:order-none">
            <h3 className="mb-3 font-display font-semibold text-foreground text-xl leading-snug md:text-2xl lg:mb-6">
              Enterprise Ready
            </h3>
            <p className="mb-6 text-muted-foreground">
              Competitive pricing with enterprise features. Scale with
              confidence knowing costs won't surprise you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrate
