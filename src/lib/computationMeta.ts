interface ComputationMetaResponse {
  phalaSendXcmMessageCount: number
  phalaReceivedXcmMessageCount: number
  phalaSignedExtrinsicCount: string
  phalaIdlePInstant: number
  phalaIdleWorkerCount: number
  khalaSendXcmMessageCount: number
  khalaReceivedXcmMessageCount: number
  khalaSignedExtrinsicCount: string
  khalaIdlePInstant: number
  khalaIdleWorkerCount: number
}

export interface ComputationMeta {
  onlineWorkers: number
  vCpu: number
  crossChainTx: number
  tx: bigint
}

export async function getComputationMeta(): Promise<ComputationMeta> {
  let data: ComputationMetaResponse = {
    phalaIdlePInstant: 28_757_250,
    phalaIdleWorkerCount: 26_551,
    phalaReceivedXcmMessageCount: 7_538,
    phalaSendXcmMessageCount: 0,
    phalaSignedExtrinsicCount: '69622067',
    khalaIdlePInstant: 0,
    khalaIdleWorkerCount: 0,
    khalaReceivedXcmMessageCount: 0,
    khalaSendXcmMessageCount: 0,
    khalaSignedExtrinsicCount: '0',
  }
  try {
    const res = await fetch('https://phala-website-meta.phala-dev.workers.dev')
    data = await res.json()
  } catch (err) {
    // noop
  }

  const onlineWorkers = data.phalaIdleWorkerCount + data.khalaIdleWorkerCount
  const vCpu = Math.floor(
    (data.phalaIdlePInstant + data.khalaIdlePInstant) / 150
  )
  const crossChainTx =
    data.phalaSendXcmMessageCount +
    data.khalaSendXcmMessageCount +
    data.phalaReceivedXcmMessageCount +
    data.khalaReceivedXcmMessageCount
  const tx =
    BigInt(data.phalaSignedExtrinsicCount) +
    BigInt(data.khalaSignedExtrinsicCount)

  return {onlineWorkers, vCpu, crossChainTx, tx}
}
