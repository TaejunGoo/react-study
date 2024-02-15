'use client'

import { useEffect } from 'react'

export function MSWRunner() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
				// 클라이언트 에서만 실행 시키고 서버용은 별도 실행
				import('@/mocks/browser')
			}
		}
	}, [])

	return null
}
