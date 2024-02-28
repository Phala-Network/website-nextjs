import { type Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import SubscribeForm from '@/components/landing-pages/SubscribeForm'
import { ContactUsButton } from './ContactUsButton'

export const metadata: Metadata = {
  themeColor: 'rgba(232, 233, 234, 1)',
  title: "Mirrored Price Feed by Phala Network",
}


function HeroSection01({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <section className={cn("grid grid-cols-1", className)}>
      <div
        className={cn(
          "row-start-1 col-span-full",
          "lg:phat-400 p-9 xl:p-10 3xl:p-0",
        )}
      >
        <div className="relative bg-black-900 overflow-hidden rounded" style={{height: "calc(100cqh - 5rem)"}}>
        </div>
      </div>

      <div className={cn(
        "row-start-1 col-span-full",
        "relative px-6 pt-14 lg:px-8 z-10"
      )}>
        {children}
      </div>
    </section>
  )
}

interface FeaturesSection01Props {
  title: string
  subTitle?: string
  features: {
    name: string
    subTitle?: string
    description: string
  }[]
  CTA?: React.ReactNode
}

function FeatureSection01({ title, subTitle, features, CTA }: FeaturesSection01Props) {
  return (
    <section className="bg-gray-900 py-24 sm:py-32 rounded">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h2 className="mt-2 heading-xl text-white">
            {title}
          </h2>
          {subTitle ? (
          <p className="mt-6 text-lg leading-8 text-gray-300 md:px-5">
            {subTitle}
          </p>
          ) : null}
        </div>
        <div className="mx-auto mt-14 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-4 gap-y-4 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, idx) => (
              <div key={idx} className="card-filled bg-gray-800 border-gray-600 px-6 py-9 flex flex-col gap-4">
                <dt className="flex flex-col gap-1">
                  <h4 className="heading-lg text-phat-400">
                    {feature.name}
                  </h4>
                  {feature.subTitle ? (
                    <p className="heading-md text-gray-200">{feature.subTitle}</p>
                  ) : null}
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {CTA ? (
          <div className={cn("w-full mt-12 flex flex-row justify-center")}>
            {CTA}
          </div>
        ) : null}
      </div>
    </section>
  )
}

interface FrequentlyAskedQuestionsSection01Props {
  title?: string
  records: {
    question: string
    answer: string
  }[]
  CTA?: React.ReactNode
}

function FrequentlyAskedQuestionsSection01({ title = 'Frequently Asked Questions', records, CTA }: FrequentlyAskedQuestionsSection01Props) {
  return (
    <section className="bg-black-50/50 py-24 sm:py-32 rounded">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h2 className="mt-2 heading-xl text-black-900">
            {title}
          </h2>
        </div>
        <div className="mx-auto mt-14 max-w-2xl lg:max-w-none">
          <div className="max-w-xl lg:max-w-none flex flex-col gap-2.5">
            {records.map((record, idx) => (
              <details key={idx} className="d-collapse d-collapse-arrow border border-phatGreen-300 bg-white">
                <summary className="d-collapse-title text-xl font-medium text-phat-400">
                  {record.question}
                </summary>
                <div className={cn("d-collapse-content", "text-base leading-7")}>
                  <p className="flex-auto">{record.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
        {CTA ? (
          <div className={cn("w-full mt-12 flex flex-row justify-center")}>
            {CTA}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default function MirroredPriceFeedPage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      {/* Hero Section */}
      <HeroSection01>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Reliable Price Feed Relayer
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-50">
              Phat Contract is a decentralized, secure, and reliable price feed relayer that mirrors any price feed on Ethereum to any EVM L2 blockchain.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://docs.phala.network/"
                className="btn btn-xl btn-primary btn-phala btn-rounded"
                target="_blank"
              >
                Learn More
              </a>
              <ContactUsButton
                className="btn btn-xl btn-secondary btn-blk btn-rounded"
              >
                Integrate Now
              </ContactUsButton>
            </div>
          </div>
        </div>
      </HeroSection01>

      <FeatureSection01
        title="Unlock Limitless Web3 Potential with Phat Contract"
        features={[
          {
            name: "Flexible",
            description: "Pick any price feed on Ethereum. We mirror it to any EVM L2 blockchain.",
          },
          {
            name: "Effortless",
            description: "Deployed in minutes. Fully compatible with ChainLink ABI. Replace the contract address, and you are ready to ship your dapp.",
          },
          {
            name: "Secure",
            description: "Fully verifiable and unstoppable data transmission. Backed by 35k+ decentralized workers on Phala Network.",
          },
          {
            name: "Always On-time",
            description: "Permitted by the Phala Network, the data is always on-time and reliable.",
          },
        ]}
      />

      <section>
        <h2 className="mt-2 mb-6 heading-xl text-center">
          Under the Hood
        </h2>
        <figure className="mx-auto max-w-5xl border border-blackAlpha-500 overflow-hidden rounded-sm">
          <img src="/illustrations/mirrored-price-feed.jpg" alt="How Mirrored Price Feed Works" />
        </figure>
      </section>

      <FrequentlyAskedQuestionsSection01
        records={[
          {
            "question": "Which blockchains are supported?",
            "answer": "Phat Contract is blockchain agnostic. All the EVM blockchains are supported.",
          },
          {
            "question": "What’s the pricing of the service?",
            "answer": "Upon request",
          },
        ]}
      />

      <SubscribeForm />
    </div>
  )
}
