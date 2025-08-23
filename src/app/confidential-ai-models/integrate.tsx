import { ArrowDown, Check, Unlock } from 'lucide-react'
import { getImageProps } from 'next/image'

import { Badge } from '@/components/ui/badge'
import { iconMap } from '@/lib/ai-models'
import { getBackgroundImage } from '@/lib/image'

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
          <h2 className="mb-6 text-3xl font-medium lg:text-4xl">
            Integrate in Minutes
          </h2>
          <p className="text-muted-foreground text-balance">
            The easiest way to add cryptographic privacy to your AI
            applications. Drop-in replacement for OpenAI, Anthropic, and other
            major providers.
          </p>
        </div>
        <div className="mx-auto grid gap-10 lg:grid-cols-3">
          <div className="order-1 flex flex-col gap-4 h-full min-h-108 items-center rounded-lg bg-muted p-8 lg:order-none">
            <div className="flex flex-col gap-4 mb-4 items-center">
              <p className="text-sm text-muted-foreground">
                Supported providers:
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">OpenAI</Badge>
                <Badge variant="outline">Anthropic</Badge>
                <Badge variant="outline">Google</Badge>
                <Badge variant="outline">Meta</Badge>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 flex flex-col gap-2 items-start w-full overflow-hidden mt-auto">
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Unlock className="size-4" /> Traditional AI
              </div>
              <code className="text-destructive bg-destructive/10 text-xs p-1 rounded-xs">
                api.openai.com/v1/chat/completions
              </code>
            </div>

            <ArrowDown size={24} className="text-muted-foreground" />

            <div className="bg-card rounded-lg p-4 flex flex-col gap-2 items-start w-full overflow-hidden">
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                {/** biome-ignore lint/performance/noImgElement: svg */}
                <img
                  src="/confidential-ai-models/phala.svg"
                  alt="Phala Confidential AI"
                  className="size-4"
                />{' '}
                Phala Confidential AI
              </div>
              <code className="text-green-500 bg-green-500/10 text-xs p-1 rounded-xs">
                encrypted-ai.phala.com/v1/chat/completions
              </code>
            </div>
          </div>
          <div className="order-3 h-full min-h-108 rounded-lg bg-muted lg:order-none relative overflow-hidden p-8">
            <ul className="flex flex-col gap-2 w-fit mx-auto">
              {[
                'Real-time proof generation',
                'Audit-ready documentation',
                'Customer-facing dashboard',
              ].map((item) => (
                <li
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  key={item}
                >
                  <Check size={16} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="absolute top-44 left-8 w-full min-w-250 p-3 bg-primary/50 rounded-3xl">
              <div
                className="bg-background w-full aspect-video rounded-2xl bg-contain bg-no-repeat bg-top-left border"
                style={{ backgroundImage: trustCenterBackgroundImage }}
              ></div>
            </div>
          </div>
          <div className="order-5 min-h-108 h-full flex flex-col rounded-lg bg-muted p-8 lg:order-none">
            <p className="text-muted-foreground text-center">
              Enterprise features
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-2">
              {[
                'SLA Support',
                'Custom Models',
                'Volume Discounts',
                'Priority Access',
              ].map((item) => (
                <li
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  key={item}
                >
                  <Check size={16} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center bg-card px-4 py-3 mt-auto rounded-lg gap-3">
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
            <div className="flex justify-between items-center bg-card px-4 py-3 mt-5 rounded-lg gap-3">
              {/** biome-ignore lint/performance/noImgElement: svg */}
              <img
                src={iconMap.get('qwen')}
                alt="Qwen3 Coder"
                className="size-6"
              />
              <div className="flex-1">
                <div className="font-medium text-sm">Qwen3 Coder</div>
                <div className="text-muted-foreground text-xs">
                  Input / Output
                </div>
              </div>
              <div className="font-medium text-muted-foreground text-sm">
                $0.9 / $1.5
              </div>
            </div>
            <div className="flex justify-between items-center bg-card px-4 py-3 mt-5 rounded-lg gap-3">
              {/** biome-ignore lint/performance/noImgElement: svg */}
              <img
                src={iconMap.get('meta')}
                alt="Llama-3.3-70B"
                className="size-6"
              />
              <div className="flex-1">
                <div className="font-medium text-sm">Llama 3.3 70B</div>
                <div className="text-muted-foreground text-xs">
                  Input / Output
                </div>
              </div>
              <div className="font-medium text-muted-foreground text-sm">
                $0.1 / $0.25
              </div>
            </div>
          </div>
          <div className="order-2 max-w-xl lg:order-none">
            <h3 className="mb-3 text-2xl font-medium lg:mb-6">
              Drop-in Replacement
            </h3>
            <p className="mb-6 text-muted-foreground">
              Simply replace your API endpoint. Zero code changes required.
              Works with existing SDKs and frameworks.
            </p>
          </div>
          <div className="order-4 max-w-xl lg:order-none">
            <h3 className="mb-3 text-2xl font-medium lg:mb-6">
              Built-in Trust Center
            </h3>
            <p className="mb-6 text-muted-foreground">
              Every request generates cryptographic proof. Show customers
              exactly how their data is protected with our Trust Center.{' '}
              <a
                href="https://tee-visualization.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View demo →
              </a>
            </p>
          </div>
          <div className="order-6 max-w-xl lg:order-none">
            <h3 className="mb-3 text-2xl font-medium lg:mb-6">
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
