import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { DiaryStateContext } from './../App';

import MyHeader from './../components/MyHeader';
import MyButton from '../components/MyButton';

import { getStringDate } from './../util/date';

const Diary = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

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
  }, [id, diaryList]);

  // 이건 diaryemotion에 있는 데이터니까 그걸 util에 옮겨서사용
  // 이렇게 추가 선언 해주지 않아도 된다
  const emotionResult = (data) => {
    let emotionTxt = '';
    switch(parseInt(data.emotion)){
      case 1 :
        emotionTxt = '아주 좋음';
        break;
      case 2 :
        emotionTxt = '좋음';
        break;
      case 3 :
        emotionTxt = '그럭 저럭';
        break;
      case 4 :
        emotionTxt = '나쁨';
        break;
      case 5 :
        emotionTxt = '아주 나쁨';
        break;
      default: 
        return;
    }
    return emotionTxt;
  }

  if (!data) {
    return <div className='DiaryPage'>로딩중입니다...</div>;
  } else {
    return (
      <div>
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
        <div>
          <div>
            <h4>오늘의 감정</h4>
            <div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/emotion${data.emotion}.png`} alt=''/>
              </div>
              <span>{emotionResult(data)}</span>
            </div>
          </div>
          <div>
            <h4>오늘의 일기</h4>
            <div>
              <p>{data.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Diary;
