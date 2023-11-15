import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';

const DiaryItem = ({id, emotion, content, date}) => {
    const navigate = useNavigate();
    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";

    const strDate = new Date(parseInt(date)).toLocaleDateString()

    // 클릭한 해당 아이템 상세 페이지로 이동해야하니까
    const goDetail = () => {
        navigate(`/diary/${id}`)
    }

    const goEdit = () => {
        navigate(`/edit/${id}`)
    }

    return (
        <div className='DiaryItem'>
            <div className={['emotion_img_wrapper', `emotion_img_wrapper_${emotion}`].join(" ")} onClick={goDetail}>
                <img src={process.env.PUBLIC_URL + `/assets/emotion${emotion}.png`} alt=''/>
            </div>
            <div className='info_wrapper' onClick={goDetail}>
                <p className='diary_date'>{strDate}</p>
                <p className='diary_content_preview'>{content.slice(0,25)}</p>
            </div>
            <div className='btn_wrapper'>
               <MyButton type={'default'} text={'수정하기'} onClick={goEdit}/>
            </div>
        </div>
    )
}

export default DiaryItem;