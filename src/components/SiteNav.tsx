'use client';

import { type HTMLProps, type ReactNode, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

import Squircle from './Squircle'



const LogoVariants = {
  hover: {
    fill: "#CDFA50",
    rotate: "-15deg",
  },
  blur: {
    fill: "#fff",
    rotate: "0",
  }
}


function Logo() {
  const [isHover, setIsHover] = useState(false)
  return (
    <Link
      href="/"
      className={cn("flex gap-5 items-center h-[4rem] p-1",  "col-span-1 xl:col-span-3 xl:col-start-2 3xl:col-start-3 row-start-1")}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <svg viewBox="0 0 56 56" className="h-full untanglable">
        <circle cx="28" cy="28" r="28" fill="black" fill-opacity="0.8" />
        <motion.path
          d="M37.2219 13.7344H20.3467H19.5381H14.7217V24.8781V26.656V27.6629H20.3467V26.656V24.8781V19.3063H37.2219V13.7344ZM37.222 19.3063H42.847V27.6629H37.222V19.3063ZM14.7217 33.2343H20.3468V36.0214V41.591H14.7217V36.0214V34.6279V33.2343ZM20.3468 27.6625H37.2196V33.2343H20.3468V27.6625Z"
          variants={LogoVariants}
          initial="blur"
          animate={isHover ? "hover" : "blur"}
        />
      </svg>
      <svg viewBox="0 0 67 24" className="h-1/2 untanglable">
        <path
          d="M10.6889 4.48711V0.0100732L8.64247 0.00012207V8.97906H10.6889V6.28538H14.7943V8.98901H16.8407V0.0100732H14.7943V4.48711H10.6889ZM3.83922 6.42227C6.14425 6.42227 7.46752 5.21845 7.46752 3.12668C7.46752 1.13937 6.14425 0.0101667 3.84424 0.0101667H0V8.9891H2.03888V6.42227H3.83922ZM3.73627 1.699C4.87623 1.699 5.52405 2.19645 5.52405 3.19135C5.52405 4.21609 4.87623 4.73095 3.73627 4.74089H2.03888V1.699H3.73627ZM24.7099 7.19331H20.5568L19.8362 8.9891H17.7245L21.6616 0.0101667H23.7733L27.6452 8.9891H25.4557L24.7099 7.19331ZM23.9818 5.39753L22.6459 2.12681L21.2976 5.39753H23.9818ZM37.8299 7.19331H41.9829L42.7136 8.9891H44.9032L41.0288 0.0101667H38.9196L34.985 8.9891H37.0967L37.8299 7.19331ZM39.924 2.12681L41.2548 5.39753H38.5756L39.924 2.12681ZM30.6334 0.0101667V7.22316H34.5178V8.99408H28.587V0.0151385L30.6334 0.0101667ZM6.25975 20.7462L1.85809 14.9758H0V23.9448H1.94848V18.1869L6.3376 23.9448H8.20071V14.9758H6.25975V20.7462ZM16.4167 14.9758V16.6572H11.5505V18.6047H15.9145V20.2861H11.5505V22.2759H16.5473V23.9448H9.51667V14.9758H16.4167ZM24.7904 16.6945V14.9758H17.2199V16.6945H19.9819V23.9448H22.0284V16.6945H24.7904ZM27.5775 14.9758L29.4808 21.746L31.3715 14.9758H33.3803L35.2961 21.746L37.1869 14.9758H39.2835L36.2704 23.9522H34.1587L32.3408 17.5526L30.4777 23.9448H28.3735L25.383 14.9683L27.5775 14.9758ZM44.2774 24C47.0294 24 49.1135 22.0251 49.1135 19.4508C49.1135 16.8666 47.0269 14.9315 44.2774 14.9315C41.528 14.9315 39.4439 16.8641 39.4439 19.4508C39.4439 22.0375 41.5255 24 44.2774 24ZM42.3338 21.4152C41.8131 20.892 41.5233 20.1855 41.528 19.4508C41.5305 18.9007 41.6978 18.3637 42.0087 17.9079C42.3197 17.4521 42.7602 17.098 43.2745 16.8904C43.7888 16.6829 44.3538 16.6313 44.8977 16.7421C45.4417 16.8529 45.9402 17.1212 46.3301 17.513C46.7199 17.9048 46.9836 18.4024 47.0877 18.9428C47.1918 19.4831 47.1315 20.0419 46.9146 20.5484C46.6978 21.0548 46.334 21.486 45.8694 21.7875C45.4048 22.0889 44.8604 22.2469 44.3051 22.2415C43.5634 22.2356 42.8544 21.9384 42.3338 21.4152ZM55.4211 23.9448L53.9849 21.388H51.9008V23.9448H49.8569V14.9758H53.7915C56.1619 14.9758 57.5077 16.1051 57.5077 18.0924C57.5077 19.4778 56.9126 20.4776 55.8103 20.99L57.7513 23.9448H55.4211ZM51.9058 19.6867H53.7966C54.924 19.6867 55.5693 19.1743 55.5693 18.1496C55.5693 17.1248 54.924 16.6572 53.7966 16.6572H51.9058V19.6867ZM61.8468 20.2911L64.4506 23.9448H66.9113L63.2755 18.7216L66.6853 14.9758H64.3175L60.5511 19.0549V14.9758H58.5047V23.9448H60.5411V21.7262L61.8468 20.2911Z"
          fill="#262626"
        />
      </svg>
    </Link>
  )
}

function SiteNavItem({ children }: { children: ReactNode }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <li className="relative h-[3rem] flex items-center cursor-pointer">
      <span
        className={cn('px-8 py-4 transition-all text-blackAlpha-700')}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
      </span>
      <motion.div
        className="untanglable"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHover ? 1 : 0 }}
      >
      <Squircle cornerRadius={28} height={48} fill="rgba(0, 0, 0, 0.06)" />
      </motion.div>
    </li>
  )
}

//
// The SiteNav using absolute positioning to overlap the content. So we need to
// add a padding to the top of the content to make sure it's not overlapped. The
// padding is >= 96px / 6rem. 
//
function SiteNav() {
  return (
    <nav className="w-full absolute z-30">
      <div
        className={cn(
          "safe-viewport",
          "grid gap-4 grid-cols-2 xl:grid-cols-20 3xl:grid-cols-24 grid-rows-1",
          "py-6",
        )}
      >
        <div className={cn("w-full relative h-[4rem] untanglable", "col-span-2 xl:col-span-18 xl:col-start-2 3xl:col-start-3 row-start-1")}>
          <Squircle
            height={64}
            style={{
              filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05))'
            }}
          />
        </div>

        <Logo />

        <ul className="hidden xl:flex xl:items-center xl:gap-4 xl:h-[4rem] xl:col-start-6 xl:col-span-14 3xl:col-start-7 row-start-1">
          <SiteNavItem>Developers</SiteNavItem>
          <SiteNavItem>Compute Providers</SiteNavItem>
          <SiteNavItem>PHA Token</SiteNavItem>
        </ul>
      </div>
    </nav>
  )
}

export default SiteNav
