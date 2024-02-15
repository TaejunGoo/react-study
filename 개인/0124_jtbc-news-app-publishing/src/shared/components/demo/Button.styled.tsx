'use client'

import { type Theme, css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

const buttonCss = (theme: Theme) => css`
	border-radius: 0.5rem;
	background-color: ${theme.color.gray700};
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure)
		tabular-nums var(--tw-numeric-fraction);
	color: ${theme.color.gray100};

	/* @media hover */
	${theme.mediaQueries.hover} {
		&:hover {
			background-color: ${theme.color.gray500};
			color: ${theme.color.white};
		}
	}
`

export const Button = styled('button')<{ active?: boolean }>`
	${({ theme }) => buttonCss(theme)}
`

export const ButtonLink = styled(Link)`
	${({ theme }) => buttonCss(theme)}
`
