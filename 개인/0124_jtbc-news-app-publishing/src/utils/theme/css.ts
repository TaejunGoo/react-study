'use client'

import { css } from '@emotion/react'
import { shimmer } from '@/utils/theme/keyframes'

export const shimmerCss = (runAnimate: boolean) => css`
	position: relative;
	overflow: hidden;

	&:before {
		content: '';
		position: absolute;
		inset: 0px;
		transform: translate(-100%, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
		background-image: linear-gradient(
			to right,
			transparent,
			rgba(255, 255, 255, 0.1),
			transparent
		);
		animation: ${runAnimate
			? css`
					${shimmer} 1.5s infinite
				`
			: 'none'};
	}
`
