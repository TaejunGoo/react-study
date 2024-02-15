'use client'

import styled from '@emotion/styled'

const PageTitle = styled('h1')`
	color: ${({ theme }) => theme.color.gray300};
	font-weight: 500;
	font-size: 1.25rem;
	line-height: 1.75rem;
`

const PageContent = styled('div')`
	margin-top: 2rem;
	margin-bottom: 0;
	color: ${({ theme }) => theme.color.white};

	& > :not([hidden]) ~ :not([hidden]) {
		margin-top: 2.5rem;
		margin-bottom: 0;
	}
`

const Container = styled('div')`
	& > :not([hidden]) ~ :not([hidden]) {
		--tw-space-y-reverse: 0;
		margin-top: 2rem;
		margin-bottom: 0;
	}
`

type HomePageStyledProps = React.PropsWithChildren<{
	title: string
}>

export default function HomePageStyled({ children, title }: HomePageStyledProps) {
	return (
		<Container>
			<PageTitle>{title}</PageTitle>
			<PageContent>{children}</PageContent>
		</Container>
	)
}
