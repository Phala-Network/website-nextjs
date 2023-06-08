import { type ReactNode } from 'react'
import { type Metadata } from 'next'

import { VscCommentDiscussion, VscNote } from 'react-icons/vsc'

import { cn } from '@/lib/utils'
import DotBackground from '@/components/DotBackground'

import { NoCodeWizardStepTrigger, NoCodeWizardStepDetails, NoCodeWizardStepPreview } from './_components/NoCodeWizard'
import { CodeExampleTab, CodeExampleCodeViewer } from './_components/CodeExampleTabs'
import { ShowCaseTab, ShowCaseTabPanel } from './_components/ShowCaseTabs'
import { AreaOfInterestTab, AreaOfInterestTabPanel } from './_components/AreaOfInterestTabs'
import { FeatureTab, FeatureTabPanel, FeatureTabPanels, FeatureTabIndicator } from './_components/FeatureTabs'
import SubscribeForm from './_components/SubscribeForm'
import { Advantages } from './_components/Advantages'
import { HowItWorksCarousel } from './_components/HowItWorksCarousel'
import { StatsCard } from './_components/StatsCard'
import './home.css'


//
// Section Hero
//

function Stats({ children, name }: { children: ReactNode, name: string }) {
  return (
    <div>
      <h4 className={cn("text-lg font-semibold")}>{children}</h4>
      <div className={cn("text-sm text-blackAlpha-700")}>{name}</div>
    </div>
  )
}

function SectionHero() {
  return (
    <section id="section-hero" className={cn("relative max-h-screen w-full", "section-hero")}>
      <div className={cn("background", "absolute top-0 left-0 w-full h-full z-[-1] untanglable overflow-hidden")}>
        <video
          className="object-cover aspect-[3840/1980] h-full min-w-full"
          autoPlay muted loop
        >
          <source src="https://nft-assets.phala.world/network/bg20230605.mp4" type="video/mp4" />
          <source src="https://nft-assets.phala.world/network/bg20230605.webm" type="video/webm" />
        </video>
      </div>
      <div className={cn("flex flex-col h-screen justify-between items-center")}>
        {/* Temporary placeholder */}
        <div className={cn("w-full")} />

        <div className={cn("uppercase text-center flex flex-col gap-16 justify-center w-full")}>
          <header className={cn("px-10")}>
            <h2 className={cn("text-4xl font-normal text-[#222] leading-10 mb-2.5")}>Computation as it's meant to be</h2>
            <h3 className={cn("text-2xl font-extrabold flex flex-row justify-center w-full")}>
              On-Chain verification.
              Off-Chain <Advantages />
            </h3>
          </header>
          <div className={cn("flex flex-col xl:flex-row gap-5 mx-auto")}>
            <a
              className={cn("btn btn-xl text-base btn-primary justify-center")}
              href="#section-features"
            >
              Let's Build!
            </a>
            <a className={cn("btn btn-xl text-base btn-secondary justify-center")} href="https://discord.gg/gZjZuVHXtm" target="_blank" rel="noopener">
              Join Community
            </a>
          </div>
        </div>

        <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24", "mb-6")}>
          <div className={cn("flex flex-col items-center gap-5 lg:flex-row lg:justify-between", "xl:col-start-2 xl:col-span-18 3xl:col-start-1 3xl:col-span-full")}>
            <div className="flex flex-row gap-5 items-center">
              <img
                src="/icons/gear.svg"
                alt=""
                className="svg-black mr-2.5 motion-safe:animate-spin untanglable w-9 h-9"
              />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Stats name="Online Workers">26,551</Stats>
                <Stats name="Compute">191,715 vCPU</Stats>
                <Stats name="Cross-Chain TX">7,538</Stats>
                <Stats name="TX">69,622,067</Stats>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-end">
              <div className="flex flex-row gap-5">
                <img
                  src="/home/Ethereum.png"
                  alt="Ethereum"
                  className="w-16 h-16"
                />
                <img
                  src="/home/Bnbchain.png"
                  alt="Bnbchain"
                  className="w-16 h-16"
                />
                <img
                  src="/home/Moonbean.png"
                  alt="Moonbean"
                  className="w-16 h-16"
                />
                <img
                  src="/home/Arbittrum.png"
                  alt="Arbittrum"
                  className="w-16 h-16"
                />
                <img
                  src="/home/Astar.png"
                  alt="Astar"
                  className="w-16 h-16"
                />
              </div>
              <a
                href="https://docs.phala.network/developers/phat-contract/supported-chains"
                className={cn("flex flex-row gap-2", "btn-view-all")}
                target="_blank"
                rel="noopener"
              >
                <span className={cn("btn-link", "text-sm")}>View All Supported Networks</span>
                <img
                  src="/icons/right-arrow.svg"
                  alt=""
                  className="svg-secondary icon untanglable h-3 w-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// END: Section Hero

//
// Section Features
//

function SectionFeatures() {
  return (
    <section id="section-features" className={cn("relative lg:h-screen flex items-center")}>
      <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
      <div className={cn("safe-viewport", "grid grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24 grid-rows-7")}>
        <div
          className={cn(
            "col-start-1 col-span-full xl:col-span-10 2xl:col-span-10 3xl:col-start-3 3xl:col-span-10",
            "flex flex-col justify-center gap-5 4xl:gap-20", "py-8 3xl:py-16"
          )}
        >
          <header className={cn("flex flex-col gap-5", "ml-12 mb-6 2xl:mb-4")}>
            <h2 className={cn("font-extrabold text-2xl 2xl:text-5xl uppercase")}>Smart Contracts.</h2>
            <h3 className={cn("text-3xl 2xl:text-6xl tracking-wide uppercase")}>Now Smarter.</h3>
          </header>
          <main className={cn("grid grid-cols-10 grid-rows-7 gap-1")} style={{"gridAutoRows": "fit-content(1em)"}}>
            <div className={cn("col-start-2 col-span-9 row-start-1")}>
              <FeatureTab idx={1} iconUrl="/icons/features-compare.svg" summary="Connect your smart contract anywhere">
                <p>
                  No matter if your smart contracts are on Ethereum or Substrate, our universal compatibility ensures connection flexibility like never before, enabling your smart contracts to access a wide range of features regardless of the blockchain they are hosted on. Phala’s Phat Contracts make it possible to extend the capabilities of your smart contracts without the need for a bridge or an extra layer.
                </p>
              </FeatureTab>
            </div>
            <div className={cn("col-start-2 col-span-9 row-start-2")}>
              <FeatureTab idx={2} iconUrl="/icons/features-all-out.svg" summary="Seamless access to the Internet">
                <p>
                  Phala Network doesn’t just offer unparalleled on-chain connectivity; it also bridges the gap between the off-chain world and smart contracts. The ability to send HTTP/HTTPS requests directly from your smart contracts is now at your fingertips. Take your dApp to the next level by integrating cutting-edge Web3 protocols and various Web2 API, creating a perfect fusion of old and new, on-chain and off-chain.
                </p>
              </FeatureTab>
            </div>
            <div className={cn("col-start-2 col-span-9 row-start-3")}>
              <FeatureTab idx={3} iconUrl="/icons/features-auto-graph.svg" summary="Advanced flexibility and performance">
                <p>
                  By offloading the computation off-chain, you don’t have to worry about costly transaction fees or network latency that hinders your progress. Experience real-time, off-chain computation at its finest, allowing you to focus on enhancing your dApp’s functionality and user experience. Run arbitrarily complex logic without any constraints, all at an affordable cost.
                </p>
              </FeatureTab>
            </div>
            <div className={cn("col-start-2 col-span-9 row-start-4")}>
              <FeatureTab idx={4} iconUrl="/icons/features-rocket.svg" summary="Computation is always verifiable">
                <p>
                  Phala Network is designed with multiple layers of security guarantees to provide fully verifiable computation. The network is backed by numerous decentralized workers and a significant amount of staked tokens. Phat Contracts are protected by both hardware Secure Enclaves and cryptographic evidence published and verified on the Phala blockchain, seamlessly extending blockchain-level security to the off-chain realm.
                </p>
              </FeatureTab>
            </div>

            {/* Progress bar */}
            <div className={cn("col-start-1 row-start-1 row-span-7 flex justify-end pr-6")}>
              <div className={cn("w-2 h-full bg-blackAlpha-100 rounded")} />
            </div>
            <FeatureTabIndicator />
          </main>
        </div>

        <FeatureTabPanels>
          <FeatureTabPanel src="/home/highlight01.jpg" />
          <FeatureTabPanel src="/home/highlight02.jpg" />
          <FeatureTabPanel src="/home/highlight03.jpg" />
          <FeatureTabPanel src="/home/highlight04.jpg" />
          <FeatureTabPanel src="/home/highlight05.jpg" />
        </FeatureTabPanels>
      </div>
    </section>
  )
}

// END: Section Features

//
// Section Pitch Intro
//

function SectionPitchIntro() {
  return (
    <section id="section-pitch-intro" className="relative h-screen">
      <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
      <div className={cn("absolute top-[33%] right-0 h-[57%] w-[67.45vw] bg-primary rounded-l-[48px] -z-[9]")} />
      <div className={cn("safe-viewport", "h-full", "grid grid-cols-20 grid-rows-1 3xl:grid-cols-24 xl:gap-4")}>
        <header className={cn("xl:col-start-2 xl:col-span-11 xl:row-start-1 3xl:col-start-4", "flex flex-col gap-6 justify-center z-30 max-w-[50vw]")}>
          <div className={cn("text-[2.625rem]")}>FROM</div>
          <div>
            <h3 className={cn("text-[5.625rem] font-extrabold text-white bg-black whitespace-nowrap tracking-tight rounded-3xl inline-flex px-14")}>NO CODE</h3>
          </div>
          <div className={cn("flex flex-row gap-6 items-center")}>
            <div className={cn("text-[#8544F6]")}>
              <svg viewBox="0 0 133 97" fill="none" style={{width: 134, height: 100}}>
                <path d="M88.8093 2.48389C86.3556 0.012666 82.3587 0.0126662 79.905 2.48388C77.4773 4.92887 77.4755 8.87413 79.901 11.3213L110.494 42.1875H6.3125C2.8262 42.1875 0 45.0137 0 48.5C0 51.9863 2.8262 54.8125 6.3125 54.8125H110.494L79.901 85.6787C77.4755 88.1259 77.4773 92.0711 79.905 94.5161C82.3587 96.9873 86.3556 96.9873 88.8093 94.5161L130.302 52.7276C132.625 50.3879 132.625 46.6121 130.302 44.2724L88.8093 2.48389Z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-[5.625rem] font-extrabold text-white bg-black whitespace-nowrap tracking-tight rounded-3xl inline-flex px-14">FULL CODE</h3>
          </div>
          <h4 className="text-[2.625rem] uppercase ml-[160px] whitespace-nowrap">We got you <span className="font-black">covered</span>.</h4>
        </header>
        <div className={cn("hidden xl:row-start-1 xl:col-end-19 xl:col-span-6 3xl:col-end-21 xl:flex flex-col justify-center")}>
          <div className="relative w-[300px] h-[420px]">
            <img
              src="/home/experience-back.jpg"
              alt=""
              width={292}
              height={419}
              className="rounded-3xl overflow-hidden absolute left-[260px] top-[-80px] z-10 untanglable"
            />
            <img
              src="/home/experience-front.jpg"
              alt=""
              width={292}
              height={419}
              className="rounded-3xl overflow-hidden absolute left-0 top-[20px] z-20 untanglable"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// END: Section Pitch Intro

//
// Section Pitch Accelerate
//

function BlueprintCard({ title, children, href, tags, illustration, live }: { title: string, children: ReactNode, href?: string, tags?: string[], illustration?: string, live?: boolean }) {
  return (
    <div className="blueprint-card">
      <div className="flex flex-col justify-between h-full z-10 relative">
        <div className="flex flex-col gap-6">
          {href ? (
            <a href={href} className={cn("text-2xl text-white font-black uppercase hover:text-primary")} target="_blank" rel="noopener">{title}</a>
          ) : (
            <h4 className={cn("text-2xl text-white font-black uppercase")}>{title}</h4>
          )}
          {tags && tags.length ? (
          <ul className={"flex flex-row flex-wrap gap-2"}>
            {tags.map((tag, idx) => (
              <li key={idx}>
                <span className={"text-secondary text-xs uppercase px-2.5 py-1 bg-gray-100 rounded-[6px] whitespace-nowrap"}>{tag}</span>
              </li>
            ))}
          </ul>
          ) : null}
          <div className={cn("text-sm text-whiteAlpha-700 leading-normal")}>{children}</div>
        </div>
        {live ? (
          href ? (
            <a href={href} className={cn("flex flex-row items-center gap-3.5 mt-6")} target="_blank" rel="noopener">
              <img
                src="/icons/gear.svg"
                alt=""
                className={cn("svg-primary untanglable w-8 h-8")}
              />
              <span className={cn("text-primary text-base font-extrabold")}>LIVE !</span>
            </a>
          ) : (
            <div className={cn("flex flex-row items-center gap-3.5 mt-6")}>
              <img
                src="/icons/gear.svg"
                alt=""
                className={cn("svg-primary untanglable w-8 h-8")}
              />
              <span className={cn("text-primary text-base font-extrabold")}>LIVE !</span>
            </div>
          )
        ) : null}
      </div>
      {illustration ? (
        <img
          src={illustration}
          alt=""
          className={cn("img", "absolute top-[25%] right-[-1%] z-0 opacity-25 untanglable w-64 h-64")}
        />
      ) : null}
    </div>
  )
}

function SectionPitchAccelerate() {
  return (
    <section id="section-pitch-accelerate" className="relative">
      <DotBackground dotColor="#6b3eca" bgColor="#7f4af0" />
      <div className={cn(
        "safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24"
      )}>
        <div className={cn("row-start-1 xl:col-start-2 xl:col-span-7 3xl:col-start-4", "pt-20 xl:pt-56")}>
          <h2 className={cn("text-[3.5rem] inline-block font-black uppercase rounded-3xl px-16 py-4 bg-white")}>
            Accelerate
          </h2>
        </div>
        {/* END: row-1 */}

        <p className={cn(
          "row-start-2 xl:col-start-3 xl:col-span-16 3xl:col-start-5",
          "mt-8",
          "font-medium text-[2rem] text-white"
        )}>Scale your idea with prebuilt blueprints in minutes</p>
        {/* END: row-2 */}

        <div className={cn(
          "row-start-3 xl:col-start-3 xl:col-span-17 3xl:col-start-5 3xl:col-span-17",
          "mt-28",
        )}>
          <div className="w-full flex flex-row h-[620px]">
            <div className={cn("rounded-3xl overflow-hidden flex flex-row bg-white")}>
              <div className={cn("aspect-[879/620] relative w-[70%]")}>
                <NoCodeWizardStepPreview
                  idx={0}
                  src="/home/nocode-workflow-01-pick.jpg"
                />
                <NoCodeWizardStepPreview
                  idx={1}
                  src="/home/nocode-workflow-02-customize.jpg"
                />
                <NoCodeWizardStepPreview
                  idx={2}
                  src="/home/nocode-workflow-03-deploy.jpg"
                />
                <NoCodeWizardStepPreview
                  idx={3}
                  src="/home/nocode-workflow-04-integrate.jpg"
                />
              </div>
              <div className="flex flex-col justify-between px-8 py-10 w-[30%]">
                <NoCodeWizardStepDetails idx={0} summary="Pick">
                  <p>Discover the perfect solution for your needs with our marketplace of blueprints. These community-contributed, ready-to-deploy blueprints offer a quick way to integrate off-chain capabilities into your smart contracts.</p>
                </NoCodeWizardStepDetails>
                <NoCodeWizardStepDetails idx={1} summary="Customize">
                  <p>Blueprints are designed to tackle common challenges developers frequently encounter. With just a few clicks, effortlessly adjust the configuration to tailor the blueprint to your specific requirements.</p>
                </NoCodeWizardStepDetails>
                <NoCodeWizardStepDetails idx={2} summary="Deploy">
                  <p>Easily deploy the customized blueprint as your own Phat Contract on the Phala Network. Experience the power of off-chain capabilities integrated into your DApp within seconds.</p>
                </NoCodeWizardStepDetails>
                <NoCodeWizardStepDetails idx={3} summary="Integrate">
                  <p>Seamlessly interact with your newly deployed Phat Contract from your smart contracts or frontend using familiar programming languages. Enjoy a streamlined process that enhances your dApp’s functionality with minimal effort.</p>
                </NoCodeWizardStepDetails>
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <NoCodeWizardStepTrigger idx={0}>Pick</NoCodeWizardStepTrigger>
                  </li>
                  <li>
                    <NoCodeWizardStepTrigger idx={1}>Customize</NoCodeWizardStepTrigger>
                  </li>
                  <li>
                    <NoCodeWizardStepTrigger idx={2}>Deploy</NoCodeWizardStepTrigger>
                  </li>
                  <li>
                    <NoCodeWizardStepTrigger idx={3}>Integrate</NoCodeWizardStepTrigger>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* END: row-3 */}

        <div className={cn(
          "row-start-4 xl:col-start-3 xl:col-span-17 3xl:col-start-5 3xl:col-span-17",
          "w-[70%]",
          "mt-8"
        )}>
          <a href="https://bricks.phala.network" className="btn btn-third flex-row w-full bg-[#6C37C9] py-5 px-10" target="_blank" rel="noopener">
            <span className="text-lg font-bold uppercase">Get your own LensAPI oracle now</span>
            <img
              src="/icons/right-arrow.svg"
              alt=""
              className="svg-white ml-5 inline-block w-6 h-6"
              />
          </a>
        </div>

        <div className={cn(
          "row-start-5 xl:col-start-2 xl:col-span-16 3xl:col-start-4 3xl:col-span-16"
        )}>
          <div className={cn("bg-white rounded-3xl p-16 mt-[170px]")}>
            <header className={cn("mb-16 flex flex-col gap-3")}>
              <h3 className={cn("text-4xl text-blackAlpha-900 font-black uppercase")}>Explore all of our blueprints</h3>
              <p className={cn("text-xl text-blackAlpha-700")}>Explore the marketplace today to find your ideal blueprints, streamlining your development process.</p>
            </header>
            <div className={cn("grid grid-cols-2 gap-5")}>
              <BlueprintCard
                title="LensAPI Oracle"
                illustration="/home/blueprint-lens-api-oracle.png"
                tags={["Polygon", "EVM", "Lens"]}
                href="https://bricks.phala.network"
                live
              >
                Deploy a custom social oracle to integrate LensAPI data into your smart contracts, providing access to user profile statistics such as followers, posts, comments, and post metrics like collections, mirrors, and replies.
              </BlueprintCard>
              <BlueprintCard
                title="Lens Social Sync Bot"
                tags={["Lens", "Twitter"]}
              >
                Effortlessly sync your social media content across Twitter, Facebook, and more with this easy-to-deploy bot that automatically mirrors your posts to your Lens profile in minutes.
              </BlueprintCard>
              <BlueprintCard
                title="Referral Oracle"
                tags={["Ethereum", "EVM", "Substrate", "Lens"]}
              >
                Deploy a referral system pluggable into your Dapp in minutes, boost your reachability. Utilize the SDK to generate referral links for your audience and monitor user traffic. Easily integrates with blockchain accounts and Lens profiles, with data queryable by monetization smart contracts.
              </BlueprintCard>
              <BlueprintCard
                title="The Graph Oracle"
                tags={["The Graph", "Ethereum", "Substrate", "EVM"]}
              >
                Deploy your custom oracle for instant access to all the Subgraphs from The Graph protocol, enabling multi-chain data retrieval and aggregation in your smart contracts.
              </BlueprintCard>
              <BlueprintCard
                title="Conditional Gated Data"
                tags={["Ethereum", "EVM", "Substrate", "IPFS", "Arweave"]}
              >
                Deploy a customized token gate or conditional decryption gateway to manage access to your on-chain or off-chain data. Facilitate secure data sharing on decentralized social, exclusive NFT content, and more.
              </BlueprintCard>
              <BlueprintCard
                title="On-chain ChatGPT Agent"
                tags={["AI", "Ethereum", "EVM", "Substrate"]}
              >
                Integrate your smart contract with a customized ChatGPT oracle for intelligent automation. Monitor blockchain events and initiate user-driven actions, create content on decentralized social platforms, and unlock more automated capabilities.
              </BlueprintCard>
            </div>
            <a
              href="https://docs.phala.network/developers/phat-contract/bricks-and-blueprints"
              className={cn("btn btn-primary btn-lg mt-10 font-bold uppercase w-full py-5 px-10")}
              target="_blank"
              rel="noopener"
            >
              Learn about blueprints
              <img
                src="/icons/right-arrow.svg"
                alt=""
                className="svg-black ml-5 inline-block w-6 h-6"
                />
            </a>
          </div>
        </div>
        {/* END: row-4 */}

        <div className={cn(
          "row-start-6 xl:col-start-9 xl:col-span-10 3xl:col-start-12 3xl:col-span-10"
        )}>
          <div className={cn("pt-20 pb-32 w-full")}>
            <div className="flex flex-col gap-10">
              <h3 className="uppercase text-white text-[56px] font-black">Inspire<br /> the next blueprint</h3>
              <div>
                <a
                  href="https://github.com/Phala-Network/phala-blueprint-proposals"
                  className="btn btn-primary btn-center-icon btn-xl uppercase inline-flex"
                  target="_blank"
                  rel="noopener"
                >
                  Propose now
                  <img
                    src="/icons/right-arrow.svg"
                    alt=""
                    className="svg-black ml-5 icon w-4 h-4"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* END: row-5 */}

        <div className={cn("row-start-1 row-span-3 xl:col-start-8 xl:col-span-11", "pt-20 xl:pt-[17.325rem]", "-z-10 untanglable text-white")}>
          <svg viewBox="0 0 681 290" fill="transparent">
            <path d="M0.5 5.5H613C647.794 5.5 676 33.7061 676 68.5V289.5" stroke="currentColor" strokeWidth="10" />
          </svg>
        </div>

        <div className={cn("row-start-4 row-span-3 xl:col-start-4 xl:col-span-15 3xl:col-start-5 3xl:col-span-14", "-mt-4", "-z-10 untanglable text-white")}>
          <svg viewBox="0 0 936 279" fill="transparent">
            <path d="M931 0.5V127C931 161.794 902.794 190 868 190H68.5C33.7061 190 5.5 218.206 5.5 253V278.5" stroke="currentColor" strokeWidth="10" />
          </svg>
        </div>

        <div className={cn("row-start-6 xl:col-start-5 xl:col-span-4 3xl:col-start-5 3xl:col-span-6", "-mt-4 3xl:-mt-24", "-z-10 untanglable text-white")}>
          <svg viewBox="0 0 330 205" fill="transparent">
            <path d="M5 0V109C5 143.794 33.2061 172 68 172H324.5" stroke="currentColor" strokeWidth="10"/>
            <path d="M299.002 199.003L323.589 174.416C324.37 173.635 324.37 172.369 323.589 171.587L299.002 147" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
          </svg>
        </div>

      </div>
    </section>
  )
}

// END: Section Pitch Accelerate

function Avatar({ src, name }: { src: string, name: string }) {
  return (
    <div
      className={"rounded-full overflow-hidden border-4 border-solid border-white h-32 w-32 relative"}
    >
      <img src={src} alt={name} className="untanglable" />
    </div>
  )
}

function SectionPitchInnovate() {
  return (
    <section id="section-pitch-innovate" className="relative z-0">
      <DotBackground dotColor="#afd153" bgColor="#d0f964" />
      <div className={cn(
        "safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24",
        "overflow-hidden"
      )}>
        <header
          className={cn(
            "row-start-1 xl:col-span-20 3xl:col-span-24",
            "pt-44 pb-[20px] relative top-4",
            "flex flex-col items-center w-full relative",
          )}
          style={{
            backgroundImage: 'url("/home/bg-innovate-01.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-[3.5rem] font-black uppercase rounded-3xl px-16 py-4 bg-white inline-block">Innovate</h2>
          <p className="font-medium text-[2rem] text-black mt-10">Full power, Full control. Empower your ideas.</p>

          <div className={cn("absolute top-[234px] left-[204px] 3xl:left-[296px]", "w-full h-full", "-z-10 untanglable text-white")}>
            <svg viewBox="0 0 2000 323" fill="transparent">
              <path stroke="currentColor" strokeWidth="10" d="M 356 5 L 2000 5"/>
              <path stroke="currentColor" strokeWidth="10" d="M 356.5 5 L 68.5 5 C 33.7061 5 5.5 33.206116 5.5 68 L 5.5 323"/>
            </svg>
          </div>
        </header>
        
        <div className={cn(
          "row-start-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
          "rounded-3xl bg-white overflow-hidden px-20 py-12"
        )}>
          <h4 className={cn("text-4xl font-black text-blackAlpha-900 uppercase text-center mx-auto")}>Access the unique functionalities of Phat Contract</h4>
          <div className={cn("py-14")}>
            <ul className="flex flex-row flex-wrap gap-2.5 justify-center">
              <CodeExampleTab idx={0}>HTTP Request</CodeExampleTab>
              <CodeExampleTab idx={1}>Cross-Chain Integration</CodeExampleTab>
              <CodeExampleTab idx={2}>Off-Chain Rollup</CodeExampleTab>
              <CodeExampleTab idx={3}>Automation</CodeExampleTab>
              <CodeExampleTab idx={4}>Secret Managment</CodeExampleTab>
              <CodeExampleTab idx={5}>High performance computation</CodeExampleTab>
            </ul>
          </div>
          <div className={cn("flex flex-col gap-8 w-full items-center")}>
            <CodeExampleCodeViewer idx={0}>
{`
// Send HTTP(s) requests from your Phat Contract
let headers = vec![("X-Foo".into(), "Bar".into())];
let response = http_get!("https://example.com/", headers);
assert_eq!(response.status_code, 200);
`}
            </CodeExampleCodeViewer>
            <CodeExampleCodeViewer idx={1}>
{`
// Sign and send transaction to EVM blockchains with pink-web3
erc20_contract.signed_call(
	"transferFrom",
	(Token::Address(recipient), Token::U256(amount)),
	Options::default(),
	key_pair,
)
`}
            </CodeExampleCodeViewer>
            <CodeExampleCodeViewer idx={2}>
{`
// Receive requests and answer with responses in Phat Contract
if let Some(request) = client.session().pop().unwrap() {
  let response: Vec<u8> = // ... Create your response based on the request ...
  client.action(Action::Reply(response));
}
`}
            </CodeExampleCodeViewer>
            <CodeExampleCodeViewer idx={2}>
{`
// Send a request to your Phat Contract
bytes request = abi.encode(1000, "polkadot/usd");
uint256 reqId = _pushMessage(request);
// Receive a response from your Phat Contract
function _onMessageReceived(bytes calldata response) internal override {
  emit MsgReceived(response);
}
`}
            </CodeExampleCodeViewer>
            <CodeExampleCodeViewer idx={3}>
{`
// Register \`poll()\` in the Phat Bricks scheduler to automate your contract
fn poll(&self) -> Result<()> {
    self.something_automated()
}
`}
            </CodeExampleCodeViewer>
            <CodeExampleCodeViewer idx={4}>
{`
// Contract storage is private by default
struct Contract {
	admin: AccountId,
	private_key: Vec<u8>,
}
// Anyone can query via E2E encryption, but unauthorized query can be rejected
fn get_key(&self) -> Result<Vec<u8>> {
	if self.env().caller() != self.admin {
	    return Err(Error::AccessForbidden);
	}
	self.private_key
}
`}
            </CodeExampleCodeViewer>
            <CodeExampleCodeViewer idx={5}>
{`
// Parse JSON objects
let object: PriceResponse = pink_json::from_str(&json);
// Cryptographically secure randomness
let privkey = signing::derive_sr25519_key(b"some-salt");
// Sign messages
let signature = signing::sign(message, &privkey, SigType::Ecdsa);
// Local storage
self.env().ext().cache_put(b"key", b"value");
self.env().ext().cache_get(b"key");
`}
            </CodeExampleCodeViewer>
          </div>
        </div>

        <div
          className={cn(
            "row-start-3 xl:col-start-8 xl:col-span-6 3xl:col-start-10 3xl:col-span-6",
            "mt-6 mb-22",
            "relative"
          )}
        >
          <a
            href="https://docs.phala.network/v1/developers/phat-contract"
            className="btn btn-xl btn-third btn-center-icon w-full uppercase"
            target="_blank"
            rel="noopener"
          >
            Docs
            <VscNote className="icon h-7 w-7 mt-0.5" />
          </a>
          <div
            className={cn(
              "absolute top-[-100%] right-[-150%] w-[30vw] aspect-square -z-[1]"
            )}
          >
            <img src="/home/bg-gear.png" alt="" />
          </div>
        </div>

        <div className={cn(
          "row-start-4 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
          "flex flex-row gap-6"
        )}>
          <ul className={cn("max-w-md flex flex-col gap-5")}>
            <ShowCaseTab idx={0} summary="Cross-chain DEX aggregator">
            </ShowCaseTab>
            <ShowCaseTab idx={1} summary="Self-owned Oracles">
            </ShowCaseTab>
            <ShowCaseTab idx={2} summary="Contract Controlled Web2 Service">
            </ShowCaseTab>
            <a
              className={cn(
                "rounded-lg px-5 py-10 bg-gray-800 flex flex-row items-center justify-center gap-14 relative",
                "btn-animated transition-all hover:bg-phat-400"
              )}
              href="https://docs.phala.network/v1/developers/phat-contract/builders-program"
              target="_blank"
              rel="noopener"
            >
              <div className="absolute left-5 z-0">
                <img
                  src="/home/btn-bg-builders-program.png"
                  alt=""
                  width={275}
                  height={133}
                  className="untanglable"
                />
              </div>
              <div className={cn("text-white font-black flex flex-col gap-6 leading-none z-10 relative ml-28")}>
                <div className={cn("text-[3.5rem]")}>$50K</div>
                <div className={cn("uppercase text-xl")}>for innovators</div>
              </div>
            </a>
          </ul>
          <div className="flex-1">
            <ShowCaseTabPanel
              idx={0}
              title="Cross-chain DEX aggregator"
              src="/home/case-cross-chain-dex-aggregator.jpg"
              tags={["Cross-Chain Integration", "Automation", "HTTP Request"]}
            >
              <p>By utilizing Phat Contract, developers can create a cross-chain DEX aggregator that enables users to swap tokens between various blockchains while ensuring the best possible price and minimal slippage in one-click.</p>
              <p>This solution employs Phat Contract to automatically search for the most efficient routes across DEXs and bridges. Then the Phat Contract initiates the necessary transactions on the target blockchains, executing swap and bridge operations on the user’s behalf. Transaction execution is further streamlined by automated schedulers and monitoring by indexers. To retrieve the status of these transactions, developers can query the indexers through HTTP requests.</p>
            </ShowCaseTabPanel>
            <ShowCaseTabPanel
              idx={1}
              title="Self-owned Oracles"
              src="/home/case-self-owned-oracles.jpg"
              tags={["Off-chain Rollup", "Automation", "HTTP Request", "Secret Management"]}
            >
              <p>Phat Contract provides an easy way to build a customized oracle. This enables any smart contract to access a wide range of data from both on and off-chain data sources.</p>
              <p>Phat Contract’s HTTP request functionality permits the contract to access any API via the internet. To obtain data from other blockchains, simply connect to  RPC node’s and indexers. API keys are securely managed within Phat Contract, allowing access to not only public APIs but also private ones. Off-chain Rollup</p>
            </ShowCaseTabPanel>
            <ShowCaseTabPanel
              idx={2}
              title="Contract Controlled Web2 Service"
              src="/home/case-contract-controlled-web2-service.jpg"
              tags={["HTTP Request", "Secret Management", "High Performance Computation"]}
            >
              <p>Minimize trust when utilizing Web2 services by transferring account ownership from human administrators to Phat Contract. This approach effectively allows any Web2 service to be controlled by your smart contract, eliminating the need for trust in the account owner. This pattern makes every feature lacking in Web3 immediately available to your dApp, enabling use cases such as trust-minimized AI training, big data analytics, CDN, and more.</p>
              <p>To delegate control of Web2 services exclusively to Phat Contract, it must manage API keys and login credentials. With secret management capabilities, Phat Contract can securely store and use secrets. It can access Web2 services via HTTP requests, incorporating complex compute logic such as JSON parsing and JWT generation within the Phat Contract itself.</p>
            </ShowCaseTabPanel>
          </div>
        </div>

        <div className={cn(
          "row-start-5 xl:col-start-7 xl:col-span-8 3xl:col-start-9 3xl:col-span-8",
          "mt-8"
        )}>
          <a
            href="https://github.com/Phala-Network/awesome-phat-contracts"
            className="btn btn-xl btn-third w-full justify-center font-bold uppercase"
            target="_blank"
            rel="noopener"
          >
            Explore Awesome Phat Contract
          </a>
        </div>

        <div className={cn(
          "row-start-6 xl:col-start-3 xl:col-span-12 3xl:col-start-6",
          "section-chat-with-us pt-72 pb-48 3xl:pt-64"
        )}>
          <div className="flex flex-row gap-10">
            <ul className="flex flex-row relative">
              <li className="relative -right-24 z-[3]"><Avatar src="/home/avatar-h4x.jpg" name="Hang" /></li>
              <li className="relative -right-16 z-[2]"><Avatar src="/home/avatar-zoe.jpg" name="Zoe" /></li>
              <li className="relative -right-8 z-[1]"><Avatar src="/home/avatar-dan.jpg" name="Dan" /></li>
              <li><Avatar src="/home/avatar-shelven.jpg" name="Shelven" /></li>
            </ul>
            <div className="flex flex-col gap-2.5">
              <h4 className="font-extrabold text-2xl uppercase">Develop and explore your ideas with us</h4>
              <a
                href="https://discord.gg/2cvTKmF9uh"
                className="btn btn-lg btn-third btn-center-icon justify-between uppercase"
                target="_blank"
                rel="noopener"
              >
                Chat Now!
                <img
                  src="/icons/right-arrow.svg"
                  alt=""
                  className="svg-white icon w-4 h-4"
                />
              </a>
            </div>
          </div>
        </div>

        <div className={cn("row-start-3 xl:col-start-4 xl:col-span-14 3xl:col-start-5 3xl:col-span-16", "-mt-4 -mb-4", "-z-10 untanglable text-white")}>
          <svg viewBox="0 0 1209 266" fill="transparent" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 0V113.5C5.5 148.294 33.7061 176.5 68.5 176.5H1140.5C1175.29 176.5 1203.5 204.706 1203.5 239.5V266" stroke="currentColor" strokeWidth="10"/>
          </svg>
        </div>

        <div className={cn("row-start-5 row-span-2 xl:col-start-15 xl:col-span-3 3xl:col-start-18", "-mt-7 ml-2 3xl:-mt-12", "-z-10 untanglable text-white")}>
          <svg viewBox="0 0 192 484" fill="none">
            <path d="M187 0V388.5C187 423.294 158.794 451.5 124 451.5H7.82843C6.04662 451.5 5.15428 453.654 6.41421 454.914L31 479.5" stroke="currentColor" strokeWidth="10"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

// END: Section Pitch Innovate

//
// Section Pitch Pionner
//

function SectionPitchPioneer() {
  return (
    <section id="section-pitch-pionner" className="relative pb-[156px]">
      <DotBackground dotColor="#2b2b2b" bgColor="#333" />
      <div className={cn(
        "safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24"
      )}>
        <header
          className={cn(
            "row-start-1 xl:col-end-20 xl:col-span-13 3xl:col-end-22 3xl:col-span-12",
            "mt-[14rem]",
            "w-full flex flex-col items-end justify-center relative"
          )}
        >
          <h2 className="text-[3.5rem] font-black uppercase rounded-3xl px-16 py-4 bg-white inline-block">Pioneer</h2>
          <p className="font-medium text-[2rem] text-white mt-6">Work with us on cutting edge research</p>
          <div
            className={cn(
              "absolute top-[-5vw] left-[15vw] 3xl:left-[5vw] w-[30vw] aspect-square -z-[1]"
            )}
          >
            <img src="/home/bg-gear.png" alt="" />
          </div>
        </header>

        <main className={cn("row-start-2 xl:col-start-2 xl:col-span-10 3xl:col-start-4 3xl:col-span-10 mt-32")}>
          <div className={cn("grid grid-cols-6 grid-rows-8 gap-3", "text-white text-xl font-extrabold uppercase leading-normal")}>
            <AreaOfInterestTab idx={0} className="bento-1">
              <h4>Trustless MEV</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={1} className="bento-2">
              <h4>Account Abstraction</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={2} className="bento-3">
              <h4>L2 Sequencer</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={3} className="bento-4">
              <h4>Decentralized API</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={4} className="bento-5">
              <h4>Web3 AI</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={5} className="bento-6">
              <h4>Distributed Computing</h4>
            </AreaOfInterestTab>
            <a
              href="https://discord.gg/fKuFDPj2Zh"
              target="_blank"
              rel="noopener"
              className={cn(
                "bento-7",
                "rounded-xl btn-third p-6 w-full aspect-square flex flex-col gap-3.5 items-center text-center",
              )}
            >
              <span>Join research community</span>
              <VscCommentDiscussion className="w-28 h-28 text-gray-200" />
            </a>
            <AreaOfInterestTab idx={6} className="bento-8">
              <h4>Gateway & CDN</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={7} className="bento-9">
              <h4>Relayers & Validators</h4>
            </AreaOfInterestTab>
          </div>
        </main>

        <aside className={cn("row-start-2 xl:col-end-20 xl:col-span-7 3xl:col-end-22 mt-8", "w-full")}>
          <h3 className="text-3xl text-white font-extrabold mx-2 my-6 uppercase">Area of Interest</h3>
          <div className={cn("bg-blackAlpha-500 rounded-5xl py-8 px-10 text-white h-full")}>
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

        <div className={cn("row-start-1 row-span-2 xl:col-start-1 xl:col-span-full 3xl:col-start-3 3xl:col-span-20", "-z-10 -mt-8 3xl:-mt-12", "text-white")}>
          <svg viewBox="0 0 1526 840" fill="transparent">
            <path stroke="currentColor" strokeWidth="10" d="M 5 -17 L 5 258.125 C 5 303.067261 48.889664 339.5 103.030174 339.5 L 1449 339.5"/>
            <path stroke="currentColor" strokeWidth="10" d="M 1448.5 339 L 1458 339 C 1492.790039 339 1521 367.4953 1521 402.646149 L 1521 767.853821 C 1521 803.0047 1492.790039 831.5 1458 831.5 L 1448.5 831.5"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

// END: Section Pitch Pionner

//
// Section How It Works
//

function SectionHowItWorks() {
  return (
    <section id="section-how-it-works" className={cn("py-32")}>
      <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <h2 className={cn("row-start-1 xl:col-start-6 xl:col-span-10 3xl:col-start-6 3xl:col-span-14", "section-heading mb-16")}>
          How It Works
        </h2>
        <div className={cn("row-start-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18")}>
          <HowItWorksCarousel />
        </div>
        <blockquote
          className={cn(
            "row-start-3 xl:col-start-2 xl:col-span-9 3xl:col-start-4 3xl:col-span-9 mt-40 mb-16 pr-4 flex flex-col justify-center",
            "quote"
          )}
        >
          <p>By the people.</p>
          <p>For the people.</p>
        </blockquote>
        <div className={cn("row-start-3 xl:col-end-20 xl:col-span-9 3xl:col-end-22", "mt-40 mb-16 px-12 py-14 bg-primary rounded-3xl max-w-[44.75rem]")}>
          <p className={cn("text-3xl font-normal leading-normal uppercase")}>A Decentralized Off-chain Compute Infrastructure like no other.</p>
          <p className={cn("text-2xl font-light mb-4")}>Secured by</p>
          <StatsCard />
        </div>
        <div className={cn("row-start-4 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18")}>
          <div className={cn("mx-auto rounded-3xl aspect-[1360/760] bg-gray-200 relative overflow-hidden")}>
            <img
              src="/home/global-network.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={cn("row-start-5 xl:col-start-8 xl:col-span-6 3xl:col-start-10", "text-center pt-32")}>
          <a
            href="https://docs.phala.network/v1/compute-providers/basic-info"
            className={cn("btn btn-lg btn-primary w-full justify-center text-black uppercase")}
            target="_blank"
            rel="noopener"
          >
            Provide Compute
          </a>
        </div>
      </div>
    </section>
  )
}

// END: Section How It Works

//
// Section Highlights
//

function PostCard({ src, href, title, intro }: { src: string, href: string, title: string, intro: string }) {
  return (
    <article className="flex flex-col gap-6">
      <a
        href={href}
        className={cn("block bg-gray-200 rounded-4xl overflow-hidden border border-solid border-gray-50 w-full aspect-[8/5] transition-all hover:scale-[0.98]")}
        target="_blank"
        rel="noopener"
      >
        <img
          src={src}
          alt=""
          className={cn("object-fit w-full h-full")}
        />
      </a>
      <header>
        <a href={href} className="btn-link text-xl font-bold">{title}</a>
      </header>
      <div>
        <p className={cn("text-sm")}>{intro}</p>
      </div>
    </article>
  )
}

function SectionHighlights() {
  return (
    <section id="section-highlights" className={cn("py-32")}>
      <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <h2 className={cn("row-start-1 col-span-full", "section-heading")}>Today's Highlights</h2>
        <div className={cn("row-start-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4", "flex flex-row gap-4")}>
          <PostCard
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2NcnOQftkoD04bkeuZ8oaA.jpeg"
            href="https://medium.com/phala-network/phala-monthly-newsletter-may-2023-a92d03965cc8"
            title="Phala Monthly Newsletter: May 2023"
            intro="May has been an action-packed month for Phala! Read more about what we worked on this past month."
          />
          <PostCard
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DjcDv3NibNPMSSTonr_aKg.jpeg"
            href=" https://medium.com/phala-network/phala-monthly-newsletter-april-2023-ea1afc7c6be7"
            title="Phala Monthly Newsletter: April 2023"
            intro="Dive in what happened in Phala Ecosystem in the month of April!"
          />
          <PostCard
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*398XH6BwltFUasR5sMO4xg.png"
            href="https://medium.com/phala-network/phala-monthly-newsletter-march-2023-469a7ccfa2db"
            title="Phala Monthly Newsletter: March 2023"
            intro="Dive in what happened in Phala Ecosystem in the month of March!"
          />
        </div>
        <div className={cn("row-start-3 xl:col-start-8 xl:col-span-6 3xl:col-start-10", "text-center pt-32")}>
          <a
            href="https://medium.com/phala-network"
            className={cn("btn btn-lg w-full justify-center btn-primary text-black uppercase")}
            target="_blank"
            rel="noopener"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  )
}

// END: Section Highlights

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
  title: 'Phala Network',
}

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionFeatures />
      <SectionPitchIntro />
      <SectionPitchAccelerate />
      <SectionPitchInnovate />
      <SectionPitchPioneer />
      <SectionHowItWorks />
      <SectionHighlights />
      <SectionSubscription />
    </>
  )
}
