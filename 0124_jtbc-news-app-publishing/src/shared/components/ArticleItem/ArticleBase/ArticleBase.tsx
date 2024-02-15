import styled from '@emotion/styled'

interface ArticleBaseLayoutStyledProps {
	horizontal?: boolean
}
const ArticleBaseLayoutStyled = styled('div')<ArticleBaseLayoutStyledProps>`
	display: flex;
	flex-direction: column;
	${({ horizontal }) => horizontal && 'flex-direction:row-reverse'};
`
interface ArticleBaseProps extends React.ComponentProps<typeof ArticleBaseLayoutStyled> {
	children: React.ReactNode
}
export default function ArticleBase({ children, horizontal }: ArticleBaseProps) {
	return <ArticleBaseLayoutStyled horizontal={horizontal}>{children}</ArticleBaseLayoutStyled>
}
