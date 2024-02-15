'use client'

import styled from '@emotion/styled'
import type { Property } from 'csstype'
import { css } from '@emotion/react'

type AlignmentProps = {
	flex?: boolean
	justifyContent?: Property.JustifyContent
	alignItems?: Property.AlignItems
	flexWrap?: boolean
	gap?: number
	mt?: number
}

const mtCss = (count: number) => css`
	margin-top: ${0.25 * count}rem;
`

export const Alignment = styled('div')<AlignmentProps>`
	display: ${(props) => (props.flex ? 'flex' : 'unset')};
	justify-content: ${(props) => props.justifyContent || 'unset'};
	gap: ${(props) => (props.gap ? `${0.25 * props.gap}rem` : 'unset')};
	align-items: ${(props) => props.alignItems || 'unset'};
	flex-wrap: ${(props) => (props.flexWrap ? 'wrap' : 'unset')};
	${(props) => typeof props.mt === 'number' && mtCss(props.mt)}
`
