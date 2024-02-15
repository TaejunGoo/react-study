'use client'

import styled from '@emotion/styled'
import { Box } from '@/shared/components/demo/Box.styled'

const ContainerStyled = styled('div')`
	/* @media lg */
	${({ theme }) => theme.mediaQueries.lg} {
		padding-left: 18rem;
	}

	.container {
		margin-left: auto;
		margin-right: auto;
		max-width: 56rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 5rem;

		/* @media lg */
		${({ theme }) => theme.mediaQueries.lg} {
			padding: 2rem;
		}
	}
`

type ContainerStyledProps = React.PropsWithChildren

export function Container({ children }: ContainerStyledProps) {
	return (
		<ContainerStyled>
			<Box className="container">{children}</Box>
		</ContainerStyled>
	)
}
