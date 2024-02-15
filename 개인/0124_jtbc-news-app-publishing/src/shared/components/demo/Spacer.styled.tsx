'use client'

import styled from '@emotion/styled'
import { Theme, css } from '@emotion/react'
import { type SerializedStyles } from '@emotion/react'

const colSpanCss = (colSpan: { count: number | 'full'; lg?: number }, theme: Theme) => {
	let count: SerializedStyles = css``
	let lg: SerializedStyles = css``

	if (colSpan.count === 'full') {
		count = css`
			grid-column: 1 / -1;
		`
	} else {
		count = css`
			grid-column: span ${colSpan.count} / span ${colSpan.count};
		`
	}

	if (colSpan.lg) {
		lg = css`
			/* @media lg */
			${theme.mediaQueries.lg} {
				grid-column: span ${colSpan.lg} / span ${colSpan.lg};
			}
		`
	}

	return css([count, lg])
}

const pxCss = (count: number, { unit }: Theme) => css`
	padding-left: ${unit * count}rem;
	padding-right: ${unit * count}rem;
`

const pbCss = (count: number, { unit }: Theme) => css`
	padding-bottom: ${unit * count}rem;
`

const ptCss = (count: number, { unit }: Theme) => css`
	padding-top: ${unit * count}rem;
`

const mtCss = (count: number, { unit }: Theme) => css`
	margin-top: ${unit * count}rem;
`

type LgCss = {
	grid?: boolean
	cols?: number
	gap?: number
	spaceY?: number
	colSpan?: number
}
const lgCss = (lg: LgCss | undefined, { unit, mediaQueries }: Theme) => css`
	/* @media lg */
	${mediaQueries.lg} {
		${lg?.colSpan ? `grid-column: span ${lg.colSpan} / span ${lg.colSpan};` : ''}
		${lg?.grid ? 'display: grid;' : ''}
        ${lg?.cols ? `grid-template-columns: repeat(${lg.cols}, minmax(0, 1fr));` : ''}
        ${lg?.gap ? `gap: ${unit * lg.gap}rem;` : ''}
        ${lg?.spaceY &&
		lg.spaceY === 14 &&
		`
            & > :not([hidden]) ~ :not([hidden]) {
                margin-top: 3.5rem;
                margin-bottom: 0;
            }
        `}
	}
`

type SpacerStyledProps = {
	vertical: number
	px?: number
	pt?: number
	pb?: number
	mt?: number
	colSpan?: { count: number | 'full'; lg?: number }
	lg?: LgCss
}

export const Spacer = styled('div')<SpacerStyledProps>`
	& > :not([hidden]) ~ :not([hidden]) {
		margin-top: ${({ theme, vertical }) => vertical * theme.unit}rem;
		margin-bottom: calc(${({ theme, vertical }) => vertical * theme.unit}rem * 0);
	}

	${({ px, theme }) => (px ? pxCss(px, theme) : '')}
	${({ pt, theme }) => (pt ? ptCss(pt, theme) : '')}
    ${({ pb, theme }) => (pb ? pbCss(pb, theme) : '')}
    ${({ colSpan, theme }) => colSpan && colSpanCss(colSpan, theme)}
    ${({ lg, theme }) => lg && lgCss(lg, theme)}
    ${({ mt, theme }) => mt && mtCss(mt, theme)}
`
