'use client'
import { useRef, useEffect } from 'react'
import { useAnimate, useInView, motion } from 'framer-motion'
import { atom, useAtom, useAtomValue } from 'jotai';
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { type PhatItem, type PhatItemSection } from '@/lib/phat_lists'
import Gear from './svgs/gear'
import GearConnect from './svgs/gear_connect'
import GearSmall from './svgs/gear_small'
import GearMedium from './svgs/gear_medium'
import ImagePhat from './images/phat.png'
import './index.css'

export const phatListAtom = atom<PhatItem[][]>([])

const EASE = [0.65, 0, 0.31, 1]

export default function() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })
  const animateInterval = useRef<ReturnType<typeof setInterval>>()
  const animateSeq = useRef(0)

  const list = useAtomValue(phatListAtom)
  const reverseList = list.slice().reverse()

  const resetAnimate = async () => {
    const len = list.length
    const duration = 0
    const sequence: any = [
      ['.gear-medium', { rotate: 0 }, { duration, ease: EASE }],
      ['.gear-small', { rotate: 0 }, { at: 0, duration, ease: EASE }],
      ['.gear', { rotate: 0 }, { at: 0, duration, ease: EASE }],
      ['.left-phat-list', { y: 0 }, { at: 0, duration, ease: EASE }],
      ['.right-phat-list', { y: 0 }, { at: 0, duration, ease: EASE }],
      ['.left-phat-active-list-wrap .phat-active-list', { y: 0 }, { at: 0, duration, ease: EASE }],
      ['.right-phat-active-list-wrap .phat-active-list', { y: 0 }, { at: 0, duration, ease: EASE }],
    ]
    for (let i = 0; i < len; i++) {
      sequence.push([`.left-phat-list .phat-list-item-${i + 1}`, { opacity: 0 }, { at: 0, duration, ease: EASE }])
      sequence.push([`.right-phat-list .phat-list-item-${i + 1}`, { opacity: 0 }, { at: 0, duration, ease: EASE }])
    }
    await animate(sequence)
  }

  const runAnimate = async () => {
    const len = list.length
    if (len === 0) {
      return
    }
    const nextSeq = animateSeq.current < len - 1 ? animateSeq.current + 1 : 0
    const sequence: any = [
      ['.gear-medium', { rotate: -90 * nextSeq }, { duration: 1.2, ease: EASE }],
      ['.gear-small', { rotate: -90 * nextSeq }, { at: 0, duration: 1.2, ease: EASE }],
      ['.gear', { rotate: 90 * nextSeq }, { at: 0, duration: 1.2, ease: EASE }],
      ['.left-phat-list', { y: `${100 * nextSeq / len}%` }, { at: 0, duration: 1.2, ease: EASE }],
      ['.right-phat-list', { y: `-${100 * nextSeq / len}%` }, { at: 0, duration: 1.2, ease: EASE }],
      ['.left-phat-active-list-wrap .phat-active-list', { y: `${100 * nextSeq / len}%` }, { at: 0, duration: 1.2, ease: EASE }],
      ['.right-phat-active-list-wrap .phat-active-list', { y: `-${100 * nextSeq / len}%` }, { at: 0, duration: 1.2, ease: EASE }],
    ]
    const current = len - nextSeq - 1
    for (let i = 0; i < len; i++) {
      if (i === current || i + 1 === current || i - 1 === current) {
        sequence.push([`.left-phat-list .phat-list-item-${i + 1}`, { opacity: 1 }, { at: 0, duration: 1.2, ease: EASE }])
        sequence.push([`.right-phat-list .phat-list-item-${len - i}`, { opacity: 1 }, { at: 0, duration: 1.2, ease: EASE }])
      } else {
        sequence.push([`.left-phat-list .phat-list-item-${i + 1}`, { opacity: 0 }, { at: 0, duration: 1.2, ease: EASE }])
        sequence.push([`.right-phat-list .phat-list-item-${len - i}`, { opacity: 0 }, { at: 0, duration: 1.2, ease: EASE }])
      }
    }
    await animate(sequence)
    animateSeq.current = nextSeq
  }

  useEffect(() => {
    if (isInView) {
      runAnimate()
      startInterval()
    }
  }, [isInView])

  const startInterval = () => {
    clearInterval(animateInterval.current)
    const id = setInterval(runAnimate, 2000)
    animateInterval.current = id
  }

  return (
    <div
      ref={scope}
      className="w-full lg:aspect-[1285/952] relative overflow-hidden"
      style={{ overflowAnchor: 'none' }}
    >
      <div className="group">
        <div
          className={cn(
            "absolute top-[13%] left-[1.8%]",
            "aspect-[420/650] w-[30.5%] rounded-2xl",
            "hidden lg:flex items-end justify-center",
            "text-black-300 border-transparent border-[1px] transition-all",
            "group-hover:text-black-800 group-hover:bg-green-50 group-hover:border-green-500",
          )}
        >
          <h3 className="font-medium text-xl relative bottom-[5%]">Read Data</h3>
        </div>
        <div className="phat-list left-phat-list">
          {
            reverseList.map(([item], i) => (
              <div
                key={`${i}`}
                className={`phat-list-item phat-list-item-${i + 1}`}
              >
                <div className="item-inner">
                  <div
                    className="item-icon"
                    style={{
                      backgroundImage: `url(/api/image?page_id=${item.id}&path=${encodeURIComponent(JSON.stringify(['properties', 'Logo', 'files', 0, 'file', 'url']))})`,
                    }}
                  >
                  </div>
                  <div className="item-info">
                    <p className="item-title">{item.name}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="phat-active-list-wrap left-phat-active-list-wrap">
          <div className="phat-active-list">
            {
              reverseList.map(([item], i) => (
                <div
                  key={`${i}`}
                  className={`phat-list-item phat-list-item-${i + 1}`}
                >
                  <div
                    className="item-icon"
                    style={{
                      backgroundImage: `url(/api/image?page_id=${item.id}&path=${encodeURIComponent(JSON.stringify(['properties', 'Logo', 'files', 0, 'file', 'url']))})`,
                    }}
                  >
                  </div>
                  <div className="item-info">
                    <p className="item-title">{item.name}</p>
                    <p className="item-desc">{item.description}</p>
                    <div className="item-tags text-black">
                      {
                        item.tags.map((tag, i) => (
                          <span key={`${i}`}>{tag}</span>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="group">
        <div
          className={cn(
            "absolute top-[13%] left-[35%]",
            "aspect-[420/650] w-[30.5%] rounded-2xl",
            "hidden lg:flex items-end justify-center",
            "text-black-300 border-transparent border-[1px] transition-all",
            "group-hover:text-black-800 group-hover:bg-black-50 group-hover:border-black-300",
          )}
        >
          <h3 className="font-medium text-xl relative bottom-[5%]">Compute</h3>
        </div>
        <GearMedium
          className={cn(
            "gear-medium",
            "hidden lg:block",
            "absolute left-[47.15%] top-[16.07%]",
            "w-[18.46%]"
          )}
        />
        <GearSmall
          className={cn(
            "gear-small",
            "hidden lg:block",
            "absolute left-[35.64%] top-[47.38%]",
            "w-[14.79%]"
          )}
        />
        <Gear
          className={cn(
            "gear",
            "m-auto w-[60%]",
            "lg:w-[33.31%] lg:absolute lg:top-[21%] lg:left-[33.3%]"
          )}
        />
        <GearConnect
          className={cn(
            "absolute",
            "w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "lg:w-[33.31%] lg:top-[21%] lg:left-[33.3%] lg:translate-x-0 lg:translate-y-0",
          )}
        />
        <div
          className={cn(
            "absolute aspect-square",
            "w-[30%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "lg:w-[14.32%] lg:top-[34%] lg:left-[42.82%] lg:translate-x-0 lg:translate-y-0"
          )}
        >
          <Image className="pointer-events-none" alt="phat" src={ImagePhat} />
        </div>
      </div>
      <div className="group">
        <div
          className={cn(
            "absolute top-[13%] left-[67.7%]",
            "aspect-[420/650] w-[30.5%] rounded-2xl",
            "hidden lg:flex items-end justify-center",
            "text-black-300 border-transparent border-[1px] transition-all",
            "group-hover:text-black-800 group-hover:bg-phalaPurple-50 group-hover:border-phalaPurple-500",
          )}
        >
          <h3 className="font-medium text-xl relative bottom-[5%]">Verify & Use</h3>
        </div>
        <div className="phat-list right-phat-list">
          {
            list.map(([, item], i) => (
              <div
                key={`${i}`}
                className={`phat-list-item phat-list-item-${i + 1}`}
              >
                <div className="item-inner">
                  <div
                    className="item-icon"
                    style={{
                      backgroundImage: `url(/api/image?page_id=${item.id}&path=${encodeURIComponent(JSON.stringify(['properties', 'Logo', 'files', 0, 'file', 'url']))})`,
                    }}
                  >
                  </div>
                  <div className="item-info">
                    <p className="item-title">{item.name}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="phat-active-list-wrap right-phat-active-list-wrap">
          <div className="phat-active-list">
            {
              list.map(([, item], i) => (
                <div
                  key={`${i}`}
                  className={`phat-list-item phat-list-item-${i + 1}`}
                >
                  <div
                    className="item-icon"
                    style={{
                      backgroundImage: `url(/api/image?page_id=${item.id}&path=${encodeURIComponent(JSON.stringify(['properties', 'Logo', 'files', 0, 'file', 'url']))})`,
                    }}
                  >
                  </div>
                  <div className="item-info">
                    <p className="item-title">{item.name}</p>
                    <p className="item-desc">{item.description}</p>
                    <div className="item-tags">
                      {
                        item.tags.map((tag, i) => (
                          <span key={`${i}`}>{tag}</span>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div
        className={cn(
          "aspect-[60/63] w-[14%] bg-[length:100%_100%]",
          "absolute top-[31.5%] left-1/2 -translate-x-1/2 -translate-y-1/2",
          "lg:hidden"
        )}
        style={{
          backgroundImage: `url("/home/features-top-link.png")`
        }}
      />
      <div
        className={cn(
          "aspect-[60/63] w-[14%] bg-[length:100%_100%]",
          "absolute top-[68.5%] left-1/2 -translate-x-1/2 -translate-y-1/2",
          "lg:hidden"
        )}
        style={{
          backgroundImage: `url("/home/features-bottom-link.png")`
        }}
      />
      <div
        className="aspect-[123/60] w-[9.5%] bg-[length:100%_100%] absolute top-[41%] left-[32%] hidden lg:block"
        style={{
          backgroundImage: `url("/home/features-left-link.png")`
        }}
      />
      <div
        className="aspect-[123/60] w-[9.5%] bg-[length:100%_100%] absolute top-[41%] right-[32%] hidden lg:block"
        style={{
          backgroundImage: `url("/home/features-right-link.png")`
        }}
      />
      <div className="absolute w-full left-0 h-[4%] bottom-[24.5%] hidden lg:block">
        <div
          className="aspect-[279/6] w-[18%] bg-[length:100%_100%] absolute left-[25%]"
          style={{
            backgroundImage: `url("/home/features-line.png")`
          }}
        />
        <div
          className="aspect-[279/6] w-[18%] bg-[length:100%_100%] absolute left-[57.5%]"
          style={{
            backgroundImage: `url("/home/features-line.png")`
          }}
        />
      </div>
    </div>
  )
}
