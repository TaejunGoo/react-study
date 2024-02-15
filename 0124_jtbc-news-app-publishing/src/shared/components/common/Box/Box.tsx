'use client'

import styled from '@emotion/styled'
import type { Property } from 'csstype'

type DivisionProps = {
	display?: Property.Display
	position?: Property.Position
	left?: number
	top?: number
	pd?: number
	pv?: number
	ph?: number
}

const Division = styled('div')<DivisionProps>`
	${({ display }) => display && `display: ${display}`};
	${({ position }) => position && `position: ${position};`}
	${({ left }) => typeof left === 'number' && `left: ${left}px;`}
	${({ top }) => typeof top === 'number' && `top: ${top}px;`}
	${({ pd }) => typeof pd === 'number' && `padding: ${pd}px;`}
	${({ pv }) => typeof pv === 'number' && `padding-top: ${pv}px; padding-bottom: ${pv}px`}
	${({ ph }) => typeof ph === 'number' && `padding-left: ${ph}px; padding-right: ${ph}px`}
`

type BoxProps = React.PropsWithChildren<
	React.ComponentProps<typeof Division> & {
		className?: string
	}
>

export default function Box({ children, display, position, left, top, pd, pv, ph }: BoxProps) {
	return (
		<Division
			display={display}
			position={position}
			left={left}
			top={top}
			pd={pd}
			pv={pv}
			ph={ph}>
			{children}
		</Division>
	)
}
