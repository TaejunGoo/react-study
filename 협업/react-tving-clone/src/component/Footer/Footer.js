import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import SnsBtn from "./SnsBtn/SnsBtn";
import SelectBrand from "./SelectBrand/SelectBrand";
const Footer = () =>{
    return(
        <footer className={styles.Footer}>
            <div className={styles.footer_contents}>
                <nav className={styles.footer_util}>
                    <ul className={styles.footer_nav}>
                        <li>
                            <Link to="/">고객센터</Link>
                        </li>
                        <li>
                            <Link to="/">이용약관</Link>
                        </li>
                        <li>
                            <Link to="/">개인정보처리방침</Link>
                        </li>
                        <li>
                            <Link to="/">청소년 보호정책</Link>
                        </li>
                        <li>
                            <Link to="/">법적고지</Link>
                        </li>
                        <li>
                            <Link to="/">이벤트</Link>
                        </li>
                        <li>
                            <Link to="/">인재채용</Link>
                        </li>
                    </ul>
                    <div className={styles.foot_select_wrap}>
                        {/* <div>브랜드 바로가기 +</div>
                        <div>|</div>
                        <div>그룹 계열사 바로가기 +</div> */}
                        <SelectBrand />
                    </div>
                </nav>
                <div className={styles.copyright_box}>
                    <p><span>대표이사 : 최주희</span><span><Link to="/">사업자정보확인</Link></span><span>사업자등록번호 : 188-88-01893</span><span>통신판매신고번호 : 2020-서울마포-3641호</span></p>
                    <p><span>사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)</span><span>호스팅사업자 : 씨제이올리브네트웍스(주)</span></p>
                    <p><span>고객센터 (평일 09시~17시/점심시간 13시~14시)</span><span class="btn_inquiry"><Link to="/">1:1 게시판 문의</Link></span><span>대표메일 : tving@cj.net</span><span>전화번호(ARS) : 1670-1525 (챗봇/채팅 상담 연결)</span></p>
                    <p><span>ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780</span><span>Mnet 고객센터(방송편성문의) : 1855-1631</span></p>
                </div>
                <div className={styles.sns_wrap}>
                    <SnsBtn type="youtube" />
                    <SnsBtn type="instagram" />
                    <SnsBtn type="twitter" />
                    <SnsBtn type="facebook" />
                </div>
                <p className={styles.copyright}>Copyright © 주식회사 티빙 All right reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;