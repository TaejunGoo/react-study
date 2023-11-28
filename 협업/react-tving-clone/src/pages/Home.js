import MainContainer from "components/common/Container/MainContainer/MainContainer";
import ContentContainer from "components/common/Container/ContentContainer/ContentContainer"
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <ContentContainer>
                    <Link style={{color:'#fff'}} to="/contents/M000371639">탑건2</Link><br/>
                    <Link style={{color:'#fff'}} to="/contents/P001747227">장사천재 백사장2</Link><br/>
                    <Link style={{color:'#fff'}} to="/contents/P001747179">콩콩팥팥</Link>
                </ContentContainer>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Home;