'use client'

import styled from '@emotion/styled'
import { spin } from '@/utils/theme/keyframes'

export const AddToCartStyled = styled('button')`
	background-color: ${({ theme }) => theme.color.vercel_blue};
	position: relative;
	width: 100%;
	align-items: center;
	border-radius: 0.5rem;
	padding: 0.25rem 0.75rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	color: ${({ theme }) => theme.color.white};

	&:disabled {
		color: ${({ theme }) => theme.color.white_70};
	}

	& > :not([hidden]) ~ :not([hidden]) {
		margin-right: 0;
		margin-left: 0.5rem;
	}

	/* @media hover */
	${({ theme }) => theme.mediaQueries.hover} {
		&:hover {
			background-color: ${({ theme }) => theme.color.vercel_blue_90};
		}
	}

	.pending {
		position: absolute;
		right: 0.5rem;
		top: 0.375rem;

		&-icon {
			/*    */
			height: 1rem;
			width: 1rem;
			border-radius: 9999px;
			border-width: 3px;
			border-color: ${({ theme }) => theme.color.white};
			border-right-color: transparent;
			animation: ${spin} 1s linear infinite;
		}
	}
`
