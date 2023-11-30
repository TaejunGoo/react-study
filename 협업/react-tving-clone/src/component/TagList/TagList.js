import React, { useContext } from "react";
import { DetailStateContext } from "../../App";
import styles from './TagList.module.scss';
import classNames from 'classnames/bind';

const TagList = () => {
    const cx = classNames.bind(styles);
    const itemDetail = useContext(DetailStateContext);   
    
    return (
            <div className={styles.TagList}>

                <span className={cx('tag_age', `tag_age_${itemDetail.ageGrade}`)}></span>

                {itemDetail.broadInfo && <span className={styles.tag}>{itemDetail.broadInfo}</span>}                
                {itemDetail.categoryName1 && <span className={styles.tag}>{itemDetail.categoryName1}</span>}
                {itemDetail.channelName && <span className={styles.tag}>{itemDetail.channelName}</span>}
                {itemDetail.frequency && <span className={styles.tag}>
                    {`시즌 ${itemDetail.frequency}화`}
                </span>}
            </div>
    )
}
export default TagList;