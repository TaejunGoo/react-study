'use client'

import { ErrorPage } from '@/app/app-playground/error-handling/_components/ErrorPage'

type ErrorProps = {
	error?: { message: string }
	reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
	return (
		<ErrorPage
			labels={['./[categorySlug]/error.tsx']}
			reset={reset}
			title="Error"
			error={error}
		/>
	)
}
