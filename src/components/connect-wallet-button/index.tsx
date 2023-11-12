'use client'

import { useAtomValue } from 'jotai'
import { useShowAccountSelectModal } from './ConnectWalletModals'
export { default as ConnectWalletModals } from './ConnectWalletModals'
import { currentAccountAtom, useRestoreLastSelectedAccount } from './atoms'


export function ConnectWalletButton() {
  useRestoreLastSelectedAccount()
  const showAccountSelectModal = useShowAccountSelectModal()
  const currentAccount = useAtomValue(currentAccountAtom)
  return (
    <div className="inline-block">
      {
        currentAccount ? (
        <div>
          <span>{currentAccount.name}</span>
          <button
            className="text-blue-700 underline ml-1"
            onClick={showAccountSelectModal}
          >
            switch
          </button>
        </div>
        ) : (
          <button
            className="flex items-center justify-center border border-[#CBD5E0] font-semibold transition-all duration-200 ease-in-out leading-6 bg-white text-[#4A5568] text-sm rounded-lg py-2.5 px-3 hover:bg-[#F1F4F9]"
            onClick={showAccountSelectModal}
          >
            Connect Wallet
          </button>
        )
      }
    </div>
  )
}
