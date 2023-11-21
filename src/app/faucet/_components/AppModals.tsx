'use client'

import { useCallback } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'

import {
  WalletSelectModal,
  AccountSelectModal,
} from './AccountSelectModal'
import {
  walletSelectModalVisibleAtom,
  accountSelectModalVisibleAtom,
  lastSelectedWeb3ProviderAtom,
} from './atoms'

export const useShowAccountSelectModal = () => {
  const setWalletSelectModalVisible = useSetAtom(walletSelectModalVisibleAtom)
  const setAccountSelectModalVisible = useSetAtom(accountSelectModalVisibleAtom)
  const currentProvider = useAtomValue(lastSelectedWeb3ProviderAtom)
  return useCallback(() => {
    if (currentProvider) {
      setAccountSelectModalVisible(true)
    } else {
      setWalletSelectModalVisible(true)
    }
  }, [
    setWalletSelectModalVisible,
    setAccountSelectModalVisible,
    currentProvider,
  ])
}

export default function AppModals() {
  return (
    <>
      <WalletSelectModal
        visibleAtom={walletSelectModalVisibleAtom}
        accountSelectModalVisibleAtom={accountSelectModalVisibleAtom}
      />
      <AccountSelectModal
        visibleAtom={accountSelectModalVisibleAtom}
        walletSelectModalVisibleAtom={walletSelectModalVisibleAtom}
      />
    </>
  )
}
