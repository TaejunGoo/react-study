import styled from '@emotion/styled'

const variantStyles = {
	primary: {
		backgroundColor: '#007bff',
		color: 'white',
	},
	secondary: {
		backgroundColor: '#6c757d',
		color: 'white',
	},
	success: {
		backgroundColor: '#28a745',
		color: 'white',
	},
	// 추가적인 variant는 여기에 정의
}

interface VariantExStyledProps {
	$variant: keyof typeof variantStyles
}
const VariantExStyled = styled('div')<VariantExStyledProps>`
	padding: 0.375rem 0.75rem;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	font-size: 1rem;
	line-height: 1.5;
	${({ $variant }) => variantStyles[$variant] || {}}
`

interface VariantExProps {
	children: React.ReactNode
	variant: keyof typeof variantStyles
	as?: React.ElementType
}
export default function VariantEx({ children, variant, as }: VariantExProps) {
	return (
		<VariantExStyled as={as} $variant={variant}>
			{children}
		</VariantExStyled>
	)
}
