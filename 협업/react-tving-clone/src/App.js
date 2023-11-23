import React, {useEffect, useState} from 'react';
import MainBody from './component/MainBody';
import './assets/css/reset.scss'

import {itemList} from './utils/itemList';

export const MoveStateContext = React.createContext();

function App(){
  const [moveList, setMoveList] = useState(itemList);

  // useEffect(()=>{
  //   setMoveList(itemList);
  // },[])

  return(
    <MoveStateContext.Provider value={moveList}>
      <div className='App'>
        <MainBody/>
      </div>
    </MoveStateContext.Provider>
  
  )
}

export default App;