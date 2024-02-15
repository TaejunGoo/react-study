'use client'

import styled from '@emotion/styled'
import { Boundary } from '@/shared/components/demo/Boundary'
import { useCounter } from '@/app/app-playground/context/counter-context'
import { Box } from '@/shared/components/demo/Box.styled'

const CounterStyled = styled('div')`
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 700;
	color: ${({ theme }) => theme.color.white};
	& > span {
		--tw-numeric-spacing: tabular-nums;
		font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure)
			var(--tw-numeric-spacing) var(--tw-numeric-fraction);
	}
`

export function Counter() {
	const [count] = useCounter()

	return (
		<Boundary
			labels={['Counter Context [Client Component]']}
			color="blue"
			size="small"
			animateRerendering={false}>
			<CounterStyled>
				<Box as="span">{count}</Box> Clicks
			</CounterStyled>
		</Boundary>
	)
}
