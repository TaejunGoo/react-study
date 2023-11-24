import { Link } from "react-router-dom";
import MyMenuStyle from "./MyMenu.module.scss"
const MyMenu = () => {
    const MyMenuItems = [
        {id: 1, title : 'MY', path:'my/watch'},
        {id: 2, title : '이용권', path: '/membership/tving'},
        {id: 3, title : '쿠폰등록', path:'/'},
        {id: 4, title : '고객센터', path:'/help/notice'},
        {id: 5, title : '로그아웃', path:'/'},
    ];

    return(
        <div className={MyMenuStyle.MyMenu}>
            <div className={MyMenuStyle.MyMenuBtn}>
                <button></button>
            </div>
            <div className={MyMenuStyle.MyMenuContent}>
                <div className={MyMenuStyle.profile}>
                    <div className={MyMenuStyle.profile_img}>
                        <img src="https://image.tving.com/upload/profile/default.png/dims/resize/F_webp,100" alt="프로필사진" />
                    </div>
                    <div className={MyMenuStyle.profile_info}>
                        <p>티빙이</p>
                        <button>프로필 전환</button>
                    </div>
                </div>
                <hr />
                <ul>
                    {MyMenuItems.map((MyMenuItem)=>(
                        <li key={MyMenuItem.id}>
                            <Link to={MyMenuItem.path}>
                                {MyMenuItem.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}

export default MyMenu;