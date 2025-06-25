import { type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

function LinkListHeading({ children }: { children: ReactNode }) {
  return (
    <h4
      className={cn(
        'uppercase font-black text-base xl:text-2xl mb-2.5 xl:mb-5'
      )}
    >
      {children}
    </h4>
  )
}

function LinkList({ children }: { children: ReactNode }) {
  return (
    <ul className={cn('mb-10 flex flex-col gap-1.5 xl:gap-2.5')}>{children}</ul>
  )
}

function LinkListItem({
  children,
  className,
  href,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) {
  const linkCls = cn(
    className,
    'btn-link',
    'text-xs xl:text-base leading-4 xl:leading-6'
  )
  if (href?.startsWith('/')) {
    return (
      <li>
        <Link href={href} className={linkCls}>
          {children}
        </Link>
      </li>
    )
  }
  return (
    <li>
      <a
        target="_blank"
        rel="noopener"
        {...props}
        href={href}
        className={linkCls}
      >
        {children}
      </a>
    </li>
  )
}

export default function SiteFooter() {
  return (
    <footer
      className={cn('page-footer', 'bg-[#1c1c1c] text-white py-12 xl:py-16')}
    >
      <div className="safe-viewport">
        <div className="md:pl-[15%]">
          <div className="grid grid-cols-8 lg:grid-cols-12 gap-4">
            {/* Block #1: Developers */}
            <div className="col-span-4">
              <LinkListHeading>Developers</LinkListHeading>
              <LinkList>
                <LinkListItem href="https://docs.phala.network/">
                  Docs
                </LinkListItem>
                <LinkListItem href="/changelog">Changelog</LinkListItem>
                <LinkListItem href="https://github.com/Phala-Network/">
                  GitHub
                </LinkListItem>
              </LinkList>

              <LinkListHeading>Other Products</LinkListHeading>
              <LinkList>
                <LinkListItem href="https://subbridge.io">
                  SubBridge
                </LinkListItem>
                <LinkListItem href="https://phala.world">
                  PhalaWorld
                </LinkListItem>
              </LinkList>

              <LinkListHeading>Phala</LinkListHeading>
              <LinkList>
                <LinkListItem href="https://phala.subscan.io/">
                  Phala Explorer
                </LinkListItem>
                <LinkListItem href="https://phala.subsquare.io/">
                  Phala Governance
                </LinkListItem>
              </LinkList>
            </div>

            {/* Block #4: Resources */}
            <div className="col-span-4">
              <LinkListHeading>Resources</LinkListHeading>
              <LinkList>
                <LinkListItem href="https://app.phala.network">
                  Phala App
                </LinkListItem>
                <LinkListItem href="https://docs.phala.network/">
                  What is Phala Network?
                </LinkListItem>
                <LinkListItem href="https://phala.network/posts/real-code-for-real-dagi-">
                  Real Code for Real dAGI
                </LinkListItem>
                <LinkListItem href="https://github.com/nearai/private-ml-sdk">
                  Private ML SDK
                </LinkListItem>
                <LinkListItem href="https://docs.phala.network/overview/pha-token/delegation/delegate-to-stakepool">
                  What is PHA staking?
                </LinkListItem>
                <LinkListItem href="https://docs.phala.network/overview/pha-token/introduction">
                  Tokenomics - Utility
                </LinkListItem>
                <LinkListItem href="https://docs.phala.network/compute-providers/basic-info/worker-rewards">
                  Tokenomics - Earn
                </LinkListItem>
                <LinkListItem href="https://github.com/Phala-Network/Whitepaper/tree/master/pdf/phala-paper.pdf">
                  Whitepaper
                </LinkListItem>
                <LinkListItem href="/roadmap">Roadmap</LinkListItem>
                <LinkListItem href="https://docs.phala.network/compute-providers/basic-info">
                  Become a Compute Provider
                </LinkListItem>
                <LinkListItem href="https://github.com/Phala-Network/growth-program">
                  Ambassador Program
                </LinkListItem>
                <LinkListItem href="https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq">
                  Media Kit
                </LinkListItem>
                <LinkListItem href="https://wellfound.com/company/phala-network">
                  Career
                </LinkListItem>
              </LinkList>
            </div>

            {/* Block #5: Social */}
            <div className="col-span-4">
              <LinkListHeading>Social</LinkListHeading>
              <LinkList>
                <LinkListItem href="https://twitter.com/PhalaNetwork">
                  Twitter
                </LinkListItem>
                <LinkListItem href="https://discord.gg/phala-network">
                  Discord
                </LinkListItem>
                <LinkListItem href="https://t.me/phalanetwork">
                  Telegram
                </LinkListItem>
                <LinkListItem href="https://www.youtube.com/@PhalaNetwork">
                  YouTube
                </LinkListItem>
                <LinkListItem href="https://lenster.xyz/u/phatcontract">
                  Lenster
                </LinkListItem>
                <LinkListItem href="https://lenstube.xyz/channel/phatcontract.lens">
                  Lenstube
                </LinkListItem>
                <LinkListItem href="https://forum.phala.network/">
                  Forum
                </LinkListItem>
              </LinkList>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'safe-viewport',
          'mt-4',
          'grid gap-4 grid-cols-2 auto-rows-min xl:auto-rows-fr xl:grid-cols-20 3xl:grid-cols-24'
        )}
      >
        {/* Block #8: Logo & policy, disclosure, etc. */}
        <div
          className={cn(
            'col-span-2 xl:col-start-2 xl:col-span-18 3xl:col-start-4',
            'flex flex-col gap-5 xl:flex-row xl:items-center justify-between'
          )}
        >
          <Image
            src="/logo.svg"
            alt="Phala Logo"
            className="svg-white"
            width={156}
            height={44}
            priority
          />
          <div
            className={cn(
              'uppercase flex flex-row gap-36 text-base font-semibold'
            )}
          >
            <a
              className="btn-link"
              href="https://github.com/Phala-Network/phala-blockchain/blob/master/docs/responsible-disclosure.md"
            >
              Responsible Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
