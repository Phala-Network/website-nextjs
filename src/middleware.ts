import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // If the URL has any query parameters, strip them all
  // This improves ISR cache hit rate since the site doesn't use query params for rendering
  // The browser URL bar keeps the original params (good for marketing tracking)
  // but the server receives a clean URL for better caching
  if (url.search) {
    url.search = ''
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

// Only match page routes, exclude api, static assets, etc.
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (static files)
     * - Static assets (.svg, .png, .jpg, .jpeg, .gif, .webp, .ico)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
