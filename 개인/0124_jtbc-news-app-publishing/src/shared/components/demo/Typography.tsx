'use clinet'

import styled from '@emotion/styled'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TypographyProps = React.StrictPropsWithChildren<{
	variant: Variant
	className?: string
}>

export const Typography = ({ variant, className, children }: TypographyProps) => {
	const Heading = styled(variant)``

	return <Heading className={className}>{children}</Heading>
}
