import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import { DiaryStateContext } from '../App';
import { EmotionList } from '../util/EmotionList';
import { getStringDate } from '../util/date';

export default function Diary() {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `EMOTION DIARY - ${id}번 일기`;
    });

    const { id } = useParams();
    const diaryList = useContext(DiaryStateContext);
    const navigate = useNavigate();
    const [data, setData] = useState();
    useEffect(() => {
        if (diaryList.length >= 1) {
            const targetDiary = diaryList.find(
                (item) => parseInt(item.id) === parseInt(id)
            );
            if (targetDiary) {
                setData(targetDiary);
            } else {
                alert('없는 일기입니다');
                navigate('/', { replace: true });
            }
        }
    }, [id, diaryList, navigate]);

    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

    if (!data) {
        return <div className='DiaryPage'>로딩중입니다...</div>;
    } else {
        const currentEmotion = EmotionList.find(
            (item) => item.emotion_id === parseInt(data.emotion)
        );
        console.log(EmotionList);
        console.log(currentEmotion);
        return (
            <div className='DiaryPage'>
                <MyHeader
                    headText={`${getStringDate(new Date(data.date))} 기록`}
                    leftChild={
                        <MyButton
                            text={'뒤로가기'}
                            onClick={() => navigate(-1)}
                        />
                    }
                    rightChild={<MyButton text={'수정하기'} onClick={goEdit} />}
                />
                <section>
                    <h4>오늘의 감정</h4>
                    <div
                        className={`diary_img_wrapper diary_img_wrapper_${data.emotion}`}
                    >
                        <img src={currentEmotion.emotion_img} alt='' />
                        <div>{currentEmotion.emotion_descript}</div>
                    </div>
                </section>
                <section>
                    <h4>오늘의 일기</h4>
                    <div className='diary_content_wrapper'>
                        <p>{data.content}</p>
                    </div>
                </section>
            </div>
        );
    }
}
