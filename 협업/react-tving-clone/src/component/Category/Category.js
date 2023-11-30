import React, { useContext } from "react";
import { DetailStateContext } from "../../App";
import styles from './Category.module.scss';
import classNames from 'classnames/bind';

const Category = ({ thumbStyle }) => {
    const itemDetail = useContext(DetailStateContext);   
    const cx = classNames.bind(styles);
    const categoryDivide = cx('Category', thumbStyle)

    return (
        <div className={categoryDivide}>
            {itemDetail.isExclusive && <span><strong className={styles.v}>V</strong> Only</span>}
            {itemDetail.isOriginal && <span><strong className={styles.v}>V</strong> Original</span>}
        </div>
    )
}

export default Category;