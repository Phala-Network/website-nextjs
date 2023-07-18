'use client'

import { atom, useAtom, useAtomValue } from 'jotai'

import { cn } from '@/lib/utils'
import './SectionHowItWorks.css'

const worksAtom = atom([
  {
    title: 'Correctness',
    content: 'Phat Contracts are deployed to the blockchain and assigned to the offchain workers, running inside Secure Enclaves. Anyone can check the signed transactions and Secure Enclave remote attestation to verify that the executed code is the one published on the blockchain.',
    imageUrl: '/home/how-it-works-01.png'
  },
  {
    title: 'Replicated',
    content: 'Phat Contracts are deployed to one or more workers, grouped as a Cluster. The contracts in the same cluster are replicated to further guarantee the availability. Thanks to the redundancy by the Cluster design, the developer can further validate the states across the workers to...',
    imageUrl: '/home/how-it-works-02.png'
  },
  {
    title: 'Confidentiality',
    content: 'Phala Network implemented end-to-end encryption during the full Phat Contract lifecycle. Secure Enclave acts as a two-way sandbox that encrypts input, output, and internet access, protecting the secrets in the enclave against software and hardware level attack.',
    imageUrl: '/home/how-it-works-03.png'
  }
])

const activeWorkAtom = atom(0)

export function SectionHowItWorks() {
  const works = useAtomValue(worksAtom)
  const [activeWork, setActiveWork] = useAtom(activeWorkAtom)
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
              key={index.toString()}
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
                  "w-full aspect-[343/280]",
                  "mt-8 rounded-3xl",
                  "bg-no-repeat bg-bottom",
                )}
                style={{
                  backgroundImage: `url("${work.imageUrl}")`,
                  backgroundSize: '150%',
                }}
              />
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
        <h2 className={cn(
          "font-black text-5xl uppercase"
        )}>
          How It Works
        </h2>
        <div
          className={cn(
            "mt-16",
            "grid gap-8 grid-cols-3",
            "cursor-pointer",
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
                  activeWork !== index ? 'opacity-50' : null
                )}
                onClick={() => setActiveWork(index)}
              >
                <h3
                  className={cn(
                    "font-semibold text-2xl uppercase",
                    "flex items-center",
                  )}
                >
                  {work.title}
                  <img
                    src="/icons/right-arrow.svg"
                    alt=""
                    className={cn(
                      "icon",
                      "ml-2 inline-block w-6 h-6",
                      "transition-opacity transition-transform duration-500 opacity-0 translate-x-0",
                    )}
                  />
                </h3>
                <p className="mt-5">{work.content}</p>
              </div>
            ))
          }
        </div>
        <div className="mt-5 w-full relative">
          {
            works.map((work, index) => (
              <img
                className={cn(
                  "w-full",
                  activeWork !== index ? 'opacity-30' : 'z-10',
                  index > 0 ? 'absolute top-0 left-0' : 'relative'
                )}
                key={index.toString()}
                src={work.imageUrl}
                alt=""
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
