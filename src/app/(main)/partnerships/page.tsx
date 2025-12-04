import type { Metadata } from 'next'

import CreamContainer from '@/components/cream-container'
import LatestNews from './latest-news'
import { partnersData } from './partners-data'
import PartnershipsClient from './partnerships-client'

export const metadata: Metadata = {
  title: 'Partners with Trust',
  description:
    "Explore Phala's trusted partnerships across AI, blockchain, security, and decentralized computing. Join our ecosystem of innovative partners building the future of Web3.",
}

export default function Page() {
  return (
    <div className="-mt-16">
      <CreamContainer>
        <section className="py-16 sm:py-32">
          <div className="mx-auto max-w-6xl px-8">
            {/* Title */}
            <header className="flex flex-col justify-center py-8 lg:py-16">
              <h1 className="text-black-800 text-2xl sm:text-5xl font-semibold text-center">
                Partners with Trust
              </h1>
            </header>

            <PartnershipsClient partnersData={partnersData} />
          </div>
        </section>
      </CreamContainer>
      <LatestNews />
    </div>
  )
}
