import { type Atom } from 'jotai'
import { getClient, type OnChainRegistry } from '@phala/sdk'

import { atomWithConnectState, type ConnectState } from './atomWithConnectState'


export type ClientAtom = Atom<ConnectState<OnChainRegistry>>

/**
 * An atom factory function that creates an atom holding the OnChainRegistry instance.
 * The atom will automatically connect to the RPC endpoint when mounted.
 *
 * @param rpc The RPC endpoint to connect to.
 */
export function atomWithClient(rpc: string) {
  return atomWithConnectState(
    () => getClient({ transport: rpc }),
    { autoConnect: true }
  )
}

