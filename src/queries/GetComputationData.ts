const PHALA_PARA_ID = 2035
const KHALA_PARA_ID = 2004
const PHALA_METADATA_ENDPOINT =
  'https://phala.webapi.subscan.io/api/scan/metadata'
const KHALA_METADATA_ENDPOINT =
  'https://khala.webapi.subscan.io/api/scan/metadata'
const POLKADOT_XCM_ENDPOINT =
  'https://polkadot.api.subscan.io/api/scan/parachain/info'
const KUSAMA_XCM_ENDPOINT =
  'https://kusama.api.subscan.io/api/scan/parachain/info'
const PHALA_SQUID_ENDPOINT =
  'https://subsquid.phala.network/phala-computation/graphql'
const KHALA_SQUID_ENDPOINT =
  'https://subsquid.phala.network/khala-computation/graphql'

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
      'X-API-Key': process.env.SUBSCAN_API_KEY as string,
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
  const [
    phalaXcm,
    khalaXcm,
    phalaMetadata,
    khalaMetadata,
    phalaSquid,
    khalaSquid,
  ] = await Promise.all([
    fetchXcm(POLKADOT_XCM_ENDPOINT, PHALA_PARA_ID),
    fetchXcm(KUSAMA_XCM_ENDPOINT, KHALA_PARA_ID),
    fetchMetadata(PHALA_METADATA_ENDPOINT),
    fetchMetadata(KHALA_METADATA_ENDPOINT),
    fetchSquid(PHALA_SQUID_ENDPOINT),
    fetchSquid(KHALA_SQUID_ENDPOINT),
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
    khalaSendXcmMessageCount: khalaXcm.xcm_send_message_count,
    khalaReceivedXcmMessageCount: khalaXcm.xcm_receive_message_count,
    khalaSignedExtrinsicCount: khalaMetadata.count_signed_extrinsic,
    khalaIdlePInit: khalaSquid.idleWorkerPInit,
    khalaIdlePInstant: khalaSquid.idleWorkerPInstant,
    khalaIdleWorkerCount: khalaSquid.idleWorkerCount,
    khalaWorkerCount: khalaSquid.workerCount,
    khalaTotalValue: khalaSquid.totalValue,
  }

  const totalValue =
    Number.parseInt(data.phalaTotalValue) +
    Number.parseInt(data.khalaTotalValue)
  const totalNodes = data.phalaIdleWorkerCount + data.khalaIdleWorkerCount
  const onlineWorkers = data.phalaIdleWorkerCount + data.khalaIdleWorkerCount
  const vCpu = Math.floor((data.phalaIdlePInit + data.khalaIdlePInit) / 150)
  const crossChainTx =
    data.phalaSendXcmMessageCount +
    data.khalaSendXcmMessageCount +
    data.phalaReceivedXcmMessageCount +
    data.khalaReceivedXcmMessageCount
  const tx = Number(
    BigInt(data.phalaSignedExtrinsicCount) +
      BigInt(data.khalaSignedExtrinsicCount)
  )

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
