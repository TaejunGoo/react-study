'use client'

import styled from '@emotion/styled'
import { type Theme, css } from '@emotion/react'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

const openCss = (theme: Theme) => css`
	position: fixed;
	left: 0px;
	right: 0px;
	bottom: 0;
	top: 3.5rem;
	margin-top: 1px;
	background-color: ${theme.color.black};
`
const notOpenCss = css`
	display: none;
`

const NavContainerStyled = styled('div')<{ open?: boolean }>`
	overflow-y: auto;
	${({ open, theme }) => (open ? openCss(theme) : notOpenCss)}

	/* @media lg */
	${({ theme }) => theme.mediaQueries.lg} {
		position: static;
		display: block;
	}
`

type NavContainerProps = React.PropsWithChildren<{
	open?: boolean
}>

export function NavContainer({ children, open }: NavContainerProps) {
	return (
		<NavContainerStyled open={open}>
			<Spacer vertical={6} px={2} pb={24} pt={5}>
				{children}
			</Spacer>
		</NavContainerStyled>
	)
}
