import { useState } from 'react';
import styles from './Icons.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasFaHeart, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

library.add(
    farFaHeart,
    fasFaHeart
)

const Icons = () => {
    const cx = classNames.bind(styles);

    const [isOn, setIsOn] = useState('false');
    const toggleIcons = () => {
        setIsOn(isOn => !isOn);
    }

    return (
        <div className={styles.Icons}>
            <button 
                type="button" 
                className={cx('btn_util', 'btn_util_wish')}
                onClick={() => toggleIcons()}
            >  
                <FontAwesomeIcon className={styles.icon} icon={ isOn ? farFaHeart : fasFaHeart} />
                <span className={styles.text}>찜</span>
            </button>
            <button type="button" className={cx('btn_util', 'btn_util_share')}>
                <FontAwesomeIcon className={styles.icon} icon={faArrowUpFromBracket} />
                <span className={styles.text}>공유</span>
            </button>
        </div>
    )
}

export default Icons;
