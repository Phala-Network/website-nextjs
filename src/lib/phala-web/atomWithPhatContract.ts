import { getContract, type AbiLike } from '@phala/sdk'

import { type ClientAtom } from './atomWithClient'
import { type InjectedWalletAtom } from './atomWithInjectedWallet'
import { atomWithConnectState } from './atomWithConnectState'

export interface AtomWithPhatContractOptions {
  contractId: string,
  loadAbi: () => Promise<AbiLike>
}

export function atomWithPhatContract<T>(options: AtomWithPhatContractOptions, clientAtom: ClientAtom, walletAtom: InjectedWalletAtom) {
  return atomWithConnectState<T>(
    async (get) => {
      const clientState = get(clientAtom)
      const injectedWallet = get(walletAtom)
      if (!clientState.connected || !injectedWallet.isReady || !injectedWallet.provider) {
        console.error('registry not connected')
        return
      }
      const abi = await options.loadAbi()
      return await getContract({
        client: clientState.instance,
        contractId: options.contractId,
        abi,
        provider: injectedWallet.provider,
      }) as T
    }
  )
}

