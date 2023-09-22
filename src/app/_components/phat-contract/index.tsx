'use client'
import { useEffect, useState, useRef } from 'react'
import { useAnimate, useInView, motion } from 'framer-motion'
import { atom, useAtom, useSetAtom, useAtomValue } from 'jotai';
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import { cn } from '@/lib/utils'
import { type PhatItem } from '@/lib/phat_list'
import Gear from './svgs/gear'
import GearSmall from './svgs/gear_small'
import GearMedium from './svgs/gear_medium'
import GearLink from './svgs/gear_link'
import Phat from './svgs/phat'
import Programmable from './svgs/programmable'
import Plug from './svgs/plug'
import Verifiable from './svgs/verifiable'
import './index.css'

const connectTypeAtom = atom('')
export const phatListAtom = atom<PhatItem[][]>([])
const currentPhatAtom = atom<PhatItem[]>([])

const EASE = [0.65, 0, 0.31, 1]

export default function() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })
  const [connectType, setConnectType] = useAtom(connectTypeAtom)
  const animateInterval = useRef<ReturnType<typeof setInterval>>()
  const animateSeq = useRef(0)
  const [currentPhat, setCurrentPhat] = useAtom(currentPhatAtom)
  const list = useAtomValue(phatListAtom)
  const reverseList = list.slice().reverse()

  const runAnimate = async () => {
    if (list.length === 0) {
      return
    }
    const nextSeq = animateSeq.current < list.length - 1 ? animateSeq.current + 1 : 0
    const sequence: any = [
      ['.gear-medium', { rotate: -90 * nextSeq }, { duration: 1.2, ease: EASE }],
      ['.gear-small', { rotate: -90 * nextSeq }, { at: 0, duration: 1.2, ease: EASE }],
      ['.gear', { rotate: 90 * nextSeq }, { at: 0, duration: 1.2, ease: EASE }],
      ['.left-phat-list', { y: `${100 * nextSeq / list.length}%` }, { at: 0, duration: 1.2, ease: EASE }],
      ['.right-phat-list', { y: `-${100 * nextSeq / list.length}%` }, { at: 0, duration: 1.2, ease: EASE }],
      ['.left-phat-active-list-wrap .phat-active-list', { y: `${100 * nextSeq / list.length}%` }, { at: 0, duration: 1.2, ease: EASE }],
      ['.right-phat-active-list-wrap .phat-active-list', { y: `-${100 * nextSeq / list.length}%` }, { at: 0, duration: 1.2, ease: EASE }],
    ]
    if (nextSeq === 0) {
      await animate(list.map((_, i) => ([
        `.left-phat-list .phat-list-item-${i + 1}`, { opacity: 0.8 }, { at: 0, duration: 0 }
      ])))
    }
    const current = list.length - nextSeq - 1
    for (let i = 0; i < list.length; i++) {
      if (i === current || i + 1 === current || i - 1 === current) {
        sequence.push([`.left-phat-list .phat-list-item-${i + 1}`, { opacity: 1 }, { at: 0, duration: 1.2, ease: EASE }])
        sequence.push([`.right-phat-list .phat-list-item-${list.length - i}`, { opacity: 1 }, { at: 0, duration: 1.2, ease: EASE }])
      } else {
        sequence.push([`.left-phat-list .phat-list-item-${i + 1}`, { opacity: 0 }, { at: 0, duration: 1.2, ease: EASE }])
        sequence.push([`.right-phat-list .phat-list-item-${list.length - i}`, { opacity: 0 }, { at: 0, duration: 1.2, ease: EASE }])
      }
    }
    await animate(sequence)
    animateSeq.current = nextSeq
    setCurrentPhat(list[animateSeq.current])
  }

  useEffect(() => {
    if (isInView && !connectType) {
      runAnimate()
      startInterval()
    }
  }, [isInView])

  useEffect(() => {
    if (list.length > 0 && currentPhat.length === 0) {
      setCurrentPhat(list[animateSeq.current])
    }
  }, [list, currentPhat])

  const handleConnect = (value: string) => {
    clearInterval(animateInterval.current)
    setConnectType(value)
  }

  const handleBack = () => {
    setConnectType('')
    startInterval()
  }

  const startInterval = () => {
    clearInterval(animateInterval.current)
    const id = setInterval(runAnimate, 2000)
    animateInterval.current = id
  }

  return (
    <div
      ref={scope}
      className="w-full aspect-[1285/952] relative overflow-hidden"
    >
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
                    backgroundImage: `url("${item.logo}")`,
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
                    backgroundImage: `url("${item.logo}")`,
                  }}
                >
                </div>
                <div className="item-info">
                  <p className="item-title">{item.name}</p>
                  <p className="item-desc">{item.description}</p>
                  <div className="item-tags">
                    {
                      item.tags.map((tag, i) => (
                        <a href="#" key={`${i}`}>{tag}</a>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
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
                    backgroundImage: `url("${item.logo}")`,
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
                    backgroundImage: `url("${item.logo}")`,
                  }}
                >
                </div>
                <div className="item-info">
                  <p className="item-title">{item.name}</p>
                  <p className="item-desc">{item.description}</p>
                  <div className="item-tags">
                    {
                      item.tags.map((tag, i) => (
                        <a href="#" key={`${i}`}>{tag}</a>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <GearMedium
        className={cn(
          "gear-medium",
          "absolute left-[47.15%] top-[16.07%]",
          "w-[19.46%]"
        )}
      />
      <GearSmall
        className={cn(
          "gear-small",
          "absolute left-[35.64%] top-[47.38%]",
          "w-[14.79%]"
        )}
      />
      <Gear
        className={cn(
          "gear",
          "absolute top-[21%] left-[33.3%]",
          "w-[33.31%]"
        )}
      />
      <GearLink
        className={cn(
          "absolute top-[27.19%]",
          "w-full"
        )}
      />
      <div
        className={cn(
          "absolute top-[34%] left-[42.82%]",
          "w-[14.32%] aspect-square"
        )}
      >
        <motion.div
          className="absolute inset-0"
          animate={!connectType ? {
            opacity: 1,
            transition: { duration: 0.8 },
          } : {
            opacity: 0,
            transition: { duration: 0.8 },
          }}
        >
          <Phat />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          className="absolute inset-0"
          animate={connectType === 'connect' ? {
            opacity: 1,
            transition: { duration: 0.8 },
          } : {
            opacity: 0,
            transition: { duration: 0.8 },
          }}
        >
          <Plug />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          className="absolute inset-0"
          animate={connectType === 'programmable' ? {
            opacity: 1,
            transition: { duration: 0.8 },
          } : {
            opacity: 0,
            transition: { duration: 0.8 },
          }}
        >
          <Programmable />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          className="absolute inset-0"
          animate={connectType === 'verifiable' ? {
            opacity: 1,
            transition: { duration: 0.8 },
          } : {
            opacity: 0,
            transition: { duration: 0.8 },
          }}
        >
          <Verifiable />
        </motion.div>
      </div>
      <div
        className={cn(
          "aspect-[796/264] w-[61.95%]",
          "absolute bottom-0 left-[18.98%]"
        )}
      >
        <motion.div
          className="absolute inset-0"
          initial={{
            opacity: 0,
            visibility: 'hidden',
          }}
          animate={connectType ? {
            opacity: 1,
            visibility: 'visible',
            transition: { duration: 0.8 },
          } : {
            opacity: 0,
            transitionEnd: {
              visibility: 'hidden',
            },
          }}
        >
          <SectionSwiper />
          <div className="mt-[5%] flex justify-center items-center">
            <button
              className="border-black-800 font-bold text-[1vw] py-[0.6vw] px-[3.5vw] rounded-[1vw] border-[0.2vw] hover:bg-black-800 hover:text-white"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={!connectType ? {
            opacity: 1,
            visibility: 'visible',
            transition: { duration: 0.8 },
          } : {
            opacity: 0,
            transitionEnd: {
              visibility: 'hidden',
            },
          }}
        >
          <div className="connect-panel flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-[2vw]">
              <p className="text-black-800 font-bold text-[2vw]">
                Smart Contract, Now Smarter
              </p>
              <p className="font-medium text-[1.5vw]">See the magic</p>
              <div className="flex gap-[2vw]">
                {
                  currentPhat.length ? currentPhat[0].section.map((value, i) => (
                    <button
                      key={`${i}`}
                      className="connect-button"
                      onClick={() => handleConnect(value.toLowerCase())}
                    >
                      {value}
                    </button>
                  )) : null
                }
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function SectionSwiper() {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [current, setCurrent] = useState(0)
  const [connectType, setConnectType] = useAtom(connectTypeAtom)
  const currentPhat = useAtomValue(currentPhatAtom)
  const section = currentPhat.length ? currentPhat[0].section : []

  const renderLeft = () => {
    if (section.length === 0 || section.length === 1 || section.length === 2) {
      return null
    }
    const index = current - 1 < 0 ? section.length - 1 : current - 1
    return (
      <div
        className="absolute -left-[5%] top-[6%] text-[1.2vw] z-10 w-[25%] cursor-pointer"
        onClick={() => handleSlide(index)}
      >
        <div className="flex items-center">
          <FiArrowLeft size="10%" />
          <span className="ml-[2%] capitalize">{section[index]}</span>
        </div>
      </div>
    )
  }

  const renderRight = () => {
    if (section.length === 0 || section.length === 1) {
      return null
    }
    const index = current + 1 > section.length - 1 ? 0 : current + 1
    return (
      <div
        className="absolute -right-[5%] top-[6%] text-[1.2vw] z-10 w-[25%] cursor-pointer"
        onClick={() => handleSlide(index)}
      >
        <div className="flex items-center justify-end">
          <span className="mr-[2%] capitalize">{section[index]}</span>
          <FiArrowRight size="10%" />
        </div>
      </div>
    )
  }

  const handleSlide = (index: number) => {
    if (swiper && !swiper.destroyed) {
      swiper.slideTo(index)
    }
  }

  return (
    <div className="w-full relative">
      <Swiper
        className="w-[70%]"
        allowTouchMove={false}
        spaceBetween={30}
        speed={800}
        onSwiper={(swiper: SwiperClass) => {
          setSwiper(swiper)
        }}
        onSlideChange={(swiper: SwiperClass) => {
          setCurrent(swiper.activeIndex)
          if (!connectType) {
            return
          }
          setConnectType(section[swiper.activeIndex].toLowerCase())
        }}
      >
        {
          section.map((value, i) => (
            <SwiperSlide key={`${i}`}>
              {
                value === 'Connect' ? (
                  <SectionConnect />
                ) : value === 'Programmable' ? (
                  <SectionProgrammable />
                ) : value === 'Verifiable' ? (
                  <SectionVerifiable />
                ) : null
              }
            </SwiperSlide>
          ))
        }
      </Swiper>
      {renderLeft()}
      {renderRight()}
    </div>
  )
}

function SectionConnect() {
  return (
    <section className="text-center text-[1vw] flex-shrink-0">
      <p className="text-black-800 font-bold text-[2vw]">Connect Everything</p>
      <div className="mt-[5%]">
        <p className="font-bold">HTTP Extension can:</p>
        <p>Connect Internet with Web3</p>
        <p>Connect for multi-chains</p>
        <p>Connect Layer2 with Layer1</p>
      </div>
    </section>
  )
}

function SectionProgrammable() {
  return (
    <section className="text-center text-[1vw] flex-shrink-0">
      <p className="text-black-800 font-bold text-[2vw]">Customize, Build, Automation</p>
      <div className="mt-[5%]">
        <p>Easy to build with Javascript</p>
        <p>SGX for off-chain execution</p>
        <p>Automation as a service</p>
      </div>
    </section>
  )
}

function SectionVerifiable() {
  return (
    <section className="text-center text-[1vw] flex-shrink-0">
      <p className="text-black-800 font-bold text-[2vw]">Verify for Minimal Trust</p>
      <div className="mt-[5%]">
        <p>Build Minimal Trust</p>
        <p>Powered by Phala Blockchain</p>
        <p>Verifiable computation as proof</p>
      </div>
    </section>
  )
}
