'use client'
import { useEffect, useState, useRef } from 'react'
import { useAnimate, useInView, motion } from 'framer-motion'
import { atom, useAtom, useSetAtom, useAtomValue } from 'jotai';
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { type PhatItem, type PhatItemSection } from '@/lib/phat_lists'
import Gear from './svgs/gear'
import GearSmall from './svgs/gear_small'
import GearMedium from './svgs/gear_medium'
import GearLink from './svgs/gear_link'
import ImagePhat from './images/phat.png'
import ImageProgrammable from './images/programmable.png'
import ImagePlug from './images/plug.png'
import ImageVerifiable from './images/verifiable.png'
import './index.css'

const currentSectionAtom = atom<PhatItemSection>('default')
export const phatListStoreAtom = atom<Record<string, PhatItem[][]>>({})

const EASE = [0.65, 0, 0.31, 1]

export default function() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })
  const animateInterval = useRef<ReturnType<typeof setInterval>>()
  const animateSeq = useRef(0)

  const [currentSection, setCurrentSection] = useAtom(currentSectionAtom)
  const currentSectionRef = useRef<PhatItemSection>('default')
  currentSectionRef.current = currentSection
  const listStore = useAtomValue(phatListStoreAtom)
  const list = listStore[currentSection || 'default']
  const reverseList = list.slice().reverse()

  const resetAnimate = async () => {
    const len = listStore[currentSectionRef.current].length
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
    const len = listStore[currentSectionRef.current].length
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

  const handleSectionChange = async (value: PhatItemSection) => {
    if (value === currentSectionRef.current) {
      return
    }
    clearInterval(animateInterval.current)
    setCurrentSection(value)
    await resetAnimate()
    animateSeq.current = 0
    runAnimate()
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
      style={{ overflowAnchor: 'none' }}
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
          animate={currentSection === 'default' ? {
            opacity: 1,
            transition: { duration: 0.8 },
          } : {
            opacity: 0,
            transition: { duration: 0.8 },
          }}
        >
          <Image alt="phat" src={ImagePhat} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          className="absolute inset-0"
          animate={currentSection === 'connect' ? {
            opacity: 1,
            transition: { duration: 0.8 },
          } : {
            opacity: 0,
            transition: { duration: 0.8 },
          }}
        >
          <Image alt="plug" src={ImagePlug} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          className="absolute inset-0"
          animate={currentSection === 'programmable' ? {
            opacity: 1,
            transition: { duration: 0.8 },
          } : {
            opacity: 0,
            transition: { duration: 0.8 },
          }}
        >
          <Image alt="programmable" src={ImageProgrammable} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          className="absolute inset-0"
          animate={currentSection === 'verifiable' ? {
            opacity: 1,
            transition: { duration: 0.8 },
          } : {
            opacity: 0,
            transition: { duration: 0.8 },
          }}
        >
          <Image alt="verifiable" src={ImageVerifiable} />
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
          animate={currentSection !== 'default' ? {
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
          <SectionSwiper onSectionChange={handleSectionChange} />
          <div className="mt-[3%] flex justify-center items-center">
            <button
              className={cn(
                "border-black-800 font-bold",
                "transition-colors hover:bg-black-800 hover:text-white",
                "py-[0.6vw] px-[3.5vw] rounded-[1vw] border-[0.2vw]",
                "xl:rounded-xl xl:border-2 xl:py-2 xl:px-6",
                "text-[1vw] xl:text-base",
              )}
              onClick={ev => {
                ev.preventDefault()
                ev.stopPropagation()
                handleSectionChange('default')
              }}
            >
              Back
            </button>
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={currentSection === 'default' ? {
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
                <button
                  className="connect-button"
                  onClick={ev => {
                    ev.preventDefault()
                    ev.stopPropagation()
                    handleSectionChange('connect')
                  }}
                >
                  Connect
                </button>
                <button
                  className="connect-button"
                  onClick={ev => {
                    ev.preventDefault()
                    ev.stopPropagation()
                    handleSectionChange('programmable')
                  }}
                >
                  Programmable
                </button>
                <button
                  className="connect-button"
                  onClick={ev => {
                    ev.preventDefault()
                    ev.stopPropagation()
                    handleSectionChange('verifiable')
                  }}
                >
                  Verifiable
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function SectionSwiper({ onSectionChange }: any) {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const currentSection = useAtomValue(currentSectionAtom)
  const sections: PhatItemSection[] = ['connect', 'programmable', 'verifiable']

  useEffect(() => {
    if (currentSection === 'connect') {
      slideTo(0, 0)
    } else if (currentSection === 'programmable') {
      slideTo(1, 0)
    } else if (currentSection === 'verifiable') {
      slideTo(2, 0)
    }
  }, [currentSection])

  const renderLeft = () => {
    const current = sections.indexOf(currentSection)
    const index = current - 1 < 0 ? sections.length - 1 : current - 1
    return (
      <div
        className={cn(
          "absolute -left-[5%] z-10 w-[25%] cursor-pointer",
          "text-black-500 font-bold",
          "text-[1vw] xl:text-base",
          "top-[0.7vw] xl:top-[4%]"
        )}
        onClick={() => slideTo(index, 300)}
      >
        <div className="flex items-center">
          <FiArrowLeft className="shrink-0" size="10%" color="#808080" />
          <span className="ml-[2%] capitalize">{sections[index]}</span>
        </div>
      </div>
    )
  }

  const renderRight = () => {
    const current = sections.indexOf(currentSection)
    const index = current + 1 > sections.length - 1 ? 0 : current + 1
    return (
      <div
        className={cn(
          "absolute -right-[5%] z-10 w-[25%] cursor-pointer",
          "text-black-500 font-bold",
          "text-[1vw] xl:text-base",
          "top-[0.7vw] xl:top-[4%]"
        )}
        onClick={() => slideTo(index, 300)}
      >
        <div className="flex items-center justify-end">
          <span className="mr-[2%] capitalize">{sections[index]}</span>
          <FiArrowRight className="shrink-0" size="10%" color="#808080" />
        </div>
      </div>
    )
  }

  const slideTo = (index: number, speed: number) => {
    if (swiper && !swiper.destroyed) {
      swiper.slideTo(index, speed)
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
          onSectionChange(sections[swiper.activeIndex])
        }}
      >
        {
          sections.map(section => (
            <SwiperSlide key={section}>
              {
                section === 'connect' ? (
                  <SectionConnect />
                ) : section === 'programmable' ? (
                  <SectionProgrammable />
                ) : section === 'verifiable' ? (
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
        <p>Connect smart contracts to the internet</p>
        <p>Connect smart contracts to off-chain services</p>
        <p>Connect smart contracts across the L1/2s</p>
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
          "mt-[5%] font-medium",
          "text-[1vw] xl:text-base"
        )}
      >
        <p>Code in Javascript</p>
        <p>Seamless integrate to EVM projects</p>
        <p>Function as a Service with automation</p>
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
          "mt-[5%] font-medium",
          "text-[1vw] xl:text-base"
        )}
      >
        <p>Verifiable offchain execution</p>
        <p>Trust minimized execution in Secure Enclaves (TEEs)</p>
        <p>Backed by decentralized Phala Blockchain</p>
      </div>
    </section>
  )
}
