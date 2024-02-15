import styled from '@emotion/styled'
import UserInput from './UserInput'

const InputLayoutStyled = styled('div')``

const LabelStyled = styled('label')``

interface InputFieldProps extends React.ComponentProps<typeof UserInput> {
	label: string
	hideLabel?: boolean
}

export default function InputField({
	element = 'input',
	type = 'text',
	placeholder,
	id,
	fullWidth,
	autoComplete = 'false',
	required = false,
	label,
	hideLabel,
}: InputFieldProps) {
	return (
		<InputLayoutStyled>
			<LabelStyled htmlFor={id} className={hideLabel ? 'a11y' : ''}>
				{label}
			</LabelStyled>
			<UserInput
				element={element}
				id={id}
				type={type}
				placeholder={placeholder}
				fullWidth={fullWidth}
				autoComplete={autoComplete}
				required={required}
			/>
		</InputLayoutStyled>
	)
}
