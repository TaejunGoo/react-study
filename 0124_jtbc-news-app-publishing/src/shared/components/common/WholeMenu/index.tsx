import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Grid from '../Grid/Grid'
import Container from '../Container/Container'
import InputField from '../InputField/InputField'
import HottestNewsList from './HottestNewsList'
import Sitemap from './Sitemap'

const WholeMenuLayoutStyled = styled('div')`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: #f1f1f1;
	z-index: 3;
	overflow: auto;
	.searchArea,
	.menuArea,
	.subMenuArea,
	.snsArea {
		background-color: antiquewhite;
	}
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			position: absolute;
			top: 70px;
			height: auto;
			bottom: auto;
		}
	`}
`

const WholeMenuRowStyled = styled('div')`
	padding: 10px;
	border-bottom: 1px solid #ccc;
`

export default function WholeMenu({
	isVisible,
	handleWholeMenuVisible,
}: {
	isVisible: boolean
	handleWholeMenuVisible: () => void
}) {
	// 768 이상이면 scroll lock 되지 않도록 처리
	const pc = useMediaQuery({ query: '(min-width:768px)' })
	useEffect(() => {
		if (isVisible && !pc) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isVisible, pc])

	return isVisible ? (
		<WholeMenuLayoutStyled>
			<Container>
				<button type="button" onClick={() => handleWholeMenuVisible()}>
					닫기
				</button>
				<WholeMenuRowStyled>
					<Grid container>
						<Grid xs={12} md={3}>
							<div className="searchArea">
								<InputField
									element="input"
									type="text"
									placeholder="검색"
									id="search"
									label="검색"
									hideLabel
									fullWidth
								/>
								<HottestNewsList />
							</div>
						</Grid>
						<Grid xs={12} md={9}>
							<div className="menuArea">
								<Sitemap />
							</div>
						</Grid>
					</Grid>
				</WholeMenuRowStyled>
				<WholeMenuRowStyled>
					<Grid container>
						<Grid xs={6}>
							<div className="subMenuArea">서브 메뉴 영역</div>
						</Grid>
						<Grid xs={6}>
							<div className="snsArea">SNS 채널 영역</div>
						</Grid>
					</Grid>
				</WholeMenuRowStyled>
			</Container>
		</WholeMenuLayoutStyled>
	) : null
}
