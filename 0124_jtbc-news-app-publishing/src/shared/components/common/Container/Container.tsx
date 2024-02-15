'use client'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const ContainerStyled = styled('div')`
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			max-width: 768px;
			padding: 0 32px;
		}
		${theme.mediaQueries.lg} {
			max-width: 1024px;
			padding: 0 40px;
		}
		${theme.mediaQueries.xl} {
			max-width: 1280px;
		}
	`}
`

export default function Container({ children }: { children: React.ReactNode }) {
	return <ContainerStyled>{children}</ContainerStyled>
}
