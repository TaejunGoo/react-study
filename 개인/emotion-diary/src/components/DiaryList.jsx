import React, { useState } from 'react';
import ControlMenu from './ControlMenu';
import MyButton from './MyButton';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
// import { DiaryStateContext } from '../App';

const sortOptionList = [
    { value: 'latest', name: '최신순' },
    { value: 'oldest', name: '오래된 순' },
];
const filterOptionList = [
    { value: 'all', name: '전부 다' },
    { value: 'good', name: '좋은 감정만' },
    { value: 'bad', name: '안좋은 감정만' },
];

export default function DiaryList({ diaryList }) {
    const [sortType, setSortType] = useState('latest');
    const [filter, setFilter] = useState('all');
    // const { data } = useContext(DiaryStateContext);
    const navigate = useNavigate();

    const getProcessedDiaryList = () => {
        const filterCallback = (item) => {
            if (filter === 'good') {
                return parseInt(item.emotion) <= 3;
            } else {
                return parseInt(item.emotion) > 3;
            }
        };
        // sort의 compare 함수
        // 리턴값 > 0 -> a가 앞에
        // 리턴값 < 0 -> b가 앞에
        const compare = (a, b) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date); // 2 - 1 = 1
            } else {
                return parseInt(a.date) - parseInt(b.date); // 1 - 2 = -1
            }
        };
        const copyList = JSON.parse(JSON.stringify(diaryList)); // sort 원본배열 변경하므로 복사
        const filteredList =
            filter === 'all'
                ? copyList
                : copyList.filter((it) => filterCallback(it));
        const sortedList = filteredList.sort(compare);
        return sortedList;
    };

    return (
        <>
            <div className='DiaryList'>
                <div className='menu_wrapper'>
                    <ControlMenu
                        value={sortType}
                        onChange={setSortType}
                        optionList={sortOptionList}
                    />
                    <ControlMenu
                        value={filter}
                        onChange={setFilter}
                        optionList={filterOptionList}
                    />
                    <MyButton
                        text={'새 일기쓰기'}
                        type={'positive'}
                        onClick={() => {
                            navigate('/New');
                        }}
                    />
                </div>
                <ul className='DiaryList'>
                    {getProcessedDiaryList().map((item) => (
                        <DiaryItem key={item.id} {...item} />
                    ))}
                </ul>
            </div>
        </>
    );
}
DiaryList.defaultProps = {
    diaryList: [],
};
