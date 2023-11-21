import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MoveStateContext } from '../App';

const Detail = () => {    
    const data = useContext(MoveStateContext);    
    const navigate = useNavigate();
    const [dataList, setDataList] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        if(data.length>1){
            const findItem = data.find((el)=> parseInt(el.id) === parseInt(id));
            if(findItem){
                setDataList(findItem);
            }else{
                alert('잘못된 접근입니다.');
                navigate('/',{replace:true})
            }
        }       
    },[data, id, navigate])

    return (
        <div className='Detail'>
            
        </div>
    )
}

export default Detail;