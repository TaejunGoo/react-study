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
    const defaultMod = [Navigation, Pagination, A11y];
    const defaultOpt = {
        spaceBetween: 10,
        navigation: true,
        pagination: { clickable: true },
    };
    const types = {
        bannerMain: {
            swiperOpt: {
                modules: [...defaultMod],
                ...defaultOpt,
                slidesPerView: 1,
                // onSwiper: (swiper) => console.log(swiper),
                // onSlideChange: () => console.log('slide change'),
            },
            outerOpt: {
                title: true,
                vOnly: true,
            },
        },
        bannerSub: {
            modules: [...defaultMod],
            ...defaultOpt,
            slidesPerView: 1,
            // onSwiper: (swiper) => console.log(swiper),
            // onSlideChange: () => console.log('slide change'),
        },
        bannerList: {
            modules: [...defaultMod],
            ...defaultOpt,
            slidesPerView: 2,
            // onSwiper: (swiper) => console.log(swiper),
            // onSlideChange: () => console.log('slide change'),
        },
        bandBasic: {
            modules: [...defaultMod, Scrollbar],
            ...defaultOpt,
            slidesPerView: 5,
        },
        bandBig: {
            modules: [...defaultMod],
            ...defaultOpt,
            slidesPerView: 3,
        },
        bandRank: {
            modules: [...defaultMod],
            ...defaultOpt,
            slidesPerView: 1,
        },
    };

    const selectedType = types[type] || types.bandBasic;
    const swiperOpt = { ...selectedType.swiperOpt };
    const outerOpt = { ...selectedType.outerOpt };

    useEffect(() => {
        // if (!types[type]) {
        //     console.warn(`Invalid type: ${type}. Defaulting to bandBasic.`);
        // }
        // console.log(styles);
    }, [type, selectedType]);
    return (
        <div className={`${styles.Carousel} ${styles[type]}`} {...outerOpt}>
            {console.log(outerOpt)}
            {/* {outerOpt[title] === true ? <span>1</span> : ''} */}
            <Swiper className={styles.Swiper} {...swiperOpt}>
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
