import { useParams } from 'react-router-dom';

const Diary = () =>{
    const {id} = useParams();
    console.log(id);

    return (
        <div>
            다이어뤼
        </div>
    )
}

export default Diary;