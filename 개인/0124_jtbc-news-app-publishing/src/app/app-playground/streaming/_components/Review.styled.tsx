'use client'

import styled from '@emotion/styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

export const ReviewStyled = styled(Spacer)`
	.title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: ${({ theme }) => theme.color.white};
	}
`
