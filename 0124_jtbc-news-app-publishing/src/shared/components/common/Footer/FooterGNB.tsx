import styled from '@emotion/styled'
import Link from 'next/link'
import { css } from '@emotion/react'
import { AccordionToggleArrowIcon } from '@/shared/utils/svg'

const FooterGNBList = styled('ul')`
	display: grid;
	grid-template-columns: 1fr;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			grid-template-columns: repeat(6, 1fr);
			gap: 3.2rem;
			padding: 2.4rem 0 4.8rem;
		}
	`}
`

const FooterGNBItem = styled('li')`
	align-self: stretch;
	border-top: 1px solid #f2f2f2;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			border: 0;
		}
	`}
`
interface AccordionProps {
	$expanded?: boolean
}
const ExpandBtn = styled('button')<AccordionProps>`
	border: 0;
	background: transparent;
	text-align: left;
	padding: 1.6rem 0;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.5rem;
	font-weight: 600;
	line-height: 1.2;
	color: #777;
	position: relative;
	cursor: pointer;
	& > svg {
		position: absolute;
		right: 0;
		top: 50%;
		margin-top: -0.8rem;
	}
	${({ $expanded }) =>
		$expanded &&
		css`
			& > svg {
				transform: rotate(180deg);
			}
		`}
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			display: none;
		}
	`}
`

const MenuTitle = styled('div')`
	display: none;
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 1.57;
	color: #777;
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			display: block;
		}
	`}
`

const SubMenuWrapper = styled('div')<AccordionProps>`
	display: grid;
	grid-template-rows: 0fr;
	transition: grid-template-rows 0.2s ease-out;
	${({ $expanded }) =>
		$expanded &&
		css`
			grid-template-rows: 1fr;
			padding-bottom: 1.6rem;
		`}
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			grid-template-rows: 1fr;
			padding-bottom: 0;
			margin-top: 2rem;
		}
	`}
`

const SubMenuList = styled('ul')`
	overflow: hidden;
`

const SubMenuItem = styled('li')`
	margin-top: 1.2rem;
	&:first-child {
		margin-top: 0;
	}
`

const SubMenuLink = styled(Link)`
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.42;
	color: #777;
`

const SubTitleWrapper = styled(SubMenuWrapper)`
	${({ theme }) => css`
		${theme.mediaQueries.lg} {
			margin-top: 1.2rem;
		}
	`}
`

const SubTitleLink = styled(SubMenuLink)`
	font-weight: 700;
`

export default function FooterGNB() {
	return (
		<FooterGNBList>
			<FooterGNBItem>
				<ExpandBtn $expanded>
					라이브
					<AccordionToggleArrowIcon />
				</ExpandBtn>
				<MenuTitle>라이브</MenuTitle>
				<SubMenuWrapper $expanded>
					<SubMenuList>
						<SubMenuItem>
							<SubMenuLink href="/">On Air</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">편성표</SubMenuLink>
						</SubMenuItem>
					</SubMenuList>
				</SubMenuWrapper>
			</FooterGNBItem>
			<FooterGNBItem>
				<ExpandBtn>
					이슈
					<AccordionToggleArrowIcon />
				</ExpandBtn>
				<MenuTitle>이슈</MenuTitle>
				<SubMenuWrapper>
					<SubMenuList>
						<SubMenuItem>
							<SubMenuLink href="/">이스라엘-하마스 전쟁</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">한일 정상회담</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">후쿠시마 오염수 방류</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">마약범죄 급증</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">파리올림픽2026</SubMenuLink>
						</SubMenuItem>
					</SubMenuList>
				</SubMenuWrapper>
			</FooterGNBItem>
			<FooterGNBItem>
				<ExpandBtn>
					TV 다시보기
					<AccordionToggleArrowIcon />
				</ExpandBtn>
				<MenuTitle>TV 다시보기</MenuTitle>
				<SubMenuWrapper>
					<SubMenuList>
						<SubMenuItem>
							<SubMenuLink href="/">JTBC뉴스룸</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">아침&</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">보도특집</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">종료 프로그램</SubMenuLink>
						</SubMenuItem>
					</SubMenuList>
				</SubMenuWrapper>
			</FooterGNBItem>
			<FooterGNBItem>
				<ExpandBtn>
					디지털 오리지널
					<AccordionToggleArrowIcon />
				</ExpandBtn>
				<MenuTitle>디지털 오리지널</MenuTitle>
				<SubMenuWrapper>
					<SubMenuList>
						<SubMenuItem>
							<SubMenuLink href="/">뉴딥</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">뉴썰</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">로켓뉴스</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">종료 컨텐츠</SubMenuLink>
						</SubMenuItem>
					</SubMenuList>
				</SubMenuWrapper>
			</FooterGNBItem>
			<FooterGNBItem>
				<ExpandBtn>
					분야별 뉴스
					<AccordionToggleArrowIcon />
				</ExpandBtn>
				<MenuTitle>분야별 뉴스</MenuTitle>
				<SubMenuWrapper>
					<SubMenuList>
						<SubMenuItem>
							<SubMenuLink href="/">속보</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">정치</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">경제</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">사회</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">국제</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">문화</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">연예</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">스포츠</SubMenuLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubMenuLink href="/">날씨</SubMenuLink>
						</SubMenuItem>
					</SubMenuList>
				</SubMenuWrapper>
			</FooterGNBItem>
			<FooterGNBItem>
				<ExpandBtn>
					연재/코너
					<AccordionToggleArrowIcon />
				</ExpandBtn>
				<MenuTitle>연재/코너</MenuTitle>
				<SubTitleWrapper>
					<SubMenuList>
						<SubMenuItem>
							<SubTitleLink href="/">팩트체크</SubTitleLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubTitleLink href="/">오늘의 기자</SubTitleLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubTitleLink href="/">시청자 게시판</SubTitleLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubTitleLink href="/">Poll</SubTitleLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubTitleLink href="/">정정/반론</SubTitleLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubTitleLink href="/">제보하기</SubTitleLink>
						</SubMenuItem>
						<SubMenuItem>
							<SubTitleLink href="/">RSS 서비스</SubTitleLink>
						</SubMenuItem>
					</SubMenuList>
				</SubTitleWrapper>
			</FooterGNBItem>
		</FooterGNBList>
	)
}
