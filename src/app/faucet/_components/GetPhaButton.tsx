'use client'

import { useState } from 'react'
import { useAtomValue } from 'jotai'
import { Button, useToast } from '@chakra-ui/react'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { u8aToHex } from "@polkadot/util"
import { decodeAddress } from '@polkadot/util-crypto'
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
      const contractId = '0x524d3ae9782c7f0682adb9f368516d80a890cecdfa36d260046e9b50f4be48c6'
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
        toast({
          title: 'Successfully requested 100 Test-PHA',
          description: `We've sent 100 Test-PHA to you.`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        await fetch('/api/faucet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            address: u8aToHex(decodeAddress(account.address)).replace('0x', ''),
          }),
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
