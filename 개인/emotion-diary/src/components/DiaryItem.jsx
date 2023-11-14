import React, { useContext } from 'react';
import MyButton from './MyButton';
import { DiaryStateContext } from '../App';

export default function DiaryItem() {
    const { emotion } = useContext(DiaryStateContext);
    const { data } = useContext(DiaryStateContext);
    return (
        <>
            {/* console.log(data); */}
            {data.map((item) => (
                <li key={item.id} className='DiaryItem'>
                    <span className='emotion_img_wrapper'>
                        <img
                            src={emotion.emotion_img}
                            alt={emotion.emotion_descript}
                        />
                    </span>
                    <div className='info_wrapper'>
                        <p className='diary_date'>{data.date}</p>
                        <p className='diary_content_preview'>{data.text}</p>
                    </div>
                    <div className='btn_wrapper'>
                        <MyButton text={'수정하기'} />
                    </div>
                </li>
            ))}
        </>
    );
}
