'use client'

import { Boundary } from '@/shared/components/demo/Boundary'
import { useCounter } from '@/app/app-playground/context/counter-context'
import { Button } from '@/shared/components/demo/Button'

export function ContextClickCounter() {
	const [count, setCount] = useCounter()

	return (
		<Boundary
			labels={['Counter Context [Client Component]']}
			color="blue"
			size="small"
			animateRerendering={false}>
			<Button onClick={() => setCount(count + 1)}>{count} Clicks</Button>
		</Boundary>
	)
}
