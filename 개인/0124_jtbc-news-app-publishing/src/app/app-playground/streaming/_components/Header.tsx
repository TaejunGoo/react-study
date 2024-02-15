'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import { NextLogo } from '@/shared/components/demo/icon/NextLogo'
import { CartCount } from '@/app/app-playground/streaming/_components/CartCount'
import { SearchIcon } from '@/shared/components/demo/icon/SearchIcon'
import { ShoppingCartIcon } from '@/shared/components/demo/icon/ShoppingCartIcon'
import { Box } from '@/shared/components/demo/Box.styled'

const HeaderStyled = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: 0.75rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.color.gray800};
	padding: 0.75rem;

	/* @media lg */
	${({ theme }) => theme.mediaQueries.lg} {
		padding: 1rem 1.25rem;
	}
`

const LeftArea = styled('div')`
	display: flex;
	column-gap: 0.75rem;

	.logo {
		height: 2.5rem;
		width: 2.5rem;

		/* @media hover */
		${({ theme }) => theme.mediaQueries.hover} {
			&:hover {
				opacity: 0.7;
			}
		}
	}

	.search-area {
		/* relative flex-1 */
		position: relative;
		flex: 1 1 0%;

		.icon {
			pointer-events: none;
			position: absolute;
			top: 0px;
			bottom: 0px;
			left: 0px;
			display: flex;
			padding-left: 0.75rem;
			align-items: center;
			padding-left: 0.75rem;

			& > svg {
				width: 1.25rem;
				height: 1.25rem;
				color: ${({ theme }) => theme.color.gray300};
			}
		}

		input[type='search'] {
			display: block;
			width: 100%;
			border-radius: 9999px;
			border-style: none;
			background-color: ${({ theme }) => theme.color.gray600};
			padding-left: 2.5rem;
			font-weight: 500;
			color: ${({ theme }) => theme.color.gray200};

			&:focus {
				border-color: ${({ theme }) => theme.color.vercel_pink};
				box-shadow: ${({ theme }) => theme.shadow.vercel_pink};
			}
		}
	}
`
const RightArea = styled('div')`
	display: flex;
	flex-shrink: 0;
	column-gap: 0.75rem;

	.cart {
		position: relative;
		display: flex;
		height: 2.5rem;
		width: 2.5rem;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background-color: ${({ theme }) => theme.color.gray600};
		color: ${({ theme }) => theme.color.white};

		& > svg {
			width: 1.5rem;
			color: ${({ theme }) => theme.color.white};
		}

		.count {
			background-color: ${({ theme }) => theme.color.vercel_cyan};
			position: absolute;
			right: -0.25rem;
			top: -0.25rem;
			display: flex;
			height: 1rem;
			width: 1rem;
			align-items: center;
			justify-content: center;
			border-radius: 9999px;
			font-size: 0.875rem;
			line-height: 1.25rem;
			font-weight: 700;
			color: ${({ theme }) => theme.color.text.cyan800};
		}
	}

	img {
		border-radius: 9999px;
	}
`

export const Header = () => {
	return (
		<HeaderStyled>
			<LeftArea>
				<Link href="/streaming">
					<Box className="logo">
						<NextLogo />
					</Box>
				</Link>

				<Box className="search-area">
					<Box className="icon">
						<SearchIcon />
					</Box>
					<input
						aria-label="Search"
						type="search"
						name="search"
						id="search"
						autoComplete="off"
					/>
				</Box>
			</LeftArea>

			<RightArea>
				<Box className="cart">
					<ShoppingCartIcon />
					<Box className="count">
						<CartCount />
					</Box>
				</Box>
				<Image
					src="/demo/prince-akachi-LWkFHEGpleE-unsplash.jpg"
					width={40}
					height={40}
					alt="User"
				/>
			</RightArea>
		</HeaderStyled>
	)
}
