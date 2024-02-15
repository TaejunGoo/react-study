'use client'

import styled from '@emotion/styled'
import { Grid } from '@/shared/components/demo/Grid.styled'
import { shimmerCss } from '@/utils/theme/css'

export const RenderingPageSkeletonStyled = styled(Grid)`
	.title {
		height: 2rem;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.gray700};
		${shimmerCss(true)}
	}

	.paragraph {
		height: 72px;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.color.gray800};
		${shimmerCss(true)}
	}

	.section {
		order: -1;
		grid-column: 1 / -1;

		/* @media lg */
		${({ theme }) => theme.mediaQueries.lg} {
			order: 0;
			grid-column: span 2 / span 2;
		}

		.inner {
			padding: 0.75rem;
			border-radius: 0.5rem;
			background-color: ${({ theme }) => theme.color.gray900};
			${shimmerCss(true)}

			& > :not([hidden]) ~ :not([hidden]) {
				margin-top: 0.75rem;
				margin-bottom: 0;
			}

			.item-1 {
				height: 1.25rem;
				border-radius: 0.5rem;
				background-color: ${({ theme }) => theme.color.gray700};

				/* @media lg */
				${({ theme }) => theme.mediaQueries.lg} {
					height: 2.5rem;
				}
			}

			.item-2 {
				height: 1.5rem;
				width: 4rem;
				border-radius: 9999px;
				background-color: ${({ theme }) => theme.color.gray300};
			}
		}
	}
`
