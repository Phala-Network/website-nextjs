import { type Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { HeroSection01 } from '@/components/marketing'

export const metadata: Metadata = {
  themeColor: 'rgba(232, 233, 234, 1)',
  title: "Phala’s Ecosystem Overview",
}

function TrustedPartnershipCard({ title, url, description, src, tags }: { title: string, url: string, description: string, src: string, tags: {label: string, cls: string}[] }) {
  return (
    <Link
      href={url}
      target="_blank"
      className={cn(
        "relative lg:aspect-square bg-whiteAlpha-50 border border-solid border-whiteAlpha-200 rounded",
      )}
    >
      <div className={cn("flex items-center justify-start lg:justify-center", "h-full px-4 py-4 lg:p-6")}>
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
            <div className="text-whiteAlpha-700 mx-auto mt-4">
              {description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const items = [
  {
    name: 'Flock.io',
    url: 'https://www.flock.io/',
    icon: '',
    description: 'Federated Machine Learning On the Blockchain',
    tags: [
      'AI', 'LLM', 'Partner',
    ],
  },
  {
    name: 'GM Network',
    url: 'https://gmnetwork.ai/',
    icon: '',
    description: 'The First Consumer AIoT Network',
    tags: [
      'AI', 'Partner',
    ],
  },
  {
    name: 'IoTEX',
    url: 'https://iotex.io/',
    icon: '',
    description: 'The modular infrastructure for DePIN projects',
    tags: [
      'DePIN', 'Partner',
    ],
  },
  {
    name: 'Pond',
    url: 'https://cryptopond.xyz/',
    icon: '',
    description: 'Decentralized Graph Neural Network (GNN) model for web3',
    tags: [
      'AI', 'Partner',
    ],
  },
  {
    name: 'Mind Network',
    url: 'https://www.mindnetwork.xyz/',
    icon: '',
    description: 'FHE Restaking Layer for AI and POS Networks',
    tags: [
      'AI', 'FHE', 'Partner',
    ],
  },
  {
    name: 'AwesomeQA',
    url: 'https://home.awesomeqa.xyz/',
    icon: '',
    description: 'AI support for web3 communities',
    tags: [
      'AI', 'Community',
    ]
  },
  {
    name: 'Theoriq (ChainML)',
    url: 'https://www.theoriq.ai/',
    icon: '',
    description: 'A modular and composable AI Agent Base Layer',
    tags: [
      'AI', 'Partner',
    ]
  },
  {
    name: 'Nevermined',
    url: 'https://nevermined.io/',
    icon: '',
    description: 'decentralized AI payments protocol',
    tags: [
      'AI', 'Payments', 'Partner',
    ]
  },
  {
    name: 'MagnetAI',
    url: 'https://magnetai.xyz/',
    icon: '',
    description: 'ModelFi Protocol',
    tags: [
      'AI', 'DeFi', 'Partner',
    ]
  },
  {
    name: 'OnFinality',
    url: 'https://onfinality.io/',
    icon: '',
    description: 'Smarter Blockchain Infrastructure',
    tags: [
      'Tools', 'Partner',
    ]
  },
  {
    name: 'Zurf',
    url: 'https://zurf.social/',
    icon: '/home/icon-zurf.png',
    description: 'next generation of social media',
    tags: [
      'Web3 Social', 'Builder',
    ]
  },
  {
    name: 'Huddle01',
    url: 'https://huddle01.com/',
    icon: '/home/icon-huddle01.png',
    description: 'decentralized real-time communication network (dRTC)',
    tags: [
      'Web3 Social', 'DePIN', 'Buiilder',
    ]
  },
  {
    name: 'Airstack',
    url: 'https://airstack.xyz/',
    icon: '',
    description: 'developer platform for composable web3 apps',
    tags: [
      'Web3 Social', 'Tools', 'Builder',
    ]
  },
  {
    name: 'DMail',
    url: 'https://dmail.ai/',
    icon: '/home/icon-dmail.png',
    description: 'AI-powered decentralized communication infrastructure',
    tags: [
      'Communications', 'Builder', 'AI'
    ]
  },
  {
    name: 'Sygma',
    url: 'https://buildwithsygma.com/',
    icon: '/home/icon-sygma.png',
    description: 'modular, open-source, cross-chain connectivity protocol',
    tags: [
      'DeFi', 'Builder'
    ]
  },
  {
    name: 'inDEX',
    url: 'https://index.phala.network/',
    icon: '/home/icon-index.png',
    description: 'Cross-Chain Intent Infrastructure',
    tags: [
      'DeFi', 'Builder',
    ]
  },
  {
    name: 'Polygon',
    url: 'https://polygon.technology/',
    icon: '',
    description: 'Ethereum scaling solution',
    tags: [
      'Infra', 'Tools', 'Partner',
    ]
  },
  {
    name: 'Polkadot',
    url: 'https://polkadot.network/',
    icon: '',
    description: 'Blockspace ecosystem for boundless innovation',
    tags: [
      'Infra', 'Tools', 'Partner',
    ]
  },
  {
    name: 'Base',
    url: 'https://www.base.org/',
    icon: '',
    description: 'Secure, low-cost, builder-friendly Ethereum L2',
    tags: [
      'Infra', 'Partner',
    ]
  },
  {
    name: 'The Graph',
    url: 'https://thegraph.com/',
    icon: '',
    description: 'a decentralized protocol for indexing and querying data from blockchains.',
    tags: [
      'Infra', 'Tools', 'Partner',
    ]
  },
  {
    name: 'Lens',
    url: 'https://www.lens.xyz/',
    icon: '/home/icon-lens.png',
    description: 'Open social network',
    tags: [
      'Web3 Social', 'Partner',
    ]
  },
  {
    name: 'Farcaster',
    url: 'https://www.farcaster.xyz/',
    icon: '',
    description: 'decentralized social network',
    tags: [
      'Web3 Social', 'Tools'
    ]
  },
  {
    name: 'Hackachain',
    url: 'https://www.hackachain.io/',
    icon: '',
    description: 'laboratory for high tech experiments',
    tags: [
      'Tools', 'ZK', 'Builder'
    ]
  },
  {
    name: 'Developer DAO',
    url: 'https://www.developerdao.com/',
    icon: '',
    description: 'Educational web3 Builders Community',
    tags: [
      'Community', 'Builder',
    ]
  },
  {
    name: 'EasyA',
    url: 'https://www.easya.io/',
    icon: '',
    description: 'Blockchain Developer onboarding Community',
    tags: [
      'Community', 'Builder'
    ]
  },
]

const sorted = items.sort((a, b) => a.name.localeCompare(b.name))

const tagColors: Readonly<Record<string, string>> = {
  'Web3 Social': 'bg-phalaWorldTeal/20 border-phalaWorldTeal/50 text-phalaWorldTeal',
  'Monetization': 'bg-yellow-300/20 border-yellow-300/50 text-yellow-300',
  'Web3 communication': 'bg-phalaPurple-400/20 border-phalaPurple-400/50 text-phalaPurple-400',
  'De-Fi': 'bg-blue-300/20 border-blue-300/50 text-blue-300',
  'Oracle': 'bg-phalaPurple-400/20 border-phalaPurple-400/50 text-phalaPurple-400',
}

export default function Page() {
  return (
    <>
      <HeroSection01
        title="Phala’s Ecosystem Overview"
        subTitle="Where AI meets Web3.0."
        heroImage="/illustrations/hero-bg-ai-agents.jpg"
        theme="dark"
        headingClass="max-w-3xl"
        className="bg-ai-agent lg:bg-none"
      >
      </HeroSection01>
      <div className={cn(
        "border border-solid border-black-100 rounded-md",
        "bg-black-900",
      )}>
        <div
          className={cn(
            "safe-viewport py-10 lg:py-32 px-5 lg:!px-16",
            "col-span-full",
            "grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6",
          )}
        >
          {sorted.map(({ name, url, icon, description, tags }, idx) => (
            <TrustedPartnershipCard
              key={idx}
              title={name}
              url={url}
              description={description}
              src={icon || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8+R8AAvcB+vBGZskAAAAASUVORK5CYII="}
              tags={tags.map(tag => ({
                label: tag,
                cls: tagColors[tag] || 'bg-whiteAlpha-50 border-whiteAlpha-100 text-white',
              }))}
            />
          ))}
        </div>
      </div>
    </>
  )
}
