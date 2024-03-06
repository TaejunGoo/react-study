import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { JoongAngLogo } from '@/shared/utils/svg'

const FooterInfoLayout = styled('div')``

const FooterLogo = styled(JoongAngLogo)``

const InfoContainer = styled('div')`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2.4rem;
	margin-top: 2.4rem;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			grid-template-columns: 1fr 1fr;
		}
		${theme.mediaQueries.lg} {
			grid-template-columns: 1fr;
			gap: 0.6rem;
		}
	`}
`

const InfoList = styled('ul')`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			flex-direction: row;
			gap: 1.6rem;
		}
	`}
`

const InfoItem = styled('li')`
	font-size: 1.3rem;
	font-weight: 500;
	line-height: 1.4rem;
	color: #777;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			line-height: 2rem;
		}
	`}
`

const CopyrightText = styled('p')`
	font-size: 1.3rem;
	font-weight: 500;
	line-height: 1.4rem;
	color: #777;
	margin-top: 2.4rem;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			line-height: 2rem;
			margin-top: 0.6rem;
		}
	`}
`

export default function FooterInfo() {
	return (
		<FooterInfoLayout>
			<FooterLogo />
			<InfoContainer>
				<InfoList>
					<InfoItem>제이티비씨(주)</InfoItem>
					<InfoItem>대표이사 : 이수영, 전진배</InfoItem>
					<InfoItem>주소 : 서울특별시 마포구 상암산로 38</InfoItem>
					<InfoItem>연락처 : 02-751-6000</InfoItem>
				</InfoList>
				<InfoList>
					<InfoItem>사업자등록번호 : 104-86-33995</InfoItem>
					<InfoItem>통신판매업신고번호 : 2017-서울마포-0896</InfoItem>
					<InfoItem>기사배열기본원칙책임자 : 김준술</InfoItem>
					<InfoItem>청소년보호책임자 : 방지현</InfoItem>
				</InfoList>
			</InfoContainer>
			<CopyrightText>
				JTBC의 모든 콘텐트는 저작권법의 보호를 받은바, 무단 전재, 복사, 배포 등을 금합니다.
			</CopyrightText>
			<CopyrightText>Copyright by JTBC All Rights Reserved.</CopyrightText>
		</FooterInfoLayout>
	)
}
