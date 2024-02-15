'use client'

import Link from 'next/link'
import { useState } from 'react'
import styled from '@emotion/styled'
import { demos } from '@/shared/components/demo/menu'
import { XIcon } from '@/shared/components/demo/icon/XIcon'
import { MenuAlt2Icon } from '@/shared/components/demo/icon/MenuAlt2Icon'
import { Box } from '@/shared/components/demo/Box.styled'
import { NavContainer } from '@/shared/components/demo/GlobalNavigation/NavContainer'
import { Section } from '@/shared/components/demo/GlobalNavigation/Section'
import { Typography } from '@/shared/components/demo/Typography'

const GlobalNavigationStyled = styled('div')`
	position: fixed;
	top: 0;
	z-index: 10;
	display: flex;
	width: 100%;
	flex-direction: column;
	border-bottom-width: 1px;
	border-color: ${({ theme }) => theme.color.gray800};
	background-color: ${({ theme }) => theme.color.black};

	/* @media lg */
	${({ theme }) => theme.mediaQueries.lg} {
		bottom: 0px;
		z-index: auto;
		width: 18rem;
		border-bottom-width: 0px;
		border-right-width: 1px;
		border-color: ${({ theme }) => theme.color.gray800};
	}
`

const AppLogo = styled('div')`
	display: flex;
	height: 3.5rem;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 1rem;
	padding-bottom: 1rem;

	/* @media lg */
	${({ theme }) => theme.mediaQueries.lg} {
		height: auto;
	}

	& > .link {
		/* group flex w-full items-center gap-x-2.5 */
		display: flex;
		width: 100%;
		align-items: center;
		-moz-column-gap: 0.625rem;
		column-gap: 0.625rem;

		&:hover > .title {
			color: ${({ theme }) => theme.color.gray50};
		}

		.title {
			font-weight: 600;
			letter-spacing: 0.025em;
			color: ${({ theme }) => theme.color.gray400};
		}
	}
`

const HamburgerButton = styled('button')`
	/* group   */
	position: absolute;
	right: 0;
	top: 0;
	display: flex;
	height: 3.5rem;
	align-items: center;
	-moz-column-gap: 0.5rem;
	column-gap: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;

	/* @media lg */
	${({ theme }) => theme.mediaQueries.lg} {
		display: none;
	}

	&:hover .text {
		color: ${({ theme }) => theme.color.gray400};
	}

	.text {
		font-weight: 500;
		color: ${({ theme }) => theme.color.gray100};
	}

	& > svg {
		display: block;
		width: 1.5rem;
		color: ${({ theme }) => theme.color.gray400};
	}
`

export function GlobalNavigation() {
	const [isOpen, setIsOpen] = useState(false)
	const close = () => setIsOpen(false)

	return (
		<GlobalNavigationStyled>
			<AppLogo>
				<Link href="/" className="link" onClick={close}>
					<Typography variant="h3" className="title">
						App Router
					</Typography>
				</Link>
			</AppLogo>
			<HamburgerButton type="button" onClick={() => setIsOpen(!isOpen)}>
				<Box className="title">Menu</Box>
				{isOpen ? <XIcon /> : <MenuAlt2Icon />}
			</HamburgerButton>

			<NavContainer>
				{demos.map((section) => (
					<Section
						key={section.name}
						close={close}
						items={section.items}
						name={section.name}
					/>
				))}
			</NavContainer>
		</GlobalNavigationStyled>
	)
}
