'use client'

import React, { useState, type ReactNode } from 'react'
import { atom, useAtom, useSetAtom, useAtomValue } from 'jotai'
import type { Struct, Vec, u8, u128, Result, Enum } from '@polkadot/types'
import {
  type PinkContractPromise,
  type PinkContractQuery,
  type PinkContractTx,
  unsafeGetAbiFromGitHubRepoByCodeHash,
} from '@phala/sdk'
import { FiSearch, FiLoader } from 'react-icons/fi'
import { LuX } from 'react-icons/lu'
import Identicon from '@polkadot/react-identicon'
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

import { atomWithClient } from '@/lib/phala-web/atomWithClient'
import { atomWithInjectedWallet } from '@/lib/phala-web/atomWithInjectedWallet'
import { atomWithPhatContract } from '@/lib/phala-web/atomWithPhatContract'

interface FaucetResult extends Struct {
  txId: Vec<u8>
  amount: u128
}

interface EvmCaller {
  compressedPubkey: string
  address: string
}

interface LiteralProvenResult {
  js_code_hash: string
  result: string
  signature: string
}

interface ProvenResult extends Struct {
  js_code_hash: Vec<u8>
  result: u128
  signature: Vec<u8>
}

interface FhatFaucetError extends Enum {}

type PhatFaucetContract = PinkContractPromise<
  {
    claim: PinkContractQuery<
      [EvmCaller | undefined],
      Result<FaucetResult, FhatFaucetError>
    >
    getProvenScore: PinkContractQuery<[], Result<u128, FaucetResult>>
    testProvenScript: PinkContractQuery<
      [string, EvmCaller | undefined, string],
      Result<ProvenResult, FhatFaucetError>
    >
    runProvenScript: PinkContractQuery<
      [string, EvmCaller | undefined],
      Result<ProvenResult, FhatFaucetError>
    >
    getProvenScripts: PinkContractQuery<[], Vec<Vec<u8>>>
  },
  {
    saveProvenScore: PinkContractTx<[LiteralProvenResult]>
  }
>

const phatRegistryAtom = atomWithClient(process.env.NEXT_PUBLIC_FAUCET_RPC!)

const injectedWalletAtom = atomWithInjectedWallet(
  'PhalaFaucet',
  phatRegistryAtom
)

const contractAtom = atomWithPhatContract<PhatFaucetContract>(
  {
    contractId: process.env.NEXT_PUBLIC_FAUCET_CONTRACT_ID!,
    loadAbi: () =>
      unsafeGetAbiFromGitHubRepoByCodeHash(
        process.env.NEXT_PUBLIC_FAUCET_CODE_HASH!
      ),
  },
  phatRegistryAtom,
  injectedWalletAtom
)

//
//
//

interface AccountClaimState {
  balance: number
  score: number
}

const accountClaimStateAtom = atom<AccountClaimState>({ balance: 0, score: 0 })

type ClaimActions =
  | {
      type: 'claim'
    }
  | {
      type: 'update'
    }

interface PartialAccountQueryResult extends Struct {
  data: {
    free: u128
  }
}

const claimAtom = atom(
  (get) => get(accountClaimStateAtom),
  async (get, set, action: ClaimActions) => {
    const registryState = get(phatRegistryAtom)
    const { provider } = get(injectedWalletAtom)
    const contractState = get(contractAtom)
    if (!registryState.connected) {
      console.error('registry not connected')
      return
    }
    if (!contractState.connected) {
      console.error('contract not connected')
      return
    }
    if (!provider) {
      console.error('provider not connected')
      return
    }
    const phatRegistry = registryState.instance
    const contract = contractState.instance

    if (action.type === 'claim') {
      const evmCaller =
        provider.name === 'evmAccountMapping' ? provider.evmCaller : undefined
      const { output: result } = await contract.q.claim<
        Result<FaucetResult, FhatFaucetError>
      >({ args: [evmCaller] })
      return result
    } else if (action.type === 'update') {
      const { output: result } = await contract.q.getProvenScore<
        Result<u128, FaucetResult>
      >()
      const account =
        await phatRegistry.api.query.system.account<PartialAccountQueryResult>(
          provider.address
        )
      set(accountClaimStateAtom, {
        balance: Number(account.data.free.toBigInt() / BigInt(1e12)),
        score: result.asOk.asOk.toNumber(),
      })
    }
  }
)

//
//
//

interface ProvenItem {
  poster: string
  title: string
  sponsorName: string
  description: string
  amount: number
  js_code: string
}

const provenItems: ProvenItem[] = [
  {
    poster: '/illustrations/faucet/sponsor-placeholder-01.jpg',
    title: 'PhalaWorld NFT Holder',
    sponsorName: 'PhalaWorld',
    description:
      'If you own a PhalaWorld NFT, you can get 100 extra test-PHA everyday.',
    amount: 1000,
    js_code:
      '(()=>{"use strict";var t={730:(t,e)=>{}},e={};function s(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,s),n.exports}(()=>{s(730);globalThis.scriptOutput=function(t,e){const s=JSON.parse(t),r=JSON.parse(e),o=JSON.stringify({json:{owner:s.ss58_address,collectionIds:[2]}}),n=pink.httpRequest({url:`${r.PW_API_URL}/rpc/nfts.list?input=${encodeURIComponent(o)}`,method:"GET",headers:{"User-Agent":"phat-contract"},returnTextBody:!0});if(200!==n.statusCode)throw console.log("Bad Request:",n.body),new Error("Bad Request");const a=JSON.parse(n.body);return(a?.result?.data?.json?.items?.length||0)>0?100:0}.apply(null,globalThis.scriptArgs)})()})();',
  },
  {
    poster: '/illustrations/faucet/sponsor-placeholder-02.jpg',
    title: 'Web3 Social Pioneer',
    sponsorName: 'AirStack',
    description:
      'If you have a Lens Profile, you can get 1000 extra test-PHA everyday. Powered By AirStack',
    amount: 1000,
    js_code:
      '(()=>{"use strict";var e={730:(e,t)=>{}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(()=>{r(730);function e(e){for(var t="",r=0;r<e.length;r++)t+=e.charCodeAt(r).toString(16);return"0x"+t}globalThis.scriptOutput=function(t,r){const n=JSON.parse(t),s=JSON.parse(r);if(!n.evm_address)return 0;const o=JSON.stringify({query:`\n      query MyQuery {\n        Socials(\n          input: {filter: {identity: {_eq: "${n.evm_address}"}}, blockchain: ethereum}\n        ) {\n          Social {\n            dappName\n            profileName\n            profileDisplayName\n            userAddress\n            userAssociatedAddresses\n          }\n        }\n      }\n    `}),a=pink.httpRequest({url:"https://api.airstack.xyz/gql",method:"POST",headers:{"Content-Type":"application/json","User-Agent":"phat-contract",Authorization:s.AIRSTACK_API_KEY},body:e(o),returnTextBody:!0});if(200!==a.statusCode)throw console.log("Bad Request:",a.statusCode),new Error("Bad Request");const i=JSON.parse(a.body);return(i?.data?.Socials?.Social||[]).length>0?1e3:0}.apply(null,globalThis.scriptArgs)})()})();',
  },
]

const formatter = new Intl.NumberFormat('en-US')

const currentSponsorAtom = atom<ProvenItem | null>(null)

function SponsorDetailModal() {
  const [running, setRunning] = useState(false)
  const contractState = useAtomValue(contractAtom)
  const { provider } = useAtomValue(injectedWalletAtom)
  const [currentSponsor, setCurrentSponsor] = useAtom(currentSponsorAtom)
  const isReady = !(!contractState.connected || !provider || !currentSponsor)
  return (
    <Dialog
      open={!!currentSponsor}
      onOpenChange={() => setCurrentSponsor(null)}
    >
      <DialogContent className={cn('max-w-5xl')}>
        <div className="flex flex-col gap-6 mt-14 px-3">
          <div className="w-full h-[180px] rounded-xs overflow-hidden flex">
            <img
              src={currentSponsor?.poster}
              alt=""
              className="object-cover w-full"
            />
          </div>
          <header>
            <h2 className="text-xl font-bold">{currentSponsor?.title}</h2>
            <p className="font-medium text-black-200 mt-2">
              Powered by {currentSponsor?.sponsorName}
            </p>
          </header>
          <div>
            <p>{currentSponsor?.description}</p>
          </div>
          <div>
            <a
              href="#"
              className={cn(
                'text-phatGreen-400 border-b border-solid border-phatGreen-400',
                'transition-all',
                'hover:text-phatGreen-300 hover:border-phatGreen-300'
              )}
            >
              Check the source code
            </a>
          </div>
          <div>
            <button
              className="btn btn-primary btn-phat btn-xl text-sm font-bold leading-none tracking-wide"
              disabled={!isReady || running}
              onClick={async () => {
                try {
                  setRunning(true)
                  if (!isReady) {
                    return
                  }
                  const contract = contractState.instance
                  const evmCaller =
                    provider.name === 'evmAccountMapping'
                      ? provider.evmCaller
                      : undefined
                  const { output: result } = await contract.q.runProvenScript<
                    Result<ProvenResult, FhatFaucetError>
                  >({ args: [currentSponsor.js_code, evmCaller] })
                  if (
                    result.isOk &&
                    result.asOk.isOk &&
                    result.asOk.asOk.result.toNumber() > 0
                  ) {
                    await contract.exec.saveProvenScore({
                      args: [result.asOk.asOk],
                    })
                    return
                  }
                } finally {
                  setRunning(false)
                }
              }}
            >
              {running ? (
                <FiLoader className="animate-spin text-xl font-normal" />
              ) : (
                'Check Eligibility'
              )}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function SponsorItem({ info }: { info: ProvenItem }) {
  const [running, setRunning] = useState(false)
  const contractState = useAtomValue(contractAtom)
  const { provider } = useAtomValue(injectedWalletAtom)
  const isReady = !!(contractState.connected && provider)
  const setCurrentSponsor = useSetAtom(currentSponsorAtom)
  return (
    <div className="border border-solid border-gray-600 rounded-xs">
      <div className="p-4">
        <img src={info.poster} alt="" className="mb-4 rounded-xs" />
        <h4 className="text-lg font-bold mb-2 tracking-wide">{info.title}</h4>
        <div className="h-16 overflow-y-scroll text-sm text-black-200 leading-6">
          <p>{info.description}</p>
        </div>
        <div>
          <span className="text-sm text-white bg-orange-300 px-4 py-1.5 rounded-xs">
            + {formatter.format(info.amount)} test-PHA
          </span>
        </div>
      </div>
      <div className="p-4 border-t border-solid border-gray-600 flex flex-row justify-between items-center">
        <button
          className="btn btn-primary btn-phat rounded-xs px-4 py-2.5 text-sm font-bold leading-none tracking-wide"
          disabled={!isReady || running}
          onClick={async () => {
            try {
              setRunning(true)
              if (!isReady) {
                return
              }
              const contract = contractState.instance
              const evmCaller =
                provider.name === 'evmAccountMapping'
                  ? provider.evmCaller
                  : undefined
              const { output: result } = await contract.q.runProvenScript<
                Result<ProvenResult, FhatFaucetError>
              >({ args: [info.js_code, evmCaller] })
              if (
                result.isOk &&
                result.asOk.isOk &&
                result.asOk.asOk.result.toNumber() > 0
              ) {
                await contract.exec.saveProvenScore({
                  args: [result.asOk.asOk],
                })
                return
              }
            } finally {
              setRunning(false)
            }
          }}
        >
          {running ? (
            <FiLoader className="animate-spin text-xl font-normal" />
          ) : (
            'Check Eligibility'
          )}
        </button>
        <button
          className="btn btn-phat rounded-full p-0 w-10 h-10 flex items-center justify-center"
          onClick={() => setCurrentSponsor(info)}
        >
          <FiSearch className="text-xl" />
        </button>
      </div>
    </div>
  )
}

/**
 * Wallet select
 */

const walletModalVisibleAtom = atom(false)

function WalletButton({
  onClick,
  installed,
  version,
  active,
  children,
}: {
  onClick: () => void
  installed?: boolean
  version?: string
  active?: boolean
  children: ReactNode
}) {
  return (
    <button
      className={cn(
        'flex flex-row items-bottom justify-between py-2 px-4 rounded w-full',
        'border border-solid border-transparent hover:border-gray-600 hover:bg-gray-600',
        'transform-gpu transition-all',
        !installed && 'text-gray-500 hover:text-gray-200 hover:cursor-alias',
        active && 'border-phat-400 bg-phat-400/70 text-white'
      )}
      onClick={onClick}
    >
      <div className="flex flex-row items-center gap-2">{children}</div>
      {installed ? (
        <div className="text-sm text-gray-300">{version}</div>
      ) : null}
    </button>
  )
}

function WalletModal() {
  const [visible, setVisible] = useAtom(walletModalVisibleAtom)
  const [
    { wallets, accounts, lastSelectedWallet, lastSelectedAccount, isReady },
    dispatch,
  ] = useAtom(injectedWalletAtom)
  const [selected, setSelected] = useState('')
  const sendContractAction = useSetAtom(contractAtom)
  return (
    <Dialog open={visible} onOpenChange={(open) => setVisible(open)}>
      <DialogContent className={cn('max-w-4xl')}>
        <DialogHeader className="flex flex-row justify-between items-center">
          <DialogTitle>Connect a Wallet</DialogTitle>
          <DialogClose className="relative -top-1">
            <LuX className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        {lastSelectedAccount && !isReady ? (
          <div className="flex flex-row items-center justify-stretch gap-2.5 py-2 px-4 rounded w-full border border-solid border-gray-600">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Identicon
                size={40}
                value={lastSelectedAccount}
                theme={
                  lastSelectedWallet === 'ethereum' ? 'ethereum' : 'polkadot'
                }
              />
            </div>
            <div className="flex flex-col">
              <span className="tracking-wide">{lastSelectedAccount}</span>
              <code className="font-light text-xs font-mono text-gray-400 tracking-wider">
                {lastSelectedWallet}
              </code>
            </div>
            <button
              className={cn('btn btn-phat btn-sm rounded-lg', 'ml-auto')}
              onClick={async () => {
                try {
                  await dispatch({ type: 'restore' })
                  sendContractAction({ type: 'connect' })
                  setVisible(false)
                } catch (_err) {}
              }}
            >
              restore
            </button>
          </div>
        ) : null}
        <div className="flex flex-row gap-8">
          <div className="py-2">
            <ul className="flex flex-col gap-2.5 min-w-[16rem]">
              <li>
                <WalletButton
                  installed={
                    !!(
                      typeof window !== 'undefined' && (window as any)?.ethereum
                    )
                  }
                  active={
                    selected
                      ? 'ethereum' === selected
                      : 'ethereum' === lastSelectedWallet
                  }
                  onClick={async () => {
                    try {
                      await dispatch({ type: 'signinWithEthereum' })
                      sendContractAction({ type: 'connect' })
                      setVisible(false)
                    } catch (_err) {}
                  }}
                >
                  <img
                    src="/illustrations/faucet/metamask.png"
                    alt=""
                    className="w-6"
                  />
                  MetaMask
                  <span className="ml-2 rounded-xs bg-phalaPurple-400 text-white text-xs font-medium px-4">
                    BETA
                  </span>
                </WalletButton>
              </li>
              {wallets.map((wallet, idx) => (
                <li key={idx}>
                  <WalletButton
                    active={
                      selected
                        ? wallet.key === selected
                        : wallet.key === lastSelectedWallet
                    }
                    installed={wallet.installed}
                    version={wallet.version}
                    onClick={() => {
                      setSelected(wallet.key)
                      if (!wallet.installed) {
                        window.open(wallet.downloadUrl, '_blank')
                      } else {
                        dispatch({ type: 'setWallet', walletName: wallet.name })
                        sendContractAction({ type: 'connect' })
                      }
                    }}
                  >
                    <img src={wallet.icon} alt="" className="w-6" />
                    {wallet.name}
                  </WalletButton>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={cn(
              'border-l border-solid border-gray-600 h-80 w-full'
            )}
          >
            {selected ||
            (lastSelectedWallet && lastSelectedWallet !== 'ethereum') ? (
              <ul className="h-80 overflow-y-scroll px-4 w-full flex flex-col gap-0.5">
                {accounts.map((account, idx) => (
                  <li key={idx}>
                    <div
                      className={cn(
                        'flex flex-row items-center gap-4 py-2 px-4 rounded-xs w-full',
                        'border border-solid border-transparent text-white transition-all',
                        'hover:border-gray-600 hover:bg-gray-600',
                        account.address === lastSelectedAccount &&
                          'border-phat-400 bg-phat-400/70'
                      )}
                    >
                      <div className="relative">
                        <Identicon
                          size={40}
                          value={account.address}
                          theme="polkadot"
                        />
                      </div>
                      <button
                        className="flex flex-col items-start"
                        onClick={async () => {
                          try {
                            await dispatch({
                              type: 'setPolkadotAccount',
                              account,
                            })
                            setVisible(false)
                          } catch (_err) {}
                        }}
                      >
                        <span className="tracking-wide">{account.name}</span>
                        <code
                          className={cn(
                            'font-light text-xs font-mono text-gray-400 tracking-wider',
                            account.address === lastSelectedAccount &&
                              'text-white/60'
                          )}
                        >
                          {account.address}
                        </code>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h3 className="text-xl font-medium">What is a Wallet?</h3>
                <div className="flex flex-col gap-5">
                  <div>
                    <h4 className="text-lg font-medium mb-2">
                      A Home for your Digital Assets
                    </h4>
                    <p className="text-sm font-light text-gray-200">
                      Wallets are used to send, receive, store, and display
                      digital assets like Ethereum and NFTs.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">
                      A New Way to Log In
                    </h4>
                    <p className="text-sm font-light text-gray-200">
                      Instead of creating new accounts and passwords on every
                      website, just connect your wallet.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ConnectWallet() {
  const setVisible = useSetAtom(walletModalVisibleAtom)
  const [{ lastSelectedWallet, lastSelectedAccount }, dispatch] =
    useAtom(injectedWalletAtom)
  const sendContractAction = useSetAtom(contractAtom)
  if (lastSelectedWallet && lastSelectedAccount) {
    return (
      <div
        className={cn(
          'flex flex-row items-center justify-stretch gap-2.5 py-2 px-4 rounded-xs w-full max-w-2xl',
          'bg-white/90 border border-solid border-gray-600'
        )}
      >
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Identicon
            size={40}
            value={lastSelectedAccount}
            theme={lastSelectedWallet === 'ethereum' ? 'ethereum' : 'polkadot'}
          />
        </div>
        <div className="flex flex-col">
          <span className="tracking-wide">{lastSelectedAccount}</span>
          <code className="font-light text-xs font-mono text-gray-400 tracking-wider">
            {lastSelectedWallet}
          </code>
        </div>
        <button
          className={cn('btn btn-primary btn-phat btn-sm', 'ml-auto')}
          onClick={async () => {
            try {
              await dispatch({ type: 'restore' })
              sendContractAction({ type: 'connect' })
            } catch (_err) {}
          }}
        >
          Connect
        </button>
      </div>
    )
  }
  return (
    <button
      className="btn btn-primary btn-xl btn-phat"
      onClick={() => setVisible(true)}
    >
      Connect Wallet
    </button>
  )
}

//
//
//

export function AccountInfo() {
  const registryState = useAtomValue(phatRegistryAtom)
  const { provider } = useAtomValue(injectedWalletAtom)
  const setVisible = useSetAtom(walletModalVisibleAtom)
  const sendClaimAction = useSetAtom(claimAtom)
  const [isPending, setIsPending] = useState(false)
  const [result, setResult] = useState<[boolean, string] | null>(null)
  return (
    <>
      {provider ? (
        <section className="bg-gray-700 border border-solid border-gray-600 rounded-xs shadow-xl p-8 text-white">
          <div className="flex flex-row gap-4 items-center">
            <div
              className={cn(
                'px-4 py-2.5 border border-solid border-gray-500 rounded-xs bg-gray-600 grow leading-none',
                'flex items-center justify-between'
              )}
            >
              <span className="tracking-wider font-mono">
                {provider.address}
              </span>
              <button
                className="btn btn-phat px-6 btn-sm relative -mr-2"
                disabled={!registryState.connected}
                onClick={() => setVisible(true)}
              >
                Switch Wallet
              </button>
            </div>
            <div>
              <button
                className="btn btn-primary btn-phat btn-lg"
                onClick={async () => {
                  try {
                    setIsPending(true)
                    const result = await sendClaimAction({ type: 'claim' })
                    if (result?.isOk && result?.asOk?.isOk) {
                      setResult([true, result?.asOk?.asOk?.txId.toString()])
                    } else if (result?.isErr) {
                      setResult([false, `${result?.asErr?.toHuman()}`])
                    } else if (result?.asOk?.isErr) {
                      setResult([false, `${result?.asOk?.asErr?.toHuman()}`])
                    } else {
                      console.error(result?.toHuman())
                      setResult([false, `Unknown Error`])
                    }
                  } finally {
                    setIsPending(false)
                  }
                }}
              >
                {isPending ? (
                  <FiLoader className="animate-spin text-xl font-normal" />
                ) : (
                  'Send Me PHA'
                )}
              </button>
            </div>
          </div>
          {provider.name === 'evmAccountMapping' ? (
            <div className="mt-2 text-sm text-gray-300">
              Mapping from Ethereum Address{' '}
              <code className="ml-1.5">{provider.evmAccount.address}</code>
            </div>
          ) : null}
          {result && result[0] ? (
            <div className="mt-6 bg-phatGreen-600 p-4 rounded-xs">
              Your test-PHA has been sent.
              <a
                href={`https://poc6-statescan.phala.network/extrinsics/${result[1]}`}
                target="_blank"
                className="ml-2 border-b border-solid border-phatGreen-400"
              >
                View on Explorer
              </a>
            </div>
          ) : null}
        </section>
      ) : (
        <div className="flex flex-row justify-center mb-20">
          <ConnectWallet />
        </div>
      )}
      <WalletModal />
    </>
  )
}

export function SponsorList() {
  const { provider } = useAtomValue(injectedWalletAtom)
  if (!provider) {
    return null
  }
  return (
    <section
      className={cn(
        'bg-gray-700 border border-solid border-gray-600 rounded-xs shadow-xl p-8 text-white'
      )}
    >
      <header>
        <h3>Sponsors</h3>
      </header>
      <main className="grid grid-cols-3 gap-6">
        <SponsorItem info={provenItems[0]} />
        <SponsorItem info={provenItems[1]} />
      </main>
      <SponsorDetailModal />
    </section>
  )
}
