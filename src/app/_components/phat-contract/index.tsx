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
          <div className="mt-[3%] flex justify-center items-center">
            <button
              className={cn(
                "border-black-800 font-bold",
                "hover:bg-black-800 hover:text-white",
                "py-[0.6vw] px-[3.5vw] rounded-[1vw] border-[0.2vw]",
                "xl:rounded-xl xl:border-2 xl:py-2 xl:px-6",
                "text-[1vw] xl:text-base",
              )}
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
            <div
              className={cn(
                "flex flex-col items-center justify-center",
                "gap-[2vw] xl:gap-6"
              )}
            >
              <p
                className={cn(
                  "text-black-800 font-bold",
                  "text-[1.8vw] xl:text-2xl"
                )}
              >
                Smart Contract, Now Smarter
              </p>
              <p
                className={cn(
                  "font-medium",
                  "text-[1vw] xl:text-base"
                )}
              >
                See the magic
              </p>
              <div className="flex gap-[2vw] xl:gap-4">
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
        className={cn(
          "absolute -left-[5%] z-10 w-[25%] cursor-pointer",
          "text-black-500 font-bold",
          "text-[1vw] xl:text-base",
          "top-[0.7vw] xl:top-[4%]"
        )}
        onClick={() => handleSlide(index)}
      >
        <div className="flex items-center">
          <FiArrowLeft className="shrink-0" size="10%" color="#808080" />
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
        className={cn(
          "absolute -right-[5%] z-10 w-[25%] cursor-pointer",
          "text-black-500 font-bold",
          "text-[1vw] xl:text-base",
          "top-[0.7vw] xl:top-[4%]"
        )}
        onClick={() => handleSlide(index)}
      >
        <div className="flex items-center justify-end">
          <span className="mr-[2%] capitalize">{section[index]}</span>
          <FiArrowRight className="shrink-0" size="10%" color="#808080" />
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
    <section className="text-center">
      <p
        className={cn(
          "text-black-800 font-bold",
          "text-[1.8vw] xl:text-2xl",
        )}
      >
        Connect Everything
      </p>
      <div
        className={cn(
          "mt-[3%] font-medium",
          "text-[1vw] xl:text-base"
        )}
      >
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
    <section className="text-center">
      <p
        className={cn(
          "text-black-800 font-bold",
          "text-[1.8vw] xl:text-2xl",
        )}
      >
        Customize, Build, Automation
      </p>
      <div
        className={cn(
          "mt-[5%]",
          "text-[1vw] xl:text-base"
        )}
      >
        <p>Easy to build with Javascript</p>
        <p>SGX for off-chain execution</p>
        <p>Automation as a service</p>
      </div>
    </section>
  )
}

function SectionVerifiable() {
  return (
    <section className="text-center">
      <p
        className={cn(
          "text-black-800 font-bold",
          "text-[1.8vw] xl:text-2xl",
        )}
      >
        Verify for Minimal Trust
      </p>
      <div
        className={cn(
          "mt-[5%]",
          "text-[1vw] xl:text-base"
        )}
      >
        <p>Build Minimal Trust</p>
        <p>Powered by Phala Blockchain</p>
        <p>Verifiable computation as proof</p>
      </div>
    </section>
  )
}
