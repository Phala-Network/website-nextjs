import { type Metadata } from 'next'
import Link from 'next/link'
import { IoOpenOutline } from 'react-icons/io5'

import { cn } from '@/lib/utils'
import { HeroSection01, Section, SectionHeader, SectionBody, SimpleCard, Support } from '@/components/marketing'
import SubscribeForm from '@/components/marketing/SubscribeForm'
import { ContactUsButton } from '@/components/ContactUsButton'

export const metadata: Metadata = {
  themeColor: 'rgba(232, 233, 234, 1)',
  title: "Mirrored Price Feed by Phala Network",
}

const deployments = [
  {
    name: 'Astar zKyoto',
    icon: 'https://zkatana.explorer.startale.com/favicon/apple-touch-icon-180x180.png',
    healthcheckBadge: 'https://healthchecks.io/b/2/250aefa2-6f34-4f98-a969-0c947ccba482.svg',
    assets: [
      {
        name: 'AAVE to USD',
        address: '0x92E9b9348949455580EB820ba041f4cAaB998e3f',
        url: 'https://zkyoto.explorer.startale.com/address/0x92E9b9348949455580EB820ba041f4cAaB998e3f',
      },
      {
        name: 'BTC to USD',
        address: '0xB842f535a88021F95e1a94245Fa549a7f75084Dc',
        url: 'https://zkyoto.explorer.startale.com/address/0xB842f535a88021F95e1a94245Fa549a7f75084Dc',
      },
      {
        name: 'CRV to USD',
        address: '0x49899fBd9be6b23d5e4AF697a92dc1E6C695862b',
        url: 'https://zkyoto.explorer.startale.com/address/0x49899fBd9be6b23d5e4AF697a92dc1E6C695862b',
      },
      {
        name: 'DAI to USD',
        address: '0xf38b25b79A72393Fca2Af88cf948D98c64726273',
        url: 'https://zkyoto.explorer.startale.com/address/0xf38b25b79A72393Fca2Af88cf948D98c64726273',
      },
      {
        name: 'ETH to USD',
        address: '0x739d71fC66397a28B3A3b7d40eeB865CA05f0185',
        url: 'https://zkyoto.explorer.startale.com/address/0x739d71fC66397a28B3A3b7d40eeB865CA05f0185',
      },
      {
        name: 'USDC to USD',
        address: '0x1e73C20c42a7de166868da4c47963d137030492A',
        url: 'https://zkyoto.explorer.startale.com/address/0x1e73C20c42a7de166868da4c47963d137030492A',
      },
      {
        name: 'USDT to USD',
        address: '0x2E1640853bB2dD9f47831582665477865F9240DB',
        url: 'https://zkyoto.explorer.startale.com/address/0x2E1640853bB2dD9f47831582665477865F9240DB',
      },
    ],
  },
  {
    name: 'Astar zKatana',
    icon: 'https://zkatana.explorer.startale.com/favicon/apple-touch-icon-180x180.png',
    healthcheckBadge: 'https://healthchecks.io/b/2/250aefa2-6f34-4f98-a969-0c947ccba482.svg',
    assets: [
      {
        name: 'AAVE to USD',
        address: '0x49899fBd9be6b23d5e4AF697a92dc1E6C695862b',
        url: 'https://zkatana.explorer.startale.com/address/0x49899fBd9be6b23d5e4AF697a92dc1E6C695862b',
      },
      {
        name: 'BTC to USD',
        address: '0xf38b25b79A72393Fca2Af88cf948D98c64726273',
        url: 'https://zkatana.explorer.startale.com/address/0xf38b25b79A72393Fca2Af88cf948D98c64726273',
      },
      {
        name: 'CRV to USD',
        address: '0x89BC5048d634859aef743fF2152363c0e83a6a49',
        url: 'https://zkatana.explorer.startale.com/address/0x89BC5048d634859aef743fF2152363c0e83a6a49',
      },
      {
        name: 'DAI to USD',
        address: '0x2E1640853bB2dD9f47831582665477865F9240DB',
        url: 'https://zkatana.explorer.startale.com/address/0x2E1640853bB2dD9f47831582665477865F9240DB',
      },
      {
        name: 'ETH to USD',
        address: '0x739d71fC66397a28B3A3b7d40eeB865CA05f0185',
        url: 'https://zkatana.explorer.startale.com/address/0x739d71fC66397a28B3A3b7d40eeB865CA05f0185',
      },
      {
        name: 'USDC to USD',
        address: '0xB842f535a88021F95e1a94245Fa549a7f75084Dc',
        url: 'https://zkatana.explorer.startale.com/address/0xB842f535a88021F95e1a94245Fa549a7f75084Dc',
      },
      {
        name: 'USDT to USD',
        address: '0x1e73C20c42a7de166868da4c47963d137030492A',
        url: 'https://zkatana.explorer.startale.com/address/0x1e73C20c42a7de166868da4c47963d137030492A',
      },
    ],
  },
  {
    name: 'Tanssi Dancebox Testnet',
    icon: '/home/icon-tanssi.png',
    healthcheckBadge: 'https://healthchecks.io/b/2/2e2c1114-7eb5-4eab-9582-afc64f17dc2c.svg',
    assets: [
      {
        name: 'AAVE to USD',
        address: '0x2E1640853bB2dD9f47831582665477865F9240DB',
        url: 'https://3001-blockscout.a.dancebox.tanssi.network/address/0x2E1640853bB2dD9f47831582665477865F9240DB',
      },
      {
        name: 'BTC to USD',
        address: '0x89BC5048d634859aef743fF2152363c0e83a6a49',
        url: 'https://3001-blockscout.a.dancebox.tanssi.network/address/0x89BC5048d634859aef743fF2152363c0e83a6a49',
      },
      {
        name: 'CRV to USD',
        address: '0xf38b25b79A72393Fca2Af88cf948D98c64726273',
        url: 'https://3001-blockscout.a.dancebox.tanssi.network/address/0xf38b25b79A72393Fca2Af88cf948D98c64726273',
      },
      {
        name: 'DAI to USD',
        address: '0x1f56d8c7D72CE2210Ef340E00119CDac2b05449B',
        url: 'https://3001-blockscout.a.dancebox.tanssi.network/address/0x1f56d8c7D72CE2210Ef340E00119CDac2b05449B',
      },
      {
        name: 'ETH to USD',
        address: '0x739d71fC66397a28B3A3b7d40eeB865CA05f0185',
        url: 'https://3001-blockscout.a.dancebox.tanssi.network/address/0x739d71fC66397a28B3A3b7d40eeB865CA05f0185',
      },
      {
        name: 'USDC to USD',
        address: '0x4b8331Ce5Ae6cd33bE669c10Ded9AeBA774Bf252',
        url: 'https://3001-blockscout.a.dancebox.tanssi.network/address/0x4b8331Ce5Ae6cd33bE669c10Ded9AeBA774Bf252',
      },
      {
        name: 'USDT to USD',
        address: '0x5018c16707500D2C89a0446C08f347A024f55AE3',
        url: 'https://3001-blockscout.a.dancebox.tanssi.network/address/0x5018c16707500D2C89a0446C08f347A024f55AE3',
      },
    ],
  },
  {
    name: 'Base Sepolia Testnet',
    icon: '/home/icon-base.png',
    healthcheckBadge: 'https://healthchecks.io/b/2/35fffa17-5028-4fe4-8ce4-6d45da6aa43a.svg',
    assets: [
      {
        name: 'AAVE to USD',
        address: '0x739d71fC66397a28B3A3b7d40eeB865CA05f0185',
        url: 'https://sepolia.basescan.org/address/0x739d71fC66397a28B3A3b7d40eeB865CA05f0185',
      },
      {
        name: 'BTC to USD',
        address: '0x1e73C20c42a7de166868da4c47963d137030492A',
        url: 'https://sepolia.basescan.org/address/0x1e73C20c42a7de166868da4c47963d137030492A',
      },
      {
        name: 'CRV to USD',
        address: '0xf38b25b79A72393Fca2Af88cf948D98c64726273',
        url: 'https://sepolia.basescan.org/address/0xf38b25b79A72393Fca2Af88cf948D98c64726273',
      },
      {
        name: 'DAI to USD',
        address: '0xB842f535a88021F95e1a94245Fa549a7f75084Dc',
        url: 'https://sepolia.basescan.org/address/0xB842f535a88021F95e1a94245Fa549a7f75084Dc',
      },
      {
        name: 'ETH to USD',
        address: '0x2E1640853bB2dD9f47831582665477865F9240DB',
        url: 'https://sepolia.basescan.org/address/0x2E1640853bB2dD9f47831582665477865F9240DB',
      },
      {
        name: 'USDC to USD',
        address: '0x49899fBd9be6b23d5e4AF697a92dc1E6C695862b',
        url: 'https://sepolia.basescan.org/address/0x49899fBd9be6b23d5e4AF697a92dc1E6C695862b',
      },
      {
        name: 'USDT to USD',
        address: '0x92E9b9348949455580EB820ba041f4cAaB998e3f',
        url: 'https://sepolia.basescan.org/address/0x92E9b9348949455580EB820ba041f4cAaB998e3f',
      },
    ],
  },
]

export default function MirroredPriceFeedPage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      <HeroSection01
        title="Reliable Price Feed Relayer"
        subTitle="Phat Contract is a decentralized, secure, and reliable price feed relayer that mirrors any price feed on Ethereum to any EVM L2 blockchain."
        heroImage="/illustrations/hero-bg-mirrored-price-feed.jpg"
      >
        <a
          href="https://docs.phala.network/"
          className="btn btn-primary btn-phala btn-rounded min-w-52"
          target="_blank"
        >
          Learn More
        </a>
        <ContactUsButton
          className="btn btn-secondary btn-blk btn-rounded min-w-52"
        >
          Integrate Now
        </ContactUsButton>
      </HeroSection01>

      <section className="lg:mt-[-15rem] z-10 lg:px-8 xl:px-32">
        <div className="mx-auto text-center rounded bg-black-800 py-16 w-full max-w-6xl">
          <h2 className="text-20 lg:text-32 font-black text-white px-4 lg:px-0">
            Under the Hood
          </h2>
          <figure className="mt-12 mx-auto max-w-5xl border border-blackAlpha-500 overflow-hidden rounded-sm">
            <img src="/illustrations/how-mirrored-price-feed-works.jpg" alt="How Mirrored Price Feed Works" />
          </figure>
        </div>
      </section>

      <Section theme="dark">
        <SectionHeader>
          Unlock Limitless Web3 Potential with Phat Contract
        </SectionHeader>
        <SectionBody>
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <SimpleCard title="Flexible">
              <p>Pick any price feed on Ethereum. We mirror it to any EVM L2 blockchain.</p>
            </SimpleCard>
            <SimpleCard title="Effortless">
              <p>Deployed in minutes. Fully compatible with ChainLink ABI. Replace the contract address, and you are ready to ship your dapp.</p>
            </SimpleCard>
            <SimpleCard title="Secure">
              <p>Fully verifiable and unstoppable data transmission. Backed by 35k+ decentralized workers on Phala Network.</p>
            </SimpleCard>
            <SimpleCard title="Always On-time">
              <p>Permitted by the Phala Network, the data is always on-time and reliable.</p>
            </SimpleCard>
          </dl>
        </SectionBody>
      </Section>

      <Section>
        <SectionHeader>
          Deployments
        </SectionHeader>
        <SectionBody className="flex flex-col gap-4">
          {deployments.map((deployment, idx) => (
            <details key={idx} open className="border border-phalaPurple-100 p-4 rounded-sm bg-white">
              <summary className="flex flex-col lg:flex-row gap-y-2 justify-between lg:items-center mb-4">
                <h4 className="text-24 font-semibold ml-3 inline-flex gap-1.5 items-center">
                  <img src={deployment.icon} alt={deployment.name} className="h-6 w-6" />
                  {deployment.name}
                </h4>
                <div>
                  <img src={deployment.healthcheckBadge} alt={`${deployment.name} Mirrored Price Feed`} className="h-5" />
                </div>
              </summary>
              <div className="overflow-x-auto">
                <table className="d-table d-table-zebra">
                  <thead>
                    <tr>
                      <th>Asset Pair</th>
                      <th>Contract Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deployment.assets.map((asset, idx) => (
                      <tr key={idx}>
                        <th className="min-w-36">{asset.name}</th>
                        <td>
                          <Link href={asset.url} target="_blank" rel="noopener noreferrer" className="relative">
                            <code>{asset.address}</code>
                            <IoOpenOutline className="inline-block ml-1 relative -top-0.5" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          ))}
        </SectionBody>
      </Section>

      <Section theme="dark">
        <SectionHeader>
          Frequently Asked Questions
        </SectionHeader>
        <SectionBody className="flex flex-col gap-4">
          <Support question="Which blockchains are supported?">
            <p>Phat Contract is blockchain agnostic. All the EVM blockchains are supported.</p>
          </Support>
          <Support question="What’s the pricing of the service?">
            <p>Upon request</p>
          </Support>
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
