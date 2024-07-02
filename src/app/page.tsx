import { type Metadata } from 'next'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { getPhatLists } from '@/lib/phat_lists'
import { ContactUsForm } from '@/components/ContactUsForm'
import SubscribeForm from '@/components/marketing/SubscribeForm'
import { YouTubeVideo } from '@/components/YouTubeVideo'

import { AreaOfInterestTab, AreaOfInterestTabPanel } from './_components/AreaOfInterestTabs'
import { StatsCard } from './_components/StatsCard'
import { SectionHowItWorks } from './_components/SectionHowItWorks'
import { SectionHero } from './_components/SectionHero'
import { SectionHighlights } from './_components/SectionHighlights'
import SectionFeatures from './_components/SectionFeatures'
import { ContactUsButton } from '@/components/ContactUsButton'

import './home.css'
import './_components/section-phat-contract-highlight.css'

//
// Section Pitch Pionner
//

function SectionPitchPioneer() {
  return (
    <section id="section-pitch-pionner">
      <div className={cn(
        "safe-viewport py-10 lg:py-32 px-8 lg:px-16",
        "grid grid-cols-1 lg:gap-x-10 lg:grid-cols-12 gap-y-10",
        "border border-solid border-black-100 rounded",
        "bg-black-100",
      )}>
        <header
          className={cn(
            "row-start-1 col-start-1 col-span-full",
            "flex flex-col gap-5",
            "pb-10 lg:pb-20"
          )}
        >
          <h2 className={cn("text-3xl lg:text-6xl text-black font-black")}>Cutting Edge Web3 Usecases</h2>
          <div>
            <Link href="/tags/Usecases" className={cn("btn btn-primary btn-md btn-purple btn-rounded")}>
              Learn More
            </Link>
          </div>
        </header>
        <main className={cn("row-start-2 invisible col-span-full xl:visible xl:col-start-6 xl:col-span-7")}>
          <div className={cn("hidden xl:grid grid-cols-6 grid-rows-8 gap-2.5", "text-white text-xl font-extrabold", "mx-auto")}>
            <AreaOfInterestTab idx={0} className="bento-1">
              <h4 className="text-20 font-bold">Trustless MEV</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={1} className="bento-2">
              <h4 className="uppercase">Account Abstraction</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={2} className="bento-7">
              <h4 className="uppercase">L2 Sequencer</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={3} className="bento-4">
              <h4 className="uppercase">Decentralized API</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={4} className="bento-5">
              <h4 className="uppercase">Web3 AI</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={5} className="bento-6">
              <h4 className="uppercase">Distributed Computing</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={6} className="bento-9">
              <h4 className="uppercase">Gateway & CDN</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={7} className="bento-3">
              <h4 className="uppercase">Relayers & Validators</h4>
            </AreaOfInterestTab>
          </div>
        </main>

        <aside className={cn("row-start-2 col-span-full xl:col-start-1 xl:col-span-5")}>
          <div className={cn("h-full")}>
            <AreaOfInterestTabPanel idx={0} title="Trustless MEV">
              <p>Trustless MEV refers to the concept of eliminating reliance on trusted service providers, such as Flashbot, in the Miner Extractable Value (MEV) ecosystem. Currently, 80% of Ethereum blocks are built by MEV, but the existing MEV stack depends on these trusted providers.</p>
              <p>The problem with this approach is that it creates a single point of trust in the MEV ecosystem. Researchers have suggested using Secure Enclaves, like Intel SGX, to minimize this trust dependency.</p>
              <p>Phala Network, an off-chain compute network powered by Secure Enclaves, can be utilized to build the MEV core stack with minimal trust assumptions. This enables a more secure and trustless MEV ecosystem for developers and users alike.</p>
            </AreaOfInterestTabPanel>
            <AreaOfInterestTabPanel idx={1} title="Account Abstraction">
              <p>Account Abstraction is the idea of using smart contract wallets as first-class citizens instead of Externally Owned Accounts (EOAs), alongside a reliable transaction relaying infrastructure. This allows third parties to execute transactions on behalf of users, enabling features such as wallet recovery and batched transactions.</p>
              <p>However, adoption of smart contract wallets has been limited due to the lack of a common standard for interaction between smart contracts and dApps. This results in users still relying on their EOAs for transactions.</p>
              <p>Phala Network’s Phat Contract allows developers to create seamless user experiences by enabling registration via social accounts or gasless dApp usage. It also allows developers to sponsor transactions on behalf of users, eliminating the need for users to worry about gas fees.</p>
            </AreaOfInterestTabPanel>
            <AreaOfInterestTabPanel idx={2} title="L2 Sequencer">
              <p>Layer 2 solutions aim to scale applications by handling transactions off the Ethereum Mainnet (Layer 1) while maintaining the decentralized security of the Mainnet. However, rollups, a popular Layer 2 solution, introduce issues like monopoly pricing, censorship, and fragmented liquidity between rollups.</p>
              <p>Phala Network can provide a scalable and secure solution by leveraging its high-performance and confidentiality features. This enables developers to create application-tailored rollups that are fast, reliable, and maintain the composability of the Ethereum ecosystem.</p>
            </AreaOfInterestTabPanel>
            <AreaOfInterestTabPanel idx={3} title="Decentralized API">
              <p>Decentralized APIs can enhance the trustworthiness of various services, such as Infura, Graph, Alchemy, and RPC APIs. Phala Network enables the aggregation of API services or RPC services with trustless algorithms, providing use cases like verifiable RPC aggregator switchers and trustless CDN management programs.</p>
              <p>This allows developers to secure their websites, APIs, and Internet applications while maintaining a decentralized and trustless environment.</p>
            </AreaOfInterestTabPanel>
            <AreaOfInterestTabPanel idx={4} title="Web3 AI">
            <p>Web3 AI refers to the integration of decentralized AI systems with blockchain technology. This enables distributed model training, ensuring data privacy while benefiting from diverse data sources. It also allows for collaborative model development, where multiple parties can work on AI models without sharing sensitive data.</p>
            <p>Phala Network can facilitate the development of Web3 AI systems by providing a secure and transparent platform for AI model training, updates, and access. Smart contracts on Phala Network can ensure adherence to predefined rules and agreements, while the immutable nature of the blockchain provides an auditable record of these processes.</p>
            </AreaOfInterestTabPanel>
            <AreaOfInterestTabPanel idx={5} title="Distributed Computing">
              <p>Distributed computing enables multiple computers to work together to solve complex problems, making a computer network appear as a powerful single computer. It can be used to encrypt large volumes of data, solve complex equations, and render high-quality animations.</p>
              <p>Phala Network offers fast, cost-efficient, and secure computation by running jobs where data is generated and stored. It can streamline existing workflows without extensive rewriting by running arbitrary Docker containers and WebAssembly (WASM) images as tasks.</p>
            </AreaOfInterestTabPanel>
            <AreaOfInterestTabPanel idx={6} title="Gateway & CDN">
              <p>Centralized CDN services can lead to issues like single points of failure, data leaks, and centralized control. Phala Network provides a decentralized content and application delivery network that accelerates the delivery of Web3 content and apps.</p>
              <p>By connecting with decentralized storage services like IPFS, Filecoin, and Arweave, Phala Network can create a transparent, content-addressable, and publicly available CDN. This ensures a trustless, censorship-resistant, and open-source environment for content delivery.</p>
            </AreaOfInterestTabPanel>
            <AreaOfInterestTabPanel idx={7} title="Relayers & Validators">
              <p>The relay model for cross-chain transactions abstracts data verification into a consensus problem at the relay layer. A relay chain is developed for interoperability, with relay nodes deployed in each blockchain network to monitor and synchronize transaction data.</p>
              <p>Phala Network can help developers build inter-chain-native dApps with efficient liquidity utilization, coherent application logic, and shared states with cross-chain verifications. This eliminates the need for multiple isolated smart contract deployments on different blockchains, streamlining the development process.</p>
            </AreaOfInterestTabPanel>

            <div className={cn("border-t border-solid border-whiteAlpha-700 mt-4 hidden")}>
              <h3 className={cn("text-2xl font-bold leading-normal py-8")}>We help you build your future.<br />Share your vision:</h3>
              <form className="flex flex-col gap-2.5">
                <div className="flex flex-row gap-2.5">
                  <input placeholder="Contact name" className="py-2.5 px-5 bg-transparent rounded-lg border border-solid border-whiteAlpha-500 flex-1 w-1/2" />
                  <input placeholder="nick@domain.ltd" className="py-2.5 px-5 bg-transparent rounded-lg border border-solid border-whiteAlpha-500 flex-1 w-1/2" />
                </div>
                <div>
                  <textarea className="py-2.5 px-5 bg-transparent rounded-lg border border-solid border-whiteAlpha-500 w-full" rows={6} />
                </div>
                <div className="flex flex-row justify-end">
                  <button type="submit" className="btn text-black bg-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </aside>

        <div className={cn("rounded p-8 bg-white mt-8 lg:mt-32", "col-span-full", "grid grid-cols-1 lg:grid-cols-12")}>
          <ContactUsForm
            className={cn("row-start-1 col-span-full lg:col-span-6", "flex flex-col gap-3 lg:pr-8")}
            legend={<legend className="text-md lg:text-24 font-bold mb-4">We help you build your future.<br />Share your vision:</legend>}
          />
          <div className={cn(
            "row-start-1 col-span-full lg:col-span-4 lg:col-end-12",
            "flex flex-col-reverse items-end lg:flex-col lg:items-start",
            "lg:relative",
            "opacity-25 lg:opacity-100",
            "pointer-events-none select-none",
          )}>
            <img src="/home/contact-us.png" alt="" className="w-1/2 lg:w-auto lg:absolute pointer-events-none select-none bottom-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

// END: Section Pitch Pionner

//
// Section Phat Contract Highlight
//

function UnlimitedApiCard({ title, src, href, target }: { title: string, src: string, href: string, target?: string }) {
  return (
    <a
      href={href}
      target={target}
      className={cn(
        "flex flex-col items-center justify-center gap-2.5 py-10 lg:py-20 rounded-sm overflow-hidden",
        "bg-[#e3dfdc]",
        "group",
      )}
    >
      <img src={src} alt={title} className="w-1/2 group-hover:scale-105 duration-200 transition-transform" />
      <div className="text-black-800 text-18 font-bold">{title}</div>
    </a>
  )
}

function ToolIcon({ src, title }: { src: string, title: string }) {
  return (
    <div className="w-20 h-20 flex items-center justify-center bg-black-900 rounded-full border border-solid border-whiteAlpha-300">
      <img src={src} alt={title} className="w-3/5" />
    </div>
  )
}

function ChainIcon({ src, title }: { src: string, title: string }) {
  return (
    <div className="w-20 h-20 lg:w-32 lg:h-32 flex items-center justify-center bg-black rounded-full">
      <img src={src} alt={title} className="max-w-[60%] max-h-full select-none pointer-events-none" loading="lazy" decoding="async" />
    </div>
  )
}

function TemplateCard({ title, src, href, target }: { title: string, src: string, href: string, target?: string }) {
  return (
    <a
      href={href}
      target={target}
      className={cn(
        "bg-gradient-to-b from-[#181818] to-[#272727]",
        "rounded-sm aspect-square",
        "flex flex-col gap-4 items-center justify-center p-6",
        "group",
      )}
    >
      <header className="text-center">
        <h4 className="text-24 font-black text-white">{title}</h4>
      </header>
      <div className="aspect-square w-4/6 select-none pointer-events-none group-hover:scale-105 transition-all duration-200">
        <img src={src} alt={title} loading="lazy" decoding="async" />
      </div>
    </a>
  )
}

function TrustedPartnershipCard({ title, src, tags }: { title: string, src: string, tags: {label: string, cls: string}[] }) {
  return (
    <div
      className={cn(
        "relative lg:aspect-square bg-whiteAlpha-50 border border-solid border-whiteAlpha-200 rounded",
      )}
    >
      <div className={cn("flex items-center justify-start lg:justify-center", "h-full px-8 py-4 lg:p-8")}>
        <div className="flex flex-row lg:flex-col gap-6 items-center justify-center">
          <div className={cn(
            "border-[0.5px] border-solid border-black-900/40 rounded-full w-16 h-16 lg:w-32 lg:h-32 aspect-square overflow-hidden",
            "bg-black-900",
            "flex items-center justify-center shrink-0",
          )}>
            <img src={src} alt={title} className="w-3/5 select-none pointer-events-none" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-20 lg:text-24 font-bold lg:text-center">{title}</h4>
            <div className="flex flex-row items-center lg:justify-center flex-wrap gap-2">
              {tags.map(({ label, cls }) => (
                <span
                  key={label}
                  className={cn(
                    "border border-solid rounded-xs text-xs py-1 px-3",
                    cls
                  )}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionPhatContractHighlight() {
  return (
    <section
      id="section-phat-contract-highlight"
      className={cn(
        "safe-viewport py-10 lg:py-32 px-5 lg:!px-16",
        "grid grid-cols-4 lg:grid-cols-12 grid-rows-1 gap-6",
        "border border-solid border-black-100 rounded-md",
        "bg-black-900",
      )}
    >
      <header
        className={cn(
          "row-start-1 col-start-1 col-span-full",
          "lg:pb-20",
        )}
      >
        <h2
          className={cn(
            "text-3xl lg:text-6xl text-white font-black",
          )}
        >
          AI-Agent Contract
        </h2>
        <p
          className={cn(
            "text-xl lg:text-3xl text-white font-normal",
          )}
        >
          Ship AI agents in minutes
        </p>
      </header>

      <article
        className={cn(
          "article",
          "row-start-2 col-span-full lg:col-start-1 lg:col-span-7",
          "grid gap-8",
        )}
      >
        <h3 className="heading">Integrate with Popular LLMs and Web3 data layers</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <UnlimitedApiCard
            title="The Graph"
            src="/home/icon-access-unlimited-thegraph.png"
            href="https://dashboard.phala.network/projects/new/clone?template=thegraph-starterkit"
            target="_blank"
          />
          <UnlimitedApiCard
            title="Lens Protocol"
            src="/home/icon-access-unlimited-lens.png"
            href="https://dashboard.phala.network/projects/new/clone?template=lensapi"
            target="_blank"
          />
          <UnlimitedApiCard
            title="Airstack"
            src="/home/icon-access-unlimited-airstack.png"
            href="https://dashboard.phala.network/projects/new/clone?template=airstack-starterkit"
            target="_blank"
          />
        </div>
        <div className="self-end">
          <ContactUsButton
            className={cn("btn btn-primary btn-wht btn-rounded lg:btn-rounded", "min-w-[216px]")}
          >
            Get Early Access
          </ContactUsButton>
        </div>
      </article>

      <div
        className={cn(
          "row-start-3 col-span-full lg:row-start-2 lg:col-start-8 lg:col-span-5",
          "flex flex-col gap-6"
        )}
      >
        <article
          className={cn(
            "article",
            "flex flex-col gap-8",
          )}
        >
          <h3 className="heading">Build with familiar tools</h3>
          <div className="flex flex-row flex-wrap gap-4 lg:gap-6">
            <ToolIcon src="/home/icon-tool-hardhat.png" title="Hardhat" />
            <ToolIcon src="/home/icon-tool-metamask.png" title="Metamask" />
            <ToolIcon src="/home/icon-tool-foundry.png" title="Foundry" />
            <ToolIcon src="/home/icon-tool-javascript.png" title="Javascript" />
            <ToolIcon src="/home/icon-tool-typescript.png" title="Typescript" />
          </div>
          <div className="lg:mt-5">
            <a
              href="https://docs.phala.network/developers/bricks-and-blueprints/featured-blueprints"
              className={cn("btn btn-primary btn-wht btn-rounded lg:btn-rounded", "min-w-[178px]")}
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </article>
        <article
          className={cn(
            "article",
            "flex flex-col gap-8",
          )}
        >
          <h3 className="heading">Backing <em>153</em> Contracts</h3>
          <div className="lg:mt-5">
            <a
              href="https://analytics.phala.network/"
              className={cn("btn btn-primary btn-wht btn-rounded lg:btn-rounded", "min-w-[178px]")}
              target="_blank"
            >
              Explore
            </a>
          </div>
        </article>
        </div>

      <article
        className={cn(
          "article",
          "lg:row-start-3 col-span-full",
          "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20"
        )}
      >
        <div className="lg:max-w-[494px] flex flex-col items-center lg:justify-center gap-4 lg:gap-12 lg:mx-auto">
          <h3 className="heading">Connect AI-Agent with <em>25+</em> Blockchains Instantly</h3>
          <div className={cn("flex flex-row flex-wrap lg:justify-evenly gap-4 lg:gap-8")}>
            <ChainIcon src="/home/icon-binance.png" title="Binance" />
            <ChainIcon src="/home/icon-arbitrum.png" title="Arbitrum" />
            <ChainIcon src="/home/icon-polygon.png" title="Polygon" />
            <ChainIcon src="/home/icon-lens.png" title="Lens" />
            <ChainIcon src="/home/icon-polkadot.svg" title="Polkadot" />
            <ChainIcon src="/home/icon-ethereum.png" title="Ethereum" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <YouTubeVideo
            id="uSY-0NxEnFY"
            title=""
            poster="sddefault"
          />
          <div className="flex flex-row justify-center gap-2.5">
            <Link
              href="https://agentwars.phala.network/?utm_source=phala.network&utm_medium=referral&utm_campaign=phala.network"
              className={cn(
                "btn btn-primary btn-rounded lg:btn-rounded",
                "min-w-[200px]",
                "bg-gradient-to-l from-[#FF8A35] via-40% via-[#F94D4D] to-[#9C52FA] text-white border-none"
              )}
            >
              Join Agent Wars
            </Link>
            <Link
              href="/tags/AI-Agent%20Contract"
              className={cn("btn btn-primary btn-wht btn-rounded lg:btn-rounded", "min-w-[200px]")}
            >
              Learn More
            </Link>
          </div>
        </div>
      </article>

      <div
        className={cn(
          "lg:row-start-4 col-span-full",
          "text-white py-10 lg:pt-20 lg:pb-14",
        )}
      >
        <span className="text-32 lg:text-56 font-black">Trusted by</span>
      </div>

      <div
        className={cn(
          "col-span-full",
          "grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6"
        )}
      >
        <TrustedPartnershipCard
          title="Lens Protocol"
          src="/home/icon-lens.png"
          tags={[
            { label: "Web3 Social", cls: "bg-phalaWorldTeal/20 border-phalaWorldTeal/50 text-phalaWorldTeal" },
          ]}
        />
        <TrustedPartnershipCard
          title="Zurf"
          src="/home/icon-zurf.png"
          tags={[
            { label: "Web3 Social", cls: "bg-phalaWorldTeal/20 border-phalaWorldTeal/50 text-phalaWorldTeal" },
            { label: "Monetization", cls: "bg-yellow-300/20 border-yellow-300/50 text-yellow-300" },
          ]}
        />
        <TrustedPartnershipCard
          title="Huddle01"
          src="/home/icon-huddle01.png"
          tags={[
            { label: "Web3 communication", cls: "bg-phalaPurple-400/20 border-phalaPurple-400/50 text-phalaPurple-400" },
          ]}
        />
        <TrustedPartnershipCard
          title="Sygma"
          src="/home/icon-sygma.png"
          tags={[
            { label: "De-Fi", cls: "bg-blue-300/20 border-blue-300/50 text-blue-300" },
          ]}
        />
        <TrustedPartnershipCard
          title="KoinGaroo"
          src="/home/icon-koingaroo.png"
          tags={[
            { label: "De-Fi", cls: "bg-blue-300/20 border-blue-300/50 text-blue-300" },
          ]}
        />
        <TrustedPartnershipCard
          title="inDEX"
          src="/home/icon-index.png"
          tags={[
            { label: "De-Fi", cls: "bg-blue-300/20 border-blue-300/50 text-blue-300" },
          ]}
        />
        <TrustedPartnershipCard
          title="VRF Oracle"
          src="/home/icon-vrf-oracle.png"
          tags={[
            { label: "Oracle", cls: "bg-phalaPurple-400/20 border-phalaPurple-400/50 text-phalaPurple-400" },
          ]}
        />
        <TrustedPartnershipCard
          title="DMail"
          src="/home/icon-dmail.png"
          tags={[
            { label: "Web3 communication", cls: "bg-phalaPurple-400/20 border-phalaPurple-400/50 text-phalaPurple-400" },
          ]}
        />
      </div>
    </section>
  )
}

// END: Section Phat Contract Highlight

//
// Section SectionGlobalDistribution
//

function SectionGlobalDistribution() {
  return (
    <section className="section-global-distribution">
      <div
        className={cn(
          "safe-viewport !px-0",
          "grid gap-8 xl:gap-16 grid-cols-1 xl:grid-cols-12",
          "border border-solid border-black-100 rounded-md",
        )}
      >
        <div className={cn(
          "row-start-1 col-span-full",
          "z-10",
          "flex flex-col items-center gap-12 my-8 2xl:my-16"
        )}
        >
          <header className="text-center">
            <h3 className="text-56 text-black-800 font-black">DePIN with the most TEE nodes</h3>
            <h4 className="text-32 text-black-600">By the people, for the people</h4>
          </header>
          <div
            className={cn(
              "bg-phalaPurple text-white",
              "w-96 p-4 rounded-full"
            )}
          >
            <StatsCard />
          </div>
          <div className="flex flex-row gap-5">
            <div className="inline-flex items-center gap-2.5">
              <i className="w-4 h-4 inline-block rounded-full bg-[#cdfa50]" />
              <span className="text-18">Phala Blockchain Nodes</span>
            </div>
            <div className="inline-flex items-center gap-2.5">
              <i className="w-4 h-4 inline-block rounded-full bg-[#8544F6]" />
              <span className="text-18">Off-chain Computers</span>
            </div>
          </div>
        </div>
        <div className={cn(
          "row-start-1 col-span-full",
          "z-0 overflow-hidden rounded-md",
        )}>
          <video
            className={cn("object-cover aspect-[3840/1980] h-full min-w-full")}
            autoPlay muted loop playsInline
          >
            <source src="https://nft-assets.phala.world/network/worldmap20230708.mp4" type="video/mp4" />
            <source src="https://nft-assets.phala.world/network/worldmap20230708.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  )
}

// END: Section How It Works

//
// Section Subscription
//

function SectionSubscription() {
  return (
    <section id="section-subscription" className="section-subscription">
      <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <SubscribeForm />
        <div className={cn("hidden xl:block xl:h-full xl:bg-[#f3f3f3] row-start-1 col-span-full xl:col-start-14 3xl:col-start-16 -ml-4 relative")}>
          <img src="/home/newsletter-aside.jpg" alt="" className={cn("absolute bottom-0 left-0 aspect-[1860/728]")} />
        </div>
      </div>
    </section>
  )
}

// END: Section Subscription

export const metadata: Metadata = {
  themeColor: 'rgba(232, 233, 234, 1)',
  title: "Phala Network - Verifiable Computation for Web3",
  description: "Phala Network make smart contracts even smarter by providing decentralized compute.",
  keywords: [
    "Phala Network",
    "Phala",
    "Phat Contracts",
    "Web3",
    "Web3 Builders Stack",
    "Off-chain computation",
    "Smart Contract",
    "Verifiable Compute",
    "Connectivity",
    "Oracle",
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://phala.network/',
    title: "Phala Network - Verifiable Computation for Web3",
    description: "Phala Network make smart contracts even smarter by providing decentralized compute.",
    images: [
      {
        url: 'https://phala.network/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Phala Network - Verifiable Computation for Web3",
      },
    ],
  },
  twitter: {
    site: '@PhalaNetwork',
    card: 'summary_large_image',
    title: "Phala Network - Verifiable Computation for Web3",
    description: "Phala Network make smart contracts even smarter by providing decentralized compute.",
    images: ['https://phala.network/og-image.jpg'],
  },
  alternates: {
    canonical: "https://phala.network",
    types: {
      'application/rss+xml': [
        { url: 'https://phala.network/rss.xml', title: 'Phala News' },
      ],
      'application/atom+xml': [
        { url: 'https://phala.network/atom.xml', title: 'Phala News' },
      ],
    },
  }
}

export default async function Home() {
  const default_list = await getPhatLists()

  return (
    <div className="flex flex-col gap-10 lg:gap-20">
      <SectionHero />
      <SectionFeatures
        default_list={default_list}
      />
      <SectionPhatContractHighlight />
      <SectionPitchPioneer />
      <SectionHowItWorks />
      <SectionGlobalDistribution />
      <SectionHighlights />
      <SectionSubscription />
    </div>
  )
}
