import styled from '@emotion/styled'
import Link from 'next/link'
import { css } from '@emotion/react'
import { LinkArrowIcon } from '@/shared/utils/svg'

const NoticeLayout = styled('div')`
	display: flex;
	align-items: center;
	padding: 1.6rem 0;
	gap: 2.4rem;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			border-bottom: 1px solid #e4e4e4;
		}
	`}
`

const NoticeTitle = styled('div')`
	font-size: 1.4rem;
	color: #242424;
	font-weight: 700;
	line-height: 1.6rem;
	flex-shrink: 0;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			font-size: 1.6rem;
		}
	`}
`

const NoticeItemLink = styled(Link)`
	font-size: 1.4rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-weight: 600;
	line-height: 1.6rem;
	flex-grow: 1;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			font-size: 1.6rem;
		}
	`}
`

const NoticeLinkButton = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			& > svg {
				width: 24px;
				height: 24px;
			}
		}
	`}
`

interface FooterNoticeProps {
	className?: string
}
export default function FooterNotice({ className }: FooterNoticeProps) {
	return (
		<NoticeLayout className={className}>
			<NoticeTitle>공지사항</NoticeTitle>
			<NoticeItemLink href="/">
				&apos;차이나는 K-클라스&apos; 이달의 좋은 프로그램상 수상
			</NoticeItemLink>
			<NoticeLinkButton href="/">
				<LinkArrowIcon />
			</NoticeLinkButton>
		</NoticeLayout>
	)
}
