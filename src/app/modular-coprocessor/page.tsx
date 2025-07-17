import { type Metadata, type Viewport } from 'next'
import { use } from 'react'
import { cn } from '@/lib/utils'
import dedent from 'dedent'

import { HeroSection01, Section, BlogPostCard, SectionHeader, SectionBody, SectionActions, SimpleCard } from '@/components/marketing'
import SubscribeForm from '@/components/marketing/SubscribeForm'
import { ContactUsButton } from '@/components/ContactUsButton'
import { getPostList } from '@/queries/GetPostList'
import { Video } from '@/components/Video'
import { getPageSettings } from '@/queries/GetPageSettings'

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
      Off-chain transactions require trust in operators, posing risks of delays, security issues, and reduced transparency compared to on-chain transactions.
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

export const viewport: Viewport = {
  themeColor: 'rgba(232, 233, 234, 1)',
}

export const metadata: Metadata = {
  title: "Coprocessors by Phala Network",
  alternates: {
    canonical: "https://phala.network/modular-coprocessor",
  }
}

export default function Page() {
  const posts = use(getPostList({
    includeTags: ['Blockchain Coprocessor'],
    sortReversed: true,
  }))
  const pageSettings = use(getPageSettings('/modular-coprocessor'))
  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      <HeroSection01
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
      </HeroSection01>

      <section className="lg:mt-[-15rem] z-10 lg:px-8 xl:px-32">
        <div className="mx-auto text-center rounded bg-black-800 py-16 w-full max-w-6xl">
          <h2 className="text-20 lg:text-32 font-black text-white px-4 lg:px-0">
            How does Phala Network’s Modular Coprocessor work?
          </h2>
          <p className="mt-2.5 text-black-200 px-4 lg:px-0">
            Modular Coprocessor of blockchains involves data indexing, processing and proof.
          </p>
          {pageSettings.videoBlockId ? (
            <Video blockId={pageSettings.videoBlockId} className="max-w-4xl aspect-[896/504] mx-auto mt-12 rounded-sm overflow-hidden" />
          ) : null}
        </div>
      </section>

      <Section theme="light">
        <SectionHeader id="deepdive-into-modular-coprocessor">
          Deepdive into Phala Network’s Modular Coprocessor content series.
        </SectionHeader>
        <SectionBody>
          <dl className="flex flex-col gap-6">
            {(posts || []).map((post, idx) => (
              <BlogPostCard key={post.id || idx} post={post} />
            ))}
          </dl>
        </SectionBody>
      </Section>

      <Section theme="dark">
        <SectionHeader>Modern dApp deployment challenges</SectionHeader>
        <SectionBody>
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {challenges.map((feature) => (
              <SimpleCard title={feature.name} label="Challenge">
                {feature.description}
              </SimpleCard>
            ))}
          </dl>
        </SectionBody>
        <SectionActions>
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
        </SectionActions>
      </Section>

      <Section>
        <SectionHeader>
          Step-by-step Coprocessor Implementation Guide
        </SectionHeader>
        <SectionBody className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <div
            className={cn(
              "flex flex-col items-center",
              "bg-white p-2 rounded-md",
            )}
          >
            <img src="/illustrations/coprocessor-step-by-step-write.png" alt="" className="w-full rounded-sm" />
            <h4 className="mt-6 px-4 font-bold text-xl w-full text-left">
              Write
            </h4>
            <p className="m-4 text-sm">
              Begin your project by leveraging one of our pre-built Oracle templates. Eliminating the need for custom coding, enabling a quicker and more efficient implementation process.
            </p>
          </div>
          <div
            className={cn(
              "flex flex-col items-center",
              "bg-white p-2 rounded-md",
            )}
          >
            <img src="/illustrations/coprocessor-step-by-step-deploy.png" alt="" className="w-full rounded-sm" />
            <h4 className="mt-6 px-4 font-bold text-xl w-full text-left">
              Deploy
            </h4>
            <p className="m-4 text-sm">
              Use the Command Line Interface (CLI) to deploy and seamlessly connect to the Phat Contract dashboard. Simplifying deployment, making it more accessible and user-friendly.
            </p>
          </div>
          <div
            className={cn(
              "flex flex-col items-center",
              "bg-white p-2 rounded-md",
            )}
          >
            <img src="/illustrations/coprocessor-step-by-step-run.png" alt="" className="w-full rounded-sm" />
            <h4 className="mt-6 px-4 font-bold text-xl w-full text-left">
              Run
            </h4>
            <p className="m-4 text-sm">
              After successfully deploying your Phat Contract Oracle, it automatically initiates and runs at regular intervals.
            </p>
          </div>
          <div
            className={cn(
              "flex flex-col items-center",
              "bg-white p-2 rounded-md",
            )}
          >
            <img src="/illustrations/coprocessor-step-by-step-execute.png" alt="" className="w-full rounded-sm" />
            <h4 className="mt-6 px-4 font-bold text-xl w-full text-left">
              Execute
            </h4>
            <p className="m-4 text-sm">
              Data execution takes place every 10 seconds to ensure continuous operation and data flow. Phat Contract will automatically handle the request and response flow once initiated.
            </p>
          </div>
        </SectionBody>
      </Section>

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

