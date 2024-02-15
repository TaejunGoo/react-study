import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import Link from 'next/link'
import Container from '../../Container/Container'

const slideUp = keyframes`
  from {
  }
  to {
    transform: translateY(-100%);
  }
`

interface FoldProps {
	isFolded: boolean
}
const BreakingNewsLayoutStyled = styled.div<FoldProps>`
	overflow: hidden;
	background: linear-gradient(90deg, #185da0 -0.37%, #21a4ce 100%);
	position: relative;
	height: 18px;
	& > div {
		display: flex;
	}
	.title {
		font-size: 12px;
		color: #52d2ff;
		padding-right: 10px;
		flex-shrink: 0;
	}
	.toggle {
		height: 18px;
		border: 1px solid red;
		font-size: 12px;
		flex-shrink: 0;
	}
	.close {
		height: 18px;
		border: 1px solid red;
		font-size: 12px;
		flex-shrink: 0;
	}
	.list {
		flex-grow: 1;
		min-width: 0;
	}
	${({ isFolded }) =>
		!isFolded
			? css`
					height: auto;
				`
			: ''}
`

const NewsItemStyled = styled.div`
	font-size: 12px;
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	&.animate {
		animation: ${slideUp} 1s forwards;
	}
`

const BreakingNewsBar = ({
	isVisible,
	isFolded,
	handleBreakingNewsVisible,
	handleBreakingNewsFolded,
}: {
	isVisible: boolean
	isFolded: boolean
	handleBreakingNewsVisible: () => void
	handleBreakingNewsFolded: () => void
}) => {
	const [currentNewsIndex, setCurrentNewsIndex] = useState(1)
	const [previousNewsIndex, setPreviousNewsIndex] = useState(0)
	const [startAnimation, setStartAnimation] = useState(false)
	const newsItems = [
		{
			id: 1,
			text: '1-외교부 "미얀마서 불법 업체에 감금됐던 한국인 19명 풀려나"',
			link: '/',
		},
		{
			id: 2,
			text: "'서치미' 전현무, 新 추리 예능 컨트롤 타워 활약",
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
				<div className="title">속보</div>
				<ul className="list">
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
						<>
							{newsItems.map((item) => (
								<NewsItemStyled key={item.id}>
									<Link href={item.link}>{item.text}</Link>
								</NewsItemStyled>
							))}
						</>
					)}
				</ul>
				{newsItems.length > 1 && (
					<button
						type="button"
						className="toggle"
						onClick={() => handleBreakingNewsFolded()}>
						토글
					</button>
				)}
				<button type="button" className="close" onClick={() => handleBreakingNewsVisible()}>
					닫기
				</button>
			</Container>
		</BreakingNewsLayoutStyled>
	) : null
}

export default BreakingNewsBar
