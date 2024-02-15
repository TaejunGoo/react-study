'use client'

import styled from '@emotion/styled'
import { type Theme, css } from '@emotion/react'
import { highlight, renderer } from '@/utils/theme/keyframes'
import type { BoundaryProps } from '@/shared/components/demo/Boundary'

type Color = Exclude<BoundaryProps['color'], undefined>
type Size = Exclude<BoundaryProps['size'], undefined>

const colorDictCss = (color: Color, theme: Theme) => {
	const {
		gray800,
		gray300,
		vercel_pink: vercelPink,
		vercel_blue: vercelBlue,
		vercel_cyan: vercelCyan,
		white,
		violet,
		orange,
	} = theme.color
	const { violet100 } = theme.color.text
	const colors = {
		default: {
			backgroundColor: gray800,
			color: gray300,
		},
		pink: {
			backgroundColor: vercelPink,
			color: white,
		},
		blue: {
			backgroundColor: vercelBlue,
			color: white,
		},
		cyan: {
			backgroundColor: vercelCyan,
			color: white,
		},
		violet: {
			backgroundColor: violet,
			color: violet100,
		},
		orange: {
			backgroundColor: orange,
			color: white,
		},
	}

	return css`
		background-color: ${colors[color].backgroundColor};
		color: ${colors[color].color};
	`
}

const sizeCss = (size: Size, propName: 'left' | 'padding', theme: Theme) => {
	const sizeDict = {
		small: [0.75, 1.25],
		default: [1, 2.25],
	}

	if (propName === 'left') {
		return css`
			left: ${sizeDict[size][0]}rem;

			/* @media lg */
			${theme.mediaQueries.lg} {
				left: ${sizeDict[size][1]}rem;
			}
		`
	}

	if (propName === 'padding') {
		return css`
			padding: ${sizeDict[size][0]}rem;

			/* @media lg */
			${theme.mediaQueries.lg} {
				padding: ${sizeDict[size][1]}rem;
			}
		`
	}

	return ''
}

const borderColorCss = (color: Color, theme: Theme) => {
	const {
		gray700,
		vercel_pink: vercelPink,
		vercel_blue: vercelBlue,
		vercel_cyan: vercelCyan,
		violet,
		orange,
	} = theme.color
	const colorDict = {
		default: gray700,
		pink: vercelPink,
		blue: vercelBlue,
		cyan: vercelCyan,
		violet,
		orange,
	}

	return css`
		border-color: ${colorDict[color]};
	`
}

export const BadgeStyled = styled('div')<{ color: Color; animateRendering?: boolean }>`
	${({ color, theme }) => (color ? colorDictCss(color, theme) : '')}
	border-radius: 9999px;
	padding-left: 0.375rem;
	padding-right: 0.375rem;
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
		var(--tw-shadow);
	${({ animateRendering }) =>
		animateRendering
			? css`
					animation: ${highlight} 1s ease-in-out 1;
				`
			: ''}
`

export const BoundaryBadgeStyled = styled('div')<{ size: Size }>`
	position: absolute;
	top: -0.625rem;
	display: flex;
	column-gap: 0.25rem;
	font-size: 9px;
	text-transform: uppercase;
	line-height: 1rem;
	letter-spacing: 0.1em;
	${({ size, theme }) => sizeCss(size, 'left', theme)}
`

export const BoundaryStyled = styled('div')<{
	size: Size
	color: Color
	animateRerendering: boolean
}>`
	position: relative;
	border: 1px dashed ${({ theme }) => theme.color.gray700};
	border-radius: 0.5rem;
	${({ animateRerendering }) =>
		animateRerendering
			? css`
					animation: ${renderer} 1s ease-in-out 1;
				`
			: ''}
	${({ size, theme }) => sizeCss(size, 'padding', theme)}
	${({ color, theme }) => borderColorCss(color, theme)}
`
