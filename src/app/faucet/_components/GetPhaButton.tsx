'use client'

import { useState } from 'react'
import { useAtomValue } from 'jotai'
import { ApiPromise, WsProvider } from '@polkadot/api'
import {
  options,
  OnChainRegistry,
  PinkContractPromise,
  signCertificate,
} from '@phala/sdk'
import { pathOr } from 'ramda'

import { Button } from '@/components/ui/button'
import { useToast } from "@/components/ui/use-toast"
import { currentAccountAtom, signerAtom } from '@/components/connect-wallet-button/atoms'
import contractAbi from './phala_faucet.json'


export default function GetPhaButton() {
  const signer = useAtomValue(signerAtom)
  const account = useAtomValue(currentAccountAtom)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleGetTestPha = async () => {
    if (!signer || !account) {
      return
    }

    setLoading(true)
    try {
      const api = await ApiPromise.create(
        options({
          provider: new WsProvider('wss://poc6.phala.network/ws'),
          noInitWarn: true,
        })
      )
      await api.isReady
      const registry = await OnChainRegistry.create(api)
      const contractId = process.env.NEXT_PUBLIC_FAUCET_CONTRACT_ID!
      const contractKey = await registry.getContractKeyOrFail(contractId)
      const contract = new PinkContractPromise(
        registry.api,
        registry,
        contractAbi,
        contractId,
        contractKey,
      )
      const cert = await signCertificate({ signer, account, api })
      const { result, output } = await contract.query.balancesTransfer(
        account!.address,
        { cert },
      )
      if (result.isOk) {
        const outputData = output?.toJSON()
        const err = pathOr(null, ['ok', 'err', 'jsError'], outputData)
        if (err) {
          toast({
            title: 'Failed to request 100 Test-PHA',
            description: err,
            variant: 'destructive',
          })
        } else {
          toast({
            title: 'Successfully requested 100 Test-PHA',
            description: `We've sent 100 Test-PHA to you.`,
          })
        }
      }
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    account ? (
      <div className="inline-block">
        <Button
          onClick={handleGetTestPha}
          isLoading={loading}
          variant="outline"
        >
          Get Test-PHA
        </Button>
      </div>
    ) : null
  )
}
