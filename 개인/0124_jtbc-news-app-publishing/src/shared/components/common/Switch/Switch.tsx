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
	border: 1px solid gray;
	border-radius: 100px;
	width: 30px;
	height: 10px;
	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: -3px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background-color: gray;
		transition: left 250ms linear;
		border: 1px solid gray;
	}
	&:checked::before {
		background-color: white;
		left: 20px;
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
	defaultChecked?: boolean
}
export default function Switch({ label, defaultChecked }: SwitchProps) {
	return (
		<SwitchLayoutStyled>
			<SwitchInputStyled role="switch" type="checkbox" defaultChecked={defaultChecked} />
			<SwitchLabelStyled>{label}</SwitchLabelStyled>
		</SwitchLayoutStyled>
	)
}
