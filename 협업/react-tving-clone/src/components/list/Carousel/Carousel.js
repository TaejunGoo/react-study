import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Carousel.module.scss';
import CarouselItem from '../CarouselItem/CarouselItem';

export default function Carousel({
    carouselType,
    bandData,
    perView,
    itemType,
}) {
    const defaultMod = [Navigation, Pagination, A11y];
    const defaultOpt = {
        spaceBetween: 10,
        navigation: true,
        pagination: { clickable: true },
    };
    const carouselTypes = {
        // 메인배너
        bannerMain: {
            swiperOpt: {
                modules: [...defaultMod],
                ...defaultOpt,

                slidesPerView: perView ? parseInt(perView) : 3,
                // onSwiper: (swiper) => console.log(swiper),
                // onSlideChange: () => console.log('slide change'),
            },
            outerOpt: {
                title: false,
            },
        },
        bannerSub: {
            swiperOpt: {
                modules: [...defaultMod],
                ...defaultOpt,

                slidesPerView: perView ? parseInt(perView) : 3,
                // onSwiper: (swiper) => console.log(swiper),
                // onSlideChange: () => console.log('slide change'),
            },
            outerOpt: {
                title: false,
            },
        },
        bandBasic: {
            swiperOpt: {
                modules: [...defaultMod],
                ...defaultOpt,

                slidesPerView: perView ? parseInt(perView) : 7,
                // onSwiper: (swiper) => console.log(swiper),
                // onSlideChange: () => console.log('slide change'),
            },
            outerOpt: {
                title: true,
            },
        },
    };

    const selectedType = carouselTypes[carouselType] || carouselTypes.bandBasic;
    const swiperOpt = { ...selectedType.swiperOpt };
    const outerOpt = { ...selectedType.outerOpt };

    // useEffect(() => {
    //     // console.log(perView);
    //     console.log(bandData);
    // }, []);
    const data = bandData.items;
    // useEffect(() => {
    //     // console.log(perView);
    //     console.log(data);
    // }, []);
    return (
        <div
            className={`${carouselType} ${styles.Carousel} ${styles[carouselType]}`}
            {...outerOpt}
        >
            {console.log(outerOpt)}
            {outerOpt.title === true ? (
                <h1 className={styles.bandTitle}>{bandData.bandName}</h1>
            ) : (
                ''
            )}
            <Swiper className={styles.Swiper} {...swiperOpt}>
                {data &&
                    data.map((item, idx) => (
                        <SwiperSlide key={idx} className={styles.SwiperSlide}>
                            <CarouselItem
                                item={item}
                                idx={idx}
                                itemType={itemType}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}
Carousel.defaultProps = {
    carouselType: 'bandBasic',
};
