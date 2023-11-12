import { type NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '@/lib/auth'

export const config = {
  matcher: [
    '/api/admin_posts',
  ],
}

export async function middleware(req: NextRequest) {
  const verifiedToken = await verifyAuth(req).catch((err: Error) => {
    console.error(err.message)
  })

  if (!verifiedToken) {
    if (req.nextUrl.pathname.startsWith('/api/')) {
      return new NextResponse(
        JSON.stringify({ 'error': { message: 'authentication required' } }),
        { status: 401 });
    }
    else {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
}
