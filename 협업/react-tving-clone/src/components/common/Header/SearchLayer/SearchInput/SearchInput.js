import React,{ useState } from 'react';
import styles from './SearchInput.module.scss';

const SearchInput = ({placeholder, dispatches, id}) => {
    const { onAdd } = dispatches;
    const [searchVal, setSerchVal] = useState('');
    const handleSubmit = () => {
        onAdd(searchVal);
        setSerchVal('');
    };
    const handleEnter = (e) => {
        e.key === 'Enter' && handleSubmit();
    };

    return (
        <div className={styles.searchInput}>
            <label>
                <input
                    className={styles.input} 
                    type="text"
                    placeholder={placeholder}
                    value={searchVal}
                    onChange={(e) => setSerchVal(e.target.value)}
                    onKeyDown={(e) => handleEnter(e)}
                    id={id}
                />
                <button 
                    className={styles.btn}
                    onClick={handleSubmit}
                >찾기</button>
            </label>
        </div>
    );
};

SearchInput.defaultProps = {
    placeholder : '검색어를 입력하세요',
    onSubmit : () => {return true},
    id : ''
}

export default React.memo(SearchInput);