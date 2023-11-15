const New = () =>{
    const [activeEmotion, setActiveEmotion] = useState(2);
    console.log(activeEmotion);
    const changeActiveEmotion = (changeNum) => {
        setActiveEmotion(changeNum)
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
            leftChild={<MyButton text={'< 뒤로가기'} onClick={()=>{navigate(-1)}}/>} />
            <div>
                <section className='new_content'>
                    <h4>오늘은 언제인가요?</h4>
                    <div className="input-box">
                        <input className='input-date' 
                        type='date' 
                        value={today} 
                        onChange={(e)=>{setToday(e.target.value)}}/>                        
                    </div>
                </section>
                <section className='new_content'>
                    <h4>오늘의 감정</h4>
                    <div className='emotion_list'>
                        {
                            emotionInfo.map((it, idx) => (
                                <EmotionItem key={idx} {...it} isChked = {idx===activeEmotion&&true} changeActiveEmotion={changeActiveEmotion}/>
                            ))
                        }
                    </div>
                </section>
                <section className='new_content'>
                    <h4>오늘의 일기</h4>
                    <textarea placeholder={'오늘은 어땟나요?'}/>
                </section>
                <div className='control_box'>
                    <MyButton text={'취소하기'}/>
                    <MyButton type={'positive'} text={'작성완료'}/>
                </div>
            </div>
            
        </div>
    )
}

export default New;