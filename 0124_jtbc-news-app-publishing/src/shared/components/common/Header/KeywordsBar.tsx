import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Link from 'next/link'
import { css } from '@emotion/react'
import Container from '../Container/Container'

const KeywordsLayoutStyled = styled(Container)`
	display: flex;
	align-items: center;
	padding: 1.4rem 0;
	background: #fff;
	gap: 2.4rem;
	.swiper {
		mask-image: linear-gradient(to right, black 90%, transparent);
		flex-grow: 1;
	}
	.swiper-slide {
		width: auto;
	}
`
const TitleStyled = styled('div')`
	display: none;
	font-size: 1.4rem;
	font-weight: 700;
	min-width: 0;
	flex-shrink: 0;
	color: #242424;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			display: block;
		}
	`}
`

const ButtonAreaStyled = styled('div')`
	display: none;
	align-items: center;
	gap: 10px;
	min-width: 0;
	flex-shrink: 0;

	${({ theme }) => css`
		${theme.mediaQueries.md} {
			display: flex;
		}
	`}
`

const TempButton = styled(Link)`
	display: flex;
	padding: 0.6rem 1.2rem;
	align-items: center;
	color: #052d5a;
	border-radius: 16px;
	background: #f2f2f2;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 20px;
`

const KeywordItemStyled = styled(Link)`
	display: block;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.28;
	color: #242424;
`

export default function KeywordsBar() {
	return (
		<KeywordsLayoutStyled>
			<TitleStyled>오늘의 ISSUE</TitleStyled>
			<Swiper
				slidesPerView="auto"
				spaceBetween="24px"
				slidesOffsetBefore={20}
				slidesOffsetAfter={20}
				observer
				breakpoints={{
					768: {
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0,
					},
				}}>
				<SwiperSlide>
					<KeywordItemStyled href="/">이재명 피습</KeywordItemStyled>
				</SwiperSlide>
				<SwiperSlide>
					<KeywordItemStyled href="/">이스라엘-하마스 전쟁</KeywordItemStyled>
				</SwiperSlide>
				<SwiperSlide>
					<KeywordItemStyled href="/">한일 정상회담</KeywordItemStyled>
				</SwiperSlide>
				<SwiperSlide>
					<KeywordItemStyled href="/">후쿠시마 오염수 방류</KeywordItemStyled>
				</SwiperSlide>
				<SwiperSlide>
					<KeywordItemStyled href="/">파리올림픽2024</KeywordItemStyled>
				</SwiperSlide>
			</Swiper>
			<ButtonAreaStyled>
				<TempButton href="/">제보하기</TempButton>
			</ButtonAreaStyled>
		</KeywordsLayoutStyled>
	)
}
