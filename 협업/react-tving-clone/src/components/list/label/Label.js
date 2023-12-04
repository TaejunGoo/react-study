import React from 'react';
import styles from './Label.module.scss';

export default function Label({ labelList }) {
    const labelClassName = {
        isOnly: 'vOnly',
        isNewEpisode: 'new',
        isDubbing: 'dub',
        isQuickVod: 'quick',
        isGrade19: 'Grade19',
    };

    return (
        <>
            {labelList.map((item, idx) => {
                const className = labelClassName[item] || 'default';
                const toLeftWrap = item === 'isOnly' || item === 'isNewEpisode';
                const toRightWrap = item === 'dub' || item === 'Grade19';

                return (
                    <>
                        <div
                            key={`label_${idx}`}
                            className={`${toLeftWrap ? styles.LeftWrap : ''} ${
                                toRightWrap ? styles.RightWrap : ''
                            }`}
                        >
                            <span
                                className={`${styles.Label} ${styles[className]}`}
                            ></span>
                        </div>
                    </>
                );
            })}
        </>
    );
}
