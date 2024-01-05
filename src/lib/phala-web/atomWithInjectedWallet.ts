import { atom, type WritableAtom } from 'jotai'
import {
  EvmAccountMappingProvider,
  UIKeyringProvider,
  type AnyProvider,
  type InjectedAccount,
} from '@phala/sdk'
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { atomWithStorage } from 'jotai/utils'

import { ClientAtom } from './atomWithClient'
import { atomWithConnectState } from './atomWithConnectState'


type Wallet = Awaited<ReturnType<typeof UIKeyringProvider.getSupportedWallets>>[number] & {
  installed?: boolean
  version?: string
}

interface InjectedWallet {
  wallets: Wallet[]
  accounts: InjectedAccount[]
  provider: AnyProvider | null
  lastSelectedWallet: string | null
  lastSelectedAccount: string | null
  isReady: boolean
}

type InjectedWalletActions =
  { type: 'setWallet', walletName: string }
  | { type: 'setPolkadotAccount', account: InjectedAccount }
  | { type: 'signinWithEthereum' }
  | { type: 'preload' }
  | { type: 'restore' }

export type InjectedWalletAtom = WritableAtom<InjectedWallet, [InjectedWalletActions], Promise<void>>

export function atomWithInjectedWallet(appName: string, clientAtom: ClientAtom) {
  //
  // internal atoms.
  //
  const walletsAtom = atomWithConnectState(
    () => UIKeyringProvider.getSupportedWallets(),
    { autoConnect: true }
  )

  const selectedWalletKeyAtom = atom('')

  const injectedAccountsAtom = atom<InjectedAccount[]>([])

  const currentProviderAtom = atom<AnyProvider | null>(null)

  const lastSelectedAtom = atomWithStorage<{
    wallet: string | null
    account: string | null
  }>(`${appName}::last-selected`, { wallet: null, account: null })

  //

  const _injectedWalletAtom = atom(
    get => {
      const lastSelected = get(lastSelectedAtom)
      const wallets = get(walletsAtom).instance || []
      const accounts = get(injectedAccountsAtom)
      const provider = get(currentProviderAtom)
      return {
        wallets,
        accounts,
        provider,
        lastSelectedWallet: lastSelected.wallet,
        lastSelectedAccount: lastSelected.account,
        isReady: !!provider,
      } as InjectedWallet
    },
    async (get, set, action: InjectedWalletActions) => {

      if (action.type === 'preload') {
        const seed = setInterval(async () => {
          const injectedWallets = get(walletsAtom)
          const registry = get(clientAtom)
          const selected = get(lastSelectedAtom)
          if (!injectedWallets.connected || !registry.connected) {
            return
          }
          clearInterval(seed)

          if (selected.wallet) {
            const wallet = injectedWallets.instance.find(wallet => wallet.key === selected.wallet)
            if (wallet) {
              const accounts = await UIKeyringProvider.getAllAccountsFromProvider(appName, wallet?.key ?? '')
              set(selectedWalletKeyAtom, wallet.key)
              set(injectedAccountsAtom, accounts)
            }
          }
        }, 500)
        return
      }

      const injectedWallets = get(walletsAtom)
      if (!injectedWallets.connected) {
        console.error('injectedPolkadotWallets not connected')
        return
      }
      const registry = get(clientAtom)
      if (!registry.connected) {
        console.error('registry not connected')
        return
      }

      if (action.type === 'restore') {
        const selected = get(lastSelectedAtom)
        if (!selected.wallet || !selected.account) {
          console.error('no last selected wallet/account')
          return
        }
        if (selected.wallet === 'ethereum') {
          const client = createWalletClient({ chain: mainnet, transport: custom((window as any).ethereum) })
          const [address] = await client.requestAddresses()
          const instance = await EvmAccountMappingProvider.create(registry.instance!.api, client, { address })
          await new Promise(resolve => setTimeout(resolve, 400))
          await instance.signCertificate()
          set(currentProviderAtom, instance)
        } else {
          const accounts = get(injectedAccountsAtom)
          const account = accounts.find(account => account.address === selected.account)
          if (account) {
            const instance = await UIKeyringProvider.create(registry.instance!.api, appName, selected.wallet, account)
            await instance.signCertificate()
            set(currentProviderAtom, instance)
          }
        }
      }
      else if (action.type === 'setWallet') {
        const wallet = injectedWallets.instance.find(wallet => wallet.name === action.walletName)
        if (!wallet) {
          console.error('wallet not found')
          return
        }
        const accounts = await UIKeyringProvider.getAllAccountsFromProvider(appName, wallet?.key ?? '')
        set(selectedWalletKeyAtom, wallet.key)
        set(injectedAccountsAtom, accounts)
      }
      else if (action.type === 'setPolkadotAccount') {
        const walletKey = get(selectedWalletKeyAtom)
        const instance = await UIKeyringProvider.create(registry.instance!.api, appName, walletKey, action.account)
        await instance.signCertificate()
        set(currentProviderAtom, instance)
        set(lastSelectedAtom, { wallet: walletKey, account: action.account.address })
      }
      else if (action.type === 'signinWithEthereum') {
        const client = createWalletClient({ chain: mainnet, transport: custom((window as any).ethereum) })
        const [address] = await client.requestAddresses()
        const instance = await EvmAccountMappingProvider.create(registry.instance!.api, client, { address })
        await new Promise(resolve => setTimeout(resolve, 400))
        await instance.signCertificate()
        set(currentProviderAtom, instance)
        set(lastSelectedAtom, { wallet: 'ethereum', account: address })
      } else {
        throw new Error(`Unknown action: ${action}`)
      }
    }
  )

  _injectedWalletAtom.onMount = (set) => {
    set({ type: 'preload' })
  }

  return _injectedWalletAtom
}

