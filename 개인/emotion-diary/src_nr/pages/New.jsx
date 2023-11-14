import React, { useState, useContext } from 'react';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import EmotionItem from '../components/EmotionItem';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext, DiaryStateContext } from '../App';

export default function New() {
    const navigate = useNavigate();
    const { emotion, setEmotion } = useContext(DiaryStateContext);
    const [state, setState] = useState({
        date: new Date().getTime(),
        emotion: emotion,
        content: '',
    });

    const { onCreate } = useContext(DiaryDispatchContext);

    const handleChangeDate = (e) => {
        setState((prev) => ({
            ...prev,
            date: new Date(e.target.value).getTime(),
        }));
    };
    const handleChangeText = (e) => {
        setState((prev) => ({
            ...prev,
            content: e.target.value,
        }));
    };

    const handleSubmit = () => {
        onCreate({
            date: state.date,
            emotion: state.emotion,
            content: state.content,
        });

        // const updateEmotion = emotion.map((item) => ({
        //     ...item,
        //     isSelected: false,
        // }));
        // setEmotion(updateEmotion);
        // setState(() => ({
        //     date: new Date().getTime(),
        //     emotion: emotion,
        //     content: '',
        // }));
        // console.log(state.date, state.emotion, state.content);
        // navigate(-1);
    };
    return (
        <div className='DiaryEditor'>
            <MyHeader
                headText={'2023년 11월'}
                leftChild={
                    <MyButton
                        text={'< 뒤로 가기'}
                        onClick={() => navigate(-1)}
                    />
                }
            />
            <section>
                <h4>오늘은 언제인가요?</h4>
                <div className='input_box'>
                    <input
                        type='date'
                        name=''
                        id=''
                        className='input_date'
                        onChange={handleChangeDate}
                    />
                </div>
            </section>
            <section>
                <h4>오늘의 감정</h4>
                <div className='input_box emotion_list_wrapper'>
                    {emotion.map((item) => (
                        <EmotionItem
                            key={item.dataId}
                            text={item.emotion_descript}
                        />
                    ))}
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div className='input_box text_wrapper'>
                    <textarea
                        name=''
                        id=''
                        cols='30'
                        rows='10'
                        placeholder='오늘은 어땠나요'
                        onChange={handleChangeText}
                    />
                </div>
            </section>
            <section>
                <div className='control_box'>
                    <MyButton text={'취소하기'} type={''} />
                    <MyButton
                        text={'작성완료'}
                        type={'POSITIVE'}
                        onClick={handleSubmit}
                    />
                </div>
            </section>
        </div>
    );
}
