'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

import { cn } from '@/lib/utils'
import PartnerTagFilter from '@/components/PartnerTagFilter'

interface PartnerItem {
  name: string
  url: string
  icon: string
  description: string
  tags: string[]
  post?: string
}

function PartnerCard({ title, url, description, src, tags, post, isLarge = false }: {
  title: string,
  url: string,
  description: string,
  src: string,
  post?: string,
  tags: string[],
  isLarge?: boolean
}) {
  const cardHeight = isLarge ? "h-96" : "h-80"
  const logoSize = isLarge ? "h-28 w-28" : "h-20 w-20"
  
  
  return (
    <div
      className={cn(
        "bg-background border-border group flex flex-col items-start justify-between rounded-md border p-4 transition-all duration-300 hover:text-black md:p-6",
        cardHeight
      )}
      style={{} as React.CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#C4F142'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = ''
      }}
    >
      {/* Category tag */}
      <div className="border-border rounded-md border px-3 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-black md:px-4 md:py-2 md:text-sm">
        {tags[0] || 'Partner'}
      </div>
      
      {/* Logo */}
      <div className="mx-auto mb-4 flex-1 flex items-center justify-center">
        <img
          src={src}
          alt={title}
          className={cn(
            "object-contain transition-all duration-300",
            // Simple approach: make logos visible with good contrast
            "opacity-75 saturate-0 group-hover:opacity-100 group-hover:saturate-100",
            // Ensure visibility on both light and dark backgrounds
            "contrast-125 brightness-75 group-hover:contrast-100 group-hover:brightness-100",
            logoSize
          )}
        />
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link
            href={post || url}
            target="_blank"
            className={cn(
              "font-normal transition-colors duration-300 hover:underline",
              isLarge ? "text-xl lg:text-3xl" : "text-lg lg:text-2xl"
            )}
          >
            {title}
          </Link>
          <Link href={url} target="_blank">
            <FiExternalLink className="h-4 w-4 text-gray-400 group-hover:text-black" />
          </Link>
        </div>
        
        {description && (
          <p className="text-sm text-muted-foreground group-hover:text-gray-700 line-clamp-3">
            {description}
          </p>
        )}
        
        {/* Additional tags */}
        {tags.length > 1 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.slice(1, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded group-hover:bg-gray-200 group-hover:text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const items: PartnerItem[] = [
  {
    name: 'Nvidia',
    url: 'https://www.nvidia.com/',
    icon: '/partnerships/nvidia.webp',
    description: 'NVIDIA Inception Program is designed to help startups accelerate innovation and growth.',
    tags: ['AI'],
  },
  {
    name: 'OpenRouter',
    url: 'https://openrouter.ai',
    icon: '/partnerships/openrouter.jpg',
    description: 'OpenRouter provides a unified API that gives you access to hundreds of AI models through a single endpoint, while automatically handling fallbacks and selecting the most cost-effective options.',
    tags: ['AI'],
  },
  {
    name: 'Near',
    url: 'https://near.org/',
    icon: '/partnerships/near.webp',
    description: 'NEAR AI brought by Near foundation is a distributed system for building, deploying, and managing AI agents with the goal of making open source and user-owned AGI.',
    tags: ['AI', 'Blockchain'],
  },
  {
    name: 'Succinct',
    url: 'https://www.succinct.xyz/',
    icon: '/partnerships/succinct.svg',
    description: 'Succinct is dedicated to build the novel ZK technologies, such as SP1, which is a performant, open-source zero-knowledge virtual machine (zkVM)',
    tags: ['ZK'],
  },
  {
    name: 'Vana',
    url: 'https://www.vana.org/',
    icon: '/partnerships/vana.jpg',
    description: 'Vana is the first network for user-owned data. It transforms how data is owned, shared, and monetized. The Vana L1 enables users to pool their data in DataDAOs while maintaining control and privacy.',
    tags: ['AI', 'Data'],
  },
  {
    name: 'Nethermind',
    url: 'https://www.nethermind.io/',
    icon: '/partnerships/nethermind.png',
    description: 'Nethermind is a blockchain infrastructure provider whose vision is to empower enterprises and developers worldwide to access and build on decentralized systems.',
    tags: ['AI', 'Blockchain', 'ZK'],
  },
  {
    name: 'Primus Labs',
    url: 'https://primuslabs.xyz/',
    icon: '/partnerships/primus.png',
    description: 'Primus uses secure zkTLS (zero-knowledge transport layer security) and zkFHE (zero-knowledge fully homomorphic encryption) to validate arbitrary web data and utilize it in an encrypted form.',
    tags: ['ZK'],
  },
  {
    name: 'Flashbots',
    url: 'https://www.flashbots.net/',
    icon: '/partnerships/flashbots.png',
    description: 'Flashbots is a research and development organization formed to mitigate the negative externalities posed by Maximal Extractable Value (MEV) to stateful blockchains, starting with Ethereum.',
    tags: ['Blockchain', 'Financial'],
  },
  {
    name: 'ElizaOS',
    url: 'https://www.elizaos.ai/',
    icon: '/partnerships/elizaos.png',
    description: 'Eliza is a pioneering venture capital firm that operates as a decentralized autonomous organization (DAO), leveraging the power of artificial intelligence to revolutionize investment strategies and foster an open-source community around AI agents.',
    tags: ['AI'],
  },
  {
    name: 'Mind Network',
    url: 'https://www.mindnetwork.xyz/',
    icon: '/partnerships/MindNetwork.png',
    description: 'Mind Network is pioneering FHE Infra for a Fully Encrypted Web. Innovating FHE to empower universal end-to-end encryption for the whole industry, starting with AI, modular chains, gaming, asset management, and DePIN. Mind Network offers unique solutions to ensure data security, consensus security, and transaction security across key domains.',
    tags: ['FHE'],
  },
  {
    name: 'GoPlus Security',
    url: 'https://gopluslabs.io/',
    icon: '/partnerships/goplus.png',
    description: 'GoPlus Security is a leading security layer for web3, protecting every transaction for users and also providing security intelligence for developers to protect their users.',
    tags: ['Security'],
  },
  {
    name: '0G',
    url: 'https://0g.ai/',
    icon: '/partnerships/0g.png',
    description: '0G (Zero Gravity) is the first decentralized AI operating system that acts as the foundational layer for decentralized AI applications and chains. It efficiently orchestrates utilization of hardware resources such as storage and compute and software assets such as data and models to handle the scale and complexity of AI workloads.',
    tags: ['AI'],
  },
  {
    name: 'CARV',
    url: 'https://carv.io/',
    icon: '/partnerships/CARV.png',
    description: 'CARV is building an AI chain ecosystem to enable data sovereignty at scale. By empowering AI agents with secure, unified infrastructure, CARV enables intelligent, collaborative operations through its SVM Chain, offering trustless consensus, cryptographic proofs, and verifiable execution.',
    tags: ['AI', 'Data'],
  },
  {
    name: 'IO.NET',
    url: 'https://io.net/',
    icon: '/partnerships/io-net.png',
    description: 'IO.NET is a decentralized distributed compute network that enables ML engineers to deploy a GPU cluster of any scale within seconds at a fraction of the cost of centralized cloud providers.',
    tags: ['AI', 'GPU'],
  },
  {
    name: 'Hyperbolic',
    url: 'https://hyperbolic.xyz/',
    icon: '/partnerships/hyperbolic.png',
    description: 'Hyperbolic unites global compute to provide accessible, affordable, and scalable GPU resources and AI services. Start in seconds, and keep running.',
    tags: ['AI', 'GPU'],
  },
  {
    name: 'xNomadAI',
    url: 'https://xnomad.ai/',
    icon: '/partnerships/xNomad.png',
    description: 'xNomadAI is an open-source platform that transforms AI agents into transferable and trackable NFTs. By enabling AI-driven systems to operate independently, xNomadAI provides a foundation for creating intelligent and secure digital assets.',
    tags: ['Agent', 'NFT'],
  },
  {
    name: 'Ava Protocol',
    url: 'https://avaprotocol.org/',
    icon: '/partnerships/ava.png',
    description: 'Ava Protocol is a cutting-edge automation platform designed for the decentralized world. Ava enables users to create event-driven, autonomous "super-transactions" across DeFi and Web3.',
    tags: ['Blockchain', 'DEFI'],
  },
  {
    name: 'Theoriq',
    url: 'https://www.theoriq.ai/',
    icon: '/partnerships/Theoriq.png',
    description: 'Theoriq is the first decentralized protocol for governing and building multi-agent systems by integrating AI with blockchain technology. The platform is centered around an agnostic modular base layer that powers an ecosystem of dynamic AI Agent collectives that are interoperable, composable and decentralized.',
    tags: ['AI', 'Agent'],
  },
  {
    name: 'Aligned Layer',
    url: 'https://alignedlayer.com/',
    icon: '/partnerships/aligned.png',
    description: 'Aligned is a decentralized network that verifies Zero-Knowledge/validity proofs and posts the results to Ethereum. It is designed to provide high throughput, cheap proof verification with low latency.',
    tags: ['ZK'],
  },
  {
    name: 'Morpheus',
    url: 'https://mor.org/',
    icon: '/partnerships/morpheus.png',
    description: 'Morpheus is designed to incentivize the first peer-to-peer network of personal general-purpose AIs, known as Smart Agents, capable of executing Smart Contracts on behalf of users.',
    tags: ['AI'],
  },
  {
    name: 'Artela',
    url: 'https://artela.network/',
    icon: '/partnerships/artela.png',
    description: 'Artela is an extensible Layer 1 blockchain with parallel execution and interoperable virtual machines. It pioneers the EVM++ pattern, enabling modular, customizable, and scalable dApps.',
    tags: ['AI', 'Blockchain'],
  },
  {
    name: 'Allora',
    url: 'https://www.allora.network/',
    icon: '/partnerships/allora.png',
    description: 'Allora is a self-improving decentralized AI network. Allora enables applications to leverage smarter, more secure AI through a self-improving network of ML models. By combining innovations in crowdsourced intelligence, reinforcement learning, and regret minimization, Allora unlocks a vast new design space of applications at the intersection of crypto and AI.',
    tags: ['AI'],
  },
  {
    name: 'Pond',
    url: 'https://cryptopond.xyz/',
    icon: '/partnerships/Pond.png',
    description: 'Pond is building a decentralized Graph Neural Network (GNN) model for Web 3.0. This model is designed to learn on-chain behaviors and predict future behaviors.',
    tags: ['AI'],
  },
  {
    name: 'FLock.io',
    url: 'https://flock.io/',
    icon: '/partnerships/Flock.png',
    description: 'FLock.io seeks to decentralise training and value alignment. They ensure that AI objectives match the public\'s ethics and societal aims, that decision-making falls to communities, and that usefulness is a top priority.',
    tags: ['AI'],
  },
  {
    name: 'The Graph',
    url: 'https://thegraph.com/',
    icon: '/partnerships/TheGraph.png',
    description: 'The Graph is a powerful decentralized protocol that enables seamless querying and indexing of blockchain data. It simplifies the complex process of querying blockchain data, making dapp development faster and easier.',
    tags: ['Data'],
  },
  {
    name: 'Dmail',
    url: 'https://dmail.ai/',
    icon: '/partnerships/DMail.png',
    description: 'Dmail Network is an AI-powered decentralized communication infrastructure built to provide encrypted emails, unified notifications, and targeted marketing across multiple chains and dApps for users, developers, and marketers.',
    tags: ['App'],
  },
  {
    name: 'Primus',
    url: 'https://primuslabs.xyz/',
    icon: '/partnerships/primus.png',
    description: 'Primus is a pioneer in cryptographic security, specializing in zkTLS, Fully Homomorphic Encryption (FHE), and the FHE Virtual Machine (FHEVM).',
    tags: ['FHE', 'ZK'],
  },
  {
    name: 'Fairblock',
    url: 'https://www.fairblock.network/',
    icon: '/partnerships/fairblock.webp',
    description: 'Fairblock leverages confidential computing to mitigate centralized risks and prevent information leakage and manipulation in decentralized applications. This unlocks credible and confidential DeFi mechanisms and AI models.',
    tags: ['FHE', 'MPC'],
  },
  {
    name: 'CrunchDAO',
    url: 'https://www.crunchdao.com/',
    icon: '/partnerships/crunchdao.jpg',
    description: 'CrunchDAO leverages the collective intelligence of data scientists to develop machine learning models and trading signals that generate profits in varying market conditions.',
    tags: ['AI', 'DAO'],
  },
  {
    name: 'Streamr',
    url: 'https://streamr.network/',
    icon: '/partnerships/streamr.svg',
    description: 'Streamr is a decentralized network purpose-built for real-time data streaming. It uses a peer-to-peer (P2P) architecture and a publish/subscribe (pub/sub) model, allowing data producers to broadcast streams that applications and nodes can subscribe to and consume instantly.',
    tags: ['Data'],
  },
  {
    name: 'Sentient',
    url: 'https://sentigen.ai/',
    icon: '/partnerships/sentient.jpg',
    description: 'Sentient Foundation is a non-profit initiative pioneering a new era in AI, aiming to empower communities to build what it calls "Loyal AI" – AI systems that are community-built, community-aligned, and community-owned.',
    tags: ['AI'],
  },
  {
    name: 'Newton',
    url: 'https://magic.link/',
    icon: '/partnerships/newton.svg',
    description: 'Magic Labs\' Newton is a platform for agentic automation in crypto, built to simplify user interactions across DeFi and Web3.',
    tags: ['AI', 'Agent', 'Financial'],
  },
  {
    name: 'Mira',
    url: 'https://mira.network/',
    icon: '/partnerships/mira.jpg',
    description: 'Mira makes AI reliable, by verifying outputs and actions at every step using collective intelligence',
    tags: ['AI'],
  },
  {
    name: 'Holoworld',
    url: 'https://www.holoworld.com/',
    icon: '/partnerships/holoworld.png',
    description: 'Holoworld lets anyone create intelligent virtual beings, or AI agents, that can talk, act, and engage across different platforms—no coding required.',
    tags: ['AI', 'Agent'],
  },
  {
    name: 'Swarms',
    url: 'https://www.swarms.xyz/',
    icon: '/partnerships/swarms.png',
    description: 'The Enterprise-Grade Production-Ready Multi-Agent Orchestration Framework.',
    tags: ['AI', 'Agent'],
  },
  {
    name: 'Ritual',
    url: 'https://ritual.net/',
    icon: '/partnerships/ritual.jpg',
    description: 'Ritual is the network for open AI infrastructure. We build groundbreaking, new architecture on a crowdsourced governance layer aimed to handle safety, funding, alignment, and model evolution.',
    tags: ['AI'],
  },
  {
    name: 'Nous Research',
    url: 'https://nousresearch.com/',
    icon: '/partnerships/nous-research.jpg',
    description: 'Nous Research is a leader in the development of human-centric language models and simulators.',
    tags: ['AI'],
  },
  {
    name: 'Blorm',
    url: 'https://blorm.xyz/',
    icon: '/partnerships/blorm.jpg',
    description: 'Blorm is forming blockchain information. a blorm is an onchain action.',
    tags: ['AI'],
  }
]

const sorted = items

function LatestNews() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-16">
      <header>
        <h2 className="text-24 lg:text-40 font-black text-black-800 mb-4 lg:mb-10 text-center">
          Latest News
        </h2>
      </header>
      <div className="mt-16 flex flex-col lg:flex-row gap-4 justify-center">
        <Link href="/tags/Partnerships" className="btn btn-rounded btn-purple px-12">
          View Partnership News
        </Link>
      </div>
    </section>
  )
}

export default function Page() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  
  // Get all unique tags from items
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    sorted.forEach(item => {
      item.tags.forEach(tag => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [])
  
  // Filter items based on selected tags
  const filteredItems = useMemo(() => {
    if (selectedTags.length === 0) return sorted
    return sorted.filter(item =>
      selectedTags.some(selectedTag => item.tags.includes(selectedTag))
    )
  }, [selectedTags])
  
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }
  
  const handleClearAll = () => {
    setSelectedTags([])
  }

  return (
    <div 
      style={{
        background: `
          radial-gradient(1200px 600px at 70% 35%, rgba(199,255,170,0.7), rgba(255,255,255,0) 60%),
          linear-gradient(180deg, #ffffff, #f9fff0 40%, #ffffff 70%)
        `,
        minHeight: '100vh'
      }}
    >
      <section className="py-16 sm:py-32">
        <div className="mx-auto max-w-6xl px-8">
          {/* Title */}
          <header className="flex flex-col justify-center py-8 lg:py-16">
            <h1 className="text-black-800 text-24 lg:text-48 font-black text-center tracking-wide">
              Partners with Trust
            </h1>
          </header>

          {/* Tag Filter - Centered */}
          <div className="mb-8 md:mb-14 lg:mb-16">
            <PartnerTagFilter
              allTags={allTags}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
              onClearAll={handleClearAll}
              filteredCount={filteredItems.length}
              totalCount={sorted.length}
            />
          </div>

          {/* Mobile view */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {filteredItems.map((item, idx) => (
                <PartnerCard
                  key={idx}
                  title={item.name}
                  url={item.url}
                  description={item.description}
                  src={item.icon}
                  post={item.post}
                  tags={item.tags}
                />
              ))}
            </div>
          </div>

          {/* Desktop view - Feature257 inspired layout */}
          <div className="hidden md:block">
            {/* Top 2 large cards */}
            {filteredItems.length > 0 && (
              <div className="pb-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {filteredItems.slice(0, 2).map((item, idx) => (
                    <PartnerCard
                      key={idx}
                      title={item.name}
                      url={item.url}
                      description={item.description}
                      src={item.icon}
                      post={item.post}
                      tags={item.tags}
                      isLarge={true}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Remaining cards in 3-column grid */}
            {filteredItems.length > 2 && (
              <div className="pb-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.slice(2).map((item, idx) => (
                    <PartnerCard
                      key={idx + 2}
                      title={item.name}
                      url={item.url}
                      description={item.description}
                      src={item.icon}
                      post={item.post}
                      tags={item.tags}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No partners found for the selected tags.</p>
            </div>
          )}
        </div>
      </section>

      <LatestNews />
    </div>
  )
}
