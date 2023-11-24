import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Carousel.module.scss';

export default function Carousel({ type, bandData }) {
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

    // useEffect(()=> {

    // },[])
    if (!bandData) {
        return console.log(11);
    }

    return (
        <div className={`${styles.Carousel} ${styles[type]}`}>
            <Swiper className={styles.Swiper} {...selectedType}>
                {bandData.map((item, idx) => (
                    <SwiperSlide key={item.code} className={styles.SwiperSlide}>
                        <div>
                            <img src={item.imageUrl} alt={item.title} />
                            <h3>{item.title}</h3>
                            {/* Render other properties as needed */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
Carousel.defaultProps = {
    type: 'main',
};
