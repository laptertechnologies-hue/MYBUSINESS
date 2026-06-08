import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  
  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  let hostname = req.headers.get('host') || '';

  // Remove port if present
  hostname = hostname.split(':')[0];

  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`;

  // Define allowed production domains
  const isProduction = process.env.NODE_ENV === 'production';
  const rootDomain = isProduction ? 'yourdomain.com' : 'localhost';

  // Check if it's a subdomain
  if (
    hostname !== rootDomain &&
    !hostname.startsWith('www.') &&
    hostname.endsWith(`.${rootDomain}`)
  ) {
    const subdomain = hostname.replace(`.${rootDomain}`, '');
    
    // Rewrite the URL to a dynamic route based on the subdomain
    // e.g. myclinic.localhost:3000/dashboard -> /_tenant/myclinic/dashboard
    return NextResponse.rewrite(new URL(`/_tenant/${subdomain}${path === '/' ? '' : path}`, req.url));
  }

  return NextResponse.next();
}
