import React, { useContext } from 'react';

import { DetailStateContext } from '../../App';
import { ListStateContext } from '../../App';
import TagList from '../../component/TagList/TagList';
import Icons from '../../component/Icons/Icons';
import Category from '../../component/Category/Category';
import Slide from '../../component/Slide/Slide';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';

const Detail = () => {
    const cx = classNames.bind(styles);
    const itemDetail = useContext(DetailStateContext);   
    const itemList = useContext(ListStateContext);   
    const slideList = itemList[2];

    return (
        <div className={styles.Detail}>          
            
            <div className={styles.Detail_area}>
                <div className={styles.detail_bg} style={{backgroundImage: `url(${itemDetail.thumbnail})`}} />
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
                                {itemDetail.episodeSort ? (`▶ ${itemDetail.episodeSort}화 시청하기`) : ('▶ 시청하기')}
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
                        <Category itemDetail={itemDetail} thumbStyle="thumbStyle" />
                    </div>
                </div>
            </div>

            <div className={styles.Detail_related}>                
                <Slide slideList={slideList} />
            </div>
        </div>
    )
}

export default Detail;