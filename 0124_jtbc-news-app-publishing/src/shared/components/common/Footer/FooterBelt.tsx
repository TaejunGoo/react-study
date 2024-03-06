import styled from '@emotion/styled'

const FooterBeltList = styled('ul')`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 32px;
`

const FooterBeltItem = styled('li')`
	border-right: 1px solid #e4e4e4;
`

const FooterBeltButton = styled('button')`
	font-size: 1.3rem;
	font-weight: 500;
	line-height: 1.6rem;
	background: transparent;
	padding: 0;
	border: 0;
	color: #777;
	cursor: pointer;
`

export default function FooterBelt() {
	return (
		<FooterBeltList>
			<FooterBeltItem>
				<FooterBeltButton>JTBC</FooterBeltButton>
			</FooterBeltItem>
			<FooterBeltItem>
				<FooterBeltButton>홍보견학</FooterBeltButton>
			</FooterBeltItem>
			<FooterBeltItem>
				<FooterBeltButton>광고·협찬·큐톤</FooterBeltButton>
			</FooterBeltItem>
			<FooterBeltItem>
				<FooterBeltButton>약관·정책</FooterBeltButton>
			</FooterBeltItem>
			<FooterBeltItem>
				<FooterBeltButton>윤리경영·뉴스제보</FooterBeltButton>
			</FooterBeltItem>
			<FooterBeltItem>
				<FooterBeltButton>고객센터</FooterBeltButton>
			</FooterBeltItem>
		</FooterBeltList>
	)
}
