'use client'

import styled from '@emotion/styled'

interface LayoutStyledProps {
	disabled: boolean
}
const CheckboxLayoutStyled = styled('label')<LayoutStyledProps>`
	display: inline-flex;
	align-items: center;
	gap: 5px;
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`

const InputStyled = styled('input')`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
	&:checked + div {
		background: salmon;
		svg {
			visibility: visible;
		}
	}
	&:disabled + div {
		background: lightgray;
	}
	&:disabled:checked + div {
		background: purple;
	}
`
const SVGwrapperStyled = styled('div')`
	width: 24px;
	height: 24px;
	background: transparent;
	border-radius: 3px;
	border: 1px solid #333;
	transition: all 0.15s;
	svg {
		visibility: hidden;
	}
`
const SVGstyled = styled('svg')`
	fill: none;
	stroke: black;
	stroke-width: 2px;
`
const LabelTextStyled = styled('div')`
	font-size: 14px;
`

interface SVGcheckboxProps {
	label: string
	defaultChecked?: boolean
	disabled?: boolean
}
export default function SVGcheckbox({
	label,
	defaultChecked = false,
	disabled = false,
}: SVGcheckboxProps) {
	return (
		<CheckboxLayoutStyled disabled={disabled}>
			<InputStyled type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
			<SVGwrapperStyled>
				<SVGstyled viewBox="0 0 24 24">
					<polyline points="20 6 9 17 4 12" />
				</SVGstyled>
			</SVGwrapperStyled>
			<LabelTextStyled>{label}</LabelTextStyled>
		</CheckboxLayoutStyled>
	)
}
