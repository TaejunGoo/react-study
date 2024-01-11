import styled from "styled-components";
import useMediaSize from "utils/useMediaSize";
import usePathname from "utils/usePathname";
import { prdList } from "tempData/prdList";

import MobileHeader from "components/common/header/MobileHeader/MobileHeader";
import Wrapper from "components/common/container/Wrapper/Wrapper";
import MobileHeaderBtn from "components/common/header/MobileHeader/MobileHeaderBtn/MobileHeaderBtn";
import MobileLogo from "components/common/header/MobileHeader/MobileLogo/MobileLogo";
import NavBar from "components/common/NavBar/NavBar";
import Footer from "components/common/Footer/Footer";
import QuickMenu from "components/common/QuickMenu/QuickMenu";
import PCHeader from "components/common/header/PCHeader/PCHeader";
import MainSlide from "components/slides/MainSlide/MainSlide";
import ImageBanner from "components/banner/ImageBanner/ImageBanner";
import PrdList from 'components/product/PrdList/PrdList';
import Container from "components/common/container/Container/Container";
import SectionTitle from "components/typo/SectionTItle/SectionTitle";
import SectionLink from "components/typo/SectionLink/SectionLink";
import WithBannerSlide from "components/slides/WithBannerSlide/WithBannerSlide";

const MainSection = styled.div`
  margin-bottom: 17.9vw;
  @media ${({theme}) => theme.device.pc}{
    margin-bottom: 80px;
  }
`



const Home = () => {
  // isMain?
  const isMain = usePathname() === '/';

  // device
  const {isPc, isMobile} = useMediaSize();

  // brand 제거된 상품목록
  const modifiedPrdList = prdList.map((it) => {
    return {
      ...it,
      brand: null
    }
  })

  return (
    <Wrapper isMain={isMain}>
      {/* Header */}
      {isMobile && (
        <>
          <MobileHeader
            leftChildren={
              <MobileHeaderBtn icon={"hamberger"} altText={"메뉴 보기"} />
            }
            centerChildren={<MobileLogo />}
            rightChildren={
              <MobileHeaderBtn
                icon={"bag"}
                altText={"장바구니"}
                bagCount={100}
              />
            }
          />
          <NavBar />
        </>
      )}
      {isPc && <PCHeader />}
      <QuickMenu />

      {/* Cont */}
      <MainSection>
        <MainSlide />
      </MainSection>
      <MainSection>
        <Container only={'pc'}>
          <ImageBanner
            pcImg={
              process.env.PUBLIC_URL + `assets/images/temp/@banner_750x238.jpg`
            }
            mobileImg={
              process.env.PUBLIC_URL + `assets/images/temp/@banner_750x200.jpg`
            }
            altText={"대체텍스트"}
          />
        </Container>
      </MainSection>
      <MainSection>
        <Container>
          <SectionTitle
            title={<span>미니백 에디션 5종</span>}
            subTitle={"당신의 일주일을 책임질 ‘진짜 데일리 백’"}
            url={"1234"}
          />
        </Container>
        <Container only={'pc'}>
          <WithBannerSlide 
            moBannerImg={process.env.PUBLIC_URL + 'assets/images/temp/@bg_710x625.jpg'}
            pcBannerImg={process.env.PUBLIC_URL + 'assets/images/temp/@bg_1200x400.jpg'}
            bannerAltText={'배너'}
            prdList={modifiedPrdList}
          />
          {isMobile &&  
            <SectionLink/>
          }
        </Container>
      </MainSection>
      <MainSection>
        <Container only={'pc'}>
          <ImageBanner
            pcImg={
              process.env.PUBLIC_URL + `assets/images/temp/@banner_1200x300.jpg`
            }
            mobileImg={
              process.env.PUBLIC_URL + `assets/images/temp/@banner_750x460.jpg`
            }
            altText={"대체텍스트"}
          />
        </Container>
      </MainSection>
      <MainSection>
        <Container>
          <SectionTitle
            title={<span>커플링, 우정링 찾으세요?</span>}
            subTitle={"같이하면 좋은 반지"}
            url={"1234"}
          />
          <PrdList prdList={prdList} colMo={2} colPc={4} />
          {isMobile &&  
            <SectionLink/>
          }
        </Container>
      </MainSection>

      {/* Footer */}
      <Footer />
    </Wrapper>
  );
}

export default Home;