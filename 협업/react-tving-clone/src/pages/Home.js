import MainContainer from 'components/common/Container/MainContainer/MainContainer';
import ContentContainer from 'components/common/Container/ContentContainer/ContentContainer';
import Header from 'components/common/Header/Header';
import Footer from 'components/common/Footer/Footer';
import { Link } from 'react-router-dom';
// import Carousel from 'components/Carousel/Carousel';
import CarouselList from 'components/list/CarouselList';

const Home = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <ContentContainer>
                    <Link style={{ color: '#fff' }} to='/contents/M000371639'>
                        탑건2
                    </Link>
                    <br />
                    <Link style={{ color: '#fff' }} to='/contents/P001747227'>
                        장사천재 백사장2
                    </Link>
                    <br />
                    <Link style={{ color: '#fff' }} to='/contents/P001747179'>
                        콩콩팥팥
                    </Link>
                    <CarouselList
                        carouselType={'bannerMain'}
                        bandName={'메인배너'}
                        perView={'1'}
                        itemType={'MainBannerItem'}
                    />
                    <CarouselList
                        carouselType={'bannerSub'}
                        bandName={'VOD_SPECIAL_BUTTON'}
                        perView={'5'}
                        itemType={'ChannelButtonItem'}
                    />
                    <CarouselList
                        carouselType={'bandBasic'}
                        bandName={'오늘의 티빙 TOP10'}
                        perView={'5'}
                        itemType={'RankBandItem'}
                    />
                    <CarouselList
                        carouselType={'bandBasic'}
                        bandName={'티빙 오리지널'}
                        perView={'6'}
                        itemType={'OriginItem'}
                    />
                    <CarouselList
                        carouselType={'bandBasic'}
                        bandName={'지금 방영중인 인기 콘텐츠'}
                        itemType={'BasicBandItem'}
                    />
                </ContentContainer>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Home;
