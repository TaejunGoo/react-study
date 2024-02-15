'use client'

import styled from '@emotion/styled'

export const PricingBoxStyled = styled('div')`
	grid-column: 1 / -1;

	/* @media lg */
	${({ theme }) => theme.mediaQueries.lg} {
		grid-column: span 1 / span 1;
	}
`
