import styles from './SearchHistory.module.scss';

const SearchHistory = ({history, dispatches}) => {
    const handleSearch = (keyword) => {
        console.log(`${keyword} 검색`);
    };

    const {onRemove, onRemoveAll} = dispatches;
    return (
        <ul className={styles.searchHistory}>
            <h2 className={styles.title}>
                최근 검색어
                {
                    history.length !== 0 && <button
                        type='button'
                        className={styles.btn_deleteAll}
                        onClick={() => onRemoveAll()}
                    >
                        모두 지우기
                        <span className={styles.icon}>지우기</span>
                    </button>
                }
            </h2>
            {history.length === 0? 
                <li className={styles.item}>검색 내역이 없습니다.</li> 
                : 
                history.map((item,idx) => {
                    return (
                        <li className={styles.item} key={idx}>
                            <button
                                type="button"
                                className={styles.btn_keyword}
                                onClick={() => handleSearch(item.keyword)}
                            >
                            {item.keyword}
                            </button>
                            <button
                                type="button"
                                className={styles.btn_delete}
                                onClick={() => onRemove(item.keyword)}
                                aria-label="삭제"
                            >
                                X
                            </button>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default SearchHistory;