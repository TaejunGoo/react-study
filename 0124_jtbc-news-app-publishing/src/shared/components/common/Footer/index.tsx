'use client'

import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Container from '../Container/Container'
import FooterInfo from './FooterInfo'
import FooterGNB from './FooterGNB'
import FooterCorrection from './FooterCorrection'
import FooterNotice from './FooterNotice'
import FooterBelt from './FooterBelt'

const FooterLayoutStyled = styled('footer')``

const FooterInfoContainer = styled('div')`
	background: #f6f6f6;
	padding: 3.2rem 0;
	margin-top: 1.2rem;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			background: #fff;
			padding: 4.8rem 0;
			margin-top: 0;
		}
	`}
`

const MarginedFooterCorrection = styled(FooterCorrection)`
	margin: 4.8rem 0;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			margin: 6.4rem 0;
		}
	`}
`

const FooterBeltContainer = styled('div')`
	display: none;
	background: #f6f6f6;
	padding: 1.4rem 0;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			display: block;
		}
	`}
`

export default function TestFooter() {
	return (
		<FooterLayoutStyled>
			<Container>
				<MarginedFooterCorrection />
				<FooterNotice />
				<FooterGNB />
			</Container>
			<FooterBeltContainer>
				<Container>
					<FooterBelt />
				</Container>
			</FooterBeltContainer>
			<FooterInfoContainer>
				<Container>
					<FooterInfo />
				</Container>
			</FooterInfoContainer>
		</FooterLayoutStyled>
	)
}
