'use client'

import { useState } from 'react'
import { useAtomValue } from 'jotai'
import { Button, useToast } from '@chakra-ui/react'
import { ApiPromise, WsProvider } from '@polkadot/api'
import {
  options,
  OnChainRegistry,
  PinkContractPromise,
  signCertificate,
} from '@phala/sdk'

import { currentAccountAtom, signerAtom } from './atoms'
import contractAbi from './phala_faucet.json'


export default function GetPhaButton() {
  const signer = useAtomValue(signerAtom)
  const account = useAtomValue(currentAccountAtom)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

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
      const contractId = '0x65b36578e950f48c9f5c9b4835df2357854f53c724fdb2682a6194855e456885'
      const contractKey = await registry.getContractKeyOrFail(contractId)
      const contract = new PinkContractPromise(
        registry.api,
        registry,
        contractAbi,
        contractId,
        contractKey,
      )
      const cert = await signCertificate({ signer, account, api })
      const { output, result } = await contract.query.balancesTransfer(
        account!.address,
        { cert },
      )
      if (result.isOk) {
        toast({
          title: 'Successfully requested 100 Test-PHA',
          description: `We've sent 100 Test-PHA to you.`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } else {
        console.info(result.toHuman())
        toast({
          title: 'Failed to request 100 Test-PHA',
          description: `${result.toHuman()}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
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
