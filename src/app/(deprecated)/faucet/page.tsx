import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { MdExpandMore } from 'react-icons/md'
import { AccountInfo, SponsorList } from './_components/Claim'

import './style.css'

function Details({ summary, children }: { summary: string, children: ReactNode }) {
  return (
    <details className="faucet-details">
      <summary>
        <h4>{summary}</h4>
        <MdExpandMore className="indicator" />
      </summary>
      <article>
        {children}
      </article>
    </details>
  )
}

function FAQ() {
  return (
    <>
      <Details summary="What is the Phala Testnet Faucet?">
        <p>A testnet faucet enables developers to receive free tokens that can be used to interact with Phat Contracts on the PoC6 Testnet.</p>
      </Details>
      <Details summary="How do I use this?">
        <p>To request funds, simply enter your wallet address and hit “Send Me PHA”. The faucet is implemented by Phat Contract, you can use our DevTool <a href="https://phat.phala.network/contracts/view/0x53cc868c706baa1977084ff5d920100016ffd315e3cd304b512d2161f2a02548?rpc=wss://poc6.phala.network/ws" target="_blank">play with it</a>, too.</p>
      </Details>
      <Details summary="How does it work?">
        <p>You can request 1,000 PHA every 24 hours without authentication. Additional test tokens are available with specific eligibility requirements.</p>
      </Details>
      <Details summary="What if I run into any other issues, or have questions?">
        <p>Join our <a href="https://discord.gg/phala-network" target="_blank">Discord server</a> to tap into the support of our dedicated core team and enthusiastic community members.</p>
      </Details>
    </>
  )
}

export const metadata = {
  title: 'Phala Testnet Faucet',
  alternates: {
    canonical: "https://phala.network/faucet",
  }
}

export default function Page() {
  const rpc = process.env.NEXT_PUBLIC_FAUCET_RPC!
  return (
    <>
      <link rel="prefetch" href={`/api/rpc-metadata?rpc=${rpc}`} as="document" />
      <link rel="preconnect" href={`${rpc}`} />
      <div className="bg-gray-900 w-full">
        <div
          className={cn(
            "safe-viewport",
            "grid gap-x-4 grid-cols-6 xl:grid-cols-20 3xl:grid-cols-24",
            "py-16 xl:py-32",
          )}
        >
          <div
            className={cn(
              "col-span-full xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18 row-start-1",
              "px-1",
              "select-none pointer-event-none",
            )}
          >
            <img src="/illustrations/faucet/bg.jpg" alt="" className="rounded-sm shadow-xl overflow-hidden" />
          </div>
          <main
            className={cn(
              "col-span-full xl:col-start-3 xl:col-span-16 3xl:col-start-5 3xl:col-span-16 row-start-1",
              "mt-20 z-2 flex flex-col gap-6",
              "faucet",
            )}
          >
            <section className={cn("flex flex-col items-center mb-14 text-white")}>
              <h1 className="text-5xl font-bold mb-6">Phala Testnet Faucet</h1>
              <p className="text-xl w-2/3 text-center leading-7">
                Experience hassle-free access to testnet tokens with our multi-chain faucet, designed to facilitate the use of Phat Contracts on the testnet networks we support.
              </p>
            </section>
            <AccountInfo />
            <SponsorList />
            <section
              className={cn(
                "bg-gray-700 border border-solid border-gray-600 rounded-sm shadow-xl p-8 pt-2 text-white",
              )}
            >
              <FAQ />
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
