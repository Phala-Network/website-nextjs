import { use } from 'react'
import { type Metadata } from 'next'
import { cn } from '@/lib/utils'
import dedent from 'dedent'

import { getPostList } from '@/queries/GetPostList'
import { Stats } from '@/components/Stats'
import { HeroSection01, Section, SectionHeader, SectionSubHeader, SectionBody, SectionActions, SimpleCard, BlogPostCard } from '@/components/marketing'
import SubscribeForm from '@/components/marketing/SubscribeForm'
import { type GenericComponent } from '@/types/components'

export const metadata: Metadata = {
  themeColor: 'rgba(232, 233, 234, 1)',
  title: "The Multi-agent AI Blockchain Coprocessor by Phala Network",
}

function Box({ className, children }: GenericComponent) {
  return (
    <div className={cn("rounded-sm bg-whiteAlpha-50 border border-whiteAlpha-200", className)}>
      {children}
    </div>
  )
}

function LocalSectionHeader({ label, title, subTitle }: {
  label?: string,
  title: string,
  subTitle?: string,
}) {
  return (
    <header className="text-center max-w-3xl mx-auto px-8 py-12">
      {label && (
        <span className="text-ai-agent text-sm font-bold">{label}</span>
      )}
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      {subTitle && <p className="text-black-200 mt-4">{subTitle}</p>}
    </header>
  )
}

export default function Page() {
  // const posts = use(getPostList({
  //   includeTags: ['Blockchain Coprocessor'],
  //   sortReversed: true,
  // }))
  return (
    <div className="flex flex-col gap-8 sm:gap-16 bg-black-900">
      <HeroSection01
        title="Build Decentralized Autonomous AI Agents"
        subTitle="Phala Network is at the forefront of innovation with our AI-Agent Contract platform, transforming decentralized AI agents. We aim to revolutionize their control and governance, ensuring operation within a decentralized framework that eliminates central authority control."
        heroImage="/illustrations/hero-bg-ai-agents.jpg"
        theme="dark"
        headingClass="max-w-3xl"
      >
      </HeroSection01>

      <section className="lg:mt-[-20rem] z-10 lg:px-8 xl:px-32">
        <figure className="mt-12 w-full mx-auto max-w-5xl">
          <img src="/illustrations/how-ai-agents-works.png" alt="How AI Agents Works" />
        </figure>

        <div className="flex flex-row gap-6 mx-auto mt-6 max-w-5xl">
          <Box className="flex flex-col p-8 gap-5 flex-1">
            <h3
              className={cn(
                "text-xl font-bold h-8 text-ai-agent",
              )}
            >
              Decentralization Ethos
            </h3>
            <div className="text-black-200">
              AI-Agent Contract transforms AI agents into autonomous
              entities, emphasizing decentralization to promote unbiased
              decisions free from central control, leading to more
              resilient, transparent AI aligned with user interests.
            </div>
          </Box>
          <Box className="flex flex-col p-8 gap-5 flex-1">
            <h3
              className={cn(
                "text-xl font-bold h-8 text-ai-agent",
              )}
            >
              Tokenomics Simplified
            </h3>
            <div className="text-black-200">
              AI-Agent Contract integrates tokenomics, revolutionizing
              governance and incentivization within the ecosystem through
              cryptocurrencies. This approach rewards contributions and
              enables decentralized, community-driven management of AI
              agents, enhancing participation and autonomy.
            </div>
          </Box>
        </div>

        <div className="mt-16 flex flex-col gap-6 w-[480px] mx-auto">
          <button
            className={cn(
              "btn btn-lg btn-primary btn-ai-agent btn-rounded w-full border-0"
            )}
          >
            Join the Waitlist
          </button>
          <button
            className={cn(
              "btn btn-lg btn-primary btn-blk btn-rounded w-full"
            )}
          >
            Explore Docs
          </button>
        </div>
      </section>

      <section className="py-8 lg:py-20 px-6 lg:px-8 mx-auto max-w-6xl">
        <LocalSectionHeader
          label="AI-Agent Contract"
          title="Integrating AI Agents on Blockchain"
          subTitle="Use Phala Network's AI-Agent Contract to create and launch your AI Agent."
        />

        <Box>
          <figure>
            <img src="/illustrations/ai-agents/features.png" alt="Phala AI Agents Features" />
          </figure>
        </Box>

        <div className="flex flex-row gap-6 mt-6">
          <Box className="flex-1 p-8">
            <img
              src="/illustrations/ai-agents/feature-connective.png"
              alt="Phala AI Agents Features 1"
              className="w-8 h-8 mb-8"
            />
            <h4 className="text-white text-lg font-bold">Connect AI Agent with Smart Contract</h4>
          </Box>
          <Box className="flex-1 p-8">
            <img
              src="/illustrations/ai-agents/feature-confidence.png"
              alt="Phala AI Agents Features 1"
              className="w-8 h-8 mb-8"
            />
            <h4 className="text-white text-lg font-bold">Unlock Community Ownership and Control</h4>
          </Box>
          <Box className="flex-1 p-8">
            <img
              src="/illustrations/ai-agents/feature-verifiable.png"
              alt="Phala AI Agents Features 1"
              className="w-8 h-8 mb-8"
            />
            <h4 className="text-white text-lg font-bold">Verifiable AI Execution</h4>
          </Box>
        </div>

        <div className="mt-16 flex flex-col gap-6 w-[480px] mx-auto">
          <button
            className={cn(
              "btn btn-lg btn-primary btn-ai-agent btn-rounded w-full border-0"
            )}
          >
            Join the Waitlist
          </button>
        </div>
      </section>

      <section className="py-8 lg:py-20 px-6 lg:px-8 mx-auto max-w-6xl">
        <LocalSectionHeader
          label="Build with AI-Agent Contract"
          title="Multi AI-Agent Contract Offerings"
        />

        <div className="flex flex-row gap-6">
          <Box className="flex flex-col items-center flex-1 p-12">
            <img
              src="/illustrations/ai-agents/templates.png"
              className="w-60 aspect-[178/240] mb-6"
            />
            <h4 className="text-xl text-center text-white">Pre-built AI-Agent Templates</h4>
          </Box>
          <Box className="flex flex-col items-center flex-1 p-12">
            <img
              src="/illustrations/ai-agents/tokenomics.png"
              className="w-60 aspect-[178/240] mb-6"
            />
            <h4 className="text-xl text-center text-white">Tokenomics on Ethereum / L2</h4>
          </Box>
          <Box className="flex flex-col items-center flex-1 p-12">
            <img
              src="/illustrations/ai-agents/serverless.png"
              className="w-60 aspect-[178/240] mb-6"
            />
            <h4 className="text-xl text-center text-white">Serverless AI-Agents Hosted on Phala Network</h4>
          </Box>
        </div>

        <div className="mt-16 flex flex-col gap-6 w-[480px] mx-auto">
          <button
            className={cn(
              "btn btn-lg btn-primary btn-ai-agent btn-rounded w-full border-0"
            )}
          >
            Join the Waitlist
          </button>
        </div>
      </section>

      <section className="py-8 lg:py-20 px-6 lg:px-8 mx-auto max-w-6xl">
        <LocalSectionHeader
          label="AI-Agent Contract Backed by Phala Network"
          title="The Phala Network Advantage"
        />

        <div className="grid grid-cols-2 grid-rows-7 gap-6">
          <Box className="col-span-1 row-start-1 row-span-6 p-8 flex flex-col gap-6">
            <h3 className="text-white text-lg font-bold">Powered By DePIN</h3>
            <figure className="grow">
              <img
                src="/illustrations/ai-agents/depin-nodes.png"
                alt=""
              />
            </figure>
            <div>
              <span className="text-ai-agent text-lg font-bold">Always on AI Coprocessor Network with 33K+ Servers</span>
            </div>
          </Box>

          <Box className="col-span-1 row-start-1 row-span-3 p-8">
            <h3 className="text-white text-lg font-bold">Integrate Your Favorite Tools With Ease</h3>
            <ul
              className={cn(
                "text-sm font-medium text-white",
                "flex flex-row gap-9 mt-6"
              )}
            >
              <li className="w-18 flex flex-col items-center">
                <img src="/illustrations/ai-agents/icon-chatgpt.png" className="w-16 h-16 mb-2" />
                <span>GPT-4</span>
              </li>
              <li className="w-18 flex flex-col items-center">
                <img src="/illustrations/ai-agents/icon-autogpt.png" className="w-16 h-16 mb-2" />
                <span>AutoGPT</span>
              </li>
              <li className="w-18 flex flex-col items-center">
                <img src="/illustrations/ai-agents/icon-langchain.png" className="w-16 h-16 mb-2" />
                <span>Langchain</span>
              </li>
            </ul>
          </Box>

          <Box className="col-span-1 row-start-4 row-span-3 p-8">
            <h3 className="text-white text-lg font-bold">Bring AI Agent Use Cases to Life</h3>
            <ul
              className={cn(
                "flex flex-row mt-6 gap-6"
              )}
            >
              <li>
                <img
                  src="/illustrations/ai-agents/case-social.png"
                  alt=""
                  className="h-16"
                />
              </li>
              <li>
                <img
                  src="/illustrations/ai-agents/case-defi.png"
                  alt=""
                  className="h-16"
                />
              </li>
              <li>
                <img
                  src="/illustrations/ai-agents/case-dao.png"
                  alt=""
                  className="h-16"
                />
              </li>
            </ul>
          </Box>

          <Box className="col-start-1 col-span-2 row-start-7 row-span-2 px-12 py-4">
            <div className="text-white flex flex-row items-center justify-evenly">
              <Stats name="Online Workers" icon="/icons/hero-online-worker.png">
                34,238
              </Stats>
              <Stats name="Compute" icon="/icons/hero-compute.png">
                154,272 vCPU
              </Stats>
              <Stats name="Cross-Chain TX" icon="/icons/hero-cross-chain-tx.png">
                13,270
              </Stats>
              <Stats name="TX" icon="/icons/hero-tx.png">151,268,233</Stats>
            </div>
          </Box>
        </div>

        <div className="mt-16 flex flex-col gap-6 w-[480px] mx-auto">
          <button
            className={cn(
              "btn btn-lg btn-primary btn-ai-agent btn-rounded w-full border-0"
            )}
          >
            Join the Waitlist
          </button>
        </div>
      </section>

      <section className="py-8 lg:py-20 px-6 lg:px-8 mx-auto max-w-6xl">
        <LocalSectionHeader
          label="AI-Agent Ecosystem"
          title="We Are Not Alone"
          subTitle="Multi-Agent Economy is a shared vision with top Web3 AI Projects"
        />

        <img
          src="/illustrations/ai-agents/ecosystem.png"
          alt="AI-Agent Ecosystem"
          className="max-w-full"
        />

        <div className="mt-16 flex flex-col gap-6 w-[480px] mx-auto">
          <button
            className={cn(
              "btn btn-lg btn-primary btn-ai-agent btn-rounded w-full border-0"
            )}
          >
            Join the Waitlist
          </button>
        </div>
      </section>

      <section
        className="relative py-8 lg:py-20 px-6 lg:px-8 rounded-sm overflow-hidden aspect-[2880/1614]"
        style={{
          backgroundImage: 'url(/illustrations/ai-agents/bg-blog.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <h2 className="text-black-950 text-4xl font-black text-center">Latest Developments</h2>
        <dl className="flex flex-col gap-6">
          {/* {(posts || []).map((post, idx) => ( */}
          {/*   <BlogPostCard key={post.id || idx} post={post} /> */}
          {/* ))} */}
        </dl>
        <div className="mt-16 flex flex-col gap-6 w-[180px] mx-auto">
          <button
            className={cn(
              "btn btn-primary btn-blk bg-transparent btn-rounded w-full text-black-800 border-black-800"
            )}
          >
            More
          </button>
        </div>
      </section>

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
