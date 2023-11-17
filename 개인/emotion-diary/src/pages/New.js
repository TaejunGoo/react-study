import { useEffect } from 'react';
import DiaryEditor from '../components/DiaryEditor';

const New = () =>{
    // 페이지 타이틀바꿔보기
    useEffect(()=>{
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML= `감정일기장 - 새일기 쓰기`;
    },[]);
    
    return (
        <div>
            <DiaryEditor/>
        </div>
    )
}

export default New;