'use client'

import { useState } from 'react'
import styled from '@emotion/styled'

const ClickCounterStyled = styled('button')`
	--tw-numeric-spacing: tabular-nums;
	white-space: nowrap;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.color.gray700};
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure)
		var(--tw-numeric-spacing) var(--tw-numeric-fraction);
	color: ${({ theme }) => theme.color.gray100};

	/* @media hover */
	${({ theme }) => theme.mediaQueries.hover} {
		&:hover {
			background-color: ${({ theme }) => theme.color.gray500};
			color: ${({ theme }) => theme.color.white};
		}
	}
`

export function ClickCounter() {
	const [count, setCount] = useState(0)

	return (
		<ClickCounterStyled type="button" onClick={() => setCount(count + 1)}>
			{count} Clicks
		</ClickCounterStyled>
	)
}
