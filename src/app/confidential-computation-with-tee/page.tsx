import { use } from 'react'
import Link from 'next/link'
import { type Metadata } from 'next'
import { FaArrowRight } from "react-icons/fa6"

import { type GenericComponent } from '@/types/components'
import { cn } from '@/lib/utils'
import { getPostList } from '@/queries/GetPostList'
import { getComputationSquid } from '@/queries/GetComputationSquid'
import { Stats } from '@/components/Stats'
import { BlogPostCard } from '@/components/marketing'

import './style.css'

interface CardComponent {
  icon: string,
  title: string,
  description: string,
}

function Card({ icon, title, description }: CardComponent) {
  return (
    <div
      className={cn(
        `w-full max-w-[var(--card-container-max-width)] rounded-sm shadow-xl`,
        "bg-white border border-black-100",
        "p-10 flex flex-col gap-6"
      )}
    >
      <img src={icon} alt="" className={cn(`aspect-square max-w-[var(--card-image-max-width)] mb-4`)} />
      <h3 className="text-24 font-bold text-black-800">{title}</h3>
      <p className="text-18 font-medium text-gray-500">{description}</p>
    </div>
  )
}

//
//
//

export const metadata: Metadata = {
  themeColor: 'rgba(232, 233, 234, 1)',
  title: "Confidential Computation with TEE",
  description: "The TEE (Trusted Execution Environment) is a security technology that enables secure and trusted execution of code in a hardware-based environment. It is designed to protect sensitive data and ensure the integrity of the system.",
  alternates: {
    canonical: "https://phala.network/confidential-computation-with-tee",
  },
}

function Hero() {
  const { onlineWorkers, vCpu, crossChainTx, tx } = use(getComputationSquid())
  return (
    <section className={cn("grid grid-cols-1", "px-6 pt-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <div className={cn("row-start-1 row-span-1 col-span-full z-[1]", "grid grid-cols-12 grid-rows-8")}>
        <div className={cn("col-span-8 col-start-2 row-start-2", "flex flex-col justify-end")}>
          <div className="mb-4">
            <span className="bg-gray-100 border border-gray-200 text-gray-500 px-4 py-2 rounded-full text-12 font-medium uppercase tracking-wider leading-10">
              Confidential Computation with TEE
            </span>
          </div>
        </div>
        <header className={cn("col-span-6 col-start-2 row-start-3 row-span-3")}>
          <h1 className={cn("text-40 font-black tracking-wider")}>
            Build on World's largest Truest Execution Environment (TEE) network
          </h1>
          <h4 className={cn("mt-4", "text-18 text-gray-500")}>
            Our state-of-the-art open GPU TEE infrastructure empowers developers to build secure, confidential, and decentralized applications in both AI and blockchain.
          </h4>
        </header>
        <div className={cn("col-span-8 col-start-2 row-start-7")}>
          <div className={"flex flex-row gap-4"}>
            <a href="#" className="btn btn-primary btn-rounded btn-purple w-[178px]">
              Read Docs
            </a>
            <a href="#" className="btn btn-primary btn-rounded btn-wht w-[178px]">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <figure className={cn("aspect-[1312/560] rounded-t overflow-hidden", "row-start-1 row-span-1 col-span-full")}>
        <img
          src="/confidential-computing/hero.jpg"
        className="object-cover w-full h-full"
          alt=""
        />
      </figure>

      <div className="flex flex-row justify-between pr-4 py-5 bg-gray-200 rounded-b row-start-2 col-span-full">
        <Stats name="Online Workers" icon="/icons/hero-online-worker.png">
          {onlineWorkers.toLocaleString('en-US')}
        </Stats>
        <Stats name="Compute" icon="/icons/hero-compute.png">
          {vCpu.toLocaleString('en-US')} vCPU
        </Stats>
        <Stats name="Cross-Chain TX" icon="/icons/hero-cross-chain-tx.png">
          {crossChainTx.toLocaleString('en-US')}
        </Stats>
        <Stats name="TX" icon="/icons/hero-tx.png">
          {tx.toLocaleString('en-US')}
        </Stats>
      </div>
    </section>
  )
}

function Highlights({ children }: GenericComponent) {
  return (
    <section className={cn("section--highlights", "grid grid-cols-1", "px-6 pt-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <header>
        <h2 className="text-40 font-black text-black-800 tracking-wider text-center max-w-5xl mb-16">
          Current Limitations of Computation in Web3
        </h2>
      </header>
      <main className="flex flex-row gap-12">
        {children}
      </main>
    </section>
  )
}

function Features({ children }: GenericComponent) {
  return (
    <section className={cn("section--features", "px-6 pt-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <div className={cn("grid grid-cols-12 gap-8", "bg-gray-200", "p-8 rounded-md")}>
        <header className="col-span-5 p-8">
          <h2 className="text-40 font-black text-black-800 tracking-wider max-w-5xl mb-16">
            The Need for TEE
          </h2>
          <h4 className="text-24 font-bold text-gray-800 mb-6">
            What is TEE?
          </h4>
          <p className="text-18 font-medium text-gray-600 leading-8">
            Trusted Execution Environments (TEE) create secure enclaves for processing sensitive data, allowing applications to execute securely in an isolated environment, without trust the privileged software, such as hypervisors or host operating systems.
          </p>
        </header>
        <main className="col-span-7 grid grid-cols-2 gap-4">
          {children}
        </main>
      </div>
    </section>
  )
}

function Case({ icon, title, ctaLink, ctaText = 'Learn more', className, children }: GenericComponent & {
  icon: string,
  title: string,
  ctaLink?: string,
  ctaText?: string,
}) {
  return (
    <article className={cn("flex flex-row gap-8 p-8 rounded border border-blackAlpha-200", className)}>
      <aside className="w-16 basis-16 grow-0 shrink-0">
        <img src={icon} alt="" className={cn('w-16 h-16 aspect-square')} />
      </aside>
      <main>
        <h3 className="text-24 font-bold text-black-800 mb-4">{title}</h3>
        <p className="text-18 font-medium text-gray-500 leading-8 hyphens-auto">
          {children}
        </p>
        {ctaLink ? (
          <a href={ctaLink} className="inline-flex gap-2 items-center text-purple-500 !no-underline text-14 font-medium mt-8 hover:!underline">
            {ctaText}
            <FaArrowRight className="w-3 h-3" />
          </a>
        ) : null}
      </main>
    </article>
  )
}

function CaseStudies({ children }: GenericComponent) {
  return (
    <section className={cn("section--case-studies", "px-6 pt-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <header>
        <h2 className="text-40 font-black text-black-800 max-w-4xl mb-10 mx-auto text-center">
          Use causes for utilizing TEE to bring full privacy and security
        </h2>
        <h4 className="text-20 font-medium text-gray-500 tracking-wide text-center mb-16">
          Practical Real-world Applications of TEE
        </h4>
      </header>
      <main className={cn("grid grid-cols-2 grid-rows-5 gap-5")}>
        {children}
      </main>
    </section>
  )
}

function GetStarted() {
  return (
    <section className={cn("section--get-started", "px-6 pt-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <header>
        <h2 className="text-40 font-black text-black-800 max-w-5xl mb-10 mx-auto text-center">
          Start Building with Phala TEE Multi-Proof SDK
        </h2>
        <h4 className="text-20 font-medium text-gray-500 tracking-wide text-center mb-16">
          Simplify Task Execution and TEE-Proof Generation with the Multi-Proof JS SDK!
        </h4>
      </header>
      <figure className="aspect-[1312/690] rounded overflow-hidden mb-16">
        <img src="/confidential-computing/get-started.jpg" alt="" className="w-full h-full" />
      </figure>
      <footer className="flex flex-row gap-4 justify-center">
        <a href="#" className="btn btn-rounded btn-purple px-12">
          Read Docs
        </a>
        <a href="#" className="btn btn-rounded btn-wht px-12 border border-black-800">
          Get In Touch
        </a>
      </footer>
    </section>
  )
}

function LatestNews() {
  const posts = use(getPostList({
    includeTags: ['AI-Agent Contract'],
    sortReversed: false,
  }))
  return (
    <section className={cn("section--latest-news", "px-6 py-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <header>
        <h2 className="text-40 font-black text-black-800 max-w-5xl mb-10 mx-auto text-center">
          Latest Developments
        </h2>
      </header>
      <dl className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
        {(posts || []).map((post, idx) => (
          <BlogPostCard key={post.id || idx} post={post} dir="col" theme="light2" />
        ))}
      </dl>
      <div className="mt-16 flex flex-col gap-6 w-[180px] mx-auto">
        <Link href="#" className="btn btn-rounded btn-purple px-12">
          More
        </Link>
      </div>
    </section>
  )
}


export default function Page() {
  return (
    <>
      <div className={cn("page--confidential-computation-with-tee", "flex flex-col gap-8 sm:gap-16")}>
        <Hero />

        <Highlights>
          <Card
            icon="/confidential-computing/icon-zkp.png"
            title="Limitations of single ZKP-based proving system"
            description="ZK can not guarantee privacy in public state sharing scenario, the rollup sequencer can see all data even if they prove the computation done correctly."
          />
          <Card
            icon="/confidential-computing/icon-fhe.png"
            title="Limitations of single FHE-based proving system"
            description="FHE cannot prove that the computations performed as expected, also the decryption integrity can not guaranteed by the companioned MPC."
          />
        </Highlights>

        <Features>
          <Card
            icon="/confidential-computing/icon-data-sharing.png"
            title="Data Sharing"
            description="Phala TEE supports confidential data exchange use cases, such as MEV (Maximal Extractable Value), blockchain games, and AI model training."
          />
          <Card
            icon="/confidential-computing/icon-availability.png"
            title="Availability"
            description="With 35,000 TEE workers, Phala’s Phat Contract is programmable to meet the needs of various blockchain projects, ensuring robust availability."
          />
          <Card
            icon="/confidential-computing/icon-trust-of-multiple-parties.png"
            title="Trust of Multiple Parties"
            description="Phala TEE ensures your application, project, or blockchain use case remains operational and free from legislative risks, maintaining trust across multiple parties."
          />
          <Card
            icon="/confidential-computing/icon-sdk.png"
            title="Out-of-Box SDK"
            description="Our SDKs for Rust and JavaScript enable developers to launch their applications on our TEE network quickly, often within hours."
          />
        </Features>

        <CaseStudies>
          <Case
            className="col-span-1 col-start-1 row-span-2 row-start-1"
            icon="/confidential-computing/icon-case-dagi.png"
            title="Build Confidential dAGI"
            ctaLink="#"
          >
            <ul className="list-disc list-outside ml-6 flex flex-col gap-2">
              <li>Run AI Models Inside TEE</li>
              <li>RedPill by Phala Network runs AI models securely in a TEE, ensuring data privacy and integrity.</li>
            </ul>
          </Case>
          <Case
            className="col-span-1 col-start-2 row-span-3 row-start-1"
            icon="/confidential-computing/icon-case-web3-consumer-apps.png"
            title="Build Secure Web3 Consumer Apps"
            ctaLink="#"
          >
            <ul className="list-disc list-outside ml-6 flex flex-col gap-2">
              <li>
                <strong>Gaming</strong>: Use Phala TEE for secure, confidential blockchain games, protecting player data and in-game assets from unauthorized access.
              </li>
              <li>
                <strong>Social Apps</strong>: Develop social apps with Phala TEE to ensure user privacy and secure data exchanges, keeping interactions private.
              </li>
              <li>
                <strong>MEV DeFi</strong>: Integrate Phala TEE in DeFi apps to safeguard against MEV exploits, ensuring secure and transparent financial transactions.
              </li>
            </ul>
          </Case>
          <Case
            className="col-span-1 col-start-1 row-span-2 row-start-3"
            icon="/confidential-computing/icon-case-fhe.png"
            title="Build Coprocessor for FHE"
            ctaLink="#"
          >
            <p>
              TEE can eliminate the collusion risk exist in MPC network, and prove the validity of encryption and decryption without rely on ZK.
            </p>
          </Case>
          <Case
            className="col-span-1 col-start-2 row-span-2 row-start-4"
            icon="/confidential-computing/icon-case-2fa-zkrollups.png"
            title="Build 2FA for zkRollups"
            ctaLink="#"
          >
            <p>
              To hedge the bugs in ZK implementation, TEE can be used as a 2-factor verifier to zk-Rollups. Inspired by Vitalik Buterin's <Link href="https://hackmd.io/@vbuterin/zk_slides_20221010#/" target="_blank" title="Hardening rollups with multi-proofs">presentation</Link> and a recent <Link href="https://ethresear.ch/t/2fa-zk-rollups-using-sgx/14462" target="_blank" title="2FA zk-rollups using SGX">post</Link> by Justin Drake.
            </p>
          </Case>
          <Case
            className="col-span-1 col-start-1 row-span-1 row-start-5 bg-gray-100"
            icon="/confidential-computing/icon-case-all.png"
            title="Explore all use cases"
          >
            <p className="text-purple-500">
              Check out our documentation and <Link href="https://github.com/Phala-Network/phat-quickjs/tree/master/WapoJS/examples" target="_blank">GitHub examples</Link>.
            </p>
          </Case>
        </CaseStudies>

        <GetStarted />

        <LatestNews />
      </div>
    </>
  )
}
