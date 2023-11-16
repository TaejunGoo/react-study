import React from 'react';
import MyButton from './MyButton';
import { useNavigate } from 'react-router-dom';
// import { DiaryStateContext } from '../App';

export default React.memo(function DiaryItem({ id, date, content, emotion }) {
    // console.log(content);
    // { ...item } 이렇게 받아와도 되지만 대신 갚 사용할 때 item.emotion 이런식으로 사용해야함.
    const navigate = useNavigate();

    const strDate = new Date(parseInt(date)).toLocaleDateString();

    const goDetail = () => {
        navigate(`/diary/${id}`);
    };
    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

    return (
        <>
            <li className='DiaryItem'>
                <span
                    className={`emotion_img_wrapper emotion_img_wrapper_${emotion}`}
                >
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            `assets/emotion${emotion}.png`
                        }
                        alt={emotion.emotion_descript}
                    />
                </span>
                <div className='info_wrapper' onClick={goDetail}>
                    <div className='diary_date'>{strDate}</div>
                    <div className='diary_content_preview'>
                        {content}
                        {/* {content.slice(0, 25)} */}
                    </div>
                </div>
                <div className='btn_wrapper'>
                    <MyButton text={'수정하기'} onClick={goEdit} />
                </div>
            </li>
        </>
    );
});
