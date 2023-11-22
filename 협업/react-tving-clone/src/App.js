import {useEffect, useState} from 'react';
import Slide from './component/Slide';
import './assets/css/reset.scss'

import {itemList} from './utils/itemList';

function App(){
  const [moveList, setMoveList] = useState([]);
  
  useEffect(()=>{
    setMoveList(itemList);
  },[])

  return(
    <div className='App'>
      <Slide moveList={moveList}/>
    </div>
  )
}

export default App;