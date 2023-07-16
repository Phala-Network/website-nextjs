'use client';

import React, { type ReactNode } from 'react'
import { atom, useAtomValue } from 'jotai'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'

import { cn } from '@/lib/utils'
import DotBackground from '@/components/DotBackground'
import Details from '@/components/Details'

interface Feature {
  imageUrl: string
  iconUrl: string
  title: string
  content: string
}

export const activeFeatureAtom = atom(0)
export const showFixedFeaturePageAtom = atom(false)
export const featuresAtom = atom<Feature[]>([
  {
    imageUrl: '/home/highlight02.jpg',
    iconUrl: '/icons/features-compare.svg',
    title: 'Connect your smart contract anywhere',
    content: 'No matter if your smart contracts are on Ethereum or Substrate, our universal compatibility ensures connection flexibility like never before, enabling your smart contracts to access a w  ide range of features regardless of the blockchain they are hosted on. Phala’s Phat Contracts make it possible to extend the capabilities of your smart contracts without the need for a bridge or   an extra layer.',
  },
  {
    imageUrl: '/home/highlight03.jpg',
    iconUrl: '/icons/features-all-out.svg',
    title: 'Seamless access to the Internet',
    content: 'Phala Network doesn’t just offer unparalleled on-chain connectivity; it also bridges the gap between the off-chain world and smart contracts. The ability to send HTTP/HTTPS requests directly from your smart contracts is now at your fingertips. Take your dApp to the next level by integrating cutting-edge Web3 protocols and various Web2 API, creating a perfect fusion of old and new, on-chain and off-chain.',
  },
  {
    imageUrl: '/home/highlight04.jpg',
    iconUrl: '/icons/features-auto-graph.svg',
    title: 'Advanced flexibility and performance',
    content: 'By offloading the computation off-chain, you don’t have to worry about costly transaction fees or network latency that hinders your progress. Experience real-time, off-chain computation at its finest, allowing you to focus on enhancing your dApp’s functionality and user experience. Run arbitrarily complex logic without any constraints, all at an affordable cost.',
  },
  {
    imageUrl: '/home/highlight05.jpg',
    iconUrl: '/icons/features-rocket.svg',
    title: 'Computation is always verifiable',
    content: 'Phala Network is designed with multiple layers of security guarantees to provide fully verifiable computation. The network is backed by numerous decentralized workers and a significant amount of staked tokens. Phat Contracts are protected by both hardware Secure Enclaves and cryptographic evidence published and verified on the Phala blockchain, seamlessly extending blockchain-level security to the off-chain realm.',
  },
])

export function FeatureDetail({ idx, iconUrl, summary, children }: {
  idx: number,
  iconUrl: string,
  summary: string,
  children: ReactNode,
}) {
  return (
    <Details className={cn("feature-highlight-item", "p-5 w-full rounded-xl 2xl:rounded-r-none")} idx={idx} theIdxAtom={activeFeatureAtom}>
      <summary>
        <div className={cn("relative", "h-4 w-4 2xl:h-8 2xl:w-8")}>
          <img
            src={iconUrl}
            alt=""
            className="icon untanglable w-full h-full"
          />
        </div>
        {summary}
      </summary>
      <div className="body">
        {children}
      </div>
    </Details>
  )
}

export function FeatureIndicator() {
  const current = useAtomValue(activeFeatureAtom)
  return (
    <div className={cn(
      `col-start-1 row-start-${current || 1} row-span-1`,
      current > 0 ? 'visible h-auto' : 'invisible h-0',
      "mr-8 relative",
      "flex justify-end items-center",
      "text-[#A0AEC0]"
    )}>
      <svg viewBox="0 0 48 90" fill="none" className={cn("h-[70%]")}>
        <path d="M57.191 30.6598L30.8565 56.8914L27.242 56.5108C24.5939 52.4168 23.4333 47.543 23.9531 42.7005C24.473 37.858 26.642 33.3388 30.0992 29.8951C33.5564 26.4514 38.0932 24.2909 42.9547 23.7731C47.8162 23.2553 52.7092 24.4114 56.8192 27.0491L57.191 30.6598Z" fill="#8544F6"/>
        <path d="M60.3434 60.0441C56.883 63.486 52.3434 65.6435 47.4805 66.1572C42.6176 66.671 37.7247 65.5101 33.6165 62.8679L33.2344 59.2675L59.5688 33.0359L63.1833 33.4165C65.8366 37.5097 67.002 42.3849 66.4852 47.23C65.9684 52.0751 63.8008 56.5976 60.3434 60.0441Z" fill="#8544F6"/>
        <path d="M63.1366 27.1317C59.597 23.5792 55.0787 21.153 50.1539 20.1604C45.229 19.1678 40.1192 19.6533 35.4716 21.5556C30.824 23.4579 26.8477 26.6913 24.0463 30.8462C21.245 35.0012 19.7446 39.8909 19.7352 44.8959C19.7257 49.901 21.2077 54.7962 23.9934 58.9616C26.7792 63.127 30.7433 66.3752 35.3837 68.2948C40.0241 70.2144 45.1321 70.7191 50.0606 69.7448C54.9892 68.7706 59.5166 66.3613 63.0694 62.822C67.8192 58.0925 70.4933 51.6804 70.5058 44.9907C70.5184 38.3009 67.8685 31.8789 63.1366 27.1317ZM61.7217 74.6983L54.6269 77.6197L50.5787 90.0257H40.2566L35.8004 77.6403L28.7262 74.6983L18.399 79.924L17.041 80.6287L9.76545 73.3815L15.4093 61.4847L12.466 54.4279L0.0165405 50.3646V40.0932L12.4505 35.6441L15.3938 28.5976L9.46078 16.9579L16.7363 9.71083L28.6746 15.3378L35.7436 12.4111L39.3581 1.44531L39.828 0H50.1088L54.5805 12.3957L61.6598 15.3172L71.987 10.0966L73.345 9.39708L80.6206 16.6442L74.9716 28.5513L77.889 35.6081L90.3592 39.6765V49.9171L77.9303 54.3611L74.9767 61.4076L80.9304 73.0575L73.66 80.2995L61.7217 74.6983Z" fill="#8544F6"/>
      </svg>
      <div className={cn("absolute -right-2 w-2 h-full bg-primary rounded z-[2]")} />
    </div>
  )
}

function FeaturePageLeft({ enableSelect = true}) {
  const features = useAtomValue(featuresAtom)
  return (
    <div className={cn("w-full h-full flex flex-col justify-center items-center gap-5")}>
      <header className={cn(enableSelect ? "swiper-no-swiping" : "", "w-full flex-col gap-5 ml-16 hidden xl:flex")}>
        <h2 className={cn("font-extrabold text-2xl 2xl:text-5xl uppercase")}>Smart Contracts.</h2>
        <h3 className={cn("text-3xl 2xl:text-6xl tracking-wide uppercase")}>Now Smarter.</h3>
      </header>
      <main className={cn("swiper-no-swiping", "w-full hidden xl:grid grid-cols-10 gap-1")}>
        {
          features.map((feature: Feature, index: number) => (
            <div className={cn("col-span-10 xl:col-start-2 xl:col-span-9")} key={index.toString()}>
              <FeatureDetail idx={index + 1} iconUrl={feature.iconUrl} summary={feature.title}>
                <p>{feature.content}</p>
              </FeatureDetail>
            </div>
          ))
        }
        {/* Progress bar */}
        <div className={cn("hidden col-start-1 row-start-1 row-span-7 xl:flex justify-end pr-6")}>
          <div className={cn("w-2 h-full bg-blackAlpha-100 rounded")} />
        </div>
        <FeatureIndicator />
      </main>
    </div>
  )
}

export function FeatureMobileHeadPage() {
  return (
    <div
      className={cn([
        "flex flex-col pt-32 gap-16 xl:hidden",
      ])}
    >
      <div className="grid grid-cols-12">
        <img
          className={cn("rounded-5xl col-start-2 col-span-10 md:col-start-4 md:col-span-6")}
          src="/home/highlight01.jpg"
          alt=""
        />
      </div>
      <header className={cn("swiper-no-swiping", "text-center flex flex-col gap-2")}>
        <h2 className={cn("font-extrabold text-2xl uppercase")}>Smart Contracts.</h2>
        <h3 className={cn("text-3xl tracking-wide uppercase")}>Now Smarter.</h3>
      </header>
    </div>
  )
}

export function FeatureMobileDetailPage({ index } : {
  index: number,
}) {
  const features = useAtomValue(featuresAtom)
  if (features.length < index) {
    return null
  }
  const { imageUrl, iconUrl, title, content } = features[index]
  return (
    <div
      className={cn([
        "flex flex-col pt-16 gap-5 xl:hidden",
      ])}
    >
      <div className={cn("grid grid-cols-12")}>
        <img
          className={cn("rounded-5xl col-start-2 col-span-10 md:col-start-4 md:col-span-6")}
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className={cn("swiper-no-swiping", "px-8")}>
        <header className={cn("flex justify-center items-center")}>
          <div className={cn("h-8 w-8")}>
            <img
              src={iconUrl}
              className="icon untanglable w-full h-full"
            />
          </div>
          <div className={cn("font-bold ml-5")}>
            {title}
          </div>
        </header>
        <main className={cn("text-sm pt-5")}>
          {content}
        </main>
      </div>
    </div>
  )
}

export function FeaturePage({ index }: { index: number }) {
  return (
    <section className={cn("xl:w-screen xl:h-screen overflow-hidden")}>
      {/* PC Page */}
      <div className="w-full h-full safe-viewport hidden xl:block">
        <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
        <div className={cn("flex w-full h-full flex-col xl:flex-row px-4")}>
          <div className={cn("w-1/2 h-full")}>
            <FeaturePageLeft />
          </div>
          <div className={cn("w-1/2 h-full overflow-hidden")}>
            <div className={cn("w-full h-full flex items-center justify-center")}>
              <img
                className={cn("rounded-5xl")}
                src={`/home/highlight0${index + 1}.jpg`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Page */}
      {
        index > 0 ? (
          <FeatureMobileDetailPage
            index={index - 1}
          />
        ) : (
          <FeatureMobileHeadPage />
        )
      }
    </section>
  )
}

export function FixedFeaturePage() {
  const show = useAtomValue(showFixedFeaturePageAtom)
  return (
    <div
      className={cn([
        "fixed inset-0 z-10",
        show ? null : cn("hidden")
      ])}
    >
      <section className={cn("hidden xl:block w-screen h-screen overflow-hidden safe-viewport")}>
        <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" className={cn("xl:w-1/2")} />
        <div className={cn("flex w-full h-full flex-col xl:flex-row px-4")}>
          <div className={cn("w-1/2 h-full")}>
            <FeaturePageLeft enableSelect={false} />
          </div>
        </div>
      </section>
    </div>
  )
}
