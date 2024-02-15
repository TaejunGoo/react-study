'use client'

import { type Theme, css } from '@emotion/react'
import Link from 'next/link'
import styled from '@emotion/styled'

const activeCss = (theme: Theme) => css`
	background-color: ${theme.color.vercel_blue};
	color: ${theme.color.white};
`
const nonActiveCss = (theme: Theme) => css`
	background-color: ${theme.color.gray700};
	color: ${theme.color.gray100};

	${theme.mediaQueries.hover} {
		&:hover {
			background-color: ${theme.color.gray500};
			color: ${theme.color.white};
		}
	}
`

const SelectableButtonBaseCss = css`
	border-radius: 0.5rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
`

const LinkTypeStyled = styled(Link)<{ active?: boolean }>`
	${SelectableButtonBaseCss}
	${({ active, theme }) => (active ? activeCss(theme) : nonActiveCss(theme))}
`
const ButtonTypeStyled = styled('button')<{ active?: boolean }>`
	${SelectableButtonBaseCss}
	${({ active, theme }) => (active ? activeCss(theme) : nonActiveCss(theme))}
`

type SelectableButtonProps<T extends boolean> = React.PropsWithChildren<
	T extends true
		? {
				onClick?: undefined
				href: string
				link: boolean
				active?: boolean
			}
		: {
				onClick?: () => void
				active?: boolean
				link?: T
				href?: undefined
			}
>

export const SelectableButton = <T extends boolean>({
	link,
	href,
	children,
	onClick,
	active,
}: SelectableButtonProps<T>) => {
	if (link) {
		return (
			<LinkTypeStyled href={href as string} active={active}>
				{children}
			</LinkTypeStyled>
		)
	}

	return (
		<ButtonTypeStyled active={active} type="button" onClick={onClick}>
			{children}
		</ButtonTypeStyled>
	)
}
