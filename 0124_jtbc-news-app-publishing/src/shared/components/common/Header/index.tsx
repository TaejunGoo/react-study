'use client'

import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import useIsScrollDown from '@/hooks/useIsScrollDown'
import KeywordsBar from './KeywordsBar'
import BreakingNewsBar from './BreakingNewsBar'
import WholeMenu from '../WholeMenu'
import Container from '../Container/Container'
import Logo from './Logo'
import MenuList from './MenuList'
import { AlarmIcon, CloseIcon, HambergerIcon, MemberIcon, SearchIcon } from '@/shared/utils/svg'
import AlarmLayer from '../Alarm/AlarmLayer'

interface HeaderLayoutProps {
	headerHeight?: number
}

const HeaderLayoutStyled = styled('div')<HeaderLayoutProps>`
	width: 100%;
	height: ${({ headerHeight }) => `${headerHeight}px`};
	background: #fff;
`

interface HeaderContainerProps {
	isFixed: boolean
}
const HeaderContainerStyled = styled('div')<HeaderContainerProps>`
	position: ${({ isFixed }) => (isFixed ? 'fixed' : 'static')};
	width: 100%;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
`

const HeaderBarStyled = styled('div')`
	position: relative;
	background: #fff;
	z-index: 2;
`

const HeaderWrapperStyled = styled(Container)`
	padding-top: 0.8rem;
	padding-bottom: 0.8rem;
	position: relative;
	display: flex;
	align-items: flex-end;
	gap: 4.8rem;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			padding-top: 1.6rem;
			padding-bottom: 1.6rem;
		}
		${theme.mediaQueries.lg} {
			padding-top: 1.8rem;
			padding-bottom: 1.8rem;
		}
	`}
`

const HeaderUtilityAreaStyled = styled('div')`
	display: flex;
	gap: 1.2rem;
	margin-left: auto;
	position: relative;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			gap: 1.6rem;
			margin-bottom: -8px;
		}
	`}
`

interface AutoHideBoxProps {
	isScrollDown: boolean
	translateDistance: number
}
const AutoHideBoxStyled = styled('div')<AutoHideBoxProps>`
	top: 100%;
	left: 0;
	width: 100%;
	transition: all 0.4s;
	${({ isScrollDown, translateDistance }) =>
		isScrollDown &&
		css`
			margin-top: -${translateDistance}px;
		`}
`

const UtilityButtonStyled = styled('button')`
	width: 3.2rem;
	height: 3.2rem;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;
	cursor: pointer;
	&.pc {
		display: none;
		${({ theme }) => css`
			${theme.mediaQueries.md} {
				display: flex;
			}
		`}
	}
`

export default function TestHeader() {
	const [isWholeMenuVisible, setIsWholeMenuVisible] = useState(false) // 전체 메뉴 영역 노출 상태
	const [isBreakingNewVisible, setIsBreakingNewVisible] = useState(true) // 속보 영역 노출 상태
	const [isBreakingNewsFolded, setIsBreakingNewsFolded] = useState(true) // 속보 영역 접기 상태
	const [autoHideBoxHeight, setAutoHideBoxHeight] = useState(0) // 스크롤 숨김 영역 높이 상태 - 뷰포트 변경, 속보 영역 여닫기에 따라 바뀌는 값
	const [isAlarmLayerVisible, setIsAlarmLayerVisible] = useState(false) // 알람 레이어 노출 상태
	const [headerHeight, setHeaderHeight] = useState<number | undefined>(undefined) // 헤더 전체 높이 상태 - 뷰포트 변경 시에만 바뀌는 값
	const autoHideBoxRef = useRef<HTMLDivElement>(null) // 스크롤 숨김 영역 Ref
	const headerContainerRef = useRef<HTMLDivElement>(null) // 헤더 높이 영역 Ref
	const isScrollDown = useIsScrollDown() // 스크롤 상태 boolean
	const viewport = useMediaQuery({ query: '(min-width:768px)' }) // 뷰포트 변경 기준

	// 전체 메뉴 영역 노출 제어 함수
	const handleWholeMenuVisible = () => {
		setIsWholeMenuVisible(!isWholeMenuVisible)
	}
	// 속보 영역 노출 제어 함수
	const handleBreakingNewsVisible = () => {
		setIsBreakingNewVisible(!isBreakingNewVisible)
	}
	// 속보 영역 접기 제어 함수
	const handleBreakingNewsFolded = () => {
		setIsBreakingNewsFolded(!isBreakingNewsFolded)
	}
	// 알람 레이어 노출 제어 함수
	const handleAlarmLayerVisible = () => {
		setIsAlarmLayerVisible(!isAlarmLayerVisible)
	}

	// 스크롤 숨김 영역 높이 감지
	useEffect(() => {
		if (autoHideBoxRef.current) {
			setAutoHideBoxHeight(autoHideBoxRef.current.offsetHeight)
		}
	}, [isBreakingNewsFolded, isBreakingNewVisible, viewport])
	// 최초 header의 height를 최상단 부모에 부여
	// height가 state에 등록되면 최상단 부모의 자식이 fixed 됨
	// breakpoint 변경 시 마다 재실행됨(dep ary)
	useEffect(() => {
		if (headerContainerRef.current) {
			setHeaderHeight(headerContainerRef.current.offsetHeight)
		}
	}, [viewport])

	return (
		<HeaderLayoutStyled headerHeight={headerHeight}>
			<HeaderContainerStyled ref={headerContainerRef} isFixed={!!headerHeight}>
				<HeaderBarStyled>
					<HeaderWrapperStyled>
						<Logo />
						<MenuList />
						<HeaderUtilityAreaStyled>
							<UtilityButtonStyled
								className="pc"
								onClick={() => handleAlarmLayerVisible()}>
								<AlarmIcon />
							</UtilityButtonStyled>
							<UtilityButtonStyled className="pc">
								<MemberIcon />
							</UtilityButtonStyled>
							<UtilityButtonStyled>
								<SearchIcon />
							</UtilityButtonStyled>
							<UtilityButtonStyled onClick={() => handleWholeMenuVisible()}>
								{isWholeMenuVisible ? (
									<CloseIcon color="#242424" />
								) : (
									<HambergerIcon />
								)}
							</UtilityButtonStyled>
							<AlarmLayer
								isVisible={isAlarmLayerVisible}
								handleAlarmLayerVisible={() => handleAlarmLayerVisible()}
							/>
						</HeaderUtilityAreaStyled>
					</HeaderWrapperStyled>
				</HeaderBarStyled>
				<AutoHideBoxStyled
					isScrollDown={isScrollDown}
					translateDistance={autoHideBoxHeight}
					ref={autoHideBoxRef}>
					<KeywordsBar />
				</AutoHideBoxStyled>
				<BreakingNewsBar
					isVisible={isBreakingNewVisible}
					isFolded={isBreakingNewsFolded}
					handleBreakingNewsVisible={() => handleBreakingNewsVisible()}
					handleBreakingNewsFolded={() => handleBreakingNewsFolded()}
				/>
				<WholeMenu
					isVisible={isWholeMenuVisible}
					handleWholeMenuVisible={() => handleWholeMenuVisible()}
				/>
			</HeaderContainerStyled>
		</HeaderLayoutStyled>
	)
}
