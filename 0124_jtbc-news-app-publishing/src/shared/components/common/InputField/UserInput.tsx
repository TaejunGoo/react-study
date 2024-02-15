import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface InputStyledProps {
	fullWidth?: boolean
}
const InputStyled = styled('input')<InputStyledProps>`
	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}
`

const TextareaStyled = styled('textarea')<InputStyledProps>`
	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}
`

interface UserInputProps {
	element: 'input' | 'textarea'
	type: React.HTMLInputTypeAttribute
	placeholder?: string
	id: string
	fullWidth?: boolean
	autoComplete?: string
	required?: boolean
}

export default function UserInput({
	element = 'input',
	type = 'text',
	placeholder,
	id,
	fullWidth,
	autoComplete = 'false',
	required = false,
}: UserInputProps) {
	if (element === 'input') {
		return (
			<InputStyled
				id={id}
				type={type}
				placeholder={placeholder}
				fullWidth={fullWidth}
				autoComplete={autoComplete}
				required={required}
			/>
		)
	}
	return <TextareaStyled id={id} placeholder={placeholder} fullWidth={fullWidth} />
}
