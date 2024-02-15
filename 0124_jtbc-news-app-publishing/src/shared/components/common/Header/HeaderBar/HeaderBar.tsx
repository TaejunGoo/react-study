import styled from '@emotion/styled'
import Link from 'next/link'
import { DESKTOP } from '@/hooks/useResponsive'

const HeaderBarLayoutStyled = styled('div')`
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	background-color: #fff;
	position: relative;
	z-index: 2;
	.logoArea {
		margin-right: 50px;
	}
	.btnArea {
		display: flex;
		align-items: center;
		margin-left: auto;
	}
`

const MenuListStyled = styled('ul')`
	display: flex;
	align-items: center;
	gap: 10px;
`

const MenuItemStyled = styled(Link)`
	font-size: 16px;
	font-weight: bold;
`

export default function HeaderBar({ childBtns }: { childBtns: React.ReactNode }) {
	return (
		<HeaderBarLayoutStyled>
			<div className="logoArea">
				<h1>
					<Link href="/">JTBC</Link>
				</h1>
			</div>
			{/* 조건부 렌더링: DESKTOP */}
			<DESKTOP>
				<nav className="menuArea">
					<MenuListStyled>
						<li>
							<MenuItemStyled href="/">라이브</MenuItemStyled>
						</li>
						<li>
							<MenuItemStyled href="/">프로그램</MenuItemStyled>
						</li>
						<li>
							<MenuItemStyled href="/">정치</MenuItemStyled>
						</li>
						<li>
							<MenuItemStyled href="/">경제</MenuItemStyled>
						</li>
						<li>
							<MenuItemStyled href="/">사회</MenuItemStyled>
						</li>
						<li>
							<MenuItemStyled href="/">국제</MenuItemStyled>
						</li>
						<li>
							<MenuItemStyled href="/">문화</MenuItemStyled>
						</li>
						<li>
							<MenuItemStyled href="/">연예</MenuItemStyled>
						</li>
					</MenuListStyled>
				</nav>
			</DESKTOP>
			<div className="btnArea">{childBtns}</div>
		</HeaderBarLayoutStyled>
	)
}
