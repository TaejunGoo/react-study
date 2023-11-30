import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

import SearchBtn from "./SearchBtn/SearchBtn";
import MyMenu from "./MyMenu/MyMenu";

import ImgLogo from "../../assets/images/logo.svg"
import SearchLayer from "./SearchLayer/SearchLayer";

const activeStyle = {
    fontWeight: 'bold', 
}


const Header = () => {
    const menuItems = [
        { id:1, title: '시리즈', path: '/Series' },
        { id:2, title: '영화', path: '/Movie' },
        { id:3, title: '라이브', path: '/Live' },
        { id:4, title: '파라마운트+', path: '/Paramount' },
    ];

    const [isViewLayer, setIsViewLayer] = useState(false);
    const toggleSearchLayer = ()=>{
        setIsViewLayer(!isViewLayer);
    }
    
    return (
        <>
            <header className={styles.Header}>
                <Link to="/" className={styles.logo}>
                    <div>
                        <img src={ImgLogo} alt="Logo" />
                    </div>
                </Link>
                <nav className={styles.menu}>
                    <ul>
                        {menuItems.map((menuItem) => (
                            <li key={menuItem.id}>
                                <NavLink to={menuItem.path} style={({isActive}) => {return isActive ? activeStyle : undefined;}} >
                                    {menuItem.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <aside>
                    <SearchBtn onClickToggle={toggleSearchLayer} isViewLayer={isViewLayer} />
                    <MyMenu />
                </aside>
            </header>
            
            {isViewLayer && <SearchLayer />}
        </>
    );
}


export default Header;
