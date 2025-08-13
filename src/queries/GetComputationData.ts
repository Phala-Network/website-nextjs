import { env } from '@/env'

const PHALA_PARA_ID = 2035
const PHALA_METADATA_ENDPOINT =
  'https://phala.webapi.subscan.io/api/scan/metadata'
const POLKADOT_XCM_ENDPOINT =
  'https://polkadot.api.subscan.io/api/scan/parachain/info'
const PHALA_SQUID_ENDPOINT =
  'https://subsquid.phala.network/phala-computation/graphql'

interface Xcm {
  data: {
    chains: {
      xcm_send_message_count: number
      xcm_receive_message_count: number
    }[]
  }
}

interface Metadata {
  data: { count_signed_extrinsic: string }
}

interface SquidData {
  data: {
    globalStateById: {
      idleWorkerPInit: number
      idleWorkerPInstant: number
      idleWorkerCount: number
      workerCount: number
      totalValue: string
    }
  }
}

const squidQuery = JSON.stringify({
  query: `query {globalStateById(id: "0"){idleWorkerPInit idleWorkerPInstant idleWorkerCount workerCount totalValue}}`,
})

const fetchXcm = async (endpoint: string, paraId: number) =>
  fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({ para_id: paraId, row: 1 }),
    headers: {
      'content-type': 'application/json',
      'X-API-Key': env.SUBSCAN_API_KEY as string,
    },
    next: { revalidate: 300 },
  })
    .then((res) => res.json() as Promise<Xcm>)
    .then((data) => data.data.chains[0])
    .catch(() => {
      return {
        xcm_send_message_count: 0,
        xcm_receive_message_count: 0,
      }
    })

const fetchMetadata = async (endpoint: string) =>
  fetch(endpoint, { method: 'POST', next: { revalidate: 300 } })
    .then((res) => res.json() as Promise<Metadata>)
    .then((data) => data.data)
    .catch(() => {
      return { count_signed_extrinsic: '0' }
    })

const fetchSquid = async (endpoint: string) =>
  fetch(endpoint, {
    method: 'POST',
    body: squidQuery,
    headers: { 'content-type': 'application/json' },
    next: { revalidate: 300 },
  })
    .then((res) => res.json() as Promise<SquidData>)
    .then((data) => data.data.globalStateById)
    .catch(() => {
      return {
        idleWorkerPInit: 0,
        idleWorkerPInstant: 0,
        idleWorkerCount: 0,
        workerCount: 0,
        totalValue: '',
      }
    })

export async function getComputationData() {
  const [phalaXcm, phalaMetadata, phalaSquid] = await Promise.all([
    fetchXcm(POLKADOT_XCM_ENDPOINT, PHALA_PARA_ID),
    fetchMetadata(PHALA_METADATA_ENDPOINT),
    fetchSquid(PHALA_SQUID_ENDPOINT),
  ])

  const data = {
    phalaSendXcmMessageCount: phalaXcm.xcm_send_message_count,
    phalaReceivedXcmMessageCount: phalaXcm.xcm_receive_message_count,
    phalaSignedExtrinsicCount: phalaMetadata.count_signed_extrinsic,
    phalaIdlePInit: phalaSquid.idleWorkerPInit,
    phalaIdlePInstant: phalaSquid.idleWorkerPInstant,
    phalaIdleWorkerCount: phalaSquid.idleWorkerCount,
    phalaWorkerCount: phalaSquid.workerCount,
    phalaTotalValue: phalaSquid.totalValue,
  }

  const totalValue = Number.parseInt(data.phalaTotalValue)
  const totalNodes = data.phalaIdleWorkerCount
  const onlineWorkers = data.phalaIdleWorkerCount
  const vCpu = Math.floor(data.phalaIdlePInit / 150)
  const crossChainTx =
    data.phalaSendXcmMessageCount + data.phalaReceivedXcmMessageCount
  const tx = Number(BigInt(data.phalaSignedExtrinsicCount))

  return {
    totalValue,
    totalNodes,
    onlineWorkers,
    vCpu,
    crossChainTx,
    tx,
    ...data,
  }
}
