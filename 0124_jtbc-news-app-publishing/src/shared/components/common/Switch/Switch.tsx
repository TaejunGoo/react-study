'use client'

import styled from '@emotion/styled'

const SwitchLayoutStyled = styled('label')`
	display: inline-flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`

const SwitchInputStyled = styled('input')`
	appearance: none;
	position: relative;
	border-radius: 100px;
	width: 35px;
	height: 20px;
	background-color: antiquewhite;
	transition: box-shadow 0.1s;
	box-shadow: 0 0 0 1px lightgray;
	&::before {
		content: '';
		position: absolute;
		left: 2px;
		top: 2px;
		width: 16px;
		height: 16px;
		border-radius: 100px;
		background-color: gray;
		transition: all 0.1s linear;
	}
	&:checked::before {
		background-color: white;
		left: 17px;
	}
	&:checked {
		background: tomato;
		border-color: tomato;
	}
	&:disabled {
		border-color: lightgray;
		opacity: 0.7;
		cursor: not-allowed;
	}

	&:disabled:before {
		background-color: lightgray;
	}

	&:disabled + span {
		opacity: 0.7;
		cursor: not-allowed;
	}
	&:focus-visible {
		outline-offset: 1px;
		outline: 1px solid tomato;
	}
	&:enabled:hover {
		box-shadow: 0 0 0 3px lightgray;
	}
`

const SwitchLabelStyled = styled('span')``

interface SwitchProps {
	label?: string
	disabled?: boolean
	defaultChecked?: boolean
}
export default function Switch({ label, disabled = false, defaultChecked }: SwitchProps) {
	return (
		<SwitchLayoutStyled>
			<SwitchInputStyled
				role="switch"
				type="checkbox"
				disabled={disabled}
				defaultChecked={defaultChecked}
			/>
			<SwitchLabelStyled>{label}</SwitchLabelStyled>
		</SwitchLayoutStyled>
	)
}
