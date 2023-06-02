import { type HTMLProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'


function SiteNavItem({ children, className, ...props }: HTMLProps<HTMLAnchorElement>) {
  return (
    <a {...props} className={cn(className, 'btn-link')}>
      {children}
    </a>
  )
}

//
// The SiteNav using absolute positioning to overlap the content. So we need to
// add a padding to the top of the content to make sure it's not overlapped. The
// padding is >= 96px / 6rem. 
//
export default function SiteNav() {
  return (
    <nav className="w-full absolute z-30">
      <div className={cn("site-nav safe-viewport", "flex flex-row items-center justify-between py-6")}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Phala Logo"
            className="svg-black-100"
            width={156}
            height={44}
            priority
          />
        </Link>
        <nav className={cn("flex flex-row gap-[3.75rem]")}>
          <SiteNavItem href="https://docs.phala.network/v1/developers/phat-contract" target="_blank" rel="noopener">Developers</SiteNavItem>
          <SiteNavItem href="https://docs.phala.network/v1/compute-providers/basic-info/introduction" target="_blank" rel="noopener">Compute Providers</SiteNavItem>
          <SiteNavItem href="https://docs.phala.network/v1/pha-token/delegation" target="_blank" rel="noopener">PHA Token</SiteNavItem>
          <SiteNavItem href="https://linktr.ee/phalanetwork" target="_blank" rel="noopener">Participate</SiteNavItem>
        </nav>
        <div className="w-full max-w-[9.375rem]">
          <a
            href="https://app.phala.network/"
            className={cn("btn bg-blackAlpha-800 text-sm text-primary py-3 px-5 w-full flex flex-row justify-between items-center")}
            target="_blank"
            rel="noopener"
          >
            <span>APP</span>
            <Image
              src="/icons/right-arrow.svg"
              alt=""
              className="svg-primary untanglable"
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
