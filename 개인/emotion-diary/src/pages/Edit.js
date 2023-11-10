import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () =>{
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();    
    const id = searchParams.get('id');
    const mode = searchParams.get('mode');
    console.log("id:" + id);
    console.log("mode:" + mode);
    return (
        <div>
            에뒷
            <button onClick={()=>{setSearchParams({who:'jihee'})}}>QS 바꾸기</button>
            <button onClick={()=>{ navigate('/home')}}>home으로 갈래</button>
            <button onClick={()=>{ navigate(-1)}}>뒤로가기</button>
        </div>
    )
}

export default Edit;