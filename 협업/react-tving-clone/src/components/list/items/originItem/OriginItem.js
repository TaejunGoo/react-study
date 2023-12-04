import React from 'react';
import styles from './OriginItem.module.scss';
import Labels from 'components/list/labels/Labels';

export default function OriginItem({ item }) {
    return (
        <div className={styles.OriginItem}>
            <img
                src={item.imageUrl}
                alt={item.title}
                className={styles.backgroundImg}
            />
            <div className={styles.txtWrap}>
                {item.title1 && <p className={styles.title1}>{item.title1}</p>}
                {item.title2 && <p className={styles.title2}>{item.title2}</p>}
                {item.titleImageUrl && (
                    <img
                        src={item.titleImageUrl}
                        alt={item.title}
                        className={styles.titleImg}
                    />
                )}
                <p>{item.description}</p>
            </div>
            <Labels item={item} />
        </div>
    );
}
