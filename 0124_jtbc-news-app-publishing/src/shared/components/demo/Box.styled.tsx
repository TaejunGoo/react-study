'use client'

import styled from '@emotion/styled'
import type { Property } from 'csstype'

type DivisionProps = {
	alignSelf?: Property.AlignSelf
	mb?: number
	display?: Property.Display
	position?: Property.Position
	left?: number
	top?: number
}

const Division = styled('div')<DivisionProps>`
	${({ display }) => display && `display: ${display}`};
	${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`};
	${({ mb }) => mb && `margin-bottom: ${mb}rem`};
	${({ position }) => position && `position: ${position};`}
	${({ left }) => typeof left === 'number' && `left: ${left * 0.25}rem;`}
    ${({ top }) => typeof top === 'number' && `top: ${top * 0.25}rem;`}
`

type BoxProps = React.PropsWithChildren<
	React.ComponentProps<typeof Division> & {
		className?: string
	}
>

/**
 * @prop {@link Property.AlignSelf} alignSelf
 * @prop {string} [className] optional
 */
export function Box({
	children,
	alignSelf,
	mb,
	display,
	position,
	left,
	top,
	className,
}: BoxProps) {
	return (
		<Division
			alignSelf={alignSelf}
			mb={mb}
			display={display}
			position={position}
			left={left}
			top={top}
			className={className}>
			{children}
		</Division>
	)
}
