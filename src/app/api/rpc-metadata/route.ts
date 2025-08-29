async function requestRpc(http: string, body: string) {
  return fetch(http, {
      method: 'POST',
      body,
      headers: { 'content-type': 'application/json' }
  }).then(resp => resp.json())
}


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const rpc = searchParams.get('rpc')
  if (!rpc) {
    return new Response('{}', {
      status: 200,
      headers: {
        'content-type': 'application/json'
      },
    })
  }
  const http = rpc.replace('wss://', 'https://').replace('ws://', 'http://').replace('ws:/', 'http://').replace('wss:/', 'https://')
  const [blockHashResp, specResp, metadataResp] = await Promise.all([
    requestRpc(http, '{"id":1,"jsonrpc":"2.0","method":"chain_getBlockHash","params":[0]}'),
    requestRpc(http, '{"id":2,"jsonrpc":"2.0","method":"state_getRuntimeVersion","params":[]}'),
    requestRpc(http, '{"id":3,"jsonrpc":"2.0","method":"state_getMetadata","params":[]}')
  ])
  const id = `${blockHashResp.result}-${specResp.result.specVersion}`

  return new Response(JSON.stringify({
    [id]: metadataResp.result
  }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=600, s-maxage=3600, stale-while-revalidate',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS'
    },
  })
}
