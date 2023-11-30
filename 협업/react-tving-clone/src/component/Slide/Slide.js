import { useState} from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
import './Slide.scss';
import SlideCategory from '../SlideCategory/SlideCategory';

const Slide = ({ slideList }) => {
    const slideSwiper = slideList.items;

    // 첫화, 최신화 버튼
    const [isOldest, setIsOldest] = useState(true);
    const [isLatest, setIsLatest] = useState(false);
    const onFirst = () => {
        if (!isOldest) {
            setIsOldest((current) => !current);                        
            setIsLatest(!isLatest)  
        }
    }
    const onLast = () => {
        if (!isLatest) {
            setIsLatest((current) => !current);                        
            setIsOldest(!isOldest)
        }
    }

    return (        

        <div className="Slide">
            <div className="Category_top">
                    <div className="left">
                        <strong className="tit">{slideList.bandName}</strong>
                    </div>
                    <div className="right">                        
                        <button 
                            type="button"      
                            className={`btn_sort btn_first ${isOldest && 'active'}`}
                            onClick={onFirst}                            
                        >
                            첫화부터
                        </button>
                        <button 
                            type="button" 
                            className={`btn_sort btn_last ${isLatest && 'active'}`}
                            onClick={onLast}
                        >
                            최신화부터
                        </button>
                        <span className="btn_toggle">
                            <input type="checkbox" id="chk" className="toggle" />
                            <label htmlFor="chk" className="label">연속재생</label>
                        </span>
                    </div>
                </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="SlideContainer"
                navigation={true}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                spaceBetween={8}
                slidesPerView={7}
                slidesPerGroup={7}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {(isOldest) ?                                         
                    (slideSwiper.map((it, idx) => (
                        <SwiperSlide className="slide" key={idx}>
                            <Link to="">
                                <div className="thumb">                                
                                    <img src={it.imageUrl} alt={it.title} />                                 
                                    <SlideCategory slideTag={it.label} />
                                </div>
                                <strong className="tit">{it.title}</strong>
                            </Link>
                        </SwiperSlide>
                    )))            
                    :           
                    (slideSwiper.slice().reverse().map((it, idx) => (
                        <SwiperSlide className="slide" key={idx}>
                            <Link to="">
                                <div className="thumb">                                
                                    <img src={it.imageUrl} alt={it.title} />                                 
                                    <SlideCategory slideTag={it.label} />
                                </div>
                                <strong className="tit">{it.title}</strong>
                            </Link>
                        </SwiperSlide>
                    )))
                }                
            </Swiper>
        </div>
    )
}
Slide.defaultProps = {
    slideSwiper: [],
}


export default Slide;

