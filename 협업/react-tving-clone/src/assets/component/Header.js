import React from "react";
import { Link, NavLink } from "react-router-dom";

import HeaderStyle from "./Header.module.scss";

import SearchBtn from "./SearchBtn";
import MyBtn from "./MyBtn";

const activeStyle = {
    fontWeight: 'bold', 
}


const Header = () => {
    const menuItems = [
        { id:1, label: '시리즈', path: '/A' },
        { id:2, label: '영화', path: '/B' },
        { id:3, label: '라이브', path: '/C' },
        { id:4, label: '파라마운트+', path: '/D' },
    ];
    
    return (
        <header className={HeaderStyle.Header}>
            <Link to="/" className={HeaderStyle.logo}>
                <img src="https://image.tving.com/ntgs/operation/logo/2023/09/18/1695032536_1.svg" alt="Logo" />
            </Link>
            <nav className={HeaderStyle.menu}>
                <ul>
                    {menuItems.map((menuItem) => (
                        <li key={menuItem.id}>
                            <NavLink to={menuItem.path} style={({isActive}) => {return isActive ? activeStyle : undefined;}}>
                                {menuItem.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <aside>
                <SearchBtn />
                <MyBtn />
            </aside>
        </header>
    );
}


export default Header;
