import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Link from 'next/link'
import { css } from '@emotion/react'
import Container from '../../Container/Container'

const KeywordsLayoutStyled = styled('div')`
	& > div {
		display: none;
		align-items: center;
		padding-top: 5px;
		padding-bottom: 5px;
		background: #fff;
		gap: 10px;
		${({ theme }) => css`
			${theme.mediaQueries.md} {
				display: flex;
			}
		`}
	}
	.titleArea {
		font-size: 12px;
		font-weight: bold;
		min-width: 0;
		flex-shrink: 0;
	}
	.btnArea {
		display: flex;
		align-items: center;
		gap: 10px;
		min-width: 0;
		flex-shrink: 0;
		& > a {
			font-size: 12px;
		}
	}
	.swiper {
		flex-grow: 1;
	}
	.swiper-slide {
		width: auto !important;
	}
`

const KeywordItemStyled = styled(Link)`
	font-size: 14px;
	font-weight: bold;
`

export default function KeywordsBar() {
	return (
		<KeywordsLayoutStyled>
			<Container>
				<div className="titleArea">오늘의 이슈</div>
				<Swiper slidesPerView="auto" spaceBetween="10px" observer>
					<SwiperSlide>
						<KeywordItemStyled href="/">이스라엘 하마스</KeywordItemStyled>
					</SwiperSlide>
					<SwiperSlide>
						<KeywordItemStyled href="/">일본 핵폐수 방류</KeywordItemStyled>
					</SwiperSlide>
					<SwiperSlide>
						<KeywordItemStyled href="/">전세사기급증</KeywordItemStyled>
					</SwiperSlide>
					<SwiperSlide>
						<KeywordItemStyled href="/">이슈</KeywordItemStyled>
					</SwiperSlide>
					<SwiperSlide>
						<KeywordItemStyled href="/">코너</KeywordItemStyled>
					</SwiperSlide>
				</Swiper>
				<div className="btnArea">
					<Link href="/">제보하기</Link>
					<Link href="/">중앙그룹 브랜드</Link>
				</div>
			</Container>
		</KeywordsLayoutStyled>
	)
}
