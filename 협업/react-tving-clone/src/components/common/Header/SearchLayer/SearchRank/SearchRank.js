import React from 'react';
import styles from './SearchRank.module.scss';

const SearchRank = ({rankList, dispatches}) => {
    const { onAdd } = dispatches;
    const handleClick = (title) => {
        onAdd(title);
    };

    return (
        <ul className={styles.searchRank}>
            <h2 className={styles.title}>실시간 인기 검색어</h2>
            {
                rankList.map((item) => {
                    return <li className={styles.item} key={item.rank}>
                        <button 
                            type="button"
                            onClick={() => handleClick(item.title)}    
                        >
                            <span className={styles.rank}>{item.rank}</span>
                            <h3 className={styles.item_title}>{item.title}</h3>
                        </button>
                    </li>
                })
            }
        </ul>
    )
};

export default React.memo(SearchRank);