export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get('address') || ''
  return new Response(JSON.stringify({
    succeed: false,
    error: 'Can only be requested once every 24 hours'
  }), {
    status: 200,
  })
}
