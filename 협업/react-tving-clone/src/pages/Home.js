import MainContainer from "components/common/Container/MainContainer/MainContainer";
import ContentContainer from "components/common/Container/ContentContainer/ContentContainer"
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <MainContainer>
                <ContentContainer>
                    <p style={{fontSize:500}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat sapiente et similique aut deserunt exercitationem pariatur, porro amet. Quisquam iure beatae eaque saepe quas quibusdam repellat adipisci qui fugiat.</p>
                </ContentContainer>
            </MainContainer>
            <Footer />
        </div>
    );
};

export default Home;