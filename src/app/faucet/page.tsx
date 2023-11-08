import AppModals from './_components/AppModals'
import ConnectWalletButton from './_components/ConnectWalletButton'
import GetPhaButton from './_components/GetPhaButton'
import { Toaster } from '@/components/ui/toaster'

export default function Page() {
  return (
    <>
      <AppModals />
      <Toaster />
      <div className="min-h-screen safe-viewport grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24 bg-[#F1F4F9]">
        <div className="cols-span-1 xl:col-start-5 xl:col-span-12 3xl:col-start-6 3xl:col-span-14">
          <div className="py-40 w-full h-full px-4 flex flex-col gap-10">
            <div className="flex flex-col gap-5 text-center">
              <h1 className="font-semibold text-3xl text-[#202327]">
                Get Test-PHA on the testnet
              </h1>
              <h2 className="font-normal text-base leading-6 text-op-neutral-600 px-24 text-[#68778D]">Phala faucet offers developers Test-PHA for building applications</h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-lg">
                <div className="border-b border-[#CBD5E0] flex flex-col items-start p-10 gap-6">
                  <div>
                    <span className="font-bold text-lg leading-7">Verify your identity</span>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col p-4 gap-4 rounded-lg bg-[#F1F4F9]">
                      <div className="flex flex-col gap-1 flex-grow">
                        <div>
                          <span className="font-semibold text-base leading-6">Get up to 100 Test-PHA</span>
                        </div>
                        <div>
                          <span className="font-normal text-base leading-6 text-[#68778D]">Verify with your polkadot wallet to get up to 100 Test-PHA every 24 hours.</span>
                        </div>
                      </div>
                      <div>
                        <ConnectWalletButton />
                      </div>
                      <div>
                        <GetPhaButton />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start p-10 gap-1">
                  <div>
                    <span className="font-bold text-lg leading-7">Claim testnet PHA</span>
                  </div>
                  <div>
                    <span className="font-normal text-base leading-6">Once you verify your identity, you will be able to claim testnet funds from the faucet once every 24 hours.</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg">
                <div className="border-b border-[#CBD5E0] py-4 px-10">
                  <span className="font-bold text-lg leading-7">FAQ</span>
                </div>
                <details className="px-10 border-b border-[#CBD5E0]">
                  <summary className="py-4 cursor-pointer">
                    What is a testnet faucet?
                  </summary>
                  <div className="pb-4">
                    A testnet faucet is a way for developers to receive free tokens that can be used to interact with Phat Contracts on testnets.
                  </div>
                </details>
                <details className="px-10">
                  <summary className="py-4 cursor-pointer">
                    How does the Phala faucet work?
                  </summary>
                  <div className="pb-4">
                    The Phala Faucet offers developers free Test-PHA to test their applications. To access these funds, developers can authenticate using their onchain identity. Once authenticated, they can claim up to 100 Test-PHA from the faucet every 24 hours.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
