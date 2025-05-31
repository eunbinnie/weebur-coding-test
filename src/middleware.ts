'use server';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const viewCookie = request.cookies.get('view');
  const random = Math.random() > 0.5 ? 'list' : 'grid';

  const cookieOptions = {
    maxAge: 60 * 60 * 24,
    path: '/',
  };

  if (!viewCookie) {
    request.cookies.set('view', random);
  }

  if (pathname === '/') {
    const res = NextResponse.redirect(new URL('/products', request.url), {
      headers: new Headers(request.headers),
    });

    if (!viewCookie) {
      res.cookies.set('view', random, cookieOptions);
    }

    return res;
  } else {
    const res = NextResponse.next({
      request: {
        headers: new Headers(request.headers),
      },
    });

    if (!viewCookie) {
      res.cookies.set('view', random, cookieOptions);
    }

    return res;
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|icons|fonts|images).*)',
  ],
};
