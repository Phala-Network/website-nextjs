'use client';

import React, { useEffect, type ReactNode } from 'react'
import { atom, useAtomValue } from 'jotai'

import { cn } from '@/lib/utils'
import Details from '@/components/Details'

export const activeFeatureTabAtom = atom(0)

export function FeatureTab({ idx, iconUrl, summary, children }: {
  idx: number,
  iconUrl: string,
  summary: string,
  children: ReactNode,
}) {
  return (
    <Details className={cn("feature-highlight-item", "p-5 w-full rounded-xl 2xl:rounded-r-none")} idx={idx} theIdxAtom={activeFeatureTabAtom}>
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

export function FeatureTabPanel({ src }: { idx?: number, src: string, children?: ReactNode }) {
  return (
    <div className={cn("aspect-[834/782]", "relative")}>
      <img
        src={src}
        alt=""
        className="object-fill untanglable w-full h-full"
      />
    </div>
  )
}

export function FeatureTabPanels({ children }: { children: ReactNode }) {
  const current = useAtomValue(activeFeatureTabAtom)
  const ref = React.useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.scrollTo({top: ref.current.scrollHeight / 5 * current, behavior: 'smooth'})
  }, [current])
  return (
    <div
      ref={ref}
      className={cn(
        "feature-tab-panels",
        "xl:col-start-11 xl:col-span-7 2xl:col-start-11 2xl:col-span-9 3xl:col-start-13 3xl:col-span-12",
        "ml-4 2xl:ml-0",
        "absolute w-[60vw] xl:w-[45vw]",
        "aspect-[834/782]",
        "hidden xl:block rounded-5xl bg-gray-200 relative overflow-hidden"
      )}
    >
      <div style={{height: '500%'}}>
        {children}
      </div>
    </div>
  )
}

export function FeatureTabIndicator() {
  const current = useAtomValue(activeFeatureTabAtom)
  return (
    <div className={cn(
      `col-start-1 row-start-${current || 1} row-span-1`,
      current === 0 ? 'invisible h-0' : 'visible h-auto',
      "mr-8 relative",
      "flex justify-end items-center",
      "text-[#A0AEC0]"
    )}>
      <svg viewBox="0 0 48 90" fill="none" className={cn("h-[70%]")}>
        <path d="M57.191 30.6598L30.8565 56.8914L27.242 56.5108C24.5939 52.4168 23.4333 47.543 23.9531 42.7005C24.473 37.858 26.642 33.3388 30.0992 29.8951C33.5564 26.4514 38.0932 24.2909 42.9547 23.7731C47.8162 23.2553 52.7092 24.4114 56.8192 27.0491L57.191 30.6598Z" fill="currentColor"/>
        <path d="M60.3434 60.0441C56.883 63.486 52.3434 65.6435 47.4805 66.1572C42.6176 66.671 37.7247 65.5101 33.6165 62.8679L33.2344 59.2675L59.5688 33.0359L63.1833 33.4165C65.8366 37.5097 67.002 42.3849 66.4852 47.23C65.9684 52.0751 63.8008 56.5976 60.3434 60.0441Z" fill="currentColor"/>
        <path d="M63.1366 27.1317C59.597 23.5792 55.0787 21.153 50.1539 20.1604C45.229 19.1678 40.1192 19.6533 35.4716 21.5556C30.824 23.4579 26.8477 26.6913 24.0463 30.8462C21.245 35.0012 19.7446 39.8909 19.7352 44.8959C19.7257 49.901 21.2077 54.7962 23.9934 58.9616C26.7792 63.127 30.7433 66.3752 35.3837 68.2948C40.0241 70.2144 45.1321 70.7191 50.0606 69.7448C54.9892 68.7706 59.5166 66.3613 63.0694 62.822C67.8192 58.0925 70.4933 51.6804 70.5058 44.9907C70.5184 38.3009 67.8685 31.8789 63.1366 27.1317ZM61.7217 74.6983L54.6269 77.6197L50.5787 90.0257H40.2566L35.8004 77.6403L28.7262 74.6983L18.399 79.924L17.041 80.6287L9.76545 73.3815L15.4093 61.4847L12.466 54.4279L0.0165405 50.3646V40.0932L12.4505 35.6441L15.3938 28.5976L9.46078 16.9579L16.7363 9.71083L28.6746 15.3378L35.7436 12.4111L39.3581 1.44531L39.828 0H50.1088L54.5805 12.3957L61.6598 15.3172L71.987 10.0966L73.345 9.39708L80.6206 16.6442L74.9716 28.5513L77.889 35.6081L90.3592 39.6765V49.9171L77.9303 54.3611L74.9767 61.4076L80.9304 73.0575L73.66 80.2995L61.7217 74.6983Z" fill="currentColor"/>
      </svg>
      <div className={cn("absolute -right-2 w-2 h-full bg-primary rounded z-[2]")} />
    </div>
  )
}
