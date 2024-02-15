'use client'

import styled from '@emotion/styled'
import { Spacer } from '@/shared/components/demo/Spacer.styled'
import { Box } from '@/shared/components/demo/Box.styled'
import { shimmerCss } from '@/utils/theme/css'

const SkeletonCardStyled = styled('div')`
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.color.gray900_80};
	padding: 1rem;

	&.loading {
		${shimmerCss(false)}
	}

	.bg-gray-700 {
		background-color: ${({ theme }) => theme.color.gray700};
	}

	.rounded-lg {
		border-radius: 0.5rem;
	}

	.item-1 {
		height: 3.5rem;
	}

	.item-2 {
		height: 0.75rem;
		width: 91.666667%;
	}

	.item-3 {
		height: 0.75rem;
		width: 66.666667%;
	}
`

export function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
	return (
		<SkeletonCardStyled className={isLoading ? 'loading' : ''}>
			<Spacer vertical={3}>
				{[1, 2, 3].map((item) => (
					<Box className={`item-${item} bg-gray-700 rounded-lg`} />
				))}
			</Spacer>
		</SkeletonCardStyled>
	)
}
