import { css, Theme } from '@emotion/react'
import { theme } from '@/utils/theme'

export type ResponsiveStyleRules = {
	[key: string]: ReturnType<typeof css>
}
export type UseSizeRules = {
	[Key in keyof Theme['mediaQueries']]?: string
}

export const generateResponsiveStyles = (
	responsiveStyleRules: ResponsiveStyleRules,
	useSizeRules: UseSizeRules,
) => {
	return Object.entries(useSizeRules).map(([key, val]) => {
		const mediaQueryKey = key as keyof typeof theme.mediaQueries
		return val
			? css`
					${theme.mediaQueries[mediaQueryKey]} {
						${responsiveStyleRules[val]}
					}
				`
			: ''
	})
}
