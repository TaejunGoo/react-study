import { useState } from 'react';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import EmotionItem from '../components/EmotionItem';

const New = () =>{
    const nowDay = new Date().toISOString().slice(0,10);
    const [today, setToday] = useState(nowDay);

    const [activeEmotion, setActiveEmotion] = useState(2);

    const changeActiveEmotion = (changeNum) => {
        setActiveEmotion(changeNum)
        console.log(changeNum);
    }
    
    const emotionInfo = [
        {
            value: 1,
            name : '완전 좋음',
        },
        {
            value: 2,
            name : '좋음',
        },
        {
            value: 3,
            name : '그럭저럭',
        },
        {
            value: 4,
            name : '나쁨',
        },
        {
            value: 5,
            name : '끔찍함',
        },
    ];


    return (
        <div>
            <MyHeader 
            headText={'새 일기쓰기'}
            leftChild={<MyButton text={'< 뒤로가기'}/>} />
            <div className='new_content'>
                <p>오늘은 언제인가요?</p>
                <input type='date' value={today} onChange={(e)=>{setToday(e.target.value)}}/>
            </div>
            <div className='new_content'>
                <p>오늘의 감정</p>
                <div className='emotion_list'>
                    {
                        emotionInfo.map((it, idx) => (
                            <EmotionItem key={idx} {...it} isChked = {idx===activeEmotion&&true} changeActiveEmotion={changeActiveEmotion}/>
                        ))
                    }
                </div>
            </div>
            <div className='new_content'>
                <p>오늘의 일기</p>
                <textarea placeholder={'오늘은 어땟나요?'}/>
            </div>
            <div className='control_box'>
                <MyButton text={'취소하기'}/>
                <MyButton type={'positive'} text={'작성완료'}/>
            </div>
        </div>
    )
}

export default New;