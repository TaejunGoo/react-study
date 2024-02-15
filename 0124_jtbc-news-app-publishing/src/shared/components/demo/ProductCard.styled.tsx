'use client'

import styled from '@emotion/styled'
import Link from 'next/link'

export const ProductCardStyled = styled(Link)`
	display: block;

	&:hover {
		.visual {
			.image {
				opacity: 0.8;
			}
		}

		.product-name {
			color: ${({ theme }) => theme.color.vercel_cyan};
		}
	}

	.visual {
		position: relative;

		.badge {
			position: absolute;
			display: flex;
			left: 0.5rem;
			top: 0.5rem;
			z-index: 10;
		}

		.image {
			filter: grayscale(100%);
			border-radius: 0.75rem;
		}
	}

	.product-name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: ${({ theme }) => theme.color.white};
	}
`
