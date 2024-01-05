import { atom, type Getter } from 'jotai'

export type ConnectState<TInstance = unknown> = {
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

export interface AtomWithConnectStateOptions {
  autoConnect?: boolean
}

export function atomWithConnectState<
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

