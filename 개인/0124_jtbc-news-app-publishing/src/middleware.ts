import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

export async function middleware(/** request: NextRequest */) {
	// 미들웨어 단계에서 핸들링이 필요하면 사용

	return NextResponse.next()
}

// See "Matching Paths" below to learn more
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
}
