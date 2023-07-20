'use client'

import { useState } from 'react'
import { atom, useAtom, useAtomValue } from 'jotai'
import dynamic from 'next/dynamic'
import { MdArrowForward } from 'react-icons/md'

import { cn } from '@/lib/utils'
import './SectionHowItWorks.css'
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

const activeWorkAtom = atom(0)

export function SectionHowItWorks() {
  const works = useAtomValue(worksAtom)
  const [activeWork, setActiveWork] = useAtom(activeWorkAtom)
  const [animation, setAnimation] = useState('')

  const handleSwitch = (next: number) => {
    setAnimation(`flow${activeWork + 1}to${next + 1}`)
    setActiveWork(next)
  }

  return (
    <section id="section-how-it-works" className="swiper-no-swiping">
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
                <WorkFlow inViewAnimation={index === 1 ? 'flow1to2' : index === 2 ? 'flow1to3' : ''} />
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
                  <div
                    key={index.toString()}
                    className={cn(
                      "work-item",
                      "flex flex-col",
                      "transition-opacity duration-500",
                      "hover:opacity-100",
                      "cursor-pointer",
                      activeWork !== index ? 'opacity-50' : null
                    )}
                    onClick={() => handleSwitch(index)}
                  >
                    <h3
                      className={cn(
                        "font-semibold text-2xl uppercase",
                        "flex items-center",
                      )}
                    >
                      {work.title}
                      <MdArrowForward
                        className={cn(
                          "icon",
                          "ml-2 w-6 h-6",
                          "transition-opacity transition-transform duration-500 opacity-0 translate-x-0",
                        )}
                      />
                    </h3>
                    <p className="mt-5">{work.content}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-start-2 3xl:col-start-4 col-span-18 relative">
            <div className="relative top-[2.8%] -z-10">
              <QuoteLine1
                fill={activeWork === 0 ? '#171717' : '#EDEDF0'}
                className={cn("w-[39.81%] relative left-[1%]", activeWork === 0 ? 'z-10' : null)}
              />
              <QuoteLine2
                className={cn(
                  "w-[12.27%] absolute top-0 left-[28.7%]",
                  activeWork === 1 ? 'z-10' : null,
                )}
                fill={activeWork === 1 ? '#171717' : '#EDEDF0'}
              />
              <QuoteLine3
                className={cn(
                  "w-[39.81%] absolute top-0 left-[28.9%]",
                  activeWork === 2 ? 'z-10' : null,
                )}
                fill={activeWork === 2 ? '#171717' : '#EDEDF0'}
              />
            </div>
            <WorkFlow animation={animation} />
          </div>
        </div>
      </div>
    </section>
  )
}
