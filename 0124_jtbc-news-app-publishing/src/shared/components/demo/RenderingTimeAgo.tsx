'use client'

import ms from 'ms'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useInterval } from '@/hooks/useInterval'
import { Box } from '@/shared/components/demo/Box.styled'

const RenderedTimeAgoStyled = styled('div')`
	height: 1.5rem;
	width: 5rem;
	align-items: center;
	border-radius: 9999px;
	background-color: ${({ theme }) => theme.color.gray100};
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	text-align: center;
	font-size: 0.875rem;
	line-height: 1.25rem;
	line-height: 1.5rem;

	.time {
		font-weight: 600;
		--tw-numeric-spacing: tabular-nums;
		font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure)
			var(--tw-numeric-spacing) var(--tw-numeric-fraction);
		color: ${({ theme }) => theme.color.gray900};
	}

	.ago {
		color: ${({ theme }) => theme.color.gray600};
	}
`

type RenderedTimeAgoProps = {
	timestamp: number
}

export function RenderedTimeAgo({ timestamp }: RenderedTimeAgoProps) {
	const [msAgo, setMsAgo] = useState<number>(0)

	// update on page change
	useEffect(() => {
		setMsAgo(Date.now() - timestamp)
	}, [timestamp])

	// update every second
	useInterval(() => {
		setMsAgo(Date.now() - timestamp)
	}, 1000)

	return (
		<RenderedTimeAgoStyled title={new Date(timestamp).toISOString()}>
			{msAgo ? (
				<>
					<Box
						as="span"
						// https://react.dev/reference/react-dom/hydrate#suppressing-unavoidable-hydration-mismatch-errors
						suppressHydrationWarning
						className="time">
						{msAgo >= 1000 ? ms(msAgo) : '0s'}
					</Box>{' '}
					<Box as="span" className="ago">
						ago
					</Box>
				</>
			) : null}
		</RenderedTimeAgoStyled>
	)
}
