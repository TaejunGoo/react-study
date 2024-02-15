'use client'

import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import useIsScrollDown from '@/hooks/useIsScrollDown'
import KeywordsBar from './KeywordsBar/KeywordsBar'
import BreakingNewsBar from './BreakingNewsBar/BreakingNewsBar'
import HeaderBar from './HeaderBar/HeaderBar'
import WholeMenu from './WholeMenu/WholeMenu'
import Container from '../Container/Container'

interface HeaderLayoutProps {
	marginDistance: number
}

const HeaderLayoutStyled = styled('div')<HeaderLayoutProps>`
	width: 100%;
	position: sticky;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
	background: #fff;
	margin-bottom: ${({ marginDistance }) => `${marginDistance}px`};
`

const HeaderWrapperStyled = styled('div')`
	background: #fff;
	position: relative;
	z-index: 2;
`

interface AutoHideBoxProps {
	isScrollDown: boolean
	translateDistance: number
}
const AutoHideBoxStyled = styled('div')<AutoHideBoxProps>`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	transition: all 0.4s;
	${({ isScrollDown, translateDistance }) =>
		isScrollDown &&
		css`
			transform: translateY(-${translateDistance}px);
		`}
`

const TempBtnStyled = styled('button')`
	display: flex;
	width: 30px;
	height: 30px;
	border: 1px solid red;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	color: purple;
`

export default function TestHeader() {
	const [isWholeMenuVisible, setIsWholeMenuVisible] = useState(false) // 전체 메뉴 영역 노출 상태
	const [isBreakingNewVisible, setIsBreakingNewVisible] = useState(true) // 속보 영역 노출 상태
	const [isBreakingNewsFolded, setIsBreakingNewsFolded] = useState(true) // 속보 영역 접기 상태
	const [autoHideBoxHeight, setAutoHideBoxHeight] = useState(0) // 스크롤 숨김 영역 높이 상태 - 뷰포트 변경, 속보 영역 여닫기에 따라 바뀌는 값
	const [autoHideBoxHeightAsLoaded, setAutoHideBoxHeightAsLoaded] = useState(0) // 스크롤 숨김 영역 높이 상태 - 뷰포트 변경 시에만 바뀌는 값
	const autoHideBoxRef = useRef<HTMLDivElement>(null) // 스크롤 숨김 영역 Ref
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

	// 스크롤 숨김 영역 높이 감지
	useEffect(() => {
		if (autoHideBoxRef.current) {
			setAutoHideBoxHeight(autoHideBoxRef.current.offsetHeight)
		}
	}, [isBreakingNewsFolded, isBreakingNewVisible, viewport])
	useEffect(() => {
		if (autoHideBoxRef.current) {
			setAutoHideBoxHeightAsLoaded(autoHideBoxRef.current.offsetHeight)
		}
	}, [viewport])

	return (
		<HeaderLayoutStyled marginDistance={autoHideBoxHeightAsLoaded}>
			<HeaderWrapperStyled>
				<Container>
					<HeaderBar
						childBtns={
							<>
								<TempBtnStyled>알림</TempBtnStyled>
								<TempBtnStyled>마이</TempBtnStyled>
								<TempBtnStyled>검색</TempBtnStyled>
								<TempBtnStyled onClick={() => handleWholeMenuVisible()}>
									햄
								</TempBtnStyled>
							</>
						}
					/>
				</Container>
			</HeaderWrapperStyled>
			<AutoHideBoxStyled
				isScrollDown={isScrollDown}
				translateDistance={autoHideBoxHeight}
				ref={autoHideBoxRef}>
				<KeywordsBar />
				<BreakingNewsBar
					isVisible={isBreakingNewVisible}
					isFolded={isBreakingNewsFolded}
					handleBreakingNewsVisible={() => handleBreakingNewsVisible()}
					handleBreakingNewsFolded={() => handleBreakingNewsFolded()}
				/>
			</AutoHideBoxStyled>
			<WholeMenu
				isVisible={isWholeMenuVisible}
				handleWholeMenuVisible={() => handleWholeMenuVisible()}
			/>
		</HeaderLayoutStyled>
	)
}
