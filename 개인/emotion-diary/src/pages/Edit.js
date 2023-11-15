import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { DiaryDispatchContext } from './../App';

import DiaryEditor from '../components/DiaryEditor';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const Edit = () =>{
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const { onRemove } = useContext(DiaryDispatchContext);
    return (
        <div>
            <MyHeader 
            headText={'일기 수정하기'}
            leftChild={<MyButton text={'< 뒤로가기'} onClick={()=>{navigate(-1)}}/>}
            rightChild={<MyButton type={'negative'} text={'삭제하기'} onClick={onRemove(id)}/>}
            />
            <DiaryEditor/>
        </div>
    )
}

export default Edit;