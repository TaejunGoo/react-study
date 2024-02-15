'use client'

import styled from '@emotion/styled'
import { Box } from '@/shared/components/demo/Box.styled'

const ContentStyled = styled('div')`
	box-shadow: ${({ theme }) => theme.shadow.black};
	padding: 1px;
	background-image: radial-gradient(
		at left top,
		${({ theme }) => theme.color.gray500},
		50px,
		${({ theme }) => theme.color.gray800} 50%
	);
	border-radius: 0.5rem;
	margin-top: 2rem;
	margin-bottom: 2rem;

	.content {
		padding: 0.875rem;
		background-color: ${({ theme }) => theme.color.black};
		border-radius: 0.5rem;

		/* @media lg */
		${({ theme }) => theme.mediaQueries.lg} {
			padding: 1.5rem;
		}
	}
`

type ContentStyledProps = React.PropsWithChildren

export function Content({ children }: ContentStyledProps) {
	return (
		<ContentStyled>
			<Box className="content">{children}</Box>
		</ContentStyled>
	)
}
