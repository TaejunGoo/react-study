'use client'

import Link from 'next/link'
import styled from '@emotion/styled'
import { Theme, css } from '@emotion/react'

const activeCss = (theme: Theme) => css`
	background-color: ${theme.color.vercel_blue};
	color: ${theme.color.white};
`
const nonActiveCss = (theme: Theme) => css`
	background-color: ${theme.color.gray700};
	color: ${theme.color.gray100};

	/* @media hover */
	${theme.mediaQueries.hover} {
		&:hover {
			background-color: ${theme.color.gray500};
			color: ${theme.color.white};
		}
	}
`

const TabNavItemStyled = styled(Link)<{ active?: boolean }>`
	border-radius: 0.5rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	${({ active, theme }) => (active ? activeCss(theme) : nonActiveCss(theme))}
`

export function TabNavItem({
	children,
	href,
	isActive,
}: {
	children: React.ReactNode
	href: string
	isActive?: boolean
}) {
	return (
		<TabNavItemStyled href={href} active={isActive}>
			{children}
		</TabNavItemStyled>
	)
}
