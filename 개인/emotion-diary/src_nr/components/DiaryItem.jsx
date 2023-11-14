import React, { useContext, useEffect, useState } from 'react';
import MyButton from './MyButton';
import { DiaryStateContext } from '../App';

export default function DiaryItem({ item }) {
    const { emotion } = useContext(DiaryStateContext);
    const [selectedEmotionIndex, setSelectedEmotionIndex] = useState(0);

    useEffect(() => setSelectedEmotionIndex(item.id), []);

    const emotionIndex = emotion.findIndex((item) => item.isSelected);
    const { data } = useContext(DiaryStateContext);
    return (
        <>
            <li className='DiaryItem'>
                <span className='emotion_img_wrapper'>
                    <img
                        src={item.emotion[emotionIndex].emotion_img}
                        alt={item.emotion_descript}
                    />
                </span>
                <div className='info_wrapper'>
                    <p className='diary_date'>
                        {new Date(item.date).toLocaleDateString('ko-KR')}
                    </p>
                    <p className='diary_content_preview'>{item.content}</p>
                </div>
                <div className='btn_wrapper'>
                    <MyButton text={'수정하기'} />
                </div>
            </li>
        </>
    );
}
