'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { RealtimeStats } from './RealtimeStats'

function ComputeTitle() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const updatePosition = (e: MouseEvent) => {
    const x = e.pageX / window.screen.width * 24 - 12
    const y = (e.pageY > window.screen.height ? window.screen.height : e.pageY) / window.screen.height * 22 - 18
    setPosition({ x, y })
  }

  useEffect(() => {
     window.addEventListener('mousemove', updatePosition)
    return () => {
      window.removeEventListener('mousemove', updatePosition)
    }
  }, [])

  return (
    <h2
      className="text-6xl lg:text-7xl font-extrabold bg-black-800 text-transparent bg-clip-text bg-no-repeat lg:bg-[url('/home/blur.png')]"
      style={{
        backgroundPosition: `${position.x}rem ${position.y}rem`,
      }}
    >
      Compute.
    </h2>
  )
}

function SupportedChains() {
  return (
    <div
      className={cn(
        "safe-viewport grid gap-4 grid-cols-1 lg:grid-cols-20 grid-rows-1 mt-16"
      )}
    >
      <div
        className={cn(
          "col-start-1 col-span-full lg:col-span-14 lg:col-start-4 row-start-1",
          "grid grid-cols-3 gap-6",
          "lg:flex lg:justify-between"
        )}
      >
        <img
          src="/home/Ethereum.png"
          alt="Ethereum"
          className="w-16 h-16 opacity-80 m-auto"
        />
        <img
          src="/home/Bnbchain.png"
          alt="Bnbchain"
          className="w-16 h-16 opacity-80 m-auto"
        />
        <img
          src="/home/Moonbean.png"
          alt="Moonbean"
          className="w-16 h-16 opacity-80 m-auto"
        />
        <img
          src="/home/Arbittrum.png"
          alt="Arbittrum"
          className="w-16 h-16 opacity-80 m-auto"
        />
        <img
          src="/home/Astar.png"
          alt="Astar"
          className="w-16 h-16 opacity-80 m-auto"
        />
      </div>
      <div className="col-start-1 col-span-full flex justify-center items-center mt-10">
        <a
          className={cn(
            "btn btn-sm text-sm font-semibold btn-outline justify-center",
            "rounded-full px-7"
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
      id="section-hero"
      className={cn(
        "w-full max-w-[1760px] mx-auto lg:px-10 3xl:px-0",
        "grid gap-4 grid-cols-1 lg:grid-cols-20 3xl:grid-cols-24 grid-rows-1",
      )}
    >
      <div
        className={cn(
          "col-start-1 col-span-full lg:col-span-18 lg:col-start-2 3xl:col-start-4 3xl:col-span-18 row-start-1",
          "pb-14 lg:py-28",
        )}
      >
        <div className="h-screen lg:h-auto lg:rounded-3xl overflow-hidden aspect-[1312/756] w-full relative">
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
              "flex flex-col justify-center items-center gap-16 lg:gap-36",
              "text-center",
            )}
          >
            <header className="flex flex-col gap-4">
              <h3 className="text-xl lg:text-2xl font-normal text-black-800">Scale Web3 by</h3>
              <ComputeTitle />
            </header>
            <div
              className={cn(
                "flex flex-col lg:flex-row gap-2.5 lg:gap-5 mx-auto"
              )}
            >
              <a
                className={cn(
                  "btn btn-sm text-sm font-semibold btn-primary justify-center",
                  "rounded-full px-8"
                )}
                href="#section-features"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(e.currentTarget.getAttribute('href')!)?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
              >
                Let's Build!
              </a>
              <a
                className={cn(
                  "btn btn-sm text-sm font-semibold btn-secondary justify-center",
                  "rounded-full px-7"
                )}
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
              "hidden absolute left-0 right-0 bottom-0",
              "lg:grid gap-4 grid-cols-20 3xl:grid-cols-24"
            )}
          >
            <div
              className={cn(
                "col-start-2 col-span-18 3xl:col-start-4 3xl:col-span-18",
              )}
            >
              <RealtimeStats />
            </div>
          </div>

        </div>
        <div className="lg:hidden safe-viewport mt-10">
          <RealtimeStats />
        </div>
        <SupportedChains />
      </div>
    </section>
  )
}
