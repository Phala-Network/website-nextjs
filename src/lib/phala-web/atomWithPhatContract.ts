import { getContract, type AbiLike } from '@phala/sdk'

import { type ClientAtom } from './atomWithClient'
import { atomWithConnectState } from './atomWithConnectState'

export interface AtomWithPhatContractOptions {
  contractId: string,
  loadAbi: () => Promise<AbiLike>
}

export function atomWithPhatContract<T>(options: AtomWithPhatContractOptions, clientAtom: ClientAtom) {
  return atomWithConnectState<T>(
    async (get) => {
      const clientState = get(clientAtom)
      if (!clientState.connected) {
        console.error('registry not connected')
        return
      }
      const abi = await options.loadAbi()
      return await getContract({
        client: clientState.instance,
        contractId: options.contractId,
        abi,
      }) as T
    }
  )
}

