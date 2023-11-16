'use client'

import React, { useState, useEffect } from 'react'
import { atom, useAtom, useAtomValue, type Getter } from 'jotai'
import type { Struct, Vec, u8, u128, Result, Enum } from '@polkadot/types'
import { VscLoading } from "react-icons/vsc"
import {
  getClient,
  getContract,
  unstable_EvmAccountMappingProvider,
  unstable_UIKeyringProvider,
  type AnyProvider,
  type PinkContractPromise,
  type PinkContractQuery,
  type PinkContractTx,
  type InjectedAccount,
} from '@phala/sdk'
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { cn } from '@/lib/utils'


///

type ConnectState<TInstance = unknown> = {
  connected: false
  connecting: false
  instance?: null | undefined
} | {
  connected: false
  connecting: true
  instance?: null | undefined
} | {
  connected: true
  connecting: false
  instance: TInstance
}

interface AtomWithConnectStateOptions {
  autoConnect?: boolean
}

function atomWithConnectState<
  T
>(
  connect: (get: Getter) => Promise<T | undefined | null>,
  options?: AtomWithConnectStateOptions
) {
  const innerAtom = atom<ConnectState<T>>({ connected: false, connecting: false, instance: null })
  const outerAtom = atom(
    get => get(innerAtom),
    async (get, set, action: { type: 'connect' }) => {
      if (action.type === 'connect') {
        set(innerAtom, { connected: false, connecting: true, instance: null })
        const instance = await connect(get)
        if (!instance) {
          set(innerAtom, { connected: false, connecting: false, instance: null })
        } else {
          set(innerAtom, { connected: true, connecting: false, instance })
        }
      }
    }
  )
  if (options?.autoConnect) {
    outerAtom.onMount = (set) => {
      if (typeof window !== 'undefined') {
        set({ type: 'connect' })
      }
    }
  }
  return outerAtom
}

///

const phatRegistryAtom = atomWithConnectState(
  async () => {
    const rpc = 'ws://10.0.0.120:19944' 
    const metadata = await fetch(`/api/rpc-metadata?rpc=${rpc}`).then(res => res.json()) as Record<string, `0x${string}`>
    return await getClient({ transport: rpc, metadata })
  },
  { autoConnect: true }
)

const injectedPolkadotWalletsAtom = atomWithConnectState(
  () => unstable_UIKeyringProvider.getSupportedWallets(),
  { autoConnect: true }
)

type AccountActions =
  { type: 'setWallet', walletName: string }
  | { type: 'setPolkadotAccount', account: InjectedAccount }
  | { type: 'signinWithEthereum' }


const _currentWalletAtom = atom('')
const _accountListAtom = atom<InjectedAccount[]>([])
const _providerAtom = atom<AnyProvider | null>(null)

const accountListAtom = atom(
  get => {
    return {
      items: get(_accountListAtom),
      currentProvider: get(_providerAtom),
    }
  },
  async (get, set, action: AccountActions) => {
    const injectedPolkadotWallets = get(injectedPolkadotWalletsAtom)
    if (!injectedPolkadotWallets.connected) {
      console.error('injectedPolkadotWallets not connected')
      return
    }
    const registry = get(phatRegistryAtom)
    if (!registry.connected && (action.type === 'signinWithEthereum' || action.type === 'setPolkadotAccount')) {
      console.error('registry not connected')
      return
    }

    if (action.type === 'setWallet') {
      const wallet = injectedPolkadotWallets.instance.find(wallet => wallet.name === action.walletName)
      if (!wallet) {
        console.error('wallet not found')
        return
      }
      const accounts = await unstable_UIKeyringProvider.getAllAccountsFromProvider('PhalaWebsite', wallet?.key ?? '')
      set(_currentWalletAtom, wallet.key)
      set(_accountListAtom, accounts)
    }
    else if (action.type === 'setPolkadotAccount') {
      const instance = await unstable_UIKeyringProvider.create(registry.instance!.api, 'PhalaWebsite', get(_currentWalletAtom), action.account)
      await instance.signCertificate()
      set(_providerAtom, instance)
    }
    else if (action.type === 'signinWithEthereum') {
      const client = createWalletClient({ chain: mainnet, transport: custom((window as any).ethereum) })
      const [address] = await client.requestAddresses()
      const instance = await unstable_EvmAccountMappingProvider.create(registry.instance!.api, client, { address })
      await new Promise(resolve => setTimeout(resolve, 400))
      await instance.signCertificate()
      set(_providerAtom, instance)
    }
  }
)

//
//
//

interface FaucetResult extends Struct {
  tx_id: Vec<u8>
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

interface FhatFaucetError extends Enum {
}

type PhatFaucetContract = PinkContractPromise<{
  claim: PinkContractQuery<[EvmCaller | undefined], FaucetResult>
  getProvenScore: PinkContractQuery<[], Result<u128, FaucetResult>>
  testProvenScript: PinkContractQuery<[string, EvmCaller | undefined, string], Result<ProvenResult, FhatFaucetError>>
  runProvenScript: PinkContractQuery<[string, EvmCaller | undefined], Result<ProvenResult, FhatFaucetError>>
  getProvenScripts: PinkContractQuery<[], Vec<Vec<u8>>>
}, {
  saveProvenScore: PinkContractTx<[LiteralProvenResult]>
}>

const contractAtom = atomWithConnectState(
  async (get) => {
    const registryState = get(phatRegistryAtom)
    if (!registryState.connected) {
      console.error('registry not connected')
      return
    }
    const response = await fetch('/phala_faucet.json')
    const abi = await response.text()
    return await getContract({
      client: registryState.instance,
      contractId: '0x594552c84410a7fadf77b75ba6e44e16702df5cfea16a2e2065257c5b03cb390',
      abi,
    }) as PhatFaucetContract
  }
)

interface AccountClaimState {
  balance: number
  score: number
}

const accountClaimStateAtom = atom<AccountClaimState>({ balance: 0, score: 0 })

type ClaimActions = {
  type: 'claim'
} | {
  type: 'update'
}

interface PartialAccountQueryResult extends Struct {
  data: {
    free: u128
  }
}

const claimAtom = atom(
  get => get(accountClaimStateAtom),
  async (get, set, action: ClaimActions) => {
    const registryState = get(phatRegistryAtom)
    const { currentProvider } = get(accountListAtom)
    const contractState = get(contractAtom)
    if (!registryState.connected) {
      console.error('registry not connected')
      return
    }
    if (!contractState.connected) {
      console.error('contract not connected')
      return
    }
    if (!currentProvider) {
      console.error('provider not connected')
      return
    }
    const phatRegistry = registryState.instance
    const provider = currentProvider
    const contract = contractState.instance

    if (action.type === 'claim') {
      const cert = await provider.signCertificate()
      const evmCaller = provider.name === 'evmAccountMapping' ? provider.evmCaller : undefined
      const { output: result } = await contract.query.claim(cert.address, { cert }, evmCaller)
      console.log(result.toHuman())
    } else if (action.type === 'update') {
      const cert = await provider.signCertificate()
      const { output: result } = await contract.query.getProvenScore(cert.address, { cert })
      const account = await phatRegistry.api.query.system.account<PartialAccountQueryResult>(provider.address)
      set(accountClaimStateAtom, { balance: Number(account.data.free.toBigInt() / BigInt(1e12)), score: result.asOk.asOk.toNumber() })
    }
  }
)

//
//
//

function ConnectWalletForm() {
  const polkadotWallets = useAtomValue(injectedPolkadotWalletsAtom)
  const [account, dispatchAccountAction] = useAtom(accountListAtom)
  return (
    <div className={cn("flex flex-row")}>
      <aside className="border-r border-gray-100 pr-4 mr-4">
        <h4 className="text-lg font-medium">Connect a Wallet</h4>
        <ul className="flex flex-col gap-2">
          <li>
            <button onClick={() => dispatchAccountAction({ type: 'signinWithEthereum' })}>
              MetaMask
            </button>
          </li>
          {polkadotWallets.connected ? (
            <>
              {polkadotWallets.instance.map((wallet, idx) => (
                <li key={idx}>
                  <button onClick={() => dispatchAccountAction({ type: 'setWallet', walletName: wallet.name })}>{wallet.name}</button>
                </li>
              ))}
            </>
          ) : (
            <div className="w-full flex items-center justify-center"><VscLoading className="animate-spin" /></div>
          )}
        </ul>
      </aside>
      <main>
        {account.items.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {account.items.map((account, idx) => (
              <li key={idx}>
                <button onClick={() => dispatchAccountAction({ type: 'setPolkadotAccount', account })}>{account.name}</button>
              </li>
            ))}
          </ul>
        ) : null}
      </main>
    </div>
  )
}


function ClaimTestPhaButton() {
  const [state, dispatch] = useAtom(claimAtom)
  const { currentProvider } = useAtomValue(accountListAtom)
  const [contractState, contractDispatch] = useAtom(contractAtom)
  useEffect(() =>{
    if (currentProvider) {
      contractDispatch({ type: 'connect' })
    }
  }, [currentProvider, contractDispatch])
  return (
    <div>
      <button
        className="btn btn-phatGreen"
        disabled={!currentProvider || !contractState.connected}
        onClick={async () => await dispatch({ type: 'claim' })}
      >
        Claim
      </button>
      <button
        className="btn btn-phatGreen"
        disabled={!currentProvider || !contractState.connected}
        onClick={async () => {
          await dispatch({ type: 'update' })
        }}
      >
        Refresh
      </button>
      <br />
      <pre>{JSON.stringify(state)}</pre>
    </div>
  )
}

//
//
//

interface ProvenItem {
  title: string
  description: string
  js_code: string
}

const provenItems: ProvenItem[] = [
  {
    title: 'PhalaWorld NFT Owner',
    description: 'If you own a PhalaWorld NFT, you can get 100 extra test-PHA everyday.',
    js_code: '(()=>{"use strict";var t={730:(t,e)=>{}},e={};function s(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,s),n.exports}(()=>{s(730);globalThis.scriptOutput=function(t,e){const s=JSON.parse(t),r=JSON.parse(e),o=JSON.stringify({json:{owner:s.ss58_address,collectionIds:[2]}}),n=pink.httpRequest({url:`${r.PW_API_URL}/rpc/nfts.list?input=${encodeURIComponent(o)}`,method:"GET",headers:{"User-Agent":"phat-contract"},returnTextBody:!0});if(200!==n.statusCode)throw console.log("Bad Request:",n.body),new Error("Bad Request");const a=JSON.parse(n.body);return(a?.result?.data?.json?.items?.length||0)>0?100:0}.apply(null,globalThis.scriptArgs)})()})();',
  },
  {
    title: "Web3 Social-Fi Pioneer",
    description: 'If you have a Lens Profile, you can get 1000 extra test-PHA everyday. Powered By AirStack',
    js_code: '(()=>{"use strict";var e={730:(e,t)=>{}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(()=>{r(730);function e(e){for(var t="",r=0;r<e.length;r++)t+=e.charCodeAt(r).toString(16);return"0x"+t}globalThis.scriptOutput=function(t,r){const n=JSON.parse(t),s=JSON.parse(r);if(!n.evm_address)return 0;const o=JSON.stringify({query:`\n      query MyQuery {\n        Socials(\n          input: {filter: {identity: {_eq: "${n.evm_address}"}}, blockchain: ethereum}\n        ) {\n          Social {\n            dappName\n            profileName\n            profileDisplayName\n            userAddress\n            userAssociatedAddresses\n          }\n        }\n      }\n    `}),a=pink.httpRequest({url:"https://api.airstack.xyz/gql",method:"POST",headers:{"Content-Type":"application/json","User-Agent":"phat-contract",Authorization:s.AIRSTACK_API_KEY},body:e(o),returnTextBody:!0});if(200!==a.statusCode)throw console.log("Bad Request:",a.statusCode),new Error("Bad Request");const i=JSON.parse(a.body);return(i?.data?.Socials?.Social||[]).length>0?1e3:0}.apply(null,globalThis.scriptArgs)})()})();',
  }
]



function QuestItem({ info }: { info: ProvenItem }) {
  const [running, setRunning] = useState(false)
  const contractState = useAtomValue(contractAtom)
  const { currentProvider } = useAtomValue(accountListAtom)
  if (!contractState.connected || !currentProvider) {
    return null
  }
  const contract = contractState.instance
  return (
    <div>
      <h4>{info.title}</h4>
      <div>
        <p>{info.description}</p>
        <button
          className="btn btn-phatGreen"
          disabled={running}
          onClick={async () => {
            try {
              const cert = await currentProvider.signCertificate()
              const evmCaller = currentProvider.name === 'evmAccountMapping' ? currentProvider.evmCaller : undefined
              const { output: result } = await contract.query.runProvenScript(cert.address, { cert }, info.js_code, evmCaller)
              if (result.isOk && result.asOk.isOk && result.asOk.asOk.result.toNumber() > 0) {
                await contract.send.saveProvenScore({ address: cert.address, cert, unstable_provider: currentProvider }, result.asOk.asOk)
                console.log('claimed', result.asOk.asOk.toJSON())
                return
              }
              console.log('wtf', result.toHuman())
              setRunning(true)
            } finally {
              setRunning(false)
            }
          }}
        >
          {running ? 'running...' : 'claim'}
        </button>
      </div>
    </div>
  )
}


//
//
//


export function ClaimDashboard() {
  const [registryState, dispatch] = useAtom(phatRegistryAtom)
  return (
    <div>
      <div className="py-6 my-4 border-b border-gray-500">
        <button
          className="btn btn-phat"
          disabled={registryState.connecting || registryState.connected}
          onClick={async () => {
            dispatch({ type: 'connect' })
          }}
        >
          {registryState.connected ? 'connected' : 'connect'}
        </button>
        {registryState.connecting ? 'connecting' : null}
      </div>
      <div className="py-6 my-4 border-b border-gray-500">
        <ConnectWalletForm />
      </div>
      <div className="py-6 my-4 border-b border-gray-500">
        <p>Claim</p>
        <ClaimTestPhaButton />
      </div>
      <div className="py-6 my-4 border-b border-gray-500">
        <p>Quests</p>
        <QuestItem info={provenItems[0]} />
        <QuestItem info={provenItems[1]} />
      </div>
    </div>
  )
}
