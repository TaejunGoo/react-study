import { Link } from "react-router-dom";
import styles from "./CopyrightBox.module.scss";

const CopyrightBox = () => {
    return (
        <div className={styles.copyrightBox}>
            <p>
            <span>대표이사 : 최주희</span>
            <span>
                <a
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1888801893&apv_perm_no="
                rel="noreferrer"
                target="_blank"
                >
                사업자정보확인
                </a>
            </span>
            <span>사업자등록번호 : 188-88-01893</span>
            <span>통신판매신고번호 : 2020-서울마포-3641호</span>
            </p>
            <p>
            <span>
                사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)
            </span>
            <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
            </p>
            <p>
            <span>고객센터 (평일 09시~17시/점심시간 13시~14시)</span>
            <span>
                <Link to={"/"}>1:1 게시판 문의</Link>
            </span>
            <span>대표메일 : tving@cj.net</span>
            <span>전화번호(ARS) : 1670-1525 (챗봇/채팅 상담 연결)</span>
            </p>
            <p>
            <span>
                ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780
            </span>
            <span>Mnet 고객센터(방송편성문의) : 1855-1631</span>
            </p>
        </div>
    );
}

export default CopyrightBox;