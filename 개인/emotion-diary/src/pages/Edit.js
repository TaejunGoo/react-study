import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { DiaryStateContext} from './../App';

import DiaryEditor from '../components/DiaryEditor';

const Edit = () => {
    const [originData, setOriginData] = useState();
    const navigate = useNavigate();
    const {id} = useParams();

    const diaryList = useContext(DiaryStateContext);

    //해당 리스트 꺼내오기
    useEffect(()=>{
        if(diaryList.length >= 1){
            // 페이지 이동한 id의 정보 빼오기
            const targetDiary = diaryList.find((it)=>parseInt(it.id)===parseInt(id));
            // 잘못접근하면 false 뱉음
            if(targetDiary){
                setOriginData(targetDiary);
            }else{
                alert('없는 일기입니다.')
                navigate('/',{replace:true}) //잘못접근 했을때 홈으로가고, 뒤로가기 못하도록                
            }
        }
    },[id,diaryList,navigate])

    return (
        <div>
            {originData && <DiaryEditor isEdit={true} originData={originData}/>}
        </div>
    )
}

export default Edit;