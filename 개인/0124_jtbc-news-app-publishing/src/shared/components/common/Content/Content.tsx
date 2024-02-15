'use client'

import styled from '@emotion/styled'

const ContentLayoutStyled = styled('div')`
	min-height: 100vh;
	padding: 20px 0;
`

export default function Content({ children }: { children: React.ReactNode }) {
	return <ContentLayoutStyled>{children}</ContentLayoutStyled>
}
