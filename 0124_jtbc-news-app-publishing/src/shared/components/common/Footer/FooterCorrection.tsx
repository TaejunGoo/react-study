import styled from '@emotion/styled'
import Link from 'next/link'
import { css } from '@emotion/react'
import { LinkArrowIcon } from '@/shared/utils/svg'

const CorrectionLayout = styled('div')`
	padding: 1.6rem;
	border: 1px solid #e4e4e4;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			display: flex;
			align-items: flex-start;
			gap: 3.6rem;
		}
		${theme.mediaQueries.md} {
			gap: 6.4rem;
		}
	`}
`

const CorrectionTitle = styled(Link)`
	display: flex;
	align-items: center;
	color: #242424;
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 2rem;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			font-size: 1.4rem;
			flex-shrink: 0;
			& > svg {
				display: none;
			}
		}
		${theme.mediaQueries.md} {
			font-size: 1.6rem;
		}
	`};
`

const CorrectionList = styled('ul')`
	margin-top: 1.8rem;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			margin-top: 0;
			display: flex;
			flex-direction: column;
			gap: 0.8rem;
			flex-grow: 1;
		}
		${theme.mediaQueries.lg} {
			gap: 1.2rem;
		}
	`};
`

const CorrectionItem = styled('li')`
	display: flex;
	align-items: center;
	border-top: 1px solid #e4e4e4;
	&:last-child > a {
		padding-bottom: 0;
	}
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			border: 0;
			gap: 1.2rem;
		}
	`};
`

const CorrectionItemTitle = styled(Link)`
	display: block;
	flex-grow: 1;
	padding: 1.2rem 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 2rem;
	color: #242424;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			padding: 0;
			flex-grow: initial;
		}
		${theme.mediaQueries.lg} {
			font-size: 1.6rem;
		}
	`};
`

const CorrectionTime = styled('span')`
	flex-shrink: 0;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.14;
	color: #777;
`

const CorrectionLinkButton = styled(Link)`
	display: none;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			display: block;
		}
	`}
`
interface FooterNoticeProps {
	className?: string
}
export default function FooterCorrection({ className }: FooterNoticeProps) {
	return (
		<CorrectionLayout className={className}>
			<CorrectionTitle href="/">
				정정/반론
				<LinkArrowIcon />
			</CorrectionTitle>
			<CorrectionList>
				<CorrectionItem>
					<CorrectionItemTitle href="/">
						&quot;직접 얘기나 들어보자&quot;…&apos;김포 서울 편입&apos; 주민 설명회 관련
					</CorrectionItemTitle>
					<CorrectionTime>15분 전</CorrectionTime>
				</CorrectionItem>
				<CorrectionItem>
					<CorrectionItemTitle href="/">
						&quot;난 생명이 왔다 갔다 하는데&quot;…지방 병원도 &apos;인력 부족&apos;
						비상
					</CorrectionItemTitle>
					<CorrectionTime>1시간 전</CorrectionTime>
				</CorrectionItem>
				<CorrectionItem>
					<CorrectionItemTitle href="/">
						백악관 &quot;대러 중대 제재 발표&quot; 예고에…러 &quot;미 상원의원
						테러리스트 지정&quot; 맞불
					</CorrectionItemTitle>
					<CorrectionTime>1일 전</CorrectionTime>
				</CorrectionItem>
			</CorrectionList>
			<CorrectionLinkButton href="/">
				<LinkArrowIcon width={24} height={24} />
			</CorrectionLinkButton>
		</CorrectionLayout>
	)
}
