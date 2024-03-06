import styled from '@emotion/styled'

const HiddenStyled = styled('span')`
	overflow: hidden;
	position: absolute;
	clip: rect(0, 0, 0, 0);
	clip-path: circle(0);
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	white-space: nowrap;
`

interface A11yHiddenProps {
	children: React.ReactNode
	tag?: keyof JSX.IntrinsicElements
}

export default function A11yHidden({ children, tag }: A11yHiddenProps) {
	return <HiddenStyled as={tag}>{children}</HiddenStyled>
}
