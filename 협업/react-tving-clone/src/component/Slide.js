import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react' 

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';


const Slide = ({moveList}) => {
    console.log(moveList);
    return(
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
            >
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slide;