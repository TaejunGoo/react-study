'use client'

import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'

const SitemapLayoutStyled = styled('div')`
	display: flex;
	flex-wrap: wrap;
`

const SitemapColumnStyled = styled('div')`
	width: 100%;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			width: calc(100% / 3);
		}
	`}
`

const SitemapListStyled = styled('ul')`
	display: flex;
	flex-wrap: wrap;
`

const SitemapItemStyled = styled('li')`
	width: 100%;
	& > a {
		font-weight: bold;
	}
	&.half {
		${({ theme }) => css`
			${theme.mediaQueries.md} {
				width: 50%;
			}
		`}
	}
`

const SubListStyled = styled('ul')`
	display: flex;
	flex-wrap: wrap;
`

const SubItem = styled('li')`
	width: 50%;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			width: 100%;
		}
	`}
`

export default function Sitemap() {
	return (
		<SitemapLayoutStyled>
			<SitemapColumnStyled>
				<SitemapListStyled>
					<SitemapItemStyled>
						<Link href="/">라이브</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">이슈</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">프로그램</Link>
					</SitemapItemStyled>
					<SitemapItemStyled className="half">
						<Link href="/">TV 다시보기</Link>
						<SubListStyled>
							<SubItem>
								<Link href="/">JTBC 뉴스룸</Link>
							</SubItem>
							<SubItem>
								<Link href="/">상암동 클라스</Link>
							</SubItem>
							<SubItem>
								<Link href="/">뉴스5후</Link>
							</SubItem>
							<SubItem>
								<Link href="/">보도특집</Link>
							</SubItem>
							<SubItem>
								<Link href="/">종료 프로그램</Link>
							</SubItem>
						</SubListStyled>
					</SitemapItemStyled>
					<SitemapItemStyled className="half">
						<Link href="/">디지털 오리지널</Link>
						<SubListStyled>
							<SubItem>
								<Link href="/">뉴딥</Link>
							</SubItem>
							<SubItem>
								<Link href="/">뉴썰</Link>
							</SubItem>
							<SubItem>
								<Link href="/">로켓뉴스</Link>
							</SubItem>
							<SubItem>
								<Link href="/">종료 컨텐츠</Link>
							</SubItem>
						</SubListStyled>
					</SitemapItemStyled>
				</SitemapListStyled>
			</SitemapColumnStyled>
			<SitemapColumnStyled>
				<SitemapListStyled>
					<SitemapItemStyled>
						<Link href="/">분야별 뉴스</Link>
						<SubListStyled>
							<SubItem>
								<Link href="/">속보</Link>
							</SubItem>
							<SubItem>
								<Link href="/">정치</Link>
							</SubItem>
							<SubItem>
								<Link href="/">경제</Link>
							</SubItem>
							<SubItem>
								<Link href="/">사회</Link>
							</SubItem>
							<SubItem>
								<Link href="/">국제</Link>
							</SubItem>
							<SubItem>
								<Link href="/">문화</Link>
							</SubItem>
							<SubItem>
								<Link href="/">연예</Link>
							</SubItem>
							<SubItem>
								<Link href="/">스포츠</Link>
							</SubItem>
							<SubItem>
								<Link href="/">날씨</Link>
							</SubItem>
						</SubListStyled>
					</SitemapItemStyled>
				</SitemapListStyled>
			</SitemapColumnStyled>
			<SitemapColumnStyled>
				<SitemapListStyled>
					<SitemapItemStyled>
						<Link href="/">연재/코너</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">팩트체크</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">오늘의 기자</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">시청자 게시판</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">Poll</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">정정반론</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">RSS</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">제보</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">마이페이지</Link>
					</SitemapItemStyled>
					<SitemapItemStyled>
						<Link href="/">알림함</Link>
					</SitemapItemStyled>
				</SitemapListStyled>
			</SitemapColumnStyled>
		</SitemapLayoutStyled>
	)
}
