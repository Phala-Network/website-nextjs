'use client'

import Link from 'next/link'
import { MdArrowForward } from 'react-icons/md'
import { useSwiper } from 'swiper/react'

import Squircle from '@/components/Squircle'
import { cn } from '@/lib/utils'
import { Advantages } from './Advantages'
import { RealtimeStats } from './RealtimeStats'

function SupportedChains() {
  return (
    <div className={cn("supported-chains", "flex flex-col-reverse lg:flex-col gap-1 lg:gap-2 items-end w-full")}>
      <Link
        href="https://docs.phala.network/developers/phat-contract/supported-chains"
        className={cn("flex flex-row gap-2 items-center", "btn-view-all btn-with-arrow")}
        target="_blank"
        rel="noopener"
      >
        <span className={cn("text-xs lg:text-base font-semibold")}>View All Supported Networks</span>
        <MdArrowForward className="untanglable text-phalaPurple-500 h-5 w-5 arrow" />
      </Link>
      <Squircle
        className="flex flex-row justify-between gap-5 px-5 py-1 lg:py-0.5 w-full lg:w-auto"
        cornerRadius={32}
        fill="rgba(255, 255, 255, 0.64)"
        shadow={[
          '0px 10px 15px rgba(0, 0, 0, 0.1)',
          '0px 4px 6px rgba(0, 0, 0, 0.05)'
        ]}
      >
        <img
          src="/home/Ethereum.png"
          alt="Ethereum"
          className="w-9 h-9 lg:w-16 lg:h-16 opacity-80"
        />
        <img
          src="/home/Bnbchain.png"
          alt="Bnbchain"
          className="w-9 h-9 lg:w-16 lg:h-16 opacity-80"
        />
        <img
          src="/home/Moonbean.png"
          alt="Moonbean"
          className="w-9 h-9 lg:w-16 lg:h-16 opacity-80"
        />
        <img
          src="/home/Arbittrum.png"
          alt="Arbittrum"
          className="w-9 h-9 lg:w-16 lg:h-16 opacity-80"
        />
        <img
          src="/home/Astar.png"
          alt="Astar"
          className="w-9 h-9 lg:w-16 lg:h-16 opacity-80"
        />
      </Squircle>
    </div>
  )
}


export function SectionHero() {
  const swiper = useSwiper()
  return (
    <section id="section-hero" className={cn("section-hero section-slide")}>
      <div className={cn("background", "absolute top-0 left-0 w-full h-full z-[-1] untanglable overflow-hidden")}>
        <video
          className="object-cover aspect-[3840/1980] h-full min-w-full"
          autoPlay muted loop playsInline
        >
          <source src="https://nft-assets.phala.world/network/bg20230718.mp4" type="video/mp4" />
          <source src="https://nft-assets.phala.world/network/bg20230605.webm" type="video/webm" />
        </video>
      </div>

      <div
        className={cn(
          "flex flex-col h-screen justify-center items-center",
          "uppercase text-center flex flex-col gap-4 lg:gap-16 justify-center w-full",
        )}
      >
        <header>
          <h2 className={cn("text-2xl lg:text-4xl font-normal text-[#222] leading-8 lg:leading-10 tracking-wider mb-2.5 px-12")}>
            Computation as it's meant to be
          </h2>
          <h3 className={cn(
            "text-lg lg:text-2xl font-extrabold w-full overflow-hidden",
            "flex flex-col lg:flex-row lg:gap-2 justify-center items-center text-center"
          )}>
            <span>On-Chain verification.</span>
            <span className="inline-flex">Off-Chain <Advantages /></span>
          </h3>
        </header>
        <div className={cn("flex flex-col xl:flex-row gap-2.5 lg:gap-5 mx-auto")}>
          <a
            className={cn("btn btn-xl text-sm font-semibold lg:text-base btn-primary justify-center")}
            href="#section-features"
            onClick={() => swiper.slideNext()}
          >
            Let's Build!
          </a>
          <a
            className={cn("btn btn-xl text-sm font-semibold lg:text-base btn-secondary justify-center")}
            href="https://discord.gg/gZjZuVHXtm"
            target="_blank"
            rel="noopener"
          >
            Join Community
          </a>
        </div>
      </div>

      <div
        className={cn(
          "safe-viewport",
          "absolute left-0 right-0 bottom-0 lg:bottom-5 grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24",
          "mb-6"
        )}
      >
        <div
          className={cn(
            "xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18",
            "flex flex-col items-end gap-2 lg:gap-5 lg:flex-row lg:justify-between",
          )}
        >
          <RealtimeStats />
          <SupportedChains />
        </div>
      </div>
    </section>
  )
}
