'use client'

import styled from '@emotion/styled'

interface ButtonStyledProps {
	$variant: 'text' | 'contained' | 'outlined'
	$color: 'default' | 'primary' | 'second' | 'error'
}
const ButtonStyled = styled('button')<ButtonStyledProps>`
	display: inline-flex;
	gap: 5px;
	align-items: center;
	background-color: red;
`

interface ButtonProps {
	children: React.ReactNode
	icon?: React.ReactNode
	type?: 'button' | 'submit'
	disabled?: boolean
	variant?: 'text' | 'contained' | 'outlined'
	color?: 'default' | 'primary' | 'second' | 'error'
	className?: string
}

export default function ButtonTest({
	children,
	icon,
	type = 'button',
	disabled = false,
	variant = 'contained',
	color = 'default',
	className,
}: ButtonProps) {
	return (
		<ButtonStyled
			className={className}
			type={type}
			disabled={disabled}
			$variant={variant}
			$color={color}>
			{icon}
			{children}
		</ButtonStyled>
	)
}
