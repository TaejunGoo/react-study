'use client'

import styled from '@emotion/styled'

const ButtonStyled = styled('button')`
	border-radius: 0.5rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;

	&.kind-default {
		background-color: ${({ theme }) => theme.color.gray700};
		color: ${({ theme }) => theme.color.gray100};

		/* @media hover */
		${({ theme }) => theme.mediaQueries.hover} {
			&:hover {
				background-color: ${({ theme }) => theme.color.gray500};
				color: ${({ theme }) => theme.color.white};
			}
		}
	}

	&.kind-error {
		background-color: ${({ theme }) => theme.color.vercel_pink};
		color: ${({ theme }) => theme.color.text.red50};

		/* @media hover */
		${({ theme }) => theme.mediaQueries.hover} {
			&:hover {
				background-color: ${({ theme }) => theme.color.bg.pink600};
				color: ${({ theme }) => theme.color.white};
			}
		}
	}
`

export function Button({
	kind = 'default',
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
	kind?: 'default' | 'error'
}) {
	return (
		<ButtonStyled
			type="button"
			className={`kind-${kind}`}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		/>
	)
}
