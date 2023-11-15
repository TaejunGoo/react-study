import React from 'react';

export default function EmotionItem({
    emotion_id,
    emotion_img,
    emotion_descript,
    onClick,
    isSelected,
}) {
    // const emotionIndex = emotion.findIndex(
    //     (item) => item.emotion_descript === text
    // );
    // const handleClickEmotion = () => {
    //     const updateEmotion = emotion.map((item) => ({
    //         ...item,
    //         isSelected: item.emotion_descript === text,
    //     }));
    //     setEmotion(updateEmotion);
    // };
    // const isActive = emotion[emotionIndex].isSelected;

    return (
        <div
            onClick={() => onClick(emotion_id)}
            className={`EmotionItem ${
                isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`
            }`}
        >
            <img src={emotion_img} alt='' />
            <span>{emotion_descript}</span>
        </div>
        // <div
        //     className={`EmotionItem EmotionItem${
        //         isActive ? `_on_${emotion[emotionIndex].emotion_id}` : `_off`
        //     }`}
        //     onClick={handleClickEmotion}
        // >
        //     <img src={emotion[emotionIndex].emotion_img} alt='' />
        //     <span>{text}</span>
        // </div>
    );
}
