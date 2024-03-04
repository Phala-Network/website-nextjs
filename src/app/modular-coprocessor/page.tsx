import { type Metadata } from 'next'
import { use } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import dedent from 'dedent'

import { HeroSection } from '@/components/marketing/Hero01'
import SubscribeForm from '@/components/marketing/SubscribeForm'
import { ContactUsButton } from '@/components/ContactUsButton'
import { getPostList } from '@/queries/GetPostList'

const challenges = [
  {
    name: 'Multi-Chain Deployment',
    description: dedent`
      A key limitation of Multi-Chain smart contracts lies in their restricted interoperability across various blockchains, sidechains, and layer-2 networks.
    `,
    href: '#',
  },
  {
    name: 'Oracle Limitation',
    description: dedent`
      Smart contracts reach their full potential with access to real-world data, which, unlike blockchain's consistent integrity, often lacks reliability and determinism.
    `,
    href: '#',
  },
  {
    name: 'Off-chain Trust Issues',
    description: dedent`
      Off-chain transactions require trust in operators, posing risks of delays, security issues, and reduced transparency comparedd to on-chain transactions
    `,
    href: '#',
  },
  {
    name: 'Hard to Use',
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
  const posts = use(getPostList({
    includeTags: ['Blockchain Coprocessor'],
    sortReversed: true,
  }))
  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      <HeroSection
        label="modular coprocessor"
        title="Modular Coprocessor of Blockchains"
        subTitle="A coprocessor, like Phat Contracts, empowers developers to build efficient, friendly, and secure, decentralized applications (dApps) with read, compute and proof functionalities bundled together as a service in a modular coprocessor tech stack."
      >
        <a
          href="https://docs.phala.network/"
          className="btn btn-primary btn-phala btn-rounded min-w-52"
          target="_blank"
        >
          Start Building
        </a>
        <a
          href="#deepdive-into-modular-coprocessor"
          className="btn btn-secondary btn-blk btn-rounded min-w-52"
        >
          Explore More
        </a>
      </HeroSection>

      <section className="mt-[-15rem] z-10 px-32">
        <div className="mx-auto text-center rounded bg-black-800 py-16">
          <h2 className="text-32 font-black text-white">
            How does Modular Coprocessor work?
          </h2>
          <p className="text-black-200">
            Modular Coprocessor of blockchains involves data indexing, processing and proof.
          </p>
          <figure className="max-w-full mt-12">
            <img src="/illustrations/coprocessor.jpg" alt="" className="mx-auto rounded-sm" />
          </figure>
        </div>
      </section>

      <section className="py-20 rounded bg-black-50">
        <div className="safe-viewport mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:text-center">
            <h2 id="deepdive-into-modular-coprocessor" className="mt-2 text-40 font-black text-black-800">
              Deepdive into Modular Coprocessor content series.
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-6xl">
            <dl className="flex flex-col gap-6">
              {(posts || []).map((post, idx) => (
                <Link
                  key={post.id || idx}
                  href={post.path}
                  className={cn(
                    "relative rounded-sm p-2",
                    "flex flex-row gap-10",
                    "bg-white",
                    "group",
                  )}
                  shallow
                >
                  <div className={"w-[360px] h-[195px] overflow-hidden rounded-sm flex-grow shrink-0"}>
                    <img
                      src={post.cover ? post.cover :"/blog/default_cover.jpg"}
                      alt={post.title}
                      className={cn("w-full h-full aspect-[360/195] group-hover:scale-105 transition-transform transform-gpu duration-200")}
                    />
                  </div>
                  <div className="py-4 pr-6">
                    <h4 className="text-24 font-bold text-black-800">
                      {post.title}
                    </h4>
                    <div className="mt-4 text-base text-black-800">{post.summary}</div>
                    <div
                      className={cn(
                        // "mt-2.5 uppercase font-medium text-black-400 text-sm underline",
                        "d-btn d-btn-link -ml-4"
                      )}
                    >
                      READ MORE
                    </div>
                  </div>
                </Link>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-20 rounded bg-black-900">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:text-center">
            <h2 className="text-40 font-black text-white">Modern dApp deployment challenges</h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-6xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {challenges.map((feature) => (
                <div key={feature.name} className="flex flex-col gap-4 p-8 border border-whiteAlpha-200 bg-whiteAlpha-50 rounded">
                  <dt>
                    <span className="font-bold text-black-800 bg-phalaGreen-500 py-1 px-5 rounded-xs">Challenge</span>
                    <h4 className="text-24 font-bold text-white mt-4">{feature.name}</h4>
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
              href="https://docs.phala.network"
              className="btn btn-xl btn-primary btn-phala btn-rounded min-w-60"
            >
              Read docs
            </a>
            <ContactUsButton
              className="btn btn-xl btn-primary btn-wht btn-rounded min-w-60 px-0"
            >
              Talk to an expert
            </ContactUsButton>
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

