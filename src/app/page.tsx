import { type ReactNode } from 'react'
import { type Metadata } from 'next'
import { MdArrowForward, MdGraphicEq, MdFaceRetouchingNatural, MdOutlineApi } from 'react-icons/md'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { getPhatLists } from '@/lib/phat_lists'
import DotBackground from '@/components/DotBackground'
import Squircle from '@/components/Squircle'
import { ContactUsForm } from '@/components/ContactUsForm'
import SubscribeForm from '@/components/landing-pages/SubscribeForm'

import { NoCodeWizardStepTrigger, NoCodeWizardStepDetails, NoCodeWizardStepPreview } from './_components/NoCodeWizard'
import { CodeExampleTab, CodeExampleCodeViewer } from './_components/CodeExampleTabs'
import { ShowCaseTab, ShowCaseTabPanel } from './_components/ShowCaseTabs'
import { AreaOfInterestTab, AreaOfInterestTabPanel } from './_components/AreaOfInterestTabs'
import { StatsCard } from './_components/StatsCard'
import { SectionHowItWorks } from './_components/SectionHowItWorks'
import { SectionHero } from './_components/SectionHero'
import { SectionHighlights } from './_components/SectionHighlights'
import SectionFeatures from './_components/SectionFeatures'

import './home.css'
import './_components/section-phat-contract-highlight.css'


//
// Section Pitch Intro
//

function SectionPitchIntro() {
  return (
    <section className={cn("pt-16 lg:pt-32 flex flex-col gap-6 lg:gap-12")}>
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
          <h4 className="bg-[#f0f0f0] rounded-tl-3xl rounded-bl-3xl font-black py-4 px-10 w-full">FULL CODE</h4>
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
          "grid gap-x-4 grid-cols-6 xl:grid-cols-20 3xl:grid-cols-24",
          "pt-16 pb-24 lg:pt-32 lg:pb-52 px-0"
        )}>
          <header
            className={cn(
              "row-start-1 col-span-4 col-start-2 xl:col-start-8 xl:col-span-6 3xl:col-start-10 text-white flex flex-col items-center gap-3 xl:gap-6",
            )}
          >
            <h2 className="text-4xl xl:text-6xl font-black uppercase">Accelerate</h2>
            <p className={cn("text-base xl:text-2xl text-center")}>Scale your idea with prebuilt templates in minutes</p>
          </header>

          <div
            className="row-start-2 col-span-full flex justify-center relative mt-4 -bottom-[2px]"
          >
            <svg width="149" height="229" viewBox="0 0 149 229">
              <path fill="#ffffff" stroke="none" d="M -0.5 228 L -10 228 L -10 228 L 151 228 L 152 228 L 149.5 228 C 109.735001 228 77.5 195.764008 77.5 156 L 77.5 152 L 71.5 152 L 71.5 156 C 71.5 195.764008 39.2645 228 -0.5 228 Z"/>
              <path fill="#ffffff" stroke="none" d="M 85.9356 46.297104 L 60.869904 71.362793 L 57.429497 70.9991 C 54.908997 67.087097 53.804298 62.429901 54.299103 57.802597 C 54.7939 53.175293 56.858398 48.856995 60.149002 45.566406 C 63.439697 42.275696 67.758003 40.211197 72.3853 39.7164 C 77.012604 39.221603 81.669701 40.326401 85.581802 42.846893 L 85.9356 46.297104 Z"/>
              <path fill="#ffffff" stroke="none" d="M 88.936302 74.375305 C 85.642601 77.6642 81.321701 79.725708 76.6931 80.216705 C 72.064499 80.707611 67.407303 79.598297 63.497002 77.073502 L 63.133301 73.633102 L 88.198997 48.567398 L 91.639 48.931091 C 94.165001 52.842407 95.274002 57.5009 94.781998 62.1306 C 94.290001 66.760406 92.226997 71.081909 88.936302 74.375305 Z"/>
              <path fill="#ffffff" stroke="none" d="M 91.595001 42.925797 C 88.2258 39.531296 83.925201 37.212891 79.237602 36.264404 C 74.550003 35.315903 69.686401 35.7798 65.262703 37.597595 C 60.838997 39.415298 57.054298 42.505005 54.387802 46.475296 C 51.721401 50.445602 50.293301 55.117996 50.284401 59.900604 C 50.275398 64.683105 51.686001 69.360809 54.337502 73.341095 C 56.988998 77.321411 60.762199 80.425201 65.179001 82.259491 C 69.595901 84.093811 74.457703 84.575989 79.148903 83.645111 C 83.839996 82.714111 88.1493 80.411896 91.530998 77.029999 C 96.052002 72.51059 98.597 66.383499 98.609001 59.991104 C 98.621002 53.598694 96.098999 47.462097 91.595001 42.925797 Z M 90.248001 88.378296 L 83.495201 91.169998 L 79.641899 103.024994 L 69.8172 103.024994 L 65.5756 91.189606 L 58.8423 88.378296 L 49.0126 93.371796 L 47.720001 94.045197 L 40.794998 87.120102 L 46.166901 75.752106 L 43.365398 69.008911 L 31.515701 65.12619 L 31.515701 55.311203 L 43.3507 51.059906 L 46.152199 44.326599 L 40.505001 33.2043 L 47.43 26.279205 L 58.793198 31.656097 L 65.521599 28.859497 L 68.961998 18.381104 L 69.409203 17 L 79.194702 17 L 83.450897 28.844803 L 90.189003 31.636398 L 100.018997 26.647797 L 101.311996 25.979401 L 108.237 32.904495 L 102.860001 44.282303 L 105.637001 51.025497 L 117.505997 54.913101 L 117.505997 64.698608 L 105.676003 68.945007 L 102.864998 75.678406 L 108.530998 86.810501 L 101.611 93.730591 L 90.248001 88.378296 Z"/>
              <path fill="none" stroke="#ffffff" strokeWidth="6" d="M 131.5 60 C 131.5 91.480225 105.980232 117 74.5 117 C 43.019768 117 17.5 91.480225 17.5 60 C 17.5 28.519775 43.019768 3 74.5 3 C 105.980232 3 131.5 28.519775 131.5 60 Z"/>
              <path fill="none" stroke="#ffffff" strokeWidth="6" d="M 74.5 117 L 74 228"/>
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
                    <p>Discover the perfect solution for your needs with our marketplace of templates. These community-contributed, ready-to-deploy templates offer a quick way to integrate off-chain capabilities into your smart contracts.</p>
                  </NoCodeWizardStepDetails>
                  <NoCodeWizardStepDetails idx={1} summary="Customize">
                    <p>Templates are designed to tackle common challenges developers frequently encounter. With just a few clicks, effortlessly adjust the configuration to tailor the template to your specific requirements.</p>
                  </NoCodeWizardStepDetails>
                  <NoCodeWizardStepDetails idx={2} summary="Deploy">
                    <p>Easily deploy the customized template as your own Phat Contract on the Phala Network. Experience the power of off-chain capabilities integrated into your DApp within seconds.</p>
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
              <path fill="#ffffff" stroke="none" d="M 110 0 L 159 0 L 159 0 L -3 0 L -3.000007 0 L 40 0 C 57.6731 0 72 14.326904 72 32 L 72 76 L 78 76 L 78 32 C 78 14.326904 92.326897 0 110 0 Z"/>
              <path fill="#ffffff" stroke="none" d="M 6e-05 224 L -3.00002 224 L -2 224 L 153 224 L 153 224 L 150 224 C 110.236 224 78.000099 191.764999 78.000099 152 L 78.000099 148 L 72.000099 148 L 72.000099 152 C 72.000099 191.764999 39.764599 224 6e-05 224 Z"/>
              <path fill="none" stroke="#ffffff" strokeWidth="6" d="M 75 0 L 75 224"/>
            </svg>
          </div>

          {/* CTA: Get your own lensAPI oracle now */}
          <div className={cn(
            "row-start-4 col-span-full xl:col-start-7 xl:col-span-8 3xl:col-start-9",
            "px-6"
          )}>
            <a
              className={cn("btn btn-xl bg-[#6C37C9] text-white gap-2.5 justify-center btn-with-arrow w-full", "mt-10")}
              href="https://dashboard.phala.network/?source=get-your-own"
              target="_blank"
              rel="noopener"
            >
              <span className="text-sm xl:text-lg font-bold uppercase">Get your own LensAPI oracle now</span>
              <MdArrowForward className="untanglable h-5 w-5 arrow inline-block" />
            </a>
          </div>

          {/* Explore all of our templates */}
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
                <h3 className={cn("text-2xl xl:text-4xl text-blackAlpha-900 font-black uppercase ml-1")}>Explore all of our templates</h3>
                <p className={cn("text-base xl:text-lg text-blackAlpha-700 ml-1.5")}>Explore the marketplace today to find your ideal templates, streamlining your development process.</p>
                <a
                  href="https://dashboard.phala.network"
                  className={cn(
                    "btn btn-third flex-row w-full py-5 px-5 xl:px-10 gap-6 items-center justify-center",
                    "hidden xl:flex",
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  <Link href="/tags/Usecases" className="font-bold uppercase">Learn about templates</Link>
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
                  href="https://dashboard.phala.network/?source=template-card-LensAPI-Oracle"
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
                  href="https://dashboard.phala.network"
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
              <path fill="none" stroke="#7f52fa" strokeWidth="4" d="M 58 0 L 58 207.5 C 58 222.136002 69.864502 234 84.5 234 L 84.5 234"/>
              <path fill="none" stroke="#7f52fa" strokeWidth="4" d="M 84 234 L 296.820496 234"/>
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
              <div>THE NEXT TEMPLATE</div>
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
      className={"rounded-full overflow-hidden border-4 border-solid border-white h-24 w-24 xl:h-32 xl:w-32 relative"}
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
          "safe-viewport",
          "grid gap-x-4 grid-cols-6 xl:grid-cols-20 3xl:grid-cols-24 px-0",
          "overflow-hidden"
        )}>
          <header
            className={cn(
              "row-start-1 col-start-2 col-span-4 xl:col-start-4 xl:col-span-6 3xl:col-start-6",
              "pt-16 xl:pt-32",
              "flex flex-col j gap-3 xl:gap-6",
            )}
          >
            <h2 className="text-4xl xl:text-6xl font-black uppercase">Innovate</h2>
            <div className="text-base xl:text-2xl">
              <p>Full power, Full control.</p>
              <p>Empower your ideas.</p>
            </div>
          </header>

          <div className={cn(
            "row-start-2 hidden xl:block xl:col-start-4 xl:col-span-15 3xl:col-start-6",
            "mt-10 -mb-[0.5px] text-blackAlpha-800 z-[2]"
          )}>
            <svg viewBox="0 0 1069 237">
              <path fill="currentColor" stroke="none" d="M 71.4356 46.297089 L 46.3699 71.362793 L 42.929501 70.999084 C 40.409 67.087097 39.304298 62.429901 39.799099 57.802612 C 40.2939 53.175293 42.358398 48.856995 45.648998 45.566406 C 48.939701 42.275696 53.257999 40.211212 57.8853 39.7164 C 62.5126 39.221588 67.169701 40.326416 71.081802 42.846893 L 71.4356 46.297089 Z"/>
              <path fill="currentColor" stroke="none" d="M 74.436302 74.375488 C 71.142601 77.664398 66.821701 79.726013 62.1931 80.216919 C 57.564499 80.707886 52.907299 79.598602 48.997002 77.0737 L 48.633301 73.633301 L 73.698997 48.567596 L 77.139397 48.931305 C 79.664902 52.84259 80.774101 57.501099 80.282204 62.13089 C 79.790298 66.76059 77.727097 71.082092 74.436302 74.375488 Z"/>
              <path fill="currentColor" stroke="none" d="M 77.094803 42.925812 C 73.7258 39.531311 69.425201 37.212891 64.737602 36.264404 C 60.049999 35.315887 55.186401 35.779785 50.762699 37.597595 C 46.339001 39.415283 42.554298 42.505005 39.887798 46.475311 C 37.221401 50.445587 35.793301 55.118011 35.784401 59.900604 C 35.775398 64.683105 37.186001 69.360809 39.837502 73.341095 C 42.488998 77.321411 46.262199 80.425201 50.679001 82.259491 C 55.095901 84.093811 59.957699 84.575989 64.648903 83.645111 C 69.339996 82.714111 73.6493 80.411896 77.030899 77.029999 C 81.551903 72.51059 84.097099 66.383484 84.1091 59.991089 C 84.121101 53.598694 81.598801 47.462097 77.094803 42.925812 Z M 75.748199 88.378296 L 68.995201 91.169983 L 65.141899 103.024994 L 55.3172 103.024994 L 51.0756 91.189606 L 44.3423 88.378296 L 34.5126 93.371796 L 33.220001 94.045197 L 26.295 87.120117 L 31.666901 75.752106 L 28.8654 69.008911 L 17.015699 65.12619 L 17.015699 55.311188 L 28.8507 51.059906 L 31.652201 44.326599 L 26.004999 33.204285 L 32.93 26.279205 L 44.293201 31.656097 L 51.021599 28.859497 L 54.462002 18.381104 L 54.909199 17 L 64.694702 17 L 68.950897 28.844788 L 75.689201 31.636414 L 85.518898 26.647797 L 86.811501 25.979401 L 93.736504 32.90451 L 88.359703 44.282288 L 91.136597 51.025513 L 103.005997 54.913086 L 103.005997 64.698608 L 91.175903 68.945007 L 88.364601 75.678406 L 94.031403 86.810486 L 87.111298 93.730591 L 75.748199 88.378296 Z"/>
              <path fill="none" stroke="currentColor" strokeWidth="6" d="M 117 60 C 117 91.480225 91.480232 117 60 117 C 28.51977 117 3 91.480225 3 60 C 3 28.519775 28.51977 3 60 3 C 91.480232 3 117 28.519775 117 60 Z"/>
              <path fill="none" stroke="currentColor" strokeWidth="6" d="M 117.5 60 L 896 60 C 929.603027 60 946.405029 60 959.239014 66.539612 C 970.528992 72.291992 979.708008 81.470795 985.460022 92.76059 C 992 105.595001 992 127.397003 992 161"/>
              <path fill="currentColor" stroke="none" d="M 912.997009 237 L 908 237 L 908 237 L 1069 237 L 1069 237 C 1028.109985 237 994.960022 203.850998 994.960022 162.960022 L 994.960022 161 L 988.997009 161 C 988.997009 202.973999 954.971008 237 912.997009 237 Z"/>
            </svg>
          </div>

          <div className={cn(
            "row-start-2 col-start-2 col-span-4 xl:hidden",
            "mt-5 -mb-[0.5px] text-blackAlpha-800 z-[2]"
          )}>
            <svg width="275" height="106" viewBox="0 0 275 106">
              <path fill="#000000" fillOpacity="0.8" stroke="none" d="M 27.2178 14.648598 L 14.6849 27.181503 L 12.9648 26.999603 C 11.7045 25.043602 11.1521 22.714996 11.3995 20.401398 C 11.6469 18.0877 12.6792 15.928604 14.3245 14.283302 C 15.9698 12.637901 18.129 11.605698 20.4426 11.358299 C 22.7563 11.110901 25.0849 11.6633 27.040899 12.9235 L 27.2178 14.648598 Z"/>
              <path fill="#000000" fillOpacity="0.8" stroke="none" d="M 28.7181 28.687599 C 27.071301 30.3321 24.9109 31.3629 22.5966 31.608299 C 20.2822 31.853798 17.953699 31.299202 15.9985 30.036697 L 15.8167 28.316605 L 28.349501 15.783699 L 30.0697 15.9655 C 31.332399 17.921204 31.886999 20.250504 31.6411 22.5653 C 31.395201 24.880203 30.3636 27.040901 28.7181 28.687599 Z"/>
              <path fill="#000000" fillOpacity="0.8" stroke="none" d="M 30.0474 12.962898 C 28.3629 11.265602 26.212601 10.106499 23.868799 9.632187 C 21.525 9.157928 19.093201 9.389923 16.8813 10.298798 C 14.6695 11.207596 12.7771 12.752502 11.4439 14.737701 C 10.1107 16.722801 9.39667 19.058998 9.39219 21.450302 C 9.38771 23.841599 10.093 26.180405 11.4188 28.170502 C 12.7445 30.160698 14.6311 31.712601 16.8395 32.629799 C 19.047899 33.546906 21.478901 33.787994 23.8244 33.322495 C 26.17 32.857101 28.3246 31.705902 30.015499 30.014999 C 32.275902 27.755302 33.548599 24.691803 33.554501 21.495499 C 33.560501 18.299301 32.2994 15.231003 30.0474 12.962898 Z M 29.3741 35.689201 L 25.997601 37.084999 L 24.070999 43.012299 L 19.1586 43.012299 L 17.0378 37.094803 L 13.6711 35.689201 L 8.7563 38.185898 L 8.10999 38.522598 L 4.64749 35.060104 L 7.33345 29.375999 L 5.93272 26.004501 L 0.007874 24.063103 L 0.007874 19.155602 L 5.92535 17.029999 L 7.32609 13.6633 L 4.5025 8.102127 L 7.96501 4.639618 L 13.6466 7.328041 L 17.010799 5.929771 L 18.731001 0.690536 L 18.954599 0 L 23.8473 0 L 25.9755 5.922394 L 29.344601 7.318207 L 34.259399 4.823921 L 34.9058 4.489723 L 38.368301 7.952232 L 35.679798 13.641197 L 37.068298 17.012695 L 43.002998 18.956604 L 43.002998 23.849304 L 37.087898 25.972504 L 35.682301 29.339203 L 38.515701 34.905304 L 35.055698 38.365295 L 29.3741 35.689201 Z"/>
              <path fill="none" stroke="#323233" strokeWidth="4" strokeLinecap="round" d="M 43 21 L 209 21.5 C 226.673004 21.5 241 35.826904 241 53.5 L 241 66"/>
              <path fill="#323233" stroke="none" d="M 243 66 L 243 74 C 243 91.671501 257.324005 105.997002 274.994995 106 L 207 106 C 224.673004 106 239 91.673103 239 74 L 239 66 L 243 66 Z"/>
            </svg>
          </div>
          
          <div className={cn(
            "row-start-3 col-span-full xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
            "rounded-3xl bg-blackAlpha-800 overflow-hidden px-5 xl:px-20 py-12 z-1"
          )}>
            <h4 className={cn("text-2xl xl:text-4xl font-black text-white uppercase text-left xl:text-center mx-auto")}>
              Access the unique functionalities of Phat Contract
            </h4>
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

          {/* CTA background & connection line between two blocks */}
          <div className={cn(
            "row-start-4 col-start-3 col-span-2 xl:col-start-5 xl:col-span-2 3xl:col-start-7",
            "scale-[105%]"
          )}>
            <svg width="156" height="222" viewBox="0 0 156 222">
              <path fill="#323233" stroke="none" d="M -0.00311 222 L -5 222 L 156 222 C 115.109001 222 81.9599 188.850998 81.9599 147.960007 L 81.9599 146 L 75.996902 146 C 75.996902 187.973999 41.970501 222 -0.00311 222 Z"/>
              <path fill="none" stroke="#323233" strokeWidth="6" d="M 79 73 L 79 146"/>
              <path fill="#323233" stroke="none" d="M 111.804001 0 L 156.768997 0 C 160.210007 0 3.58297 0 6.7692 0 L 46.196098 0 C 62.656303 0 76 13.343704 76 29.803894 L 76 73 C 76 74.656891 82 74.656891 82 73 L 82 29.803894 C 82 13.343704 95.344002 0 111.804001 0 Z"/>
            </svg>
          </div>

          {/* CTA for docs site */}
          <div
            className={cn(
              "row-start-4 col-start-2 col-span-4 xl:col-start-8 xl:col-span-6 3xl:col-start-10 3xl:col-span-6",
              "relative"
            )}
          >
            <a
              className={cn("btn btn-xl bg-phat-600 gap-2.5 justify-center btn-with-arrow w-full", "mt-10")}
              href="https://docs.phala.network/v1/developers/phat-contract"
              target="_blank"
              rel="noopener"
            >
              <span className={cn("uppercase text-black text-lg font-bold")}>Docs</span>
              <MdArrowForward className="untanglable text-black h-5 w-5 arrow inline-block" />
            </a>
          </div>

          <div className={cn(
            "row-start-5 col-span-6 xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
            "flex flex-row gap-6"
          )}>
            <Squircle
              cornerRadius={32}
              fill="#323233"
              className="hidden xl:block p-2.5"
            >
              <ul className={cn("max-w-md flex flex-col gap-2.5 h-full")}>
                <ShowCaseTab idx={0}>
                  <MdGraphicEq className="h-[3.25rem] w-[3.25rem] rotate-90" />
                  <span>Cross-chain DEX aggregator</span>
                </ShowCaseTab>
                <ShowCaseTab idx={1}>
                  <MdFaceRetouchingNatural className="h-12 w-12" />
                  <span>Self-owned Oracles</span>
                </ShowCaseTab>
                <ShowCaseTab idx={2}>
                  <MdOutlineApi className="h-16 w-16" />
                  <span>Contract Controlled Web2 Service</span>
                </ShowCaseTab>
                <a
                  className={cn(
                    "rounded-3xl bg-gray-800 relative flex-grow",
                    // "px-5 py-10 ",
                    "flex flex-col items-start justify-center",
                    "btn-animated transition-all hover:bg-phat-400",
                    "overflow-hidden"
                  )}
                  href="https://docs.phala.network/v1/developers/phat-contract/builders-program"
                  target="_blank"
                  rel="noopener"
                >
                  <div className={cn(
                    "text-white font-black uppercase flex flex-col gap-6 leading-none z-10",
                    "w-full p-8"
                    // "relative ml-28"
                  )}>
                    <div className={cn("text-[3.5rem]")}>$50K</div>
                    <div className={cn("text-xl")}>for innovators</div>
                  </div>
                  <div className={cn(
                    "grow h-full flex flex-row-reverse pl-8"
                  )}>
                    <svg width="472" height="233" viewBox="0 0 472 233" fill="none" className="untanglable h-full aspect-[472/233]">
                      <g opacity="0.8">
                      <path d="M471.999 13.0496H125.128V219.424H471.999V13.0496Z" fill="url(#paint0_linear_227_213)"/>
                      <path d="M471.999 49.0782H125.128V183.391H471.999V49.0782Z" fill="url(#paint1_linear_227_213)"/>
                      </g>
                      <path d="M222.588 130.389C237.073 185.857 205.177 218.962 151.353 204.328C97.5301 189.694 42.1525 132.865 27.6714 77.3975C13.1904 21.9299 45.083 -11.1719 98.9095 3.46212C152.736 18.0961 208.107 74.9217 222.588 130.389Z" fill="#B4E99A"/>
                      <path d="M212.151 127.546C225.084 177.072 196.606 206.628 148.547 193.564C100.488 180.499 51.0429 129.756 38.1129 80.2296C25.1829 30.7034 53.6582 1.14714 101.72 14.2117C149.782 27.2763 199.221 78.026 212.151 127.546Z" fill="#72B74E"/>
                      <path d="M212.337 193.903C212.103 194.144 211.866 194.377 211.628 194.611L211.344 194.884L210.998 195.204L210.686 195.482L210.336 195.803L210.024 196.075L209.669 196.395L209.356 196.661L208.994 196.981L208.682 197.244L208.314 197.536L208.002 197.792L207.627 198.077C207.518 198.163 207.406 198.247 207.294 198.327C207.181 198.407 207.041 198.516 206.913 198.605L206.573 198.849L206.186 199.121L205.839 199.358L205.452 199.617C205.334 199.694 205.218 199.774 205.1 199.848L204.703 200.101L204.347 200.328L203.945 200.572L203.583 200.79L203.171 201.03L202.806 201.238C202.668 201.318 202.528 201.395 202.387 201.472L202.019 201.674L201.592 201.901L201.217 202.096L200.78 202.314L200.406 202.503L199.956 202.718L199.585 202.894L199.054 203.134L198.742 203.278L198.09 203.557L197.884 203.647C197.597 203.765 197.307 203.884 197.013 203.999L196.779 204.089L196.133 204.335L195.796 204.46L195.237 204.659L194.866 204.787L194.335 204.966L193.936 205.094C193.764 205.149 193.593 205.206 193.418 205.258L193.006 205.383L192.491 205.536L192.098 205.648L191.492 205.812L191.093 205.917C190.885 205.973 190.677 206.024 190.469 206.071L190.069 206.171L189.426 206.318L189.055 206.401C188.802 206.459 188.546 206.51 188.29 206.564L188.031 206.619L186.995 206.814L186.748 206.856L185.946 206.994L185.566 207.055L184.885 207.157L184.461 207.215L183.805 207.301L183.4 207.349L182.439 207.458L182.173 207.484C181.771 207.525 181.362 207.561 180.953 207.596L180.641 207.615C180.329 207.641 180.001 207.663 179.68 207.682L179.293 207.705C178.959 207.724 178.622 207.74 178.285 207.753H178.019L176.752 207.788H176.44H175.454H175.051H173.993H173.731L172.42 207.746L171.912 207.724L171.319 207.695L170.785 207.663L170.192 207.625L169.646 207.586L169.053 207.538L168.5 207.493L167.904 207.439L167.349 207.381L166.747 207.32L166.188 207.256L165.579 207.183L165.014 207.112L164.406 207.032L163.835 206.952L163.211 206.862L162.633 206.773L162.009 206.677L161.432 206.58L160.807 206.472L160.224 206.369L159.6 206.251L159.016 206.138L158.392 206.014L157.802 205.892L157.178 205.757L156.588 205.629L155.942 205.485L155.346 205.347L154.697 205.194L154.097 205.049L153.442 204.886L152.887 204.745C152.381 204.617 151.873 204.484 151.364 204.345C150.614 204.14 149.865 203.925 149.116 203.704L148.527 203.528C147.859 203.33 147.19 203.124 146.52 202.91L146.258 202.827C145.511 202.59 144.767 202.344 144.026 202.09L143.452 201.891C142.828 201.67 142.204 201.449 141.579 201.219L141.168 201.072C140.428 200.799 139.685 200.517 138.945 200.232L138.412 200.021C137.788 199.782 137.174 199.536 136.57 199.284L136.071 199.079C135.332 198.776 134.595 198.463 133.858 198.141L133.39 197.936C132.766 197.667 132.15 197.392 131.543 197.113L130.993 196.863C130.257 196.523 129.52 196.181 128.787 195.828L128.425 195.652C127.801 195.332 127.155 195.034 126.518 194.717L125.944 194.429C125.21 194.057 124.477 193.682 123.759 193.298C122.904 192.852 122.051 192.396 121.2 191.93L120.61 191.61C119.958 191.248 119.302 190.886 118.65 190.515C118.338 190.335 118.026 190.153 117.714 189.97L116.113 189.038C115.766 188.833 115.42 188.619 115.074 188.398C114.577 188.1 114.081 187.802 113.585 187.498L112.496 186.819L111.072 185.922L109.958 185.201L108.569 184.295C108.195 184.048 107.824 183.795 107.449 183.545C106.993 183.225 106.538 182.934 106.085 182.623L104.959 181.845L103.613 180.884C103.091 180.516 102.571 180.145 102.053 179.769L101.669 179.494C100.972 178.988 100.279 178.477 99.5906 177.963L99.0913 177.588C98.5128 177.161 97.9376 176.723 97.3654 176.275L96.9222 175.932C96.2388 175.404 95.5553 174.872 94.878 174.331L94.4317 173.975C93.8637 173.52 93.2988 173.066 92.7339 172.604L92.2534 172.214C91.5761 171.656 90.9051 171.099 90.2341 170.535L89.9439 170.289C89.2843 169.731 88.6279 169.17 87.9745 168.604L87.8372 168.485C87.1694 167.906 86.5015 167.316 85.8398 166.727L85.4841 166.407C84.8411 165.83 84.2014 165.25 83.5647 164.668L83.2089 164.347C82.5566 163.745 81.9044 163.143 81.2583 162.531L81.1054 162.387C80.5998 161.907 80.0953 161.423 79.5918 160.936L78.3621 159.742L77.3665 158.758C76.9504 158.353 76.5426 157.945 76.1432 157.535L75.1694 156.548C74.7533 156.132 74.3466 155.712 73.9492 155.289C73.635 154.963 73.3229 154.635 73.0129 154.306C72.5978 153.874 72.189 153.435 71.7645 152.999C71.4524 152.679 71.159 152.359 70.8594 152.039C70.4849 151.632 70.1167 151.225 69.7453 150.818C69.4332 150.472 69.1211 150.13 68.809 149.781C68.4376 149.367 68.0662 148.948 67.6979 148.528C67.3921 148.184 67.0873 147.841 66.7835 147.497C66.409 147.07 66.0366 146.643 65.6662 146.216C65.376 145.876 65.0826 145.54 64.7955 145.2C64.4116 144.749 64.034 144.294 63.6564 143.842C63.3849 143.522 63.1071 143.202 62.8387 142.862C62.4423 142.385 62.0553 141.901 61.6652 141.424C61.4187 141.104 61.1659 140.812 60.9193 140.505C60.4824 139.96 60.0517 139.413 59.621 138.862L59.0374 138.122C58.4132 137.326 57.7984 136.524 57.1929 135.717L56.987 135.438C56.4471 134.724 55.9134 134.01 55.3859 133.289L54.9553 132.693C54.4965 132.053 54.0377 131.412 53.5852 130.791C53.3636 130.47 53.1513 130.169 52.9329 129.859C52.5615 129.33 52.1901 128.802 51.825 128.257C51.5846 127.908 51.3506 127.562 51.1165 127.213C50.7794 126.713 50.4393 126.217 50.1053 125.717C49.8619 125.349 49.6247 124.981 49.3813 124.615L48.445 123.158C48.0206 122.495 47.5992 121.835 47.1967 121.169L47.0094 120.871C46.56 120.151 46.1137 119.427 45.6767 118.703L45.5738 118.533C45.1243 117.79 44.6843 117.047 44.2474 116.291L44.0133 115.891C43.5888 115.164 43.1738 114.437 42.7649 113.706C42.6869 113.572 42.612 113.437 42.5371 113.3C42.1189 112.553 41.7038 111.804 41.2887 111.058L41.1421 110.782C40.78 110.112 40.4232 109.44 40.0716 108.768L39.7377 108.127C39.4027 107.486 39.0729 106.839 38.7483 106.186L38.5642 105.818C38.1855 105.062 37.8151 104.304 37.4531 103.544C37.3564 103.348 37.2659 103.15 37.1691 102.951C36.8851 102.349 36.6011 101.747 36.3233 101.142L36.0518 100.552C35.7044 99.7899 35.3642 99.0276 35.0313 98.2653L34.869 97.8874C34.6006 97.2725 34.3416 96.6575 34.0825 96.0426C33.9296 95.6774 33.7704 95.3123 33.63 94.9472C33.4396 94.4795 33.2493 94.0087 33.062 93.5411C32.9153 93.1728 32.7718 92.8044 32.6282 92.4393C32.4472 91.9674 32.2672 91.4977 32.0883 91.03C31.951 90.6617 31.8136 90.2966 31.6794 89.9282C31.5046 89.4585 31.333 88.9855 31.1645 88.5094L30.7806 87.4236C30.6162 86.9367 30.4519 86.452 30.2875 85.9695C30.172 85.6172 30.0534 85.2681 29.938 84.9157C29.7715 84.4097 29.6113 83.9036 29.4573 83.3976C29.3543 83.0773 29.2482 82.7378 29.1452 82.4079C28.9767 81.8474 28.8144 81.2901 28.6521 80.7296C28.571 80.4541 28.4867 80.1787 28.4087 79.9032C28.1746 79.0673 27.9437 78.2345 27.7284 77.3986C20.441 49.4854 24.8946 27.2382 37.9806 13.8854L13.7935 38.5668C0.70744 51.9196 -3.7461 74.1701 3.54124 102.08C3.75659 102.916 3.98751 103.749 4.22158 104.585C4.2996 104.86 4.38388 105.136 4.46502 105.411C4.62731 105.971 4.7771 106.532 4.95811 107.089C5.0611 107.41 5.16722 107.749 5.27021 108.079C5.42625 108.585 5.58647 109.091 5.75084 109.597C5.86631 109.949 5.98491 110.299 6.1035 110.651C6.26267 111.135 6.41558 111.612 6.59347 112.105L6.97734 113.191C7.14587 113.665 7.31753 114.139 7.4923 114.613C7.6265 114.978 7.76384 115.343 7.90428 115.711C8.07905 116.182 8.26006 116.65 8.44107 117.121C8.58463 117.489 8.7282 117.854 8.87488 118.223C9.06214 118.69 9.2525 119.161 9.44287 119.629C9.59268 119.994 9.75499 120.359 9.89543 120.724C9.96721 120.894 10.0358 121.067 10.1076 121.236C10.2949 121.682 10.4884 122.124 10.6819 122.569L10.8442 122.947C11.1791 123.709 11.5193 124.471 11.8647 125.234L12.1362 125.823C12.414 126.428 12.698 127.03 12.9851 127.636C13.0787 127.831 13.1692 128.03 13.266 128.225C13.628 128.985 13.9984 129.743 14.3771 130.499C14.4364 130.621 14.4988 130.743 14.5612 130.864C14.8733 131.505 15.2166 132.161 15.5505 132.808L15.8845 133.449C16.2382 134.122 16.595 134.794 16.9549 135.467L17.1016 135.739C17.1016 135.765 17.1266 135.79 17.1422 135.816C17.5354 136.54 17.938 137.264 18.3406 137.988C18.4155 138.122 18.4904 138.257 18.5684 138.391C18.9804 139.121 19.3955 139.852 19.8168 140.579L20.0509 140.976C20.4878 141.722 20.9279 142.468 21.3773 143.218L21.4803 143.388C21.9172 144.111 22.3635 144.835 22.8129 145.556L23.0002 145.857C23.3372 146.397 23.6795 146.937 24.0269 147.478C24.1018 147.599 24.183 147.721 24.261 147.843C24.5731 148.33 24.8852 148.804 25.1973 149.3C25.4376 149.668 25.6748 150.034 25.9182 150.402C26.2522 150.902 26.5923 151.401 26.9294 151.898C27.1635 152.247 27.3975 152.596 27.6378 152.942C28.004 153.473 28.3744 154.007 28.7489 154.543L29.398 155.472C29.8495 156.113 30.3073 156.748 30.7713 157.378C30.9055 157.564 31.0365 157.749 31.1738 157.935L31.2019 157.974C31.7387 158.706 32.2818 159.436 32.8311 160.164L33.0058 160.398C33.6133 161.205 34.2282 162.007 34.8503 162.803C35.0438 163.053 35.2435 163.303 35.4401 163.55C35.8687 164.099 36.2994 164.644 36.7322 165.186C36.9819 165.507 37.2346 165.805 37.4843 166.112C37.8713 166.589 38.2583 167.073 38.6516 167.544L38.7265 167.637C38.9699 167.934 39.2227 168.226 39.4693 168.524C39.8469 168.975 40.2245 169.43 40.6084 169.882C40.8955 170.221 41.1889 170.558 41.4791 170.897C41.8515 171.324 42.224 171.751 42.5964 172.178C42.9085 172.524 43.2206 172.864 43.5077 173.21C43.8791 173.626 44.2474 174.049 44.6219 174.465C44.934 174.811 45.2461 175.155 45.5582 175.496C45.9296 175.906 46.2978 176.313 46.6723 176.72C46.741 176.79 46.8065 176.864 46.8721 176.938L47.5774 177.687C47.9894 178.126 48.3982 178.562 48.8258 178.994C49.1379 179.325 49.4499 179.653 49.762 179.977C50.1678 180.397 50.5734 180.82 50.9823 181.236L51.9561 182.223C52.3722 182.633 52.78 183.04 53.1794 183.446L54.175 184.429L55.4046 185.624C55.5638 185.778 55.7167 185.944 55.8822 186.088L56.9183 187.075L57.0712 187.219C57.7172 187.831 58.3695 188.433 59.0218 189.035L59.3776 189.355C60.0018 189.938 60.654 190.521 61.2969 191.095L61.6527 191.415C62.3175 192.004 62.9823 192.593 63.6532 193.176L63.7874 193.292C64.4397 193.859 65.0982 194.419 65.7599 194.98L66.047 195.22L66.228 195.374C66.8366 195.889 67.4514 196.395 68.0662 196.901L68.5468 197.292C69.1086 197.753 69.6766 198.208 70.2415 198.663L70.6909 199.022C71.3713 199.56 72.0527 200.094 72.7351 200.623L73.1783 200.966C73.7525 201.408 74.3299 201.843 74.9073 202.279L75.4035 202.654C76.0942 203.168 76.7871 203.679 77.482 204.185L77.869 204.463L78.9364 205.232L79.4263 205.575L80.7746 206.536L81.8981 207.314C82.3517 207.626 82.8074 207.933 83.2651 208.236C83.6365 208.486 84.0079 208.739 84.3824 208.986C84.8474 209.306 85.3187 209.594 85.7743 209.895L86.8853 210.613L88.3116 211.51L89.3977 212.189C89.8939 212.509 90.3902 212.791 90.8864 213.089C91.2328 213.3 91.5792 213.512 91.9256 213.729C92.4593 214.05 92.993 214.37 93.5298 214.661C93.8419 214.844 94.154 215.026 94.4661 215.206C95.1183 215.577 95.7737 215.939 96.426 216.301L97.0158 216.622C97.8689 217.087 98.722 217.544 99.575 217.992L99.6156 218.012C100.333 218.389 101.051 218.755 101.772 219.12L102.346 219.408C102.971 219.728 103.617 220.049 104.253 220.343L104.615 220.519C105.349 220.872 106.085 221.214 106.822 221.554L107.374 221.804C107.998 222.082 108.604 222.358 109.219 222.627L109.687 222.835C110.423 223.155 111.163 223.476 111.9 223.77L112.399 223.975C113.011 224.225 113.624 224.471 114.24 224.712L114.777 224.923C115.516 225.212 116.255 225.491 116.996 225.763L117.408 225.91C118.032 226.14 118.656 226.365 119.28 226.582L119.855 226.781C120.598 227.033 121.341 227.28 122.086 227.521L122.351 227.601C123.019 227.815 123.687 228.021 124.355 228.219L124.945 228.395C125.694 228.613 126.443 228.828 127.192 229.036C127.702 229.173 128.209 229.306 128.715 229.436L128.89 229.484L129.271 229.577L129.926 229.741L130.525 229.888L131.174 230.042L131.77 230.176C131.986 230.224 132.201 230.275 132.416 230.32L133.006 230.448L133.649 230.586L134.236 230.705L134.86 230.83L135.441 230.942L136.065 231.06L136.645 231.163L137.269 231.272L137.847 231.368L138.471 231.464L139.048 231.553L139.673 231.643L140.241 231.723L140.849 231.803L141.414 231.874L142.023 231.947L142.581 232.011L143.187 232.072L143.739 232.13L144.338 232.184L144.888 232.232L145.484 232.277L146.024 232.316L146.62 232.354L147.153 232.386L147.75 232.415L148.158 232.434H148.255C148.695 232.434 149.132 232.466 149.566 232.476H149.825H150.883H151.261H152.25H152.562C152.986 232.476 153.411 232.457 153.829 232.441H154.094C154.431 232.441 154.768 232.412 155.102 232.393L155.489 232.37L156.451 232.306L156.763 232.284L157.983 232.175L158.251 232.146L159.21 232.037L159.394 232.018L159.615 231.989L160.271 231.902L160.695 231.845L161.375 231.742L161.756 231.681C162.025 231.64 162.29 231.592 162.558 231.547L162.805 231.502C163.151 231.441 163.498 231.374 163.841 231.307L164.097 231.252L164.865 231.092L165.236 231.006L165.879 230.858L166.278 230.759L166.903 230.605C167.037 230.573 167.171 230.538 167.302 230.5C167.505 230.448 167.705 230.391 167.908 230.336L168.154 230.266L168.301 230.224L168.816 230.07C168.953 230.032 169.09 229.99 169.228 229.946C169.402 229.894 169.574 229.837 169.749 229.782L170.145 229.654L170.676 229.475L171.05 229.347L171.606 229.148L171.943 229.023L172.592 228.776L172.823 228.687C173.116 228.571 173.407 228.453 173.694 228.334L173.893 228.248L174.552 227.966L174.864 227.822L175.395 227.582L175.454 227.556L175.766 227.406L176.219 227.191L176.59 227.005L177.03 226.784L177.398 226.589L177.829 226.361L178.197 226.16C178.338 226.083 178.478 226.006 178.615 225.926L178.981 225.718L179.393 225.477L179.755 225.26L180.157 225.016L180.513 224.789L180.909 224.539L181.262 224.305L181.649 224.046L181.789 223.953L181.995 223.809L182.382 223.54L182.723 223.296C182.85 223.203 182.978 223.111 183.103 223.014C183.228 222.918 183.328 222.851 183.437 222.765L183.812 222.48L184.124 222.223L184.492 221.932L184.804 221.669L185.166 221.368L185.478 221.099C185.6 220.997 185.715 220.894 185.834 220.779C185.953 220.664 186.043 220.599 186.146 220.507L186.499 220.186L186.811 219.908L187.157 219.587L187.37 219.386L187.441 219.315C187.679 219.081 187.916 218.848 188.15 218.61L212.337 193.903Z" fill="#F5FFF0"/>
                      <path d="M194.367 212.204C194.136 212.444 193.899 212.678 193.658 212.909L193.587 212.979C193.518 213.05 193.446 213.114 193.374 213.181C193.303 213.248 193.147 213.402 193.031 213.501C192.916 213.601 192.828 213.687 192.719 213.78L192.369 214.1L192.057 214.372L191.702 214.693L191.389 214.959L191.027 215.26L190.715 215.522L190.35 215.817L190.019 216.073L189.648 216.358L189.314 216.608L188.933 216.887L188.593 217.13L188.206 217.402L188 217.543L187.86 217.639L187.47 217.899L187.12 218.129L186.724 218.382L186.365 218.607L185.962 218.853L185.6 219.071L185.191 219.308L184.826 219.519L184.405 219.753L184.037 219.955L183.609 220.182L183.238 220.375L182.798 220.596L182.426 220.781L181.977 220.999L181.665 221.147L181.609 221.172L181.078 221.416L180.766 221.556C180.551 221.653 180.329 221.745 180.11 221.838L179.911 221.925L179.04 222.28L178.806 222.367L178.16 222.617L177.82 222.738L177.264 222.94L176.893 223.068L176.359 223.248L175.963 223.376L175.445 223.539L175.033 223.664L174.515 223.818L174.371 223.859L174.121 223.927L173.519 224.093L173.117 224.199L172.492 224.353L172.096 224.449L171.45 224.599L171.079 224.682L170.314 224.843L170.055 224.897C169.712 224.968 169.368 225.032 169.022 225.096L168.772 225.137L167.973 225.275L167.589 225.333L166.909 225.435L166.488 225.496L165.832 225.579L165.611 225.611L165.423 225.631C165.111 225.669 164.799 225.704 164.468 225.736L164.2 225.765C163.794 225.807 163.389 225.842 162.977 225.874L162.665 225.896C162.352 225.922 162.04 225.944 161.7 225.964L161.316 225.986C160.979 226.005 160.642 226.018 160.305 226.034H160.043C159.622 226.034 159.2 226.063 158.776 226.069H158.464C158.152 226.069 157.805 226.069 157.474 226.069H157.075H156.017H155.758C155.324 226.069 154.884 226.047 154.444 226.028H154.347L153.938 226.008C153.742 226.008 153.542 225.992 153.346 225.98L152.812 225.948L152.216 225.912L151.676 225.871L151.077 225.826L150.53 225.778L149.928 225.723L149.376 225.669L148.77 225.605L148.215 225.541L147.591 225.47L147.026 225.4L146.401 225.317L145.833 225.237L145.209 225.15L144.635 225.06L144.011 224.961L143.43 224.865L142.806 224.759L142.226 224.654L141.602 224.538L141.018 224.426L140.394 224.298L139.807 224.18L139.164 224.045L138.574 223.917L137.928 223.773L137.335 223.635L136.686 223.481L136.087 223.337L135.428 223.174L135.048 223.078L134.873 223.033C134.367 222.902 133.862 222.77 133.35 222.629C132.601 222.428 131.852 222.213 131.103 221.989L130.513 221.816C129.845 221.615 129.177 221.409 128.509 221.198L128.244 221.114C127.501 220.877 126.758 220.628 126.012 220.375L125.438 220.176C124.814 219.962 124.19 219.739 123.566 219.507L123.154 219.359C122.414 219.087 121.674 218.805 120.935 218.52L120.398 218.309C119.774 218.069 119.171 217.822 118.557 217.569L118.057 217.367C117.321 217.047 116.584 216.749 115.848 216.429L115.376 216.224C114.752 215.951 114.147 215.679 113.532 215.401L112.98 215.148C112.243 214.827 111.51 214.465 110.773 214.113L110.414 213.94C109.777 213.633 109.142 213.32 108.507 213.002L107.933 212.713C107.213 212.35 106.493 211.982 105.773 211.608L105.733 211.586C104.878 211.137 104.025 210.681 103.174 210.215C102.977 210.109 102.784 209.997 102.587 209.895C101.932 209.533 101.276 209.171 100.624 208.796C100.312 208.62 99.9996 208.434 99.6876 208.255C99.1539 207.935 98.6171 207.637 98.0865 207.323L97.0441 206.682C96.5479 206.384 96.0517 206.087 95.5586 205.782C95.1934 205.558 94.8345 205.331 94.4725 205.103C93.995 204.805 93.5175 204.508 93.0431 204.203L91.9321 203.486L90.5432 202.579L89.4229 201.83L88.0559 200.904L86.9324 200.129C86.483 199.815 86.0346 199.495 85.5872 199.168L85.0941 198.822L84.0268 198.054L83.6398 197.775C82.9469 197.272 82.2541 196.76 81.5613 196.244L81.065 195.873C80.4866 195.445 79.9114 195.007 79.3392 194.556L78.8929 194.217C78.2084 193.687 77.528 193.153 76.8518 192.615L76.4024 192.257C75.8344 191.805 75.2695 191.347 74.7046 190.889L74.2271 190.498C73.6029 189.992 72.9891 189.483 72.3858 188.97L72.2047 188.817L71.9176 188.573C71.2602 188.016 70.6027 187.453 69.9452 186.885L69.811 186.77C69.1431 186.187 68.4763 185.6 67.8105 185.008L67.4578 184.688C66.8149 184.112 66.172 183.532 65.5353 182.949L65.1796 182.629C64.5283 182.026 63.8792 181.421 63.2321 180.813L63.0792 180.665L62.0399 179.679L61.5655 179.214C61.1536 178.82 60.7447 178.42 60.3359 178.02L59.3372 177.04C58.9211 176.634 58.5143 176.225 58.1169 175.813C57.8048 175.493 57.4647 175.172 57.1432 174.83C56.7271 174.403 56.3203 173.982 55.9229 173.568L54.9866 172.588C54.5747 172.155 54.1658 171.716 53.757 171.281C53.5229 171.028 53.2826 170.781 53.0517 170.528C52.983 170.458 52.9175 170.384 52.8519 170.31C52.4774 169.907 52.106 169.497 51.7346 169.09L50.7984 168.055C50.4238 167.628 50.0525 167.21 49.6842 166.8L48.7729 165.772C48.3984 165.343 48.027 164.907 47.6556 164.475C47.3654 164.154 47.072 163.802 46.7817 163.459C46.401 163.011 46.0233 162.556 45.6426 162.101C45.396 161.807 45.1464 161.512 44.8998 161.214L44.8249 161.124C44.4348 160.65 44.0478 160.164 43.6608 159.693C43.408 159.372 43.1553 159.075 42.9056 158.764C42.4718 158.223 42.0442 157.675 41.6135 157.13C41.42 156.881 41.2203 156.634 41.0237 156.384C40.3995 155.583 39.7846 154.782 39.1792 153.979C39.123 153.899 39.0637 153.822 39.0075 153.745C38.4582 153.015 37.9142 152.283 37.3753 151.551L37.3472 151.513L36.9446 150.955C36.4858 150.315 36.0084 149.674 35.5714 149.034C35.353 148.713 35.1407 148.415 34.9223 148.108C34.5509 147.576 34.1764 147.048 33.8112 146.506L33.1028 145.466C32.7657 144.966 32.4287 144.469 32.0947 143.967C31.8513 143.601 31.611 143.233 31.3706 142.865C31.0586 142.381 30.7465 141.904 30.4344 141.408L30.1972 141.046C29.8508 140.504 29.5106 139.963 29.1704 139.422C29.108 139.322 29.0456 139.223 28.9863 139.124C28.5337 138.403 28.0906 137.679 27.6505 136.952L27.5475 136.786C27.1023 136.043 26.6601 135.295 26.2211 134.544L25.9871 134.143C25.5709 133.417 25.1548 132.688 24.7387 131.956L24.514 131.552C24.1083 130.832 23.7057 130.108 23.3124 129.381C23.3124 129.355 23.2875 129.329 23.2719 129.304C23.2219 129.214 23.1751 129.124 23.1283 129.032C22.7663 128.362 22.4074 127.69 22.0578 127.017L21.7239 126.376C21.3899 125.736 21.0591 125.095 20.7314 124.429C20.6721 124.307 20.6097 124.186 20.5473 124.067C20.1697 123.308 19.8014 122.552 19.4363 121.793L19.1554 121.2C18.8682 120.598 18.5863 119.994 18.3096 119.388C18.2191 119.192 18.1255 118.997 18.0381 118.798C17.6885 118.036 17.3473 117.274 17.0144 116.511C16.9614 116.387 16.9083 116.258 16.8521 116.134C16.6586 115.692 16.4683 115.246 16.281 114.801C16.2061 114.631 16.1406 114.462 16.0688 114.289C15.9158 113.927 15.7567 113.562 15.6163 113.196C15.4228 112.726 15.2324 112.258 15.0483 111.787C14.9016 111.422 14.758 111.054 14.6144 110.685C14.4303 110.218 14.2524 109.747 14.0745 109.276L13.6626 108.178C13.4919 107.704 13.3213 107.23 13.1507 106.755C13.0228 106.394 12.8917 106.032 12.7669 105.67C12.5983 105.186 12.436 104.709 12.2738 104.219C12.1552 103.867 12.0366 103.514 11.9211 103.162C11.7588 102.656 11.609 102.153 11.4405 101.647C11.3375 101.327 11.2314 100.987 11.1284 100.657C10.9567 100.097 10.7944 99.5362 10.6322 98.9789C10.5541 98.7035 10.4699 98.428 10.3918 98.1525C10.1546 97.3155 9.9268 96.4807 9.70834 95.6479C2.60201 68.4234 6.66545 46.5989 19.0024 33.15L13.7437 38.5149C0.657689 51.8677 -3.79585 74.1181 3.49149 102.028C3.70683 102.864 3.93776 103.697 4.17183 104.533C4.24985 104.808 4.33413 105.084 4.41527 105.359C4.57756 105.92 4.72739 106.48 4.9084 107.037C5.01139 107.358 5.1175 107.697 5.22049 108.027C5.37654 108.533 5.53672 109.039 5.70109 109.545C5.81656 109.898 5.93516 110.247 6.05375 110.599C6.21292 111.083 6.36587 111.56 6.54376 112.053L6.92763 113.139C7.09616 113.613 7.26781 114.087 7.44258 114.561C7.57678 114.926 7.71409 115.291 7.85453 115.66C8.0293 116.13 8.2103 116.598 8.39132 117.069C8.53488 117.437 8.67845 117.802 8.82513 118.171C9.01239 118.638 9.20278 119.109 9.39316 119.577C9.54296 119.942 9.70524 120.307 9.84568 120.672C9.91746 120.842 9.98613 121.015 10.0579 121.184C10.2452 121.63 10.4387 122.072 10.6322 122.517L10.7944 122.895C11.1294 123.657 11.4696 124.419 11.815 125.182L12.0865 125.771C12.3643 126.376 12.6483 126.979 12.9354 127.584C13.029 127.779 13.1195 127.978 13.2163 128.173C13.5783 128.933 13.9486 129.691 14.3273 130.447C14.3866 130.569 14.449 130.691 14.5114 130.812C14.8235 131.453 15.1668 132.11 15.5008 132.757L15.8347 133.397C16.1884 134.07 16.5452 134.742 16.9052 135.415L17.0519 135.687C17.0519 135.713 17.0768 135.738 17.0924 135.764C17.4857 136.488 17.8883 137.212 18.2909 137.936C18.3658 138.07 18.4407 138.205 18.5187 138.339C18.9307 139.069 19.3458 139.8 19.7671 140.527L20.0012 140.924C20.4381 141.67 20.8781 142.416 21.3275 143.166L21.4305 143.336C21.8675 144.06 22.3138 144.783 22.7632 145.504L22.9504 145.805C23.2875 146.345 23.6297 146.885 23.9772 147.426C24.0521 147.547 24.1333 147.669 24.2113 147.791C24.5234 148.278 24.8355 148.752 25.1476 149.248C25.3879 149.616 25.625 149.982 25.8685 150.35C26.2024 150.85 26.5426 151.349 26.8796 151.846C27.1137 152.195 27.3478 152.544 27.5881 152.89C27.9543 153.422 28.3246 153.955 28.6992 154.491L29.3483 155.42C29.7998 156.061 30.2575 156.696 30.7215 157.326C30.8557 157.512 30.9868 157.697 31.1241 157.883L31.1522 157.922C31.689 158.654 32.232 159.384 32.7813 160.112L32.9561 160.346C33.5636 161.153 34.1784 161.955 34.8005 162.752C34.994 163.001 35.1938 163.251 35.3904 163.498C35.819 164.047 36.2497 164.592 36.6825 165.134C36.9321 165.455 37.1849 165.753 37.4346 166.06C37.8216 166.537 38.2086 167.021 38.6018 167.492L38.6767 167.585C38.9202 167.883 39.173 168.174 39.4195 168.472C39.7971 168.923 40.1748 169.378 40.5586 169.83C40.8458 170.169 41.1391 170.506 41.4294 170.845C41.8018 171.272 42.1742 171.699 42.5467 172.126C42.8588 172.472 43.1708 172.812 43.458 173.158C43.8293 173.574 44.1976 173.997 44.5721 174.413C44.8842 174.759 45.1963 175.103 45.5084 175.445C45.8798 175.855 46.2481 176.261 46.6226 176.668C46.6912 176.739 46.7568 176.812 46.8223 176.886L47.5276 177.635C47.9396 178.074 48.3484 178.51 48.776 178.942C49.0881 179.273 49.4002 179.601 49.7123 179.925C50.118 180.345 50.5237 180.768 50.9326 181.184L51.9063 182.171C52.3224 182.581 52.7302 182.988 53.1297 183.394L54.1253 184.377L55.3549 185.572C55.5141 185.726 55.667 185.892 55.8324 186.036L56.8686 187.023L57.0215 187.167C57.6675 187.779 58.3198 188.381 58.9721 188.983L59.3279 189.303C59.952 189.886 60.6043 190.469 61.2472 191.043L61.603 191.363C62.2677 191.952 62.9325 192.542 63.6035 193.124L63.7377 193.24C64.39 193.807 65.0485 194.367 65.7101 194.928L65.9973 195.168L66.1783 195.322C66.7868 195.837 67.4017 196.343 68.0165 196.849L68.4971 197.24C69.0589 197.701 69.6269 198.156 70.1918 198.611L70.6412 198.97C71.3215 199.508 72.0029 200.042 72.6854 200.571L73.1285 200.914C73.7028 201.356 74.2801 201.791 74.8575 202.227L75.3538 202.602C76.0445 203.116 76.7373 203.627 77.4323 204.133L77.8193 204.411L78.8866 205.18L79.3766 205.523L80.7249 206.484L81.8484 207.262C82.3019 207.574 82.7576 207.881 83.2153 208.184C83.5867 208.434 83.9581 208.687 84.3327 208.934C84.7977 209.254 85.2689 209.542 85.7246 209.844L86.8356 210.561L88.2619 211.458L89.348 212.137C89.8442 212.457 90.3404 212.739 90.8366 213.037C91.1831 213.248 91.5295 213.46 91.8759 213.677C92.4096 213.998 92.9432 214.318 93.48 214.609C93.7921 214.792 94.1042 214.975 94.4163 215.154C95.0686 215.525 95.724 215.887 96.3763 216.249L96.9661 216.57C97.8192 217.035 98.6722 217.492 99.5253 217.94L99.5658 217.96C100.284 218.338 101.001 218.703 101.722 219.068L102.297 219.356C102.921 219.676 103.567 219.997 104.204 220.291L104.566 220.467C105.299 220.82 106.035 221.163 106.772 221.502L107.324 221.752C107.949 222.031 108.554 222.306 109.169 222.575L109.637 222.783C110.374 223.103 111.113 223.424 111.85 223.718L112.349 223.923C112.961 224.173 113.575 224.419 114.19 224.66L114.727 224.871C115.466 225.16 116.206 225.439 116.946 225.711L117.358 225.858C117.982 226.089 118.607 226.313 119.231 226.531L119.805 226.729C120.548 226.981 121.292 227.228 122.036 227.469L122.302 227.549C122.97 227.763 123.637 227.969 124.305 228.167L124.895 228.343C125.644 228.561 126.393 228.776 127.142 228.984C127.652 229.121 128.16 229.254 128.665 229.384L128.84 229.432L129.221 229.525L129.876 229.689L130.475 229.836L131.125 229.99L131.721 230.124C131.936 230.172 132.151 230.223 132.367 230.268L132.957 230.396L133.599 230.534L134.186 230.653L134.81 230.778L135.391 230.89L136.015 231.008L136.596 231.111L137.22 231.22L137.797 231.316L138.421 231.412L138.999 231.501L139.623 231.591L140.191 231.671L140.799 231.751L141.364 231.822L141.973 231.895L142.532 231.959L143.137 232.02L143.689 232.078L144.289 232.132L144.838 232.18L145.434 232.225L145.974 232.264L146.57 232.302L147.104 232.334L147.7 232.363L148.109 232.382H148.205C148.645 232.382 149.082 232.414 149.516 232.424H149.775H150.833H151.261H152.25H152.562C152.987 232.424 153.411 232.405 153.829 232.389H154.095C154.432 232.389 154.769 232.36 155.103 232.341L155.49 232.318L156.451 232.254L156.763 232.232L157.983 232.123L158.252 232.094L159.21 231.985L159.394 231.966L159.615 231.937L160.271 231.851L160.695 231.793L161.376 231.69L161.756 231.63C162.025 231.588 162.29 231.54 162.558 231.495L162.805 231.45C163.151 231.389 163.498 231.322 163.841 231.255L164.097 231.2L164.865 231.04L165.236 230.954L165.879 230.806L166.279 230.707L166.903 230.553C167.037 230.521 167.171 230.486 167.302 230.448C167.505 230.396 167.705 230.339 167.908 230.284L168.154 230.214L168.301 230.172L168.816 230.018C168.953 229.98 169.091 229.938 169.228 229.894C169.403 229.842 169.574 229.785 169.749 229.73L170.145 229.602L170.676 229.423L171.05 229.295L171.606 229.096L171.943 228.971L172.592 228.725L172.823 228.635C173.117 228.52 173.407 228.401 173.694 228.283L173.894 228.196L174.552 227.914L174.864 227.77L175.395 227.53L175.454 227.504L175.766 227.354L176.219 227.139L176.59 226.953L177.03 226.732L177.398 226.537L177.829 226.31L178.197 226.108C178.338 226.031 178.478 225.954 178.616 225.874L178.981 225.666L179.393 225.426L179.755 225.208L180.157 224.964L180.513 224.737L180.909 224.487L181.262 224.253L181.649 223.994L181.79 223.901L181.996 223.757L182.383 223.488L182.723 223.244C182.851 223.152 182.979 223.059 183.103 222.963C183.228 222.866 183.328 222.799 183.437 222.713L183.812 222.428L184.124 222.171L184.492 221.88L184.804 221.617L185.166 221.316L185.478 221.047C185.6 220.945 185.716 220.842 185.834 220.727C185.953 220.612 186.043 220.548 186.146 220.455L186.499 220.134L186.811 219.856L187.158 219.535L187.37 219.334L187.442 219.263C187.679 219.029 187.916 218.796 188.15 218.559" fill="#468825"/>
                      <path d="M146.715 153.588L150.507 168.11L135.274 163.968L131.597 149.933C125.934 148.055 120.419 145.734 115.1 142.993C107.885 139.29 101.828 135.436 96.9301 131.43L100.16 114.455C105.031 118.293 110.202 121.712 115.621 124.675C119.061 126.591 122.629 128.254 126.298 129.653L121.751 112.232C118.066 110.545 114.256 108.602 110.322 106.403C106.401 104.218 102.665 101.698 99.1553 98.8697C95.6612 96.0507 92.5594 92.7542 89.9361 89.0721C87.1973 85.1872 85.1943 80.8087 84.0313 76.1645C82.6207 70.7581 82.7726 66.2217 84.487 62.5555C86.2014 58.8892 89.6292 56.4945 94.7704 55.3714C98.0744 54.6539 102.124 54.6539 106.92 55.3714L103.175 40.9937L118.408 45.135L122.1 59.2789C125.908 60.6231 129.641 62.1799 133.283 63.9423C139.111 66.7292 144.642 70.1275 149.789 74.0826L147.158 91.1092C142.74 87.8004 138.069 84.8644 133.189 82.3301C131.214 81.3244 129.293 80.4372 127.425 79.6685L132.106 97.5726C135.533 99.1933 138.983 100.968 142.458 102.896C146.334 105.048 150.035 107.517 153.525 110.278C157.047 113.06 160.18 116.324 162.838 119.98C165.593 123.792 167.606 128.114 168.767 132.708C170.159 138.027 169.981 142.536 168.234 146.234C166.486 149.932 163.045 152.339 157.91 153.453C154.826 154.128 151.095 154.173 146.715 153.588ZM112.528 87.2369C113.591 88.058 114.695 88.8203 115.837 89.5205L112.382 76.299C110.599 76.5296 109.413 77.1083 108.824 78.035C108.212 79.0044 108.089 80.1863 108.456 81.5806C109.003 83.671 110.36 85.5586 112.528 87.2433M138.12 120.697L141.263 132.731C142.511 132.548 143.413 132.125 143.934 131.449C144.613 130.58 144.747 129.361 144.337 127.792C143.813 125.787 142.465 123.942 140.295 122.257C139.621 121.734 138.893 121.213 138.111 120.694" fill="#2A461C"/>
                      <defs>
                      <linearGradient x1="125.128" y1="116.237" x2="471.999" y2="116.237" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3D6927"/>
                      <stop offset="1" stopColor="#3D6927" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient x1="125.128" y1="116.236" x2="471.999" y2="116.236" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3D6927"/>
                      <stop offset="1" stopColor="#3D6927" stopOpacity="0"/>
                      </linearGradient>
                      </defs>
                    </svg>
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
            "row-start-6 col-start-1 col-span-6 xl:col-start-7 xl:col-span-8 3xl:col-start-9 3xl:col-span-8 px-8 xl:px-0",
            "xl:my-8",
          )}>
            <a
              className={cn("btn btn-xl px-5 bg-phat-600 gap-2.5 justify-center btn-with-arrow w-full", "mt-10 mb-40")}
              href="https://github.com/Phala-Network/awesome-phat-contracts"
              target="_blank"
              rel="noopener"
            >
              <span className={cn("uppercase text-black text-sm xl:text-lg font-bold")}>Explore Awesome Phat Contract</span>
              <MdArrowForward className="hidden xl:block untanglable text-black h-5 w-5 arrow" />
            </a>
          </div>

        </div>
      </Squircle>

      <div className="relative w-screen overflow-hidden -mb-[2px]">
        <div className={cn(
          "safe-viewport",
          "grid gap--x-4 grid-cols-6 xl:grid-cols-20 3xl:grid-cols-24",
          "mb-36"
        )}>

          <div className={cn(
            "row-start-1 hidden xl:block xl:col-start-2 xl:col-span-10",
            "xl:flex flex-row justify-end"
          )}>
            <svg width="238" height="488" viewBox="0 0 238 488">
              <path fill="#cdfa50" stroke="none" d="M 87.996902 0 L 79 0 L 240 0 L 237.960007 0 C 198.195007 0 165.960007 32.235504 165.960007 72 L 165.960007 76 L 159.996994 76 L 159.996994 72 C 159.996994 32.235504 127.761002 0 87.996902 0 Z"/>
              <path fill="none" stroke="#cdfa50" strokeWidth="6" strokeLinecap="round" d="M 3 460 L 103 460 C 136.136993 460 163 433.136993 163 400 L 163 23"/>
            </svg>
          </div>

          <div className={cn(
            "row-start-1 col-start-1 col-span-6 xl:hidden",
            "flex flex-row justify-end"
          )}>
            <svg width="173" height="381" viewBox="0 0 173 381">
              <path fill="none" stroke="#cdfa50" strokeWidth="4" strokeLinecap="round" d="M 2 354 L 107 353.5 C 124.673103 353.5 139 341.188873 139 326.002502 L 139 44.582916 C 139 44.582916 139 34.271362 139 44.582916"/>
              <path fill="#cdfa50" stroke="none" d="M 140.999908 40 L 140.999908 32 C 140.999908 14.328491 155.324097 0.002625 172.99501 0 L 104.999901 0 C 122.673004 0 136.999908 14.326904 136.999908 32 L 136.999908 40 L 140.999908 40 Z"/>
            </svg>
          </div>

          {/* button block background */}
          <div className={cn(
            "row-start-1 col-start-1 col-span-1 relative left-[-50%] md:left-0 xl:col-end-9 flex flex-col justify-end items-end h-full",
            "z-[1]"
          )}>
            <div className="bg-phat-600 h-16 w-screen rounded-r-xl" />
          </div>

          {/* section end: chat now */}
          <div className={cn(
            "row-start-1 col-start-1 col-span-5 xl:col-start-2 xl:col-span-8",
            "flex flex-col xl:items-end justify-end gap-5 xl:gap-10",
            "z-[1]"
          )}>
            <header className="text-phat-600 font-extrabold text-2xl uppercase xl:text-right w-8/12 xl:w-auto">
              <div>Develop and explore</div>
              <div>your ideas with us</div>
            </header>
            <ul className="flex flex-row relative">
              <li className="relative -left-8 xl:left-auto xl:-right-16 z-[2]"><Avatar src="/home/avatar-h4x.jpg" name="Hang" /></li>
              <li className="relative -left-16 xl:left-auto xl:-right-8 z-[1]"><Avatar src="/home/avatar-zoe.jpg" name="Zoe" /></li>
              <li className="relative -left-24 xl:left-auto"><Avatar src="/home/avatar-shelven.jpg" name="Shelven" /></li>
            </ul>
            <a
              className={cn(
                "bg-teal-500 text-black uppercase text-sm xl:text-lg flex flex-row gap-5 items-center justify-end h-16 rounded-xl px-5 xl:px-10 py-5 btn-with-arrow",
                "w-full"
              )}
              href="https://discord.gg/2cvTKmF9uh"
              target="_blank"
              rel="noopener"
            >
              <span className="uppercase font-bold">Chat Now!</span>
              <MdArrowForward className="untanglable h-5 w-5 arrow inline-block" />
            </a>
          </div>
        </div>

        <div className={cn(
          "absolute left-0 bottom-0 right-0 xl:pt-16",
          "safe-viewport",
          "grid gap--x-4 grid-cols-6 xl:grid-cols-20 3xl:grid-cols-24",
          "untanglable"
        )}>
          <div className={cn(
            "row-start-1 hidden xl:block xl:col-start-12 xl:col-span-9",
          )}>
            <svg width="868" height="343" viewBox="0 0 868 343">
              <path fill="#323233" stroke="none" d="M 150.003006 343 L 159 343 L -10 343 L 0.0401 343 C 39.8046 343 72.0401 310.765015 72.0401 271 L 72.0401 267 L 78.003098 267 L 78.003098 271 C 78.003098 310.765015 110.238998 343 150.003006 343 Z"/>
              <path fill="none" stroke="#323233" strokeWidth="6" strokeLinecap="round" d="M 864.5 3 L 135 3 C 101.862999 3 75 29.862915 75 63 L 75 320"/>
            </svg>
          </div>

          <div className={cn(
            "row-start-1 col-start-5 col-span-2 xl:hidden",
          )}>
            <svg width="170" height="108" viewBox="0 0 170 108">
              <path fill="none" stroke="#323233" strokeWidth="4" strokeLinecap="round" d="M 34 67 L 34 18.910858 C 34 9.571434 48.3269 2.000359 66 2.000359 L 170 2"/>
              <path fill="#323233" stroke="none" d="M 35.999901 68 L 35.999901 76 C 35.999901 93.671501 50.3241 107.997002 67.995003 108 L -9e-05 108 C 17.673 108 31.999901 93.673103 31.999901 76 L 31.999901 68 L 35.999901 68 Z"/>
            </svg>
          </div>

          <div className={cn(
            "row-start-1 col-start-6 xl:col-start-14 xl:col-span-6 3xl:col-start-14 3xl:col-span-10 flex flex-col justify-end h-full untanglable",
            "flex flex-col justify-start items-start h-full",
            "z-[1]"
          )}>
            <div className="bg-[#333] h-1 xl:h-1.5 w-screen rounded-l-xl" />
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
      <div className={cn(
        "safe-viewport py-10 lg:py-32 px:8",
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
          Phat Contract
        </h2>
        <p
          className={cn(
            "text-xl lg:text-3xl text-white font-normal",
          )}
        >
          Optimizing coprocessing for simplicity, accessibility, and impact
        </p>
      </header>

      <article
        className={cn(
          "article",
          "row-start-2 col-span-full lg:col-start-1 lg:col-span-7",
          "grid gap-8",
        )}
      >
        <h3 className="heading">Access unlimited APIs in under <em>1</em> minute</h3>
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
          <a
            href="https://dashboard.phala.network/"
            className={cn("btn lg:btn-lg btn-primary btn-wht btn-rounded lg:btn-rounded", "min-w-[216px]")}
            target="_blank"
          >
            Get Started
          </a>
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
          <h3 className="heading">Coprocess <em>25</em> blockchains with smart contract templates</h3>
          <div className={cn("flex flex-row flex-wrap lg:justify-evenly gap-4 lg:gap-8")}>
            <ChainIcon src="/home/icon-binance.png" title="Binance" />
            <ChainIcon src="/home/icon-arbitrum.png" title="Arbitrum" />
            <ChainIcon src="/home/icon-polygon.png" title="Polygon" />
            <ChainIcon src="/home/icon-lens.png" title="Lens" />
            <ChainIcon src="/home/icon-ethereum.png" title="Ethereum" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <TemplateCard
            title="VRF Oracle"
            src="/home/icon-template-vrf.png"
            href="https://dashboard.phala.network/projects/new/clone?template=vrf-oracle"
            target="_blank"
          />
          <TemplateCard
            title="Dynamic NFTs"
            src="/home/icon-template-dynamic-nft.png"
            href="https://phala.network/posts/guide-dynamic-nfts-that-evolve"
            target="_blank"
          />
          <TemplateCard
            title="Lens Open Actions"
            src="/home/icon-template-lens.png"
            href="https://dashboard.phala.network/projects/new/clone?template=lensapi"
            target="_blank"
          />
          <TemplateCard
            title="Web3 Social"
            src="/home/icon-template-web3-social.png"
            href="https://phala.network/posts/web3-social-create-monetize-with-smart-contracts"
            target="_blank"
          />
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
