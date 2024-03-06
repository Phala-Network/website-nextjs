'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { RealtimeStats } from './RealtimeStats'

function ComputeTitle() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const updatePosition = useCallback((e: MouseEvent) => {
    const x_pct = (e.pageX > window.innerWidth ? window.innerWidth : e.pageX) / window.innerWidth
    const y_pct = (e.pageY > window.innerHeight ? window.innerHeight : e.pageY) / window.innerHeight
    // range is (-16rem, 24rem)
    const x = -(x_pct * 42) + 24
    // range is (-19rem, 1rem)
    const y = -(y_pct * 19) + 1
    setPosition({ x, y })
  }, [setPosition])

  useEffect(() => {
     window.addEventListener('mousemove', updatePosition)
    return () => {
      window.removeEventListener('mousemove', updatePosition)
    }
  }, [])

  return (
    <h2
      className="text-5xl lg:text-7xl font-extrabold bg-black-800 text-transparent bg-clip-text bg-no-repeat lg:bg-[url('/home/blur.png')]"
      style={{
        backgroundPosition: `${position.x}rem ${position.y}rem`,
      }}
    >
      Coprocessor
    </h2>
  )
}

function SupportedChains() {
  return (
    <div
      className="safe-viewport grid gap-4 grid-cols-1 lg:grid-cols-20 grid-rows-1"
    >
      <div
        className={cn(
          "grid grid-cols-3 gap-6",
          "col-start-1 col-span-full lg:col-span-14 lg:col-start-4 row-start-1",
          "lg:flex lg:justify-between"
        )}
      >
        <img
          src="/home/Ethereum.png"
          alt="Ethereum"
          className="w-16 h-16 opacity-80 m-auto pointer-events-none"
        />
        <img
          src="/home/Bnbchain.png"
          alt="Bnbchain"
          className="w-16 h-16 opacity-80 m-auto pointer-events-none"
        />
        <img
          src="/home/Moonbean.png"
          alt="Moonbean"
          className="w-16 h-16 opacity-80 m-auto pointer-events-none"
        />
        <img
          src="/home/Arbittrum.png"
          alt="Arbittrum"
          className="w-16 h-16 opacity-80 m-auto pointer-events-none"
        />
        <img
          src="/home/Astar.png"
          alt="Astar"
          className="w-16 h-16 opacity-80 m-auto pointer-events-none"
        />
      </div>
      <div className="col-start-1 col-span-full flex justify-center items-center mt-10">
        <a
          className={cn(
            "btn font-bold bg-black text-white justify-center",
            "border border-solid border-black",
            "rounded-full px-4 py-2",
            "hover:bg-whiteAlpha-700 hover:text-black transition-colors",
          )}
          href="https://docs.phala.network/developers/phat-contract/supported-chains"
          target="_blank"
          rel="noopener"
        >
          View All Supported Networks
        </a>
      </div>
    </div>
  )
}

export function SectionHero() {
  return (
    <section
      className={cn(
        "section-hero",
        // alternative to safe-viewport, which only apply px-9 on lg.
        "w-full max-w-[1760px] mx-auto lg:px-9 xl:px-10 3xl:px-0",
        "grid grid-cols-1 lg:grid-cols-12 gap-6",
      )}
    >
      <div
        className={cn(
          "row-start-1 col-span-full",
          "lg:pt-28",
        )}
      >
        <div className="h-screen lg:h-auto lg:rounded overflow-hidden aspect-[1312/756] w-full relative">
          <div className="absolute top-0 left-0 w-full h-full z-[-1] untanglable overflow-hidden">
            <video
              className="object-cover h-full min-w-full"
              autoPlay muted loop playsInline
            >
              <source src="https://nft-assets.phala.world/network/bg20230718.mp4" type="video/mp4" />
              <source src="https://nft-assets.phala.world/network/bg20230605.webm" type="video/webm" />
            </video>
          </div>

          <div
            className={cn(
              "absolute top-0 left-0 w-full h-full",
              "flex flex-col justify-center items-center gap-16",
              "text-center",
            )}
          >
            <header className="flex flex-col gap-4">
              <ComputeTitle />
              <h3 className="text-2xl lg:text-3xl font-normal text-black-800">for Blockchains</h3>
            </header>
            <div
              className={cn(
                "flex flex-col lg:flex-row gap-2.5 lg:gap-5 mx-auto"
              )}
            >
              <Link
                className={cn(
                  "btn btn-sm btn-primary btn-rounded btn-phala justify-center",
                  "min-w-[160px]"
                )}
                href="/modular-coprocessor"
                // onClick={(e) => {
                //   e.preventDefault()
                //   document.querySelector(e.currentTarget.getAttribute('href')!)?.scrollIntoView({
                //     behavior: 'smooth',
                //   })
                // }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "row-start-2 lg:row-start-1 col-span-full",
          "flex flex-col-reverse",
          "pr-20 pl-14 mt-10 lg:mt-0"
        )}
      >
        <RealtimeStats />
      </div>

      <div
        className={cn(
          "col-span-full",
          "flex flex-col lg:min-h-[312px] lg:items-center lg:justify-center",
          "py-10",
        )}
      >
        <SupportedChains />
      </div>
    </section>
  )
}
