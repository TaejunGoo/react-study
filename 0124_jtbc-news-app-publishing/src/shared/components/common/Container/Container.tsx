'use client'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const ContainerStyled = styled('div')`
	width: 100%;
	margin: 0 auto;
	padding-left: 2rem;
	padding-right: 2rem;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			max-width: 768px;
			padding-left: 32px;
			padding-right: 32px;
		}
		${theme.mediaQueries.lg} {
			max-width: 1024px;
			padding-left: 40px;
			padding-right: 40px;
		}
		${theme.mediaQueries.xl} {
			max-width: 1280px;
		}
	`}
`
interface ContainerProps {
	children: React.ReactNode
	className?: string
}
export default function Container({ children, className }: ContainerProps) {
	return <ContainerStyled className={className}>{children}</ContainerStyled>
}
