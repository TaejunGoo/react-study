import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { throttle } from "lodash";

import styles from "./Header.module.scss";

import SearchBtn from "./SearchBtn/SearchBtn";
import MyMenu from "./MyMenu/MyMenu";

import ImgLogo from "../../assets/images/logo.svg"
import SearchLayer from "./SearchLayer/SearchLayer";


const activeStyle = {
    fontWeight: 'bold',
    color: '#fff'
}

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(()=>{
        const handleScroll =()=>{
            setScrollPosition(window.scrollY);
            console.log(window.scrollY);
        };

        const handleScrollThrottle = throttle(handleScroll, 200);

        window.addEventListener('scroll', handleScrollThrottle);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거 : 메모리 누수를 방지하고 성능을 최적화하기 위해서. 제거하지 않으면 불필요한 리소스가 남아있을 수 있다.
        return ()=>{
            window.removeEventListener('scroll', handleScrollThrottle);
        }
    },[]);

    const [isViewLayer, setIsViewLayer] = useState(false);

    const toggleSearchLayer = ()=>{
        setIsViewLayer(!isViewLayer);
    }

    const closeSearchLayer = ()=>{
        if(isViewLayer){
            setIsViewLayer(!isViewLayer);
        }
    }

    const menuItems = [
        { id:1, title: '시리즈', path: '/Series' },
        { id:2, title: '영화', path: '/Movie' },
        { id:3, title: '라이브', path: '/Live' },
        { id:4, title: '파라마운트+', path: '/Paramount' },
    ];
    
    return (
        <>
            <header className={[styles.Header, scrollPosition > 110 ? styles.fill : (scrollPosition > 1 ? styles.shadow : styles.top)].join(" ")} onClick={closeSearchLayer}>
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
