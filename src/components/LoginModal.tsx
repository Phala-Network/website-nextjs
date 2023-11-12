'use client'

import { useState } from 'react'
import {
  atom,
  useAtom,
  useAtomValue,
  type WritableAtom,
} from 'jotai'
import { stringToHex } from '@polkadot/util'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ConnectWalletButton } from '@/components/connect-wallet-button'
import { currentAccountAtom, signerAtom } from '@/components/connect-wallet-button/atoms'
import { useToast } from '@/components/ui/use-toast'

interface LoginModalProps {
  visibleAtom: WritableAtom<boolean, [boolean], boolean>
}

export const loginModalVisibleAtom = atom(
  false
) as unknown as WritableAtom<boolean, [boolean], boolean>

const LoginModal = ({
  visibleAtom,
}: LoginModalProps) => {
  const [visible, setVisible] = useAtom(visibleAtom)
  const [loading, setLoading] = useState(false)
  const currentAccount = useAtomValue(currentAccountAtom)
  const signer = useAtomValue(signerAtom)
  const { toast } = useToast()

  const handleLogin = async () => {
    if (!currentAccount || !signer) {
      return
    }
    setLoading(true)
    try {
      const { signature } = await signer.signRaw!({
        address: currentAccount.address,
        data: stringToHex(currentAccount.address),
        type: 'bytes'
      })
      const res = await fetch('/api/admin_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ signature, address: currentAccount.address }),
      })
      if (res.status === 200) {
        toast({
          title: 'Login successfully',
        })
        window.location.reload()
      } else {
        const data = await res.json()
        toast({
          title: 'Failed to login',
          description: data.error.message,
          variant: 'destructive',
        })
      }
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <Dialog open={visible} onOpenChange={(open) => setVisible(open)}>
      <DialogContent className={cn('xl:min-w-[540px]')} withoutClose>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Login with Polkadot wallet
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center py-4 gap-4">
          <ConnectWalletButton />
          {
            currentAccount ? (
              <Button isLoading={loading} onClick={handleLogin}>Login</Button>
            ) : null
          }
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal
