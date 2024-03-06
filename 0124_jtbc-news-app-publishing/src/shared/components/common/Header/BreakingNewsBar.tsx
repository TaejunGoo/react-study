import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import Link from 'next/link'
import Container from '../Container/Container'
import { CloseIcon, ToggleArrowIcon } from '@/shared/utils/svg'

const slideUp = keyframes`
  from {
  }
  to {
    transform: translateY(-100%);
  }
`

const NewsItemStyled = styled('div')`
	font-size: 1.4rem;
	line-height: 2rem;
	padding: 1.2rem 0;
	font-weight: 500;
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	&.animate {
		animation: ${slideUp} 1s forwards;
	}
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			padding: 1.4rem 0;
		}
	`}
`

interface FoldProps {
	isFolded: boolean
}
const BreakingNewsLayoutStyled = styled('div')<FoldProps>`
	overflow: hidden;
	background: #ee0007;
	position: relative;
	height: 4.4rem;
	& > div {
		display: flex;
	}
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			height: 4.8rem;
		}
	`}
	${({ isFolded }) =>
		!isFolded
			? css`
					height: auto !important;
					${NewsItemStyled} {
						&:not(:first-child) {
							padding-top: 0;
						}
					}
				`
			: ''}
`

const TitleStyled = styled('div')`
	font-size: 1.4rem;
	line-height: 4.4rem;
	color: #fff;
	padding-right: 1.6rem;
	flex-shrink: 0;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			line-height: 4.8rem;
			padding-right: 2.4rem;
		}
	`}
`

const ListStyled = styled('ul')`
	flex-grow: 1;
	min-width: 0;
`

const ButtonContainerStyled = styled('div')`
	display: flex;
	gap: 1.6rem;
`

const ControlButtonTyled = styled('button')`
	width: 1.6rem;
	height: 4.6rem;
	font-size: 12px;
	flex-shrink: 0;
	background-color: transparent;
	border: 0;
	cursor: pointer;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			height: 4.8rem;
		}
	`}
`

const CloseButtonStyled = styled(ControlButtonTyled)``

const ToggleButtonStyled = styled(ControlButtonTyled)<FoldProps>`
	display: none;
	transform-origin: center;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			display: block;
		}
	`}
	${({ isFolded }) =>
		!isFolded &&
		css`
			& > svg {
				transform: rotate(180deg);
			}
		`}
`

interface BreakingNewsBarProps {
	isVisible: boolean
	isFolded: boolean
	handleBreakingNewsVisible: () => void
	handleBreakingNewsFolded: () => void
}
const BreakingNewsBar = ({
	isVisible,
	isFolded,
	handleBreakingNewsVisible,
	handleBreakingNewsFolded,
}: BreakingNewsBarProps) => {
	const [previousNewsIndex, setPreviousNewsIndex] = useState(0)
	const [currentNewsIndex, setCurrentNewsIndex] = useState(1)
	const [startAnimation, setStartAnimation] = useState(false)
	const newsItems = [
		{
			id: 1,
			text: '1-외교부 "미얀마서 불법 업체에 감금됐던 한국인 19명 풀려나"',
			link: '/',
		},
		{
			id: 2,
			text: "2-'서치미' 전현무, 新 추리 예능 컨트롤 타워 활약",
			link: '/',
		},
		{
			id: 3,
			text: '3-한동훈 "외국인 정책, 우리 국민 도움되기 위한 것"…총선 질문…',
			link: '/',
		},
		{
			id: 4,
			text: '4-박나래, 지난달 조부상 "아빠 같은 할아버지“',
			link: '/',
		},
		{
			id: 5,
			text: '5-행안부 "민원서류 서비스 복구, 쉽지 않지만 최대한 노력"(종합)',
			link: '/',
		},
	]

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout> | undefined // 에디터의 추론(NodeJS.Timeout)을 대신하여 타입 지정
		let intervalId: ReturnType<typeof setInterval> | undefined

		if (newsItems.length > 1) {
			timeoutId = setTimeout(() => {
				setStartAnimation(true) // 애니메이션 시작

				intervalId = setInterval(() => {
					setPreviousNewsIndex((current) => (current + 1) % newsItems.length)
					setCurrentNewsIndex((current) => (current + 1) % newsItems.length)
				}, 4000)
			}, 1000)
		}

		return () => {
			clearTimeout(timeoutId) // setTimeout 클린업
			clearInterval(intervalId) // setInterval 클린업
		}
	}, [newsItems.length])

	return isVisible ? (
		<BreakingNewsLayoutStyled isFolded={isFolded}>
			<Container>
				<TitleStyled>속보</TitleStyled>
				<ListStyled>
					{/* 롤링 되는 케이스 */}
					{isFolded && newsItems.length > 1 ? (
						<>
							<NewsItemStyled
								className={startAnimation ? 'animate' : ''}
								key={`previous-${newsItems[previousNewsIndex].id}`}>
								<Link href={newsItems[previousNewsIndex].link}>
									{newsItems[previousNewsIndex].text}
								</Link>
							</NewsItemStyled>
							<NewsItemStyled
								className={startAnimation ? 'animate' : ''}
								key={newsItems[currentNewsIndex].id}>
								<Link href={newsItems[currentNewsIndex].link}>
									{newsItems[currentNewsIndex].text}
								</Link>
							</NewsItemStyled>
						</>
					) : (
						// 롤링 되지 않거나 토글되어 창이 열린 경우
						<>
							{newsItems.map((item) => (
								<NewsItemStyled key={item.id}>
									<Link href={item.link}>{item.text}</Link>
								</NewsItemStyled>
							))}
						</>
					)}
				</ListStyled>
				<ButtonContainerStyled>
					{newsItems.length > 1 && (
						<ToggleButtonStyled
							type="button"
							onClick={() => handleBreakingNewsFolded()}
							isFolded={isFolded}>
							<ToggleArrowIcon />
						</ToggleButtonStyled>
					)}
					<CloseButtonStyled
						type="button"
						className="close"
						onClick={() => handleBreakingNewsVisible()}>
						<CloseIcon color="#fff" />
					</CloseButtonStyled>
				</ButtonContainerStyled>
			</Container>
		</BreakingNewsLayoutStyled>
	) : null
}

export default BreakingNewsBar
