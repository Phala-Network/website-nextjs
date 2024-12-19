import { use } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowDown } from 'react-icons/fi'

import { cn } from '@/lib/utils'
import { getPostList, type Post } from '@/queries/GetPostList'
import { PostCard } from '@/components/PostCard'

import { Carousel, CarouselSlide } from './carousel'
import { Solutions, SolutionCard } from './solutions'
import './style.css'

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
            <span className="border border-base-300 rounded-full px-2.5 py-1 text-sm leading-5 bg-white text-center font-medium">
              Phala Network 2.0
            </span>
          </div>
          <header className="md:flex flex-row gap-2 col-span-10 col-start-2">
            <h1 className="py-1 px-4 text-40 text-white bg-black rounded-sm font-bold tracking-tight uppercase">
              CRYPTOGRAPHIC
            </h1>
            <h2 className="py-1 text-40 text-white font-bold tracking-tight">
              Not Tomorrow. Today.
            </h2>
          </header>
          <div className="text-20 text-white leading-8 my-8 col-span-10 col-start-2">
            <p>Eliminate centralized trust from Web3.</p>
            <p>No months of work. No 1000x performance penalty.</p>
          </div>
          <div className="flex flex-row gap-4 col-span-10 col-start-2">
            <Link href="/" className="btn btn-phala btn-sm">
              Start with Phala 2.0
            </Link>
            <Link href="https://docs.phala.network" target="_blank" className="btn btn-blk btn-sm min-w-32 leading-4 text-center">
              Learn more
            </Link>
          </div>
        </div>
      </TeacupMask>
      <div className="absolute bottom-0 right-0 w-[30vw] h-[16vh] flex flex-col justify-center items-center">
        <button className="flex flex-row gap-6 items-center">
          <span className="font-bold tracking-tight">
            Learn More About Phala 2.0
          </span>
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
          <h3 className="text-24 font-bold tracking-tight mb-1">
            The AI-Powered, Decentralized Future Is Stuck
          </h3>
          <p className="text-16">
            Right now, AI is deployed on either centralized clouds you can&apos;t trust or algorithms that are so slow and expensive that they&apos;re 1000x the cost. If we don&apos;t solve this, AI won&apos;t be autonomous—it&apos;ll be controlled.
          </p>
        </article>
        <article className={cn("col-span-4 col-start-2 row-start-2", "flex flex-col gap-2.5")}>
          <h3 className="text-24 font-bold tracking-tight mb-1">
            Phala Enables Unruggable AI
          </h3>
          <p className="text-16">
            We&apos;ve made trustless, offchain computation fast, affordable, and provable. Build decentralized, unruggable AI and apps without the wait, without the cost, without the compromise. Because the future of Web3 and AI isn&apos;t next year. It&apos;s now.
          </p>
        </article>
        <div className="col-span-5 col-start-7 row-start-1 row-span-2 flex flex-row justify-end">
          <figure className="rounded-[0.5rem] rounded-bl-[5.75rem] rounded-tr-[5.75rem] overflow-hidden">
            <img src="/home/main-landing-2025/img-problem-1.png" alt="Problem 1" className="w-full h-full object-cover" />
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
          <Carousel>
            <CarouselSlide
              title="Build Trust in Minutes"
              image="/home/main-landing-2025/img-feature-1.png"
            >
              <p className="text-gray-600">
                We turn TEE development into plug-and-play reality.
              </p>
              <ol className="list-disc ml-4 text-gray-600">
                <li>Cut your effort from months to days.</li>
                <li>Deploy production-grade TEE workloads in minutes.</li>
                <li>No steep learning curve. No sleepless nights.</li>
              </ol>
            </CarouselSlide>
            <CarouselSlide
              title="Today&apos;s Best Security, Tomorrow&apos;s Baseline"
              image="/home/main-landing-2025/img-feature-1.png"
            >
              <p className="text-gray-600">
                You don&apos;t trust anyone — not clouds, hardware, or us. We redefine the security baseline for Web3 with provable, auditable TEE that scales.
              </p>
              <ol className="list-disc ml-4 text-gray-600">
                <li>State-of-the-art security enforced by default.</li>
                <li>Perfect for Decentralized AI, blockchain protocol, and anywhere rug pull is not an option.</li>
              </ol>
            </CarouselSlide>
          </Carousel>
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
          <Solutions>
            <SolutionCard
              title="Build in Minutes, Not Months"
              image="/home/main-landing-2025/img-solution-1.png"
            >
              <ul className="space-y-2.5 list-disc ml-4">
                <li>Write code, dockerize, and deploy as TEE applications.</li>
                <li>Rely on built-in security best practices.</li>
                <li>Fully open source—no vendor lock-in.</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <button className="btn btn-blk min-w-36 px-4 py-2 rounded-full text-sm font-medium">
                  Dstack
                </button>
                <button className="btn btn-text text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Open Source TEE SDK
                </button>
              </div>
            </SolutionCard>
            <SolutionCard
              title="Deploy and Operate with Confidence"
              image="/home/main-landing-2025/img-solution-2.png"
            >
              <ul className="space-y-2.5 list-disc ml-4">
                <li>We deal with the pain of hardware maintenance. So you don't have to.</li>
                <li>Get access to CPU and GPU TEEs in one click. Intel TDX, AMD SEV, and nVIDIA H100/H200 available.</li>
                <li>With 5 years experience, we know how to deliver the best security.</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <button className="btn btn-blk min-w-36 px-4 py-2 rounded-full text-sm font-medium">
                  Phala Cloud
                </button>
                <button className="btn btn-text text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  A Secure, AI-Ready Platform
                </button>
              </div>
            </SolutionCard>
            <SolutionCard
              title="Easily Verify and Prove"
              image="/home/main-landing-2025/img-solution-3.png"
            >
              <ul className="space-y-2.5 list-disc ml-4">
                <li>On-chain attestation and audit trails for off-chain computations.</li>
                <li>RA Explorer and Phala L2 Explorer tools simplify trustless verification.</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <button className="btn btn-blk min-w-36 px-4 py-2 rounded-full text-sm font-medium">
                  TEE as a Service
                </button>
              </div>
            </SolutionCard>
          </Solutions>
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

function RecentPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="py-30 bg-[hsl(78,32%,95%)]">
      <main className="safe-viewport grid grid-cols-12 gap-6">
        <header className="col-span-10 col-start-2 text-center flex flex-row justify-between items-center">
          <h2 className="text-40 font-bold tracking-tight">Today&apos;s Highlights</h2>
          <Link href="/blog" className="btn btn-blk btn-sm min-w-36 rounded-full tracking-wide">More</Link>
        </header>
        
        <div className="col-span-10 col-start-2 grid grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default function Home2025() {
  const posts = use(getPostList({
    excludeTags: ['Changelog', 'not-listed'],
    sortReversed: false,
    pageSize: 12,
  }))
  return (
    <div>
      <HeroSection />
      <ProblemStatements />
      <Features />
      <OurProducts />
      <UseCases />
      <HowItWorks />
      <GlobalAvailability />
      <RecentPosts posts={posts} />
    </div>
  )
}
