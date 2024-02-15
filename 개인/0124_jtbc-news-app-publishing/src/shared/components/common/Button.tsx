import styled from '@emotion/styled'

const ButtonStyled = styled.button`
	&.storybook-button {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-weight: 700;
		border: 0;
		border-radius: 3em;
		cursor: pointer;
		display: inline-block;
		line-height: 1;

		&--primary {
			color: white;
			background-color: #1ea7fd;
		}

		&--secondary {
			color: #333;
			background-color: transparent;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
		}
		&--small {
			font-size: 12px;
			padding: 10px 16px;
		}
		&--medium {
			font-size: 14px;
			padding: 11px 20px;
		}
		&--large {
			font-size: 16px;
			padding: 12px 24px;
		}
	}
`

interface ButtonProps {
	/** 기본 버튼 사용 여부 */
	primary?: boolean
	/** 배경 색상 */
	backgroundColor?: string
	/** 크기 */
	size?: 'small' | 'medium' | 'large'
	/** 버튼 텍스트 및 컨텐츠(아이콘 등) */
	label: string
	/** click시 실행 될 함수 */
	onClick: () => void
	/** 비활성 상태 여부 */
	disabled?: boolean
}

export function Button({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	disabled = false,
	onClick,
}: ButtonProps) {
	const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
	return (
		<ButtonStyled
			type="button"
			className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
			onClick={onClick}
			disabled={disabled}
			style={{ backgroundColor }}>
			{label}{' '}
		</ButtonStyled>
	)
}
