import React, { useContext } from "react";
import { DetailStateContext } from "../App";
import styles from '../assets/css/detailStyle.module.scss';

const Category = () => {
    const itemDetail = useContext(DetailStateContext);   

    return (
        <div className={styles.Category}>
            {itemDetail.isExclusive ? (<span>V Only</span>) : ''}
            {itemDetail.isOriginal ? (<span>V Original</span>) : ''}
        </div>
    )
}

export default Category;