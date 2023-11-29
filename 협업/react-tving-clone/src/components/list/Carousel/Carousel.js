import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Carousel.module.scss';
import CarouselItem from '../CarouselItem/CarouselItem';

export default function Carousel({ type, bandData }) {
    const types = {
        bannerMain: {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            slidesPerView: 1,
            navigation: true,
            pagination: { clickable: true },
            scrollbar: { draggable: true },
            // onSwiper: (swiper) => console.log(swiper),
            // onSlideChange: () => console.log('slide change'),
        },
        bannerSub: {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            slidesPerView: 1,
            navigation: true,
            pagination: { clickable: true },
            scrollbar: { draggable: true },
            onSwiper: (swiper) => console.log(swiper),
            onSlideChange: () => console.log('slide change'),
        },
        bannerList: {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            slidesPerView: 1,
            navigation: true,
            pagination: { clickable: true },
            scrollbar: { draggable: true },
            onSwiper: (swiper) => console.log(swiper),
            onSlideChange: () => console.log('slide change'),
        },
        bandBasic: {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: true,
        },
        bandBig: {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: true,
        },
        bandRank: {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: true,
        },
    };

    const selectedType = types[type] || types.bandBasic;

    useEffect(() => {
        if (!types[type]) {
            console.warn(`Invalid type: ${type}. Defaulting to bandBasic.`);
        }
        console.log(selectedType);
    }, [type, selectedType]);
    // if (!bandData) {
    //     console.log(1);
    //     return console.log(11);
    // }

    return (
        <div className={`${styles.Carousel} ${styles.types[type]}`}>
            <Swiper className={styles.Swiper} {...selectedType}>
                {bandData.map((item, idx) => (
                    <SwiperSlide key={item.code} className={styles.SwiperSlide}>
                        <CarouselItem item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
Carousel.defaultProps = {
    type: 'bandBasic',
};
