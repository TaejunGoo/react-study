import { useRef, useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { DiaryDispatchContext } from './../App';

import MyButton from './MyButton';
import MyHeader from './MyHeader';
import EmotionItem from './EmotionItem';

import {getStringDate} from './../util/date';
import {emotionList} from './../util/emotion';

const DiaryEditor = ({isEdit, originData}) => {
    const contentRef = useRef();
    const [emotion, setEmotion] = useState(3);
    const [content, setContent] = useState('');
    const [date, setDate] = useState(getStringDate(new Date()));

    const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

    // 상태 변화 함수만 실행되기때문에 요정도만 해두됨
    const handleClickEmote = useCallback((emotion) => {
        setEmotion(emotion)
    }, [])

    const navigate = useNavigate();
    
    const handleSubmit = () => {
        if(content.length<1){
            contentRef.current.focus();
            return;
        }

        if(window.confirm(isEdit? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?")){
            if(isEdit){
                onEdit(originData.id,date,content,emotion) 
            }else{
                onCreate(date, content, emotion); 
            }
        }
      
        navigate('/',{replace:true})  //replace:true 일기작성하는데 못오게막음. 그리구 홈으로.. '/'
    }

    const handleRemove = () => {
        if (window.confirm('정말 삭제 하시겠습니까?')) {
            onRemove(originData.id);
            navigate('/',{replace:true}) 
        }
    }

    useEffect(()=>{
        if(isEdit){
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setEmotion(originData.emotion);
            setContent(originData.content);
        }
    },[isEdit, originData])

    return (
        <div className='DiaryEditor'>                
            <MyHeader 
            headText={isEdit? '일기 수정하기' : '새 일기쓰기'}
            leftChild={<MyButton text={'< 뒤로가기'} onClick={()=>{navigate(-1)}}/>} 
            rightChild={
                isEdit && (
                <MyButton 
                type={'negative'} 
                text={'삭제 하기'} 
                onClick={handleRemove}/>
                )
            }
            />
            <div>
                <section className='new_content'>
                    <h4>오늘은 언제인가요?</h4>
                    <div className="input_box">
                        <input className='input_date' 
                        type='date' 
                        value={date} 
                        onChange={(e)=>{setDate(e.target.value)}}/>                        
                    </div>
                </section>
                <section className='new_content'>
                    <h4>오늘의 감정</h4>
                    <div className="input_box emotion_list_wrapper">
                        {
                            emotionList.map((it)=>
                                <EmotionItem key={it.emotion_id} {...it} 
                                onClick={handleClickEmote}
                                isSelected={it.emotion_id===emotion}/>   
                            )
                        }
                    </div>
                </section>
                <section className='new_content'>
                    <h4>오늘의 일기</h4>
                    <div className="input_box text_wrapper">
                        <textarea placeholder='오늘은 어땠나유?' value={content} ref={contentRef} onChange={(e)=>setContent(e.target.value)}></textarea>
                    </div>
                </section>
                <section>
                    <div className="control_box">
                        <MyButton text={'취소하기'} onClick={()=>navigate(-1)}/>
                        <MyButton type={'positive'} text={'작성완료'} onClick={handleSubmit}/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DiaryEditor;