'use client'

import styled from '@emotion/styled'

const CheckBoxLabelLayoutStyled = styled('div')``

const CheckboxLabelStyled = styled('label')`
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
	}
`

const CheckboxStyled = styled('input')`
	display: none;
	&:checked + label::before {
		background: blue;
	}
`

interface CheckboxProps {
	disabled?: boolean
	defaultChecked?: boolean
	label?: string
	name?: string
	id: string
}

export default function Checkbox({ disabled, defaultChecked, label, name, id }: CheckboxProps) {
	return (
		<CheckBoxLabelLayoutStyled>
			<CheckboxStyled
				type="checkbox"
				disabled={disabled}
				defaultChecked={defaultChecked}
				name={name}
				id={id}
			/>
			<CheckboxLabelStyled htmlFor={id}>
				<span>{label || null}</span>
			</CheckboxLabelStyled>
		</CheckBoxLabelLayoutStyled>
	)
}
