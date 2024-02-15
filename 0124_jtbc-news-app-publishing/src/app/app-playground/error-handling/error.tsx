'use client'

import { ErrorPage } from '@/app/app-playground/error-handling/_components/ErrorPage'

export default function Error({ error, reset }: { error: { message: string }; reset: () => void }) {
	return <ErrorPage labels={['./error.tsx']} title="Error" reset={reset} error={error} />
}
