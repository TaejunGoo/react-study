import React from 'react';
import {Link} from 'react-router-dom';
import styles from './MyMenu.module.scss';

import defaultProfileImg from 'assets/images/profile_default.webp';

const MyMenu = ({profile}) => {
    const userName = profile.name;
    const profileImg = ['undifined', 'null', ''].includes(profile.img)? defaultProfileImg : profile.img;

    return (
        <div className={styles.myMenu}>
            <div className={styles.wrapper}>
                <div className={styles.profile_img}>
                    <img src={profileImg} alt=""/>
                </div>
            </div>
            <div className={styles.cont}>
                <div className={styles.profile}>
                    <div className={styles.img}>
                        <img src={profileImg} alt=""/>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.name}>{userName}</p>
                        <button className={styles.change} type="button"><span>프로필 전환</span></button>
                    </div>
                </div>
                <hr />
                <ul className={styles.list}>
                    <li><Link to={'/'}>MY</Link></li>
                    <li><Link to={'/'}>이용권</Link></li>
                    <li><Link to={'/'}>쿠폰등록</Link></li>
                    <li><Link to={'/'}>고객센터</Link></li>
                    <li><Link to={'/'}>로그아웃</Link></li>
                </ul>
            </div>
        </div>
    );
};

MyMenu.defaultProps = {
    profile : {
        name : '',
        img : defaultProfileImg
    }
};

export default React.memo(MyMenu);