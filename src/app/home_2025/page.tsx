import Link from 'next/link'
import { FiArrowDown } from 'react-icons/fi'
import { FaLongArrowAltLeft } from "react-icons/fa"

import { cn } from '@/lib/utils'

import { Carousel } from './carousel'
import { Solutions } from './solutions'
import './style.css'

function TeacupMask({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={cn("mask-teacup", className)}>
      {children}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="w-screen max-h-screen aspect-video p-2 relative">
      <TeacupMask className={cn("flex flex-col justify-center")}>
        <div className="safe-viewport grid grid-cols-12">
          <div className="mb-4 col-span-10 col-start-2">
            <span className="border border-base-300 rounded-full px-2.5 py-1 text-sm leading-5 bg-white text-center font-medium">Phala Network 2.0</span>
          </div>
          <header className="md:flex flex-row gap-2 col-span-10 col-start-2">
            <h1 className="py-1 px-4 text-40 text-white bg-black rounded-sm font-bold tracking-tight uppercase">CRYPTOGRAPHIC</h1>
            <h2 className="py-1 text-40 text-white font-bold tracking-tight">Not Tomorrow. Today.</h2>
          </header>
          <div className="text-20 text-white leading-8 my-8 col-span-10 col-start-2">
            <p>Eliminate centralized trust from Web3.</p>
            <p>No months of work. No 1000x performance penalty.</p>
          </div>
          <div className="flex flex-row gap-4 col-span-10 col-start-2">
            <Link href="/" className="btn btn-phala btn-sm">Start with Phala 2.0</Link>
            <Link href="/" className="btn btn-blk btn-sm min-w-32 leading-4 text-center">Learn more</Link>
          </div>
        </div>
      </TeacupMask>
      <div className="absolute bottom-0 right-0 w-[30vw] h-[16vh] flex flex-col justify-center items-center">
        <button className="flex flex-row gap-6 items-center">
          <span className="font-bold tracking-tight">Learn More About Phala 2.0</span>
          <span className="text-24 p-3 rounded-full bg-black text-white animate-bounce"><FiArrowDown /></span>
        </button>
      </div>
    </section>
  )
}

function ProblemStatements() {
  return (
    <section className="py-20">
      <main className="safe-viewport grid grid-cols-12 gap-y-10">
        <article className={cn("col-span-4 col-start-2 row-start-1", "flex flex-col gap-2.5")}>
          <h3 className="text-24 font-bold tracking-tight mb-1">Trustless Computing ≠ Expensive</h3>
          <p className="text-16">
            Trustless systems are expensive, creating barriers to zero-trust adoption.
          </p>
          <p className="text-16">
            Phala reduces costs while maintaining security by combining the strengths of blockchain and TEE.
          </p>
        </article>
        <article className={cn("col-span-4 col-start-2 row-start-2", "flex flex-col gap-2.5")}>
          <h3 className="text-24 font-bold tracking-tight mb-1">The Next Generation of Cloud Must Be AI-Native</h3>
          <p className="text-16">
            AI-native cloud is the only way to achieve the performance and cost-efficiency needed for the next generation of cloud computing. 
          </p>
          <p className="text-16">
            Autonomous AI needs seamless access to secure physical machines for development, deployment, and operation, all while being auditable.
          </p>
        </article>
        <div className="col-span-5 col-start-7 row-start-1 row-span-2 flex flex-row justify-end">
          <figure>
            <img src="/home/main-landing-2025/img-problem-1.png" alt="Problem 1" />
          </figure>
        </div>
      </main>
    </section>
  )
}

function Features() {
  return (
    <section className="py-20">
      <main className="safe-viewport grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          <Carousel />
        </div>
      </main>
    </section>
  )
}

function OurProducts() {
  return (
    <section className="py-20">
      <main className="safe-viewport grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          <Solutions />
        </div>
      </main>
    </section>
  )
}

function UseCases() {
  return (
    <section
      className={cn(
        "py-20 px-2", "section-usercases"
      )}
    >
      <main className="safe-viewport grid grid-cols-12 gap-6">
        <h2 className="col-span-10 col-start-2 text-40 font-bold tracking-tight text-center mb-6">
          TEE is Eating the World
        </h2>
        <div className="col-start-3 col-span-3 rounded p-8 bg-white flex flex-col gap-8 items-center">
          <h4 className="text-20 font-semibold tracking-tight mb-1">From Web2 to Web3</h4>
          <div className="flex flex-row items-center">
            <div className="h-16 w-16 flex items-center justify-center p-3 border border-black-150 rounded-full">
              <img className="h-8 w-auto" src="/home/main-landing-2025/icon-x.png" />
            </div>
            <img src="/home/main-landing-2025/arrow.png" />
            <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full">
              <img className="h-10 w-auto" src="/home/main-landing-2025/icon-openai.png" />
            </div>
          </div>
          <p className="text-14 text-center text-black-600">Transition seamlessly from Web2 software to Web3, connecting easily with smart contracts across blockchains.</p>
        </div>
        <div className="col-start-6 col-span-5 rounded p-8 bg-white flex flex-col gap-8 items-center">
          <h4 className="text-20 font-semibold tracking-tight mb-1">Decentralized AI</h4>
          <div className="flex flex-row gap-12">
            <div className="flex flex-col gap-2.5 items-center">
              <h5>AI Infra</h5>
              <div className="w-56 overflow-hidden">
                <div className="flex flex-row w-80">
                  <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white">
                    <img className="h-12 w-auto" src="/home/main-landing-2025/icon-ai-infra1.png" />
                  </div>
                  <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white relative -left-6">
                    <img className="h-14 w-auto" src="/home/main-landing-2025/icon-ai-infra2.png" />
                  </div>
                  <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white relative -left-12">
                    <img className="h-12 w-auto" src="/home/main-landing-2025/icon-ai-infra3.png" />
                  </div>
                  <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white relative -left-[4.5rem]">
                    <img className="h-auto w-12" src="/home/main-landing-2025/icon-ai-infra4.png" />
                  </div>
                  <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white relative -left-24">
                    <img className="h-12 w-auto" src="/home/main-landing-2025/icon-ai-infra5.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 items-center">
              <h5>AI Agents</h5>
              <div className="w-36 overflow-hidden">
                <div className="flex flex-row w-48">
                  <div className="h-[62px] w-[62px] flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white">
                    <img className="h-auto w-auto" src="/home/main-landing-2025/icon-ai-agents-1.png" />
                  </div>
                  <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white relative -left-6">
                    <img className="w-12 h-auto" src="/home/main-landing-2025/icon-ai-agents-2.png" />
                  </div>
                  <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white relative -left-12">
                    <img className="h-8 w-auto" src="/home/main-landing-2025/icon-ai-agents-3.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-14 text-center text-black-600 w-[26rem]">Build and run autonomous AI agents and AI-native infrastructure securely.</p>
        </div>
        <div className="col-start-3 col-span-4 rounded p-8 bg-white flex flex-col gap-8 items-center">
          <h4 className="text-20 font-semibold tracking-tight mb-1">Defense in Depth</h4>
          <div className="flex flex-row items-center gap-2.5">
            <div className="h-20 w-20 flex items-center justify-center p-3 border border-black-150 rounded-full overflow-hidden">
              <img className="h-full w-18" src="/home/main-landing-2025/icon-lit.png" />
            </div>
            <div className="h-20 w-20 flex items-center justify-center border border-black-150 rounded-full overflow-hidden">
              <img className="h-auto w-16" src="/home/main-landing-2025/icon-zama.png" />
            </div>
            <div className="h-20 w-20 flex items-center justify-center border border-black-150 rounded-full overflow-hidden">
              <img className="h-16 w-auto" src="/home/main-landing-2025/icon-ss.png" />
            </div>
            <div className="h-20 w-20 flex items-center justify-center border border-black-150 rounded-full overflow-hidden">
              <img className="h-16 w-auto" src="/home/main-landing-2025/icon-scroll.png" />
            </div>
          </div>
        </div>
        <div className="col-start-7 col-span-4 rounded p-8 bg-white flex flex-col gap-8 items-center">
          <h4 className="text-20 font-semibold tracking-tight mb-1">Blockchain Economy</h4>
          <div className="flex flex-row items-center gap-2.5">
            <div className="h-20 w-20 flex items-center justify-center p-1 border border-black-150 rounded-full overflow-hidden">
              <img className="h-auto" src="/home/main-landing-2025/icon-flashbots.png" />
            </div>
            <div className="h-20 w-20 flex items-center justify-center border border-black-150 rounded-full overflow-hidden">
              <img className="h-auto w-14 relative -top-0.5" src="/home/main-landing-2025/icon-uniswap.png" />
            </div>
            <div className="h-20 w-20 flex items-center justify-center border border-black-150 rounded-full overflow-hidden">
              <img className="h-14 w-auto" src="/home/main-landing-2025/icon-ethereum.png" />
            </div>
            <div className="h-20 w-20 flex items-center justify-center border border-black-150 rounded-full overflow-hidden">
              <img className="h-14 w-auto" src="/home/main-landing-2025/icon-polkadot.png" />
            </div>
          </div>
          <p className="text-14 text-center text-black-600 w-[20rem]">Build intelligence-centric applications like MEV-boost and intent-driven platforms.</p>
        </div>
        <Link href="#" className="btn btn-wht rounded-full col-start-3 col-span-8 mt-6">
          Discover All Usecases
        </Link>
      </main>
    </section>
  )
}

interface HowItWorkCardProps {  
  title: string
  description: string
  image: string
  backdropColor: string
}

function HowItWorkCard({ title, description, image, backdropColor }: HowItWorkCardProps) {
  return (
    <article
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={cn(
        "flex flex-col-reverse gap-2.5 aspect-[389/440]",
        "relative rounded-sm overflow-hidden rounded-br-[46px]",
        `bg-cover bg-center`,
      )}
    >
      <main className="p-10 z-10 text-white h-1/2">
        <h3 className="text-20 font-bold tracking-tight mb-4">{title}</h3>
        <p className="text-14 font-medium">{description}</p>
      </main>
      <div
        className="w-6 h-6 rounded-full bg-white absolute top-6 left-6"
      />
      <div
        className="absolute z-[1] h-full w-[120%] rounded-full blur-[60px] right-0 translate-y-1/2"
        style={{backgroundColor: backdropColor}}
      />
    </article>
  )
}

function HowItWorks() {
  return (
    <section className="py-20">
      <main className="safe-viewport grid grid-cols-12 gap-10">
        <h2 className="col-span-10 col-start-2 text-40 font-bold tracking-tight text-center">How It Works</h2>
        <div className="col-span-10 col-start-2 grid grid-cols-3 gap-6">
          <HowItWorkCard
            title="TEE Hardwares"
            description="The TEE hardware ensures your computation is tamper-proof, privacy preserving, and unstoppable. It generates the execution proof that everyone can verify easily."
            image="/home/main-landing-2025/img-how-it-work-1.jpg"
            backdropColor="#669fd7"
          />
          <HowItWorkCard
            title="TEE Abstraction"
            description="Phala provides an abstraction unifies the security of Intel SGX, Intel TDX, AMD SEV, and NVIDIA GPU TEEs. With decentralized Root-of-Trust design benefit from the security of Ethereum."
            image="/home/main-landing-2025/img-how-it-work-2.jpg"
            backdropColor="#A9D03F"
          />
          <HowItWorkCard
            title="T16Z Philosophy"
            description="A cryptographic computer is built with not only TEE, but a novel blend of TEE, MPC, ZKP, and cryptoeconomic security defends the attacks to your app in depth.."
            image="/home/main-landing-2025/img-how-it-work-3.jpg"
            backdropColor="#D58E5E"
          />
        </div>
        <div className="col-span-10 col-start-2 flex flex-row justify-center">
          <a href="#" className="btn btn-blk btn-sm rounded-full">Explore 5 Levels of Secured Hardwares</a>
        </div>
      </main>
    </section>
  )
}

function GlobalAvailability() {
  return (
    <section className="py-20">
      <div className="safe-viewport grid grid-cols-12 gap-y-4">
        <header className="col-span-10 row-start-1 col-start-2 text-center">
          <h2 className="text-40 font-bold tracking-tight mb-6 text-black-900">
            A Decentralized Cloud
          </h2>
          <p className="text-20 font-semibold tracking-tight text-black-600">By the people, for the people</p>
        </header>
        <main className="col-span-6 col-start-4 row-start-2 flex flex-row">
          <div className="w-[75rem] text-center px-6 py-4 spacing-y-2">
            <h4 className="text-14 font-bold">TEE Nodes Online</h4>
            <div className="text-40 font-bold tracking-tight">25,000+</div>
          </div>
          <div className="w-[1px] h-full bg-black-150" />
          <div className="w-[75rem] text-center px-6 py-4 spacing-y-2">
            <h4 className="text-14 font-bold">Secured Value</h4>
            <div className="text-40 font-bold tracking-tight">$5M+</div>
            <p className="text-14 text-black-900">In PHA-backed cryptographic computation</p>
          </div>
        </main>
        <figure className="col-span-8 col-start-3 row-start-3 flex flex-col gap-4 items-center">
          <img src="/home/main-landing-2025/img-global-availability.png" />
        </figure>
        <div className="col-span-8 col-start-3 row-start-3 flex flex-col-reverse w-full h-full items-center">
          <div className="relative top-1">
            <a href="#" className="btn btn-blk rounded-full">Visit Phala Cloud</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home2025() {
  return (
    <div>
      <HeroSection />
      <ProblemStatements />
      <Features />
      <OurProducts />
      <UseCases />
      <HowItWorks />
      <GlobalAvailability />
    </div>
  )
}
