import { use } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

import { cn } from '@/lib/utils'
import { getPostList } from '@/queries/GetPostList'
import { BlogPostCard } from '@/components/marketing'
import { m } from 'framer-motion'

export const metadata: Metadata = {
  themeColor: 'rgba(232, 233, 234, 1)',
  title: "Phala’s Ecosystem Overview",
  alternates: {
    canonical: "https://phala.network/partnerships",
  }
}

function TrustedPartnershipCard({ title, url, description, src, tags, post }: {
  title: string,
  url: string,
  description: string,
  src: string,
  post?: string,
  tags: {label: string, cls: string}[]
}) {
  return (
    <div
      className={cn(
        "relative bg-whiteAlpha-50 border border-solid border-whiteAlpha-200 rounded",
      )}
    >
      <div className={cn("flex items-start justify-start lg:justify-center", "h-full px-4 py-4 lg:p-6")}>
        <div className="flex flex-row lg:flex-col gap-6 items-center justify-center py-6">
          <Link
            className={cn(
              "border-[0.5px] border-solid border-black-900/40 rounded-full w-16 h-16 lg:w-32 lg:h-32 aspect-square overflow-hidden",
              "bg-black-900",
              "flex items-center justify-center shrink-0",
            )}
            href={url}
            target="_blank"
          >
            <img src={src} alt={title} className="w-3/5 select-none pointer-events-none" />
          </Link>
          <div className="flex flex-col gap-2">
            <h4
              className="flex flex-row gap-4 lg:justify-center items-center"
            >
              <Link
                href={post || url}
                target="_blank"
                className="text-white text-20 lg:text-24 font-bold"
              >
                {title}
              </Link>
              <Link
                href={url}
                target="_blank"
              >
                <FiExternalLink className="h-4 w-4 text-black-400" />
              </Link>
            </h4>
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
            <div className="text-whiteAlpha-700 mx-auto lg:mt-2 hyphens-auto">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const items = [
  {
    name: 'Flock.io',
    url: 'https://www.flock.io/',
    icon: '/partnerships/Flock.png',
    description: 'Federated Machine Learning On the Blockchain',
    tags: [
      'AI', 'LLM', 'Partner',
    ],
    post: '/posts/partnership-announcement-phala-flock',
  },
  {
    name: 'GM Network',
    url: 'https://gmnetwork.ai/',
    icon: '/partnerships/GMNetwork.png',
    description: 'The First Consumer AIoT Network',
    tags: [
      'AI', 'Partner',
    ],
    post: '/posts/partnership-announcement-phala-gm-network',
  },
  {
    name: 'IoTEX',
    url: 'https://iotex.io/',
    icon: '/partnerships/IoTEX.png',
    description: 'The modular infrastructure for DePIN projects',
    tags: [
      'DePIN', 'Partner',
    ],
  },
  {
    name: 'Pond',
    url: 'https://cryptopond.xyz/',
    icon: '/partnerships/Pond.png',
    description: 'Decentralized Graph Neural Network (GNN) model for web3',
    tags: [
      'AI', 'Partner',
    ],
    post: '/posts/phala-pond-enhancing-the-ai-endgame-for-the-brave',
  },
  {
    name: 'Mind Network',
    url: 'https://www.mindnetwork.xyz/',
    icon: '/partnerships/MindNetwork.png',
    description: 'FHE Restaking Layer for AI and POS Networks',
    tags: [
      'AI', 'FHE', 'Partner',
    ],
  },
  {
    name: 'AwesomeQA',
    url: 'https://home.awesomeqa.xyz/',
    icon: '/partnerships/AwesomeQA.png',
    description: 'AI support for web3 communities',
    tags: [
      'AI', 'Community',
    ],
    post: '/posts/phala-network-integrates-awesomeqa-for-aipowered-community-support',
  },
  {
    name: 'Theoriq (ChainML)',
    url: 'https://www.theoriq.ai/',
    icon: '/partnerships/Theoriq.png',
    description: 'A modular and composable AI Agent Base Layer',
    tags: [
      'AI', 'Partner',
    ]
  },
  {
    name: 'Nevermined',
    url: 'https://nevermined.io/',
    icon: '/partnerships/Nevermined.png',
    description: 'decentralized AI payments protocol',
    tags: [
      'AI', 'Payments', 'Partner',
    ]
  },
  {
    name: 'MagnetAI',
    url: 'https://magnetai.xyz/',
    icon: '/partnerships/MagnetAI.png',
    description: 'ModelFi Protocol',
    tags: [
      'AI', 'DeFi', 'Partner',
    ]
  },
  {
    name: 'OnFinality',
    url: 'https://onfinality.io/',
    icon: '/partnerships/OnFinality.png',
    description: 'Smarter Blockchain Infrastructure',
    tags: [
      'Tools', 'Partner',
    ]
  },
  {
    name: 'Zurf',
    url: 'https://zurf.social/',
    icon: '/partnerships/Zurf.png',
    description: 'next generation of social media',
    tags: [
      'Web3 Social', 'Builder',
    ],
    post: '/posts/monetizing-social-interactions-phala-and-zurf-parnership',
  },
  {
    name: 'Huddle01',
    url: 'https://huddle01.com/',
    icon: '/partnerships/Huddle01.png',
    description: 'decentralized real-time communication network (dRTC)',
    tags: [
      'Web3 Social', 'DePIN', 'Buiilder',
    ],
    post: '/posts/supercharging-web3-audio-and-video-communication',
  },
  {
    name: 'Airstack',
    url: 'https://airstack.xyz/',
    icon: '/partnerships/Airstack.png',
    description: 'developer platform for composable web3 apps',
    tags: [
      'Web3 Social', 'Tools', 'Builder',
    ],
    post: '/posts/advancing-web3-social-infrastructure',
  },
  {
    name: 'DMail',
    url: 'https://dmail.ai/',
    icon: '/partnerships/DMail.png',
    description: 'AI-powered decentralized communication infrastructure',
    tags: [
      'Communications', 'Builder', 'AI'
    ],
    post: '/posts/dmail-partners-with-phala-network-to-deliver-decentralized-cloud-computing-services',
  },
  {
    name: 'Sygma',
    url: 'https://buildwithsygma.com/',
    icon: '/partnerships/Sygma.png',
    description: 'modular, open-source, cross-chain connectivity protocol',
    tags: [
      'DeFi', 'Builder'
    ]
  },
  {
    name: 'inDEX',
    url: 'https://index.phala.network/',
    icon: '/partnerships/inDEX.png',
    description: 'Cross-Chain Intent Infrastructure',
    tags: [
      'DeFi', 'Builder',
    ]
  },
  {
    name: 'Polygon',
    url: 'https://polygon.technology/',
    icon: '/partnerships/Polygon.png',
    description: 'Ethereum scaling solution',
    tags: [
      'Infra', 'Tools', 'Partner',
    ]
  },
  {
    name: 'Polkadot',
    url: 'https://polkadot.network/',
    icon: '/partnerships/Polkadot.png',
    description: 'Blockspace ecosystem for boundless innovation',
    tags: [
      'Infra', 'Tools', 'Partner',
    ],
    post: '/posts/on-chain-polkadot-alliance-formed-to-recognize-ecosystem-contributors-and-establish-community-dcaa2b718bda',
  },
  {
    name: 'Base',
    url: 'https://www.base.org/',
    icon: '/partnerships/Base.png',
    description: 'Secure, low-cost, builder-friendly Ethereum L2',
    tags: [
      'Infra', 'Partner',
    ]
  },
  {
    name: 'The Graph',
    url: 'https://thegraph.com/',
    icon: '/partnerships/TheGraph.png',
    description: 'a decentralized protocol for indexing and querying data from blockchains.',
    tags: [
      'Infra', 'Tools', 'Partner',
    ]
  },
  {
    name: 'Lens',
    url: 'https://www.lens.xyz/',
    icon: '/partnerships/Lens.png',
    description: 'Open social network',
    tags: [
      'Web3 Social', 'Partner',
    ]
  },
  {
    name: 'Farcaster',
    url: 'https://www.farcaster.xyz/',
    icon: '/partnerships/Farcaster.png',
    description: 'decentralized social network',
    tags: [
      'Web3 Social', 'Tools'
    ]
  },
  {
    name: 'Hackachain',
    url: 'https://www.hackachain.io/',
    icon: '/partnerships/Hackachain.png',
    description: 'laboratory for high tech experiments',
    tags: [
      'Tools', 'ZK', 'Builder'
    ]
  },
  {
    name: 'Developer DAO',
    url: 'https://www.developerdao.com/',
    icon: '/partnerships/DeveloperDAO.png',
    description: 'Educational web3 Builders Community',
    tags: [
      'Community', 'Builder',
    ],
    post: '/posts/phat-contract-2-0-use-cases-d-d-hackathon-recap',
  },
  {
    name: 'EasyA',
    url: 'https://www.easya.io/',
    icon: '/partnerships/EasyA.png',
    description: 'Blockchain Developer onboarding Community',
    tags: [
      'Community', 'Builder'
    ]
  },
  {
    name: 'io.net',
    url: 'https://io.net/',
    icon: '/partnerships/io-net.png',
    description: '',
    tags: [
      'AI', 'Cloud', 'Builder'
    ],
    post: '/posts/phala-and-ionet-create-strategic-partnership-to-enhance-gputee-',
  },
  {
    name: 'Allora',
    url: 'https://www.allora.network/',
    icon: '/partnerships/allora.png',
    description: 'self-improving decentralized AI network',
    tags: [
      'AI', 'Inference', 'Builder'
    ],
    post: '/posts/allora-phala-announce-strategic-partnership',
  },
  {
    name: 'Artela',
    url: 'https://artela.network/',
    icon: '/partnerships/artela.png',
    description: 'L1 for parallel execution and interoperable VMs',
    tags: [
      'L1', 'AI', 'Builder'
    ],
    post: '/posts/phala-network-and-artela-announce-partnership-building-a-trustless-ai-coprocessor-layer',
  },
  {
    name: 'Morpheus',
    url: 'https://mor.org/',
    icon: '/partnerships/morpheus.png',
    description: 'AI & compute marketplace',
    tags: [
      'AI', 'Cloud', 'Builder'
    ],
    post: '/posts/partnership-announcement-phala-brings-verifiable-tee-compute-to-morpheus-and-lumerin',
  },
  {
    name: 'Hyperbolic',
    url: 'https://hyperbolic.xyz/',
    icon: '/partnerships/hyperbolic.png',
    description: 'open access AI cloud',
    tags: [
      'AI', 'Cloud', 'Builder'
    ],
    post: '/posts/hyperbolic-and-phala-announce-strategic-partnership-to-advance-secure-verifiable-ai-computing',
  },
  {
    name: 'Aligned Layer',
    url: 'https://alignedlayer.com/',
    icon: '/partnerships/aligned.png',
    description: 'simplifying ZK adoption',
    tags: [
      'ZK', 'AI', 'Builder'
    ],
    post: '/posts/partnership-announcement-phala-aligned',
  },
  {
    name: 'NEAR AI',
    url: 'https://near.ai/',
    icon: '/partnerships/near.webp',
    description: 'NEAR AI brought by Near foundation is a distributed system for building, deploying, and managing AI agents with the goal of making open source and user-owned AGI.',
    tags: [
      'AI', 'Agent', 'Blockchain'
    ],
  },
  {
    name: 'Succinct',
    url: 'https://www.succinct.xyz/',
    icon: '/partnerships/succinct.svg',
    description: 'Succinct is dedicated to build the novel ZK technologies, such as SP1, which is a performant, open-source zero-knowledge virtual machine (zkVM).',
    tags: [
      'ZK', 'Blockchain'
    ],
  },
  {
    name: 'Vana',
    url: 'https://www.vana.org/',
    icon: '/partnerships/vana.jpg',
    description: 'Vana is the first network for user-owned data. It transforms how data is owned, shared, and monetized. The Vana L1 enables users to pool their data in DataDAOs while maintaining control and privacy.',
    tags: [
      'AI', 'Blockchain'
    ],
  },
  {
    name: "Nethermind",
    url: 'https://nethermind.io/',
    icon: '/partnerships/nethermind.png',
    description: 'Nethermind is a blockchain infrastructure provider whose vision is to empower enterprises and developers worldwide to access and build on decentralized systems.',
    tags: [
      'Blockchain', 'ZK', 'AI'
    ]
  },
  {
    name: 'Primus Labs',
    url: 'https://primuslabs.xyz/',
    icon: '/partnerships/primus.png',
    description: 'Primus uses secure zkTLS (zero-knowledge transport layer security) and zkFHE (zero-knowledge fully homomorphic encryption) to validate arbitrary web data and utilize it in an encrypted form.',
    tags: [
      'ZK'
    ]
  },
  {
    name: "Flashbots",
    url: 'https://www.flashbots.net/',
    icon: '/partnerships/flashbots.png',
    description: 'Flashbots is a research and development organization formed to mitigate the negative externalities posed by Maximal Extractable Value (MEV) to stateful blockchains, starting with Ethereum.',
    tags: [
      'Blockchain'
    ]
  },
  {
    name: 'ElizaOS',
    url: 'https://www.elizaos.ai/',
    icon: '/partnerships/elizaos.png',
    description: 'Eliza is a pioneering venture capital firm that operates as a decentralized autonomous organization (DAO), leveraging the power of artificial intelligence to revolutionize investment strategies and foster an open-source community around AI agents.',
    tags: [
      'Agent'
    ],
  },
  {
    name: "GoPlus Security",
    url: "https://www.gopluslabs.io/",
    icon: "/partnerships/goplus.png",
    description: "GoPlus Security is a leading security layer for web3, protecting every transaction for users and also providing security intelligence for developers to protect their users.",
    tags: [
      "Security", "Blockchain"
    ]
  },
  {
    name: "0G",
    url: "https://0g.ai/",
    icon: "/partnerships/0g.png",
    description: "0G is a leading provider of security solutions for the web3 ecosystem. It offers a range of services, including audit, security research, and advisory services.",
    tags: [
      "AI", "Blockchain"
    ]
  },
  {
    name: "CARV",
    url: "https://carv.io/",
    icon: "/partnerships/CARV.png",
    description: "CARV is building an AI chain ecosystem to enable data sovereignty at scale. By empowering AI agents with secure, unified infrastructure, CARV enables intelligent, collaborative operations through its SVM Chain, offering trustless consensus, cryptographic proofs, and verifiable execution.",
    tags: [
      "AI", "Blockchain"
    ]
  },
  {
    name: "xNomadAI",
    url: "https://xnomadai.xyz/",
    icon: "/partnerships/xNomad.png",
    description: "xNomadAI is an open-source platform that transforms AI agents into transferable and trackable NFTs. By enabling AI-driven systems to operate independently, xNomadAI provides a foundation for creating intelligent and secure digital assets.",
    tags: [
      "Agent", "NFT"
    ]
  },
  {
    name: "Ava Protocol",
    url: "https://avaprotocol.org/",
    icon: "/partnerships/ava.png",
    description: "Ava Protocol is a cutting-edge automation platform designed for the decentralized world. Ava enables users to create event-driven, autonomous “super-transactions” across DeFi and Web3.",
    tags: [
      "DeFi", "Blockchain"
    ]
  },
  {
    name: "Fairblock",
    url: "https://www.fairblock.network/",
    icon: "/partnerships/fairblock.webp",
    description: "Fairblock leverages confidential computing to mitigate centralized risks and prevent information leakage and manipulation in decentralized applications. This unlocks credible and confidential DeFi mechanisms and AI models.",
    tags: [
      "FHE", "MPC"
    ]
  },
  {
    name: "CrunchDAO",
    url: "https://www.crunchdao.com/",
    icon: "/partnerships/crunchdao.jpg",
    description: "CrunchDAO leverages the collective intelligence of data scientists to develop machine learning models and trading signals that generate profits in varying market conditions.",
    tags: [
      "AI", "DAO"
    ]
  },
  {
    name: "Streamr",
    url: "https://streamr.network/",
    icon: "/partnerships/streamr.svg",
    description: "Streamr is a decentralized network purpose-built for real-time data streaming. It uses a peer-to-peer (P2P) architecture and a publish/subscribe (pub/sub) model, allowing data producers to broadcast streams that applications and nodes can subscribe to and consume instantly.",
    tags: [
      "DATA"
    ]
  },
  {
    name: "Sentient",
    url: "https://sentigen.ai/",
    icon: "/partnerships/sentient.jpg",
    description: "Sentient Foundation is a non-profit initiative pioneering a new era in AI, aiming to empower communities to build what it calls \"Loyal AI\" – AI systems that are community-built, community-aligned, and community-owned.",
    tags: [
      "AI"
    ]
  },
  {
    name: "Newton",
    url: "https://magic.link/",
    icon: "/partnerships/newton.svg",
    description: "Magic Labs' Newton is a platform for agentic automation in crypto, built to simplify user interactions across DeFi and Web3.",
    tags: [
      "AI", "Agent", "DEFI"
    ]
  },
  {
    name: "Mira",
    url: "https://mira.network/",
    icon: "/partnerships/mira.jpg",
    description: "Mira makes AI reliable, by verifying outputs and actions at every step using collective intelligence",
    tags: [
      "AI"
    ]
  },
  {
    name: "Holoworld",
    url: "https://www.holoworld.com/",
    icon: "/partnerships/holoworld.png",
    description: "Holoworld lets anyone create intelligent virtual beings, or \"AI agents,\" that can talk, act, and engage across different platforms—no coding required.",
    tags: [
      "AI", "Agent"
    ]
  },
  {
    name: "OpenRouter",
    url: "https://openrouter.ai",
    icon: "/partnerships/openrouter.jpg",
    description: "OpenRouter provides a unified API that gives you access to hundreds of AI models through a single endpoint, while automatically handling fallbacks and selecting the most cost-effective options.",
    tags: [
      "AI"
    ]
  },
  {
    name: "Nvidia",
    url: "https://www.nvidia.com/",
    icon: "/partnerships/nvidia.webp",
    description: "NVIDIA Inception Program is designed to help startups accelerate innovation and growth.",
    tags: [
      "AI"
    ]
  },
  {
    name: "Swarms",
    url: "https://www.swarms.xyz/",
    icon: "/partnerships/swarms.png",
    description: "The Enterprise-Grade Production-Ready Multi-Agent Orchestration Framework.",
    tags: [
      "AI", "Agent"
    ]
  },
  {
    name: "Ritual",
    url: "https://ritual.net/",
    icon: "/partnerships/ritual.jpg",
    description: "Ritual is the network for open AI infrastructure. We build groundbreaking, new architecture on a crowdsourced governance layer aimed to handle safety, funding, alignment, and model evolution.",
    tags: [
      "AI"
    ]
  },
  {
    name: "Nous Research",
    url: "https://nousresearch.com/",
    icon: "/partnerships/nous-research.jpg",
    description: "Nous Research is a leader in the development of human-centric language models and simulators.",
    tags: [
      "AI"
    ]
  },
  {
    name: "Blorm",
    url: "https://blorm.xyz/",
    icon: "/partnerships/blorm.jpg",
    description: "Blorm is forming blockchain information. a blorm is an onchain action.",
    tags: [
      "AI"
    ]
  }
]

const sorted = items.sort((a, b) => a.name.localeCompare(b.name))

function LatestNews() {
  const posts = use(getPostList({
    includeTags: ['Partnerships'],
    sortReversed: false,
    pageSize: 9,
  }))
  return (
    <section className={cn("section--latest-news", "px-6 lg:py-14 lg:px-10", "mx-auto max-w-[1760px]")}>
      <header>
        <h2 className="text-24 lg:text-40 font-black text-whiteAlpha-800 max-w-5xl mb-4 lg:mb-10 mx-auto text-center">
          Latest News
        </h2>
      </header>
      <dl className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 lg:gap-6 lg:mt-16">
        {(posts || []).map((post, idx) => (
          <BlogPostCard key={post.id || idx} post={post} dir="col" theme="dark" />
        ))}
      </dl>
      <div className="mt-16 flex flex-col lg:flex-row gap-4 justify-center">
        <Link href="/tags/Partnerships" className="btn btn-rounded btn-purple px-12">
          More
        </Link>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <div className="bg-black-900">
      <div
        className={cn(
          "safe-viewport pt-28 pb-4 lg:pb-6",
          "px-5 lg:!px-16",
          "grid grid-cols-1",
        )}
      >
        <header className="row-start-1 col-span-full z-[1] flex flex-col justify-center py-4 lg:py-0">
          <h1 className="text-black-800 text-24 lg:text-48 font-black text-center tracking-wide">
            Phala’s Ecosystem Overview
          </h1>
          <p className="text-black-500 text-16 lg:text-24 leading-8 text-center lg:mt-4">
            Where AI meets Web3.0
          </p>
        </header>
        <div
          className={cn(
            "row-start-1 col-span-full z-0 untanglable",
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden rounded w-full h-full",
            )}
          >
            <img src="/illustrations/partnerships.jpg" alt="" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "safe-viewport pb-10 lg:pb-32 px-5 lg:!px-16",
          "col-span-full",
          "grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6",
        )}
      >
        {sorted.map(({ name, url, icon, description, tags, post }, idx) => (
          <TrustedPartnershipCard
            key={idx}
            title={name}
            url={url}
            description={description}
            src={icon}
            post={post}
            tags={tags.map(tag => ({
              label: tag,
              cls: 'bg-whiteAlpha-50 border-whiteAlpha-100 text-white',
            }))}
          />
        ))}
      </div>

      <LatestNews />
    </div>
  )
}
