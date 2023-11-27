'use client'

import { createElement } from 'react'
import { atom, useAtom, useAtomValue } from 'jotai'
import { atomWithReducer } from 'jotai/utils'
import dynamic from 'next/dynamic'
import { MdArrowForward } from 'react-icons/md'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import QuoteLine1 from './workflow/svgs/quote_line1'
import QuoteLine2 from './workflow/svgs/quote_line2'
import QuoteLine3 from './workflow/svgs/quote_line3'

const WorkFlow = dynamic(() => import('./workflow'), {
  ssr: false,
})

const worksAtom = atom([
  {
    title: 'Correctness',
    content: 'Phat Contracts are deployed to the blockchain and assigned to the offchain workers, running inside Secure Enclaves. Anyone can check the signed transactions and Secure Enclave remote attestation to verify that the executed code is the one published on the blockchain.',
  },
  {
    title: 'Replicated',
    content: 'Phat Contracts are deployed to one or more workers, grouped as a Cluster. The contracts in the same cluster are replicated to further guarantee the availability. Thanks to the redundancy by the Cluster design, the developer can further validate the states across the workers to...',
  },
  {
    title: 'Confidentiality',
    content: 'Phala Network implemented end-to-end encryption during the full Phat Contract lifecycle. Secure Enclave acts as a two-way sandbox that encrypts input, output, and internet access, protecting the secrets in the enclave against software and hardware level attack.',
  }
])

const animationAtom = atomWithReducer<[number, string], { next: number }>([0, ''], (prev, action) => {
  if (action) {
    return [action.next, `flow${prev[0] + 1}to${action.next + 1}`]
  }
  return [0, '']
})

export function SectionHowItWorks() {
  const works = useAtomValue(worksAtom)
  const [currentAnimation, setNextAnimation] = useAtom(animationAtom)

  return (
    <section id="section-how-it-works">
      {/* Mobile */}
      <div
        className={cn(
          "safe-viewport",
          "xl:hidden",
          "relative"
        )}
      >
        <div
          className={cn(
            "aspect-[220/278] w-60",
            "mt-8 rounded-3xl",
            "bg-no-repeat bg-center bg-cover",
            "absolute top-0 left-0"
          )}
          style={{
            backgroundImage: `url("/home/how-it-works-head-icon.png")`,
          }}
        />
        <div className="pb-10 pt-32">
          <h2 className={cn(
            "font-black text-4xl uppercase"
          )}>
            How <br />It Works
          </h2>
        </div>
        {
          works.map((work, index) => (
            <div
              key={`${index}`}
              className="mt-10"
            >
              <h3
                className={cn(
                  "font-semibold text-2xl uppercase",
                  "flex items-center",
                )}
              >
                {work.title}
              </h3>
              <p className="mt-5">{work.content}</p>
              <div
                className={cn(
                  "w-full mt-10",
                )}
              >
                {createElement(WorkFlow, { inViewAnimation: index === 1 ? 'flow1to2' : index === 2 ? 'flow1to3' : '' })}
              </div>
            </div>
          ))
        }
      </div>
      {/* PC */}
      <div
        className={cn(
          "safe-viewport",
          "hidden xl:flex flex-col",
          "mt-24",
        )}
      >
        <div className="w-full grid grid-cols-20 3xl:grid-cols-24">
          <div className="col-start-2 3xl:col-start-4 col-span-18 relative">
            <h2 className={cn(
              "font-black text-5xl uppercase"
            )}>
              How It Works
            </h2>
            <div
              className={cn(
                "mt-16",
                "grid gap-8 grid-cols-3",
              )}
            >
              {
                works.map((work, index) => (
                  <motion.div
                    key={`${index}`}
                    className={cn(
                      "cursor-pointer",
                      "flex flex-col",
                    )}
                    animate="rest"
                    whileHover="hover"
                    variants={{
                      hover: {
                        opacity: 1,
                      },
                      rest: {
                        opacity: currentAnimation[0] === index ? 1 : 0.5,
                      },
                    }}
                    onClick={() => setNextAnimation({ next: index })}
                  >
                    <h3
                      className={cn(
                        "font-semibold text-2xl uppercase",
                        "flex items-center",
                      )}
                    >
                      {work.title}
                      <motion.div
                        variants={{
                          hover: {
                            opacity: 1,
                            x: 10,
                            transition: {
                              ease: 'easeOut',
                              duration: 0.5
                            },
                          },
                          rest: {
                            opacity: 0,
                            x: 0,
                          }
                        }}
                      >
                        <MdArrowForward
                          className={cn(
                            "ml-2 w-6 h-6",
                          )}
                        />
                      </motion.div>
                    </h3>
                    <p className="mt-5">{work.content}</p>
                  </motion.div>
                ))
              }
            </div>
          </div>
          <div className="col-start-2 3xl:col-start-4 col-span-18 relative">
            <div className="relative top-[2.8%] -z-10">
              <motion.div
                className={cn(
                  "w-[39.81%] relative left-[1%]",
                )}
                animate={{
                  opacity: currentAnimation[0] === 0 ? 1 : 0.1,
                  transition: {
                    ease: 'easeOut',
                    duration: 0.5
                  },
                }}
              >
                <QuoteLine1 />
              </motion.div>
              <motion.div
                className={cn(
                  "w-[12.27%] absolute top-0 left-[28.7%]",
                )}
                animate={{
                  opacity: currentAnimation[0] === 1 ? 1 : 0.1,
                  transition: {
                    ease: 'easeOut',
                    duration: 0.5
                  },
                }}
              >
                <QuoteLine2 />
              </motion.div>
              <motion.div
                className={cn(
                  "w-[39.81%] absolute top-0 left-[28.9%]",
                )}
                animate={{
                  opacity: currentAnimation[0] === 2 ? 1 : 0.1,
                  transition: {
                    ease: 'easeOut',
                    duration: 0.5
                  },
                }}
              >
                <QuoteLine3 />
              </motion.div>
            </div>
            {createElement(WorkFlow, { animation: currentAnimation[1] })}
          </div>
        </div>
      </div>
    </section>
  )
}
