import React, { useContext } from 'react';
import { DiaryStateContext } from '../App';

export default function EmotionItem({ text }) {
    const { emotion, setEmotion } = useContext(DiaryStateContext);
    const emotionIndex = emotion.findIndex(
        (item) => item.emotion_descript === text
    );
    const handleClickEmotion = () => {
        const updateEmotion = emotion.map((item) => ({
            ...item,
            isSelected: item.emotion_descript === text,
        }));
        setEmotion(updateEmotion);
    };
    const isActive = emotion[emotionIndex].isSelected;
    return (
        <div
            className={`EmotionItem EmotionItem${
                isActive ? `_on_${emotion[emotionIndex].emotion_id}` : `_off`
            }`}
            onClick={handleClickEmotion}
        >
            <img src={emotion[emotionIndex].emotion_img} alt='' />
            <span>{text}</span>
        </div>
    );
}
