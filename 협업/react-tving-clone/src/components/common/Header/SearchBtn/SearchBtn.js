import styles from './SearchBtn.module.scss';
import classNames from 'classnames/bind';

const Searchbtn = ({isViewLayer, onClick}) => {
    const cx = classNames.bind(styles);
    return (
        <button 
            className={cx('searchBtn', {'close' : isViewLayer})}
            onClick={() => {onClick()}}
        >
            {isViewLayer? '닫기' : '찾기'} 
        </button>
    );
};

export default Searchbtn;