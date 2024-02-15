import styled from '@emotion/styled'
import { useEffect } from 'react'
import { Boundary } from '@/shared/components/demo/Boundary'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Button } from '@/shared/components/demo/Button'

const Title = styled('h2')`
	font-size: 1.125rem;
	line-height: 1.75rem;
	font-weight: 700;
`
const Message = styled('p')`
	font-size: 0.875rem;
	line-height: 1.25rem;
`
const ButtonArea = styled('div')``

type ErrorProps = {
	labels: string[]
	title: string
	error?: { message: string }
	reset: () => void
}

export function ErrorPage({ labels, reset, title, error }: ErrorProps) {
	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log('logging error:', error)
	}, [error])

	return (
		<Boundary labels={labels} color="pink">
			<Spacer vertical={4}>
				<Title>{title}</Title>
				{error?.message && <Message>{error.message}</Message>}
				<ButtonArea>
					<Button onClick={reset}>Try Again</Button>
				</ButtonArea>
			</Spacer>
		</Boundary>
	)
}
