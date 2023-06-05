import { type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'


function LinkListHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className={cn("uppercase font-black text-2xl mb-5")}>
      {children}
    </h4>
  )
}

function LinkList({ children }: { children: ReactNode }) {
  return (
    <ul className={cn("mb-10 flex flex-col gap-2.5")}>{children}</ul>
  )
}

function LinkListItem({ children, className, href, ...props }: React.HTMLProps<HTMLAnchorElement>) {
  if (href?.startsWith('/')) {
    return (
      <li>
        <Link href={href} className={cn(className, 'btn-link')}>
          {children}
        </Link>
      </li>
    )
  }
  return (
    <li>
      <a target="_blank" rel="noopener" {...props} href={href} className={cn(className, 'btn-link')}>
        {children}
      </a>
    </li>
  )
}

export default function SiteFooter() {
  return (
    <footer className={cn("page-footer", "bg-[#1c1c1c] text-white pt-16 pb-24")}>
      {/* Row No.1 */}
      <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <div className={cn("row-start-1 xl:col-start-2 xl:col-span-5 3xl:col-start-4")}>
          <div>
            <LinkListHeading>Developers</LinkListHeading>
            <LinkList>
              <LinkListItem href="https://docs.phala.network/">Docs</LinkListItem>
              <LinkListItem href="https://github.com/Phala-Network/">GitHub</LinkListItem>
              <LinkListItem href="https://docs.phala.network/v1/developers/phat-contract/builders-program">Builders Program</LinkListItem>
              <LinkListItem href="https://phat.phala.network/">Native Phat Contract App</LinkListItem>
              <LinkListItem href="https://bricks.phala.network/?source=foot-bricks-app">Bricks App</LinkListItem>
              <LinkListItem href="https://docs.phala.network/v1/developers/phat-contract/use-cases">Use Cases</LinkListItem>
              <LinkListItem href="https://docs.phala.network/v1/compute-providers/basic-info">Become a Compute Provider</LinkListItem>
              <LinkListItem href="https://github.com/Phala-Network/phala-bounty-tracker">Bug Bounty Program</LinkListItem>
            </LinkList>
          </div>
          <div>
            <LinkListHeading>Blueprints</LinkListHeading>
            <LinkList>
              <LinkListItem href="https://bricks.phala.network/">LensAPI Oracle</LinkListItem>
            </LinkList>
          </div>
        </div>
        <div className={cn("row-start-1 xl:col-start-7 xl:col-span-5 3xl:col-start-11")}>
          <div>
            <LinkListHeading>Resources</LinkListHeading>
            <LinkList>
              <LinkListItem href="https://app.phala.network">Phala App</LinkListItem>
              <LinkListItem href="https://github.com/Phala-Network/Whitepaper/tree/master/pdf">Whitepaper</LinkListItem>
              <LinkListItem href="https://docs.phala.network/v1/pha-token/delegation/delegate-to-stakepool">Staking</LinkListItem>
              <LinkListItem href="https://docs.phala.network/v1/developers/phat-contract/pay-for-cloud-service">Tokenomics - Utility</LinkListItem>
              <LinkListItem href="https://docs.phala.network/v1/compute-providers/basic-info/worker-rewards">Tokenomics - Earn</LinkListItem>
              <LinkListItem href="https://docs.phala.network/">What is Phala Network?</LinkListItem>
              <LinkListItem href="https://docs.phala.network/v1/developers/phat-contract">What is Phat Contract?</LinkListItem>
              <LinkListItem href="https://docs.phala.network/v1/developers/phat-contract/bricks-and-blueprints">What are Blueprints?</LinkListItem>
              <LinkListItem href="/roadmap">Roadmap</LinkListItem>
              <LinkListItem href="https://github.com/Phala-Network/growth-program">Ambassador Program</LinkListItem>
              <LinkListItem href="https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq">Media Kit</LinkListItem>
            </LinkList>
          </div>
        </div>
        <div className={cn("row-start-1 xl:col-start-12 xl:col-span-5 3xl:col-start-16")}>
          <div>
            <LinkListHeading>Social</LinkListHeading>
            <LinkList>
              <LinkListItem href="https://twitter.com/PhalaNetwork">Twitter</LinkListItem>
              <LinkListItem href="https://discord.com/invite/phala">Discord</LinkListItem>
              <LinkListItem href="https://t.me/phalanetwork">Telegram</LinkListItem>
              <LinkListItem href="https://www.youtube.com/channel/UCzm2tq2-1geDURldGCG6rpA">YouTube</LinkListItem>
              <LinkListItem href="https://lenster.xyz/u/yourfather">Lenster</LinkListItem>
              <LinkListItem href="https://lenstube.xyz/channel/yourfather.lens">Lenstube</LinkListItem>
            </LinkList>
          </div>
        </div>
        <div className={cn("row-start-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4", "flex flex-row items-center justify-between")}>
          <Image
            src="/logo.svg"
            alt="Phala Logo"
            className="svg-white"
            width={156}
            height={44}
            priority
          />
          <div className={cn("uppercase flex flex-row gap-36 text-base font-semibold")}>
            <a className="btn-link" href="https://nft-assets.phala.world/network/Phala-Network-Responsible-Disclosure.pdf">Responsible Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


