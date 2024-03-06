'use client'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

const LogoStyled = styled('h1')`
	width: 11.8rem;
	height: 3.4rem;
	background: url('/images/logo/blue_logo_sm.png') no-repeat center / contain;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			width: 14.2rem;
			height: 3.4rem;
			background-image: url('/images/logo/blue_logo_lg.png');
		}
	`}
`

export default function Logo() {
	return (
		<Link href="/">
			<LogoStyled />
		</Link>
	)
}
