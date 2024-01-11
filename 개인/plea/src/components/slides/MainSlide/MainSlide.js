import React from "react";
import styled,{css} from "styled-components";
import { Pagination } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import plusIconMO from 'assets/images/common/ico/ico_bannerCounter.png';
import plusIconPC from 'assets/images/common/ico/ico_bannerCounter_pc.png';

const StyledSlide = styled.div`
  ${
    ({$bgColor}) => {
      return css`
        background-color: ${$bgColor};
      `
    }
  }
  img{
    max-width: 1200px;
    margin: 0 auto;
  }
`
const StyledPaginationButton = styled.button`
    position: absolute;
    bottom: 29.3vw;
    left: auto;
    right: 0;
    padding: 0 8.4vw 0 3vw;
    width: auto;
    height: 6.7vw;
    line-height: 6.7vw;
    font-size: 3.2vw;
    font-weight: 200;
    border-top-left-radius: 100vw;
    border-bottom-left-radius: 100vw;
    overflow: hidden;
    background: rgba(0, 0, 0, .5) url(${plusIconMO});
    background-repeat: no-repeat;
    background-position: calc(100% - 1.8vw) 52%;
    background-size: 4.2vw 3.3vw;
    color: #bbb;
    z-index: 1;
    cursor: pointer;
    .swiper-pagination{
      position: static;
    }
    .swiper-pagination-current{
      color: #fff;
    }
    @media ${({theme}) => theme.device.pc}{
      bottom: 8.8%;
      left: calc(50% - 520px);
      right: auto;
      padding: 0 48px 0 20px;
      height: 39px;
      line-height: 38px;
      font-size: 18px;
      border-radius: 100vw;
      background: rgba(0, 0, 0, .5) url(${plusIconPC});
      background-repeat: no-repeat;
      background-position: calc(100% - 15px) center;
      background-size: 22px 15px;
      @media all and (max-width: 1200px) {
        left: 6.6%;
        bottom: 8.8%;
      }
    }
`

const MainSlide = () => {
  return <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        el:'.swiper-pagination',
        type:'fraction'
      }}
    >
    <SwiperSlide>
      <StyledSlide $bgColor={'#bcbba8'}>
        <picture>
          <source media="(min-width: 768px" srcSet={process.env.PUBLIC_URL + `assets/images/temp/@main_1200x670.jpg`}/>
          <source media="(max-width: 767px" srcSet={process.env.PUBLIC_URL + `assets/images/temp/@main_750x1204.jpg`}/>
          <img src={process.env.PUBLIC_URL + `assets/images/temp/@main_1200x670.jpg`} alt="" />
        </picture>
      </StyledSlide>
    </SwiperSlide>
    <SwiperSlide>
      <StyledSlide $bgColor={'#cdd2b6'}>
        <picture>
          <source media="(min-width: 768px" srcSet={process.env.PUBLIC_URL + `assets/images/temp/@main_1200x670_2.jpg`}/>
          <source media="(max-width: 767px" srcSet={process.env.PUBLIC_URL + `assets/images/temp/@main_750x1204.jpg`}/>
          <img src={process.env.PUBLIC_URL + `assets/images/temp/@main_1200x670.jpg`} alt="" />
        </picture>
      </StyledSlide>
    </SwiperSlide>
    <SwiperSlide>
      <StyledSlide $bgColor={'#cdd2b6'}>
        <picture>
          <source media="(min-width: 768px" srcSet={process.env.PUBLIC_URL + `assets/images/temp/@main_1200x670_2.jpg`}/>
          <source media="(max-width: 767px" srcSet={process.env.PUBLIC_URL + `assets/images/temp/@main_750x1204.jpg`}/>
          <img src={process.env.PUBLIC_URL + `assets/images/temp/@main_1200x670.jpg`} alt="" />
        </picture>
      </StyledSlide>
    </SwiperSlide>
    <StyledPaginationButton type="button">
      <div className="swiper-pagination"></div>
    </StyledPaginationButton>
  </Swiper>;
}

export default React.memo(MainSlide);