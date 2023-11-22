import React from 'react';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Carousel.module.scss';

export default function Carousel({ type, itemList }) {
    const types = {
        main: {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            slidesPerView: 1,
            navigation: true,
            pagination: { clickable: true },
            scrollbar: { draggable: true },
            onSwiper: (swiper) => console.log(swiper),
            onSlideChange: () => console.log('slide change'),
        },
        list: {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            slidesPerView: 3,
            navigation: true,
        },
    };

    const selectedType = types[type] || types.main; // Select the appropriate type

    return (
        <div className={`${styles.Carousel} ${styles[type]}`}>
            <Swiper
                className={styles.Swiper}
                {...selectedType} // Spread the selected type properties
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                {/* ... */}
            </Swiper>
        </div>
    );
}
Carousel.defaultProps = {
    type: 'main',
};
