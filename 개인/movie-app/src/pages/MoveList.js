import {useState} from 'react';

import ListItem from './../component/ListItem';
import Toggle from './../component/Toggle';

const moveListSortType = [
    {value: '최신 개봉순',},
    {value: '과거 개봉순',},
    {value: '최고 별점순',},
    {value: '최저 별점순',}
]

const MoveList = ({dataList}) => {
    const [isBig, setIsBig] = useState(false);
    
    return (
        <div className='MoveList'>
            <div className='options'>
                <div className='options_left'>
                    <div className='Select'>
                    <select>
                        <option>최신 개봉순</option>
                        <option>과거 개봉순</option>
                        <option>최고 별점순</option>
                        <option>최저 별점순</option>
                    </select>
                    </div>
                </div>
                <div className='options_right'>
                    <Toggle toggleText={'하나씩보기'} isBig={isBig} onChange={setIsBig}/>
                </div>
            </div>
            <ul className={['MoveList_list', isBig?'MoveList_list-big':''].join(' ')}>
            {
                dataList.map((el,idx) => 
                <ListItem key={idx} {...el}/>
                )           
            }          
            </ul>
        </div>
    )
}

MoveList.defaultProps= {
    data: []
}

export default MoveList;