import React from 'react';
import { useParams } from "react-router-dom";

import MainContainer from "components/common/Container/MainContainer/MainContainer";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import Episode from "components/Episode/Episode";

const episodeDetailList = [
    {
        "type": "movie",
        "fanYn": "N",
        "story": "최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련 학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘 아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…",
        "releaseDate": "20220622",
        "duration": 7820,
        "seasonMovieCode": "M000368212",
        "isDrm": true,
        "isParamount": true,
        "ko_cc_yn": false,
        "seasonCode": "M000368212",
        "thumbnail": "https://image.tving.com/ntgs/contents/CTC/caim/CAIM2100/ko/20230131/M000371639.jpg",
        "mobileThumbnail": "https://image.tving.com/ntgs/contents/CTC/caim/CAIM2400/com/20230131/M000371639.png",
        "logoImage": "https://image.tving.com/ntgs/contents/CTC/caim/CAIM1800/ko/20230131/M000371639.png",
        "programCode": "M000371639",
        "contentName": "탑건：매버릭",
        "directorsName": "조셉 코신스키",
        "actorsName": "톰 크루즈, 마일스 텔러, 제니퍼 코넬리, 존 햄, 글렌 포웰, 에드 해리스, 발 킬머, 루이스 풀먼",
        "channelName": "",
        "channelCode": "",
        "ageGrade": "12",
        "gradeCode": "CMMG0200",
        "isIndividualPurchase": false,
        "isFirstRelease": false,
        "isCinemaSame": false,
        "isEvent": false,
        "productYear": 2021,
        "genre": "액션",
        "categoryName1": "액션",
        "categoryName2": "액션",
        "categoryCode": "MG120",
        "genreCode": "MG120",
        "isSubtitle": false,
        "isDubbing": false,
        "isExclusive": false,
        "isOriginal": false,
        "broadInfo": "",
        "broadState": "",
        "broadEndDate": "",
        "saleStatus": 1650,
        "lastPlayTime": "",
        "openText": null
    },
    {
        "type": "program",
        "frequency": 1,
        "episodeSort": "1",
        "fanYn": "N",
        "story": "대한민국 최고의 외식 경영 전문가 백종원은 과연 해외에서도 성공적으로 밥장사를 해나갈 수 있을까? 한식 불모지에서 직접 창업부터 운영까지 나서는 백종원의 ′본격 본업 등판′ 그 두 번째 도전기!",
        "duration": 5471,
        "broadcastDate": "20231029",
        "mobileThumbnail": "https://image.tving.com/ntgs/contents/CTC/caip/CAIP0500/ko/20231030/0115/P001747227.jpg",
        "seasonPgmNo": "2",
        "seasonPgmCode": "P001706762",
        "isDrm": false,
        "isParamount": false,
        "ko_cc_yn": false,
        "seasonCode": "P001706762",
        "thumbnail": "https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0115/P001747227.jpg",
        "logoImage": "https://image.tving.com/ntgs/contents/CTC/caip/CAIP1800/ko/20231030/0115/P001747227.png",
        "programCode": "P001747227",
        "contentName": "장사천재 백사장2",
        "directorsName": "이우형",
        "actorsName": "백종원, 이장우, 존박, 유리(소녀시대), 이규형",
        "channelName": "tvN",
        "channelCode": "C00551",
        "ageGrade": "15",
        "gradeCode": "CPTG0400",
        "isIndividualPurchase": false,
        "isFirstRelease": false,
        "isCinemaSame": false,
        "isEvent": false,
        "productYear": 2023,
        "genre": "예능",
        "categoryName1": "예능",
        "categoryName2": "버라이어티",
        "categoryCode": "PCD",
        "genreCode": "PCD005",
        "isSubtitle": false,
        "isDubbing": false,
        "isExclusive": true,
        "isOriginal": false,
        "broadInfo": "일 오후7:40",
        "broadState": "CPBS0200",
        "broadEndDate": "",
        "saleStatus": 2200,
        "lastPlayTime": "",
        "openText": null
    },
    {
        "type": "program",
        "frequency": 4,
        "episodeSort": "1",
        "fanYn": "N",
        "story": "이광수, 김우빈, 도경수, 김기방의 코믹 다큐 찐친들의 밭캉스",
        "duration": 5313,
        "broadcastDate": "20231013",
        "mobileThumbnail": "https://image.tving.com/ntgs/contents/CTC/caip/CAIP0400/ko/20231030/0155/P001747179.jpg",
        "seasonPgmNo": "0",
        "seasonPgmCode": "",
        "isDrm": false,
        "isParamount": false,
        "ko_cc_yn": false,
        "seasonCode": "",
        "thumbnail": "https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0155/P001747179.jpg",
        "logoImage": "https://image.tving.com/ntgs/contents/CTC/caip/CAIP1800/ko/20231030/0155/P001747179.png",
        "programCode": "P001747179",
        "contentName": "콩 심은 데 콩 나고 팥 심은 데 팥 난다",
        "directorsName": "나영석, 하무성, 변수민",
        "actorsName": "이광수, 김우빈, 디오(D.O), 김기방",
        "channelName": "tvN",
        "channelCode": "C00551",
        "ageGrade": "15",
        "gradeCode": "CPTG0400",
        "isIndividualPurchase": false,
        "isFirstRelease": false,
        "isCinemaSame": false,
        "isEvent": false,
        "productYear": 2023,
        "genre": "예능",
        "categoryName1": "예능",
        "categoryName2": "여행",
        "categoryCode": "PCD",
        "genreCode": "PCD003",
        "isSubtitle": false,
        "isDubbing": false,
        "isExclusive": true,
        "isOriginal": false,
        "broadInfo": "금 오후8:40",
        "broadState": "CPBS0200",
        "broadEndDate": "",
        "saleStatus": 2200,
        "lastPlayTime": 3000,
        "openText": null
      }
];
export const ContentContext = React.createContext();

const Home = () => {
    const { id } = useParams();
    const content = episodeDetailList.find((item) => {
        return item.programCode === id;
    });

    return (
        <>
            <Header />
            <MainContainer>
                <ContentContext.Provider value={content}>
                    <Episode />
                </ContentContext.Provider>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Home;