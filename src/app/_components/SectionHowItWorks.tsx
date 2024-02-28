'use client'

import { createElement, type ReactNode } from 'react'
import { atom, useAtom, useAtomValue } from 'jotai'
import { atomWithReducer } from 'jotai/utils'
import dynamic from 'next/dynamic'

import { cn } from '@/lib/utils'

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
  const [currentAnimation] = useAtom(animationAtom)

  return (
    <section id="section-how-it-works">
      {/* Mobile */}
      <div
        className={cn(
          "safe-viewport py-10",
          "border border-solid border-black-100 rounded",
          "bg-black-900 text-white",
          "xl:hidden",
        )}
      >
        <header
          className={cn(
            "row-start-1 col-start-1 col-span-full",
          )}
        >
          <h2 className={cn("text-3xl lg:text-6xl font-black")}>How It Works</h2>
        </header>
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
      <div className={cn(
        "safe-viewport py-10 lg:py-32 !px-16",
        "hidden xl:grid grid-cols-1 lg:gap-x-10 lg:grid-cols-12 gap-y-10",
        "border border-solid border-black-100 rounded",
        "bg-black-900 text-white",
      )}>
        <header
          className={cn(
            "row-start-1 col-start-1 col-span-full",
            "flex flex-col gap-5",
            "pb-10 lg:pb-20"
          )}
        >
          <h2 className={cn("text-3xl lg:text-6xl font-black")}>How Phala Network works</h2>
        </header>
        <main
          className={cn(
            "col-start-1 col-span-full",
            "grid grid-cols-12 gap-6"
          )}
        >
          <div className="col-span-4 flex flex-col gap-6 justify-center">
            {
              works.map((work, index) => (
                <HowItWorksDetails
                  key={index}
                  idx={index}
                  title={work.title}
                >
                  {work.content}
                </HowItWorksDetails>
              ))
            }
          </div>
          <div
            className="col-start-5 col-span-8 bg-[length:100%_100%]"
            style={{
              backgroundImage: `url("/home/workflows-bg.png")`
            }}
          >
            {createElement(WorkFlow, { animation: currentAnimation[1] })}
          </div>
        </main>
      </div>
    </section>
  )
}

function HowItWorksDetails({ idx, title, children }: {
  idx: number
  title: string
  children: ReactNode
}) {
  const [currentAnimation, setNextAnimation] = useAtom(animationAtom)
  return (
    <details
      open={idx === currentAnimation[0]}
      onClick={(ev) => {
        ev.preventDefault()
        setNextAnimation({ next: idx })
      }}
    >
      <summary
        className="relative"
        onClick={ev => {
          ev.preventDefault()
        }}
      >
        <button
          className={cn(
            "btn duration-0",
            "relative z-10",
            "rounded-md px-6 py-2 font-bold text-xl",
            currentAnimation[0] === idx ? "bg-green-500 text-black-800" : "text-black-200 border-black-200 border-[1px]"
          )}
        >
          {title}
        </button>
        {
          currentAnimation[0] === idx ? (
            <div
              className={cn(
                "absolute top-0 left-0 -right-6 aspect-[275/56] -translate-y-1/4",
                "bg-[length:100%_100%]"
              )}
              style={{
                backgroundImage: `url("/home/workflows-pointer.png")`,
              }}
            />
          ) : null
        }
      </summary>
      <div className={cn("py-4 text-sm text-black-400")}>
        {children}
      </div>
    </details>
  )
}
