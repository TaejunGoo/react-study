import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useLocation } from "react-router-dom";
import 'swiper/css';
import { navList } from "tempData/navList";

const StyledSwiperSlide = styled(SwiperSlide)`
  width: auto;
`

const StyledLink = styled(Link)`
  display: block;
  padding: 0 12.5px;
  position: relative;
  font-size: 16px;
  font-weight: 400;
  height: 50px;
  line-height: 50px;
  ${
    ({$isNow}) => {
      return $isNow && css`
        font-weight: 500;
        &::after{
          content: '';
          display: block;
          position: absolute;
          width: calc(100% - 20px);
          height: 1px;
          background: #222;
          bottom: 12px;
          left: 10px;
        }
      `
    }
  }
  ${
    ({$isDot}) => {
      return $isDot && css`
        &::after{
          content: '';
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 100vw;
          background: #eab19f;
          position: absolute;
          top: 15px;
          right: 5px;
        }
      `
    }
  }
`

const MobileHeaderNav = () => {
  const location = useLocation();
  return (
    <nav>
      <Swiper
        slidesPerView={"auto"}
        slidesOffsetBefore={"10"}
        observer={true}
      >
          {
            navList.map((it) => {
              const isNow = it.path === location.pathname;
              return (
                <StyledSwiperSlide key={it.path}>
                  <StyledLink to={it.path} $isDot={it.dot} $isNow={isNow}>
                    {it.title}
                  </StyledLink>
                </StyledSwiperSlide>
              )
            })
          }
      </Swiper>
    </nav>
  )
}

export default MobileHeaderNav;