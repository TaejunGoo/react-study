'use client'

import styled from '@emotion/styled'
import Container from '../Container/Container'
import Notice from './Notice/Notice'
import FooterInfo from './FooterInfo/FooterInfo'

const FooterLayoutStyled = styled('footer')`
	.noticeArea {
		padding-top: 20px;
		padding-bottom: 20px;
	}
`

const FooterRowStyled = styled('div')`
	background: #f3f4f5;
	padding: 20px 0;
`

export default function TestFooter() {
	return (
		<FooterLayoutStyled>
			<Container>
				<div className="noticeArea">
					<Notice />
				</div>
			</Container>
			<FooterRowStyled>
				<Container>
					<FooterInfo />
				</Container>
			</FooterRowStyled>
		</FooterLayoutStyled>
	)
}
