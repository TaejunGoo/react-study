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
                    />
                    <CarouselList
                        carouselType={'bannerSub'}
                        bandName={'지금 방영중인 인기 콘텐츠'}
                    />
                    <CarouselList bandName={'지금 방영중인 인기 콘텐츠'} />
                    <CarouselList
                        carouselType={'bannerList'}
                        bandName={'지금 방영중인 인기 콘텐츠'}
                    />
                    <CarouselList
                        carouselType={'bandBasic'}
                        bandName={'지금 방영중인 인기 콘텐츠'}
                    />
                    <CarouselList
                        carouselType={'bandBig'}
                        bandName={'지금 방영중인 인기 콘텐츠'}
                    />
                </ContentContainer>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Home;
