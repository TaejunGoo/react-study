import Product from "components/product/Product/Product";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

const Wrapper = styled.div`
  position: relative;
`

const Banner = styled.div`
  overflow: hidden;
  border-top-left-radius: 18vw;
  margin-left:20px;
  @media ${({theme}) => theme.device.pc}{
    border-top-left-radius: 140px;
    margin-left: 0;
  }
`
const StyledSwiper = styled(Swiper)`
  .swiper-wrapper{
    flex-direction: column;
    flex-wrap: wrap;
    height: 520px;
    .swiper-slide{
      width: 100%!important;
      height: auto!important;
    }
  }
`

const Slide = styled.div`
  margin-top: -11.3vw;
  @media ${({theme}) => theme.device.pc} {
    width: 370px;
    margin-top: 0;
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;

const Card = styled.div`
  background: #fff;
  padding: 2.7vw;
  box-sizing: border-box;
  @media ${({theme}) => theme.device.pc} {
    padding: 20px;
  }
`

const WithBannerSlide = ({moBannerImg, pcBannerImg, bannerAltText, prdList}) => {

  return (
    <Wrapper>
      <Banner>
        <picture>
          <source media="(min-width: 768px" srcSet={pcBannerImg}/>
          <source media="(max-width: 767px" srcSet={moBannerImg}/>
          <img src={pcBannerImg} alt={bannerAltText} />
        </picture>
      </Banner>
      <Slide>
        <StyledSwiper
          observer={true}
          slidesOffsetBefore={40}
          slidesOffsetAfter={40}
          slidesPerView={1.19}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 0
            }
          }}
        >
          {
            prdList.map((it) => {
              return (
                <SwiperSlide key={it.name}>
                  <Card>
                    <Product prd={it} direction={'horizontal'}/>
                  </Card>
                </SwiperSlide>
              )
            })
          }
        </StyledSwiper>
      </Slide>
    </Wrapper>
  )
}

export default WithBannerSlide;