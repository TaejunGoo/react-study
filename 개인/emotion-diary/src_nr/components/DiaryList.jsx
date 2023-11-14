import React, { useContext } from 'react';
import Selector from './Selector';
import MyButton from './MyButton';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { DiaryStateContext } from '../App';

export default function DiaryList() {
    const navigate = useNavigate();
    // const handleClick = () => navigate('/New');
    const { data } = useContext(DiaryStateContext);
    return (
        <>
            <div className='menu_wrapper'>
                <Selector optionList={['최신순', '오래된 순']} />
                <Selector
                    optionList={['전부다', '좋은감정만', '안좋은감정만']}
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
                {data.map((item) => (
                    <DiaryItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
}
