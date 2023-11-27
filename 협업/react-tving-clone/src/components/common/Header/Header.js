import { useState, useEffect, useCallback } from 'react' 
import { Link } from 'react-router-dom';
import { throttle } from 'lodash';
import classNames from "classnames/bind";
import styles from './Header.module.scss';

import Gnb from './Gnb/Gnb';
import MyMenu from './MyMenu/MyMenu';
import Searchbtn from './SearchBtn/SearchBtn';
import SearchLayer from './SearchLayer/SearchLayer';

import logoImg from 'assets/images/logo.svg';

const Header = () => {
    const cx = classNames.bind(styles);
    const [isTop, setIsTop] = useState(true);
    const [userProfile, setUserProfile] = useState({});
    const [isViewLayer, setIsViewLayer] = useState(false);

    useEffect(() => {
        async function getData(){
            try{
                let rawResponse = await fetch(process.env.PUBLIC_URL + '/assets/data/userProfile.json');
                let jsonResponse = await rawResponse.json();
                return jsonResponse;
            } catch(error){
                console.log('유저 프로필을 로드하지 못했습니다.');
                throw error;
            };
        };
        getData()
        .then(jsonResponse => {
            setUserProfile(jsonResponse);
        })
        .catch(error => {
            console.error('유저 프로필을 로드하는 중 에러가 발생했습니다:', error);
        });
    },[]);

    useEffect(() => {
        const handleScroll = throttle(() => {
            window.scrollY < 30 ? setIsTop(true) : setIsTop(false);
        }, 100);
        window.addEventListener('scroll', handleScroll);
    },[]);

    const handleLayer = useCallback(() => {
        setIsViewLayer(!isViewLayer);
    },[isViewLayer]);

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        isViewLayer? body.style.overflowY = "hidden" : body.style = "";
    },[isViewLayer]);


    return (
        <>
            <header className={cx('header', {'top' : isTop, 'onLayer' : isViewLayer})}>
                <Link to={'/'} className={styles.logo}>
                    <div className={styles.wrapper}>
                        <img src={logoImg} alt="티빙" />
                    </div>
                </Link>
                <Gnb />
                <aside>
                    <Searchbtn isViewLayer={isViewLayer} onClick={handleLayer}/>
                    <MyMenu profile={userProfile} />
                </aside>
            </header>
            {
                isViewLayer && <SearchLayer />
            }
        </>
    )
};

export default Header;