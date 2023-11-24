import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Carousel.module.scss';

export default function Carousel({ type, bandName }) {
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
            spaceBetween: 20,
            navigation: true,
        },
    };

    const selectedType = types[type] || types.main;

    const [itemData, setItemData] = useState();
    const
    useEffect(()=> {
        
    },[])

    return (
        <div className={`${styles.Carousel} ${styles[type]}`}>
            <Swiper className={styles.Swiper} {...selectedType}>
                <SwiperSlide className={styles.SwiperSlide}>
                    Slide 1
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
Carousel.defaultProps = {
    type: 'main',
};
