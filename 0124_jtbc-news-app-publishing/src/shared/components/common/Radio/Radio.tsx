'use client'

import styled from '@emotion/styled'

const RadioLabelLayoutStyled = styled('div')``

const RadioLabelStyled = styled('label')`
	display: inline-flex;
	font-size: 12px;
	position: relative;
	align-items: center;
	cursor: pointer;
	gap: 5px;
	&::before {
		content: '';
		display: block;
		width: 20px;
		height: 20px;
		background: #fff;
		border: 1px solid #ccc;
		border-radius: 100px;
	}
`

const RadioStyled = styled('input')`
	display: none;
	&:checked + label::before {
		background: blue;
	}
`

interface RadioProps {
	disabled?: boolean
	defaultChecked?: boolean
	label?: string
	name: string
	id: string
}

export default function Radio({ disabled, defaultChecked, label, name, id }: RadioProps) {
	return (
		<RadioLabelLayoutStyled>
			<RadioStyled
				type="radio"
				disabled={disabled}
				defaultChecked={defaultChecked}
				name={name}
				id={id}
			/>
			<RadioLabelStyled htmlFor={id}>
				<span>{label || null}</span>
			</RadioLabelStyled>
		</RadioLabelLayoutStyled>
	)
}
