import { type ReactNode } from 'react'
import { type Metadata } from 'next'

import Link from 'next/link'
import { VscCommentDiscussion, VscNote } from 'react-icons/vsc'
import { MdArrowForward } from 'react-icons/md'

import { cn } from '@/lib/utils'
import DotBackground from '@/components/DotBackground'
import Squircle from '@/components/Squircle'
import SiteFooter from '@/components/SiteFooter'

import { NoCodeWizardStepTrigger, NoCodeWizardStepDetails, NoCodeWizardStepPreview } from './_components/NoCodeWizard'
import { CodeExampleTab, CodeExampleCodeViewer } from './_components/CodeExampleTabs'
import { ShowCaseTab, ShowCaseTabPanel } from './_components/ShowCaseTabs'
import { AreaOfInterestTab, AreaOfInterestTabPanel } from './_components/AreaOfInterestTabs'
import SubscribeForm from './_components/SubscribeForm'
import { Advantages } from './_components/Advantages'
import { HowItWorksCarousel } from './_components/HowItWorksCarousel'
import { StatsCard } from './_components/StatsCard'
import { RealtimeStats } from './_components/RealtimeStats'
import { FullPageSwiper } from './_components/FullPageSwiper'
import { FeaturePage, FixedFeaturePage } from './_components/FeaturePage'
import { SectionHowItWorks } from './_components/SectionHowItWorks'
import './home.css'


//
// Section Hero
//

function SupportedChains() {
  return (
    <div className={cn("supported-chains", "flex flex-col-reverse lg:flex-col gap-1 lg:gap-2 items-end w-full")}>
      <Link
        href="https://docs.phala.network/developers/phat-contract/supported-chains"
        className={cn("flex flex-row gap-2 items-center", "btn-view-all btn-with-arrow")}
        target="_blank"
        rel="noopener"
      >
        <span className={cn("text-xs lg:text-base font-semibold")}>View All Supported Networks</span>
        <MdArrowForward className="untanglable text-phalaPurple-500 h-5 w-5 arrow" />
      </Link>
      <Squircle
        className="flex flex-row justify-between gap-5 px-5 py-1 lg:py-0.5 w-full lg:w-auto"
        cornerRadius={32}
        fill="rgba(255, 255, 255, 0.64)"
        shadow={[
          '0px 10px 15px rgba(0, 0, 0, 0.1)',
          '0px 4px 6px rgba(0, 0, 0, 0.05)'
        ]}
      >
        <img
          src="/home/Ethereum.png"
          alt="Ethereum"
          className="w-9 h-9 lg:w-16 lg:h-16 opacity-80"
        />
        <img
          src="/home/Bnbchain.png"
          alt="Bnbchain"
          className="w-9 h-9 lg:w-16 lg:h-16 opacity-80"
        />
        <img
          src="/home/Moonbean.png"
          alt="Moonbean"
          className="w-9 h-9 lg:w-16 lg:h-16 opacity-80"
        />
        <img
          src="/home/Arbittrum.png"
          alt="Arbittrum"
          className="w-9 h-9 lg:w-16 lg:h-16 opacity-80"
        />
        <img
          src="/home/Astar.png"
          alt="Astar"
          className="w-9 h-9 lg:w-16 lg:h-16 opacity-80"
        />
      </Squircle>
    </div>
  )
}

function SectionHero() {
  return (
    <section id="section-hero" className={cn("section-hero section-slide")}>
      <div className={cn("background", "absolute top-0 left-0 w-full h-full z-[-1] untanglable overflow-hidden")}>
        <video
          className="object-cover aspect-[3840/1980] h-full min-w-full"
          autoPlay muted loop playsInline
        >
          <source src="https://nft-assets.phala.world/network/bg20230605.mp4" type="video/mp4" />
          <source src="https://nft-assets.phala.world/network/bg20230605.webm" type="video/webm" />
        </video>
      </div>

      <div
        className={cn(
          "flex flex-col h-screen justify-center items-center",
          "uppercase text-center flex flex-col gap-4 lg:gap-16 justify-center w-full",
        )}
      >
        <header>
          <h2 className={cn("text-2xl lg:text-4xl font-normal text-[#222] leading-8 lg:leading-10 tracking-wider mb-2.5 px-12")}>
            Computation as it's meant to be
          </h2>
          <h3 className={cn(
            "text-lg lg:text-2xl font-extrabold w-full overflow-hidden",
            "flex flex-col lg:flex-row lg:gap-2 justify-center items-center text-center"
          )}>
            <span>On-Chain verification.</span>
            <span className="inline-flex">Off-Chain <Advantages /></span>
          </h3>
        </header>
        <div className={cn("flex flex-col xl:flex-row gap-2.5 lg:gap-5 mx-auto")}>
          <a
            className={cn("btn btn-xl text-sm font-semibold lg:text-base btn-primary justify-center")}
            href="#section-features"
          >
            Let's Build!
          </a>
          <a
            className={cn("btn btn-xl text-sm font-semibold lg:text-base btn-secondary justify-center")}
            href="https://discord.gg/gZjZuVHXtm"
            target="_blank"
            rel="noopener"
          >
            Join Community
          </a>
        </div>
      </div>

      <div
        className={cn(
          "safe-viewport",
          "absolute left-0 right-0 bottom-0 lg:bottom-5 grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24",
          "mb-6"
        )}
      >
        <div
          className={cn(
            "xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
            "flex flex-col items-end gap-2 lg:gap-5 lg:flex-row lg:justify-between",
          )}
        >
          <RealtimeStats />
          <SupportedChains />
        </div>
      </div>
    </section>
  )
}

// END: Section Hero

//
// Section Pitch Intro
//

function SectionPitchIntro() {
  return (
    <section className={cn('pt-16 lg:pt-32 flex flex-col gap-6 lg:gap-12')}>
      <div className="text-2xl lg:text-3xl text-center">FROM</div>
      <div className={cn("flex flex-col lg:flex-row lg:items-center gap-2.5")}>
        <div
          className={cn(
            "text-right text-white lg:flex-1 lg:flex-grow",
            "text-4xl lg:text-5xl"
          )}
        >
          <h4 className="bg-blackAlpha-800 rounded-tr-3xl rounded-br-3xl font-black py-4 px-10 lg:w-full">NO CODE</h4>
        </div>
        <div className={cn("w-full flex justify-center lg:w-auto lg:block rotate-90 lg:rotate-0 m-2.5")}>
          <svg
            className={cn(
              "w-[42px] h-[26] lg:w-[84px] lg:h-[52px]",
            )}
            viewBox="0 0 93 63"
            fill="transparent"
          >
            <path d="M10 31.5H84.5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
            <path d="M62.002 57.0034L86.5894 32.4159C87.3705 31.6349 87.3705 30.3685 86.5894 29.5875L62.002 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
            <path d="M31.0017 57.0034L6.41421 32.4159C5.63317 31.6349 5.63317 30.3685 6.41421 29.5875L31.0017 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
          </svg>
        </div>
        <div
          className={cn(
            "lg:flex-1 text-black flex flex-row justify-end lg:block",
            "text-4xl lg:text-5xl"
          )}
        >
          <h4 className="bg-[#f0f0f0] rounded-tl-3xl rounded-bl-3xl font-black py-4 px-10">FULL CODE</h4>
        </div>
      </div>
      <div className={cn("flex flex-col items-center gap-1")}>
        <div className="text-2xl lg:text-4xl">WE GOT YOU</div>
        <div className="text-5xl lg:text-[3.5rem] font-black">COVERED</div>
      </div>
      <div className="overflow-hidden max-w-[100vw]">
        <svg viewBox="0 0 1880 253" fill="none" className="w-[300vw] -translate-x-[100vw] lg:w-screen lg:-translate-x-0">
          <circle cx="886" cy="22" r="12" fill="#CDFA50"/>
          <circle cx="940" cy="22" r="12" fill="#7F4af0"/>
          <circle cx="994" cy="22" r="12" fill="black"/>
          <path d="M940 28V318.5" stroke="#7F52FA" strokeWidth="4" strokeLinecap="round"/>
          <path d="M886 33V126C886 166.317 853.317 199 813 199H2" stroke="#CDFA50" strokeWidth="4" strokeLinecap="round"/>
          <path d="M994 33V126C994 166.317 1026.68 199 1067 199H1878" stroke="black" strokeWidth="4" strokeLinecap="round"/>
          <path d="M938 177V197C938 227.928 912.928 253 882 253H998C967.072 253 942 227.928 942 197V177H938Z" fill="#7f4af0"/>
        </svg>
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
        <div className="flex flex-col gap-2.5">
          {href ? (
            <a href={href} className="title" target="_blank" rel="noopener">{title}</a>
          ) : (
            <h4 className="title">{title}</h4>
          )}
          {tags && tags.length ? (
          <ul className={"flex flex-row flex-wrap gap-2"}>
            {tags.map((tag, idx) => (
              <li key={idx}>
                <span className="label">{tag}</span>
              </li>
            ))}
          </ul>
          ) : null}
          <div className="description">{children}</div>
        </div>
        {live ? (
          href ? (
            <a href={href} className={cn("flex flex-row items-center gap-3.5 mt-6")} target="_blank" rel="noopener">
              <img
                src="/icons/gear.svg"
                alt=""
                className={cn("untanglable w-8 h-8 opacity-80")}
              />
              <span className={cn("text-blackAlpha-800 text-base font-extrabold")}>LIVE !</span>
            </a>
          ) : (
            <div className={cn("flex flex-row items-center gap-3.5 mt-6")}>
              <img
                src="/icons/gear.svg"
                alt=""
                className={cn("untanglable w-8 h-8 opacity-80")}
              />
              <span className={cn("text-blackAlpha-800 text-base font-extrabold")}>LIVE !</span>
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
      <Squircle cornerRadius={48} fill="#7f4af0">
        <DotBackground dotColor="#6b3eca" bgColor="transparent" />
        <div className={cn(
          "safe-viewport",
          "grid gap--x-4 grid-cols-6 xl:grid-cols-20 3xl:grid-cols-24",
          "pt-16 pb-24 lg:pt-32 lg:pb-52 px-0"
        )}>
          <header
            className={cn(
              "row-start-1 col-span-4 col-start-2 xl:col-start-8 xl:col-span-6 3xl:col-start-10 text-white flex flex-col items-center gap-3 xl:gap-6",
            )}
          >
            <h2 className="text-4xl xl:text-6xl font-black uppercase">Accelerate</h2>
            <p className={cn("text-base xl:text-2xl text-center")}>Scale your idea with prebuilt blueprints in minutes</p>
          </header>

          <div
            className="row-start-2 col-span-full flex justify-center relative mt-4 -bottom-[2px]"
          >
            <svg width="149" height="229" viewBox="0 0 149 229">
              <path id="Path" fill="#ffffff" stroke="none" d="M -0.5 228 L -10 228 L -10 228 L 151 228 L 152 228 L 149.5 228 C 109.735001 228 77.5 195.764008 77.5 156 L 77.5 152 L 71.5 152 L 71.5 156 C 71.5 195.764008 39.2645 228 -0.5 228 Z"/>
              <path id="path1" fill="#ffffff" stroke="none" d="M 85.9356 46.297104 L 60.869904 71.362793 L 57.429497 70.9991 C 54.908997 67.087097 53.804298 62.429901 54.299103 57.802597 C 54.7939 53.175293 56.858398 48.856995 60.149002 45.566406 C 63.439697 42.275696 67.758003 40.211197 72.3853 39.7164 C 77.012604 39.221603 81.669701 40.326401 85.581802 42.846893 L 85.9356 46.297104 Z"/>
              <path id="path2" fill="#ffffff" stroke="none" d="M 88.936302 74.375305 C 85.642601 77.6642 81.321701 79.725708 76.6931 80.216705 C 72.064499 80.707611 67.407303 79.598297 63.497002 77.073502 L 63.133301 73.633102 L 88.198997 48.567398 L 91.639 48.931091 C 94.165001 52.842407 95.274002 57.5009 94.781998 62.1306 C 94.290001 66.760406 92.226997 71.081909 88.936302 74.375305 Z"/>
              <path id="path3" fill="#ffffff" stroke="none" d="M 91.595001 42.925797 C 88.2258 39.531296 83.925201 37.212891 79.237602 36.264404 C 74.550003 35.315903 69.686401 35.7798 65.262703 37.597595 C 60.838997 39.415298 57.054298 42.505005 54.387802 46.475296 C 51.721401 50.445602 50.293301 55.117996 50.284401 59.900604 C 50.275398 64.683105 51.686001 69.360809 54.337502 73.341095 C 56.988998 77.321411 60.762199 80.425201 65.179001 82.259491 C 69.595901 84.093811 74.457703 84.575989 79.148903 83.645111 C 83.839996 82.714111 88.1493 80.411896 91.530998 77.029999 C 96.052002 72.51059 98.597 66.383499 98.609001 59.991104 C 98.621002 53.598694 96.098999 47.462097 91.595001 42.925797 Z M 90.248001 88.378296 L 83.495201 91.169998 L 79.641899 103.024994 L 69.8172 103.024994 L 65.5756 91.189606 L 58.8423 88.378296 L 49.0126 93.371796 L 47.720001 94.045197 L 40.794998 87.120102 L 46.166901 75.752106 L 43.365398 69.008911 L 31.515701 65.12619 L 31.515701 55.311203 L 43.3507 51.059906 L 46.152199 44.326599 L 40.505001 33.2043 L 47.43 26.279205 L 58.793198 31.656097 L 65.521599 28.859497 L 68.961998 18.381104 L 69.409203 17 L 79.194702 17 L 83.450897 28.844803 L 90.189003 31.636398 L 100.018997 26.647797 L 101.311996 25.979401 L 108.237 32.904495 L 102.860001 44.282303 L 105.637001 51.025497 L 117.505997 54.913101 L 117.505997 64.698608 L 105.676003 68.945007 L 102.864998 75.678406 L 108.530998 86.810501 L 101.611 93.730591 L 90.248001 88.378296 Z"/>
              <path id="path4" fill="none" stroke="#ffffff" strokeWidth="6" d="M 131.5 60 C 131.5 91.480225 105.980232 117 74.5 117 C 43.019768 117 17.5 91.480225 17.5 60 C 17.5 28.519775 43.019768 3 74.5 3 C 105.980232 3 131.5 28.519775 131.5 60 Z"/>
              <path id="path5" fill="none" stroke="#ffffff" strokeWidth="6" d="M 74.5 117 L 74 228"/>
            </svg>
          </div>

          {/* Steps for blueprints */}
          <div className={cn(
            "row-start-3 col-span-full xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
          )}>
            <div className="w-full flex flex-row">
              <div className={cn("rounded-3xl overflow-hidden flex flex-col xl:flex-row bg-white p-2.5")}>
                <div className={cn("xl:aspect-[1800/1240] relative xl:w-[70%]")}>
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
                <div className="flex flex-col justify-between px-8 py-10 xl:w-[30%]">
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
                  <ul className="flex flex-col gap-2.5 mt-5 xl:mt-0">
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

          <div className={cn(
            "row-start-4 col-span-full xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
            "flex flex-row justify-center",
          )}>
            <svg width="150" height="224" viewBox="0 0 150 224" className="scale-[101%]">
              <path id="Path" fill="#ffffff" stroke="none" d="M 110 0 L 159 0 L 159 0 L -3 0 L -3.000007 0 L 40 0 C 57.6731 0 72 14.326904 72 32 L 72 76 L 78 76 L 78 32 C 78 14.326904 92.326897 0 110 0 Z"/>
              <path id="path1" fill="#ffffff" stroke="none" d="M 6e-05 224 L -3.00002 224 L -2 224 L 153 224 L 153 224 L 150 224 C 110.236 224 78.000099 191.764999 78.000099 152 L 78.000099 148 L 72.000099 148 L 72.000099 152 C 72.000099 191.764999 39.764599 224 6e-05 224 Z"/>
              <path id="path2" fill="none" stroke="#ffffff" stroke-width="6" d="M 75 0 L 75 224"/>
            </svg>
          </div>

          {/* CTA: Get your own lensAPI oracle now */}
          <div className={cn(
            "row-start-4 col-span-full xl:col-start-7 xl:col-span-8 3xl:col-start-9",
            "px-10"
          )}>
            <a
              href="https://bricks.phala.network/?source=get-your-own"
              target="_blank"
              rel="noopener"
              className={cn(
                "btn btn-third flex-row w-full bg-[#6C37C9] py-5 px-5 xl:px-10 gap-6 items-center justify-center",
                "mt-10"
              )}
            >
              <span className="text-sm xl:text-lg font-bold uppercase">Get your own LensAPI oracle now</span>
              <img
                src="/icons/right-arrow.svg"
                alt=""
                className="svg-white inline-block w-5 h-5"
                />
            </a>
          </div>

          {/* Explore all of our blueprints */}
          <div className={cn(
            "col-span-full xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
          )}>
            <div
              className={cn(
                "bg-white rounded-3xl p-4 xl:p-16",
                "grid grid-cols-1 xl:grid-cols-3 gap-x-5",
              )}
            >
              <header className={cn("flex flex-col gap-3 xl:gap-5 py-7")}>
                <h3 className={cn("text-2xl xl:text-4xl text-blackAlpha-900 font-black uppercase ml-1")}>Explore all of our blueprints</h3>
                <p className={cn("text-base xl:text-lg text-blackAlpha-700 ml-1.5")}>Explore the marketplace today to find your ideal blueprints, streamlining your development process.</p>
                <a
                  href="https://bricks.phala.network"
                  className={cn(
                    "btn btn-third flex-row w-full py-5 px-5 xl:px-10 gap-6 items-center justify-center",
                    "hidden xl:flex",
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="font-bold uppercase">Learn about blueprints</span>
                  <img
                    src="/icons/right-arrow.svg"
                    alt=""
                    className="svg-white inline-block w-5 h-5"
                    />
                </a>
              </header>
              <div
                className={cn(
                  "col-span-2",
                  "grid grid-cols-1 xl:grid-cols-2 gap-5"
                )}
              >
                <BlueprintCard
                  title="LensAPI Oracle"
                  illustration="/home/blueprint-lens-api-oracle.png"
                  tags={["Polygon", "EVM", "Lens"]}
                  href="https://bricks.phala.network/?source=blueprint-card-LensAPI-Oracle"
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
                <a
                  href="https://bricks.phala.network"
                  className={cn(
                    "btn btn-third flex-row w-full py-5 px-5 xl:px-10 gap-6 items-center justify-center",
                    "xl:hidden mb-5",
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="font-bold uppercase">Learn about blueprints</span>
                  <img
                    src="/icons/right-arrow.svg"
                    alt=""
                    className="svg-white inline-block w-5 h-5"
                    />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Squircle>

      <div className="w-screen overflow-hidden -mt-[1px] relative">
        <div className={cn(
          "safe-viewport",
          "grid gap--x-4 grid-cols-6 xl:grid-cols-20 3xl:grid-cols-24",
          "mb-36 xl:mb-44"
        )}>
          <div className={cn("row-start-1 hidden xl:block xl:col-start-9 xl:col-span-3", "z-0 untanglable")}>
            <svg width="169" height="396" viewBox="0 0 169 396">
              <path fill="none" stroke="#7f4af0" strokeWidth="6" strokeLinecap="round" d="M 75 64 L 75 304.5 C 75 337.636993 101.862999 364.5 135 364.5 L 165.5 364.5"/>
              <path fill="#7f4af0" stroke="none" d="M 150.003006 0 L 159 0 L 159 0 L -3 0 L -1.999991 0 L 0.04014 0 C 39.8046 0 72.0401 32.235504 72.0401 72 L 72.0401 76 L 78.003098 76 L 78.003098 72 C 78.003098 32.235504 110.238998 0 150.003006 0 Z"/>
            </svg>
          </div>

          <div className={cn("row-start-1 col-start-1 md:col-start-2 col-span-5 xl:hidden", "z-0 untanglable")}>
            <svg width="225" height="261" viewBox="0 0 225 261">
              <path fill="#7f52fa" stroke="none" d="M 56 76 L 56 56 C 56 25.072098 30.927898 0 0 0 L 116 0 C 85.071999 0 60 25.072098 60 56 L 60 76 L 56 76 Z"/>
              <path fill="none" stroke="#7f52fa" stroke-width="4" d="M 58 0 L 58 207.5 C 58 222.136002 69.864502 234 84.5 234 L 84.5 234"/>
              <path fill="none" stroke="#7f52fa" stroke-width="4" d="M 84 234 L 296.820496 234"/>
            </svg>
          </div>

          <div className="row-start-1 col-start-3 col-span-auto xl:col-start-11 flex flex-col justify-end h-full untanglable">
            <div className="bg-phalaPurple-600 h-16 w-screen rounded-l-xl" />
          </div>

          <div className={cn(
            "row-start-1 col-start-3 col-span-4 xl:col-start-11 xl:col-span-9 flex flex-col justify-end h-full",
            "z-[1]",
          )}>
            <div className="text-3xl xl:text-6xl text-phalaPurple-500 font-black tracking-tight mb-10 pl-1">
              <div>INSPIRE</div>
              <div>THE NEXT BLUEPRINT</div>
            </div>
            <a
              href="https://github.com/Phala-Network/phala-blueprint-proposals"
              className="bg-phalaPurple-500 text-white uppercase text-sm xl:text-lg flex flex-row gap-5 items-center h-16 rounded-xl px-5 xl:px-10 py-5 btn-with-arrow"
              target="_blank"
              rel="noopener"
            >
              Propose now
              <MdArrowForward className="untanglable text-white h-5 w-5 arrow inline-block" />
            </a>
          </div>
        </div>

        <div className={cn(
          "absolute left-0 bottom-0 xl:top-[12.2rem]",
          "safe-viewport",
          "grid gap--x-4 grid-cols-6 xl:grid-cols-20 3xl:grid-cols-24",
          "untanglable"
        )}>
          <div className={cn("row-start-1 hidden xl:block xl:col-start-1 xl:col-span-8 3xl:col-span-10", "z-0")}>
            <svg width="613" height="377" viewBox="0 0 613 377">
              <path fill="#cdfa50" stroke="none" d="M 463.497009 377 L 454.5 377 L 455 377 L 616 377 L 615.5 377 L 613.460022 377 C 573.695007 377 541.460022 344.765015 541.460022 305 L 541.460022 301 L 535.497009 301 L 535.497009 305 C 535.497009 344.765015 503.260986 377 463.497009 377 Z"/>
              <path fill="none" stroke="#cdfa50" strokeWidth="6" strokeLinecap="round" d="M 3 3 L 497.439301 3 C 520.116455 3 538.5 29.786591 538.5 62.829559 L 538.5 354"/>
            </svg>
          </div>

          <div className={cn("row-start-1 col-start-1 col-span-3 md:col-start-2 xl:hidden", "z-0")}>
            <svg width="135" height="130" viewBox="0 0 135 130">
              <path fill="#cdfa50" stroke="none" d="M 75 54 L 75 74 C 75 104.928001 49.928001 130 19 130 L 135 130 C 104.072006 130 79 104.928001 79 74 L 79 54 L 75 54 Z"/>
              <path fill="none" stroke="#cdfa50" strokeWidth="4" strokeLinecap="round" d="M 2 2 L 45 2 C 62.672997 2 77 16.326904 77 34 L 77 128"/>
            </svg>
          </div>

          <div className={cn("row-start-1 col-start-1 col-span-1 relative left-[-50%] md:left-0 xl:col-end-6 flex flex-col justify-start items-end h-full", "z-[1]")}>
            <div className="bg-[#cdfa50] h-1 xl:h-1.5 w-screen rounded-l-xl" />
          </div>
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
      <Squircle cornerRadius={48} fill="#d0f964">
        <DotBackground dotColor="#afd153" bgColor="transparent" />
        <div className={cn(
          "safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24 px-0",
          "overflow-hidden"
        )}>
          <header
            className={cn(
              "row-start-1 col-span-full xl:col-start-4 xl:col-span-6 3xl:col-start-6",
              "pt-16 xl:pt-32",
              "flex flex-col gap-3 xl:gap-6",
              "px-9"
            )}
          >
            <h2 className="text-4xl xl:text-6xl font-black uppercase">Innovate</h2>
            <div className="text-base xl:text-2xl">
              <p>Full power, Full control.</p>
              <p>Empower your ideas.</p>
            </div>
          </header>
          
          <div className={cn(
            "row-start-2 col-span-full xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
            "rounded-3xl bg-blackAlpha-800 overflow-hidden px-5 xl:px-20 py-12"
          )}>
            <h4 className={cn("text-4xl font-black text-white uppercase text-center mx-auto")}>Access the unique functionalities of Phat Contract</h4>
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

          {/* CTA for docs site */}
          <div
            className={cn(
              "row-start-3 xl:col-start-8 xl:col-span-6 3xl:col-start-10 3xl:col-span-6",
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
          </div>

          <div className={cn(
            "row-start-4 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
            "flex flex-row gap-6"
          )}>
            <Squircle
              cornerRadius={32}
              fill="#323233"
              className="hidden xl:block p-2.5"
            >
              <ul className={cn("max-w-md flex flex-col gap-2.5 h-full")}>
                <ShowCaseTab idx={0} summary="Cross-chain DEX aggregator">
                </ShowCaseTab>
                <ShowCaseTab idx={1} summary="Self-owned Oracles">
                </ShowCaseTab>
                <ShowCaseTab idx={2} summary="Contract Controlled Web2 Service">
                </ShowCaseTab>
                <a
                  className={cn(
                    "rounded-3xl px-5 py-10 bg-gray-800 flex flex-row items-center justify-center gap-14 relative flex-grow",
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
            </Squircle>

            <Squircle
              className="flex-1 p-2.5"
              cornerRadius={32}
              fill="##323233"
            >
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
          </Squircle>
            </div>

          <div className={cn(
            "row-start-5 xl:col-start-7 xl:col-span-8 3xl:col-start-9 3xl:col-span-8",
            "my-8",
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

        </div>
      </Squircle>

      <div className={cn(
        "safe-viewport",
        "invisible xl:visible",
        "py-20"
        // "row-start-6 xl:col-start-3 xl:col-span-12 3xl:col-start-6",
        // "section-chat-with-us pt-72 pb-48 3xl:pt-64"
      )}>
        <div className="flex flex-col gap-5 xl:gap-10">
          <div className="grid xl:grid-cols-20 3xl:grid-cols-24">
            <div className="col-start-1 col-span-8 3xl:col-span-7">
              <h4 className="text-right font-extrabold text-2xl uppercase">Develop and explore your ideas with us</h4>
            </div>
          </div>
          <ul className="flex flex-row relative">
            <li className="relative -right-24 z-[3]"><Avatar src="/home/avatar-h4x.jpg" name="Hang" /></li>
            <li className="relative -right-16 z-[2]"><Avatar src="/home/avatar-zoe.jpg" name="Zoe" /></li>
            <li className="relative -right-8 z-[1]"><Avatar src="/home/avatar-dan.jpg" name="Dan" /></li>
            <li><Avatar src="/home/avatar-shelven.jpg" name="Shelven" /></li>
          </ul>
          <div className="grid xl:grid-cols-20 3xl:grid-cols-24">
            <div className="col-start-1 col-span-8 3xl:col-span-7">
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
    <section id="section-pitch-pionner">
      <Squircle cornerRadius={48} fill="#333">
      <DotBackground dotColor="#2b2b2b" bgColor="transparent" />
      <div className={cn(
        "safe-viewport",
        "grid gap-4 grid-cols-6 xl:grid-cols-20 3xl:grid-cols-24",
        "py-16 xl:py-32 px-0",
      )}>

        <header
          className={cn(
            "row-start-1 col-end-6 col-span-4 xl:col-end-16 xl:col-span-6 3xl:col-end-18",
            "flex flex-col gap-3 xl:gap-6",
            "text-white text-right",
          )}
        >
          <h2 className="text-4xl xl:text-6xl font-black uppercase">Pioneer</h2>
          <div className="text-base xl:text-2xl">
            <p>Work with us</p>
            <p>on cutting edge research</p>
          </div>
        </header>

        <main className={cn("row-start-2 invisible col-span-full xl:visible xl:col-end-19 xl:col-span-10 3xl:col-end-21")}>
          <div className={cn("grid grid-cols-6 grid-rows-8 gap-2.5", "text-white text-xl font-extrabold")}>
            <AreaOfInterestTab idx={0} className="bento-1">
              <h4 className="uppercase">Trustless MEV</h4>
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
            <a
              href="https://discord.gg/fKuFDPj2Zh"
              target="_blank"
              rel="noopener"
              className={cn(
                "bento-8",
                "rounded-4xl btn-third p-6 w-full aspect-square flex flex-col gap-3.5 items-left justify-center text-right",
                "uppercase",
              )}
            >
              <VscCommentDiscussion className="w-36 h-36 text-gray-200" />
              <div>Join research community</div>
            </a>
            <AreaOfInterestTab idx={6} className="bento-9">
              <h4 className="uppercase">Gateway & CDN</h4>
            </AreaOfInterestTab>
            <AreaOfInterestTab idx={7} className="bento-3">
              <h4 className="uppercase">Relayers & Validators</h4>
            </AreaOfInterestTab>
          </div>
        </main>

        <aside className={cn("row-start-2 col-span-full xl:col-start-2 xl:col-span-7 3xl:col-start-4")}>
          <Squircle cornerRadius={48} fill="#fff" className="p-10">
            <h3 className="text-3xl font-black uppercase">Area of Interest</h3>
            <hr className="my-5 xl:my-10 border-blackAlpha-800 border-t border-solid" />
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
          </Squircle>
        </aside>
      </div>
      </Squircle>
    </section>
  )
}

// END: Section Pitch Pionner

//
// Section SectionGlobalDistribution
//

function SectionGlobalDistribution() {
  return (
    <section className="section-global-distribution">
      <div className={cn("safe-viewport", "grid gap-8 xl:gap-16 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <blockquote
          className={cn(
            "row-start-3 col-span-1 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18 flex flex-col justify-center",
            "mt-16 text-center",
            "quote"
          )}
        >
          <p>By the people.</p>
          <p>For the people.</p>
        </blockquote>
        <div
          className={cn(
            "row-start-4 col-span-full xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
            "z-10 w-full flex flex-col items-center gap-3 lg:gap-6 mt-6 lg:mt-12",
            "text-overlay"
          )}
        >
          <h3 className={cn("text-base lg:text-3xl text-center px-2.5 md:px-8")}>A Decentralized Off-chain Compute Infrastructure like no other.</h3>
          <StatsCard />
        </div>
        <div className={cn(
          "row-start-4 col-span-full xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
          "z-0 overflow-hidden rounded-3xl",
        )}>
          <div className="bg-video-container">
            <video
              className={cn("object-cover aspect-[3840/1980] h-full min-w-full")}
              autoPlay muted loop playsInline
            >
              <source src="https://nft-assets.phala.world/network/worldmap20230708.mp4" type="video/mp4" />
              <source src="https://nft-assets.phala.world/network/worldmap20230708.webm" type="video/webm" />
            </video>
          </div>
        </div>
        <div className={cn("row-start-5 col-span-full xl:col-start-8 xl:col-span-6 3xl:col-start-10", "text-center")}>
          <a
            href="https://app.phala.network/"
            className={cn(
              "btn btn-xl btn-primary w-full justify-center text-black uppercase",
              "font-semibold text-sm lg:text-base xl:text-lg"
            )}
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
    <article className={cn("post-card", "flex flex-col gap-2.5")}>
      <a
        href={href}
        className={cn(
          "block bg-gray-200 rounded-3xl overflow-hidden border border-solid border-gray-50 w-full aspect-[8/5] shadow-lg",
          "transition-all hover:transition-all hover:shadow-md hover:scale-[0.98]",
        )}
        target="_blank"
        rel="noopener"
      >
        <img
          src={src}
          alt=""
          className={cn("object-fit w-full h-full")}
        />
      </a>
      <header className="mt-2.5">
        <a
          href={href}
          className={cn(
            "text-xl font-bold hover:text-phalaPurple-500 block flex-none",
          )}
        >
          <span>{title}</span>
          <MdArrowForward className="untanglable text-phalaPurple-500 h-5 w-5 arrow inline-block" />
        </a>
      </header>
      <div>
        <p className={cn("text-sm")}>{intro}</p>
      </div>
    </article>
  )
}

function SectionHighlights() {
  return (
    <section className={cn("section-highlights", "py-16 lg:py-32")}>
      <div className={cn("safe-viewport", "grid grid-cols-1 gap-8 lg:gap-16 xl:grid-cols-20 3xl:grid-cols-24")}>
        <h2 className={cn("row-start-1 col-span-full", "section-heading")}>Today's Highlights</h2>
        <div className={cn("row-start-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4", "flex flex-col gap-8 lg:flex-row lg:gap-4")}>
          <PostCard
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*M1FsOwECPN2ETnlG4HydvA.png"
            href="https://medium.com/phala-network/lensapi-oracle-supercharge-your-web3-social-app-a413c936df2b"
            title="LensAPI Oracle: Supercharge Your Web3 Social App"
            intro="Getting started with the LensAPI Oracle in three easy steps!"
          />
          <PostCard
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*g-X-L78SPN_xcgiSpo-bIQ.png"
            href="https://medium.com/phala-network/phat-contract-smart-contracts-now-smarter-c5e62080d7e6"
            title="Phat Contract: Smart Contracts. Now Smarter."
            intro="Connect your smart contract anywhere. The Web3 Builders Stack just got a major upgrade."
          />
          <PostCard
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5gLyKD05U637NOEqf8hw5g.png"
            href="https://medium.com/phala-network/revolutionary-stake-to-compute-model-takes-the-stage-with-phat-contracts-latest-tokenomic-update-c9bcef4d6d83"
            title="Revolutionary Stake-to-Compute Model Takes the Stage with Phat Contract’s Latest Tokenomic Update"
            intro="Our novel tokenomics model, Stake-to-Compute, enables developers to rent computing power from Phala for free by staking $PHA!"
          />
        </div>
        <div className={cn("row-start-3 xl:col-start-8 xl:col-span-6 3xl:col-start-10", "text-center")}>
          <a
            href="https://medium.com/phala-network"
            className={cn(
              "btn btn-xl w-full justify-center btn-primary text-black uppercase",
              "font-semibold text-sm lg:text-base xl:text-lg"
            )}
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
  themeColor: 'rgba(232, 233, 234, 1)',
}

export default async function Home() {
  return (
    <>
      <FullPageSwiper>
        <SectionHero />
        <FeaturePage index={0} />
        <FeaturePage index={1} />
        <FeaturePage index={2} />
        <FeaturePage index={3} />
        <FeaturePage index={4} />
        <div>
          {/* TO FIX: responsive */}
          <SectionPitchIntro />
          <SectionPitchAccelerate />
          <SectionPitchInnovate />
          <SectionPitchPioneer />
          {/* END: TO FIX */}
          <SectionHowItWorks />
          <SectionGlobalDistribution />
          <SectionHighlights />
          <SectionSubscription />
          <SiteFooter />
        </div>
      </FullPageSwiper>
      <FixedFeaturePage />
    </>
  )
}
