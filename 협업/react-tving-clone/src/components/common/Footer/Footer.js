import {Link} from 'react-router-dom';
import styles from './Footer.module.scss';
import DesignSelect from '../DesignSelect/DesignSelect';
import CopyrightBox from './CopyrightBox/CopyrightBox';
import SNSicons from './SNSicons/SNSicons';

const brandList = [
    { value: "https://tvn.cjenm.com/ko/", label: "TvN" },
    { value: "https://tvnsports.cjenm.com/ko/", label: "TvN SPORTS" },
    { value: "https://tvn.cjenm.com/ko/tvNstory-main/", label: "TvN STORY" },
    { value: "https://tvn.cjenm.com/ko/tvNDRAMA_main/", label: "TvN DRAMA" },
    { value: "https://tvn.cjenm.com/ko/tvNshow-main/", label: "TvN SHOW" },
    { value: "https://ocn.cjenm.com/ko/", label: "OCN" },
    { value: "https://zhtv.cjenm.com/ko/", label: "중화TV" },
    { value: "https://uxn.cjenm.com/ko/", label: "UXN" },
    { value: "https://catchon.cjenm.com/ko/", label: "CATCHON" },
    { value: "https://tooniverse.cjenm.com/ko/", label: "Tooniverse" },
];
const companyList = [
    { value: "https://www.cj.net/", label: "CJ주식회사" },
    { value: "https://www.cjenm.com/ko/", label: "CJ ENM 엔터테인먼트 부문" },
    { value: "https://www.cgv.co.kr/", label: "CJ CGV" },
    { value: "https://www.cj.co.kr/kr/index", label: "CJ제일제당(식품)" },
    { value: "https://www.cjfreshway.com/index.jsp", label: "CJ프레시웨이" },
    { value: "https://www.cjfoodville.co.kr/main.asp", label: "CJ푸드빌" },
    { value: "http://www.cjmd1.co.kr/main/main.aspx", label: "CJ엠디원" },
    { value: "https://www.cj.co.kr/kr/about/business/bio", label: "CJ제일제당(바이오)" },
    { value: "https://display.cjonstyle.com/p/homeTab/main?hmtabMenuId=003147&rPIC=homeonstyle", label: "CJ ENM 커머스부문" },
    { value: "https://www.cjlogistics.com/ko/main", label: "CJ대한통운" },
    { value: "https://www.cjtelenix.com/intro.asp", label: "CJ텔레닉스" },
    { value: "https://www.oliveyoung.co.kr/store/main/main.do?oy=0", label: "CJ올리브영" },
    { value: "http://www.cjenc.co.kr/kr/Default.asp", label: "CJ대한통운(건설)" },
    { value: "https://www.cjolivenetworks.co.kr/", label: "CJ올리브네트웍스" },
];

const Footer = () => {
    const handleSelect = (e) => {
        const url = e.value;
        window.open(url);
    };


    return (
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <nav className={styles.util}>
            <ul className={styles.linkList}>
              <li>
                <Link to={"/"}>고객센터</Link>
              </li>
              <li>
                <Link to={"/"}>이용약관</Link>
              </li>
              <li>
                <Link className={styles.bold} to={"/"}>
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link to={"/"}>청소년 보호정책</Link>
              </li>
              <li>
                <Link to={"/"}>법적고지</Link>
              </li>
              <li>
                <Link to={"/"}>이벤트</Link>
              </li>
              <li>
                <Link to={"/"}>인재채용</Link>
              </li>
            </ul>
            <div className={styles.selWrapper}>
              <div className={styles.sel}>
                <DesignSelect
                  options={brandList}
                  placeholder={"브랜드 바로가기"}
                  menuPlacement={"top"}
                  onChange={handleSelect}
                  isChangeable={false}
                />
              </div>
              <div className={styles.sel}>
                <div className={styles.border}>|</div>
                <DesignSelect
                  options={companyList}
                  placeholder={"그룹 계열사 바로가기"}
                  menuPlacement={"top"}
                  onChange={handleSelect}
                  isChangeable={false}
                />
              </div>
            </div>
          </nav>
          <CopyrightBox />
          <SNSicons />
          <p className={styles.copyright}>Copyright © 주식회사 티빙 All right reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;