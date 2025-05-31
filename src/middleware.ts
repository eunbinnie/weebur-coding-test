import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// /에 접근 시 /products로 리다이렉트
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/products', request.url));
}

export const config = {
  matcher: '/',
};
