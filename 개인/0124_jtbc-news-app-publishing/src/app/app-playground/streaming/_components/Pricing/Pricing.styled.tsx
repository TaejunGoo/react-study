'use client'

import styled from '@emotion/styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'

export const PricingStyled = styled(Spacer)`
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.color.gray900};
	padding: 0.75rem;
`
