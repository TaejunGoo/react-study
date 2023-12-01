import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './InteractBtns.module.scss';
import { ReactComponent as HeartImg } from 'assets/images/icon_heart.svg';
import { ReactComponent as HeartOnImg } from 'assets/images/icon_heart_on.svg';
import { ReactComponent as ShareImg } from 'assets/images/icon_share.svg';
import { CustomSwalToast } from 'util/CustomSwalToast/CustomSwalToast';

const InteractBtns = () => {
    const cx = classNames.bind(styles);
    const btnRef = useRef();
    const [ isLiked, setIsLiked ] = useState(false);
    const [ isViewLayer, setIsViewLayer ] = useState(false);

    const handleLike = () => {
        CustomSwalToast(isLiked? '찜 해제되었습니다.' : '찜 등록되었습니다.')
        setIsLiked(!isLiked);
    };
    const handleShare = () => {
        setIsViewLayer(!isViewLayer);
    };

    useEffect(() => {
        const closeShare = (e) => {
            if(btnRef.current && !btnRef.current.contains(e.target)){
                console.log('닫기')
                setIsViewLayer(false);
            };
        };
        document.addEventListener("click", closeShare);
    },[]);

    return (
        <div className={styles.interactBtns}>
            <button 
                className={styles.btn}
                type="button"
                onClick={() => {
                    handleLike();
                }}
            >
                {isLiked?  <HeartOnImg /> : <HeartImg />}
                <span>찜</span>
            </button>
            <div className={styles.wrap}>
                <div 
                    className={cx('layer', {'active' : isViewLayer})}
                >
                    <button className={styles.faceBook} type="button">faceBook</button>
                    <button className={styles.twitter} type="button">Twitter</button>
                    <button className={styles.kakao} type="button">KakaoTalk</button>
                    <button className={styles.url} type="button">Url</button>
                </div>
                <button
                    className={styles.btn}
                    type="button"
                    ref={btnRef}
                    onClick={() => {
                        handleShare();
                    }}
                >
                    <ShareImg />
                    <span>공유</span>
                </button>
            </div>
        </div>
    );
};

export default (InteractBtns);