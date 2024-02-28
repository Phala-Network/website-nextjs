import { type Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import dedent from 'dedent'

import SubscribeForm from '@/app/_components/SubscribeForm'

const deepdives = [
  {
    name: 'What is Coprocessor',
    description: dedent`
      Modular Coprocessor such as Phat Contracts streamline blockchain tasks, enhancing security and scalability while solving Ethereum's challenges.
    `,
    href: '/posts/what-is-coprocessor',
  },
  {
    name: 'Coprocessor Indexers',
    description: dedent`
      Phala Network's indexers provide seamless data querying, high-performance indexing, and cross-chain data access.
    `,
    href: '/data/coprocessor-indexers-for-data-rich-access',
  },
  {
    name: 'Computation Framework',
    description: dedent`
      Phala Network advances web3 with a trustless computing framework, leveraging Phat Contracts for secure off-chain computations.
    `,
    href: '/posts/coprocessor-trustless-computation-framework',
  },
  {
    name: 'Coprocessor Function Oracles',
    description: dedent`
      Phat Contracts as web3 oracles enable secure, low-cost bridge between on-chain/off-chain data for dApps, offering real-time access and complex computations without high gas fees.
    `,
    href: '/posts/coprocessor-data-fetching-with-web3-function-oracles',
  },
  {
    name: 'Security Verification Framework',
    description: dedent`
      Phala Network boosts blockchain security using ZKPs, TEE with Intel SGX, and MPC, ensuring unmatched privacy, data integrity, and secure collaboration.
    `,
    href: '/posts/coprocessor-security-verification-framework',
  },
]

const challenges = [
  {
    name: 'Challenge 1 - Multi-Chain Deployment',
    description: dedent`
      A key limitation of Multi-Chain smart contracts lies in their restricted interoperability across various blockchains, sidechains, and layer-2 networks.
    `,
    href: '#',
  },
  {
    name: 'Challenge 2 - Oracle Limitation',
    description: dedent`
      Smart contracts reach their full potential with access to real-world data, which, unlike blockchain's consistent integrity, often lacks reliability and determinism.
    `,
    href: '#',
  },
  {
    name: 'Challenge 3 - Off-chain Trust Issues',
    description: dedent`
      Off-chain transactions require trust in operators, posing risks of delays, security issues, and reduced transparency comparedd to on-chain transactions
    `,
    href: '#',
  },
  {
    name: 'Challenge 4 - Hard to Use',
    description: dedent`
      Modularity of Phat Contracts enables it to fit your use cases without having to worry about adjusting your tech stack.
    `,
    href: '#',
  },
]

export const metadata: Metadata = {
  themeColor: 'rgba(232, 233, 234, 1)',
  title: "Coprocessors by Phala Network",
}

export default function Page() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      <section className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 uppercase">
                Modular coprocessor
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Modular Coprocessor of Blockchains
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A coprocessor, like Phat Contracts, empowers developers to build efficient, friendly, and secure, decentralized applications (dApps) with read, compute and proof functionalities bundled together as a service in a modular coprocessor tech stack.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://docs.phala.network/"
                  className="btn btn-xl btn-primary btn-phala"
                  target="_blank"
                >
                  Start Building
                </a>
                <a
                  href="#"
                  className="btn btn-xl btn-secondary btn-blk"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-phalaGreen-400 to-phalaGreen-800 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32 lg:px-8 rounded-3xl bg-black/90">
        <div className="mx-auto text-center">
          <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-5xl">
            How does Modular Coprocessor work?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Modular Coprocessor of blockchains involves data indexing, processing and proof.
          </p>
          <figure className="max-w-full mt-6">
            <img src="/illustrations/coprocessor.jpg" alt="" className="mx-auto" />
          </figure>
        </div>
      </section>

      <section className="py-24 sm:py-32 rounded-3xl bg-black-50/50">
        <div className="safe-viewport mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:text-center">
            <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Deepdive into Modular Coprocessor content series.
            </h2>
          </div>
          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-6xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {deepdives.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative pl-16 border border-phalaGreen-400 rounded-sm p-8",
                    "flex flex-col",
                    "bg-white",
                    "hover:scale-105 transition-transform transform-gpu duration-300",
                  )}
                >
                  <dt className="text-2xl font-bold leading-7 text-phalaGreen-700">
                    {item.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-900">{item.description}</dd>
                </Link>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 rounded-3xl bg-black/90">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:text-center">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-5xl">Modern dApp deployment challenges</h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {challenges.map((feature) => (
                <div key={feature.name} className="flex flex-col gap-4">
                  <dt className="text-2xl font-bold leading-7 bg-gradient-to-br from-phalaPurple-400 to-phalaPurple-600 text-white p-4 rounded-full">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="btn btn-xl btn-primary btn-phala px-16"
            >
              Read docs
            </a>
            <a href="#"
              className="btn btn-xl btn-primary btn-wht px-8"
            >
              Talk to an expert
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#262626] xl:bg-gradient-to-r from-50% to-0% from-[#262626] to-[#f3f3f3]">
        <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
          <SubscribeForm />
          <div className={cn("hidden xl:block xl:h-full xl:bg-[#f3f3f3] row-start-1 col-span-full xl:col-start-14 3xl:col-start-16 -ml-4 relative")}>
            <img src="/home/newsletter-aside.jpg" alt="" className={cn("absolute bottom-0 left-0 aspect-[1860/728]")} />
          </div>
        </div>
      </section>
    </div>
  )
}

