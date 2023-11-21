import {useState, useContext, useEffect} from 'react';

import ListItem from './../component/ListItem';
import Toggle from './../component/Toggle';
import Select from './../component/Select';

import { MoveStateContext } from '../App';

const moveListSortType = [
    {name: '최신 개봉순', value: 'new'},
    {name: '과거 개봉순', value: 'old'},
    {name: '최고 평점순', value: 'high'},
    {name: '최저 평점순', value: 'low'}
]

const MoveList = () => {    
    const data = useContext(MoveStateContext);
    const [dataList, setDataList] = useState([]);
    const [isBig, setIsBig] = useState(false);
    const [moveListSort, SetMoveListSort] = useState(moveListSortType[0].value);

    useEffect(()=>{
        setDataList(data)
    }, [data])

    const getMoveList = () => {
        const compare = (a,b) =>{
            if(moveListSort === 'new'){
                return parseInt(b.year) - parseInt(a.year)
            }else if(moveListSort === 'old'){
                return parseInt(a.year) - parseInt(b.year)
            }else if(moveListSort === 'high'){
                return parseInt(b.rating) - parseInt(a.rating)
            }else if(moveListSort === 'low'){
                return parseInt(a.rating) - parseInt(b.rating)
            }
        }

        const copyList = JSON.parse(JSON.stringify(dataList));
        const sortedList = copyList.sort(compare);
        return sortedList;
    }
    
    return (
        <div className='MoveList'>
            <div className='options'>
                <div className='options_left'>
                    <Select optionList={moveListSortType} sortChange={SetMoveListSort} value={moveListSort}/>
                </div>
                <div className='options_right'>
                    <Toggle toggleText={'하나씩보기'} isBig={isBig} onChange={setIsBig}/>
                </div>
            </div>
            <ul className={['MoveList_list', isBig?'MoveList_list-big':''].join(' ')}>
            {
                getMoveList().map((el,idx) => 
                <ListItem key={idx} {...el}/>
                )           
            }          
            </ul>
        </div>
    )
}

export default MoveList;