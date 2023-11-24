import { useEffect, useState } from 'react';
// import List from 'List';
// import bandList from 'assets/data/bandList.json';

// const dataList = [
//     {
//         bandName: '오늘의 티빙 TOP10',
//         items: [
//             {
//                 code: 'P001746797',
//                 title: '힘쎈여자 강남순',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1529/P001746797.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001747173',
//                 title: '무인도의 디바',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1340/P001747173.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001747179',
//                 title: '콩 심은 데 콩 나고 팥 심은 데 팥 난다',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0155/P001747179.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001747227',
//                 title: '장사천재 백사장2',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0115/P001747227.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001609758',
//                 title: '최강야구',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP1130/ko/20220602/P001609758.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001747226',
//                 title: '어쩌다 사장3',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231031/0255/P001747226.jpg',
//                 label: {},
//             },
//             {
//                 code: 'P001748083',
//                 title: '싱어게인3',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231026/1615/P001748083.jpg',
//                 label: {
//                     isOnly: true,
//                 },
//             },
//             {
//                 code: 'P001743591',
//                 title: '반짝이는 워터멜론',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP1160/ko/20231026/0713/P001743591.jpg',
//                 label: {
//                     isOnly: true,
//                 },
//             },
//             {
//                 code: 'P001748449',
//                 title: '완벽한 결혼의 정석',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1415/P001748449.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P000515167',
//                 title: '놀라운 토요일',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231028/1210/P000515167.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001747580',
//                 title: '뭉쳐야 찬다3',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1245/P001747580.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001748082',
//                 title: '초대형 노래방 서바이벌 VS',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231027/1525/P001748082.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P000643144',
//                 title: '유 퀴즈 온 더 블럭',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0505/P000643144.jpg',
//                 label: {
//                     isOnly: true,
//                 },
//             },
//             {
//                 code: 'P001748733',
//                 title: '스우파2 : 월드와이드로그',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231119/2255/P001748733.jpg',
//                 label: {
//                     isOriginal: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001748376',
//                 title: '낮에 뜨는 달',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231024/1010/P001748376.jpg',
//                 label: {},
//             },
//             {
//                 code: 'P001492081',
//                 title: '나는 SOLO',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231025/1510/P001492081.jpg',
//                 label: {},
//             },
//             {
//                 code: 'P001746510',
//                 title: '운수 오진 날',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231116/1320/P001746510.jpg',
//                 label: {
//                     isOriginal: true,
//                     isFree: true,
//                 },
//             },
//             {
//                 code: 'P001392765',
//                 title: '벌거벗은 세계사',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0130/P001392765.jpg',
//                 label: {
//                     isOnly: true,
//                 },
//             },
//             {
//                 code: 'P001742943',
//                 title: '짱구는못말려23',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0435/P001742943.jpg',
//                 label: {
//                     isDubbing: true,
//                 },
//             },
//             {
//                 code: 'P001559629',
//                 title: '톡파원 25시',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231024/1510/P001559629.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//         ],
//     },
//     {
//         bandName: '지금 방영중인 인기 콘텐츠',
//         items: [
//             {
//                 code: 'P001609758',
//                 title: '최강야구',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP1130/ko/20220602/P001609758.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001747227',
//                 title: '장사천재 백사장2',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0115/P001747227.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001748733',
//                 title: '스우파2 : 월드와이드로그',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231119/2255/P001748733.jpg',
//                 label: {
//                     isOriginal: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001747173',
//                 title: '무인도의 디바',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1340/P001747173.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001749002',
//                 title: '플레이, 플리',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231117/0905/P001749002.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001559629',
//                 title: '톡파원 25시',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231024/1510/P001559629.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001747580',
//                 title: '뭉쳐야 찬다3',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1245/P001747580.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001748376',
//                 title: '낮에 뜨는 달',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231024/1010/P001748376.jpg',
//                 label: {},
//             },
//             {
//                 code: 'P001748449',
//                 title: '완벽한 결혼의 정석',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1415/P001748449.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001746797',
//                 title: '힘쎈여자 강남순',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP1130/ko/20231026/0715/P001746797.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P000274709',
//                 title: '프리한19',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0200/P000274709.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001748082',
//                 title: '초대형 노래방 서바이벌 VS',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231027/1525/P001748082.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001746633',
//                 title: '소년 소녀 연애하다',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231117/0150/P001746633.jpg',
//                 label: {
//                     isOriginal: true,
//                 },
//             },
//             {
//                 code: 'P000218912',
//                 title: '아는 형님',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231028/1400/P000218912.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001743173',
//                 title: '용감한 형사들 3',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231027/1315/P001743173.jpg',
//                 label: {
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P000515167',
//                 title: '놀라운 토요일',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231028/1210/P000515167.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001747179',
//                 title: '콩 심은 데 콩 나고 팥 심은 데 팥 난다',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0155/P001747179.jpg',
//                 label: {
//                     isOnly: true,
//                     isNewEpisode: true,
//                 },
//             },
//             {
//                 code: 'P001746230',
//                 title: '도시어부5',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231026/1545/P001746230.jpg',
//                 label: {},
//             },
//             {
//                 code: 'P000643144',
//                 title: '유 퀴즈 온 더 블럭',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0505/P000643144.jpg',
//                 label: {
//                     isOnly: true,
//                 },
//             },
//             {
//                 code: 'P001748083',
//                 title: '싱어게인3',
//                 imageUrl:
//                     'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231026/1615/P001748083.jpg',
//                 label: {
//                     isOnly: true,
//                 },
//             },
//         ],
//     },
// ];

export function dataList() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setLoading(true);
        setError(undefined);
        fetch(`assets/data/bandList.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
                setProducts(data);
            })
            .catch((e) => setError('에러가 발생했음!'))
            .finally(() => setLoading(false));
        return () => {
            console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
        };
    }, []);

    return [loading, error, products];
}

export const getBandData = (bandName1) => {
    const selectedBand = dataList.find((item) => item.bandName === bandName1);
    return selectedBand ? selectedBand.items : [];
    // return dataList.filter((item) => item.bandName === bandName1);
};

// export const PopularList = (props) => {
//     // return <List />;
// };
