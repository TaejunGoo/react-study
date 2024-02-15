'use client'

import styled from '@emotion/styled'
import { Alignment } from '@/shared/components/demo/Alignment.styled'
import { RenderedTimeAgo } from '@/shared/components/demo/RenderingTimeAgo'

const RenderingInfoStyled = styled('div')`
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.color.gray900};
	padding: 0.75rem;

	& > :not([hidden]) ~ :not([hidden]) {
		margin-top: 0.75rem;
		margin-bottom: 0;
	}
`

const MessageStyled = styled('div')`
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: ${({ theme }) => theme.color.gray300};
`

export function RenderingInfo({ type }: { type: 'ssg' | 'ssgod' | 'ssr' | 'isr' }) {
	const dict = {
		ssg: 'Statically pre-rendered at build time',
		ssgod: 'Statically rendered on demand',
		isr: 'Statically pre-rendered at build time and periodically revalidated',
		ssr: 'Dynamically rendered at request time',
	}
	const msg = dict[type]

	return (
		<RenderingInfoStyled>
			<MessageStyled>{msg}</MessageStyled>
			<Alignment flex>
				<RenderedTimeAgo timestamp={Date.now()} />
			</Alignment>
		</RenderingInfoStyled>
	)
}
