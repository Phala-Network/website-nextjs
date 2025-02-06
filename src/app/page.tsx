import { use } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowDown } from 'react-icons/fi'

import { cn } from '@/lib/utils'
import { getPostList, type Post } from '@/queries/GetPostList'
import { PostCard } from '@/components/PostCard'

import { Carousel, CarouselSlide } from './home_2025/carousel'
import { Solutions, SolutionCard } from './home_2025/solutions'
import { Stats } from './home_2025/stats'
import './home_2025/style.css'


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

function HeroSection() {
  return (
    <section className="w-screen max-h-screen h-[calc(100vh-3rem)] md:h-screen xl:h-auto xl:aspect-video p-2 relative">
      <div className={cn("mask-teacup", "flex flex-col justify-center")}>
        <div className="safe-viewport flex flex-col items-center xl:grid xl:grid-cols-12">
          <div className="mb-4 xl:col-span-10 xl:col-start-2">
            <span className="border border-base-300 rounded-full px-2.5 py-1 text-sm leading-5 bg-white text-center font-medium">
              Phala Network 2.0
            </span>
          </div>
          <header className="xl:flex lg:flex-row gap-2 col-span-10 col-start-2">
            <h1 className="py-1 px-4 text-24 md:text-40 text-white bg-black rounded-sm font-bold tracking-tight uppercase text-center xl:text-left">
              CRYPTOGRAPHIC COMPUTER
            </h1>
            <h2 className="py-1 text-24 md:text-40 text-white font-bold tracking-tight text-center xl:text-left">
              Not Tomorrow. Today.
            </h2>
          </header>
          <div className="text-16 md:text-20 text-white leading-8 my-8 col-span-10 col-start-2 text-center xl:text-left">
            <p>Eliminate centralized trust from Web3.</p>
            <p>No months of work. No 1000x performance penalty.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 col-span-10 col-start-2">
            <Link href="https://cloud.phala.network" target="_blank" className="btn btn-phala">
              Start with Phala 2.0
            </Link>
            <Link href="https://docs.phala.network" target="_blank" className="btn btn-blk min-w-32 text-center">
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:hidden flex absolute bottom-0 right-0 flex-row items-center justify-center h-[6rem] w-full">
        <span className="text-24 p-3 rounded-full bg-white text-black-900 animate-bounce"><FiArrowDown /></span>
      </div>
      <div className="hidden absolute bottom-0 right-0 w-[31.25rem] h-[8rem] xl:flex flex-col justify-center items-center">
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
    <section className="py-12 lg:py-20">
      <main className="safe-viewport grid grid-cols-1 lg:grid-cols-12 gap-y-10">
        <article className={cn("lg:col-span-5 xl:col-span-4 xl:col-start-2 lg:row-start-1", "flex flex-col gap-2.5")}>
          <h3 className="text-24 font-bold tracking-tight mb-1">
            Trustless ≠ Expensive
          </h3>
          <p className="text-16">
            Trustless systems are expensive. Apps are deployed on either centralized clouds you can&apos;t trust or algorithms that are so slow and expensive that they&apos;re 1000x the cost.
          </p>
        </article>
        <article className={cn("lg:col-span-5 xl:col-span-4 xl:col-start-2 lg:row-start-2", "flex flex-col gap-2.5")}>
          <h3 className="text-24 font-bold tracking-tight mb-1">
            Trustless = The Future of AI
          </h3>
          <p className="text-16">
            The next generation of cloud must be AI-native. Autonomous AI needs seamless access to secure physical machines for development, deployment, and operation, all while being auditable.
          </p>
        </article>
        <div className="lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-7 lg:row-start-1 lg:row-span-2 flex flex-row justify-end">
          <figure className="rounded-[0.5rem] rounded-bl-[5.75rem] rounded-tr-[5.75rem] overflow-hidden">
            <picture>
              <source srcSet="/home/main-landing-2025/img-problem-1.webp" type="image/webp" />
              <img 
                src="/home/main-landing-2025/img-problem-1.jpg"
                alt="Problem 1"
                className="w-full h-full object-cover"
              />
            </picture>
          </figure>
        </div>
      </main>
    </section>
  )
}

function Features() {
  return (
    <section className="py-12 lg:py-20">
      <main className="safe-viewport grid grid-cols-1 xl:grid-cols-12">
        <div className="xl:col-span-10 xl:col-start-2">
          <Carousel>
            <CarouselSlide
              title="Build Trust in Minutes"
              image="/home/main-landing-2025/img-feature-1"
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
              image="/home/main-landing-2025/img-feature-1"
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
    <section className="py-12 lg:py-20">
      <main className="safe-viewport grid grid-cols-1 xl:grid-cols-12">
        <div className="xl:col-span-10 xl:col-start-2">
          <Solutions>
            <SolutionCard
              title="Build in Minutes, Not Months"
              image="/home/main-landing-2025/img-solution-1"
            >
              <ul className="space-y-2.5 list-disc ml-4">
                <li>Write code, dockerize, and deploy it as trustless TEE apps.</li>
                <li>You deserve the best security with built-in security best practices.</li>
                <li>Fully open source. No vender lock-in.</li>
              </ul>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <Link href="https://github.com/dstack-TEE/dstack" target="_blank" className="btn btn-blk min-w-36 px-4 py-2 rounded-full text-sm font-medium">
                  Dstack
                </Link>
                <span className="btn btn-text text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Open Source TEE SDK
                </span>
              </div>
            </SolutionCard>
            <SolutionCard
              title="Deploy with ease. Operate with confident"
              image="/home/main-landing-2025/img-solution-2"
            >
              <ul className="space-y-2.5 list-disc ml-4">
                <li>We deal with the pain of hardware maintenance. So you don&apos;t have to.</li>
                <li>Get access to CPU and GPU TEEs in one click. Intel TDX, AMD SEV, and nVIDIA H100/H200 available.</li>
                <li>With 5 years experience, we know how to deliver the best security.</li>
              </ul>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <Link href="https://cloud.phala.network" className="btn btn-blk min-w-36 px-4 py-2 rounded-full text-sm font-medium">
                  Phala Cloud
                </Link>
                <span className="btn btn-text text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  A Secure, AI-Ready Platform
                </span>
              </div>
            </SolutionCard>
            <SolutionCard
              title="Easily Verify and Prove"
              image="/home/main-landing-2025/img-solution-3"
            >
              <ul className="space-y-2.5 list-disc ml-4">
                <li>From RA quote to onchain proof, all the evidences are ready for the Pros.</li>
                <li>RA Explorer and Phala L2 Explorer tools simplify trustless verification.</li>
                <li>Degens can enjoy the security with our user friendly explorers.</li>
              </ul>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <Link href="https://proof.t16z.com/" target="_blank" className="btn btn-blk min-w-36 px-4 py-2 rounded-full text-sm font-medium">
                  RA Explorer
                </Link>
                <Link href="#" target="_blank" className="btn btn-blk min-w-36 px-4 py-2 rounded-full text-sm font-medium">
                  Phala L2 Explorer
                </Link>
                <Link href="https://phalanetwork.notion.site/TEE-Coprocessor-Handbook-1360317e04a180ffa888f5f6e8a07310" target="_blank" className="btn btn-blk min-w-36 px-4 py-2 rounded-full text-sm font-medium">
                  TEE as a Service
                </Link>
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
        "py-12 lg:py-20 px-2", "section-usercases"
      )}
    >
      <main className="safe-viewport flex flex-col lg:grid lg:grid-cols-12 gap-6">
        <h2 className="lg:col-span-12 xl:col-span-10 xl:col-start-2 text-40 font-bold tracking-tight text-center mb-6">
          TEE is Eating the World
        </h2>

        <div className="lg:col-span-5 xl:col-span-3 xl:col-start-3 rounded p-8 bg-white flex flex-col gap-8 items-center">
          <h4 className="text-20 font-semibold tracking-tight mb-1">Web2 In. Web3 Out.</h4>
          <div className="flex flex-row items-center">
            <div className="h-16 w-16 flex items-center justify-center p-3 border border-black-150 rounded-full">
              <img className="h-8 w-auto" src="/home/main-landing-2025/icon-x.png" />
            </div>
            <img src="/home/main-landing-2025/arrow.png" />
            <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full">
              <img className="h-10 w-auto" src="/home/main-landing-2025/icon-openai.png" />
            </div>
          </div>
          <p className="text-14 text-center text-black-600">Turn your web2 apps into verifiable web3 powerhouses in minutes. No single points of failure. No headaches. Just connect Docker → Blockchain / Autonomous AI. Done.</p>
        </div>

        <div className="lg:col-start-6 lg:col-span-7 xl:col-start-6 xl:col-span-5 rounded p-8 bg-white flex flex-col gap-8 items-center">
          <h4 className="text-20 font-semibold tracking-tight mb-1">Decentralized AI</h4>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
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
              <div className="w-48 overflow-hidden">
                <div className="flex flex-row w-64">
                  <div className="h-[62px] w-[62px] flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white">
                    <img className="w-12 h-auto" src="/home/main-landing-2025/icon-ai-agents-2.png" />
                  </div>
                  <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white relative -left-6">
                    <img className="h-8 w-auto" src="/home/main-landing-2025/icon-ai-agents-3.png" />
                  </div>
                  <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white relative -left-12">
                    <img className="w-12 h-auto" src="/home/main-landing-2025/icon-ai-agents-aipool.jpg" />
                  </div>
                  <div className="h-16 w-16 flex items-center justify-center border border-black-150 rounded-full overflow-hidden bg-white relative -left-[4rem]">
                    <img className="w-auto h-auto" src="/home/main-landing-2025/icon-ai-agents-elizaos.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-14 text-center text-black-600">
            Set your AI free. No AWS. No censorship. Just pure autonomous AI, secured by GPU TEE. Train it. Deploy it. Trust it.
            <Link href="/reports/2025RealCodeForRealdAGI.pdf" className="ml-0.5 underline hover:no-underline">
              Read Phala Network’s 2025 TEE x AI Report
            </Link>.
          </p>
        </div>

        <div className="lg:col-span-6 xl:col-start-3 xl:col-span-4 rounded p-8 bg-white flex flex-col gap-8 items-center">
          <h4 className="text-20 font-semibold tracking-tight mb-1">Defense in Depth</h4>
          <div className="flex flex-row items-center gap-1 lg:gap-2.5">
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
          <p className="text-14 text-center text-black-600">Secure cryptography even more. Combine TEE with the math kind. No flaws. No collusion. Just pure, layered protection.</p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 xl:col-start-7 xl:col-span-4 rounded p-8 bg-white flex flex-col gap-8 items-center">
          <h4 className="text-20 font-semibold tracking-tight mb-1">Blockchain Economy</h4>
          <div className="flex flex-row items-center gap-1 lg:gap-2.5">
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
          <p className="text-14 text-center text-black-600">Frontrun the MEV crisis with TEE. Build blocks that can&apos;t be censored or sandwiched. Provable execution. Trustless. Fair.</p>
        </div>

        <Link href="/partnerships" className="btn btn-wht rounded-full col-start-3 col-span-8 mt-6">
          Discover All Usecases
        </Link>
      </main>
    </section>
  )
}

interface HowItWorkCardProps {  
  title: string
  image: string
  backdropColor: string
  children: React.ReactNode
}

function HowItWorkCard({ title, image, backdropColor, children }: HowItWorkCardProps) {
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
      <main className="p-10 z-10 text-white min-h-[50%]">
        <h3 className="text-20 font-bold tracking-tight mb-4">{title}</h3>
        {children}
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
    <section className="py-12 lg:py-20">
      <main className="safe-viewport flex flex-col lg:grid lg:grid-cols-12 gap-10">
        <h2 className="lg:col-span-12 xl:col-span-10 xl:col-start-2 text-40 font-bold tracking-tight text-center">How It Works</h2>
        <div className="lg:col-span-12 xl:col-span-10 xl:col-start-2 flex flex-col lg:grid lg:grid-cols-3 gap-6">
          <HowItWorkCard
            title="TEE Hardwares"
            image="/home/main-landing-2025/img-how-it-work-1.jpg"
            backdropColor="#669fd7"
          >
            <p className="text-14 font-medium">
              The TEE hardware ensures your computation is tamper-proof, privacy preserving, and unstoppable. It generates the execution proof that everyone can verify easily.
            </p>
          </HowItWorkCard>
          <HowItWorkCard
            title="TEE Abstraction"
            image="/home/main-landing-2025/img-how-it-work-2.jpg"
            backdropColor="#A9D03F"
          >
            <p className="text-14 font-medium">
              Phala provides an abstraction unifies the security of Intel SGX, Intel TDX, AMD SEV, and NVIDIA GPU TEEs. With decentralized Root-of-Trust design benefit from the security of Ethereum.
            </p>
          </HowItWorkCard>
          <HowItWorkCard
            title="T16Z Philosophy"
            image="/home/main-landing-2025/img-how-it-work-3.jpg"
            backdropColor="#D58E5E"
          >
            <p className="text-14 font-medium">
              A cryptographic computer is built with not only TEE, but a novel blend of TEE, MPC, ZKP, and cryptoeconomic security defends the attacks to your app in depth.
            </p>
          </HowItWorkCard>
        </div>
        <div className="md:col-span-10 md:col-start-2 flex flex-row justify-center">
          <a href="https://www.paradigm.xyz/2024/11/the-5-levels-of-secure-hardware" target="_blank" className="btn btn-blk btn-sm rounded-full">Explore 5 Levels of Secured Hardwares</a>
        </div>
      </main>
    </section>
  )
}

function GlobalAvailability() {
  return (
    <section className="py-12 lg:py-20">
      <div className="safe-viewport flex flex-col lg:grid lg:grid-cols-12 gap-y-4">
        <header className="lg:col-span-10 lg:row-start-1 lg:col-start-2 text-center">
          <h2 className="text-40 font-bold tracking-tight mb-6 text-black-900">
            A Decentralized Cloud
          </h2>
          <p className="text-20 font-semibold tracking-tight text-black-600">By the people, for the people</p>
        </header>
        <Stats />
        <figure className="md:col-span-8 md:col-start-3 md: row-start-3 flex flex-col gap-4 items-center">
          <picture>
            <source srcSet={`/home/main-landing-2025/img-global-availability.webp`}type="image/webp" />
            <img src={`/home/main-landing-2025/img-global-availability.jpg`} alt="Global Availability" className="w-full h-full object-cover" />
          </picture>
        </figure>
        <div className="md:col-span-8 md:col-start-3 md:row-start-3 flex flex-col-reverse w-full h-full items-center">
          <div className="relative top-1">
            <a href="https://cloud.phala.network" className="btn btn-blk rounded-full">Visit Phala Cloud</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function RecentPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="py-12 lg:py-20 bg-[hsl(78,32%,95%)]">
      <main className="safe-viewport flex flex-col md:grid md:grid-cols-12 gap-6">
        <header className="md:col-span-12 xl:col-span-10 xl:col-start-2 text-center flex flex-row justify-between items-center">
          <h2 className="text-40 font-bold tracking-tight">Today&apos;s Highlights</h2>
          <Link href="/blog" className="btn btn-blk btn-sm min-w-36 rounded-full tracking-wide">More</Link>
        </header>
        
        <div className="md:col-span-12 xl:col-span-10 xl:col-start-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
