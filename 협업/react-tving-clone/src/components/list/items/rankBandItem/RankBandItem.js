import React from 'react';
import styles from './RankBandItem.module.scss';

export default function RankBandItem({ item, idx }) {
    const rankNum = parseInt(Number(idx) + 1);
    return (
        <div className={styles.RankBandItem}>
            <p className={styles.rankNum}>{rankNum}</p>
            <img
                src={item.imageUrl}
                alt={item.title}
                className={styles.backgroundImg}
            />
        </div>
    );
}
