import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import {Swiper} from 'swiper/react' ;

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';

const Slider = (props) => {
    const {slideItem, slideOptions} = props;

    return(
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                {...slideOptions}
            >
                {slideItem}
            </Swiper>
        </>
    )
}

export default Slider