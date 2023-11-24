import MainContainer from 'components/common/Container/MainContainer/MainContainer';
import ContentContainer from 'components/common/Container/ContentContainer/ContentContainer';
import Header from 'components/common/Header/Header';
import Footer from 'components/common/Footer/Footer';
import { Link } from 'react-router-dom';
import Carousel from 'components/Carousel/Carousel';
import { BandListProvider } from 'context/BandListContext';

const Home = () => {
    return (
        <>
            <Header />
            <BandListProvider>
                <MainContainer>
                    <ContentContainer>
                        <Link
                            style={{ color: '#fff' }}
                            to='/contents/M000371639'
                        >
                            탑건2
                        </Link>
                        <br />
                        <Link
                            style={{ color: '#fff' }}
                            to='/contents/P001747227'
                        >
                            장사천재 백사장2
                        </Link>
                        <br />
                        <Link
                            style={{ color: '#fff' }}
                            to='/contents/P001747179'
                        >
                            콩콩팥팥
                        </Link>
                        <Carousel
                            type={'main'}
                            bandName={'오늘의 티빙 TOP10'}
                        />
                        <Carousel type={'list'} />
                        <Carousel />
                        <p style={{ fontSize: 500 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati quaerat sapiente et similique aut
                            deserunt exercitationem pariatur, porro amet.
                            Quisquam iure beatae eaque saepe quas quibusdam
                            repellat adipisci qui fugiat.
                        </p>
                    </ContentContainer>
                </MainContainer>
            </BandListProvider>
            <Footer />
        </>
    );
};

export default Home;
