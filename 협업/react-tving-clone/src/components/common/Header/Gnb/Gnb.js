import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Gnb.module.scss';

const menuList = [
    {
        title: '시리즈',
        url : '/series'
    },
    {
        title: '영화',
        url : '/movie'
    },
    {
        title: '라이브',
        url : '/live'
    },
    {
        title: '파라마운트+',
        url : '/paramount'
    }
];

const Gnb = () => {
    return (
        <nav className={styles.gnb}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    {
                        menuList.map((menu) => {
                            return <Link to={menu.url} key={menu.url}>{menu.title}</Link>
                        })
                    }
                </li>
            </ul>
        </nav>
    );
};

export default React.memo(Gnb);