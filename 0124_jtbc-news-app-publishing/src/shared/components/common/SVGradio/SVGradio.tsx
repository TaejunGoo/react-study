'use client'

import styled from '@emotion/styled'

interface LayoutStyledProps {
	disabled: boolean
}
const RadioLayoutStyled = styled('label')<LayoutStyledProps>`
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
			fill: white;
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
	border-radius: 50%;
	border: 1px solid #333;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.15s;
	svg {
		visibility: hidden;
		width: 12px;
		height: 12px;
	}
`

const SVGstyled = styled('svg')`
	fill: #333;
	stroke: none;
`

const LabelTextStyled = styled('div')`
	font-size: 14px;
`

interface SVGradioProps {
	label: string
	name: string
	defaultChecked?: boolean
	disabled?: boolean
}

/**
 *
 * @param label label text
 * @param name radio group name
 * @param disabled 비활성화 여부
 * @param defaultChecked 기본 checked 여부
 */
export default function SVGradio({
	label,
	name,
	disabled = false,
	defaultChecked = false,
}: SVGradioProps) {
	return (
		<RadioLayoutStyled disabled={disabled}>
			<InputStyled
				type="radio"
				defaultChecked={defaultChecked}
				name={name}
				disabled={disabled}
			/>
			<SVGwrapperStyled>
				<SVGstyled viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="6" />
				</SVGstyled>
			</SVGwrapperStyled>
			<LabelTextStyled>{label}</LabelTextStyled>
		</RadioLayoutStyled>
	)
}
