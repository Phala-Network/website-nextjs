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
    <section className={cn("grid grid-cols-1", "lg:pt-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      {/* the first screen */}
      <div
        className={cn(
          "row-start-1 row-span-1 col-span-full z-[1]",

          // For mobile
          "flex flex-col gap-4 py-4 pt-28 px-8",
          "bg-gray-200/75 backdrop-blur",

          // For desktop
          "lg:grid lg:grid-cols-12 lg:grid-rows-8 lg:gap-0 lg:py-0 lg:pt-0 lg:px-6",
          "lg:rounded-t rounded-t-none overflow-hidden",
          "lg:bg-transparent lg:backdrop-blur-none",
        )}
      >
        <div className={cn("col-span-8 col-start-2 row-start-2", "flex flex-col justify-end")}>
          <div className="mb-4">
            <span
              className={cn(
                "text-[10px]",
                "bg-gray-100 border border-gray-200 text-gray-500 px-4 py-2 rounded-full lg:text-12 font-medium uppercase tracking-wider leading-10"
              )}
            >
              Confidential Computation with TEE
            </span>
          </div>
        </div>
        <header className={cn("col-span-6 col-start-2 row-start-3 row-span-3", "grow")}>
          <h1 className={cn("text-32 lg:text-40 font-bold lg:font-black tracking-tight lg:tracking-wider")}>
            Build on World's largest Truest Execution Environment (TEE) network
          </h1>
          <h4 className={cn("mt-4", "text-18 text-gray-500")}>
            Our state-of-the-art open GPU TEE infrastructure empowers developers to build secure, confidential, and decentralized applications in both AI and blockchain.
          </h4>
        </header>
        <div className={cn("col-span-8 col-start-2 row-start-7", "pb-24 lg:pb-0")}>
          <div className={"flex flex-col lg:flex-row gap-4 items-center"}>
            <a href="#" className="btn btn-sm lg:btn-md btn-primary !btn-rounded btn-purple w-[178px]">
              Read Docs
            </a>
            <a href="#" className="btn btn-sm lg:btn-md btn-primary !btn-rounded btn-wht w-[178px] border border-black-200">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* responsive hero image */}
      <figure
        className={cn(
          "h-full w-full min-h-screen lg:min-h-[unset]",
          "rounded-t overflow-hidden",
          "row-start-1 row-span-1 col-span-full",
          "untanglable",
          "bg-gray-200",
        )}
        style={{
          backgroundImage: `url(/confidential-computing/hero.jpg)`,
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '85% bottom',
        }}
      >
        <img
          src="/confidential-computing/hero.jpg"
          className={cn(
            "aspect-[1312/560] object-cover w-full h-full",
            "invisible lg:visible",
          )}
          alt=""
        />
      </figure>

      {/* footer */}
      <div className="grid grid-cols-2 gap-y-6 lg:flex lg:flex-row justify-between pr-4 py-5 bg-gray-200 rounded-b row-start-2 col-span-full">
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
    <section className={cn("section--highlights", "grid grid-cols-1", "px-6 pt-14 lg:pt-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <header>
        <h2 className="text-24 lg:text-40 font-black text-black-800 tracking-wider text-center max-w-5xl mb-4 lg:mb-16">
          Current Limitations of Computation in Web3
        </h2>
      </header>
      <main className="flex flex-col gap-4 lg:flex-row lg:gap-12">
        {children}
      </main>
    </section>
  )
}

function Features({ children }: GenericComponent) {
  return (
    <section className={cn("section--features", "px-6 pt-14 lg:pt-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <div className={cn("flex flex-col gap-4 lg:grid grid-cols-12 lg:gap-8", "bg-gray-200", "p-4 lg:p-8 rounded-md")}>
        <header className="col-span-5 p-8">
          <h2 className="text-24 lg:text-40 font-black text-black-800 tracking-wider max-w-5xl mb-4 lg:mb-16">
            The Need for TEE
          </h2>
          <h4 className="text-18 lg:text-24 font-bold text-gray-800 mb-2 lg:mb-6">
            What is TEE?
          </h4>
          <p className="text-16 lg:text-18 font-medium text-gray-600 lg:leading-8">
            Trusted Execution Environments (TEE) create secure enclaves for processing sensitive data, allowing applications to execute securely in an isolated environment, without trust the privileged software, such as hypervisors or host operating systems.
          </p>
        </header>
        <main className="col-span-7 flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-4">
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
    <article className={cn("lg:flex-row gap-4 p-4 lg:gap-8 lg:p-8 rounded border border-blackAlpha-200", className)}>
      <aside className="float-left lg:float-none w-7 h-7 basis-7 lg:w-16 lg:basis-16 grow-0 shrink-0">
        <img src={icon} alt="" className={cn('w-full h-full aspect-square')} />
      </aside>
      <main>
        <h3 className="pl-10 lg:pl-0 text-18 lg:text-24 font-bold text-black-800 mb-4">{title}</h3>
        <p className="text-14 lg:text-18 font-medium text-gray-500 leading-8 hyphens-auto">
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
    <section className={cn("section--case-studies", "px-6 pt-14 lg:pt-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <header>
        <h2 className="text-24 lg:text-40 font-black text-black-800 max-w-4xl mb-4 lg:mb-10 mx-auto text-center">
          Use causes for utilizing TEE to bring full privacy and security
        </h2>
        <h4 className="text-16 lg:text-20 font-medium text-gray-500 tracking-wide text-center mb-6 lg:mb-16">
          Practical Real-world Applications of TEE
        </h4>
      </header>
      <main className={cn("flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-5 lg:gap-5")}>
        {children}
      </main>
    </section>
  )
}

function GetStarted() {
  return (
    <section className={cn("section--get-started", "px-6 pt-14 lg:pt-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <header>
        <h2 className="text-24 lg:text-40 font-black text-black-800 max-w-5xl mb-4 lg:mb-10 mx-auto text-center">
          Start Building with Phala TEE Multi-Proof SDK
        </h2>
        <h4 className="text-16 lg:text-20 font-medium text-gray-500 tracking-wide text-center mb-6 lg:mb-16">
          Simplify Task Execution and TEE-Proof Generation with the Multi-Proof JS SDK!
        </h4>
      </header>
      <figure className="aspect-[1312/690] rounded overflow-hidden mb-6 lg:mb-16">
        <img src="/confidential-computing/get-started.jpg" alt="" className="w-full h-full" />
      </figure>
      <footer className="flex flex-col lg:flex-row gap-4 justify-center">
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
    includeTags: ['TEE'],
    sortReversed: false,
    pageSize: 3,
  }))
  return (
    <section className={cn("section--latest-news", "px-6 py-14 lg:py-28 lg:px-10", "mx-auto max-w-[1760px]")}>
      <header>
        <h2 className="text-24 lg:text-40 font-black text-black-800 max-w-5xl mb-4 lg:mb-10 mx-auto text-center">
          Latest Developments
        </h2>
      </header>
      <dl className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 lg:gap-6 lg:mt-16">
        {(posts || []).map((post, idx) => (
          <BlogPostCard key={post.id || idx} post={post} dir="col" theme="light2" />
        ))}
      </dl>
      <div className="mt-16 flex flex-col lg:flex-row gap-4 justify-center">
        <Link href="/tags/TEE" className="btn btn-rounded btn-purple px-12">
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
