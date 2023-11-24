
import React, { useContext, useEffect, useState } from "react";
import { DetailStateContext } from "../App";
import { ListStateContext } from "../App";
import TagList from "../component/TagList";
import styles from '../assets/css/detailStyle.module.scss';
import classNames from 'classnames/bind';
import Icons from '../component/Icons';
import Category from "../component/Category";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Detail = () => {
    const cx = classNames.bind(styles);
    const itemDetail = useContext(DetailStateContext);   
    const itemList = useContext(ListStateContext);   
    // console.log(itemList[0].items)
    const slideList = itemList[1].items;

    return (
        <div className={styles.Detail}>          
            <div className={styles.Detail_area}>
                <div className={styles.detail_bg}><img src={itemDetail.thumbnail} alt={itemDetail.contentName} /></div>  
                <div className={styles.Detail_inner}>                
                    <div className={styles.detail_summary}>
                        <div className={styles.detail_category}>
                            <Category itemDetail={itemDetail} />
                        </div>
                        <div className={styles.logo}>
                            <img src={itemDetail.logoImage} alt={itemDetail.contentName} />
                        </div>
                        <div className={styles.tagList}>
                            <TagList itemDetail={itemDetail} />                
                        </div>
                        <div className={styles.detail_btn}>
                            <button type="button" className={styles.detail_btn_view}>
                                {`▶ ${itemDetail.episodeSort}화 시청하기`}
                            </button>
                            <div className={styles.detail_btn_util}>
                                <Icons />
                            </div>
                        </div>
                        <div className={styles.detail_info}>
                            <dl className={styles.detail_info_item}>
                                <dt>크리에이터</dt> 
                                <dd>{itemDetail.directorsName}</dd>
                            </dl>
                            <dl className={styles.detail_info_item}>
                                <dt>출연</dt> 
                                <dd>{itemDetail.actorsName}</dd>
                            </dl>
                            <p className={cx('detail_info_item', 'detail_info_item_story')}>
                                {itemDetail.story}
                            </p>
                        </div>
                    </div>
                    <div className={styles.detail_thumb}>
                        <div className={cx('detail_thumb_item', 'detail_thumb_pc')}>
                            <img src={itemDetail.thumbnail} alt={itemDetail.contentName} />
                        </div>
                        <div className={cx('detail_thumb_item', 'detail_thumb_mo')}>
                            <img src={itemDetail.mobileThumbnail} alt={itemDetail.contentName} />
                        </div>
                        <Category itemDetail={itemDetail} />
                    </div>
                </div>
            </div>

            <div className={styles.Detail_related}>
                <Swiper
                    className={styles.SwiperContainer}
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {slideList.map((it, idx) => (
                        <SwiperSlide key={idx}>
                            <img src={it.imageUrl} alt="" />    
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Detail;