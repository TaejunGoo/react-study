import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { DiaryStateContext } from './../App';

import MyHeader from './../components/MyHeader';
import MyButton from '../components/MyButton';

import { getStringDate } from './../util/date';
import {emotionList} from './../util/emotion';

const Diary = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);

  // 페이지 타이틀바꿔보기
  useEffect(()=>{
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML= `감정일기장 ${id}번 일기`
  },[]);

  useEffect(() => {
    if (diaryList.length >= 1) {
      // 페이지 이동한 id의 정보 빼오기
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      // 잘못접근하면 false 뱉음
      if (targetDiary) {
        // 일기있움
        setData(targetDiary);
      } else {
        //일기가 없음
        alert('없는 일기입니다.');
        navigate('/', { replace: true }); //잘못접근 했을때 홈으로가고, 뒤로가기 못하도록
      }     
    }
  }, [id, diaryList, navigate]);

  if (!data) {
    return <div className='DiaryPage'>로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find((it)=>parseInt(it.emotion_id) === parseInt(data.emotion));
    return (
      <div className='DiaryPage'>
        <MyHeader
          headText={`${getStringDate(new Date(parseInt(data.date)))}의 기록`}
          leftChild={
            <MyButton
              text={'< 뒤로가기'}
              onClick={() => {
                navigate(-1);
              }}
            />
          }
          rightChild={<MyButton text={'수정하기'} onClick={() => navigate(`/edit/${data.id}`)} />}
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div className={['diary_img_wrapper',`diary_img_wrapper_${curEmotionData.emotion_id}`].join(' ')}>
              <img src={curEmotionData.emotion_img} alt=''/>
              <span className='emotion_descript'>{curEmotionData.emotion_descript}</span>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className='diary_content_wrapper'>
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
