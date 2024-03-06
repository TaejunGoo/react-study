'use client'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

const MenuListStyled = styled('ul')`
	display: none;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			display: flex;
		}
	`}
	width: 100%;
	align-items: center;
	gap: 2.2rem;
	margin-bottom: -0.3rem;
`

const MenuItemStyled = styled('li')``

interface MenuLinkStyledProps {
	$dotted?: boolean
}
const MenuLinkStyled = styled(Link)<MenuLinkStyledProps>`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	&.dotted::before {
		content: '';
		display: block;
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 100%;
		background: #ee0007;
	}
`

const Span = styled('span')`
	color: #242424;
	font-size: 1.8rem;
	font-weight: 700;
	line-height: 1;
`

export default function MenuList() {
	return (
		<MenuListStyled>
			<MenuItemStyled>
				<MenuLinkStyled href="/" className="dotted">
					<Span>LIVE</Span>
				</MenuLinkStyled>
			</MenuItemStyled>
			<MenuItemStyled>
				<MenuLinkStyled href="/">
					<Span>프로그램</Span>
				</MenuLinkStyled>
			</MenuItemStyled>
			<MenuItemStyled>
				<MenuLinkStyled href="/">
					<Span>정치</Span>
				</MenuLinkStyled>
			</MenuItemStyled>
			<MenuItemStyled>
				<MenuLinkStyled href="/">
					<Span>경제</Span>
				</MenuLinkStyled>
			</MenuItemStyled>
			<MenuItemStyled>
				<MenuLinkStyled href="/">
					<Span>사회</Span>
				</MenuLinkStyled>
			</MenuItemStyled>
			<MenuItemStyled>
				<MenuLinkStyled href="/">
					<Span>국제</Span>
				</MenuLinkStyled>
			</MenuItemStyled>
			<MenuItemStyled>
				<MenuLinkStyled href="/">
					<Span>문화</Span>
				</MenuLinkStyled>
			</MenuItemStyled>
			<MenuItemStyled>
				<MenuLinkStyled href="/">
					<Span>연예</Span>
				</MenuLinkStyled>
			</MenuItemStyled>
		</MenuListStyled>
	)
}
