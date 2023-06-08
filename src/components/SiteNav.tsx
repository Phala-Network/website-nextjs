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
      <div className={cn(
        "site-nav safe-viewport",
        "grid gap-4 grid-cols-3 xl:grid-cols-20 3xl:grid-cols-24 grid-rows-1",
        "py-6"
      )}>
        <Link href="/" className="xl:col-span-3 xl:col-start-2 3xl:col-start-1 row-start-1 flex flex-row items-center">
          <Image
            src="/logo.svg"
            alt="Phala Logo"
            className="svg-black-100"
            width={156}
            height={44}
            priority
          />
        </Link>
        <nav className={cn(
          "invisible xl:visible xl:col-start-5 xl:col-span-12 3xl:col-start-7 3xl:col-span-13 row-start-1",
          "flex flex-row items-center justify-between w-full px-16"
        )}>
          <SiteNavItem href="https://docs.phala.network/developers/phat-contract" target="_blank" rel="noopener">Developers</SiteNavItem>
          <SiteNavItem href="https://docs.phala.network/compute-providers/basic-info/introduction" target="_blank" rel="noopener">Compute Providers</SiteNavItem>
          <SiteNavItem href="https://docs.phala.network/pha-token/delegation" target="_blank" rel="noopener">PHA Token</SiteNavItem>
          <SiteNavItem href="https://linktr.ee/phalanetwork" target="_blank" rel="noopener">Participate</SiteNavItem>
          <SiteNavItem href="https://app.phala.network" target="_blank" rel="noopener">Earn</SiteNavItem>
        </nav>
        {/* <div */}
        {/*   className={cn( */}
        {/*     "xl:col-span-3 xl:col-end-20 3xl:col-end-25 row-start-1", */}
        {/*     "flex flex-row justify-end w-full", */}
        {/*   )} */}
        {/* > */}
        {/*   <a */}
        {/*     href="https://app.phala.network/" */}
        {/*     className={cn( */}
        {/*       "w-full max-w-[9.375rem]", */}
        {/*       "btn btn-link inline-flex btn-reverse btn-sm btn-aside-icon" */}
        {/*     )} */}
        {/*     target="_blank" */}
        {/*     rel="noopener" */}
        {/*   > */}
        {/*     <span>Earn</span> */}
        {/*     <Image */}
        {/*       src="/icons/right-arrow.svg" */}
        {/*       alt="" */}
        {/*       className="svg-secondary icon" */}
        {/*       width={14} */}
        {/*       height={14} */}
        {/*     /> */}
        {/*   </a> */}
        {/* </div> */}
      </div>
    </nav>
  )
}
