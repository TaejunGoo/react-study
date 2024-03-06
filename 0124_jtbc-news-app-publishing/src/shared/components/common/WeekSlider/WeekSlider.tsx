'use client'

import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useEffect } from 'react'

const WeekSliderLayoutStyled = styled('div')`
	text-align: center;
`

export default function WeekSlider() {
	useEffect(() => {}, [])
	return (
		<WeekSliderLayoutStyled>
			<Swiper slidesPerView={7} spaceBetween="10px" observer>
				<SwiperSlide>
					<div className="day">월</div>
					<div className="date">1/1</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="day">화</div>
					<div className="date">1/2</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="day">수</div>
					<div className="date">1/3</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="day">목</div>
					<div className="date">1/4</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="day">금</div>
					<div className="date">1/5</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="day">토</div>
					<div className="date">1/6</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="day">일</div>
					<div className="date">1/7</div>
				</SwiperSlide>
			</Swiper>
		</WeekSliderLayoutStyled>
	)
}
