'use client'

import styled from '@emotion/styled'
import { loading } from '@/utils/theme/keyframes'

export const LoadingDotsStyled = styled('div')`
	font-size: 0.875rem;
	line-height: 1.25rem;

	.inner {
		& > :not([hidden]) ~ :not([hidden]) {
			margin-right: 0;
			margin-left: 0.125rem;
		}
	}

	[class^='dot-'] {
		display: inline-flex;
		border-radius: 9999px;
	}

	.dot-1 {
		animation: ${loading} 1.4s ease-in-out infinite;
	}

	.dot-2 {
		animation: ${loading} 1.4s ease-in-out 0.2s infinite;
	}

	.dot-3 {
		animation: ${loading} 1.4s ease-in-out 0.4s infinite;
	}
`
