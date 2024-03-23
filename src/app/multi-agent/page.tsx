import { type Metadata } from 'next'
import { cn } from '@/lib/utils'
import dedent from 'dedent'

import { HeroSection01, Section, SectionHeader, SectionSubHeader, SectionBody, SectionActions, SimpleCard } from '@/components/marketing'
import SubscribeForm from '@/components/marketing/SubscribeForm'

export const metadata: Metadata = {
  themeColor: 'rgba(232, 233, 234, 1)',
  title: "The Multi-agent AI Blockchain Coprocessor by Phala Network",
}

const features1 = [
  {
    title: 'Hosting AI Agents',
    description: dedent`
      Phala Network offers a secure platform for hosting Al agents, ensuring efficient operation with blockchain's security and transparency. This enables developers to launch innovative and resilient AI solutions.
    `,
  },
  {
    title: 'Monetization for Developers',
    description: dedent`
      Phala Network's model enables developers to monetize AI agents, creating new revenue streams and encouraging quality AI solutions, thus fostering a vibrant community of innovators.
    `,
  },
  {
    title: 'AI Agent Templates',
    description: dedent`
      Phala Network offers AI agent templates to speed up development and market entry, saving time and resources, and fostering innovation and diversity in the AI ecosystem.
    `,
  },
]

const features2 = [
  {
    title: 'Easy to Use',
    description: dedent`
      The platform is designed with simplicity in mind, enabling developers to effortlessly create and deploy Al agents without the need for extensive blockchain expertise.
    `,
  },
  {
    title: 'AI Agent Interoperability',
    description: dedent`
      It fosters an environment where Al agents can seamlessly interact and exchange information, thereby enhancing the capability of agents to perform complex tasks through collaboration.
    `,
  },
  {
    title: 'Verifiable for Every Step of Agent',
    description: dedent`
      Transparency and trust are paramount; hence, every action and decision made by the AI agents can be tracked and verified, ensuring accountability throughout the agent's lifecycle.
    `,
  },
  {
    title: 'Unstoppable Agent',
    description: dedent`
      Built on Phala Network's robust infrastructure, these Al agents are resilient and operate continuously, ensuring that applications remain active without downtime.
    `,
  },
  {
    title: 'Community Owned',
    description: dedent`
      Emphasizing the decentralized ethos, the platform allows the community to own and govern the Al agents, ensuring that the developments and benefits are aligned with the users' interests.
    `,
  },
]

const features3 = [
  {
    title: 'Streamlined Deployment with Templates',
    description: dedent`
      Phala Netowrk provides ready-to-use Agent templates, enabling rapid selection, deployment, and serverless hosting directly on its platform. This approach drastically reduces development time and complexity.
    `,
  },
  {
    title: 'Extensive Al Tools Integration',
    description: dedent`
      The platform supports a wide variety of Al tools, including top-tier Large Language Models (LLMs) like OpenAl and Llama, and advanced frameworks such as Langchain and Autogpt, empowering developers to build sophisticated Al agents with ease.
    `,
  },
  {
    title: 'Comprehensive Web3 Technology Support',
    description: dedent`
      Phala Network ensures seamless integration with essential Web3 technologies: 1. Data Indexing and Storage: Incorporates protocols like Graph, Airstack, IPFS, Filecoin, and Arweave for efficient data handling. 2. Blockchain Compatibility: Offers support for EVM-compatible chains, Solana, Polkadot, facilitating wide network operability. 3. Customizable Computation: Developers can use popular programming languages, including JavaScript and TypeScript, for agent customization.
    `,
  },
  {
    title: 'Trust through Verifiable Proofs',
    description: dedent`
      To guarantee transparency and security, Phala integrates verifiable proof mechanisms such as SGX attestation, EAS attestation, and ZKP, ensuring every Al agent's action is accountable and verifiable.
    `,
  },
]

export default function Page() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      <HeroSection01
        label="introducing"
        title="The Multi-agent AI Blockchain Coprocessor"
        subTitle="Phala Network is dedicated to forging a multi-agent ecosystem, seamlessly merging leading Web3 and AI frameworks to empower developers in deploying and managing AI agents on a robust, decentralized platform with ease."
      >
        <a
          href="#"
          className="btn btn-primary btn-phala btn-rounded min-w-52"
          target="_blank"
        >
          Discover Agents
        </a>
        <a
          href="#"
          className="btn btn-secondary btn-blk btn-rounded min-w-52"
          target="_blank"
        >
          Get started
        </a>
      </HeroSection01>

      <Section theme="light">
        <SectionHeader>Phala Network is Fueling the Multi-Agent AI Economy</SectionHeader>
        <SectionSubHeader>
          Phala Network is pioneering a multi-agent AI economy, merging decentralized autonomous agents with co-owned AI for a collaborative, equitable future.
        </SectionSubHeader>
        <SectionBody>
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features1.map((feature) => (
              <SimpleCard title={feature.title} maxTitleLines={2}>
                {feature.description}
              </SimpleCard>
            ))}
          </dl>
        </SectionBody>
        <SectionActions>
          <a
            href=""
            className="btn btn-xl btn-primary btn-phala btn-rounded min-w-60"
          >
            Learn more
          </a>
        </SectionActions>
      </Section>

      <Section theme="dark">
        <SectionHeader>Multi-Agent AI Contracts by Phala Network</SectionHeader>
        <SectionSubHeader>
          The Multi-Agent Contract on Phala Network introduces an innovative approach to deploying and managing AI agents on the blockchain. This platform leverages the strengths of decentralized technology to offer a suite of functionalities tailored for the development and integration of AI within the webs space.
        </SectionSubHeader>
        <SectionBody>
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {features2.map((feature) => (
              <SimpleCard title={feature.title}>
                {feature.description}
              </SimpleCard>
            ))}
          </dl>
        </SectionBody>
      </Section>

      <Section theme="light">
        <SectionHeader>Overcome LLM limitations with Multi-Agent AI Contracts</SectionHeader>
        <SectionSubHeader>
          Phala Network's Multi-Agent Contract platform is meticulously designed to empower developers in the realm of AI and blockchain, offering an enriched toolkit that significantly simplifies the development and deployment process.
        </SectionSubHeader>
        <SectionBody>
          <dl className="grid max-w-xl grid-cols-1 gap-2 lg:max-w-none lg:grid-cols-4">
            {features3.map((feature) => (
              <SimpleCard title={feature.title} maxTitleLines={3}>
                {feature.description}
              </SimpleCard>
            ))}
          </dl>
        </SectionBody>
      </Section>

      <Section theme="dark">
        <SectionHeader>
          Get Early Access
        </SectionHeader>
        <SectionSubHeader>
          Interested in working with Phala Network to run decentralized multi-agent apps? Join the waiting list to get access.
        </SectionSubHeader>
        <SectionBody>
          <div className="flex justify-center">
            <button
              className="btn btn-xl btn-primary btn-wht btn-rounded min-w-60"
            >
              Join The Waitlist
            </button>
          </div>
        </SectionBody>
      </Section>

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
