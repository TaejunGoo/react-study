import React, { useContext } from "react";
import { DetailStateContext } from "../App";
import styles from '../assets/css/detailStyle.module.scss';
import classNames from 'classnames/bind';

const TagList = () => {
    const cx = classNames.bind(styles);
    const itemDetail = useContext(DetailStateContext);   
    
    return (
            <div className={styles.TagList}>

                <span className={cx('tag_age', `tag_age_${itemDetail.ageGrade}`)}></span>

                <span className={styles.tag}>{itemDetail.broadInfo}</span>
                <span className={styles.tag}>{itemDetail.categoryName1}</span>
                <span className={styles.tag}>{itemDetail.channelName}</span>
                <span className={styles.tag}>
                    {`시즌 ${itemDetail.frequency}화`}
                </span>
            </div>
    )
}
export default TagList;