import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Carousel.module.scss';
import CarouselItem from '../CarouselItem/CarouselItem';

export default function Carousel({ carouselType, bandData }) {
    const defaultMod = [Navigation, Pagination, A11y];
    const defaultOpt = {
        spaceBetween: 10,
        navigation: true,
        pagination: { clickable: true },
    };
    const carouselTypes = {
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
        bannerList: {
            swiperOpt: {
                modules: [...defaultMod],
                ...defaultOpt,
                slidesPerView: 2,
                // onSwiper: (swiper) => console.log(swiper),
                // onSlideChange: () => console.log('slide change'),
            },
            outerOpt: {
                title: true,
                vOnly: true,
            },
        },
        bandBasic: {
            swiperOpt: {
                modules: [...defaultMod],
                ...defaultOpt,
                slidesPerView: 5,
                // onSwiper: (swiper) => console.log(swiper),
                // onSlideChange: () => console.log('slide change'),
            },
            outerOpt: {
                title: true,
                vOnly: true,
            },
        },
        bandBig: {
            swiperOpt: {
                modules: [...defaultMod],
                ...defaultOpt,
                slidesPerView: 3,
                // onSwiper: (swiper) => console.log(swiper),
                // onSlideChange: () => console.log('slide change'),
            },
            outerOpt: {
                title: true,
                vOnly: true,
            },
        },
        bandRank: {
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
    };

    const selectedType = carouselTypes[carouselType] || carouselTypes.bandBasic;
    const swiperOpt = { ...selectedType.swiperOpt };
    const outerOpt = { ...selectedType.outerOpt };

    // useEffect(() => {
    //     // if (!types[type]) {
    //     //     console.warn(`Invalid type: ${type}. Defaulting to bandBasic.`);
    //     // }
    //     // console.log(styles);
    // }, [carouselType, selectedType]);
    return (
        <div
            className={`${styles.Carousel} ${styles[carouselType]}`}
            {...outerOpt}
        >
            {console.log(outerOpt)}
            {/* {outerOpt[title] === true ? <span>1</span> : ''} */}
            <Swiper className={styles.Swiper} {...swiperOpt}>
                {bandData.map((item, idx) => (
                    <SwiperSlide key={item.idx} className={styles.SwiperSlide}>
                        <CarouselItem item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
Carousel.defaultProps = {
    carouselType: 'bandBasic',
};
