import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';

const DiaryItem = ({id, emotion, content, date}) => {
    const navigate = useNavigate();
    return (
        <div className='DiaryItem'>
            <img src={process.env.PUBLIC_URL + `/assets/emotion${emotion}.png`} alt=''/>
            <p>{new Date(date).toLocaleDateString()}</p>
            <p>{content}</p>
            <MyButton type={'default'} text={'수정하기'} onClick={()=>{navigate('/Edit')}}/>
        </div>
    )
}

export default DiaryItem;