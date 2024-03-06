import styled from '@emotion/styled'

interface ArticleBaseLayoutStyledProps {
	horizontal?: boolean
	reverse?: boolean
}

const flexDirectionStyle = (props: ArticleBaseLayoutStyledProps) => {
	if (props.horizontal) {
		return props.reverse ? 'row-reverse' : 'row'
	}
	return 'column'
}

const ArticleBaseLayoutStyled = styled.div<ArticleBaseLayoutStyledProps>`
	display: flex;
	flex-direction: ${flexDirectionStyle};
`

interface ArticleBaseProps extends React.ComponentProps<typeof ArticleBaseLayoutStyled> {
	children: React.ReactNode
}
export default function ArticleBase({ children, horizontal, reverse }: ArticleBaseProps) {
	return (
		<ArticleBaseLayoutStyled horizontal={horizontal} reverse={reverse}>
			{children}
		</ArticleBaseLayoutStyled>
	)
}
