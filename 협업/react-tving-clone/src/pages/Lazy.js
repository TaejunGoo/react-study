import MainContainer from "components/common/Container/MainContainer/MainContainer";
import ContentContainer from "components/common/Container/ContentContainer/ContentContainer"
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import { Link } from "react-router-dom";
import LazyImg from "components/common/LazyImg/LazyImg";
import img1 from 'assets/images/test1.webp'
import img2 from 'assets/images/test2.webp'

const Home = () => {
    const placeholder = (
        <span style={{display:'block', width:400, height:600, background: 'white'}}>로딩중</span>
    )

    return (
        <>
            <Header />
            <MainContainer>
                <ContentContainer>
                    <Link style={{color:'#fff'}} to="/contents/M000371639">탑건2</Link><br/>
                    <Link style={{color:'#fff'}} to="/contents/P001747227">장사천재 백사장2</Link><br/>
                    <Link style={{color:'#fff'}} to="/contents/P001747179">콩콩팥팥</Link>
                    <LazyImg image={img1} placeholder={placeholder}/>
                    <p style={{fontSize:150}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eligendi beatae fugit, aliquid perferendis unde possimus magnam temporibus at laborum id, ratione accusantium dolore ut, labore sit dolorem! Dolorum, quis.</p>
                    <LazyImg image={img2} placeholder={placeholder}/>
                    <LazyImg image={'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231115/0905/P001274557.jpg/dims/resize/F_webp,400'} placeholder={placeholder}/>
                    <LazyImg image={'https://image.tving.com/ntgs/contents/CTC/caim/CAIM2100/ko/20230131/M000371639.jpg/dims/resize/F_webp,400'} placeholder={placeholder}/>
                    <LazyImg image={'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231028/1400/P000218912.jpg/dims/resize/F_webp,400'} placeholder={placeholder}/>
                </ContentContainer>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Home;