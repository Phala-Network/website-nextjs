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
    // @TODO: move to phat contract
    const lastGetTestPhaTimeKey = `lastGetTestPhaTime:${account.address}`
    const currentTime = new Date().getTime()
    const lastTime = localStorage.getItem(lastGetTestPhaTimeKey) || '0'
    const timePassed = currentTime - parseInt(lastTime, 10)
    if (timePassed < 24 * 60 * 60 * 1000) {
      toast({
        title: 'Failed to request 100 Test-PHA',
        description: 'Can only be requested once every 24 hours',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return
    }

    setLoading(true)
    const api = await ApiPromise.create(
      options({
        provider: new WsProvider('wss://poc6.phala.network/ws'),
        noInitWarn: true,
      })
    )
    await api.isReady
    const registry = await OnChainRegistry.create(api)
    const contractId = '0xd6e643b4c615a5ccd8a2d4783e90f41b8ba941096372f23ad23ed6a81d167ab5'
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
      100
    )
    if (result.isOk) {
      console.info(output.toHuman())
      localStorage.setItem(lastGetTestPhaTimeKey, currentTime.toString())
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
        description: '',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
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
